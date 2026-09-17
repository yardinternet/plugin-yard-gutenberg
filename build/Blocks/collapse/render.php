<?php

declare(strict_types=1);

use Yard\Gutenberg\Blocks\Render;

$hasStructuredData = ! empty($attributes['hasStructuredData']);

$wrapperAttributes = ['data-multiple' => Render::bool($attributes['showMultiple'] ?? true)];

if ($hasStructuredData) {
	$wrapperAttributes['itemscope'] = '';
	$wrapperAttributes['itemtype'] = 'https://schema.org/FAQPage';
}
?>
<div <?php echo get_block_wrapper_attributes($wrapperAttributes); ?>><?php echo Render::innerContent($block, $content); ?></div>
