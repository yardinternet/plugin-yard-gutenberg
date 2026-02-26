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
	// Make sure both are registered in your project to use both.
	const ALLOWED_BLOCKS = [
		'yard/timeline-item',
		'yard/timeline-item-collapse',
	];

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
