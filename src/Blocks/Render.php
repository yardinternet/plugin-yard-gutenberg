<?php

declare(strict_types=1);

namespace Yard\Gutenberg\Blocks;

use WP_Block;

final class Render
{
	public static function icon(array $attributes): string
	{
		$icon = $attributes['icon'] ?? '';

		if ('' === $icon) {
			return '';
		}

		$title = ($attributes['iconAltText'] ?? '') !== ''
			? sprintf(' title="%s"', esc_attr($attributes['iconAltText']))
			: '';

		return sprintf(
			'<i class="wp-block-yard-icon-component fa-fw %s"%s aria-hidden="true"></i>',
			esc_attr($icon),
			$title
		);
	}

	/**
	 * Posts saved before the block became dynamic still carry the JS-saved wrapper in
	 * innerContent, so `$content` would double-wrap. Blade slots have no inner blocks.
	 */
	public static function innerContent(WP_Block $block, string $content): string
	{
		$savedMarkup = trim(implode('', array_filter($block->parsed_block['innerContent'] ?? [], 'is_string')));

		if ('' === $savedMarkup || 0 === count($block->inner_blocks)) {
			return $content;
		}

		return implode('', array_map(
			fn (WP_Block $inner) => $inner->render(),
			iterator_to_array($block->inner_blocks)
		));
	}

	public static function headingTag(?string $level): string
	{
		return in_array($level, ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'], true) ? $level : 'h3';
	}

	public static function bool($value): string
	{
		return $value ? 'true' : 'false';
	}
}
