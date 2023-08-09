/**
 * WordPress dependencies
 */
import { ComboboxControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useEffect, useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { searchPosts, fetchPostById } from '../../utils/api';

const PostParentComboboxControl = ( props ) => {
	const { query, setParameter, attributes } = props;
	const { postParentOption } = attributes;
	const [ options, setOptions ] = useState( [] );

	useEffect( () => {
		if ( query.post_parent && query.post_parent !== 0 ) {
			getSelectedPost();
		}
	}, [] );

	const mapOptions = ( optionsToMap ) => {
		return optionsToMap.map( ( item ) => ( {
			value: item.id,
			label: `#${ item.id }: ${ item.title }`,
		} ) );
	};

	const getSelectedPost = async () => {
		const post = await fetchPostById( query.post_parent );

		setOptions( mapOptions( post ) );
	};

	const onValueChange = async ( searchValue ) => {
		let subtype = 'any';

		if ( query.post_type.length > 0 ) {
			subtype = query.post_type.join( ',' );
		}

		const posts = await searchPosts( searchValue, subtype );

		setOptions( mapOptions( posts ) );
	};

	return (
		postParentOption === 'specific-parent' && (
			<ComboboxControl
				label={ __( 'Selecteer item' ) }
				hideLabelFromVision={ true }
				value={ query.post_parent }
				options={ options }
				onChange={ ( value ) => setParameter( 'post_parent', value ) }
				help={ __(
					'Selecteer het hoofditem waar de subitems van getoond moeten worden.'
				) }
				onFilterValueChange={ onValueChange }
			/>
		)
	);
};

export default PostParentComboboxControl;
