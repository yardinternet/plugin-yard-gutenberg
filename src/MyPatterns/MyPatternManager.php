<?php

declare(strict_types=1);

namespace Yard\Gutenberg\MyPatterns;

class MyPatternManager
{
	public function boot()
	{
		$enableMyPatternsMenuItem = \apply_filters('yard-gutenberg/enableMyPatternsMenuItem', true);

		if (! $enableMyPatternsMenuItem) {
			return;
		}

		\add_filter('admin_menu', [$this, 'addMyPatternMenuItems']);
		\add_filter('manage_wp_block_posts_columns', [$this, 'addMyPatternColumns']);
		\add_filter('manage_wp_block_posts_custom_column', [$this, 'addPatternStatusColumnContent'], 10, 2);
		\add_filter('manage_wp_block_posts_custom_column', [$this, 'addPatternCategoryColumnContent'], 10, 2);
		\add_filter('register_taxonomy_args', [$this, 'changePatternCategoryTaxonomyArgs'], 10, 2);
		\add_action('admin_enqueue_scripts', [$this, 'enqueuePatternStyles']);
		\add_action('enqueue_block_editor_assets', [$this, 'enqueuePatternScripts']);
	}

	public function addMyPatternMenuItems(): void
	{
		if (! $this->MyPatternsMenuItemExists()) {
			$this->addMyPatternsMenuItem();
			$this->addMyPatternsSubMenu();
		}
	}

	private function MyPatternsMenuItemExists(): bool
	{
		global $menu;

		return ! empty(array_filter($menu, function ($item) {
			return 'edit.php?post_type=wp_block' === $item[2];
		}));
	}

	private function addMyPatternsMenuItem(): void
	{
		add_menu_page(
			__('Mijn patronen', 'yard-blocks'),
			__('Mijn patronen', 'yard-blocks'),
			'edit_posts',
			'edit.php?post_type=wp_block',
			'',
			'dashicons-layout',
			49 // just below "Pages"
		);
	}

	private function addMyPatternsSubMenu(): void
	{
		add_submenu_page(
			'edit.php?post_type=wp_block',
			__('Patrooncategorieën', 'yard-blocks'),
			__('Patrooncategorieën', 'yard-blocks'),
			'edit_posts',
			'edit-tags.php?taxonomy=wp_pattern_category&post_type=wp_block'
		);
	}

	/**
	 * Add columns to the WP Block admin table.
	 *
	 * @param array $columns Current columns in the WP Block admin table.
	 */
	public function addMyPatternColumns(array $columns): array
	{
		return [
			'title' => $columns['title'],
			'category' => __('Categorieën'),
			'status' => __('Status'),
			'date' => $columns['date'],
		];
	}

	/**
	 * Add content to the status column. If the wp_pattern_sync_status is empty, it means the pattern is synced.
	 *
	 * @param string $column The current column being processed.
	 * @param int $post_id The ID of the current post.
	 */
	public function addPatternStatusColumnContent(string $column, int $post_id): void
	{
		if ('status' !== $column) {
			return;
		}

		$syncStatus = get_post_meta($post_id, 'wp_pattern_sync_status', true);

		if (empty($syncStatus)) {
			echo '<span style="color: var(--wp-block-synced-color);">' . __('Gesynchroniseerd') . '</span>';
		} elseif ('unsynced' === $syncStatus) {
			echo '<span>' . __('Niet gesynchroniseerd') . '</span>';
		} else {
			echo '<span>' . __('Status onbekend') . '</span>';
		}
	}

	public function addPatternCategoryColumnContent(string $column, int $postID): void
	{
		if ('category' !== $column) {
			return;
		}

		$terms = get_the_terms($postID, 'wp_pattern_category');

		if (empty($terms)) {
			echo '<span>' . __('Niet gecategoriseerd') . '</span>';
		} else {
			$termNames = wp_list_pluck($terms, 'name');
			echo implode(', ', $termNames);
		}
	}

	public function changePatternCategoryTaxonomyArgs(array $args, string $taxonomy): array
	{
		if ('wp_pattern_category' !== $taxonomy) {
			return $args;
		}

		$args['hierarchical'] = true; // Better Gutenberg controls

		return $args;
	}

	public function enqueuePatternStyles(): void
	{
		\wp_enqueue_style(
			'yard-gutenberg-patterns',
			YARD_GUTENBERG_PLUGIN_DIR_URL . 'build/style-patterns.css',
			[],
			YARD_GUTENBERG_PLUGIN_VERSION
		);
	}

	public function enqueuePatternScripts(): void
	{
		$path = YARD_GUTENBERG_PLUGIN_DIR_PATH . 'build/patterns.asset.php';
		$scriptAsset = file_exists($path) ? require $path : ['dependencies' => [], 'version' => round(microtime(true))];

		\wp_enqueue_script(
			'yard-gutenberg-patterns',
			YARD_GUTENBERG_PLUGIN_DIR_URL . 'build/patterns.js',
			$scriptAsset['dependencies'],
			$scriptAsset['version']
		);
	}
}
