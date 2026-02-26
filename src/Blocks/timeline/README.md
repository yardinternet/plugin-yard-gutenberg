# Timeline block

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
