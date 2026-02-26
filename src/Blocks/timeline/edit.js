/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
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

	const TEMPLATE = applyFilters( 'yard.timeline-template', [
		[ 'yard/timeline-item' ],
	] );
	const ALLOWED_BLOCKS = applyFilters( 'yard.timeline-allowed-blocks', [
		'yard/timeline-item',
	] );

	return (
		<List { ...useBlockProps() }>
			<Inspector { ...props } allowedBlocks={ ALLOWED_BLOCKS } />
			<TimelineButtonBlockAppender
				rootClientId={ clientId }
				allowedBlocks={ ALLOWED_BLOCKS }
				insertionPosition="prepend"
			/>
			<InnerBlocks
				allowedBlocks={ ALLOWED_BLOCKS }
				renderAppender={ false }
				template={ TEMPLATE }
			/>
			<TimelineButtonBlockAppender
				rootClientId={ clientId }
				allowedBlocks={ ALLOWED_BLOCKS }
				insertionPosition="append"
			/>
		</List>
	);
};

export default Edit;
