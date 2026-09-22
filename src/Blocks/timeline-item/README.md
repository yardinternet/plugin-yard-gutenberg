# Timeline item block

## Usage in Blade

```blade
<x-block-yard-timeline>
    <x-block-yard-timeline-item>
        <h3>Step 1</h3>
        <p>Content</p>
    </x-block-yard-timeline-item>
</x-block-yard-timeline>
```

### Attributes

No block attributes are used when rendering.

## Hooks

Want to change the allowed blocks of a timeline item, use this filter.

```JS
import { addFilter } from '@wordpress/hooks';

addFilter( 'yard.timeline-item-allowed-blocks', 'yard', ( allowedBlocks ) => [
 ...allowedBlocks,
 'yard/icon',
] );
```

Want to change the starting template of a timeline item, use this filter.

```JS
import { addFilter } from '@wordpress/hooks';

addFilter( 'yard.timeline-item-template', 'yard', () => [
 [ 'yard/icon' ],
 [ 'core/heading', { level: 3, placeholder: 'Koptekst H3' } ],
 [ 'core/paragraph', { placeholder: 'Voeg de inhoud toe' } ],
] );
```
