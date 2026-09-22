<?php

declare(strict_types=1);

use Yard\Gutenberg\Blocks\Render;

$number = str_replace('.', ',', (string) ($attributes['number'] ?? ''));
$prefix = $attributes['numberPrefix'] ?? '';
$suffix = $attributes['numberSuffix'] ?? '';

$wrapperAttributes = get_block_wrapper_attributes([
	'data-hasthousandsseparator' => Render::bool($attributes['hasThousandsSeparator'] ?? false),
	'data-animationduration' => (string) ($attributes['animationDuration'] ?? 2.5),
	'data-number' => $number,
]);
?>
<div <?php echo $wrapperAttributes; ?>><?php
echo '' !== $prefix ? sprintf('<span class="wp-block-yard-counting-number__prefix">%s</span>', esc_html($prefix)) : '';
echo sprintf('<span class="wp-block-yard-counting-number__number">%s</span>', esc_html($number));
echo '' !== $suffix ? sprintf('<span class="wp-block-yard-counting-number__suffix">%s</span>', esc_html($suffix)) : '';
?></div>
