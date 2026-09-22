# Icon list item block

## Usage in Blade

```blade
<x-block-yard-iconlist>
    <x-block-yard-iconlist-item icon="fa-light fa-arrow-right" listText="Item text" linkUrl="https://example.com" :opensInNewTab="true" />
</x-block-yard-iconlist>
```

### Attributes

| Attribute       | Type      | Description                                                        |
| --------------- | --------- | ------------------------------------------------------------------ |
| `listText`      | `string`  | Item text, may contain inline HTML.                                |
| `linkUrl`       | `string`  | Wraps the text in a link. Omit for plain text.                     |
| `opensInNewTab` | `boolean` | Add `target="_blank" rel="noopener noreferrer"`. Default `false`.  |
| `icon`          | `string`  | Font Awesome classes. Default `fa-classic fa-light fa-envelope`.   |
| `iconAltText`   | `string`  | `title` attribute of the icon.                                     |
