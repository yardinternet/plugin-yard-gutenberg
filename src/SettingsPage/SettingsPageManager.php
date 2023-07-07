<?php

declare(strict_types=1);

namespace Yard\Gutenberg\SettingsPage;

class SettingsPageManager
{
    public function render()
    {
        echo '<div id="yard-gutenberg-settings-page"></div>';
    }

    public function enqueueAssets()
    {
        \wp_enqueue_style('wp-components');

        \wp_enqueue_script(
            'yard-gutenberg-settings-page-js',
            YARD_GUTENBERG_PLUGIN_DIR_URL . 'build/settings-page.js',
            ['wp-element', 'wp-components', 'wp-blocks'], // TODO: Get the dependencies from settings.asset.php
            YARD_GUTENBERG_PLUGIN_VERSION,
            true
        );

        \wp_enqueue_style(
            'yard-gutenberg-settings-page-css',
            YARD_GUTENBERG_PLUGIN_DIR_URL . 'build/style-settings-page.css',
            [],
            YARD_GUTENBERG_PLUGIN_VERSION
        );

        \wp_localize_script('yard-gutenberg-settings-page-js', 'wpApiSettings', [
            'root'  => esc_url_raw(\rest_url()),
            'nonce' => \wp_create_nonce('wp_rest'),
        ]);
    }
}
