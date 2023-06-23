/**
 * WordPress dependencies
 */
import { createRoot } from '@wordpress/element';

/**
 * Internal dependencies
 */
import App from './App';

const domNode = document.getElementById( 'yard-gutenberg-page-settings' );

if ( domNode ) {
	const root = createRoot( domNode );
	root.render( <App /> );
}
