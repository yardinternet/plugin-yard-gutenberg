/**
 * WordPress dependencies
 */
import { InnerBlocks } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import deprecated from './deprecated';
import edit from './edit';
import icon from './icon';
import metadata from './block.json';

registerBlockType( metadata, {
	deprecated,
	edit,
	icon,
	save: () => <InnerBlocks.Content />,
} );
