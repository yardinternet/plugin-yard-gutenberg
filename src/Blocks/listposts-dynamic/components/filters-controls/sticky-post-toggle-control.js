/**
 * WordPress dependencies
 */
import { ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const StickyPostToggleControl = ( props ) => {
	const { removeParameter, setAttributes, attributes } = props;
	const { hasStickyPost } = attributes;

	const onChange = ( state ) => {
		setAttributes( { hasStickyPost: state } );

		if ( ! state ) {
			removeParameter( 'post__in' );
		}
	};

	return (
		<ToggleControl
			label={ __( 'Klevend item' ) }
			checked={ hasStickyPost }
			onChange={ onChange }
		/>
	);
};

export default StickyPostToggleControl;
