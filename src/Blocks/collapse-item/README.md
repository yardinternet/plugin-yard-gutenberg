# Collapse item block

## Usage in Blade

```blade
<x-block-yard-collapse>
    <x-block-yard-collapse-item headingText="Heading text" headingLevel="h2" :isOpen="true">
        <p>Inner content</p>
    </x-block-yard-collapse-item>
</x-block-yard-collapse>
```

### Attributes

| Attribute           | Type      | Description                                                                 |
| ------------------- | --------- | --------------------------------------------------------------------------- |
| `headingText`       | `string`  | Text of the toggle button.                                                  |
| `headingLevel`      | `string`  | `h1`–`h6`. Default `h3`.                                                    |
| `isOpen`            | `boolean` | Render the item expanded. Default `false`.                                  |
| `anchor`            | `string`  | `id` on the heading, so the item can be deep-linked.                        |
| `icon`              | `string`  | Font Awesome classes, e.g. `fa-light fa-envelope`. Omit for no icon.        |
| `iconAltText`       | `string`  | `title` attribute of the icon.                                              |
| `hasSubtitle`       | `boolean` | Show `subtitleText` below the heading. Default `false`.                     |
| `subtitleText`      | `string`  | Subtitle, may contain inline HTML.                                          |
| `hasStructuredData` | `boolean` | Add `schema.org/Question` and `Answer` microdata. Default `false`.          |

## Hooks

By default the option to select an icon is disabled. Use this filter to enable the icon option.

```JS
import { addFilter } from '@wordpress/hooks';

addFilter('yard.collapse-item-enable-icon', 'yard', () => true);
```

By default the option to select a subtitle is disabled. Use this filter to enable the subtitle option.

```JS
import { addFilter } from '@wordpress/hooks';
addFilter('yard.collapse-item-enable-subtitle-toggle', 'yard', () => true);
```
