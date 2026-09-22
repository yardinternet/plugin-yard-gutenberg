# FacetWP block

Renders the theme view `blocks.FacetWP.index` with the selected FacetWP template and facets. Requires the FacetWP plugin.

## Usage in Blade

```blade
<x-block-yard-facetwp :selectedTemplate="['name' => 'nieuws']" :selectedFacets="[['name' => 'categorie'], ['name' => 'jaar']]" />
```

### Attributes

| Attribute          | Type     | Description                                                             |
| ------------------ | -------- | ----------------------------------------------------------------------- |
| `selectedTemplate` | `object` | `['name' => '<facetwp template name>']`. Resolved to the full template. |
| `selectedFacets`   | `array`  | List of `['name' => '<facet name>']`. Resolved to the full facets.      |
| `align`            | `string` | `wide` or `full`. Default `wide`.                                       |
