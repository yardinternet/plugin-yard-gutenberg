<?php

declare(strict_types=1);

namespace Yard\Gutenberg\PageSettings;

class PageSettingsManager
{
    public function render()
    {
        echo '<div id="yard-gutenberg-page-settings"></div>';
    }

    public function enqueueAssets()
    {
        \wp_enqueue_style('wp-components');

        \wp_enqueue_script(
            'yard-gutenberg-page-settings-js',
            YARD_GUTENBERG_PLUGIN_DIR_URL . 'build/pageSettings.js',
            ['wp-element', 'wp-components', 'wp-blocks'], // TODO: Get the dependencies from settings.asset.php
            YARD_GUTENBERG_PLUGIN_VERSION,
            true
        );

        \wp_enqueue_style(
            'yard-gutenberg-page-settings-css',
            YARD_GUTENBERG_PLUGIN_DIR_URL . 'build/style-pageSettings.css',
            [],
            YARD_GUTENBERG_PLUGIN_VERSION
        );

        \wp_localize_script('yard-gutenberg-page-settings-js', 'wpApiSettings', [
            'root'  => esc_url_raw(\rest_url()),
            'nonce' => \wp_create_nonce('wp_rest'),
        ]);
    }
}
