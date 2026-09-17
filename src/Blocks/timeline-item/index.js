/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import deprecated from './deprecated';
import edit from './edit';
import save from './save';
import icon from './icon';
import metadata from './block.json';

registerBlockType( metadata, {
	deprecated,
	edit,
	icon,
	save,
} );
