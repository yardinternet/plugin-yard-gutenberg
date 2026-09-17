<?php

declare(strict_types=1);

use Yard\Gutenberg\Blocks\Render;

$heading = Render::headingTag($attributes['headingLevel'] ?? null);
$id = esc_attr((string) ($attributes['id'] ?? ''));

// Wrapper attributes (incl. anchor id) only on the heading; frontend.js resolves the hash to it.
$panelClass = trim('wp-block-yard-tabs-item wp-block-yard-tabs-item__panel ' . ($attributes['className'] ?? ''));
?>
<<?php echo $heading; ?> <?php echo get_block_wrapper_attributes(['class' => 'wp-block-yard-tabs-item__heading']); ?>>
	<button id="tabs-item-button-<?php echo $id; ?>" class="wp-block-yard-tabs-item__button" role="tab" aria-controls="tabs-item-panel-<?php echo $id; ?>" aria-selected="false">
		<?php echo Render::icon($attributes); ?>
		<?php echo esc_html($attributes['headingText'] ?? ''); ?>
	</button>
</<?php echo $heading; ?>>
<div class="<?php echo esc_attr($panelClass); ?>" id="tabs-item-panel-<?php echo $id; ?>" role="tabpanel" aria-hidden="true" aria-labelledby="tabs-item-button-<?php echo $id; ?>"><?php echo Render::innerContent($block, $content); ?></div>
