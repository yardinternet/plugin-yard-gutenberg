/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

/**
 * External dependencies
 */
import { Icon } from '@yardinternet/gutenberg-components';

export default [
	// v0.2.0 - Static save markup, before server-side rendering
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
			headingText: {
				type: 'string',
				default: '',
				role: 'content',
			},
			icon: {
				type: 'string',
				default: '',
			},
			iconAltText: {
				type: 'string',
				default: '',
			},
			isOpen: {
				type: 'boolean',
				default: false,
			},
			anchor: {
				type: 'string',
				default: '',
			},
			hasSubtitle: {
				type: 'boolean',
				default: false,
			},
			subtitleText: {
				type: 'string',
				default: '',
				role: 'content',
			},
		},
		apiVersion: 3,
		supports: {
			anchor: true,
			html: false,
			reusable: false,
		},
		save: ( props ) => {
			const { attributes } = props;
			const {
				hasStructuredData,
				headingLevel,
				headingText,
				icon,
				isOpen,
				anchor,
				hasSubtitle,
				subtitleText,
			} = attributes;
			const HeadingWithLevel = headingLevel;

			const { id, ...blockProps } = useBlockProps.save( {
				className: 'wp-block-yard-collapse-item | ac',
			} );

			return (
				<div
					{ ...blockProps }
					data-open={ isOpen }
					itemScope={ hasStructuredData }
					itemProp={ hasStructuredData ? 'mainEntity' : null }
					itemType={
						hasStructuredData ? 'https://schema.org/Question' : null
					}
				>
					<HeadingWithLevel
						className="wp-block-yard-collapse-item__header | ac-header"
						id={ anchor }
					>
						<button
							type="button"
							className="wp-block-yard-collapse-item__header-button | ac-trigger"
							itemProp={ hasStructuredData ? 'name' : null }
						>
							{ icon && <Icon { ...props } /> }
							<span className="wp-block-yard-collapse-item__header-button-title">
								{ headingText }
							</span>
							{ hasSubtitle && subtitleText && (
								<span className="wp-block-yard-collapse-item__header-button-subtitle">
									{ subtitleText }
								</span>
							) }
						</button>
					</HeadingWithLevel>
					<div
						className={ `wp-block-yard-collapse-item__panel ${
							isOpen ? '' : 'is-collapse-item-closed'
						} | ac-panel` }
						itemScope={ hasStructuredData }
						itemProp={ hasStructuredData ? 'acceptedAnswer' : null }
						itemType={
							hasStructuredData
								? 'https://schema.org/Answer'
								: null
						}
					>
						<div
							className="wp-block-yard-collapse-item__panel-content"
							itemProp={ hasStructuredData ? 'text' : null }
						>
							<InnerBlocks.Content />
						</div>
					</div>
				</div>
			);
		},
	},
	// v0.1.2 - Without <span> around the title
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
			headingText: {
				type: 'string',
				default: '',
			},
			icon: {
				type: 'string',
				default: '',
			},
			iconAltText: {
				type: 'string',
				default: '',
			},
			isOpen: {
				type: 'boolean',
				default: false,
			},
			anchor: {
				type: 'string',
				default: '',
			},
		},
		apiVersion: 3,
		supports: {
			anchor: true,
			html: false,
			reusable: false,
		},
		save: ( props ) => {
			const { attributes } = props;
			const {
				hasStructuredData,
				headingLevel,
				headingText,
				icon,
				isOpen,
				anchor,
			} = attributes;
			const HeadingWithLevel = headingLevel;

			const { id, ...blockProps } = useBlockProps.save( {
				className: 'wp-block-yard-collapse-item | ac',
			} );

			return (
				<div
					{ ...blockProps }
					data-open={ isOpen }
					itemScope={ hasStructuredData }
					itemProp={ hasStructuredData ? 'mainEntity' : null }
					itemType={
						hasStructuredData ? 'https://schema.org/Question' : null
					}
				>
					<HeadingWithLevel
						className="wp-block-yard-collapse-item__header | ac-header"
						id={ anchor }
					>
						<button
							type="button"
							className="wp-block-yard-collapse-item__header-button | ac-trigger"
							itemProp={ hasStructuredData ? 'name' : null }
						>
							{ icon && <Icon { ...props } /> }
							{ headingText }
						</button>
					</HeadingWithLevel>
					<div
						className={ `wp-block-yard-collapse-item__panel ${
							isOpen ? '' : 'is-collapse-item-closed'
						} | ac-panel` }
						itemScope={ hasStructuredData }
						itemProp={ hasStructuredData ? 'acceptedAnswer' : null }
						itemType={
							hasStructuredData
								? 'https://schema.org/Answer'
								: null
						}
					>
						<div
							className="wp-block-yard-collapse-item__panel-content"
							itemProp={ hasStructuredData ? 'text' : null }
						>
							<InnerBlocks.Content />
						</div>
					</div>
				</div>
			);
		},
	},
	// v0.1.1 - Without "is-collapse-item-closed" classname on collapse-item panel
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
			headingText: {
				type: 'string',
				default: '',
			},
			icon: {
				type: 'string',
				default: '',
			},
			iconAltText: {
				type: 'string',
				default: '',
			},
			isOpen: {
				type: 'boolean',
				default: false,
			},
			anchor: {
				type: 'string',
				default: '',
			},
		},
		apiVersion: 3,
		supports: {
			anchor: true,
			html: false,
			reusable: false,
		},
		save: ( props ) => {
			const { attributes } = props;
			const {
				hasStructuredData,
				headingLevel,
				headingText,
				icon,
				isOpen,
				anchor,
			} = attributes;
			const HeadingWithLevel = headingLevel;

			const { id, ...blockProps } = useBlockProps.save( {
				className: 'wp-block-yard-collapse-item | ac',
			} );

			return (
				<div
					{ ...blockProps }
					data-open={ isOpen }
					itemScope={ hasStructuredData }
					itemProp={ hasStructuredData ? 'mainEntity' : null }
					itemType={
						hasStructuredData ? 'https://schema.org/Question' : null
					}
				>
					<HeadingWithLevel
						className="wp-block-yard-collapse-item__header | ac-header"
						id={ anchor }
					>
						<button
							type="button"
							className="wp-block-yard-collapse-item__header-button | ac-trigger"
							itemProp={ hasStructuredData ? 'name' : null }
						>
							{ icon && <Icon { ...props } /> }
							{ headingText }
						</button>
					</HeadingWithLevel>
					<div
						className="wp-block-yard-collapse-item__panel | ac-panel"
						itemScope={ hasStructuredData }
						itemProp={ hasStructuredData ? 'acceptedAnswer' : null }
						itemType={
							hasStructuredData
								? 'https://schema.org/Answer'
								: null
						}
					>
						<div
							className="wp-block-yard-collapse-item__panel-content"
							itemProp={ hasStructuredData ? 'text' : null }
						>
							<InnerBlocks.Content />
						</div>
					</div>
				</div>
			);
		},
	},
];
