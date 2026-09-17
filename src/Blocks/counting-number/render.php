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
<div <?php echo $wrapperAttributes; ?>>
	<?php if ('' !== $prefix) : ?>
		<span class="wp-block-yard-counting-number__prefix"><?php echo esc_html($prefix); ?></span>
	<?php endif; ?>
	<span class="wp-block-yard-counting-number__number"><?php echo esc_html($number); ?></span>
	<?php if ('' !== $suffix) : ?>
		<span class="wp-block-yard-counting-number__suffix"><?php echo esc_html($suffix); ?></span>
	<?php endif; ?>
</div>
