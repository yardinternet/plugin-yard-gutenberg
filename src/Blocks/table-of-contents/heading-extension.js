/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

// Themes may still ship a copy-pasted version of this extension. If it already added the attributes, skip ours to prevent a duplicate panel.
let isExtendedElsewhere = false;

/**
 * Add excludeFromTOC and overrideTOCText attributes to the heading block.
 *
 * @param {Object} settings - The block settings object.
 * @param {string} name     - The block name.
 */
const addTOCAttributes = ( settings, name ) => {
	if ( name !== 'core/heading' ) {
		return settings;
	}

	if ( settings.attributes?.excludeFromTOC ) {
		isExtendedElsewhere = true;
		return settings;
	}

	return {
		...settings,
		attributes: {
			...settings.attributes,
			excludeFromTOC: {
				type: 'boolean',
				default: false,
			},
			overrideTOCText: {
				type: 'string',
				default: '',
			},
		},
	};
};

const TOCPanel = ( { attributes, setAttributes } ) => {
	const { excludeFromTOC, overrideTOCText } = attributes;

	return (
		<InspectorControls>
			<PanelBody
				title={ __( 'Inhoudsopgave', 'yard-gutenberg' ) }
				initialOpen={ true }
			>
				<ToggleControl
					label={ __(
						'Sluit uit van inhoudsopgave',
						'yard-gutenberg'
					) }
					checked={ excludeFromTOC }
					onChange={ () =>
						setAttributes( {
							excludeFromTOC: ! excludeFromTOC,
						} )
					}
				/>
				{ ! excludeFromTOC && (
					<TextControl
						label={ __(
							'Overschrijf inhoudsopgave titel',
							'yard-gutenberg'
						) }
						value={ overrideTOCText }
						onChange={ ( value ) =>
							setAttributes( {
								overrideTOCText: value,
							} )
						}
					/>
				) }
			</PanelBody>
		</InspectorControls>
	);
};

const addTOCControls = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		if ( props.name !== 'core/heading' || isExtendedElsewhere ) {
			return <BlockEdit { ...props } />;
		}

		return (
			<>
				<TOCPanel { ...props } />
				<BlockEdit { ...props } />
			</>
		);
	};
}, 'withTOCControls' );

const addTOCEditorChanges = createHigherOrderComponent( ( BlockListBlock ) => {
	return ( props ) => {
		const {
			attributes: { excludeFromTOC },
			className,
			name,
		} = props;

		if (
			name !== 'core/heading' ||
			isExtendedElsewhere ||
			! excludeFromTOC
		) {
			return <BlockListBlock { ...props } />;
		}

		return (
			<BlockListBlock
				{ ...props }
				className={ `${ className ?? '' } yard-toc-is-excluded`.trim() }
			/>
		);
	};
}, 'withTOCEditorChanges' );

/**
 * Class and data attribute names match the defaults of @yardinternet/table-of-contents.
 *
 * @param {Object} props      - The props passed to the block.
 * @param {Object} blockType  - The block type.
 * @param {Object} attributes - The block attributes.
 */
const addTOCSaveChanges = ( props, blockType, attributes ) => {
	if ( blockType.name !== 'core/heading' || isExtendedElsewhere ) {
		return props;
	}
	const { className } = props;

	if ( attributes.excludeFromTOC ) {
		return {
			...props,
			className: `${ className ?? '' } yard-toc-is-excluded`.trim(),
		};
	}

	if ( attributes.overrideTOCText ) {
		return {
			...props,
			'data-yard-toc-overwrite-heading': attributes.overrideTOCText,
		};
	}

	return props;
};

addFilter(
	'blocks.registerBlockType',
	'yard/table-of-contents/heading',
	addTOCAttributes,
	20
);

addFilter(
	'editor.BlockEdit',
	'yard/table-of-contents/heading',
	addTOCControls
);

addFilter(
	'editor.BlockListBlock',
	'yard/table-of-contents/heading',
	addTOCEditorChanges
);

addFilter(
	'blocks.getSaveContent.extraProps',
	'yard/table-of-contents/heading',
	addTOCSaveChanges
);
