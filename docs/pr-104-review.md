# Review PR #104 — render blocks server-side via render.php

Branch `feat/convert-to-php-render` → `main`, 4 commits, 127 files.

**Status (2026-09-22, uncommitted):** High 1, High 2, Medium 3 and Medium 5 are fixed in the working tree.
`Render::innerContent()` is gone; a `render_block_data` filter (`Render::stripLegacySave()`, registered
in `PluginServiceProvider::boot()`) detects the legacy JS wrapper by its `wp-block-yard-*` class, lifts
`title`/`subtitle` of `timeline-item-collapse` out of that HTML into attrs, and blanks the legacy chunks
so every `render.php` can echo `$content` directly. Re-verified with the same `do_blocks()` cases: legacy
titles render, no nested wrappers, inner blocks render once. `counting-number` spans were also put on one
line (old JSX had no whitespace between prefix, number and suffix either). Editor validation still unverified.

## How this was checked

- Read the full `src/` diff (all 14 converted blocks, `Render.php`, plugin bootstrap).
- Compared every `render.php` against the old `save.js` markup (now the top `deprecated.js` entry) and against the `frontend.js` / `view.js` selectors.
- Rendered every block with `do_blocks()` through wp-cli on gemeentehw (WP 7.1.1, PHP 8.5.3) with three kinds of content: new-style (attributes only), legacy (old JS markup still in `post_content`) and Blade-style (`render_block()` with a slot, as `App\View\Components\Block` does). No PHP notices or warnings with `display_errors` on.
- Rebuilt with `npm run build`: `build/` is identical to the committed output, `blocks-manifest.php` included.
- **Not verified:** opening legacy posts in the editor (block validation against the new `deprecated.js` entries). Needs a logged-in browser. Posts to open on gemeentehw: 311 (timeline-item-collapse), 14 (collapse, tabs, iconlist, icon), 16 (table-of-contents). The site holds 32 posts with `yard/*` blocks, almost all still in legacy markup.

Per block, the mapping save.js → render.php is complete: `save` returns `null` or `<InnerBlocks.Content />`, `block.json` has `"render": "file:./render.php"`, and one deprecation with the exact old save was added. `facetwp` is untouched (never had save markup). Data attributes, booleans (`"true"`/`"false"`), class names, anchor ids, `role`/`aria-*` and structured-data attributes match the old output for all blocks tested.

## High

### 1. Legacy `timeline-item-collapse` loses title and subtitle on the front end

`src/Blocks/timeline-item-collapse/block.json` changes `title` and `subtitle` from `source: "html"` attributes to plain attributes. In existing posts those values live only in the saved HTML, not in the block comment. `render.php` therefore gets `title = ''` and `subtitle = ''`, and renders an empty `<summary>`:

```html
<details class="wp-block-yard-timeline-item-collapse__details" open>
    <summary class="wp-block-yard-timeline-item-collapse__summary"></summary>
    <div class="wp-block-yard-timeline-item-collapse__inner-content"><p>Inhoud</p></div>
</details>
```

Every existing timeline stays like this until someone opens the post in the editor (the deprecation re-sources the values and migrates them) **and saves it again**. Deploying this without re-saving posts is a visible regression on all sites that use the block.

Fix options, cheapest first:

- In `render.php` (or a `render_block_data` filter for this block), fall back to the legacy HTML when the attribute is empty: read `$block->parsed_block['innerHTML']` and pull `.wp-block-yard-timeline-item-collapse__title` / `__subtitle` with `WP_HTML_Tag_Processor` or a regex. Then legacy posts render correctly with no migration.
- Or ship a wp-cli migration that parses and re-serializes affected posts (`parse_blocks` → inject attrs → `serialize_blocks`). More work, needs to run on every site.

### 2. Legacy block without inner blocks gets its own old markup as content

`Render::innerContent()` returns `$content` unchanged when there are no inner blocks. For legacy posts `$content` is the old JS wrapper itself, so it ends up **inside** the new wrapper. Confirmed for:

- `timeline-item-collapse` saved without inner blocks (the "title and subtitle only" case the old `hasInnerBlocks` logic existed for). Output is `<li><details><summary></summary><div class="...inner-content"><li class="wp-block-yard-timeline-item-collapse ...">…old item…</li></div></details></li>`: a `<li>` nested in a `<div>` plus problem 1 on top.
- `collapse-item` with an empty panel: the whole old collapse-item is rendered inside the new panel. `frontend.js` then finds two `.wp-block-yard-collapse-item` elements for one block.

The root cause is that legacy detection is coupled to "has inner blocks". Detect the legacy wrapper itself instead, for example: the first string chunk of `innerContent` starts with a tag whose class list contains exactly `wp-block-yard-<block>` (`preg_match('/^\s*<[a-z0-9]+[^>]*class="[^"]*\bwp-block-' . $slug . '(?=[\s"])/', $first)`). The lookahead matters: a Blade slot for `collapse` starts with `wp-block-yard-collapse-item`, for `slider` with `wp-block-yard-slide`, and those must not match. When the wrapper is detected, render only the inner blocks (or nothing when there are none); otherwise return `$content`. See also Medium 3, which removes the need for this helper altogether.

## Medium

### 3. Legacy inner blocks are rendered twice per nesting level

For legacy content WP builds `$content` by rendering all inner blocks, and `Render::innerContent()` then calls `$inner->render()` on them again. Measured with a `render_block_core/paragraph` counter: legacy `collapse > collapse-item > paragraph` renders the paragraph **4×**, new-style content 1×. It doubles at each level, and side effects run again too: `yard/query` inside a collapse-item (post 14 has both) runs its queries twice, and anything using `wp_unique_id()` or a counter inside a `render_block` filter drifts.

Cleaner alternative: a single `render_block_data` filter in `PluginServiceProvider` for `yard/*` blocks that blanks the legacy string chunks in `innerContent` (using the detection from High 2) before WP renders. Then `$content` is already just the inner blocks, every `render.php` can echo `$content` directly, `Render::innerContent()` disappears, and inner blocks render once. The same filter is the natural place for the `timeline-item-collapse` title fallback (High 1).

### 4. Anchor id on `tabs-item` depends on WP 7.0

`tabs-item/render.php` relies on `get_block_wrapper_attributes()` to put the anchor `id` on the heading. That works on this site because WP 7.0 added `wp_apply_anchor_support()` (`wp-includes/block-supports/anchor.php`). On WP 6.x the heading has no id and `frontend.js` `setActiveTabOnHash()` (`tabs.querySelector(window.location.hash)`) can no longer open a tab from a deep link. `readme.txt` still says `Tested up to: 6.7` and the plugin header declares no `Requires at least`. Either output the id explicitly like `collapse-item/render.php` does (`$attributes['anchor']`), or declare `Requires at least: 7.0`.

### 5. Whitespace between icon and text is now visible

The old JSX emitted `<i …></i><span>` with no whitespace. The PHP templates put newlines and tabs between them (`collapse-item` header button, `tabs-item` button, `iconlist-item`). Neither `.wp-block-yard-collapse-item__header-button` nor `.wp-block-yard-tabs-item__button` is `display: flex`, so the browser now renders an extra space between icon and title. `iconlist-item` is fine (`display: flex; gap`). Put the tags on one line or use `<?php … ?>`-adjacent output without whitespace, or set the buttons to flex in the plugin CSS.

### 6. Subtitle markup behaviour changed (intentional, but undocumented)

`collapse-item` `subtitleText` is a RichText with bold/italic/strikethrough. The old save rendered `{ subtitleText }` as escaped text, so formatting showed up as literal `<em>` on the front end. `render.php` uses `wp_kses_post()` and now renders the formatting. That is the right behaviour, but it is a visible change on existing pages and the PR description is empty, so nobody will know. Mention it in the PR body and changelog.

## Low

### 7. `PluginServiceProvider::getRenderCallback()` is now dead weight

It still looks for `Yard\Gutenberg\Blocks\<name>\<Name>` classes and would pass a `render_callback` that **overrides** `block.json`'s `render` file. No such class exists, so it does nothing today, but the next person adding one silently disables `render.php` for that block. Remove it, or at least the hyphen special-casing comment that no longer describes reality.

### 8. Version and metadata drift

- `readme.txt` `Stable tag` still `1.8.0` while `package.json` and the plugin header say `1.9.0`.
- `table-of-contents/block.json` is the only converted block whose `version` was not bumped (stays `0.2.0`, and the deprecation comment also says v0.2.0).
- `table-of-contents/deprecated.js` v0.2.0 entry references `metadata.attributes` live; if the attributes change later the deprecation changes with them. Other blocks hard-code the old attributes. Existing pattern in this file, so acceptable, just inconsistent.
- No `Requires at least` / `Requires PHP` in the plugin header (see Medium 4). `composer.json` says PHP ≥ 7.4; the new PHP is 7.4-compatible.

### 9. `collapse-item` root skips `get_block_wrapper_attributes()`

Done on purpose to keep the anchor id on the heading, with `className` copied by hand. Fine for the current `supports`, but if `align`, `color` or `spacing` support is ever added to this block the wrapper silently loses them. A one-line comment already says why; consider building the wrapper with `get_block_wrapper_attributes()` and stripping `id=` instead, so supports keep working.

### 10. `counting-number` prefix/suffix truthiness

JS hid a prefix of `"0"` (falsy); PHP shows it (`'' !== '0'`). Edge case, arguably a fix.

### 11. PR hygiene

- PR description is empty for a 127-file behaviour change. At minimum: why (Blade `<x-block-yard-*>` components), the migration story (deprecations, legacy content still rendered), and the re-save requirement if High 1 is not fixed in code.
- `docs/server-side-rendering.md` exists locally but is untracked; either commit it with the PR or drop it.
- CI only runs `composer-lock-diff`; nothing builds or lints. Not new, but this PR would have been a good moment to add `npm run build` + `git diff --exit-code build/` so `build/` cannot drift from `src/`.

## Suggested order

1. Fix High 1 and High 2 together via one `render_block_data` filter (also resolves Medium 3), drop `Render::innerContent()`.
2. Output the anchor id explicitly in `tabs-item/render.php` or declare WP 7.0.
3. Remove the icon/title whitespace.
4. Open posts 311, 14 and 16 in the editor on gemeentehw and confirm no "unexpected or invalid content"; save 311 and confirm title/subtitle survive.
5. Fill the PR description, bump `readme.txt`, decide on `docs/`.
