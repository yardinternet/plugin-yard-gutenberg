/**
 * External dependencies
 */
import Select from 'react-select';

/**
 * WordPress dependencies
 */
import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { fetchTermsByTaxonomy } from '../../utils/api';
import { mapTermsToOptions } from '../../utils/helpers';

const TaxonomySelectControl = ( props ) => {
	const { taxonomy, query, setParameter, removeParameter } = props;
	const [ options, setOptions ] = useState( [] );
	const [ selectedTerms, setSelectedTerms ] = useState( [] );

	useEffect( () => {
		const getTerms = async () => {
			const allTerms = await fetchTermsByTaxonomy( taxonomy.rest_base );
			const mappedTerms = mapTermsToOptions( allTerms );

			setOptions( mappedTerms );
		};

		getTerms();
	}, [ taxonomy.rest_base ] );

	useEffect( () => {
		if ( ! options.length ) return;

		for ( const key in query.tax_query ) {
			const taxQueryItem = query.tax_query[ key ];

			if ( taxQueryItem.taxonomy === taxonomy.slug ) {
				const terms = taxQueryItem.terms.map( ( item ) => {
					const option = options.find(
						( opt ) => opt.value === item
					);
					return option
						? { value: option.value, label: option.label }
						: null;
				} );

				setSelectedTerms( terms );
			}
		}
	}, [ query.tax_query, options, taxonomy.slug ] );

	useEffect( () => {
		let taxQuery;

		if ( ! selectedTerms ) return;

		const mappedTerms = selectedTerms?.map( ( t ) => t.value );
		const isEmpty = mappedTerms.length === 0;

		if ( query.tax_query ) {
			let exist = false;
			taxQuery = query.tax_query;

			for ( const key in taxQuery ) {
				if ( taxQuery[ key ].taxonomy === taxonomy.slug ) {
					exist = true;

					if ( isEmpty ) {
						delete taxQuery[ key ];
					} else {
						taxQuery[ key ].terms = mappedTerms;
					}

					break;
				}
			}

			if ( ! exist ) {
				const highestIndex = Object.keys( taxQuery )
					.map( Number )
					.filter( ( x ) => ! isNaN( x ) );
				const newIndex = Math.max( ...highestIndex ) + 1;

				taxQuery[ newIndex ] = {
					taxonomy: taxonomy.slug,
					field: 'slug',
					terms: mappedTerms,
				};
			}
		} else if ( ! isEmpty ) {
			taxQuery = {
				relation: 'AND',
				0: {
					taxonomy: taxonomy.slug,
					field: 'slug',
					terms: mappedTerms,
				},
			};
		}

		if ( taxQuery ) {
			if ( Object.keys( taxQuery ).length > 1 ) {
				setParameter( 'tax_query', taxQuery );
			} else {
				removeParameter( 'tax_query' );
			}
		}
	}, [ selectedTerms ] );

	return (
		<>
			<p className="yard-query-inspector-label">{ taxonomy.name }</p>
			<Select
				isMulti
				value={ selectedTerms }
				options={ options }
				onChange={ ( option ) => setSelectedTerms( option ) }
			/>
		</>
	);
};

export default TaxonomySelectControl;
