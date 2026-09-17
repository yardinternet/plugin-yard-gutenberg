<?php

declare(strict_types=1);

use Yard\Gutenberg\Blocks\Render;

$heading = Render::headingTag($attributes['headingLevel'] ?? null);
$title = wp_kses_post($attributes['title'] ?? '');
$subtitle = wp_kses_post($attributes['subtitle'] ?? '');
$inner = Render::innerContent($block, $content);

$titleContent = '';

if ('' !== $title) {
	$titleContent .= sprintf('<%1$s class="wp-block-yard-timeline-item-collapse__title">%2$s</%1$s>', $heading, $title);
}

if ('' !== $subtitle) {
	$titleContent .= sprintf('<p class="wp-block-yard-timeline-item-collapse__subtitle">%s</p>', $subtitle);
}
?>
<li <?php echo get_block_wrapper_attributes(['class' => 'wp-block-yard-timeline-item']); ?>>
	<span class="wp-block-yard-timeline-item__line"></span>
	<span class="wp-block-yard-timeline-item__dot"></span>
	<div class="wp-block-yard-timeline-item__content">
		<?php if ('' !== trim($inner)) : ?>
			<details class="wp-block-yard-timeline-item-collapse__details"<?php echo ! empty($attributes['isOpen']) ? ' open' : ''; ?>>
				<summary class="wp-block-yard-timeline-item-collapse__summary"><?php echo $titleContent; ?></summary>
				<div class="wp-block-yard-timeline-item-collapse__inner-content"><?php echo $inner; ?></div>
			</details>
		<?php else : ?>
			<?php echo $titleContent; ?>
		<?php endif; ?>
	</div>
</li>
