webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/bottomNav.js":
/*!*********************************!*\
  !*** ./components/bottomNav.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.mjs");






var _jsxFileName = "/home/aravind/Documents/Work/spicekitchen/components/bottomNav.js";






var styles = function styles(theme) {
  return {
    footer: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])({
      position: 'fixed',
      left: 0,
      bottom: 0,
      height: '60px',
      width: '100%',
      background: 'transparent',
      // zIndex: 100,
      borderTop: '1px solid rgb(18,0,82, 0.5)'
    }, theme.breakpoints.down('xs'), {
      height: '120px'
    }),
    footerContainer: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])({
      height: '100%',
      padding: '0'
    }, theme.breakpoints.down('xs'), {
      height: '50%'
    }),
    link: {
      textDecoration: 'None',
      color: '#120052',
      fontSize: '16px',
      fontWeight: '700',
      fontFamily: 'Gotham Light',
      '&:hover': {
        textShadow: '#00c2ba 2px 2px'
      }
    },
    socialLink: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])({
      height: '100%',
      paddingTop: '20px'
    }, theme.breakpoints.down('sm'), {
      width: '100px'
    }),
    navLinkContainer: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])({}, theme.breakpoints.down('sm'), {
      maringTop: '20px'
    }),
    navLink: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])({
      height: '100%',
      paddingTop: '23px'
    }, theme.breakpoints.down('sm'), {
      width: '150px'
    }),
    aboutNavLink: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])({
      height: '100%',
      marginLeft: '-3px',
      paddingTop: '23px'
    }, theme.breakpoints.down('sm'), {
      width: '150px'
    })
  };
};

var BottomNav =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(BottomNav, _React$Component);

  function BottomNav() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BottomNav);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(BottomNav).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BottomNav, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          pathname = _this$props.pathname;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: classes.footer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
        container: true,
        spacing: 8,
        direction: "row",
        justify: "center",
        alignItems: "center",
        style: {
          height: '100%',
          margin: '0'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
        item: true,
        sm: 4,
        xs: 12,
        className: classes.footerContainer,
        style: {
          padding: '0'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
        container: true,
        direction: "row",
        justify: "center",
        alignItems: "center",
        style: {
          height: '100%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
        item: true,
        sm: 6,
        className: classes.socialLink,
        style: {
          textAlign: 'center',
          borderRight: '1px solid rgb(18,0,82, 0.75)'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaFacebookF"], {
        size: "2rem",
        color: "#120052",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
        item: true,
        sm: 6,
        className: classes.socialLink,
        style: {
          textAlign: 'center' // borderRight: '1px solid #120052',

        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaLinkedinIn"], {
        size: "2rem",
        color: "#120052",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
        item: true,
        sm: 4,
        xs: false,
        style: {
          padding: '0px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
        item: true,
        sm: 4,
        xs: 12,
        className: classes.footerContainer,
        style: {
          padding: '0'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
        container: true,
        direction: "row",
        justify: "center",
        alignItems: "center",
        style: {
          height: '100%'
        },
        className: classes.navLinkContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
        item: true,
        md: 4,
        sm: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
        item: true,
        md: 4,
        sm: 6,
        style: {
          textAlign: 'center' // borderLeft: '1px solid #120052',

        },
        className: classes.aboutNavLink,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: pathname == '/about' ? '/' : '/about',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "#",
        className: classes.link,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, pathname == '/about' ? 'MENU' : 'ABOUT US'))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
        item: true,
        md: 4,
        sm: 6,
        style: {
          textAlign: 'center',
          borderLeft: '1px solid rgb(18,0,82, 0.75)'
        },
        className: classes.navLink,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: pathname == '/contact' ? '/' : '/contact',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "#",
        className: classes.link,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, pathname == '/contact' ? 'MENU' : 'CONTACT US')))))));
    }
  }]);

  return BottomNav;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["withStyles"])(styles)(BottomNav));

/***/ })

})
//# sourceMappingURL=_app.js.fb44ca65a97a546a2f79.hot-update.js.map