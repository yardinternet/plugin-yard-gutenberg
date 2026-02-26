# Timeline block

## Hooks

By default the timeline only has `timeline-item` enabled. If you want to use `timeline-item-collapse` or both, you can change the allowed blocks with this filter.

```JS
addFilter( 'yard.timeline-allowed-blocks', 'yard', () => [
 'yard/timeline-item',
 'yard/timeline-item-collapse',
] );
```

Want to change the starting template of a timeline, use this filter.

```JS
addFilter( 'yard.timeline-template', 'yard', () => [
 [ 'yard/timeline-item' ],
 [ 'yard/timeline-item' ],
 [ 'yard/timeline-item' ],
] );
```
