/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { Button, PanelBody, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * External dependencies
 */
import { useParentBlock } from '@yardinternet/gutenberg-hooks';

const Inspector = ( props ) => {
	const { attributes, setAttributes } = props;
	const { isOpen } = attributes;

	const { selectParentBlock } = useParentBlock();

	return (
		<InspectorControls>
			<PanelBody title={ __( 'Instellingen', 'yard-gutenberg' ) }>
				<ToggleControl
					checked={ isOpen }
					label={ __( 'Toon standaard open', 'yard-gutenberg' ) }
					onChange={ ( value ) => setAttributes( { isOpen: value } ) }
				/>
			</PanelBody>
			<PanelBody
				title={ __( 'Toegankelijkheid', 'yard-gutenberg' ) }
				initialOpen={ false }
			>
				<p>
					{ __(
						'Pas de koptekst niveaus aan via het hoofdblok (Tijdlijn).',
						'yard-gutenberg'
					) }
				</p>
				<Button variant="secondary" onClick={ selectParentBlock }>
					{ __( 'Selecteer hoofdblok (Tijdlijn)', 'yard-gutenberg' ) }
				</Button>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
