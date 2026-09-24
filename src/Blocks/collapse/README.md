# Collapse block

## Usage in Blade

```blade
<x-block-yard-collapse :showMultiple="false">
    <x-block-yard-collapse-item headingText="Heading text">
        <p>Inner content</p>
    </x-block-yard-collapse-item>
</x-block-yard-collapse>
```

### Attributes

| Attribute           | Type      | Description                                                                    |
| ------------------- | --------- | ------------------------------------------------------------------------------ |
| `showMultiple`      | `boolean` | Allow more than one item to be open at the same time. Default `true`.          |
| `hasStructuredData` | `boolean` | Add `schema.org/FAQPage` microdata. Set it on the items as well. Default `false`. |
