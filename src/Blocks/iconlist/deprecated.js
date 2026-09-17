/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default [
	// v0.1.1 - Static save markup, before server-side rendering
	{
		attributes: {
			useLinkComponent: {
				type: 'boolean',
				default: false,
			},
		},
		save: () => {
			return (
				<ul { ...useBlockProps.save() }>
					<InnerBlocks.Content />
				</ul>
			);
		},
	},
];
