/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import Inspector from './components/inspector';
import Icon from './components/icon';
import './editor.scss';

export default function edit( props ) {
	const { attributes } = props;
	const { iconSize } = attributes;

	return (
		<div { ...useBlockProps() }>
			<Inspector { ...props } />
			<Icon { ...props } />
		</div>
	);
}
