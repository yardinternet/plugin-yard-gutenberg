# Tabs item block

## Usage in Blade

```blade
<x-block-yard-tabs>
    <x-block-yard-tabs-item id="tab-1" headingText="Tab 1" headingLevel="h2" anchor="tab-1">
        <p>Content 1</p>
    </x-block-yard-tabs-item>
</x-block-yard-tabs>
```

### Attributes

| Attribute      | Type     | Description                                                                         |
| -------------- | -------- | ----------------------------------------------------------------------------------- |
| `id`           | `string` | Required, unique per page. Wires button and panel (`tabs-item-button-{id}`, `tabs-item-panel-{id}`) and is what `defaultTab` on the tabs block refers to. |
| `headingText`  | `string` | Text of the tab button.                                                             |
| `headingLevel` | `string` | `h1`–`h6`. Default `h3`.                                                            |
| `anchor`       | `string` | `id` on the heading, so the tab opens when linked with a hash.                      |
| `icon`         | `string` | Font Awesome classes. Omit for no icon.                                             |
| `iconAltText`  | `string` | `title` attribute of the icon.                                                      |

## Hooks

By default the option to select an icon is disabled. Use this filter to enable the icon option.

```JS
import { addFilter } from '@wordpress/hooks';

addFilter('yard.tabs-item-enable-icon', 'yard', () => true);
```
