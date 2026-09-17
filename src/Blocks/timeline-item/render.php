<?php

declare(strict_types=1);

use Yard\Gutenberg\Blocks\Render;
?>
<li <?php echo get_block_wrapper_attributes(); ?>>
	<span class="wp-block-yard-timeline-item__line"></span>
	<span class="wp-block-yard-timeline-item__dot"></span>
	<div class="wp-block-yard-timeline-item__content"><?php echo Render::innerContent($block, $content); ?></div>
</li>
