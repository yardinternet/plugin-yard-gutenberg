/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import metadata from './block.json';

export default [
	// v0.1.0 - static save markup (before server-side rendering), and
	// includeSubheading defaulted to true. Existing content keeps its
	// subheadings; the markup is identical to v0.2.0's, so this entry covers
	// both pre-SSR defaults and a second entry would never be reached.
	{
		attributes: {
			...metadata.attributes,
			includeSubheading: {
				type: 'boolean',
				default: true,
			},
		},
		save: ( props ) => {
			const { attributes } = props;
			const { includeSubheading, contentSelector, headingSelector } =
				attributes;

			const dataAttributes = {};
			if ( contentSelector ) {
				dataAttributes[ 'data-content-selector' ] = contentSelector;
			}
			if ( headingSelector ) {
				dataAttributes[ 'data-heading-selector' ] = headingSelector;
			}
			if ( includeSubheading !== undefined ) {
				dataAttributes[ 'data-include-subheading' ] = includeSubheading;
			}

			return (
				<div { ...useBlockProps.save() }>
					<div
						id="js-yard-table-of-contents"
						{ ...dataAttributes }
					></div>
				</div>
			);
		},
	},
];
