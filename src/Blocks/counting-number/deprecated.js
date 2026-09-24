/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import Number from './components/number';

export default [
	// v0.0.2 - Static save markup, before server-side rendering
	{
		attributes: {
			number: {
				type: 'string',
				default: '100',
			},
			numberPrefix: {
				type: 'string',
			},
			numberSuffix: {
				type: 'string',
			},
			hasThousandsSeparator: {
				type: 'boolean',
				default: false,
			},
			animationDuration: {
				type: 'number',
				default: 2.5,
			},
		},
		apiVersion: 3,
		supports: {
			align: true,
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
			const { hasThousandsSeparator, animationDuration, number } =
				attributes;

			return (
				<div
					{ ...useBlockProps.save() }
					data-hasthousandsseparator={ hasThousandsSeparator }
					data-animationduration={ animationDuration }
					data-number={ number?.replace( /\./g, ',' ) }
				>
					<Number { ...props } />
				</div>
			);
		},
	},
	// v0.0.1 - Without data-number attribute.
	{
		attributes: {
			number: {
				type: 'string',
				default: '100',
			},
			numberPrefix: {
				type: 'string',
			},
			numberSuffix: {
				type: 'string',
			},
			hasThousandsSeparator: {
				type: 'boolean',
				default: false,
			},
			animationDuration: {
				type: 'number',
				default: 2.5,
			},
		},
		apiVersion: 3,
		supports: {
			align: true,
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
			const {
				hasThousandsSeparator,
				animationDuration,
				number,
				numberPrefix,
				numberSuffix,
			} = attributes;

			return (
				<div
					{ ...useBlockProps.save() }
					data-hasthousandsseparator={ hasThousandsSeparator }
					data-animationduration={ animationDuration }
				>
					{ numberPrefix && (
						<span className="wp-block-yard-counting-number__prefix">
							{ numberPrefix }
						</span>
					) }
					<span className="wp-block-yard-counting-number__number">
						{ number.replace( /\./g, ',' ) }
					</span>
					{ numberSuffix && (
						<span className="wp-block-yard-counting-number__suffix">
							{ numberSuffix }
						</span>
					) }
				</div>
			);
		},
	},
];
