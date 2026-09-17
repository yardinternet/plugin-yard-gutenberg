<?php

declare(strict_types=1);

use Yard\Gutenberg\Blocks\Render;
?>
<ul <?php echo get_block_wrapper_attributes(); ?>><?php echo Render::innerContent($block, $content); ?></ul>
