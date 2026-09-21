/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default [
	// v0.1.0 - Static save markup, before server-side rendering
	{
		attributes: {
			align: {
				type: 'string',
				default: 'wide',
			},
			activeSlide: {
				type: 'string',
				default: null,
			},
		},
		save: () => {
			const blockProps = useBlockProps.save( {
				className: 'splide',
			} );

			return (
				<div { ...blockProps }>
					<div className="splide__track">
						<ul className="splide__list">
							<InnerBlocks.Content />
						</ul>
					</div>
				</div>
			);
		},
	},
];
