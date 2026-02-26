/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * External dependencies
 */
import { useCurrentBlock } from '@yardinternet/gutenberg-hooks';

const Inspector = ( props ) => {
	const { setAttributes, attributes, allowedBlocks } = props;
	const { isOrderedList, headingLevel } = attributes;

	const { setAllCurrentBlockInnerBlocksAttributes } = useCurrentBlock();

	/**
	 * Handles the change event for heading level and update inner blocks attributes.
	 *
	 * @param {string} value - The new value for heading level.
	 */
	const onChangeHeadingLevel = ( value ) => {
		setAttributes( { headingLevel: value } );
		setAllCurrentBlockInnerBlocksAttributes( { headingLevel: value } );
	};

	return (
		<InspectorControls>
			<PanelBody title={ __( 'Eigenschappen', 'yard-gutenberg' ) }>
				<ToggleControl
					label={ __( 'Gebruik geordende lijst', 'yard-gutenberg' ) }
					checked={ isOrderedList }
					onChange={ ( value ) =>
						setAttributes( {
							isOrderedList: value,
						} )
					}
				/>
			</PanelBody>
			{ allowedBlocks.includes( 'yard/timeline-item-collapse' ) && (
				<PanelBody title={ __( 'Toegankelijkheid', 'yard-gutenberg' ) }>
					<SelectControl
						label={ __( 'Koptekst', 'yard-gutenberg' ) }
						value={ headingLevel }
						options={ [
							{ label: 'Geen', value: 'div' },
							{ label: 'H2', value: 'h2' },
							{ label: 'H3', value: 'h3' },
							{ label: 'H4', value: 'h4' },
							{ label: 'H5', value: 'h5' },
							{ label: 'H6', value: 'h6' },
						] }
						onChange={ onChangeHeadingLevel }
						help={ __(
							'Selecteer het koptekst niveau voor de titels van de uitklapbare tijdlijn items.',
							'yard-gutenberg'
						) }
					/>
				</PanelBody>
			) }
		</InspectorControls>
	);
};

export default Inspector;
