/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/Managers/ContentManager/index.js":
/*!*****************************************************!*\
  !*** ./src/client/Managers/ContentManager/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_ContentfulClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/ContentfulClient */ \"./src/client/services/ContentfulClient/index.js\");\n\n\n\n\n\n\nvar ContentManager =\n/*#__PURE__*/\nfunction () {\n  function ContentManager(_ref) {\n    var contentfulType = _ref.contentfulType;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, ContentManager);\n\n    this.contentfulManager = _services_ContentfulClient__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n    this.contentfulType = contentfulType;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(ContentManager, [{\n    key: \"getContentfulContent\",\n    value: function () {\n      var _getContentfulContent = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n      /*#__PURE__*/\n      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var result;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return this.contentfulManager.getModels({\n                  content_type: this.contentfulType\n                });\n\n              case 2:\n                result = _context.sent;\n                return _context.abrupt(\"return\", result.items[0]);\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function getContentfulContent() {\n        return _getContentfulContent.apply(this, arguments);\n      }\n\n      return getContentfulContent;\n    }()\n  }]);\n\n  return ContentManager;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContentManager);\n\n//# sourceURL=webpack:///./src/client/Managers/ContentManager/index.js?");

/***/ }),

/***/ "./src/client/components/App/App.jsx":
/*!*******************************************!*\
  !*** ./src/client/components/App/App.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _normalize_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./normalize.scss */ \"./src/client/components/App/normalize.scss\");\n/* harmony import */ var _normalize_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_normalize_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n // CSS\n\n\n\nvar App = function App(_ref) {\n  var route = _ref.route;\n  var routes = route.routes;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, Object(react_router_config__WEBPACK_IMPORTED_MODULE_2__[\"renderRoutes\"])(routes));\n};\n\nApp.propTypes = {\n  route: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/client/components/App/App.jsx?");

/***/ }),

/***/ "./src/client/components/App/index.js":
/*!********************************************!*\
  !*** ./src/client/components/App/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./src/client/components/App/App.jsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  component: _App__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/client/components/App/index.js?");

/***/ }),

/***/ "./src/client/components/App/normalize.scss":
/*!**************************************************!*\
  !*** ./src/client/components/App/normalize.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/client/components/App/normalize.scss?");

/***/ }),

/***/ "./src/client/components/Common/Heading/Heading.jsx":
/*!**********************************************************!*\
  !*** ./src/client/components/Common/Heading/Heading.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"@babel/runtime/helpers/taggedTemplateLiteral\");\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_screenSizeHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/screenSizeHelper */ \"./src/client/utils/screenSizeHelper.js\");\n\n\nfunction _templateObject2() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    font-size: 4.5rem;\\n  \"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    font-size: 5rem;\\n  \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar Heading1 = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({\n  displayName: \"Heading__Heading1\",\n  componentId: \"hxitf-0\"\n})([\"font-family:'Roboto',sans-serif;font-weight:bold;font-size:6.5rem;line-height:1.6;color:\", \";\", \"\"], function (props) {\n  return props.invert ? 'black' : '#f1f1f1';\n}, _utils_screenSizeHelper__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sm(_templateObject()));\nvar Heading2 = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({\n  displayName: \"Heading__Heading2\",\n  componentId: \"hxitf-1\"\n})([\"font-family:'Roboto',sans-serif;font-weight:bold;font-size:5rem;text-transform:uppercase;line-height:1.6;color:\", \";position:relative;text-align:center;margin-bottom:\", \";align-self:\", \";::after{content:'';position:absolute;bottom:0;width:10%;left:50%;transform:translateX(-50%);border-bottom:5px solid #2ec4b6;}\", \"\"], function (props) {\n  return props.invert ? 'white' : 'black';\n}, function (props) {\n  return props.invert ? '30px' : '50px';\n}, function (props) {\n  return props.invert ? 'stretch' : 'auto';\n}, _utils_screenSizeHelper__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sm(_templateObject2()));\nvar Heading3 = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({\n  displayName: \"Heading__Heading3\",\n  componentId: \"hxitf-2\"\n})([\"font-family:'Roboto',sans-serif;font-weight:bold;font-size:2rem;line-height:1.6;color:\", \";margin-bottom:20px;\"], function (props) {\n  return props.invert ? 'white' : '#2EC4B6';\n});\n\nvar Heading = function Heading(_ref) {\n  var className = _ref.className,\n      level = _ref.level,\n      tag = _ref.tag,\n      invert = _ref.invert,\n      children = _ref.children;\n  var htmlTag = tag ? tag : level;\n\n  switch (level) {\n    case 'h1':\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Heading1, {\n        as: htmlTag,\n        className: className,\n        invert: invert\n      }, children);\n\n    case 'h2':\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Heading2, {\n        as: htmlTag,\n        className: className,\n        invert: invert\n      }, children);\n\n    case 'h3':\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Heading3, {\n        as: htmlTag,\n        className: className,\n        invert: invert\n      }, children);\n\n    default:\n      return null;\n  }\n};\n\nHeading.defaultProps = {\n  tag: null,\n  invert: false\n};\nHeading.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,\n  level: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,\n  tag: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Heading);\n\n//# sourceURL=webpack:///./src/client/components/Common/Heading/Heading.jsx?");

/***/ }),

/***/ "./src/client/components/Common/Heading/index.js":
/*!*******************************************************!*\
  !*** ./src/client/components/Common/Heading/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Heading */ \"./src/client/components/Common/Heading/Heading.jsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Heading__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/client/components/Common/Heading/index.js?");

/***/ }),

/***/ "./src/client/components/Common/Paragraph/Paragraph.jsx":
/*!**************************************************************!*\
  !*** ./src/client/components/Common/Paragraph/Paragraph.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar PTag = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p.withConfig({\n  displayName: \"Paragraph__PTag\",\n  componentId: \"u8t2se-0\"\n})([\"font-family:'Cabin',sans-serif;font-size:1.8rem;line-height:1.6;color:\", \";\"], function (props) {\n  return props.inverted ? '#f1f1f1' : 'black';\n});\n\nvar Paragraph = function Paragraph(_ref) {\n  var className = _ref.className,\n      children = _ref.children,\n      inverted = _ref.inverted;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PTag, {\n    className: className,\n    inverted: inverted\n  }, children);\n};\n\nParagraph.defaultProps = {\n  inverted: false\n};\nParagraph.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,\n  inverted: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Paragraph);\n\n//# sourceURL=webpack:///./src/client/components/Common/Paragraph/Paragraph.jsx?");

/***/ }),

/***/ "./src/client/components/Common/Paragraph/index.js":
/*!*********************************************************!*\
  !*** ./src/client/components/Common/Paragraph/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Paragraph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Paragraph */ \"./src/client/components/Common/Paragraph/Paragraph.jsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Paragraph__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/client/components/Common/Paragraph/index.js?");

/***/ }),

/***/ "./src/client/components/Common/Wrapper/Wrapper.jsx":
/*!**********************************************************!*\
  !*** ./src/client/components/Common/Wrapper/Wrapper.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"@babel/runtime/helpers/taggedTemplateLiteral\");\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_screenSizeHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/screenSizeHelper */ \"./src/client/utils/screenSizeHelper.js\");\n\n\nfunction _templateObject2() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    width: 95%;\\n  \"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    width: 90%;\\n  \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({\n  displayName: \"Wrapper__Container\",\n  componentId: \"sc-1rm02zx-0\"\n})([\"max-width:1280px;width:80%;margin:0 auto;\", \" \", \"\"], _utils_screenSizeHelper__WEBPACK_IMPORTED_MODULE_4__[\"default\"].lg(_templateObject()), _utils_screenSizeHelper__WEBPACK_IMPORTED_MODULE_4__[\"default\"].md(_templateObject2()));\n\nvar Wrapper = function Wrapper(_ref) {\n  var className = _ref.className,\n      children = _ref.children;\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {\n    className: className\n  }, children);\n};\n\nWrapper.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Wrapper);\n\n//# sourceURL=webpack:///./src/client/components/Common/Wrapper/Wrapper.jsx?");

/***/ }),

/***/ "./src/client/components/Common/Wrapper/index.js":
/*!*******************************************************!*\
  !*** ./src/client/components/Common/Wrapper/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Wrapper */ \"./src/client/components/Common/Wrapper/Wrapper.jsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Wrapper__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/client/components/Common/Wrapper/index.js?");

/***/ }),

/***/ "./src/client/components/MyPortfolio/About/About.jsx":
/*!***********************************************************!*\
  !*** ./src/client/components/MyPortfolio/About/About.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"@babel/runtime/helpers/taggedTemplateLiteral\");\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Common_Wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Common/Wrapper */ \"./src/client/components/Common/Wrapper/index.js\");\n/* harmony import */ var _Common_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Common/Heading */ \"./src/client/components/Common/Heading/index.js\");\n/* harmony import */ var _Common_Paragraph__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Common/Paragraph */ \"./src/client/components/Common/Paragraph/index.js\");\n/* harmony import */ var _utils_screenSizeHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/screenSizeHelper */ \"./src/client/utils/screenSizeHelper.js\");\n\n\nfunction _templateObject3() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    text-align: center;\\n  \"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n  margin-right: 0;\\n    margin-bottom: 30px;\\n    width: 250px;\\n    height: 350px;\\n  \"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    flex-direction: column;\\n    align-items: center;\\n  \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_Common_Wrapper__WEBPACK_IMPORTED_MODULE_4__[\"default\"]).withConfig({\n  displayName: \"About__Container\",\n  componentId: \"sc-1a21jnj-0\"\n})([\"position:relative;z-index:20;\"]);\nvar ColumnWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({\n  displayName: \"About__ColumnWrapper\",\n  componentId: \"sc-1a21jnj-1\"\n})([\"display:flex;width:100%;\", \"\"], _utils_screenSizeHelper__WEBPACK_IMPORTED_MODULE_7__[\"default\"].lg(_templateObject()));\nvar ImgComtainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({\n  displayName: \"About__ImgComtainer\",\n  componentId: \"sc-1a21jnj-2\"\n})([\"width:300px;height:400px;box-shadow:10px 10px #36454f;margin-right:55px;\", \"\"], _utils_screenSizeHelper__WEBPACK_IMPORTED_MODULE_7__[\"default\"].lg(_templateObject2()));\nvar ProfileImage = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.img.withConfig({\n  displayName: \"About__ProfileImage\",\n  componentId: \"sc-1a21jnj-3\"\n})([\"object-fit:cover;width:100%;height:100%;\"]);\nvar TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({\n  displayName: \"About__TextContainer\",\n  componentId: \"sc-1a21jnj-4\"\n})([\"flex:1 0 60%;display:flex;flex-direction:column;justify-content:center;\"]);\nvar Text = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_Common_Paragraph__WEBPACK_IMPORTED_MODULE_6__[\"default\"]).withConfig({\n  displayName: \"About__Text\",\n  componentId: \"sc-1a21jnj-5\"\n})([\"margin-bottom:15px;:last-of-type{margin-bottom:0;}\", \"\"], _utils_screenSizeHelper__WEBPACK_IMPORTED_MODULE_7__[\"default\"].md(_templateObject3()));\n\nvar About = function About(_ref) {\n  var content = _ref.content;\n  var title = content.title,\n      profileImage = content.profileImage,\n      paragraphs = content.paragraphs;\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, null, title && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Common_Heading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    level: \"h2\"\n  }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ColumnWrapper, null, profileImage && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ImgComtainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProfileImage, {\n    src: profileImage.url,\n    alt: profileImage.description\n  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextContainer, null, paragraphs && paragraphs.map(function (paragraph) {\n    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, {\n      key: paragraph._id\n    }, paragraph.text);\n  }))));\n};\n\nAbout.propTypes = {\n  content: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\n\n//# sourceURL=webpack:///./src/client/components/MyPortfolio/About/About.jsx?");

/***/ }),

/***/ "./src/client/components/MyPortfolio/About/index.js":
/*!**********************************************************!*\
  !*** ./src/client/components/MyPortfolio/About/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About */ \"./src/client/components/MyPortfolio/About/About.jsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_About__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/client/components/MyPortfolio/About/index.js?");

/***/ }),

/***/ "./src/client/components/MyPortfolio/Contact/Contact.jsx":
/*!***************************************************************!*\
  !*** ./src/client/components/MyPortfolio/Contact/Contact.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"@babel/runtime/helpers/taggedTemplateLiteral\");\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Common_Wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Common/Wrapper */ \"./src/client/components/Common/Wrapper/index.js\");\n/* harmony import */ var _Common_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Common/Heading */ \"./src/client/components/Common/Heading/index.js\");\n/* harmony import */ var _Common_Paragraph__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Common/Paragraph */ \"./src/client/components/Common/Paragraph/index.js\");\n/* harmony import */ var _utils_screenSizeHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/screenSizeHelper */ \"./src/client/utils/screenSizeHelper.js\");\n\n\nfunction _templateObject2() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    letter-spacing: 1px;\\n  \"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    font-size: 1.8rem;\\n  \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_Common_Wrapper__WEBPACK_IMPORTED_MODULE_4__[\"default\"]).withConfig({\n  displayName: \"Contact__Container\",\n  componentId: \"sc-1h0xb7-0\"\n})([\"position:relative;z-index:30;display:flex;flex-direction:column;align-items:center;\"]);\nvar ContactText = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_Common_Paragraph__WEBPACK_IMPORTED_MODULE_6__[\"default\"]).withConfig({\n  displayName: \"Contact__ContactText\",\n  componentId: \"sc-1h0xb7-1\"\n})([\"color:white;margin-bottom:10px;text-align:center;\"]);\nvar EmailLink = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.a.withConfig({\n  displayName: \"Contact__EmailLink\",\n  componentId: \"sc-1h0xb7-2\"\n})([\"color:#2ec4b6;text-decoration:none;letter-spacing:5px;font-size:2.2rem;transition:color 0.2s;:hover,:active{color:white;}\", \" \", \"\"], _utils_screenSizeHelper__WEBPACK_IMPORTED_MODULE_7__[\"default\"].md(_templateObject()), _utils_screenSizeHelper__WEBPACK_IMPORTED_MODULE_7__[\"default\"].sm(_templateObject2()));\nvar SocialList = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.ul.withConfig({\n  displayName: \"Contact__SocialList\",\n  componentId: \"sc-1h0xb7-3\"\n})([\"display:flex;\"]);\nvar SocialItem = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.li.withConfig({\n  displayName: \"Contact__SocialItem\",\n  componentId: \"sc-1h0xb7-4\"\n})([\"margin-right:20px;:last-of-type{margin-right:0;}\"]);\nvar SocialLink = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.a.withConfig({\n  displayName: \"Contact__SocialLink\",\n  componentId: \"sc-1h0xb7-5\"\n})([\"font-size:2.2rem;color:white;transition:color 0.2s;&:hover,&:active{color:#2ec4b6;}\"]);\n\nvar Contact = function Contact(_ref) {\n  var content = _ref.content;\n  var title = content.title,\n      paragraphsAndLinks = content.paragraphsAndLinks,\n      socialMediaLinks = content.socialMediaLinks;\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, null, title && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Common_Heading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    level: \"h2\",\n    invert: true\n  }, title), paragraphsAndLinks && paragraphsAndLinks.map(function (paragraph) {\n    var id = paragraph.id,\n        text = paragraph.text,\n        linkText = paragraph.linkText,\n        linkUrl = paragraph.linkUrl;\n    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContactText, {\n      key: id\n    }, linkText && linkUrl && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(EmailLink, {\n      href: linkUrl\n    }, linkText), text && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], null, text));\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SocialList, null, socialMediaLinks && socialMediaLinks.map(function (link) {\n    var id = link.id,\n        linkText = link.linkText,\n        linkUrl = link.linkUrl,\n        fontawesomeClass = link.fontawesomeClass;\n    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SocialItem, {\n      key: id\n    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SocialLink, {\n      href: linkUrl,\n      target: \"_blank\"\n    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"i\", {\n      className: fontawesomeClass\n    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", {\n      className: \"visuallyhidden\"\n    }, linkText)));\n  })));\n};\n\nContact.propTypes = {\n  content: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);\n\n//# sourceURL=webpack:///./src/client/components/MyPortfolio/Contact/Contact.jsx?");

/***/ }),

/***/ "./src/client/components/MyPortfolio/Contact/index.js":
/*!************************************************************!*\
  !*** ./src/client/components/MyPortfolio/Contact/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact */ \"./src/client/components/MyPortfolio/Contact/Contact.jsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Contact__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/client/components/MyPortfolio/Contact/index.js?");

/***/ }),

/***/ "./src/client/components/MyPortfolio/Footer/Footer.jsx":
/*!*************************************************************!*\
  !*** ./src/client/components/MyPortfolio/Footer/Footer.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Common_Wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Common/Wrapper */ \"./src/client/components/Common/Wrapper/index.js\");\n/* harmony import */ var _Common_Paragraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Common/Paragraph */ \"./src/client/components/Common/Paragraph/index.js\");\n\n\n // Components\n\n\n\nvar FooterText = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Common_Paragraph__WEBPACK_IMPORTED_MODULE_4__[\"default\"]).withConfig({\n  displayName: \"Footer__FooterText\",\n  componentId: \"t0vjhs-0\"\n})([\"color:#36454f;text-align:center;\"]);\nvar FooterLink = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.a.withConfig({\n  displayName: \"Footer__FooterLink\",\n  componentId: \"t0vjhs-1\"\n})([\"color:#36454f;text-decoration:none;transition:color 0.2s;&:hover,&:active{color:#2ec4b6;}\"]);\n\nvar Footer = function Footer(_ref) {\n  var content = _ref.content;\n  var footerText = content.footerText,\n      photoCreditLinkText = content.photoCreditLinkText,\n      photoCreditLinkUrl = content.photoCreditLinkUrl;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Common_Wrapper__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null, footerText && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterText, null, footerText, ' ', photoCreditLinkText && photoCreditLinkUrl && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterLink, {\n    href: photoCreditLinkUrl\n  }, photoCreditLinkText)));\n};\n\nFooter.propTypes = {\n  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\n\n//# sourceURL=webpack:///./src/client/components/MyPortfolio/Footer/Footer.jsx?");

/***/ }),

/***/ "./src/client/components/MyPortfolio/Footer/index.js":
/*!***********************************************************!*\
  !*** ./src/client/components/MyPortfolio/Footer/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer */ \"./src/client/components/MyPortfolio/Footer/Footer.jsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Footer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/client/components/MyPortfolio/Footer/index.js?");

/***/ }),

/***/ "./src/client/components/MyPortfolio/Header/Header.jsx":
/*!*************************************************************!*\
  !*** ./src/client/components/MyPortfolio/Header/Header.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Common_Wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Common/Wrapper */ \"./src/client/components/Common/Wrapper/index.js\");\n/* harmony import */ var _Common_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Common/Heading */ \"./src/client/components/Common/Heading/index.js\");\n/* harmony import */ var _Common_Paragraph__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Common/Paragraph */ \"./src/client/components/Common/Paragraph/index.js\");\n/* harmony import */ var _NavigationBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NavigationBar */ \"./src/client/components/MyPortfolio/Header/NavigationBar/index.js\");\n\n\n\n\n\n\n\n\nvar HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.header.withConfig({\n  displayName: \"Header__HeaderContainer\",\n  componentId: \"z0dui2-0\"\n})([\"height:105vh;background:linear-gradient(to bottom,#242682e0,#242682e0),url('\", \"');background-size:cover;\"], function (props) {\n  return props.backgroundImage;\n});\nvar Hamburger = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.label.withConfig({\n  displayName: \"Header__Hamburger\",\n  componentId: \"z0dui2-1\"\n})([\"position:fixed;top:19px;right:30px;font-size:2.5rem;color:#2ec4b6;z-index:100;cursor:pointer;\"]);\nvar SubContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({\n  displayName: \"Header__SubContainer\",\n  componentId: \"z0dui2-2\"\n})([\"position:relative;display:flex;flex-direction:column;justify-content:center;height:85%;\"]);\nvar MyName = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.span.withConfig({\n  displayName: \"Header__MyName\",\n  componentId: \"z0dui2-3\"\n})([\"color:#2ec4b6;\"]);\n\nvar Header = function Header(_ref) {\n  var content = _ref.content,\n      setSectionRef = _ref.setSectionRef;\n  var backgroundImage = content.backgroundImage,\n      navigationBar = content.navigationBar,\n      headerTitle = content.headerTitle,\n      myName = content.myName,\n      headerSubtitle = content.headerSubtitle;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      isHamBurgerClicked = _useState2[0],\n      setIsHamBurgerClicked = _useState2[1];\n\n  var handleClick = function handleClick() {\n    setIsHamBurgerClicked(!isHamBurgerClicked);\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, backgroundImage && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeaderContainer, {\n    backgroundImage: backgroundImage.url\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Hamburger, {\n    onClick: handleClick\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"i\", {\n    className: \"fas fa-bars\"\n  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_NavigationBar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    content: navigationBar,\n    isHamBurgerClicked: isHamBurgerClicked,\n    setSectionRef: setSectionRef\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Common_Wrapper__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Common_Heading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    level: \"h1\"\n  }, headerTitle, \" \", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MyName, null, myName)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Common_Paragraph__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    inverted: true\n  }, headerSubtitle)))));\n};\n\nHeader.propTypes = {\n  content: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,\n  setSectionRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./src/client/components/MyPortfolio/Header/Header.jsx?");

/***/ }),

/***/ "./src/client/components/MyPortfolio/Header/NavigationBar/NavigationBar.jsx":
/*!**********************************************************************************!*\
  !*** ./src/client/components/MyPortfolio/Header/NavigationBar/NavigationBar.jsx ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"@babel/runtime/helpers/taggedTemplateLiteral\");\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_screenSizeHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/screenSizeHelper */ \"./src/client/utils/screenSizeHelper.js\");\n\n\nfunction _templateObject() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    flex-direction: column;\\n    & li {\\n      margin-bottom: 30px;\\n      &:last-of-type {\\n        margin-bottom: 0;\\n      }\\n    }\\n  \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n // utils\n\n\nvar NavBar = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.nav.withConfig({\n  displayName: \"NavigationBar__NavBar\",\n  componentId: \"a6rjtu-0\"\n})([\"display:flex;position:fixed;top:\", \";left:0;right:0;background:#36454f;transition:all 0.3s ease-in-out;justify-content:center;align-items:center;padding:10px 0;z-index:90;\"], function (props) {\n  return props.isClicked ? '0px' : '-100%';\n});\nvar NavList = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.ul.withConfig({\n  displayName: \"NavigationBar__NavList\",\n  componentId: \"a6rjtu-1\"\n})([\"display:flex;list-style:none;height:100%;width:70%;align-items:center;justify-content:space-between;padding:10px 0;\", \"\"], _utils_screenSizeHelper__WEBPACK_IMPORTED_MODULE_4__[\"default\"].md(_templateObject()));\nvar NavLink = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.a.withConfig({\n  displayName: \"NavigationBar__NavLink\",\n  componentId: \"a6rjtu-2\"\n})([\"font-family:'Roboto',sans-serif;font-weight:bold;font-size:1.8rem;text-transform:uppercase;line-height:1.6;color:white;text-decoration:none;transition:border-bottom 0.2s;:hover,:active{border-bottom:2px solid #242682;}\"]);\n\nvar NavigationBar = function NavigationBar(_ref) {\n  var content = _ref.content,\n      isHamBurgerClicked = _ref.isHamBurgerClicked,\n      setSectionRef = _ref.setSectionRef;\n\n  var handleClick = function handleClick(event) {\n    event.preventDefault();\n    var id = event.target.name;\n    setSectionRef(id.slice(1));\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavBar, {\n    isClicked: isHamBurgerClicked\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavList, null, content.links ? content.links.map(function (link) {\n    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"li\", {\n      key: link._id\n    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavLink, {\n      href: link.linkUrl,\n      onClick: handleClick,\n      name: link.linkUrl\n    }, link.linkText));\n  }) : null));\n};\n\nNavigationBar.propTypes = {\n  content: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,\n  isHamBurgerClicked: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,\n  setSectionRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavigationBar);\n\n//# sourceURL=webpack:///./src/client/components/MyPortfolio/Header/NavigationBar/NavigationBar.jsx?");

/***/ }),

/***/ "./src/client/components/MyPortfolio/Header/NavigationBar/index.js":
/*!*************************************************************************!*\
  !*** ./src/client/components/MyPortfolio/Header/NavigationBar/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _NavigationBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavigationBar */ \"./src/client/components/MyPortfolio/Header/NavigationBar/NavigationBar.jsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_NavigationBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/client/components/MyPortfolio/Header/NavigationBar/index.js?");

/***/ }),

/***/ "./src/client/components/MyPortfolio/Header/index.js":
/*!***********************************************************!*\
  !*** ./src/client/components/MyPortfolio/Header/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ \"./src/client/components/MyPortfolio/Header/Header.jsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/client/components/MyPortfolio/Header/index.js?");

/***/ }),

/***/ "./src/client/components/MyPortfolio/MyPortfolio.jsx":
/*!***********************************************************!*\
  !*** ./src/client/components/MyPortfolio/MyPortfolio.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Header */ \"./src/client/components/MyPortfolio/Header/index.js\");\n/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./About */ \"./src/client/components/MyPortfolio/About/index.js\");\n/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Projects */ \"./src/client/components/MyPortfolio/Projects/index.js\");\n/* harmony import */ var _TechSkills__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TechSkills */ \"./src/client/components/MyPortfolio/TechSkills/index.js\");\n/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Contact */ \"./src/client/components/MyPortfolio/Contact/index.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Footer */ \"./src/client/components/MyPortfolio/Footer/index.js\");\n\n\n\n\n // Components\n\n\n\n\n\n\n\nvar AboutSection = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.section.withConfig({\n  displayName: \"MyPortfolio__AboutSection\",\n  componentId: \"sc-1y66pnc-0\"\n})([\"padding-top:50px;position:relative;padding-bottom:200px;::after{z-index:10;content:'';position:absolute;top:0;bottom:0;right:0;left:0;width:100%;height:100%;background:white;transform:skewY(-5deg);transform-origin:top left;}\"]);\nvar ProjectSection = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.section.withConfig({\n  displayName: \"MyPortfolio__ProjectSection\",\n  componentId: \"sc-1y66pnc-1\"\n})([\"padding-top:100px;padding-bottom:200px;position:relative;background:#eaedf4;::after{content:'';position:absolute;top:0;bottom:0;right:0;left:0;width:100%;height:100%;background:inherit;transform:skewY(-5deg);transform-origin:top left;}\"]);\nvar SkillsSection = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.section.withConfig({\n  displayName: \"MyPortfolio__SkillsSection\",\n  componentId: \"sc-1y66pnc-2\"\n})([\"padding-top:50px;padding-bottom:200px;background:white;position:relative;::after{content:'';position:absolute;top:0;bottom:0;right:0;left:0;width:100%;height:100%;background:inherit;transform:skewY(5deg);transform-origin:top right;}\"]);\nvar ContactSection = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.section.withConfig({\n  displayName: \"MyPortfolio__ContactSection\",\n  componentId: \"sc-1y66pnc-3\"\n})([\"padding-top:50px;padding-bottom:75px;background:#36454f;position:relative;::after{content:'';position:absolute;top:0;bottom:0;right:0;left:0;width:100%;height:100%;background:inherit;transform:skewY(5deg);transform-origin:top right;}\"]);\nvar FooterSection = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.footer.withConfig({\n  displayName: \"MyPortfolio__FooterSection\",\n  componentId: \"sc-1y66pnc-4\"\n})([\"padding:5px 0;background:#eaedf4;\"]);\n\nvar MyPortfolio = function MyPortfolio(_ref) {\n  var data = _ref.data,\n      urlHash = _ref.urlHash;\n\n  var renderHead = function renderHead() {\n    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__[\"Helmet\"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"title\", null, \"Marc Brathwaite | Developer\"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"meta\", {\n      name: \"description\",\n      content: \"Marc Brathwaite Portfolio\"\n    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"meta\", {\n      name: \"keywords\",\n      content: \"Marc Brathwaite,Developer,Software\"\n    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"meta\", {\n      name: \"author\",\n      content: \"Marc Brathwaite\"\n    }));\n  };\n\n  var headerSection = data.headerSection,\n      sections = data.sections,\n      footerSection = data.footerSection;\n  var aboutRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  var projectRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  var skillsRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  var contactRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  var refMap = {\n    about: aboutRef,\n    work: projectRef,\n    skills: skillsRef,\n    contact: contactRef\n  };\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(urlHash),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      sectionRef = _useState2[0],\n      setSectionRef = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (refMap[sectionRef]) {\n      setSectionRef(urlHash);\n    }\n  }, [urlHash]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (sectionRef) {\n      var offsetTop = refMap[sectionRef].current.offsetTop;\n      window.scrollTo({\n        top: offsetTop,\n        left: 0,\n        behavior: 'smooth'\n      });\n      setSectionRef(undefined);\n    }\n  }, [sectionRef]);\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, renderHead(), headerSection && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    content: headerSection,\n    setSectionRef: setSectionRef\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"main\", null, sections && sections.map(function (section) {\n    switch (section._type) {\n      case 'aboutSection':\n        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AboutSection, {\n          key: section._id,\n          id: section.htmlId,\n          ref: aboutRef\n        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_About__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          content: section\n        }));\n\n      case 'projectSection':\n        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProjectSection, {\n          key: section._id,\n          ref: projectRef,\n          id: section.htmlId\n        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Projects__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          content: section\n        }));\n\n      case 'skillsSection':\n        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SkillsSection, {\n          key: section._id,\n          ref: skillsRef,\n          id: section.htmlId\n        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TechSkills__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n          content: section\n        }));\n\n      case 'contactSection':\n        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContactSection, {\n          key: section._id,\n          ref: contactRef,\n          id: section.htmlId\n        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Contact__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n          content: section\n        }));\n\n      default:\n        return null;\n    }\n  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FooterSection, null, footerSection && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    content: footerSection\n  })));\n};\n\nMyPortfolio.defaultProps = {\n  urlHash: ''\n};\nMyPortfolio.propTypes = {\n  data: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,\n  urlHash: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyPortfolio);\n\n//# sourceURL=webpack:///./src/client/components/MyPortfolio/MyPortfolio.jsx?");

/***/ }),

/***/ "./src/client/components/MyPortfolio/MyPortfolioContainer.jsx":
/*!********************************************************************!*\
  !*** ./src/client/components/MyPortfolio/MyPortfolioContainer.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var lodash_isempty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash.isempty */ \"lodash.isempty\");\n/* harmony import */ var lodash_isempty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_isempty__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _MyPortfolio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MyPortfolio */ \"./src/client/components/MyPortfolio/MyPortfolio.jsx\");\n/* harmony import */ var _contexts_StaticContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../contexts/StaticContext */ \"./src/client/contexts/StaticContext.js\");\n/* harmony import */ var _Managers_ContentManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Managers/ContentManager */ \"./src/client/Managers/ContentManager/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../constants */ \"./src/client/constants/index.js\");\n\n\n\n\n\n // Components\n\n // Context\n\n // Manager\n\n // Constants\n\n\nvar UNINIT = _constants__WEBPACK_IMPORTED_MODULE_9__[\"statusMessages\"].UNINIT,\n    PENDING = _constants__WEBPACK_IMPORTED_MODULE_9__[\"statusMessages\"].PENDING,\n    SUCCESS = _constants__WEBPACK_IMPORTED_MODULE_9__[\"statusMessages\"].SUCCESS,\n    FAILURE = _constants__WEBPACK_IMPORTED_MODULE_9__[\"statusMessages\"].FAILURE;\nvar CONTENT_TYPE = 'homePage';\nvar contentManager = new _Managers_ContentManager__WEBPACK_IMPORTED_MODULE_8__[\"default\"]({\n  contentfulType: CONTENT_TYPE\n});\n\nvar MyPortfolioContainer = function MyPortfolioContainer(_ref) {\n  var location = _ref.location,\n      staticContext = _ref.staticContext;\n  var contextData = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useContext\"])(_contexts_StaticContext__WEBPACK_IMPORTED_MODULE_7__[\"default\"]); // Get hash from the URL\n\n  var hash = location.hash;\n  var urlHash = hash.slice(1);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    status: UNINIT,\n    data: {}\n  }),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),\n      content = _useState2[0],\n      setContent = _useState2[1];\n\n  var status = content.status,\n      data = content.data;\n  var isLoading = status === UNINIT || status === PENDING;\n  var isSuccess = status === SUCCESS;\n  var isFailure = status === FAILURE;\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var getContent =\n    /*#__PURE__*/\n    function () {\n      var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n      /*#__PURE__*/\n      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var result;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                setContent({\n                  status: PENDING,\n                  data: {}\n                });\n                _context.prev = 1;\n                _context.next = 4;\n                return contentManager.getContentfulContent();\n\n              case 4:\n                result = _context.sent;\n                setContent({\n                  status: SUCCESS,\n                  data: result\n                });\n                _context.next = 11;\n                break;\n\n              case 8:\n                _context.prev = 8;\n                _context.t0 = _context[\"catch\"](1);\n                setContent({\n                  status: FAILURE,\n                  data: {}\n                });\n\n              case 11:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[1, 8]]);\n      }));\n\n      return function getContent() {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n\n    if (content.status === UNINIT && !contextData) {\n      getContent();\n    } else if (contextData) {\n      setContent({\n        status: SUCCESS,\n        data: contextData\n      });\n    }\n  }, []);\n  var contenfulData = data;\n\n  if (staticContext) {\n    contenfulData = lodash_isempty__WEBPACK_IMPORTED_MODULE_5___default()(data) ? staticContext.data : data;\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, (isSuccess || staticContext || contextData) && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_MyPortfolio__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    data: contenfulData,\n    urlHash: urlHash\n  }), isLoading && !staticContext && !contextData && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"div\", null, \"Loading...\"), isFailure && !staticContext && !contextData && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"div\", null, \"Failure...\"));\n};\n\nMyPortfolioContainer.propTypes = {\n  location: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  component: MyPortfolioContainer,\n  loadData: function () {\n    var _loadData = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n    /*#__PURE__*/\n    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              return _context2.abrupt(\"return\", contentManager.getContentfulContent());\n\n            case 1:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    function loadData() {\n      return _loadData.apply(this, arguments);\n    }\n\n    return loadData;\n  }()\n});\n\n//# sourceURL=webpack:///./src/client/components/MyPortfolio/MyPortfolioContainer.jsx?");

/***/ }),

/***/ "./src/client/components/MyPortfolio/Projects/Projects.jsx":
/*!*****************************************************************!*\
  !*** ./src/client/components/MyPortfolio/Projects/Projects.jsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"@babel/runtime/helpers/taggedTemplateLiteral\");\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_string_replace__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-string-replace */ \"react-string-replace\");\n/* harmony import */ var react_string_replace__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_string_replace__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Common_Wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Common/Wrapper */ \"./src/client/components/Common/Wrapper/index.js\");\n/* harmony import */ var _Common_Heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Common/Heading */ \"./src/client/components/Common/Heading/index.js\");\n/* harmony import */ var _Common_Paragraph__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Common/Paragraph */ \"./src/client/components/Common/Paragraph/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../constants */ \"./src/client/constants/index.js\");\n/* harmony import */ var _utils_screenSizeHelper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils/screenSizeHelper */ \"./src/client/utils/screenSizeHelper.js\");\n\n\nfunction _templateObject7() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    padding: 8px 10px;\\n  \"]);\n\n  _templateObject7 = function _templateObject7() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject6() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n  align-self: \", \";\\n  \"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    margin-right: 10px;\\n    margin-left: 0;\\n  \"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    align-self: \", \";\\n    justify-content: \", \";\\n  \"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    width: 100%;\\n    text-align: left;\\n    margin: 0;\\n  \"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    margin-bottom: 25px;\\n    margin-right: 0;\\n  \"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    flex-direction: \", \";\\n    align-items: center;\\n  \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_Common_Wrapper__WEBPACK_IMPORTED_MODULE_5__[\"default\"]).withConfig({\n  displayName: \"Projects__Container\",\n  componentId: \"sc-1xvafic-0\"\n})([\"position:relative;z-index:40;\"]);\nvar ProjectContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({\n  displayName: \"Projects__ProjectContainer\",\n  componentId: \"sc-1xvafic-1\"\n})([\"display:flex;margin-bottom:50px;padding:45px 35px;background:white;border-radius:15px;flex-wrap:wrap;:last-of-type{margin-bottom:0;}\", \"\"], _utils_screenSizeHelper__WEBPACK_IMPORTED_MODULE_9__[\"default\"].lg(_templateObject(), function (props) {\n  return props.isLeftAlign ? 'column' : 'column-reverse';\n}));\nvar ProjectImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({\n  displayName: \"Projects__ProjectImageContainer\",\n  componentId: \"sc-1xvafic-2\"\n})([\"flex:1 0 calc(30% - 30px);margin-right:\", \";\", \"\"], function (props) {\n  return props.isLeftAlign ? '60px' : '0px';\n}, _utils_screenSizeHelper__WEBPACK_IMPORTED_MODULE_9__[\"default\"].lg(_templateObject2()));\nvar ProjectDescContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({\n  displayName: \"Projects__ProjectDescContainer\",\n  componentId: \"sc-1xvafic-3\"\n})([\"flex:1 0 calc(70% - 30px);display:flex;flex-direction:column;margin-right:\", \";text-align:\", \";\", \"\"], function (props) {\n  return !props.isLeftAlign ? '60px' : '0';\n}, function (props) {\n  return !props.isLeftAlign ? 'right' : 'left';\n}, _utils_screenSizeHelper__WEBPACK_IMPORTED_MODULE_9__[\"default\"].lg(_templateObject3()));\nvar ProjectDesc = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_Common_Paragraph__WEBPACK_IMPORTED_MODULE_7__[\"default\"]).withConfig({\n  displayName: \"Projects__ProjectDesc\",\n  componentId: \"sc-1xvafic-4\"\n})([\"margin-bottom:20px;\"]);\nvar ProjectTechContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_Common_Paragraph__WEBPACK_IMPORTED_MODULE_7__[\"default\"]).withConfig({\n  displayName: \"Projects__ProjectTechContainer\",\n  componentId: \"sc-1xvafic-5\"\n})([\"margin-bottom:20px;display:flex;flex-wrap:wrap;align-self:\", \";justify-content:\", \";\", \"\"], function (props) {\n  return props.isLeftAlign ? 'auto' : 'flex-end';\n}, function (props) {\n  return props.isLeftAlign ? 'auto' : 'flex-end';\n}, _utils_screenSizeHelper__WEBPACK_IMPORTED_MODULE_9__[\"default\"].lg(_templateObject4(), function (props) {\n  return props.isLeftAlign ? 'auto' : 'flex-start';\n}, function (props) {\n  return props.isLeftAlign ? 'auto' : 'flex-start';\n}));\nvar ProjectTech = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.span.withConfig({\n  displayName: \"Projects__ProjectTech\",\n  componentId: \"sc-1xvafic-6\"\n})([\"display:block;margin-right:\", \";margin-left:\", \";border:3px solid black;margin-bottom:5px;padding:3px 5px;:last-of-type{margin-right:0;}\", \"\"], function (props) {\n  return props.isLeftAlign ? '10px' : '0';\n}, function (props) {\n  return props.isLeftAlign ? '0' : '10px';\n}, _utils_screenSizeHelper__WEBPACK_IMPORTED_MODULE_9__[\"default\"].lg(_templateObject5()));\nvar CollabLink = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.a.withConfig({\n  displayName: \"Projects__CollabLink\",\n  componentId: \"sc-1xvafic-7\"\n})([\"color:black;\"]);\nvar ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({\n  displayName: \"Projects__ButtonContainer\",\n  componentId: \"sc-1xvafic-8\"\n})([\"display:flex;align-self:\", \";\", \"\"], function (props) {\n  return props.isLeftAlign ? 'auto' : 'flex-end';\n}, _utils_screenSizeHelper__WEBPACK_IMPORTED_MODULE_9__[\"default\"].lg(_templateObject6(), function (props) {\n  return props.isLeftAlign ? 'auto' : 'flex-start';\n}));\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.a.withConfig({\n  displayName: \"Projects__Button\",\n  componentId: \"sc-1xvafic-9\"\n})([\"display:block;font-size:1.8rem;color:white;background:#242582;text-decoration:none;margin-right:10px;padding:10px 15px;border:1px solid transparent;transition:background border 0.2s;text-align:center;:last-of-type{margin-right:0;}:hover,:active{border:1px solid black;background:white;color:#242582;}\", \"\"], _utils_screenSizeHelper__WEBPACK_IMPORTED_MODULE_9__[\"default\"].sm(_templateObject7()));\n\nvar Projects = function Projects(_ref) {\n  var content = _ref.content;\n  var title = content.title,\n      projects = content.projects;\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, null, title && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Common_Heading__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    level: \"h2\"\n  }, title), projects && projects.map(function (project, index) {\n    var id = project.id,\n        title = project.title,\n        description = project.description,\n        projectImage = project.projectImage,\n        techStackList = project.techStackList,\n        liveButtonText = project.liveButtonText,\n        liveButtonTitle = project.liveButtonTitle,\n        liveButtonUrl = project.liveButtonUrl,\n        githubButtonText = project.githubButtonText,\n        githubButtonTitle = project.githubButtonTitle,\n        githubButtonUrl = project.githubButtonUrl;\n    var isLeftAlign = index % 2 === 0;\n    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProjectContainer, {\n      key: id,\n      isLeftAlign: isLeftAlign\n    }, isLeftAlign ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProjectImageContainer, {\n      isLeftAlign: isLeftAlign\n    }, liveButtonUrl && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"a\", {\n      href: liveButtonUrl,\n      target: \"_blank\",\n      rel: \"noopener noreferrer\"\n    }, projectImage.url && projectImage.description && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"img\", {\n      src: projectImage.url,\n      alt: projectImage.description\n    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProjectDescContainer, {\n      isLeftAlign: isLeftAlign\n    }, title && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Common_Heading__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      level: \"h3\"\n    }, title), description && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProjectDesc, null, react_string_replace__WEBPACK_IMPORTED_MODULE_4___default()(description, /(collab\\d)/, function (match, i) {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CollabLink, {\n        key: i,\n        href: _constants__WEBPACK_IMPORTED_MODULE_8__[\"collabMapping\"][match].link,\n        target: \"_blank\",\n        rel: \"noopener noreferrer\"\n      }, _constants__WEBPACK_IMPORTED_MODULE_8__[\"collabMapping\"][match].name);\n    })), techStackList && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProjectTechContainer, {\n      isLeftAlign: isLeftAlign\n    }, techStackList.map(function (tech, index) {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProjectTech, {\n        key: \"\".concat(tech, \"-\").concat(index),\n        isLeftAlign: isLeftAlign\n      }, tech);\n    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonContainer, {\n      isLeftAlign: isLeftAlign\n    }, liveButtonUrl && liveButtonTitle && liveButtonText && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, {\n      href: liveButtonUrl,\n      title: liveButtonTitle,\n      target: \"_blank\",\n      rel: \"noopener noreferrer\"\n    }, liveButtonText), githubButtonText && githubButtonTitle && githubButtonUrl && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, {\n      href: githubButtonUrl,\n      title: githubButtonTitle,\n      target: \"_blank\",\n      rel: \"noopener noreferrer\"\n    }, githubButtonText)))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProjectDescContainer, {\n      isLeftAlign: isLeftAlign\n    }, title && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Common_Heading__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      level: \"h3\"\n    }, title), description && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProjectDesc, null, react_string_replace__WEBPACK_IMPORTED_MODULE_4___default()(description, /(collab\\d)/, function (match, i) {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CollabLink, {\n        key: i,\n        href: _constants__WEBPACK_IMPORTED_MODULE_8__[\"collabMapping\"][match].link,\n        target: \"_blank\",\n        rel: \"noopener noreferrer\"\n      }, _constants__WEBPACK_IMPORTED_MODULE_8__[\"collabMapping\"][match].name);\n    })), techStackList && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProjectTechContainer, {\n      isLeftAlign: isLeftAlign\n    }, techStackList.map(function (tech, index) {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProjectTech, {\n        key: \"\".concat(tech, \"-\").concat(index),\n        isLeftAlign: isLeftAlign\n      }, tech);\n    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonContainer, {\n      isLeftAlign: isLeftAlign\n    }, liveButtonUrl && liveButtonTitle && liveButtonText && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, {\n      href: liveButtonUrl,\n      title: liveButtonTitle,\n      target: \"_blank\",\n      rel: \"noopener noreferrer\"\n    }, liveButtonText), githubButtonText && githubButtonTitle && githubButtonUrl && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, {\n      href: githubButtonUrl,\n      title: githubButtonTitle,\n      target: \"_blank\",\n      rel: \"noopener noreferrer\"\n    }, githubButtonText))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProjectImageContainer, {\n      isLeftAlign: isLeftAlign\n    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"a\", {\n      href: liveButtonUrl,\n      target: \"_blank\",\n      rel: \"noopener noreferrer\"\n    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"img\", {\n      src: projectImage.url,\n      alt: projectImage.description\n    })))));\n  }));\n};\n\nProjects.propTypes = {\n  content: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\n\n//# sourceURL=webpack:///./src/client/components/MyPortfolio/Projects/Projects.jsx?");

/***/ }),

/***/ "./src/client/components/MyPortfolio/Projects/index.js":
/*!*************************************************************!*\
  !*** ./src/client/components/MyPortfolio/Projects/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projects */ \"./src/client/components/MyPortfolio/Projects/Projects.jsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/client/components/MyPortfolio/Projects/index.js?");

/***/ }),

/***/ "./src/client/components/MyPortfolio/TechSkills/Skill/Skill.jsx":
/*!**********************************************************************!*\
  !*** ./src/client/components/MyPortfolio/TechSkills/Skill/Skill.jsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Common_Paragraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Common/Paragraph */ \"./src/client/components/Common/Paragraph/index.js\");\n\n\n\n\nvar Icon = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.i.withConfig({\n  displayName: \"Skill__Icon\",\n  componentId: \"sc-1fa5vdi-0\"\n})([\"font-size:7.5rem;color:#36454f;\"]);\nvar SkillName = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Common_Paragraph__WEBPACK_IMPORTED_MODULE_3__[\"default\"]).withConfig({\n  displayName: \"Skill__SkillName\",\n  componentId: \"sc-1fa5vdi-1\"\n})([\"margin-top:15px;color:#36454f;text-align:center;\"]);\n\nvar SkillContainer = function SkillContainer(_ref) {\n  var className = _ref.className,\n      skillName = _ref.skillName;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {\n    className: className\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SkillName, null, skillName));\n};\n\nSkillContainer.propTypes = {\n  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  skillName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SkillContainer);\n\n//# sourceURL=webpack:///./src/client/components/MyPortfolio/TechSkills/Skill/Skill.jsx?");

/***/ }),

/***/ "./src/client/components/MyPortfolio/TechSkills/Skill/index.js":
/*!*********************************************************************!*\
  !*** ./src/client/components/MyPortfolio/TechSkills/Skill/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Skill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Skill */ \"./src/client/components/MyPortfolio/TechSkills/Skill/Skill.jsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Skill__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/client/components/MyPortfolio/TechSkills/Skill/index.js?");

/***/ }),

/***/ "./src/client/components/MyPortfolio/TechSkills/TechSkills.jsx":
/*!*********************************************************************!*\
  !*** ./src/client/components/MyPortfolio/TechSkills/TechSkills.jsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"@babel/runtime/helpers/taggedTemplateLiteral\");\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Skill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Skill */ \"./src/client/components/MyPortfolio/TechSkills/Skill/index.js\");\n/* harmony import */ var _Common_Wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Common/Wrapper */ \"./src/client/components/Common/Wrapper/index.js\");\n/* harmony import */ var _Common_Heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Common/Heading */ \"./src/client/components/Common/Heading/index.js\");\n/* harmony import */ var _utils_screenSizeHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/screenSizeHelper */ \"./src/client/utils/screenSizeHelper.js\");\n\n\nfunction _templateObject() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    flex: 1 0 33.33%;\\n    &:nth-of-type(n+4) {\\n        margin-top: 50px;\\n    }\\n  \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_Common_Wrapper__WEBPACK_IMPORTED_MODULE_5__[\"default\"]).withConfig({\n  displayName: \"TechSkills__Container\",\n  componentId: \"ievwd4-0\"\n})([\"position:relative;z-index:30;\"]);\nvar SkillsList = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.ul.withConfig({\n  displayName: \"TechSkills__SkillsList\",\n  componentId: \"ievwd4-1\"\n})([\"display:flex;flex-wrap:wrap;\"]);\nvar SkillItem = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.li.withConfig({\n  displayName: \"TechSkills__SkillItem\",\n  componentId: \"ievwd4-2\"\n})([\"flex:1 0 25%;display:flex;flex-direction:column;align-items:center;:nth-of-type(n + 5){margin-top:50px;}\", \"\"], _utils_screenSizeHelper__WEBPACK_IMPORTED_MODULE_7__[\"default\"].sm(_templateObject()));\n\nvar TechSkills = function TechSkills(_ref) {\n  var content = _ref.content;\n  var title = content.title,\n      skills = content.skills;\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, null, title && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Common_Heading__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    level: \"h2\"\n  }, title), skills && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SkillsList, null, skills.map(function (skill) {\n    var id = skill.id,\n        skillName = skill.skillName,\n        deviconClassName = skill.deviconClassName;\n    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SkillItem, {\n      key: id\n    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Skill__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      className: deviconClassName,\n      skillName: skillName\n    }));\n  })));\n};\n\nTechSkills.propTypes = {\n  content: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (TechSkills);\n\n//# sourceURL=webpack:///./src/client/components/MyPortfolio/TechSkills/TechSkills.jsx?");

/***/ }),

/***/ "./src/client/components/MyPortfolio/TechSkills/index.js":
/*!***************************************************************!*\
  !*** ./src/client/components/MyPortfolio/TechSkills/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TechSkills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TechSkills */ \"./src/client/components/MyPortfolio/TechSkills/TechSkills.jsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_TechSkills__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/client/components/MyPortfolio/TechSkills/index.js?");

/***/ }),

/***/ "./src/client/components/MyPortfolio/index.js":
/*!****************************************************!*\
  !*** ./src/client/components/MyPortfolio/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MyPortfolioContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyPortfolioContainer */ \"./src/client/components/MyPortfolio/MyPortfolioContainer.jsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_MyPortfolioContainer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/client/components/MyPortfolio/index.js?");

/***/ }),

/***/ "./src/client/components/NotFound/NotFound.jsx":
/*!*****************************************************!*\
  !*** ./src/client/components/NotFound/NotFound.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Common_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Common/Heading */ \"./src/client/components/Common/Heading/index.js\");\n\n\n\n\nvar NotFound = function NotFound(_ref) {\n  var _ref$staticContext = _ref.staticContext,\n      staticContext = _ref$staticContext === void 0 ? {} : _ref$staticContext;\n  staticContext.notFound = true;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Common_Heading__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    level: \"h1\",\n    invert: true\n  }, \"Oops, page not found\");\n};\n\nNotFound.defaultProps = {\n  staticContext: {}\n};\nNotFound.propTypes = {\n  staticContext: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  component: NotFound\n});\n\n//# sourceURL=webpack:///./src/client/components/NotFound/NotFound.jsx?");

/***/ }),

/***/ "./src/client/components/NotFound/index.js":
/*!*************************************************!*\
  !*** ./src/client/components/NotFound/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _NotFound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotFound */ \"./src/client/components/NotFound/NotFound.jsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_NotFound__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/client/components/NotFound/index.js?");

/***/ }),

/***/ "./src/client/constants/index.js":
/*!***************************************!*\
  !*** ./src/client/constants/index.js ***!
  \***************************************/
/*! exports provided: statusMessages, breakpoints, collabMapping */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"statusMessages\", function() { return statusMessages; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"breakpoints\", function() { return breakpoints; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"collabMapping\", function() { return collabMapping; });\nvar statusMessages = {\n  UNINIT: 'UNINIT',\n  PENDING: 'PENDING',\n  SUCCESS: 'SUCCESS',\n  FAILURE: 'FAILURE'\n};\nvar breakpoints = {\n  lg: '940px',\n  md: '768px',\n  sm: '480px'\n};\nvar collabMapping = {\n  collab1: {\n    name: 'Shielarose Gandhi',\n    link: 'http://shielarosegandhi.com'\n  },\n  collab2: {\n    name: 'Janet Bird',\n    link: 'http://www.janetbird.io'\n  },\n  collab3: {\n    name: 'Jason Mortfield',\n    link: 'http://www.jsonmortfield.com'\n  }\n};\n\n//# sourceURL=webpack:///./src/client/constants/index.js?");

/***/ }),

/***/ "./src/client/contexts/StaticContext.js":
/*!**********************************************!*\
  !*** ./src/client/contexts/StaticContext.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar StaticContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])();\n/* harmony default export */ __webpack_exports__[\"default\"] = (StaticContext);\n\n//# sourceURL=webpack:///./src/client/contexts/StaticContext.js?");

/***/ }),

/***/ "./src/client/routes.js":
/*!******************************!*\
  !*** ./src/client/routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/App */ \"./src/client/components/App/index.js\");\n/* harmony import */ var _components_MyPortfolio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/MyPortfolio */ \"./src/client/components/MyPortfolio/index.js\");\n/* harmony import */ var _components_NotFound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/NotFound */ \"./src/client/components/NotFound/index.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([_objectSpread({}, _components_App__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  routes: [_objectSpread({}, _components_MyPortfolio__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    path: '/',\n    exact: true\n  }), _objectSpread({}, _components_NotFound__WEBPACK_IMPORTED_MODULE_3__[\"default\"])]\n})]);\n\n//# sourceURL=webpack:///./src/client/routes.js?");

/***/ }),

/***/ "./src/client/services/ContentfulClient/constants.js":
/*!***********************************************************!*\
  !*** ./src/client/services/ContentfulClient/constants.js ***!
  \***********************************************************/
/*! exports provided: spaceID, accessToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"spaceID\", function() { return spaceID; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"accessToken\", function() { return accessToken; });\nvar spaceID = '358ioy2a6cha';\nvar accessToken = 'e15df1169fe48c511457ebd2f3242ca4beca3d59f6d386016da116291aca50c2';\n\n//# sourceURL=webpack:///./src/client/services/ContentfulClient/constants.js?");

/***/ }),

/***/ "./src/client/services/ContentfulClient/index.js":
/*!*******************************************************!*\
  !*** ./src/client/services/ContentfulClient/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var contentfully__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! contentfully */ \"contentfully\");\n/* harmony import */ var contentfully__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(contentfully__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/client/services/ContentfulClient/constants.js\");\n\n // create the contentful client (we can use this later)\n\nvar contentfulClient = new contentfully__WEBPACK_IMPORTED_MODULE_0__[\"ContentfulClient\"]({\n  accessToken: _constants__WEBPACK_IMPORTED_MODULE_1__[\"accessToken\"],\n  spaceId: _constants__WEBPACK_IMPORTED_MODULE_1__[\"spaceID\"]\n}); // create a Contentfully instance\n\nvar contentfully = new contentfully__WEBPACK_IMPORTED_MODULE_0__[\"Contentfully\"](contentfulClient);\n/* harmony default export */ __webpack_exports__[\"default\"] = (contentfully);\n\n//# sourceURL=webpack:///./src/client/services/ContentfulClient/index.js?");

/***/ }),

/***/ "./src/client/utils/screenSizeHelper.js":
/*!**********************************************!*\
  !*** ./src/client/utils/screenSizeHelper.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./src/client/constants/index.js\");\n\n\nvar media = Object.keys(_constants__WEBPACK_IMPORTED_MODULE_1__[\"breakpoints\"]).reduce(function (acc, breakpoint) {\n  acc[breakpoint] = function () {\n    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"@media (max-width:\", \"){\", \"}\"], _constants__WEBPACK_IMPORTED_MODULE_1__[\"breakpoints\"][breakpoint], styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"].apply(void 0, arguments));\n  };\n\n  return acc;\n}, {});\n/* harmony default export */ __webpack_exports__[\"default\"] = (media);\n\n//# sourceURL=webpack:///./src/client/utils/screenSizeHelper.js?");

/***/ }),

/***/ "./src/helpers/getData.js":
/*!********************************!*\
  !*** ./src/helpers/getData.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (routes, path) {\n  return Object(react_router_config__WEBPACK_IMPORTED_MODULE_0__[\"matchRoutes\"])(routes, path).map(function (_ref) {\n    var route = _ref.route;\n    var loadData = route.loadData; // Call loadData function on routes that have it, thus returning an array of promises\n\n    return loadData ? loadData() : null;\n  }).map(function (promise) {\n    // wrap each promise in a promise, which resolve regardless of if the inner promise fails\n    if (promise) {\n      return new Promise(function (resolve, reject) {\n        promise.then(resolve)[\"catch\"](resolve);\n      });\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/helpers/getData.js?");

/***/ }),

/***/ "./src/helpers/renderer.js":
/*!*********************************!*\
  !*** ./src/helpers/renderer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _client_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client/routes */ \"./src/client/routes.js\");\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (path, html, context) {\n  var sheet = new styled_components__WEBPACK_IMPORTED_MODULE_5__[\"ServerStyleSheet\"]();\n  var serverHTML = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n    location: path,\n    context: context\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_5__[\"StyleSheetManager\"], {\n    sheet: sheet.instance\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, Object(react_router_config__WEBPACK_IMPORTED_MODULE_3__[\"renderRoutes\"])(_client_routes__WEBPACK_IMPORTED_MODULE_6__[\"default\"])))));\n  var styles = sheet.getStyleTags();\n  var helmet = react_helmet__WEBPACK_IMPORTED_MODULE_4__[\"Helmet\"].renderStatic();\n  var regex = /(<div id=\"root\">)(<\\/div>)/;\n  html = html.replace(regex, function (original, div1, div2) {\n    return div1 + serverHTML + div2;\n  });\n  var head = helmet.title.toString() + helmet.meta.toString() + styles;\n  var index = html.indexOf('</head>');\n  var html1 = html.slice(0, index);\n  var html2 = html.slice(index);\n  return html1 + head + html2;\n});\n\n//# sourceURL=webpack:///./src/helpers/renderer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helpers_getData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/getData */ \"./src/helpers/getData.js\");\n/* harmony import */ var _helpers_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/renderer */ \"./src/helpers/renderer.js\");\n/* harmony import */ var _client_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client/routes */ \"./src/client/routes.js\");\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()(); // all requests to /static will pull from the dist folder\n\napp.use('/static', express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"]('./dist'));\napp.get('*', function (req, res) {\n  var contentFromHTMLFile = fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFileSync('./dist/index.html', 'utf-8');\n  var path = req.path;\n  var promises = Object(_helpers_getData__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_client_routes__WEBPACK_IMPORTED_MODULE_5__[\"default\"], path);\n  Promise.all(promises).then(function (responses) {\n    // define contetxt object and pass it into renderer function\n    var context = {\n      data: {}\n    };\n    responses.forEach(function (r) {\n      if (r) {\n        Object.assign(context.data, r);\n      }\n    });\n    var content = Object(_helpers_renderer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(path, contentFromHTMLFile, context);\n\n    if (context.notFound) {\n      res.status(404); // if user chooses incorrect route, send 404\n    }\n\n    res.send(content);\n  });\n});\nvar PORT = process.env.PORT || 3000;\napp.listen(PORT, function () {\n  console.log('Application is running on http://localhost:3000/');\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/asyncToGenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/asyncToGenerator%22?");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/classCallCheck\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/classCallCheck%22?");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/createClass\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/createClass%22?");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/defineProperty\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/defineProperty%22?");

/***/ }),

/***/ "@babel/runtime/helpers/slicedToArray":
/*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/slicedToArray" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/slicedToArray\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/slicedToArray%22?");

/***/ }),

/***/ "@babel/runtime/helpers/taggedTemplateLiteral":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/taggedTemplateLiteral" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/taggedTemplateLiteral\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/taggedTemplateLiteral%22?");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/regenerator%22?");

/***/ }),

/***/ "contentfully":
/*!*******************************!*\
  !*** external "contentfully" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"contentfully\");\n\n//# sourceURL=webpack:///external_%22contentfully%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "lodash.isempty":
/*!*********************************!*\
  !*** external "lodash.isempty" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash.isempty\");\n\n//# sourceURL=webpack:///external_%22lodash.isempty%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "react-string-replace":
/*!***************************************!*\
  !*** external "react-string-replace" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-string-replace\");\n\n//# sourceURL=webpack:///external_%22react-string-replace%22?");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");\n\n//# sourceURL=webpack:///external_%22styled-components%22?");

/***/ })

/******/ });