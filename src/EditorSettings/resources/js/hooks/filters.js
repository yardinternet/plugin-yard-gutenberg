/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';

/**
 * Override the default className wp-block-yard-gutenberg to wp-block-yard
 *
 * @param {string} className - Class of block
 * @param {*} blockName - Name of the block
 *
 * @return {string} - New className
 */
const setBlockClassName = ( className, blockName ) => {
	return blockName.includes( 'yard-gutenberg' )
		? `${ className }`.replace( 'wp-block-yard-gutenberg', 'wp-block-yard' )
		: className;
};

addFilter(
	'blocks.getBlockDefaultClassName',
	'yard-gutenberg',
	setBlockClassName
);
