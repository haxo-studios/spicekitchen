webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/bottomNav.js":
false,

/***/ "./components/coverVideo.js":
false,

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav */ "./components/nav.js");






var _jsxFileName = "/home/aravind/Documents/Work/spicekitchen/components/layout.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n    @font-face {\n        font-family: 'garamond-light';\n        src: url('/static/GARA.TTF');\n        font-weight: normal;\n        font-style: normal;\n    }\n\n    html {\n        box-sizing: border-box;\n        font-size: 10px;\n    }\n\n    *, *:before, *:after {\n        box-sizing: inherit;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


 // import Head from './head'


var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["createGlobalStyle"])(_templateObject());

var Layout =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Layout, _Component);

  function Layout() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Layout);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Layout).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Layout, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(GlobalStyle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_nav__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), children);
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/aravind/Documents/Work/spicekitchen/components/nav.js";



var links = [{
  href: 'https://spicekitchen.com',
  label: 'SpiceKitchen'
}].map(function (link) {
  link.key = "nav-link-".concat(link.href, "-").concat(link.label);
  return link;
});

var Nav = function Nav() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-2055897931",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-2055897931",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-2055897931",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, links.map(function (_ref) {
    var key = _ref.key,
        href = _ref.href,
        label = _ref.label;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: key,
      className: "jsx-2055897931",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-2055897931",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, label)));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2055897931",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    prefetch: true,
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2055897931",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Menu"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2055897931",
    __self: this
  }, "body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Avenir Next,Avenir, Helvetica,sans-serif;}nav.jsx-2055897931{text-align:center;}ul.jsx-2055897931{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}nav.jsx-2055897931>ul.jsx-2055897931{padding:4px 16px;}li.jsx-2055897931{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:6px 8px;}a.jsx-2055897931{color:#067df7;-webkit-text-decoration:none;text-decoration:none;font-size:13px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FyYXZpbmQvRG9jdW1lbnRzL1dvcmsvc3BpY2VraXRjaGVuL2NvbXBvbmVudHMvbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCZ0IsQUFHa0IsQUFLUyxBQUdMLEFBSUksQUFHSixBQUlDLFNBakJTLEtBa0JGLEdBUHZCLENBUEEsOENBZWlCLFVBWmUsQUFPZCxLQU1sQixXQUxBLEtBZEEsOEZBT0EiLCJmaWxlIjoiL2hvbWUvYXJhdmluZC9Eb2N1bWVudHMvV29yay9zcGljZWtpdGNoZW4vY29tcG9uZW50cy9uYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IGxpbmtzID0gW1xuICB7IGhyZWY6ICdodHRwczovL3NwaWNla2l0Y2hlbi5jb20nLCBsYWJlbDogJ1NwaWNlS2l0Y2hlbicgfVxuXS5tYXAobGluayA9PiB7XG4gIGxpbmsua2V5ID0gYG5hdi1saW5rLSR7bGluay5ocmVmfS0ke2xpbmsubGFiZWx9YFxuICByZXR1cm4gbGlua1xufSlcblxuY29uc3QgTmF2ID0gKCkgPT4gKFxuICA8bmF2PlxuICAgIDx1bD5cbiAgICAgIDx1bD5cbiAgICAgICAge2xpbmtzLm1hcCgoeyBrZXksIGhyZWYsIGxhYmVsIH0pID0+IChcbiAgICAgICAgICA8bGkga2V5PXtrZXl9PlxuICAgICAgICAgICAgPExpbmsgaHJlZj17aHJlZn0+XG4gICAgICAgICAgICAgIDxhPntsYWJlbH08L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8bGk+XG4gICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGE+TWVudTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC91bD5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIDpnbG9iYWwoYm9keSkge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIEF2ZW5pciBOZXh0LCBBdmVuaXIsXG4gICAgICAgICAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgfVxuICAgICAgbmF2IHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgdWwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICB9XG4gICAgICBuYXYgPiB1bCB7XG4gICAgICAgIHBhZGRpbmc6IDRweCAxNnB4O1xuICAgICAgfVxuICAgICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwYWRkaW5nOiA2cHggOHB4O1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiAjMDY3ZGY3O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvbmF2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBOYXZcbiJdfQ== */\n/*@ sourceURL=/home/aravind/Documents/Work/spicekitchen/components/nav.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/@material-ui/core/AppBar/AppBar.js":
false,

/***/ "./node_modules/@material-ui/core/AppBar/index.js":
false,

/***/ "./node_modules/@material-ui/core/Backdrop/Backdrop.js":
false,

/***/ "./node_modules/@material-ui/core/Backdrop/index.js":
false,

/***/ "./node_modules/@material-ui/core/ButtonBase/ButtonBase.js":
false,

/***/ "./node_modules/@material-ui/core/ButtonBase/Ripple.js":
false,

/***/ "./node_modules/@material-ui/core/ButtonBase/TouchRipple.js":
false,

/***/ "./node_modules/@material-ui/core/ButtonBase/createRippleHandler.js":
false,

/***/ "./node_modules/@material-ui/core/ButtonBase/focusVisible.js":
false,

/***/ "./node_modules/@material-ui/core/ButtonBase/index.js":
false,

/***/ "./node_modules/@material-ui/core/CssBaseline/CssBaseline.js":
false,

/***/ "./node_modules/@material-ui/core/CssBaseline/index.js":
false,

/***/ "./node_modules/@material-ui/core/Divider/Divider.js":
false,

/***/ "./node_modules/@material-ui/core/Divider/index.js":
false,

/***/ "./node_modules/@material-ui/core/Drawer/Drawer.js":
false,

/***/ "./node_modules/@material-ui/core/Drawer/index.js":
false,

/***/ "./node_modules/@material-ui/core/Fade/Fade.js":
false,

/***/ "./node_modules/@material-ui/core/Fade/index.js":
false,

/***/ "./node_modules/@material-ui/core/Grid/Grid.js":
false,

/***/ "./node_modules/@material-ui/core/Grid/index.js":
false,

/***/ "./node_modules/@material-ui/core/IconButton/IconButton.js":
false,

/***/ "./node_modules/@material-ui/core/IconButton/index.js":
false,

/***/ "./node_modules/@material-ui/core/List/List.js":
false,

/***/ "./node_modules/@material-ui/core/List/ListContext.js":
false,

/***/ "./node_modules/@material-ui/core/List/index.js":
false,

/***/ "./node_modules/@material-ui/core/ListItem/ListItem.js":
false,

/***/ "./node_modules/@material-ui/core/ListItem/MergeListContext.js":
false,

/***/ "./node_modules/@material-ui/core/ListItem/index.js":
false,

/***/ "./node_modules/@material-ui/core/ListItemIcon/ListItemIcon.js":
false,

/***/ "./node_modules/@material-ui/core/ListItemIcon/index.js":
false,

/***/ "./node_modules/@material-ui/core/ListItemText/ListItemText.js":
false,

/***/ "./node_modules/@material-ui/core/ListItemText/index.js":
false,

/***/ "./node_modules/@material-ui/core/Modal/Modal.js":
false,

/***/ "./node_modules/@material-ui/core/Modal/ModalManager.js":
false,

/***/ "./node_modules/@material-ui/core/Modal/index.js":
false,

/***/ "./node_modules/@material-ui/core/Modal/isOverflowing.js":
false,

/***/ "./node_modules/@material-ui/core/Modal/manageAriaHidden.js":
false,

/***/ "./node_modules/@material-ui/core/NoSsr/NoSsr.js":
false,

/***/ "./node_modules/@material-ui/core/NoSsr/index.js":
false,

/***/ "./node_modules/@material-ui/core/Paper/Paper.js":
false,

/***/ "./node_modules/@material-ui/core/Paper/index.js":
false,

/***/ "./node_modules/@material-ui/core/Portal/Portal.js":
false,

/***/ "./node_modules/@material-ui/core/Portal/index.js":
false,

/***/ "./node_modules/@material-ui/core/RootRef/RootRef.js":
false,

/***/ "./node_modules/@material-ui/core/RootRef/index.js":
false,

/***/ "./node_modules/@material-ui/core/Slide/Slide.js":
false,

/***/ "./node_modules/@material-ui/core/Slide/index.js":
false,

/***/ "./node_modules/@material-ui/core/SvgIcon/SvgIcon.js":
false,

/***/ "./node_modules/@material-ui/core/SvgIcon/index.js":
false,

/***/ "./node_modules/@material-ui/core/Typography/Typography.js":
false,

/***/ "./node_modules/@material-ui/core/Typography/index.js":
false,

/***/ "./node_modules/@material-ui/core/colors/common.js":
false,

/***/ "./node_modules/@material-ui/core/colors/green.js":
false,

/***/ "./node_modules/@material-ui/core/colors/grey.js":
false,

/***/ "./node_modules/@material-ui/core/colors/indigo.js":
false,

/***/ "./node_modules/@material-ui/core/colors/pink.js":
false,

/***/ "./node_modules/@material-ui/core/colors/purple.js":
false,

/***/ "./node_modules/@material-ui/core/colors/red.js":
false,

/***/ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/classCallCheck.js":
false,

/***/ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/createClass.js":
false,

/***/ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/defineProperty.js":
false,

/***/ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/extends.js":
false,

/***/ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/getPrototypeOf.js":
false,

/***/ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/inherits.js":
false,

/***/ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
false,

/***/ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/iterableToArray.js":
false,

/***/ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/nonIterableSpread.js":
false,

/***/ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
false,

/***/ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
false,

/***/ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/setPrototypeOf.js":
false,

/***/ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/toConsumableArray.js":
false,

/***/ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/typeof.js":
false,

/***/ "./node_modules/@material-ui/core/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
false,

/***/ "./node_modules/@material-ui/core/node_modules/react-is/cjs/react-is.development.js":
false,

/***/ "./node_modules/@material-ui/core/node_modules/react-is/index.js":
false,

/***/ "./node_modules/@material-ui/core/node_modules/warning/warning.js":
false,

/***/ "./node_modules/@material-ui/core/styles/MuiThemeProvider.js":
false,

/***/ "./node_modules/@material-ui/core/styles/colorManipulator.js":
false,

/***/ "./node_modules/@material-ui/core/styles/createBreakpoints.js":
false,

/***/ "./node_modules/@material-ui/core/styles/createGenerateClassName.js":
false,

/***/ "./node_modules/@material-ui/core/styles/createMixins.js":
false,

/***/ "./node_modules/@material-ui/core/styles/createMuiTheme.js":
false,

/***/ "./node_modules/@material-ui/core/styles/createPalette.js":
false,

/***/ "./node_modules/@material-ui/core/styles/createStyles.js":
false,

/***/ "./node_modules/@material-ui/core/styles/createTypography.js":
false,

/***/ "./node_modules/@material-ui/core/styles/getStylesCreator.js":
false,

/***/ "./node_modules/@material-ui/core/styles/getThemeProps.js":
false,

/***/ "./node_modules/@material-ui/core/styles/index.js":
false,

/***/ "./node_modules/@material-ui/core/styles/jssPreset.js":
false,

/***/ "./node_modules/@material-ui/core/styles/mergeClasses.js":
false,

/***/ "./node_modules/@material-ui/core/styles/multiKeyStore.js":
false,

/***/ "./node_modules/@material-ui/core/styles/reactJssContext.js":
false,

/***/ "./node_modules/@material-ui/core/styles/shadows.js":
false,

/***/ "./node_modules/@material-ui/core/styles/shape.js":
false,

/***/ "./node_modules/@material-ui/core/styles/spacing.js":
false,

/***/ "./node_modules/@material-ui/core/styles/themeListener.js":
false,

/***/ "./node_modules/@material-ui/core/styles/transitions.js":
false,

/***/ "./node_modules/@material-ui/core/styles/withStyles.js":
false,

/***/ "./node_modules/@material-ui/core/styles/withTheme.js":
false,

/***/ "./node_modules/@material-ui/core/styles/zIndex.js":
false,

/***/ "./node_modules/@material-ui/core/transitions/utils.js":
false,

/***/ "./node_modules/@material-ui/core/utils/helpers.js":
false,

/***/ "./node_modules/@material-ui/core/utils/ownerDocument.js":
false,

/***/ "./node_modules/@material-ui/core/utils/ownerWindow.js":
false,

/***/ "./node_modules/@material-ui/core/utils/reactHelpers.js":
false,

/***/ "./node_modules/@material-ui/core/utils/requirePropFactory.js":
false,

/***/ "./node_modules/@material-ui/icons/ChevronLeft.js":
false,

/***/ "./node_modules/@material-ui/icons/ChevronRight.js":
false,

/***/ "./node_modules/@material-ui/icons/Mail.js":
false,

/***/ "./node_modules/@material-ui/icons/Menu.js":
false,

/***/ "./node_modules/@material-ui/icons/MoveToInbox.js":
false,

/***/ "./node_modules/@material-ui/icons/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/@material-ui/icons/utils/createSvgIcon.js":
false,

/***/ "./node_modules/@material-ui/utils/chainPropTypes.js":
false,

/***/ "./node_modules/@material-ui/utils/componentPropType.js":
false,

/***/ "./node_modules/@material-ui/utils/exactProp.js":
false,

/***/ "./node_modules/@material-ui/utils/getDisplayName.js":
false,

/***/ "./node_modules/@material-ui/utils/index.es.js":
false,

/***/ "./node_modules/@material-ui/utils/node_modules/@babel/runtime/helpers/defineProperty.js":
false,

/***/ "./node_modules/@material-ui/utils/node_modules/@babel/runtime/helpers/extends.js":
false,

/***/ "./node_modules/@material-ui/utils/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/@material-ui/utils/node_modules/@babel/runtime/helpers/typeof.js":
false,

/***/ "./node_modules/@material-ui/utils/ponyfillGlobal.js":
false,

/***/ "./node_modules/brcast/dist/brcast.es.js":
false,

/***/ "./node_modules/classnames/index.js":
false,

/***/ "./node_modules/core-js/library/fn/array/from.js":
false,

/***/ "./node_modules/core-js/library/fn/is-iterable.js":
false,

/***/ "./node_modules/core-js/library/fn/map.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-own-property-descriptor.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js":
false,

/***/ "./node_modules/core-js/library/modules/_create-property.js":
false,

/***/ "./node_modules/core-js/library/modules/core.is-iterable.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.array.from.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.map.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.map.from.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.map.of.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.map.to-json.js":
false,

/***/ "./node_modules/css-vendor/lib/camelize.js":
false,

/***/ "./node_modules/css-vendor/lib/index.js":
false,

/***/ "./node_modules/css-vendor/lib/prefix.js":
false,

/***/ "./node_modules/css-vendor/lib/supported-property.js":
false,

/***/ "./node_modules/css-vendor/lib/supported-value.js":
false,

/***/ "./node_modules/debounce/index.js":
false,

/***/ "./node_modules/deepmerge/dist/umd.js":
false,

/***/ "./node_modules/dom-helpers/query/isWindow.js":
false,

/***/ "./node_modules/dom-helpers/style/getComputedStyle.js":
false,

/***/ "./node_modules/dom-helpers/style/index.js":
false,

/***/ "./node_modules/dom-helpers/style/removeStyle.js":
false,

/***/ "./node_modules/dom-helpers/transition/isTransform.js":
false,

/***/ "./node_modules/dom-helpers/transition/properties.js":
false,

/***/ "./node_modules/dom-helpers/util/camelize.js":
false,

/***/ "./node_modules/dom-helpers/util/camelizeStyle.js":
false,

/***/ "./node_modules/dom-helpers/util/hyphenate.js":
false,

/***/ "./node_modules/dom-helpers/util/hyphenateStyle.js":
false,

/***/ "./node_modules/dom-helpers/util/inDOM.js":
false,

/***/ "./node_modules/dom-helpers/util/scrollbarSize.js":
false,

/***/ "./node_modules/fbjs/lib/shallowEqual.js":
false,

/***/ "./node_modules/hyphenate-style-name/index.js":
false,

/***/ "./node_modules/is-in-browser/dist/module.js":
false,

/***/ "./node_modules/is-plain-object/index.js":
false,

/***/ "./node_modules/isobject/index.js":
false,

/***/ "./node_modules/jss-camel-case/lib/index.js":
false,

/***/ "./node_modules/jss-compose/lib/index.js":
false,

/***/ "./node_modules/jss-default-unit/lib/defaultUnits.js":
false,

/***/ "./node_modules/jss-default-unit/lib/index.js":
false,

/***/ "./node_modules/jss-expand/lib/index.js":
false,

/***/ "./node_modules/jss-expand/lib/props.js":
false,

/***/ "./node_modules/jss-extend/lib/index.js":
false,

/***/ "./node_modules/jss-global/lib/index.js":
false,

/***/ "./node_modules/jss-nested/lib/index.js":
false,

/***/ "./node_modules/jss-preset-default/lib/index.js":
false,

/***/ "./node_modules/jss-props-sort/lib/index.js":
false,

/***/ "./node_modules/jss-template/lib/index.js":
false,

/***/ "./node_modules/jss-template/lib/parse.js":
false,

/***/ "./node_modules/jss-vendor-prefixer/lib/index.js":
false,

/***/ "./node_modules/jss/lib/Jss.js":
false,

/***/ "./node_modules/jss/lib/PluginsRegistry.js":
false,

/***/ "./node_modules/jss/lib/RuleList.js":
false,

/***/ "./node_modules/jss/lib/SheetsManager.js":
false,

/***/ "./node_modules/jss/lib/SheetsRegistry.js":
false,

/***/ "./node_modules/jss/lib/StyleSheet.js":
false,

/***/ "./node_modules/jss/lib/index.js":
false,

/***/ "./node_modules/jss/lib/plugins/functions.js":
false,

/***/ "./node_modules/jss/lib/plugins/observables.js":
false,

/***/ "./node_modules/jss/lib/plugins/rules.js":
false,

/***/ "./node_modules/jss/lib/renderers/DomRenderer.js":
false,

/***/ "./node_modules/jss/lib/renderers/VirtualRenderer.js":
false,

/***/ "./node_modules/jss/lib/rules/ConditionalRule.js":
false,

/***/ "./node_modules/jss/lib/rules/FontFaceRule.js":
false,

/***/ "./node_modules/jss/lib/rules/KeyframesRule.js":
false,

/***/ "./node_modules/jss/lib/rules/SimpleRule.js":
false,

/***/ "./node_modules/jss/lib/rules/StyleRule.js":
false,

/***/ "./node_modules/jss/lib/rules/ViewportRule.js":
false,

/***/ "./node_modules/jss/lib/sheets.js":
false,

/***/ "./node_modules/jss/lib/utils/cloneStyle.js":
false,

/***/ "./node_modules/jss/lib/utils/createGenerateClassName.js":
false,

/***/ "./node_modules/jss/lib/utils/createRule.js":
false,

/***/ "./node_modules/jss/lib/utils/escape.js":
false,

/***/ "./node_modules/jss/lib/utils/getDynamicStyles.js":
false,

/***/ "./node_modules/jss/lib/utils/isObservable.js":
false,

/***/ "./node_modules/jss/lib/utils/linkRule.js":
false,

/***/ "./node_modules/jss/lib/utils/moduleId.js":
false,

/***/ "./node_modules/jss/lib/utils/toCss.js":
false,

/***/ "./node_modules/jss/lib/utils/toCssValue.js":
false,

/***/ "./node_modules/next-server/dist/lib/head-manager-context.js":
false,

/***/ "./node_modules/next-server/dist/lib/head.js":
false,

/***/ "./node_modules/next-server/dist/lib/side-effect.js":
false,

/***/ "./node_modules/next-server/head.js":
false,

/***/ "./node_modules/react-event-listener/dist/react-event-listener.cjs.js":
false,

/***/ "./node_modules/react-event-listener/node_modules/@babel/runtime/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/react-event-listener/node_modules/@babel/runtime/helpers/classCallCheck.js":
false,

/***/ "./node_modules/react-event-listener/node_modules/@babel/runtime/helpers/createClass.js":
false,

/***/ "./node_modules/react-event-listener/node_modules/@babel/runtime/helpers/extends.js":
false,

/***/ "./node_modules/react-event-listener/node_modules/@babel/runtime/helpers/getPrototypeOf.js":
false,

/***/ "./node_modules/react-event-listener/node_modules/@babel/runtime/helpers/inherits.js":
false,

/***/ "./node_modules/react-event-listener/node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
false,

/***/ "./node_modules/react-event-listener/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
false,

/***/ "./node_modules/react-event-listener/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/react-event-listener/node_modules/@babel/runtime/helpers/setPrototypeOf.js":
false,

/***/ "./node_modules/react-event-listener/node_modules/@babel/runtime/helpers/typeof.js":
false,

/***/ "./node_modules/react-event-listener/node_modules/warning/warning.js":
false,

/***/ "./node_modules/react-icons/fa/index.mjs":
false,

/***/ "./node_modules/react-icons/lib/iconBase.mjs":
false,

/***/ "./node_modules/react-icons/lib/iconContext.mjs":
false,

/***/ "./node_modules/react-jss/lib/JssProvider.js":
false,

/***/ "./node_modules/react-jss/lib/contextTypes.js":
false,

/***/ "./node_modules/react-jss/lib/jss.js":
false,

/***/ "./node_modules/react-jss/lib/ns.js":
false,

/***/ "./node_modules/react-jss/lib/propTypes.js":
false,

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
false,

/***/ "./node_modules/react-transition-group/Transition.js":
false,

/***/ "./node_modules/react-transition-group/TransitionGroup.js":
false,

/***/ "./node_modules/react-transition-group/utils/ChildMapping.js":
false,

/***/ "./node_modules/react-transition-group/utils/PropTypes.js":
false,

/***/ "./node_modules/recompose/getDisplayName.js":
false,

/***/ "./node_modules/recompose/pure.js":
false,

/***/ "./node_modules/recompose/setDisplayName.js":
false,

/***/ "./node_modules/recompose/setStatic.js":
false,

/***/ "./node_modules/recompose/shallowEqual.js":
false,

/***/ "./node_modules/recompose/shouldUpdate.js":
false,

/***/ "./node_modules/recompose/wrapDisplayName.js":
false,

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
false,

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
false,

/***/ "./node_modules/warning/browser.js":
false,

/***/ "./node_modules/webpack/buildin/harmony-module.js":
false,

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SpiceKitchen; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");






var _jsxFileName = "/home/aravind/Documents/Work/spicekitchen/pages/_app.js";





var SpiceKitchen =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SpiceKitchen, _App);

  function SpiceKitchen(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SpiceKitchen);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(SpiceKitchen).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SpiceKitchen, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_6__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, this.state, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      })))));
    }
  }]);

  return SpiceKitchen;
}(next_app__WEBPACK_IMPORTED_MODULE_6___default.a);



/***/ }),

/***/ "./src/getPageContext.js":
false

})
//# sourceMappingURL=_app.js.030b1d40b48180021938.hot-update.js.map