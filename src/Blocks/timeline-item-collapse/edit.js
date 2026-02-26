/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps, RichText } from '@wordpress/block-editor';
import { applyFilters } from '@wordpress/hooks';
import { useEffect, useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

/**
 * External dependencies
 */
import { useParentBlock } from '@yardinternet/gutenberg-hooks';

/**
 * Internal dependencies
 */
import Inspector from './components/inspector';
import { TIMELINE_ITEM_ALLOWED_BLOCKS } from '../constants';

const Edit = ( props ) => {
	const { attributes, setAttributes, clientId } = props;
	const { title, headingLevel, subtitle, isOpen } = attributes;
	const [ isOpenEditorState, setIsOpenEditorState ] = useState( isOpen );

	// The template is intentionally left empty. If users do not add blocks inside the collapse block, hasInnerBlocks will be false. This ensures the title and subtitle are rendered outside the details tag, preventing empty details tags on the frontend when users only want to display the title and subtitle.
	const TEMPLATE = applyFilters( 'yard.timeline-item-collapse-template', [] );

	const ALLOWED_BLOCKS = applyFilters(
		'yard.timeline-item-collapse-allowed-blocks',
		TIMELINE_ITEM_ALLOWED_BLOCKS
	);

	const hasInnerBlocks = useSelect(
		( select ) => {
			const block = select( 'core/block-editor' ).getBlock( clientId );
			return block?.innerBlocks.length > 0;
		},
		[ clientId ]
	);

	const { parentAttributes } = useParentBlock();

	useEffect( () => {
		setAttributes( {
			headingLevel: parentAttributes.headingLevel ?? 'h3',
		} );
	}, [ setAttributes, parentAttributes.headingLevel ] );

	useEffect( () => {
		setAttributes( { hasInnerBlocks } );
	}, [ hasInnerBlocks, setAttributes ] );

	const handleSummaryClick = ( event ) => {
		event.preventDefault();

		if ( event.target.closest( '.block-editor-rich-text__editable' ) ) {
			return;
		}

		setIsOpenEditorState( ( currentState ) => ! currentState );
	};

	return (
		<>
			<Inspector { ...props } />

			<li
				{ ...useBlockProps( {
					className: 'wp-block-yard-timeline-item',
				} ) }
			>
				<span className="wp-block-yard-timeline-item__line"></span>
				<span className="wp-block-yard-timeline-item__dot"></span>
				<div className="wp-block-yard-timeline-item__content">
					<details
						className="wp-block-yard-timeline-item-collapse__details"
						open={ isOpenEditorState }
					>
						<summary
							className="wp-block-yard-timeline-item-collapse__summary"
							onClick={ handleSummaryClick }
						>
							<RichText
								className="wp-block-yard-timeline-item-collapse__title"
								tagName={ headingLevel }
								placeholder={ __( 'Titel', 'yard-gutenberg' ) }
								value={ title }
								allowedFormats={ [] }
								onChange={ ( value ) =>
									setAttributes( { title: value } )
								}
							/>
							<RichText
								className="wp-block-yard-timeline-item-collapse__subtitle"
								tagName="p"
								placeholder={ __(
									'Optionele subtitel',
									'yard-gutenberg'
								) }
								value={ subtitle }
								allowedFormats={ [] }
								onChange={ ( value ) =>
									setAttributes( { subtitle: value } )
								}
							/>
						</summary>
						<div className="wp-block-yard-timeline-item-collapse__inner-content">
							<InnerBlocks
								allowedBlocks={ ALLOWED_BLOCKS }
								template={ TEMPLATE }
								templateLock={ false }
							/>
						</div>
					</details>
				</div>
			</li>
		</>
	);
};

export default Edit;
