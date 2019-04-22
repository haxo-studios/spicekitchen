webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/Drawer/index.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/AppBar/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/List/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/Divider/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "./node_modules/@material-ui/icons/ChevronLeft.js");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/ChevronRight */ "./node_modules/@material-ui/icons/ChevronRight.js");
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/ListItemText/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/icons/MoveToInbox */ "./node_modules/@material-ui/icons/MoveToInbox.js");
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/icons/Mail */ "./node_modules/@material-ui/icons/Mail.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.mjs");









var _jsxFileName = "/home/aravind/Documents/Work/spicekitchen/components/nav.js";




















var drawerWidth = 317;

var styles = function styles(theme) {
  return {
    root: {
      display: 'flex'
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      boxShadow: 'none'
    },
    appBarShift: {
      width: "calc(100% - ".concat(drawerWidth, "px)"),
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginRight: drawerWidth
    },
    hide: {
      display: 'none'
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      zIndex: 1
    },
    drawerPaper: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({
      width: drawerWidth
    }, theme.breakpoints.down('xs'), {
      width: '100%'
    }),
    drawerHeader: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_7__["default"])({
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      padding: '0 8px'
    }, theme.mixins.toolbar, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({
      justifyContent: 'flex-start',
      height: '100px'
    }, theme.breakpoints.up('md'), {
      minHeight: '102px'
    })),
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginRight: -drawerWidth
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginRight: 0
    },
    viewMenuBtn: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({
      color: '#120052',
      display: 'inline',
      float: 'right',
      margin: '37px 15px 0 0',
      width: '160px',
      height: '30px',
      fontFamily: 'Gotham',
      fontSize: '26px',
      fontWeight: '400',
      cursor: 'pointer',
      '&:hover': {
        textShadow: '#00c2ba 3px 3px'
      }
    }, theme.breakpoints.down('xs'), {
      marginTop: '25px'
    }),
    menuTxt: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, theme.breakpoints.down('xs'), {
      display: 'none'
    }),
    menuButton: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({
      display: 'none'
    }, theme.breakpoints.down('xs'), {
      display: 'inline',
      float: 'right',
      pointerEvents: 'none'
    }),
    listItem: {
      '& span': {
        fontFamily: 'Gotham',
        fontSize: '18px'
      }
    },
    sideNavTitle: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({
      fontFamily: 'Gotham',
      fontSize: '24px',
      marginLeft: '25%'
    }, theme.breakpoints.down('xs'), {
      display: 'none'
    }),
    logo: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({
      height: '100px',
      width: '100px',
      marginLeft: '25px',
      marginTop: '10px',
      cursor: 'pointer'
    }, theme.breakpoints.down('xs'), {
      textAlign: 'center'
    }),
    logoContainer: {
      display: 'inline'
    },
    menuClose: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, theme.breakpoints.down('xs'), {
      // float: 'right'
      marginLeft: 'auto'
    })
  };
};

var Nav =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Nav, _React$Component);

  function Nav() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Nav);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Nav)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      open: false,
      active: 'Veg Thali',
      dishes: {
        'Chicken Briyani': {
          url: '328605174',
          price: '$ 11.95'
        },
        'Aloo Paratha': {
          url: '328605133',
          price: '$ 07.50'
        },
        'Samosa Chat': {
          url: '328611999',
          price: '$ 07.95'
        },
        'Mix Thali': {
          url: '328611974',
          price: '$ 10.50'
        },
        'Tandoori Platter': {
          url: '328615288',
          price: '$ 12.95'
        },
        'Special Thali': {
          url: '328613414',
          price: '$ 12.95'
        },
        Dosa: {
          url: '328605920',
          price: '$ 07.95'
        },
        'Veg Thali': {
          url: '328615335',
          price: '$ 09.95'
        }
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleDrawerOpen", function () {
      _this.tick();

      _this.interval = setInterval(function () {
        return _this.tick();
      }, 12000);

      _this.setState({
        open: true
      }); // console.log(this.interval)

    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleDrawerClose", function () {
      clearInterval(_this.interval);

      _this.setState({
        open: false
      }); // console.log(this.interval)

    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Nav, [{
    key: "tick",
    value: function tick() {
      var dishesList = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(this.state.dishes);

      var currentVideoIndex = dishesList.indexOf(this.state.active);
      var nextVideo;

      if (currentVideoIndex == dishesList.length - 1) {
        nextVideo = dishesList[0];
      } else {
        nextVideo = dishesList[currentVideoIndex + 1];
      }

      var nextURL = this.state.dishes[nextVideo]['url']; // console.log(nextURL, nextVideo)

      this.setState(function (prevState) {
        return {
          active: nextVideo
        };
      });
      this.props.updateVideo(nextURL);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          classes = _this$props.classes,
          theme = _this$props.theme,
          updateVideo = _this$props.updateVideo,
          pathname = _this$props.pathname;
      var open = this.state.open;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_16___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_15___default.a, {
        position: "fixed",
        className: classnames__WEBPACK_IMPORTED_MODULE_12___default()(classes.appBar, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, classes.appBarShift, open)),
        style: {
          background: 'transparent' // height: pathname === '/about' ? '75px' : '100px',
          // transition: 'height 300ms linear',

        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: classes.logoContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        className: classes.logo,
        src: "/static/logo.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        // color="inherit"
        "aria-label": "Open drawer",
        onClick: this.handleDrawerOpen,
        className: classnames__WEBPACK_IMPORTED_MODULE_12___default()(classes.viewMenuBtn // open && classes.hide
        ),
        style: {
          // marginTop:
          //     pathname === '/about' ? '12px' : '24px',
          // transition: 'margin 300ms linear',
          display: pathname === '/about' || pathname === '/contact' ? 'none' : open ? 'none' : 'inline'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        className: classes.menuTxt,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      }, "VIEW MENU"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19___default.a, {
        color: "inherit",
        "aria-label": "Open drawer",
        onClick: this.handleDrawerOpen,
        className: classnames__WEBPACK_IMPORTED_MODULE_12___default()(classes.menuButton, open && classes.hide),
        style: {
          // marginTop:
          //     pathname === '/about' ? '12px' : '24px',
          // transition: 'margin 300ms linear',
          display: pathname === '/about' ? 'none' : ''
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_20___default.a, {
        style: {
          color: '#333',
          fontSize: '30px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_14___default.a, {
        className: classes.drawer,
        variant: "persistent",
        anchor: "right",
        open: open,
        classes: {
          paper: classes.drawerPaper
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: classes.drawerHeader,
        style: {
          minHeight: pathname === '/about' ? '77px' : '102px',
          height: pathname === '/about' ? '77px' : '102px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19___default.a, {
        className: classes.menuClose,
        onClick: this.handleDrawerClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      }, theme.direction === 'rtl' ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_21___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_22___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        className: classes.sideNavTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        },
        __self: this
      }, "Menu")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_18___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_17___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        __self: this
      }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(this.state.dishes).map(function (text, index) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_23___default.a, {
          button: true,
          key: text,
          onClick: function onClick() {
            updateVideo(_this2.state.dishes[text]['url']);

            _this2.setState(function (prevState) {
              return {
                active: text
              };
            });
          },
          style: {
            padding: '5px 16px 5px 16px',
            marginBottom: '20px',
            height: '50px',
            fontFamily: 'Gotham',
            fontSize: '18px'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 330
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
          style: {
            marginRight: '10px'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 347
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_28__["FaCaretRight"], {
          size: "2rem",
          color: _this2.state.active == text ? '#120052' : '#D3D3D3',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 352
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25___default.a, {
          primary: text,
          className: classes.listItem,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 361
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 365
          },
          __self: this
        }, _this2.state.dishes[text]['price']));
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_18___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369
        },
        __self: this
      })));
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

Nav.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object.isRequired,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__["withStyles"])(styles, {
  withTheme: true
})(Nav));

/***/ })

})
//# sourceMappingURL=_app.js.d334f380866a84f205d0.hot-update.js.map