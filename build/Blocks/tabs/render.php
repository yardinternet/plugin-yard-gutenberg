<?php

declare(strict_types=1);

use Yard\Gutenberg\Blocks\Render;

$wrapperAttributes = get_block_wrapper_attributes([
	'role' => 'tablist',
	'data-default-tab' => (string) ($attributes['defaultTab'] ?? ''),
]);
?>
<div <?php echo $wrapperAttributes; ?>><?php echo Render::innerContent($block, $content); ?></div>
