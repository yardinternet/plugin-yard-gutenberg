/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Blocks/collapse/components/inspector.js":
/*!*****************************************************!*\
  !*** ./src/Blocks/collapse/components/inspector.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _yardinternet_gutenberg_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @yardinternet/gutenberg-hooks */ "../../../../../../../../Projects/gutenberg-packages/packages/hooks/src/index.js");

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */

const Inspector = props => {
  const {
    setAttributes,
    attributes
  } = props;
  const {
    hasStructuredData,
    headingLevel,
    showMultiple
  } = attributes;
  const {
    setAllCurrentBlockInnerBlocksAttributes
  } = (0,_yardinternet_gutenberg_hooks__WEBPACK_IMPORTED_MODULE_4__.useCurrentBlock)();

  /**
   * Handles the change event for heading level and update inner blocks attributes.
   *
   * @param {string} value - The new value for heading level.
   */
  const onChangeHeadingLevel = value => {
    setAttributes({
      headingLevel: value
    });
    setAllCurrentBlockInnerBlocksAttributes({
      headingLevel: value
    });
  };

  /**
   * Handles the change event for structured data and update inner blocks attributes.
   *
   * @param {boolean} value - The new value for structured data.
   */
  const onChangeHasStructuredData = value => {
    setAttributes({
      hasStructuredData: value
    });
    setAllCurrentBlockInnerBlocksAttributes({
      hasStructuredData: value
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Instellingen')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Toon als accordion'),
    checked: showMultiple,
    onChange: value => setAttributes({
      showMultiple: value
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Als accordion sluiten de uitklap items na klik op een ander item.')
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Toegankelijkheid')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Koptekst'),
    value: headingLevel,
    options: [{
      label: 'Geen',
      value: 'div'
    }, {
      label: 'H2',
      value: 'h2'
    }, {
      label: 'H3',
      value: 'h3'
    }, {
      label: 'H4',
      value: 'h4'
    }, {
      label: 'H5',
      value: 'h5'
    }, {
      label: 'H6',
      value: 'h6'
    }],
    onChange: onChangeHeadingLevel,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Selecteer het koptekst niveau voor de titels van de uitklap items.')
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('SEO instellingen')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Voeg FAQ structured data toe'),
    checked: hasStructuredData,
    onChange: onChangeHasStructuredData,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Als in dit blok veelgestelde vragen worden weergegeven, kan er structured data worden toegevoegd voor SEO.')
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/Blocks/collapse/edit.js":
/*!*************************************!*\
  !*** ./src/Blocks/collapse/edit.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_inspector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/inspector */ "./src/Blocks/collapse/components/inspector.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/Blocks/collapse/editor.scss");

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


const TEMPLATE = [['yard/collapse-item']];
const ALLOWED_BLOCKS = ['yard/collapse-item'];
const Edit = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_inspector__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
    allowedBlocks: ALLOWED_BLOCKS,
    renderAppender: () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.ButtonBlockAppender, null),
    template: TEMPLATE
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/Blocks/collapse/icon.js":
/*!*************************************!*\
  !*** ./src/Blocks/collapse/icon.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_block_icon_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/block-icon-color */ "./src/EditorComponents/block-icon-color/index.js");

/**
 * Internal dependencies
 */

const icon = {
  src: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "1em",
    viewBox: "0 0 512 512"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M52.7 75.3l192 192c6.2 6.2 16.4 6.2 22.6 0l192-192c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L256 233.4 75.3 52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6zm0 192l192 192c6.2 6.2 16.4 6.2 22.6 0l192-192c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L256 425.4 75.3 244.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6z"
  })),
  ..._components_block_icon_color__WEBPACK_IMPORTED_MODULE_1__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (icon);

/***/ }),

/***/ "./src/Blocks/collapse/save.js":
/*!*************************************!*\
  !*** ./src/Blocks/collapse/save.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const Save = props => {
  const {
    attributes
  } = props;
  const {
    hasStructuredData,
    showMultiple
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(),
    "data-multiple": showMultiple,
    itemScope: hasStructuredData,
    itemType: hasStructuredData ? 'https://schema.org/FAQPage' : null
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null));
};
/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./src/Blocks/collapse/transforms.js":
/*!*******************************************!*\
  !*** ./src/Blocks/collapse/transforms.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

const transforms = {
  to: [{
    type: 'block',
    blocks: ['yard/tabs'],
    transform: (attributes, innerBlocks) => {
      const transformedInnerBlocks = innerBlocks?.map(({
        attributes: childAttributes,
        clientId: childClientId,
        innerBlocks: childInnerBlocks
      }) => {
        return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('yard/tabs-item', {
          headingLevel: childAttributes.headingLevel,
          headingText: childAttributes.headingText,
          icon: childAttributes.icon,
          iconAltText: childAttributes.iconAltText,
          id: childClientId
        }, childInnerBlocks);
      });
      return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('yard/tabs', {
        headingLevel: attributes.headingLevel
      }, transformedInnerBlocks);
    }
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (transforms);

/***/ }),

/***/ "./src/EditorComponents/block-icon-color/index.js":
/*!********************************************************!*\
  !*** ./src/EditorComponents/block-icon-color/index.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "./src/EditorComponents/block-icon-color/editor.scss");
/**
 * Internal dependencies
 */

const blockIconColor = {
  foreground: '#00a49e'
};
/* harmony default export */ __webpack_exports__["default"] = (blockIconColor);

/***/ }),

/***/ "../../../../../../../../Projects/gutenberg-packages/packages/hooks/src/index.js":
/*!***************************************************************************************!*\
  !*** ../../../../../../../../Projects/gutenberg-packages/packages/hooks/src/index.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCurrentBlock: function() { return /* reexport safe */ _use_current_block__WEBPACK_IMPORTED_MODULE_0__.useCurrentBlock; },
/* harmony export */   useParentBlock: function() { return /* reexport safe */ _use_parent_block__WEBPACK_IMPORTED_MODULE_1__.useParentBlock; }
/* harmony export */ });
/* harmony import */ var _use_current_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-current-block */ "../../../../../../../../Projects/gutenberg-packages/packages/hooks/src/use-current-block/index.js");
/* harmony import */ var _use_parent_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-parent-block */ "../../../../../../../../Projects/gutenberg-packages/packages/hooks/src/use-parent-block/index.js");



/***/ }),

/***/ "../../../../../../../../Projects/gutenberg-packages/packages/hooks/src/use-current-block/index.js":
/*!*********************************************************************************************************!*\
  !*** ../../../../../../../../Projects/gutenberg-packages/packages/hooks/src/use-current-block/index.js ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCurrentBlock: function() { return /* binding */ useCurrentBlock; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress dependencies
 */



const useCurrentBlock = () => {
  const {
    clientId
  } = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockEditContext)();

  /**
   * Returns the current block
   *
   * @see https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#getblock
   */
  const currentBlock = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.store).getBlock(clientId));
  const currentBlockInnerBlocks = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    var _currentBlock$innerBl;
    return (_currentBlock$innerBl = currentBlock.innerBlocks) !== null && _currentBlock$innerBl !== void 0 ? _currentBlock$innerBl : [];
  }, [currentBlock.innerBlocks]);

  /**
   * Returns the current block attributes
   *
   * @see https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#getblockattributes
   */
  const currentBlockAttributes = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.store).getBlockAttributes(currentBlock.clientId));

  /**
   * Returns true if one of the current block inner blocks is selected
   *
   * @see https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#hasselectedinnerblock
   */
  const currentBlockHasSelectedInnerBlock = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.store).hasSelectedInnerBlock(currentBlock.clientId, true));
  const {
    updateBlockAttributes
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.store);

  /**
   * Action to update all inner blocks attributes of the current block
   *
   * @see https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#updateblockattributes
   *
   * @param {Object} attributes - the attributes to update
   */
  const setAllCurrentBlockInnerBlocksAttributes = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(attributes => {
    currentBlockInnerBlocks.forEach(child => updateBlockAttributes(child.clientId, attributes));
  }, [currentBlockInnerBlocks, updateBlockAttributes]);
  return {
    currentBlock,
    currentBlockAttributes,
    currentBlockInnerBlocks,
    currentBlockHasSelectedInnerBlock,
    setAllCurrentBlockInnerBlocksAttributes
  };
};

/***/ }),

/***/ "../../../../../../../../Projects/gutenberg-packages/packages/hooks/src/use-parent-block/index.js":
/*!********************************************************************************************************!*\
  !*** ../../../../../../../../Projects/gutenberg-packages/packages/hooks/src/use-parent-block/index.js ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useParentBlock: function() { return /* binding */ useParentBlock; }
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress dependencies
 */



const useParentBlock = () => {
  const {
    clientId
  } = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockEditContext)();

  /**
   * Returns the list of blocks of all its parents from top to bottom
   *
   * @see https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#getblockparents
   */
  const parentBlocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.store).getBlockParents(clientId));
  const parentBlockClientId = parentBlocks.at(-1);

  /**
   * Returns the parent block
   *
   * @see https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#getblock
   */
  const parentBlock = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.store).getBlock(parentBlockClientId));

  /**
   * Returns the parent block attributes
   *
   * @see https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#getblockattributes
   */
  const parentAttributes = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.store).getBlockAttributes(parentBlockClientId));
  const {
    updateBlockAttributes,
    selectBlock
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.store);

  /**
   * Action to update parent block attributes
   *
   * @see https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#updateblockattributes
   *
   * @param {Object} attributes - the attributes to update
   */
  const setParentAttributes = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(attributes => {
    updateBlockAttributes(parentBlockClientId, attributes);
  }, [updateBlockAttributes, parentBlockClientId]);

  /**
   * Action to select the parent block
   *
   * @see https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#selectblock
   */
  const selectParentBlock = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    selectBlock(parentBlockClientId);
  }, [selectBlock, parentBlockClientId]);
  return {
    parentBlock,
    parentAttributes,
    setParentAttributes,
    selectParentBlock
  };
};

/***/ }),

/***/ "./src/Blocks/collapse/editor.scss":
/*!*****************************************!*\
  !*** ./src/Blocks/collapse/editor.scss ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/EditorComponents/block-icon-color/editor.scss":
/*!***********************************************************!*\
  !*** ./src/EditorComponents/block-icon-color/editor.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/Blocks/collapse/block.json":
/*!****************************************!*\
  !*** ./src/Blocks/collapse/block.json ***!
  \****************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"yard/collapse","version":"0.1.0","title":"Uitklap","category":"yard","description":"Voeg uitklapbare blokken toe om inhoud in en uit te kunnen vouwen.","attributes":{"hasStructuredData":{"type":"boolean","default":false},"headingLevel":{"type":"string","default":"h3"},"showMultiple":{"type":"boolean","default":true}},"supports":{"html":false,"align":["wide","full"]},"textdomain":"yard","editorScript":"file:./index.js","editorStyle":"file:./index.css","viewScript":"file:./frontend.js"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**************************************!*\
  !*** ./src/Blocks/collapse/index.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/Blocks/collapse/edit.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon */ "./src/Blocks/collapse/icon.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/Blocks/collapse/block.json");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/Blocks/collapse/save.js");
/* harmony import */ var _transforms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transforms */ "./src/Blocks/collapse/transforms.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  icon: _icon__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"],
  transforms: _transforms__WEBPACK_IMPORTED_MODULE_5__["default"]
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map