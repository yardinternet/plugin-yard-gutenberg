/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Blocks/slider/components/track.js":
/*!***********************************************!*\
  !*** ./src/Blocks/slider/components/track.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const Track = ({
  currentSlide,
  innerBlocks,
  selectSlide,
  insertSlide
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, null, innerBlocks?.map((slide, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    key: slide.clientId,
    variant: slide.clientId === currentSlide ? 'primary' : 'secondary',
    onClick: () => selectSlide(slide.clientId)
  }, index + 1)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "secondary",
    onClick: insertSlide
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    "aria-hidden": "true",
    focusable: "false"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z"
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (Track);

/***/ }),

/***/ "./src/Blocks/slider/edit.js":
/*!***********************************!*\
  !*** ./src/Blocks/slider/edit.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _yardinternet_gutenberg_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @yardinternet/gutenberg-hooks */ "../../../../../../../../Projects/gutenberg-packages/packages/hooks/src/index.js");
/* harmony import */ var _components_track__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/track */ "./src/Blocks/slider/components/track.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./src/Blocks/slider/editor.scss");

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



const TEMPLATE = [['yard/slide']];
const ALLOWED_BLOCKS = ['yard/slide'];
const Edit = props => {
  const {
    setAttributes,
    clientId
  } = props;
  const [currentSlide, setCurrentSlide] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  const {
    currentBlockInnerBlocks
  } = (0,_yardinternet_gutenberg_hooks__WEBPACK_IMPORTED_MODULE_5__.useCurrentBlock)();
  const currentSelectedBlock = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => select('core/block-editor').getSelectedBlockClientId());
  const {
    insertBlock,
    selectBlock
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)('core/block-editor');

  /**
   * Insert slide (at the end of the slider)
   */
  const insertSlide = () => {
    const slide = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.createBlock)('yard/slide');
    insertBlock(slide, currentBlockInnerBlocks.length, clientId);
    setCurrentSlide(slide.clientId);
  };

  /**
   * Set and select an active slide.
   *
   * @param {number} id
   */
  const selectSlide = id => {
    setCurrentSlide(id);
    selectBlock(id);
  };

  /**
   * When placing the block for the first time in the content, set the first slide as active slide.
   */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (currentBlockInnerBlocks.length > 0 && !currentSlide) {
      setCurrentSlide(currentBlockInnerBlocks[0].clientId);
    }
  }, [currentBlockInnerBlocks]);

  /**
   * Set attribute to use "providesContext" in child slide blocks
   */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    setAttributes({
      activeSlide: currentSlide
    });
  }, [currentSlide]);

  /**
   * Edge case: sometimes the currentSlide is null, showing an empty slider (for example when you delete a slide).
   * In that case, we need to set the currentSlide to the selectedBlock from the core/block-editor store.
   */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (currentBlockInnerBlocks.some(block => block.clientId === currentSelectedBlock)) {
      setCurrentSlide(currentSelectedBlock);
    }
  }, [currentBlockInnerBlocks, currentSelectedBlock]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_track__WEBPACK_IMPORTED_MODULE_6__["default"], {
    currentSlide: currentSlide,
    innerBlocks: currentBlockInnerBlocks,
    selectSlide: selectSlide,
    insertSlide: insertSlide
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
    renderAppender: false,
    allowedBlocks: ALLOWED_BLOCKS,
    defaultBlock: ALLOWED_BLOCKS,
    template: TEMPLATE,
    templateLock: false
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_track__WEBPACK_IMPORTED_MODULE_6__["default"], {
    currentSlide: currentSlide,
    innerBlocks: currentBlockInnerBlocks,
    selectSlide: selectSlide,
    insertSlide: insertSlide
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/Blocks/slider/icon.js":
/*!***********************************!*\
  !*** ./src/Blocks/slider/icon.js ***!
  \***********************************/
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
    viewBox: "0 0 576 512"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M224 272V224H448v48 80H224V272zm0-80V144 64H448v80 48H224zM464 32H448 224 208 192 160c-35.3 0-64 28.7-64 64v32 16 16 96 16 16 32c0 35.3 28.7 64 64 64h32 16 16H448h16 16 32c35.3 0 64-28.7 64-64V288 272 256 160 144 128 96c0-35.3-28.7-64-64-64H480 464zM160 64h32v64H128V96c0-17.7 14.3-32 32-32zm-32 96h64v48 48H128V160zm0 160V288h64v64H160c-17.7 0-32-14.3-32-32zm384 32H480V288h64v32c0 17.7-14.3 32-32 32zm32-96H480V208 160h64v96zm0-128H480V64h32c17.7 0 32 14.3 32 32v32zM32 112c0-8.8-7.2-16-16-16s-16 7.2-16 16V352c0 70.7 57.3 128 128 128H464c8.8 0 16-7.2 16-16s-7.2-16-16-16H128c-53 0-96-43-96-96V112z"
  })),
  ..._components_block_icon_color__WEBPACK_IMPORTED_MODULE_1__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (icon);

/***/ }),

/***/ "./src/Blocks/slider/save.js":
/*!***********************************!*\
  !*** ./src/Blocks/slider/save.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const Save = () => {
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: 'splide'
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "splide__track"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "splide__list"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null))));
};
/* harmony default export */ __webpack_exports__["default"] = (Save);

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

/***/ "./src/Blocks/slider/editor.scss":
/*!***************************************!*\
  !*** ./src/Blocks/slider/editor.scss ***!
  \***************************************/
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

/***/ "./src/Blocks/slider/block.json":
/*!**************************************!*\
  !*** ./src/Blocks/slider/block.json ***!
  \**************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"yard/slider","version":"0.1.0","title":"Slider","category":"yard","description":"Voeg slider toe.","attributes":{"align":{"type":"string","default":"wide"},"activeSlide":{"type":"string","default":null}},"supports":{"html":false,"align":["wide","full"],"spacing":{"margin":true,"padding":true}},"textdomain":"yard","editorScript":"file:./index.js","editorStyle":"file:./index.css"}');

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
/*!************************************!*\
  !*** ./src/Blocks/slider/index.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/Blocks/slider/edit.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon */ "./src/Blocks/slider/icon.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/Blocks/slider/block.json");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/Blocks/slider/save.js");
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
  providesContext: {
    'yard/slider-active-slide': 'activeSlide'
  }
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map