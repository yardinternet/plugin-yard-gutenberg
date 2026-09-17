/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default [
	// v0.1.0 - Static save markup, before server-side rendering
	{
		attributes: {},
		save: () => {
			return (
				<li { ...useBlockProps.save() }>
					<span className="wp-block-yard-timeline-item__line"></span>
					<span className="wp-block-yard-timeline-item__dot"></span>
					<div className="wp-block-yard-timeline-item__content">
						<InnerBlocks.Content />
					</div>
				</li>
			);
		},
	},
];
