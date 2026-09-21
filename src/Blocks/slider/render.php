<?php

declare(strict_types=1);

use Yard\Gutenberg\Blocks\Render;
?>
<div <?php echo get_block_wrapper_attributes(['class' => 'splide']); ?>><div class="splide__track"><ul class="splide__list"><?php echo Render::innerContent($block, $content); ?></ul></div></div>
