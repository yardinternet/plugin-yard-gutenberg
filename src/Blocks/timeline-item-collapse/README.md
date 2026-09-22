# Timeline item collapse block

## Usage in Blade

```blade
<x-block-yard-timeline>
    <x-block-yard-timeline-item-collapse title="Step 1" subtitle="Subtitle" :isOpen="true">
        <p>Collapsible content</p>
    </x-block-yard-timeline-item-collapse>
</x-block-yard-timeline>
```

Without slot content the title and subtitle render without a `<details>` toggle.

### Attributes

| Attribute      | Type      | Description                                        |
| -------------- | --------- | -------------------------------------------------- |
| `title`        | `string`  | Heading in the summary, may contain inline HTML.   |
| `subtitle`     | `string`  | Paragraph below the title, may contain inline HTML. |
| `headingLevel` | `string`  | `h1`–`h6`. Default `h3`.                           |
| `isOpen`       | `boolean` | Render expanded. Default `false`.                  |

## Current step

Class logic done in theme, but a11y done here via hook for now.
In future class logic will be moved to this package to its own panel.


## Hooks

Want to change the allowed blocks of a timeline item collapse, use this filter.

```JS
import { addFilter } from '@wordpress/hooks';

addFilter( 'yard.timeline-item-collapse-allowed-blocks', 'yard', ( allowedBlocks ) => [
 ...allowedBlocks,
 'yard/icon',
] );
```

Want to change the starting template of a timeline item collapse, use this filter.

```JS
import { addFilter } from '@wordpress/hooks';

addFilter( 'yard.timeline-item-collapse-template', 'yard', () => [
 [ 'core/paragraph', { placeholder: 'Voeg de inhoud van de uitklap toe' } ],
] );
```
