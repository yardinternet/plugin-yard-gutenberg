/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { useDispatch } from '@wordpress/data';
import { createBlock, getBlockType } from '@wordpress/blocks';
import { Icon, plus } from '@wordpress/icons';

/**
 * External dependencies
 */
import { useCurrentBlock } from '@yardinternet/gutenberg-hooks';

/**
 * Internal dependencies
 */
import Inspector from './components/inspector';
import './editor.scss';

const Edit = ( props ) => {
	const { clientId } = props;
	const { currentBlockInnerBlocks } = useCurrentBlock();
	const { insertBlock } = useDispatch( 'core/block-editor' );

	const TEMPLATE = [ [ 'yard/iconlist-item' ] ];
	const ALLOWED_BLOCKS = [ 'yard/iconlist-item' ];

	/**
	 * Inserts an iconlist-item with the same icon as the previous item.
	 */
	const insertIconListItem = () => {
		const lastBlock =
			currentBlockInnerBlocks.length > 0
				? currentBlockInnerBlocks[ currentBlockInnerBlocks.length - 1 ]
				: null;
		const blockType = getBlockType( 'yard/iconlist-item' );
		const defaultIcon = blockType.attributes.icon.default;

		const icon = lastBlock ? lastBlock.attributes.icon : defaultIcon;

		const block = createBlock( 'yard/iconlist-item', {
			icon,
		} );

		insertBlock( block, currentBlockInnerBlocks.length, clientId );
	};

	return (
		<ul { ...useBlockProps() }>
			<Inspector { ...props } />
			<InnerBlocks
				allowedBlocks={ ALLOWED_BLOCKS }
				renderAppender={ () => (
					<button
						onClick={ insertIconListItem }
						className={
							'components-button block-editor-button-block-appender'
						}
					>
						<Icon icon={ plus } />
					</button>
				) }
				template={ TEMPLATE }
			/>
		</ul>
	);
};

export default Edit;
