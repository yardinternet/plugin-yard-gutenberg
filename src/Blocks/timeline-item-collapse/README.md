# Timeline item collapse block

## Hooks

Want to change the allowed blocks of a timeline item, use this filter.

```JS
import { addFilter } from '@wordpress/hooks';

addFilter( 'yard.timeline-item-collapse-allowed-blocks', 'yard', ( allowedBlocks ) => [
 ...allowedBlocks,
 'yard/icon',
] );
```

Want to change the starting template of a timeline item, use this filter.

```JS
addFilter( 'yard.timeline-item-collapse-template', 'yard', () => [
 [ 'yard/icon' ],
 [ 'core/heading', { level: 3, placeholder: 'Koptekst H3' } ],
 [ 'core/paragraph', { placeholder: 'Voeg de inhoud toe' } ],
] );
```
