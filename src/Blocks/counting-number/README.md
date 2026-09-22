# Counting number block

## Usage in Blade

```blade
<x-block-yard-counting-number number="1500" numberPrefix="€" numberSuffix="mln" :hasThousandsSeparator="true" />
```

### Attributes

| Attribute               | Type      | Description                                                     |
| ----------------------- | --------- | --------------------------------------------------------------- |
| `number`                | `string`  | Number to count up to. Dots are rendered as commas. Default `100`. |
| `numberPrefix`          | `string`  | Text before the number.                                         |
| `numberSuffix`          | `string`  | Text after the number.                                          |
| `hasThousandsSeparator` | `boolean` | Format with thousands separators. Default `false`.              |
| `animationDuration`     | `number`  | Duration in seconds. Default `2.5`.                             |

## Hooks

If you wish to write custom JavaScript for the counting functionality, you can unset the script using the following PHP filter.

```PHP
add_filter( 'block_type_metadata', function($metadata) {
    if($metadata["name"] == "yard/counting-number") {
        unset($metadata["viewScript"]);
    }
    return $metadata;
} );
```
