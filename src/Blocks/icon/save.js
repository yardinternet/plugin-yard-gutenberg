/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import Icon from './components/icon';

export default function save( props ) {
	const { attributes } = props;
	const { altText, iconSize } = attributes;

	const blockProps = useBlockProps.save( {
		className: 'yard-blocks-icon',
		style: { fontSize: iconSize },
	} );

	return (
		<p { ...useBlockProps.save() }>
			<Icon { ...props } />
			{ altText && <span className="sr-only">{ altText }</span> }
		</p>
	);
}
