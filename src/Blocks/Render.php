<?php

declare(strict_types=1);

namespace Yard\Gutenberg\Blocks;

final class Render
{
	public static function icon(array $attributes): string
	{
		$icon = $attributes['icon'] ?? '';

		if ('' === $icon) {
			return '';
		}

		$title = '' !== ($attributes['iconAltText'] ?? '')
			? sprintf(' title="%s"', esc_attr($attributes['iconAltText']))
			: '';

		return sprintf(
			'<i class="wp-block-yard-icon-component fa-fw %s"%s aria-hidden="true"></i>',
			esc_attr($icon),
			$title
		);
	}


	public static function headingTag(?string $level): string
	{
		return in_array($level, ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div'], true) ? $level : 'h3';
	}

	public static function bool($value): string
	{
		return $value ? 'true' : 'false';
	}

	/**
	 * Drops the pre-SSR save markup so `$content` is not wrapped twice:
	 * `<!-- wp:yard/collapse --><div class="wp-block-yard-collapse">…<!-- /wp:yard/collapse -->`
	 * becomes
	 * `<!-- wp:yard/collapse -->…<!-- /wp:yard/collapse -->`.
	 */
	public static function stripLegacySave(array $parsedBlock): array
	{
		$name = $parsedBlock['blockName'] ?? '';

		if (0 !== strpos($name, 'yard/')) {
			return $parsedBlock;
		}

		// Unregistered (excluded via `yard::gutenberg/allowed-blocks`) or static blocks can only output their saved markup
		$blockType = \WP_Block_Type_Registry::get_instance()->get_registered($name);

		if (! $blockType || ! $blockType->is_dynamic()) {
			return $parsedBlock;
		}

		$strings = array_filter($parsedBlock['innerContent'] ?? [], 'is_string');
		$first = trim((string) reset($strings));

		if (! preg_match('/^<[a-z][a-z0-9]*\s[^>]*\bclass="([^"]*)"/i', $first, $match)) {
			return $parsedBlock;
		}

		if (! in_array('wp-block-' . str_replace('/', '-', $name), preg_split('/\s+/', $match[1]), true)) {
			return $parsedBlock;
		}

		if ('yard/timeline-item-collapse' === $name) {
			$html = implode('', $strings);

			foreach (['title' => 'h[1-6]|div', 'subtitle' => 'p'] as $attribute => $tag) {
				if (empty($parsedBlock['attrs'][$attribute]) && preg_match(sprintf('/<(%s)[^>]*class="[^"]*\bwp-block-yard-timeline-item-collapse__%s\b[^"]*"[^>]*>(.*?)<\/\1>/s', $tag, $attribute), $html, $found)) {
					$parsedBlock['attrs'][$attribute] = $found[2];
				}
			}
		}

		$parsedBlock['innerHTML'] = '';
		$parsedBlock['innerContent'] = array_map(fn ($chunk) => is_string($chunk) ? '' : $chunk, $parsedBlock['innerContent']);

		return $parsedBlock;
	}
}
