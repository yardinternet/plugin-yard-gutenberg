/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { IconPickerControlToolbar } from '@yardinternet/gutenberg-components';
import { Icon } from '@yardinternet/gutenberg-components';
import Inspector from './components/inspector';

const Edit = ( props ) => {
	const { attributes, setAttributes } = props;
	const { icon } = attributes;

	return (
		<div { ...useBlockProps() }>
			<IconPickerControlToolbar
				icon={ icon }
				onChange={ ( result ) => {
					if ( result !== undefined ) {
						setAttributes( {
							icon: result,
						} );
					}
				} }
			/>
			<Inspector { ...props } />
			{ icon && <Icon { ...props } /> }
		</div>
	);
};

export default Edit;
