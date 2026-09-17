/**
 * WordPress dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';

/**
 * External dependencies
 */
import { Icon } from '@yardinternet/gutenberg-components';

export default [
	// v0.1.1 - Static save markup, before server-side rendering
	{
		attributes: {
			icon: {
				type: 'string',
				default: 'fa-classic fa-light fa-envelope',
				role: 'content',
			},
			iconAltText: {
				type: 'string',
				default: '',
			},
			listText: {
				type: 'string',
				default: '',
				role: 'content',
			},
			linkUrl: {
				type: 'string',
				default: '',
				role: 'content',
			},
			opensInNewTab: {
				type: 'boolean',
				default: false,
				role: 'content',
			},
		},
		save: ( props ) => {
			const { attributes } = props;
			const { listText, linkUrl, opensInNewTab } = attributes;

			const linkProps = opensInNewTab
				? { target: '_blank', rel: 'noopener noreferrer' }
				: {};

			return (
				<li { ...useBlockProps.save() }>
					<Icon { ...props } />

					{ linkUrl ? (
						<a
							href={ linkUrl }
							{ ...linkProps }
							className="wp-block-yard-iconlist-item__link"
						>
							<RichText.Content value={ listText } />
						</a>
					) : (
						<RichText.Content
							className="wp-block-yard-iconlist-item__text"
							tagName="span"
							value={ listText }
						/>
					) }
				</li>
			);
		},
	},
	// v0.1.0 - Remove iconColor attribute (and unused linkText attribute)
	{
		attributes: {
			icon: {
				type: 'string',
				default: 'fa-classic fa-light fa-envelope',
			},
			iconAltText: {
				type: 'string',
				default: '',
			},
			iconColor: {
				type: 'string',
			},
			listText: {
				type: 'string',
				default: '',
			},
			linkText: {
				type: 'string',
				default: '',
			},
			linkUrl: {
				type: 'string',
				default: '',
			},
			opensInNewTab: {
				type: 'boolean',
				default: false,
			},
		},
		save: ( props ) => {
			const { attributes } = props;
			const {
				icon,
				iconAltText,
				iconColor,
				listText,
				linkUrl,
				opensInNewTab,
			} = attributes;

			const linkProps = opensInNewTab
				? { target: '_blank', rel: 'noopener noreferrer' }
				: {};

			return (
				<li { ...useBlockProps.save() }>
					<i
						className={ `wp-block-yard-icon-component fa-fw ${ icon } ` }
						title={ iconAltText ? iconAltText : null }
						aria-hidden="true"
						style={ { color: iconColor } }
					></i>

					{ linkUrl ? (
						<a
							href={ linkUrl }
							{ ...linkProps }
							className="wp-block-yard-iconlist-item__link"
						>
							<RichText.Content value={ listText } />
						</a>
					) : (
						<RichText.Content
							className="wp-block-yard-iconlist-item__text"
							tagName="span"
							value={ listText }
						/>
					) }
				</li>
			);
		},
	},
];
