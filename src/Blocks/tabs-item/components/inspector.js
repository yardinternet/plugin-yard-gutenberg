/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { IconPickerControlInspector } from '@components/icon-picker-control';

const Inspector = ( props ) => {
	const { attributes, setAttributes, enableIcon } = props;
	const { icon, iconAltText } = attributes;

	return (
		<InspectorControls>
			{ enableIcon && (
				<PanelBody title={ __( 'Icoon instellingen' ) }>
					<IconPickerControlInspector
						icon={ icon }
						onChange={ ( result ) => {
							if ( result !== undefined ) {
								setAttributes( {
									icon: result,
								} );
							}
						} }
						displayDeleteIcon={ true }
						handleRemove={ () => setAttributes( { icon: '' } ) }
					/>
					<TextControl
						label={ __( 'Alternatieve tekst' ) }
						value={ iconAltText }
						onChange={ ( value ) =>
							setAttributes( {
								iconAltText: value,
							} )
						}
						help={ __(
							'Voeg een alternatieve tekst toe als een icoon betekenis heeft.'
						) }
					/>
				</PanelBody>
			) }
		</InspectorControls>
	);
};

export default Inspector;
