/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default [
	// v0.2.0 - Static save markup, before server-side rendering
	{
		attributes: {
			isOrderedList: {
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
			align: [ 'wide' ],
			color: {
				background: true,
				text: true,
			},
			contentRole: true,
			html: false,
			listView: true,
		},
		save: ( props ) => {
			const { attributes } = props;
			const { isOrderedList } = attributes;

			const List = isOrderedList ? 'ol' : 'ul';

			return (
				<List { ...useBlockProps.save() }>
					<InnerBlocks.Content />
				</List>
			);
		},
	},
];
