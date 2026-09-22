/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default [
	// v0.1.1 - Static save markup, before server-side rendering
	{
		attributes: {
			align: {
				type: 'string',
				default: 'wide',
			},
			currentTab: {
				type: 'string',
			},
			defaultTab: {
				type: 'string',
			},
			defaultTabEnabled: {
				type: 'boolean',
				default: false,
			},
			headingLevel: {
				type: 'string',
				default: 'h3',
			},
		},
		apiVersion: 3,
		supports: {
			html: false,
			align: [ 'wide', 'full' ],
			contentRole: true,
			listView: true,
		},
		save( { attributes } ) {
			const { defaultTab } = attributes;
			return (
				<div
					{ ...useBlockProps.save() }
					role="tablist"
					data-default-tab={ defaultTab }
				>
					<InnerBlocks.Content />
				</div>
			);
		},
	},
	// v0.1.0 - No role="tablist"
	{
		attributes: {
			defaultTab: {
				type: 'string',
				default: '',
			},
		},
		apiVersion: 3,
		supports: {
			html: false,
			align: [ 'wide', 'full' ],
			contentRole: true,
			listView: true,
		},
		save( { attributes } ) {
			const { defaultTab } = attributes;
			return (
				<div
					{ ...useBlockProps.save() }
					data-default-tab={ defaultTab }
				>
					<InnerBlocks.Content />
				</div>
			);
		},
	},
];
