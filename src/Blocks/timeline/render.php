<?php

declare(strict_types=1);

use Yard\Gutenberg\Blocks\Render;

$tag = ! empty($attributes['isOrderedList']) ? 'ol' : 'ul';
?>
<<?php echo $tag; ?> <?php echo get_block_wrapper_attributes(); ?>><?php echo Render::innerContent($block, $content); ?></<?php echo $tag; ?>>
