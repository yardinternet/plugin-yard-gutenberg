/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal dependencies
 */
import { TIMELINE_ITEM_ALLOWED_BLOCKS } from '../constants';

const Edit = () => {
	const TEMPLATE = applyFilters( 'yard.timeline-item-template', [
		[ 'core/heading', { level: 3, placeholder: 'Koptekst H3' } ],
		[ 'core/paragraph', { placeholder: 'Voeg de inhoud toe' } ],
	] );

	const ALLOWED_BLOCKS = applyFilters(
		'yard.timeline-item-allowed-blocks',
		TIMELINE_ITEM_ALLOWED_BLOCKS
	);

	return (
		<li { ...useBlockProps() }>
			<span className="wp-block-yard-timeline-item__line"></span>
			<span className="wp-block-yard-timeline-item__dot"></span>
			<div className="wp-block-yard-timeline-item__content">
				<InnerBlocks
					allowedBlocks={ ALLOWED_BLOCKS }
					template={ TEMPLATE }
					templateLock={ false }
				/>
			</div>
		</li>
	);
};

export default Edit;
