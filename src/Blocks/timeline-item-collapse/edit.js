/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps, RichText } from '@wordpress/block-editor';
import { applyFilters } from '@wordpress/hooks';
import { useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';

const Edit = ( props ) => {
	const { attributes, setAttributes, clientId } = props;
	const { title, titleHeadingLevel, subtitle } = attributes;

	// This template is on purpose empty so when the users doesnt adds blocks inside the collapse block, it will return false for hasInnerBlocks and render the title and subtitle outside of the details tag. This is to prevent empty details tags in the frontend when users only want to use the block for its title and subtitle.
	const TEMPLATE = applyFilters( 'yard.timeline-item-collapse-template', [] );

	const ALLOWED_BLOCKS = applyFilters(
		'yard.timeline-item-collapse-allowed-blocks',
		[
			'core/audio',
			'core/block',
			'core/button',
			'core/buttons',
			'core/cover',
			'core/embed',
			'core/file',
			'core/gallery',
			'core/group',
			'core/heading',
			'core/image',
			'core/list-item',
			'core/list',
			'core/media-text',
			'core/paragraph',
			'core/quote',
			'core/separator',
			'core/table',
			'core/video',
			'yard/icon',
			'yard/iconlist',
			'yard/iconlist-item',
		]
	);

	const hasInnerBlocks = useSelect(
		( select ) => {
			const block = select( 'core/block-editor' ).getBlock( clientId );
			return block?.innerBlocks.length > 0;
		},
		[ clientId ]
	);

	useEffect( () => {
		setAttributes( { hasInnerBlocks } );
	}, [ hasInnerBlocks ] );

	return (
		<li
			{ ...useBlockProps( { className: 'wp-block-yard-timeline-item' } ) }
		>
			<span className="wp-block-yard-timeline-item__line"></span>
			<span className="wp-block-yard-timeline-item__dot"></span>
			<div className="wp-block-yard-timeline-item__content">
				<details
					className="wp-block-yard-timeline-item-collapse__details"
					open
				>
					<summary className="wp-block-yard-timeline-item-collapse__summary">
						<RichText
							className="wp-block-yard-timeline-item-collapse__title"
							tagName={ titleHeadingLevel }
							placeholder="Titel"
							value={ title }
							allowedFormats={ [] }
							onChange={ ( value ) =>
								setAttributes( { title: value } )
							}
						/>
						<RichText
							className="wp-block-yard-timeline-item-collapse__subtitle"
							tagName="p"
							placeholder="Optionele subtitel"
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
	);
};

export default Edit;
