/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

/**
 * External dependencies
 */
import { Icon } from '@yardinternet/gutenberg-components';

const staticSave = ( hasRoles, ariaSelected ) => ( props ) => {
	const { attributes } = props;
	const { headingLevel, headingText, icon, id } = attributes;
	const HeadingWithLevel = headingLevel;

	return (
		<>
			<HeadingWithLevel
				{ ...useBlockProps.save( {
					className: 'wp-block-yard-tabs-item__heading',
				} ) }
			>
				<button
					id={ `tabs-item-button-${ id }` }
					className="wp-block-yard-tabs-item__button"
					role={ hasRoles ? 'tab' : undefined }
					aria-controls={ `tabs-item-panel-${ id }` }
					aria-selected={ ariaSelected }
				>
					{ icon && <Icon { ...props } /> }
					{ headingText }
				</button>
			</HeadingWithLevel>

			<div
				{ ...useBlockProps.save( {
					className: 'wp-block-yard-tabs-item__panel',
				} ) }
				id={ `tabs-item-panel-${ id }` }
				role={ hasRoles ? 'tabpanel' : undefined }
				aria-hidden="true"
				aria-labelledby={ `tabs-item-button-${ id }` }
			>
				<InnerBlocks.Content />
			</div>
		</>
	);
};

// v0.1.1 - Static save markup, before server-side rendering
const v011 = {
	attributes: {
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
		id: {
			type: 'string',
		},
	},
	apiVersion: 3,
	supports: {
		anchor: true,
		contentRole: true,
		html: false,
		reusable: false,
	},
	save: staticSave( true, 'false' ),
};

// v0.1.0 - Without role="tab" and role="tabpanel"
const v010 = {
	attributes: {
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
		id: {
			type: 'string',
		},
	},
	apiVersion: 3,
	supports: {
		anchor: true,
		contentRole: true,
		html: false,
		reusable: false,
	},
	save: staticSave( false, 'false' ),
};

export default [
	v011,
	// v0.1.1 saved without unfiltered_html: kses strips aria-selected
	{ ...v011, save: staticSave( true ) },
	v010,
	// v0.1.0 saved without unfiltered_html
	{ ...v010, save: staticSave( false ) },
];
