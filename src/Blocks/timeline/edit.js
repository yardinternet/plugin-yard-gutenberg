/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { store as blocksStore } from '@wordpress/blocks';
import { useSelect } from '@wordpress/data';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal dependencies
 */
import Inspector from './components/inspector';
import TimelineButtonBlockAppender from './components/timeline-button-block-appender';
import './editor.scss';

const Edit = ( props ) => {
	const { attributes, clientId } = props;
	const { isOrderedList } = attributes;

	const List = isOrderedList ? 'ol' : 'ul';

	const { hasTimelineItemRegistered, hasTimelineItemCollapseRegistered } = useSelect(
		( select ) => {
			const { getBlockType } = select( blocksStore );

			return {
				hasTimelineItemRegistered: getBlockType( 'yard/timeline-item' ) !== undefined,
				hasTimelineItemCollapseRegistered: getBlockType( 'yard/timeline-item-collapse' ) !== undefined,
			};
		},
		[]
	);

	const ALLOWED_BLOCKS = [
		hasTimelineItemRegistered && 'yard/timeline-item',
		hasTimelineItemCollapseRegistered && 'yard/timeline-item-collapse',
	].filter( Boolean );

	let fallbackTemplate = [];

	if ( hasTimelineItemRegistered ) {
		fallbackTemplate = [ [ 'yard/timeline-item' ] ];
	} else if ( hasTimelineItemCollapseRegistered ) {
		fallbackTemplate = [ [ 'yard/timeline-item-collapse' ] ];
	}

	const TEMPLATE = applyFilters( 'yard.timeline-template', fallbackTemplate );

	return (
		<List { ...useBlockProps() }>
			<Inspector { ...props } allowedBlocks={ ALLOWED_BLOCKS } />
			<TimelineButtonBlockAppender
				rootClientId={ clientId }
				insertionPosition="prepend"
			/>
			<InnerBlocks
				allowedBlocks={ ALLOWED_BLOCKS }
				renderAppender={ false }
				template={ TEMPLATE }
			/>
			<TimelineButtonBlockAppender
				rootClientId={ clientId }
				insertionPosition="append"
			/>
		</List>
	);
};

export default Edit;
