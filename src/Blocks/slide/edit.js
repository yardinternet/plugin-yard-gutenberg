/**
 * WordPress dependencies
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal dependencies
 */
import './editor.scss';

const Edit = ( props ) => {
	const { clientId, context } = props;

	const TEMPLATE = applyFilters( 'yard.slide-template', [
		[ 'core/paragraph' ],
	] );

	const blockProps = useBlockProps( {
		className:
			clientId === context[ 'yard/slider-active-slide' ]
				? ''
				: 'is-hidden',
	} );

	return (
		<div { ...blockProps }>
			<InnerBlocks templateLock={ false } template={ TEMPLATE } />
		</div>
	);
};

export default Edit;
