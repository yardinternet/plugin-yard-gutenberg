# Timeline block

## Usage in Blade

```blade
<x-block-yard-timeline :isOrderedList="true">
    <x-block-yard-timeline-item>
        <h3>Step 1</h3>
        <p>Content</p>
    </x-block-yard-timeline-item>
    <x-block-yard-timeline-item-collapse title="Step 2" subtitle="Subtitle">
        <p>Collapsible content</p>
    </x-block-yard-timeline-item-collapse>
</x-block-yard-timeline>
```

### Attributes

| Attribute       | Type      | Description                                        |
| --------------- | --------- | -------------------------------------------------- |
| `isOrderedList` | `boolean` | Render as `<ol>` instead of `<ul>`. Default `false`. |

## Hooks

Want to change the starting template of a timeline, use this filter.

```JS
import { addFilter } from '@wordpress/hooks';

addFilter( 'yard.timeline-template', 'yard', () => [
 [ 'yard/timeline-item' ],
 [ 'yard/timeline-item' ],
 [ 'yard/timeline-item' ],
] );
```
