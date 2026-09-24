<?php

declare(strict_types=1);

use Yard\Gutenberg\Blocks\Render;
?>
<div <?php echo get_block_wrapper_attributes(); ?>><?php echo Render::icon($attributes); ?></div>
