<?php

declare(strict_types=1);

use Yard\Gutenberg\Blocks\Render;

$linkUrl = $attributes['linkUrl'] ?? '';
$listText = wp_kses_post($attributes['listText'] ?? '');
$linkTarget = ! empty($attributes['opensInNewTab']) ? ' target="_blank" rel="noopener noreferrer"' : '';
?>
<li <?php echo get_block_wrapper_attributes(); ?>>
	<?php echo Render::icon($attributes); ?>
	<?php if ('' !== $linkUrl) : ?>
		<a href="<?php echo esc_url($linkUrl); ?>"<?php echo $linkTarget; ?> class="wp-block-yard-iconlist-item__link"><?php echo $listText; ?></a>
	<?php else : ?>
		<span class="wp-block-yard-iconlist-item__text"><?php echo $listText; ?></span>
	<?php endif; ?>
</li>
