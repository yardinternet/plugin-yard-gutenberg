/**
 * WordPress dependencies
 */
import { Inserter } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { Icon, plus } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';

const TimelineButtonBlockAppender = ( {
	rootClientId,
	insertionPosition = 'append',
} ) => {
	const { firstInnerBlockClientId } = useSelect(
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

	const isPrepend = insertionPosition === 'prepend';
	const label = isPrepend
		? __( 'Voeg tijdlijn item vooraan toe.', 'yard-gutenberg' )
		: __( 'Voeg tijdlijn item toe.', 'yard-gutenberg' );

	return (
		<Inserter
			tooltipPosition={ isPrepend ? 'bottom' : 'top' }
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
