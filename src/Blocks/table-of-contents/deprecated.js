/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import metadata from './block.json';

const save = ( props ) => {
	const { attributes } = props;
	const { includeSubheading, contentSelector, headingSelector } = attributes;

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
			<div id="js-yard-table-of-contents" { ...dataAttributes }></div>
		</div>
	);
};

export default [
	// v0.2.0 - Static save markup, before server-side rendering
	{
		attributes: metadata.attributes,
		apiVersion: 3,
		supports: {
			html: false,
			multiple: false,
			reusable: false,
		},
		save,
	},
	// v0.1.0 - includeSubheading defaulted to true
	{
		attributes: {
			...metadata.attributes,
			includeSubheading: {
				type: 'boolean',
				default: true,
			},
		},
		apiVersion: 3,
		supports: {
			html: false,
			multiple: false,
			reusable: false,
		},
		save,
	},
];
