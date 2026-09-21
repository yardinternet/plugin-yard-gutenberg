/**
 * Internal dependencies
 */
import metadata from './block.json';
import save from './save';

export default [
// v0.1.0 - includeSubheading defaulted to true, now it's false
	{
		attributes: {
			...metadata.attributes,
			includeSubheading: {
				type: 'boolean',
				default: true,
			},
		},
		save,
	},
];
