/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Blocks/tabs/components/inspector.js":
/*!*************************************************!*\
  !*** ./src/Blocks/tabs/components/inspector.js ***!
  \*************************************************/
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
    attributes,
    setAttributes
  } = props;
  const {
    defaultTab,
    defaultTabEnabled,
    headingLevel
  } = attributes;
  const {
    currentBlockInnerBlocks,
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
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Instellingen')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Actief tabblad opgeven'),
    checked: defaultTabEnabled,
    onChange: () => setAttributes({
      defaultTabEnabled: !defaultTabEnabled
    })
  }), defaultTabEnabled && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Tabblad'),
    value: defaultTab,
    options: currentBlockInnerBlocks?.map(block => ({
      label: block.attributes.headingText,
      value: block.attributes.id
    })),
    onChange: value => {
      setAttributes({
        defaultTab: value
      });
    },
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Selecteer het tabblad dat standaard geopend moet zijn.')
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
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Selecteer het koptekst niveau voor de titels van de tab items.')
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/Blocks/tabs/edit.js":
/*!*********************************!*\
  !*** ./src/Blocks/tabs/edit.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _yardinternet_gutenberg_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @yardinternet/gutenberg-hooks */ "../../../../../../../../Projects/gutenberg-packages/packages/hooks/src/index.js");
/* harmony import */ var _components_inspector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/inspector */ "./src/Blocks/tabs/components/inspector.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor.scss */ "./src/Blocks/tabs/editor.scss");

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



const TEMPLATE = [['yard/tabs-item']];
const ALLOWED_BLOCKS = ['yard/tabs-item'];
const Edit = props => {
  const {
    attributes,
    setAttributes,
    clientId
  } = props;
  const {
    currentTab,
    defaultTab,
    defaultTabEnabled
  } = attributes;
  const {
    currentBlockInnerBlocks,
    currentBlockHasSelectedInnerBlock
  } = (0,_yardinternet_gutenberg_hooks__WEBPACK_IMPORTED_MODULE_4__.useCurrentBlock)();
  const {
    currentSelectedBlock,
    getClientIdsOfDescendants,
    getBlockAttributes
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => ({
    currentSelectedBlock: select('core/block-editor').getSelectedBlockClientId(),
    getClientIdsOfDescendants: select('core/block-editor').getClientIdsOfDescendants(clientId),
    getBlockAttributes: select('core/block-editor').getBlockAttributes
  }));
  const clientIdExist = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)(idToCheck => {
    return getClientIdsOfDescendants?.some(_clientId => {
      const {
        id: _id
      } = getBlockAttributes(_clientId);
      return idToCheck === _id;
    });
  }, [getClientIdsOfDescendants, getBlockAttributes]);

  /**
   * Set current tab attribute to use context 'yard/tabs-current-tab' in child blocks.
   * 1. When a defaultTab is selected, set the tab as currentTab
   * 2. Fallback to open the first tab and reset defaultTab
   */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (currentSelectedBlock || currentBlockHasSelectedInnerBlock) return;
    if (defaultTabEnabled && defaultTab) {
      return setAttributes({
        currentTab: defaultTab
      });
    }
    if (currentBlockInnerBlocks.length > 0) {
      setAttributes({
        defaultTab: currentBlockInnerBlocks.at(0)?.attributes.id,
        currentTab: currentBlockInnerBlocks.at(0)?.attributes.id
      });
    }
  }, [defaultTab, defaultTabEnabled, currentSelectedBlock, currentBlockInnerBlocks, currentBlockHasSelectedInnerBlock, setAttributes]);

  /**
   * When the user duplicate the tabs block, the currentTab en defaultTab need to be changed
   */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    const currentTabExist = clientIdExist(currentTab);
    const defaultTabExist = clientIdExist(defaultTab);
    if (!currentTabExist || !defaultTabExist) {
      setAttributes({
        defaultTab: currentBlockInnerBlocks.at(0)?.attributes.id,
        currentTab: currentBlockInnerBlocks.at(0)?.attributes.id
      });
    }
  }, [defaultTab, currentTab, clientIdExist, currentBlockInnerBlocks, setAttributes]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_inspector__WEBPACK_IMPORTED_MODULE_5__["default"], {
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

/***/ "./src/Blocks/tabs/icon.js":
/*!*********************************!*\
  !*** ./src/Blocks/tabs/icon.js ***!
  \*********************************/
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
    viewBox: "0 0 576 512"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M512 352H160c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32H277.5c8.5 0 16.6 3.4 22.6 9.4l26.5 26.5c18 18 42.4 28.1 67.9 28.1H512c17.7 0 32 14.3 32 32V320c0 17.7-14.3 32-32 32zM349.3 77.3L322.7 50.7c-12-12-28.3-18.7-45.3-18.7H160c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H394.5c-17 0-33.3-6.7-45.3-18.7zM32 112c0-8.8-7.2-16-16-16s-16 7.2-16 16V352c0 70.7 57.3 128 128 128H464c8.8 0 16-7.2 16-16s-7.2-16-16-16H128c-53 0-96-43-96-96V112z"
  })),
  ..._components_block_icon_color__WEBPACK_IMPORTED_MODULE_1__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (icon);

/***/ }),

/***/ "./src/Blocks/tabs/index.js":
/*!**********************************!*\
  !*** ./src/Blocks/tabs/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/Blocks/tabs/edit.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon */ "./src/Blocks/tabs/icon.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/Blocks/tabs/block.json");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/Blocks/tabs/save.js");
/* harmony import */ var _transforms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transforms */ "./src/Blocks/tabs/transforms.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./src/Blocks/tabs/style.scss");
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
  transforms: _transforms__WEBPACK_IMPORTED_MODULE_5__["default"],
  providesContext: {
    'yard/tabs-current-tab': 'currentTab'
  }
});

/***/ }),

/***/ "./src/Blocks/tabs/save.js":
/*!*********************************!*\
  !*** ./src/Blocks/tabs/save.js ***!
  \*********************************/
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
    defaultTab
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(),
    "data-default-tab": defaultTab
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null));
};
/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./src/Blocks/tabs/transforms.js":
/*!***************************************!*\
  !*** ./src/Blocks/tabs/transforms.js ***!
  \***************************************/
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
    blocks: ['yard/collapse'],
    transform: (attributes, innerBlocks) => {
      const transformedInnerBlocks = innerBlocks?.map(({
        attributes: childAttributes,
        innerBlocks: childInnerBlocks
      }) => {
        return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('yard/collapse-item', {
          headingLevel: childAttributes.headingLevel,
          headingText: childAttributes.headingText,
          icon: childAttributes.icon,
          iconAltText: childAttributes.iconAltText
        }, childInnerBlocks);
      });
      return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('yard/collapse', {
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

/***/ "./src/Blocks/tabs/editor.scss":
/*!*************************************!*\
  !*** ./src/Blocks/tabs/editor.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Blocks/tabs/style.scss":
/*!************************************!*\
  !*** ./src/Blocks/tabs/style.scss ***!
  \************************************/
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

/***/ "./src/Blocks/tabs/block.json":
/*!************************************!*\
  !*** ./src/Blocks/tabs/block.json ***!
  \************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"yard/tabs","version":"0.1.0","title":"Tabbladen","category":"yard","description":"Groepeer gemakkelijk content in verschillende tabbladen.","attributes":{"align":{"type":"string","default":"wide"},"currentTab":{"type":"string"},"defaultTab":{"type":"string"},"defaultTabEnabled":{"type":"boolean","default":false},"headingLevel":{"type":"string","default":"h3"}},"supports":{"html":false,"align":["wide","full"]},"textdomain":"yard","editorScript":"file:./index.js","editorStyle":"file:./index.css","viewScript":"file:./frontend.js","style":"file:./style-index.css"}');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"Blocks/tabs/index": 0,
/******/ 			"Blocks/tabs/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkyard_gutenberg"] = self["webpackChunkyard_gutenberg"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["Blocks/tabs/style-index"], function() { return __webpack_require__("./src/Blocks/tabs/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map