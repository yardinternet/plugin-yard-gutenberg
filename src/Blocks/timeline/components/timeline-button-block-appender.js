/**
 * WordPress dependencies
 */
import { Inserter } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import { Icon, plus } from '@wordpress/icons';
import { createBlock } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

const TimelineButtonBlockAppender = ( {
	rootClientId,
	allowedBlocks = [],
	insertionPosition = 'append',
} ) => {
	const { insertBlocks } = useDispatch( 'core/block-editor' );
	const { firstInnerBlockClientId, innerBlockCount } = useSelect(
		( select ) => {
			const innerBlockClientIds =
				select( 'core/block-editor' ).getBlockOrder( rootClientId ) ||
				[];

			return {
				firstInnerBlockClientId: innerBlockClientIds[ 0 ],
				innerBlockCount: innerBlockClientIds.length,
			};
		},
		[ rootClientId ]
	);

	if ( allowedBlocks.length === 0 ) {
		return null;
	}

	const isPrepend = insertionPosition === 'prepend';
	const label = isPrepend
		? __( 'Voeg tijdlijn item vooraan toe.', 'yard-gutenberg' )
		: __( 'Voeg tijdlijn item toe.', 'yard-gutenberg' );

	if ( allowedBlocks.length === 1 ) {
		return (
			<Button
				__next40pxDefaultSize
				className="block-editor-button-block-appender"
				aria-label={ label }
				onClick={ () =>
					insertBlocks(
						createBlock( allowedBlocks[ 0 ] ),
						isPrepend ? 0 : innerBlockCount,
						rootClientId
					)
				}
			>
				<Icon icon={ plus } />
			</Button>
		);
	}

	return (
		<Inserter
			position={ isPrepend ? 'bottom center' : 'top center' }
			rootClientId={ rootClientId }
			clientId={ isPrepend ? firstInnerBlockClientId : undefined }
			isAppender
			__experimentalIsQuick
			renderToggle={ ( {
				onToggle,
				disabled,
				isOpen,
				hasSingleBlockType,
			} ) => (
				<Button
					__next40pxDefaultSize
					className="block-editor-button-block-appender"
					aria-label={ label }
					onClick={ onToggle }
					aria-haspopup={ ! hasSingleBlockType ? 'true' : undefined }
					aria-expanded={ ! hasSingleBlockType ? isOpen : undefined }
					disabled={ disabled }
				>
					<Icon icon={ plus } />
				</Button>
			) }
		/>
	);
};

export default TimelineButtonBlockAppender;
