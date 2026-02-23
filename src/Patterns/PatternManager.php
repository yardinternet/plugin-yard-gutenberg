<?php

declare(strict_types=1);

namespace Yard\Gutenberg\Patterns;

class PatternManager
{
	public function boot()
	{
		\add_filter('rest_dispatch_request',  [$this, 'disablePluginPatterns'], 10, 3);
		\add_filter('should_load_remote_block_patterns', '__return_false');
		\remove_action('enqueue_block_editor_assets', 'wp_enqueue_editor_block_directory_assets'); // Disable installing patterns from pattern-directory
	}

	/**
	 * WordPress.org and plugins such as WooCommerce add their own block
	 * patterns. Generally, we only want clients to use only the patterns we provide.
	 *
	 * @see https://developer.wordpress.com/docs/developer-tools/block-patterns/disable-all-patterns/
	 */
	public function disablePluginPatterns($dispatchResult, $request, $route)
	{
		if (! str_starts_with($route, '/wp/v2/block-patterns/patterns')) {
			return $dispatchResult;
		}

		$patterns = \WP_Block_Patterns_Registry::get_instance()->get_all_registered();

		if (! empty($patterns)) {
			foreach ($patterns as $pattern) {
				if (str_starts_with($pattern['name'], 'woocommerce-blocks/')) {
					unregister_block_pattern($pattern['name']);
				}
			}
			remove_theme_support('core-block-patterns');
		}

		return $dispatchResult;
	}
}
