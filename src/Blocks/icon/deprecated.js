/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * External dependencies
 */
import { Icon } from '@yardinternet/gutenberg-components';

export default [
	// v0.1.0 - Static save markup, before server-side rendering
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
		},
		apiVersion: 3,
		supports: {
			align: true,
			ariaLabel: true,
			color: {
				background: true,
				color: true,
			},
			contentRole: true,
			spacing: {
				margin: true,
				padding: true,
			},
			typography: {
				fontSize: true,
			},
		},
		save: ( props ) => {
			const { attributes } = props;
			const { icon } = attributes;

			return (
				<div { ...useBlockProps.save() }>
					{ icon && <Icon { ...props } /> }
				</div>
			);
		},
	},
];
