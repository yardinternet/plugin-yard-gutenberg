<?php

declare(strict_types=1);

use Yard\Gutenberg\Blocks\Render;

$dataAttributes = '';

foreach (['contentSelector' => 'data-content-selector', 'headingSelector' => 'data-heading-selector'] as $attribute => $dataAttribute) {
	if (! empty($attributes[$attribute])) {
		$dataAttributes .= sprintf(' %s="%s"', $dataAttribute, esc_attr($attributes[$attribute]));
	}
}
?>
<div <?php echo get_block_wrapper_attributes(); ?>><div id="js-yard-table-of-contents"<?php echo $dataAttributes; ?> data-include-subheading="<?php echo Render::bool($attributes['includeSubheading'] ?? true); ?>"></div></div>
