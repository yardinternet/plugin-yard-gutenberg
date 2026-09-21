/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default [
	// v0.1.0 - Static save markup, before server-side rendering
	{
		attributes: {},
		save: () => {
			const blockProps = useBlockProps.save( {
				className: 'splide__slide',
			} );

			return (
				<li { ...blockProps }>
					<InnerBlocks.Content />
				</li>
			);
		},
	},
];
