<?php

namespace Yard\Gutenberg;

class PluginServiceProvider
{
    public function boot()
    {
        $this->bootProviders();

        add_action('init', [$this, 'registerBlocks']);
        add_action('admin_enqueue_scripts', [$this, 'enqueueAdminAssets']);
    }

    public function bootProviders()
    {
        $providers = [
            Patterns\PatternServiceProvider::class,
            Settings\SettingsServiceProvider::class,
        ];

        foreach ($providers as $provider) {
            $provider = new $provider();
            $provider->boot();
        }
    }

    /**
     * Registers the block using the metadata loaded from the `block.json` file.
     * Behind the scenes, it registers also all assets so they can be enqueued
     * through the block editor in the corresponding context.
     *
     * @see https://developer.wordpress.org/reference/functions/register_block_type/
     */
    public function registerBlocks()
    {
        // TODO: Automate this
        register_block_type(dirname(__DIR__, 1) . '/build/Blocks/example');
        register_block_type(dirname(__DIR__, 1) . '/build/Blocks/example-dynamic', [
            'render_callback' => [$this, 'renderDynamicBlock'],
        ]);
    }

    public function renderDynamicBlock($attributes)
    {
        return '<h3>asdf</h3>';
    }

    public function enqueueAdminAssets()
    {
        // Enqueue admin.js and style-admin.css build files located in PLUGIN PATH -> build/admin.js
        // and PLUGIN PATH -> build/admin.css
        wp_enqueue_script(
            'yard-gutenberg-admin',
            plugins_url('build/admin.js', __DIR__),
            [],
            time()
        );

        wp_enqueue_style(
            'yard-gutenberg-admin',
            plugins_url('build/style-admin.css', __DIR__),
            [],
            time()
        );
    }
}
