// Import the original config from the @wordpress/scripts package.
const defaultConfig = require("@wordpress/scripts/config/webpack.config");

// Import the helper to automatically find and generate the block entry points in the src directory based on block.json.
const {getWebpackEntryPoints} = require('@wordpress/scripts/utils/config');

// Add any new entry point by extending the webpack config.
module.exports = {
	...defaultConfig,
	entry: {
		...getWebpackEntryPoints(),
		// Add additional entry points here.
		admin: ['./resources/js/index.js', './resources/scss/style.scss']
	}
};
