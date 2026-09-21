<?php

declare(strict_types=1);

use Yard\Gutenberg\Blocks\Render;
?>
<li <?php echo get_block_wrapper_attributes(['class' => 'splide__slide']); ?>><?php echo Render::innerContent($block, $content); ?></li>
