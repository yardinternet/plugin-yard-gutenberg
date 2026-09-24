/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps, RichText } from '@wordpress/block-editor';

export default [
	// v0.1.0 - Static save markup, before server-side rendering
	{
		attributes: {
			title: {
				type: 'string',
				source: 'html',
				selector: '.wp-block-yard-timeline-item-collapse__title',
				role: 'content',
			},
			headingLevel: {
				type: 'string',
				default: 'h3',
			},
			subtitle: {
				type: 'string',
				source: 'html',
				selector: '.wp-block-yard-timeline-item-collapse__subtitle',
				role: 'content',
			},
			isOpen: {
				type: 'boolean',
				default: false,
			},
			hasInnerBlocks: {
				type: 'boolean',
				default: false,
			},
		},
		apiVersion: 3,
		supports: {
			color: {
				background: true,
				text: true,
			},
			html: false,
		},
		save: ( { attributes } ) => {
			const { title, headingLevel, subtitle, isOpen, hasInnerBlocks } =
				attributes;

			const titleContent = (
				<>
					{ title && (
						<RichText.Content
							className="wp-block-yard-timeline-item-collapse__title"
							tagName={ headingLevel }
							value={ title }
						/>
					) }
					{ subtitle && (
						<RichText.Content
							className="wp-block-yard-timeline-item-collapse__subtitle"
							tagName="p"
							value={ subtitle }
						/>
					) }
				</>
			);

			return (
				<li
					{ ...useBlockProps.save( {
						className: 'wp-block-yard-timeline-item',
					} ) }
				>
					<span className="wp-block-yard-timeline-item__line"></span>
					<span className="wp-block-yard-timeline-item__dot"></span>
					<div className="wp-block-yard-timeline-item__content">
						{ hasInnerBlocks ? (
							<details
								className="wp-block-yard-timeline-item-collapse__details"
								open={ isOpen }
							>
								<summary className="wp-block-yard-timeline-item-collapse__summary">
									{ titleContent }
								</summary>
								<div className="wp-block-yard-timeline-item-collapse__inner-content">
									<InnerBlocks.Content />
								</div>
							</details>
						) : (
							titleContent
						) }
					</div>
				</li>
			);
		},
	},
];
