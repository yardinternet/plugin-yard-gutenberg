# Tabs block

## Usage in Blade

```blade
<x-block-yard-tabs defaultTab="tab-2">
    <x-block-yard-tabs-item id="tab-1" headingText="Tab 1">
        <p>Content 1</p>
    </x-block-yard-tabs-item>
    <x-block-yard-tabs-item id="tab-2" headingText="Tab 2">
        <p>Content 2</p>
    </x-block-yard-tabs-item>
</x-block-yard-tabs>
```

### Attributes

| Attribute    | Type     | Description                                                       |
| ------------ | -------- | ----------------------------------------------------------------- |
| `defaultTab` | `string` | `id` of the item that is open on load. Defaults to the first item. |
| `align`      | `string` | `wide` or `full` alignment class. Default `wide`.                 |
