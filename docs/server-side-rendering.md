# Server side rendering van blokken

Sinds [PR #104](https://github.com/yardinternet/plugin-yard-gutenberg/pull/104) rendert
elk blok zijn front-end markup in `render.php` in plaats van in `save.js`. `save.js` is
weg: blokken zonder inner blocks laten `save` weg (default `() => null`), parent-blokken
zetten `save: () => <InnerBlocks.Content />` inline in `index.js`, en `block.json` krijgt
`"render": "file:./render.php"`. Alleen `facetwp` valt erbuiten:
dat blok heeft geen eigen save-markup.

Impact per punt: **hoog** / **middel** / **laag**.

## Voordelen

- **hoog — Blade-componenten werken.** De theme's `<x-block-yard-*>` componenten worden
  alleen gevuld als het blok in PHP rendert. Dit was de reden voor de PR; zonder SSR
  blijft de slot leeg. Geen workaround.
- **hoog — Markup fixen zonder migratie.** Opmaak, classes en a11y-attributen aanpassen
  werkt direct op alle bestaande posts. Met `save.js` zit de oude HTML in de database:
  elke wijziging vraagt een deprecation en levert anders block-validatiefouten op.
  Dit is waar de meeste tijd in ging, en het is nu weg.
- **middel — PHP-context beschikbaar.** Translations, `get_block_wrapper_attributes()`,
  post-data en filters. Nuttig, maar geen van de blokken had het écht nodig — met
  uitzondering van de Blade-integratie hierboven.
- **laag — Kleinere post_content.** Alleen attributen in de database. Meetbaar, maar
  niemand had last van de oude omvang.
- **laag — Minder editor/front-end drift.** Eén bron voor front-end markup. In de
  praktijk liepen die twee zelden uit elkaar.

## Nadelen

- **middel — Migratiepad nodig.** Elk geconverteerd blok heeft een laatste
  `deprecated.js` met de oude save-markup, anders krijgen bestaande posts "onverwachte
  of ongeldige inhoud". Reëel werk, maar eenmalig en al gedaan; nieuwe blokken hebben
  het niet nodig.
- **middel — Legacy innerContent.** Oude posts bevatten nog de JS-wrapper, dus
  `$content` zou dubbel wrappen. Opgelost met één `render_block_data` filter,
  `Render::stripLegacySave()` ([src/Blocks/Render.php](../src/Blocks/Render.php)): herkent
  de oude wrapper aan zijn eigen `wp-block-yard-*` class en haalt hem weg voordat WP rendert.
  `render.php` hoeft er niets van te weten; nieuwe blokken evenmin.
- **laag — Twee talen.** Edit-weergave in JSX, front-end in PHP. Klinkt erger dan het
  is: dat was met `save.js` ook al twee implementaties (edit + save), nu is de tweede
  alleen PHP.
- **laag — Moeilijker te testen.** Front-end verificatie vraagt `do_blocks()` via wp-cli
  of een browser in plaats van een JS-snapshot. Er waren geen save-snapshots, dus in de
  praktijk niks verloren.
- **geen echt nadeel — Kost per request.** Markup wordt per pageview opgebouwd in plaats
  van uit `post_content` gelezen. Dat is een `include` plus wat `sprintf`/`esc_attr` per
  blokinstantie; onmeetbaar naast een gemiddelde WP-query. Let op: `517c634` lost dit
  *niet* op — dat cachet het parsen van `block.json` bij registratie, niet het renderen.
- **geen echt nadeel — Geen markup in de database.** Bij het uitschakelen van de plugin
  blijft er niets staan. Maar de oude JS-markup was zonder de plugin-CSS ook al kapot,
  en de plugin gaat niet uit zonder plan.
- **twijfelachtig — Zoeken/exports.** Tekst zoals `headingText` staat nu alleen nog als
  attribuut in de blok-delimiter, niet meer als HTML-tekstnode. WP-search (`LIKE` op
  `post_content`) matcht dat nog steeds, maar breekt op escapes en entities. Inner
  blocks (paragrafen) staan onveranderd als HTML in de database.
