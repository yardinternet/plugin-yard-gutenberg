/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default [
	// v0.1.0 - Static save markup, before server-side rendering
	{
		attributes: {
			hasStructuredData: {
				type: 'boolean',
				default: false,
			},
			headingLevel: {
				type: 'string',
				default: 'h3',
			},
			showMultiple: {
				type: 'boolean',
				default: true,
			},
		},
		save: ( props ) => {
			const { attributes } = props;
			const { hasStructuredData, showMultiple } = attributes;

			return (
				<div
					{ ...useBlockProps.save() }
					data-multiple={ showMultiple }
					itemScope={ hasStructuredData }
					itemType={
						hasStructuredData ? 'https://schema.org/FAQPage' : null
					}
				>
					<InnerBlocks.Content />
				</div>
			);
		},
	},
];
