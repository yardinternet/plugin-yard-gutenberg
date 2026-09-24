<?php

declare(strict_types=1);

$tag = ! empty($attributes['isOrderedList']) ? 'ol' : 'ul';
?>
<<?php echo $tag; ?> <?php echo get_block_wrapper_attributes(); ?>><?php echo $content; ?></<?php echo $tag; ?>>
