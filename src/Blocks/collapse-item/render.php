<?php

declare(strict_types=1);

use Yard\Gutenberg\Blocks\Render;

$hasStructuredData = ! empty($attributes['hasStructuredData']);
$isOpen = ! empty($attributes['isOpen']);
$heading = Render::headingTag($attributes['headingLevel'] ?? null);
$anchor = $attributes['anchor'] ?? '';
$subtitle = ! empty($attributes['hasSubtitle']) ? ($attributes['subtitleText'] ?? '') : '';

// Anchor id goes on the heading (frontend.js hash lookup), so no get_block_wrapper_attributes() on the root.
$rootClass = trim('wp-block-yard-collapse-item | ac ' . ($attributes['className'] ?? ''));
?>
<div class="<?php echo esc_attr($rootClass); ?>" data-open="<?php echo Render::bool($isOpen); ?>"<?php echo $hasStructuredData ? ' itemscope itemprop="mainEntity" itemtype="https://schema.org/Question"' : ''; ?>>
	<<?php echo $heading; ?> class="wp-block-yard-collapse-item__header | ac-header"<?php echo '' !== $anchor ? sprintf(' id="%s"', esc_attr($anchor)) : ''; ?>>
		<button type="button" class="wp-block-yard-collapse-item__header-button | ac-trigger"<?php echo $hasStructuredData ? ' itemprop="name"' : ''; ?>>
			<?php echo Render::icon($attributes); ?>
			<span class="wp-block-yard-collapse-item__header-button-title"><?php echo esc_html($attributes['headingText'] ?? ''); ?></span>
			<?php if ('' !== $subtitle) : ?>
				<span class="wp-block-yard-collapse-item__header-button-subtitle"><?php echo wp_kses_post($subtitle); ?></span>
			<?php endif; ?>
		</button>
	</<?php echo $heading; ?>>
	<div class="wp-block-yard-collapse-item__panel<?php echo $isOpen ? '' : ' is-collapse-item-closed'; ?> | ac-panel"<?php echo $hasStructuredData ? ' itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"' : ''; ?>>
		<div class="wp-block-yard-collapse-item__panel-content"<?php echo $hasStructuredData ? ' itemprop="text"' : ''; ?>>
			<?php echo Render::innerContent($block, $content); ?>
		</div>
	</div>
</div>
