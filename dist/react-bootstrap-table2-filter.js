(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactBootstrapTable2Filter"] = factory(require("react"));
	else
		root["ReactBootstrapTable2Filter"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var LIKE = exports.LIKE = 'LIKE';
var EQ = exports.EQ = '=';
var NE = exports.NE = '!=';
var GT = exports.GT = '>';
var GE = exports.GE = '>=';
var LT = exports.LT = '<';
var LE = exports.LE = '<=';

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FILTER_TYPE = exports.FILTER_TYPE = {
  TEXT: 'TEXT',
  SELECT: 'SELECT',
  MULTISELECT: 'MULTISELECT',
  NUMBER: 'NUMBER',
  DATE: 'DATE'
};

var FILTER_DELAY = exports.FILTER_DELAY = 500;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (false) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(6)();
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.customFilter = exports.dateFilter = exports.numberFilter = exports.multiSelectFilter = exports.selectFilter = exports.textFilter = exports.Comparator = exports.FILTER_TYPES = undefined;

var _text = __webpack_require__(5);

var _text2 = _interopRequireDefault(_text);

var _select = __webpack_require__(10);

var _select2 = _interopRequireDefault(_select);

var _multiselect = __webpack_require__(11);

var _multiselect2 = _interopRequireDefault(_multiselect);

var _number = __webpack_require__(12);

var _number2 = _interopRequireDefault(_number);

var _date = __webpack_require__(13);

var _date2 = _interopRequireDefault(_date);

var _context = __webpack_require__(14);

var _context2 = _interopRequireDefault(_context);

var _comparison = __webpack_require__(0);

var Comparison = _interopRequireWildcard(_comparison);

var _const = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    createContext: _context2.default,
    options: options
  };
};

var FILTER_TYPES = exports.FILTER_TYPES = _const.FILTER_TYPE;

var Comparator = exports.Comparator = Comparison;

var textFilter = exports.textFilter = function textFilter() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    Filter: _text2.default,
    props: props
  };
};

var selectFilter = exports.selectFilter = function selectFilter() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    Filter: _select2.default,
    props: props
  };
};

var multiSelectFilter = exports.multiSelectFilter = function multiSelectFilter() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    Filter: _multiselect2.default,
    props: props
  };
};

var numberFilter = exports.numberFilter = function numberFilter() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    Filter: _number2.default,
    props: props
  };
};

var dateFilter = exports.dateFilter = function dateFilter() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    Filter: _date2.default,
    props: props
  };
};

var customFilter = exports.customFilter = function customFilter() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    props: props
  };
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _comparison = __webpack_require__(0);

var _const = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/require-default-props: 0 */
/* eslint react/prop-types: 0 */
/* eslint no-return-assign: 0 */


var TextFilter = function (_Component) {
  _inherits(TextFilter, _Component);

  function TextFilter(props) {
    _classCallCheck(this, TextFilter);

    var _this = _possibleConstructorReturn(this, (TextFilter.__proto__ || Object.getPrototypeOf(TextFilter)).call(this, props));

    _this.filter = _this.filter.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    _this.timeout = null;
    _this.state = {
      value: props.defaultValue
    };
    return _this;
  }

  _createClass(TextFilter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var _props = this.props,
          onFilter = _props.onFilter,
          getFilter = _props.getFilter,
          column = _props.column;

      var defaultValue = this.input.value;

      if (defaultValue) {
        onFilter(this.props.column, _const.FILTER_TYPE.TEXT, true)(defaultValue);
      }

      // export onFilter function to allow users to access
      if (getFilter) {
        getFilter(function (filterVal) {
          _this2.setState(function () {
            return { value: filterVal };
          });
          onFilter(column, _const.FILTER_TYPE.TEXT)(filterVal);
        });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.defaultValue !== this.props.defaultValue) {
        this.applyFilter(nextProps.defaultValue);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.cleanTimer();
    }
  }, {
    key: 'filter',
    value: function filter(e) {
      var _this3 = this;

      e.stopPropagation();
      this.cleanTimer();
      var filterValue = e.target.value;
      this.setState(function () {
        return { value: filterValue };
      });
      this.timeout = setTimeout(function () {
        _this3.props.onFilter(_this3.props.column, _const.FILTER_TYPE.TEXT)(filterValue);
      }, this.props.delay);
    }
  }, {
    key: 'cleanTimer',
    value: function cleanTimer() {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
    }
  }, {
    key: 'cleanFiltered',
    value: function cleanFiltered() {
      var value = this.props.defaultValue;
      this.setState(function () {
        return { value: value };
      });
      this.props.onFilter(this.props.column, _const.FILTER_TYPE.TEXT)(value);
    }
  }, {
    key: 'applyFilter',
    value: function applyFilter(filterText) {
      this.setState(function () {
        return { value: filterText };
      });
      this.props.onFilter(this.props.column, _const.FILTER_TYPE.TEXT)(filterText);
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      e.stopPropagation();
      if (this.props.onClick) {
        this.props.onClick(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props2 = this.props,
          placeholder = _props2.placeholder,
          text = _props2.column.text,
          style = _props2.style,
          className = _props2.className,
          onFilter = _props2.onFilter,
          caseSensitive = _props2.caseSensitive,
          defaultValue = _props2.defaultValue,
          getFilter = _props2.getFilter,
          rest = _objectWithoutProperties(_props2, ['placeholder', 'column', 'style', 'className', 'onFilter', 'caseSensitive', 'defaultValue', 'getFilter']);

      // stopPropagation for onClick event is try to prevent sort was triggered.


      return _react2.default.createElement('input', _extends({}, rest, {
        ref: function ref(n) {
          return _this4.input = n;
        },
        type: 'text',
        className: 'filter text-filter form-control ' + className,
        style: style,
        onChange: this.filter,
        onClick: this.handleClick,
        placeholder: placeholder || 'Enter ' + text + '...',
        value: this.state.value
      }));
    }
  }]);

  return TextFilter;
}(_react.Component);

TextFilter.propTypes = {
  onFilter: _propTypes.PropTypes.func.isRequired,
  column: _propTypes.PropTypes.object.isRequired,
  comparator: _propTypes.PropTypes.oneOf([_comparison.LIKE, _comparison.EQ]),
  defaultValue: _propTypes.PropTypes.string,
  delay: _propTypes.PropTypes.number,
  placeholder: _propTypes.PropTypes.string,
  style: _propTypes.PropTypes.object,
  className: _propTypes.PropTypes.string,
  caseSensitive: _propTypes.PropTypes.bool,
  getFilter: _propTypes.PropTypes.func
};

TextFilter.defaultProps = {
  delay: _const.FILTER_DELAY,
  defaultValue: '',
  caseSensitive: false
};

exports.default = TextFilter;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(7);
var invariant = __webpack_require__(8);
var ReactPropTypesSecret = __webpack_require__(9);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _comparison = __webpack_require__(0);

var _const = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/require-default-props: 0 */
/* eslint no-return-assign: 0 */
/* eslint react/no-unused-prop-types: 0 */


function optionsEquals(currOpts, prevOpts) {
  if (Array.isArray(currOpts)) {
    for (var i = 0; i < currOpts.length; i += 1) {
      if (currOpts[i].value !== prevOpts[i].value || currOpts[i].label !== prevOpts[i].label) {
        return false;
      }
    }
    return currOpts.length === prevOpts.length;
  }
  var keys = Object.keys(currOpts);
  for (var _i = 0; _i < keys.length; _i += 1) {
    if (currOpts[keys[_i]] !== prevOpts[keys[_i]]) {
      return false;
    }
  }
  return Object.keys(currOpts).length === Object.keys(prevOpts).length;
}

function getOptionValue(options, key) {
  if (Array.isArray(options)) {
    var result = options.filter(function (_ref) {
      var label = _ref.label;
      return label === key;
    }).map(function (_ref2) {
      var value = _ref2.value;
      return value;
    });
    return result[0];
  }
  return options[key];
}

var SelectFilter = function (_Component) {
  _inherits(SelectFilter, _Component);

  function SelectFilter(props) {
    _classCallCheck(this, SelectFilter);

    var _this = _possibleConstructorReturn(this, (SelectFilter.__proto__ || Object.getPrototypeOf(SelectFilter)).call(this, props));

    _this.filter = _this.filter.bind(_this);
    var isSelected = getOptionValue(props.options, props.defaultValue) !== undefined;
    _this.state = { isSelected: isSelected };
    return _this;
  }

  _createClass(SelectFilter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var _props = this.props,
          column = _props.column,
          onFilter = _props.onFilter,
          getFilter = _props.getFilter;


      var value = this.selectInput.value;
      if (value && value !== '') {
        onFilter(column, _const.FILTER_TYPE.SELECT, true)(value);
      }

      // export onFilter function to allow users to access
      if (getFilter) {
        getFilter(function (filterVal) {
          _this2.setState(function () {
            return { isSelected: filterVal !== '' };
          });
          _this2.selectInput.value = filterVal;

          onFilter(column, _const.FILTER_TYPE.SELECT)(filterVal);
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var needFilter = false;
      if (this.props.defaultValue !== prevProps.defaultValue) {
        needFilter = true;
      } else if (!optionsEquals(this.props.options, prevProps.options)) {
        needFilter = true;
      }
      if (needFilter) {
        var value = this.selectInput.value;
        if (value) {
          this.props.onFilter(this.props.column, _const.FILTER_TYPE.SELECT)(value);
        }
      }
    }
  }, {
    key: 'getOptions',
    value: function getOptions() {
      var optionTags = [];
      var _props2 = this.props,
          options = _props2.options,
          placeholder = _props2.placeholder,
          column = _props2.column,
          withoutEmptyOption = _props2.withoutEmptyOption;

      if (!withoutEmptyOption) {
        optionTags.push(_react2.default.createElement(
          'option',
          { key: '-1', value: '' },
          placeholder || 'Select ' + column.text + '...'
        ));
      }
      if (Array.isArray(options)) {
        options.forEach(function (_ref3) {
          var value = _ref3.value,
              label = _ref3.label;
          return optionTags.push(_react2.default.createElement(
            'option',
            { key: value, value: value },
            label
          ));
        });
      } else {
        Object.keys(options).forEach(function (key) {
          return optionTags.push(_react2.default.createElement(
            'option',
            { key: key, value: key },
            options[key]
          ));
        });
      }
      return optionTags;
    }
  }, {
    key: 'cleanFiltered',
    value: function cleanFiltered() {
      var value = this.props.defaultValue !== undefined ? this.props.defaultValue : '';
      this.setState(function () {
        return { isSelected: value !== '' };
      });
      this.selectInput.value = value;
      this.props.onFilter(this.props.column, _const.FILTER_TYPE.SELECT)(value);
    }
  }, {
    key: 'applyFilter',
    value: function applyFilter(value) {
      this.selectInput.value = value;
      this.setState(function () {
        return { isSelected: value !== '' };
      });
      this.props.onFilter(this.props.column, _const.FILTER_TYPE.SELECT)(value);
    }
  }, {
    key: 'filter',
    value: function filter(e) {
      var value = e.target.value;

      this.setState(function () {
        return { isSelected: value !== '' };
      });
      this.props.onFilter(this.props.column, _const.FILTER_TYPE.SELECT)(value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props3 = this.props,
          style = _props3.style,
          className = _props3.className,
          defaultValue = _props3.defaultValue,
          onFilter = _props3.onFilter,
          column = _props3.column,
          options = _props3.options,
          comparator = _props3.comparator,
          withoutEmptyOption = _props3.withoutEmptyOption,
          caseSensitive = _props3.caseSensitive,
          getFilter = _props3.getFilter,
          rest = _objectWithoutProperties(_props3, ['style', 'className', 'defaultValue', 'onFilter', 'column', 'options', 'comparator', 'withoutEmptyOption', 'caseSensitive', 'getFilter']);

      var selectClass = 'filter select-filter form-control ' + className + ' ' + (this.state.isSelected ? '' : 'placeholder-selected');

      return _react2.default.createElement(
        'select',
        _extends({}, rest, {
          ref: function ref(n) {
            return _this3.selectInput = n;
          },
          style: style,
          className: selectClass,
          onChange: this.filter,
          onClick: function onClick(e) {
            return e.stopPropagation();
          },
          defaultValue: defaultValue !== undefined ? defaultValue : ''
        }),
        this.getOptions()
      );
    }
  }]);

  return SelectFilter;
}(_react.Component);

SelectFilter.propTypes = {
  onFilter: _propTypes2.default.func.isRequired,
  column: _propTypes2.default.object.isRequired,
  options: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.array]).isRequired,
  comparator: _propTypes2.default.oneOf([_comparison.LIKE, _comparison.EQ]),
  placeholder: _propTypes2.default.string,
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  withoutEmptyOption: _propTypes2.default.bool,
  defaultValue: _propTypes2.default.any,
  caseSensitive: _propTypes2.default.bool,
  getFilter: _propTypes2.default.func
};

SelectFilter.defaultProps = {
  defaultValue: '',
  className: '',
  withoutEmptyOption: false,
  comparator: _comparison.EQ,
  caseSensitive: true
};

exports.default = SelectFilter;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _comparison = __webpack_require__(0);

var _const = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/require-default-props: 0 */
/* eslint no-return-assign: 0 */
/* eslint no-param-reassign: 0 */
/* eslint react/no-unused-prop-types: 0 */


function optionsEquals(currOpts, prevOpts) {
  var keys = Object.keys(currOpts);
  for (var i = 0; i < keys.length; i += 1) {
    if (currOpts[keys[i]] !== prevOpts[keys[i]]) {
      return false;
    }
  }
  return Object.keys(currOpts).length === Object.keys(prevOpts).length;
}

var getSelections = function getSelections(container) {
  return Array.from(container.selectedOptions).map(function (item) {
    return item.value;
  });
};

var MultiSelectFilter = function (_Component) {
  _inherits(MultiSelectFilter, _Component);

  function MultiSelectFilter(props) {
    _classCallCheck(this, MultiSelectFilter);

    var _this = _possibleConstructorReturn(this, (MultiSelectFilter.__proto__ || Object.getPrototypeOf(MultiSelectFilter)).call(this, props));

    _this.filter = _this.filter.bind(_this);
    _this.applyFilter = _this.applyFilter.bind(_this);
    var isSelected = props.defaultValue.map(function (item) {
      return props.options[item];
    }).length > 0;
    _this.state = { isSelected: isSelected };
    return _this;
  }

  _createClass(MultiSelectFilter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var getFilter = this.props.getFilter;


      var value = getSelections(this.selectInput);
      if (value && value.length > 0) {
        this.applyFilter(value);
      }

      // export onFilter function to allow users to access
      if (getFilter) {
        getFilter(function (filterVal) {
          _this2.selectInput.value = filterVal;
          _this2.applyFilter(filterVal);
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var needFilter = false;
      if (this.props.defaultValue !== prevProps.defaultValue) {
        needFilter = true;
      } else if (!optionsEquals(this.props.options, prevProps.options)) {
        needFilter = true;
      }
      if (needFilter) {
        this.applyFilter(this.selectInput.value);
      }
    }
  }, {
    key: 'getOptions',
    value: function getOptions() {
      var optionTags = [];
      var _props = this.props,
          options = _props.options,
          placeholder = _props.placeholder,
          column = _props.column,
          withoutEmptyOption = _props.withoutEmptyOption;

      if (!withoutEmptyOption) {
        optionTags.push(_react2.default.createElement(
          'option',
          { key: '-1', value: '' },
          placeholder || 'Select ' + column.text + '...'
        ));
      }
      Object.keys(options).forEach(function (key) {
        return optionTags.push(_react2.default.createElement(
          'option',
          { key: key, value: key },
          options[key]
        ));
      });
      return optionTags;
    }
  }, {
    key: 'cleanFiltered',
    value: function cleanFiltered() {
      var value = this.props.defaultValue !== undefined ? this.props.defaultValue : [];
      this.selectInput.value = value;
      this.applyFilter(value);
    }
  }, {
    key: 'applyFilter',
    value: function applyFilter(value) {
      if (value.length === 1 && value[0] === '') {
        value = [];
      }
      this.setState(function () {
        return { isSelected: value.length > 0 };
      });
      this.props.onFilter(this.props.column, _const.FILTER_TYPE.MULTISELECT)(value);
    }
  }, {
    key: 'filter',
    value: function filter(e) {
      var value = getSelections(e.target);
      this.applyFilter(value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props2 = this.props,
          style = _props2.style,
          className = _props2.className,
          defaultValue = _props2.defaultValue,
          onFilter = _props2.onFilter,
          column = _props2.column,
          options = _props2.options,
          comparator = _props2.comparator,
          withoutEmptyOption = _props2.withoutEmptyOption,
          caseSensitive = _props2.caseSensitive,
          getFilter = _props2.getFilter,
          rest = _objectWithoutProperties(_props2, ['style', 'className', 'defaultValue', 'onFilter', 'column', 'options', 'comparator', 'withoutEmptyOption', 'caseSensitive', 'getFilter']);

      var selectClass = 'filter select-filter form-control ' + className + ' ' + (this.state.isSelected ? '' : 'placeholder-selected');

      return _react2.default.createElement(
        'select',
        _extends({}, rest, {
          ref: function ref(n) {
            return _this3.selectInput = n;
          },
          style: style,
          multiple: true,
          className: selectClass,
          onChange: this.filter,
          onClick: function onClick(e) {
            return e.stopPropagation();
          },
          defaultValue: defaultValue !== undefined ? defaultValue : ''
        }),
        this.getOptions()
      );
    }
  }]);

  return MultiSelectFilter;
}(_react.Component);

MultiSelectFilter.propTypes = {
  onFilter: _propTypes2.default.func.isRequired,
  column: _propTypes2.default.object.isRequired,
  options: _propTypes2.default.object.isRequired,
  comparator: _propTypes2.default.oneOf([_comparison.LIKE, _comparison.EQ]),
  placeholder: _propTypes2.default.string,
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  withoutEmptyOption: _propTypes2.default.bool,
  defaultValue: _propTypes2.default.array,
  caseSensitive: _propTypes2.default.bool,
  getFilter: _propTypes2.default.func
};

MultiSelectFilter.defaultProps = {
  defaultValue: [],
  className: '',
  withoutEmptyOption: false,
  comparator: _comparison.EQ,
  caseSensitive: true
};

exports.default = MultiSelectFilter;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _comparison = __webpack_require__(0);

var Comparator = _interopRequireWildcard(_comparison);

var _const = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint jsx-a11y/no-static-element-interactions: 0 */
/* eslint react/require-default-props: 0 */
/* eslint no-return-assign: 0 */

var legalComparators = [Comparator.EQ, Comparator.NE, Comparator.GT, Comparator.GE, Comparator.LT, Comparator.LE];

var NumberFilter = function (_Component) {
  _inherits(NumberFilter, _Component);

  function NumberFilter(props) {
    _classCallCheck(this, NumberFilter);

    var _this = _possibleConstructorReturn(this, (NumberFilter.__proto__ || Object.getPrototypeOf(NumberFilter)).call(this, props));

    _this.comparators = props.comparators || legalComparators;
    _this.timeout = null;
    var isSelected = props.defaultValue !== undefined && props.defaultValue.number !== undefined;
    if (props.options && isSelected) {
      isSelected = props.options.indexOf(props.defaultValue.number) > -1;
    }
    _this.state = { isSelected: isSelected };
    _this.onChangeNumber = _this.onChangeNumber.bind(_this);
    _this.onChangeNumberSet = _this.onChangeNumberSet.bind(_this);
    _this.onChangeComparator = _this.onChangeComparator.bind(_this);
    return _this;
  }

  _createClass(NumberFilter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var _props = this.props,
          column = _props.column,
          onFilter = _props.onFilter,
          getFilter = _props.getFilter;

      var comparator = this.numberFilterComparator.value;
      var number = this.numberFilter.value;
      if (comparator && number) {
        onFilter(column, _const.FILTER_TYPE.NUMBER, true)({ number: number, comparator: comparator });
      }

      // export onFilter function to allow users to access
      if (getFilter) {
        getFilter(function (filterVal) {
          _this2.setState(function () {
            return { isSelected: filterVal !== '' };
          });
          _this2.numberFilterComparator.value = filterVal.comparator;
          _this2.numberFilter.value = filterVal.number;

          onFilter(column, _const.FILTER_TYPE.NUMBER)({
            number: filterVal.number,
            comparator: filterVal.comparator
          });
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: 'onChangeNumber',
    value: function onChangeNumber(e) {
      var _props2 = this.props,
          delay = _props2.delay,
          column = _props2.column,
          onFilter = _props2.onFilter;

      var comparator = this.numberFilterComparator.value;
      if (comparator === '') {
        return;
      }
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      var filterValue = e.target.value;
      this.timeout = setTimeout(function () {
        onFilter(column, _const.FILTER_TYPE.NUMBER)({ number: filterValue, comparator: comparator });
      }, delay);
    }
  }, {
    key: 'onChangeNumberSet',
    value: function onChangeNumberSet(e) {
      var _props3 = this.props,
          column = _props3.column,
          onFilter = _props3.onFilter;

      var comparator = this.numberFilterComparator.value;
      var value = e.target.value;

      this.setState(function () {
        return { isSelected: value !== '' };
      });
      // if (comparator === '') {
      //   return;
      // }
      onFilter(column, _const.FILTER_TYPE.NUMBER)({ number: value, comparator: comparator });
    }
  }, {
    key: 'onChangeComparator',
    value: function onChangeComparator(e) {
      var _props4 = this.props,
          column = _props4.column,
          onFilter = _props4.onFilter;

      var value = this.numberFilter.value;
      var comparator = e.target.value;
      // if (value === '') {
      //   return;
      // }
      onFilter(column, _const.FILTER_TYPE.NUMBER)({ number: value, comparator: comparator });
    }
  }, {
    key: 'getComparatorOptions',
    value: function getComparatorOptions() {
      var optionTags = [];
      var withoutEmptyComparatorOption = this.props.withoutEmptyComparatorOption;

      if (!withoutEmptyComparatorOption) {
        optionTags.push(_react2.default.createElement('option', { key: '-1' }));
      }
      for (var i = 0; i < this.comparators.length; i += 1) {
        optionTags.push(_react2.default.createElement(
          'option',
          { key: i, value: this.comparators[i] },
          this.comparators[i]
        ));
      }
      return optionTags;
    }
  }, {
    key: 'getNumberOptions',
    value: function getNumberOptions() {
      var optionTags = [];
      var _props5 = this.props,
          options = _props5.options,
          column = _props5.column,
          withoutEmptyNumberOption = _props5.withoutEmptyNumberOption;

      if (!withoutEmptyNumberOption) {
        optionTags.push(_react2.default.createElement(
          'option',
          { key: '-1', value: '' },
          this.props.placeholder || 'Select ' + column.text + '...'
        ));
      }
      for (var i = 0; i < options.length; i += 1) {
        optionTags.push(_react2.default.createElement(
          'option',
          { key: i, value: options[i] },
          options[i]
        ));
      }
      return optionTags;
    }
  }, {
    key: 'applyFilter',
    value: function applyFilter(filterObj) {
      var _props6 = this.props,
          column = _props6.column,
          onFilter = _props6.onFilter;
      var number = filterObj.number,
          comparator = filterObj.comparator;

      this.setState(function () {
        return { isSelected: number !== '' };
      });
      this.numberFilterComparator.value = comparator;
      this.numberFilter.value = number;
      onFilter(column, _const.FILTER_TYPE.NUMBER)({ number: number, comparator: comparator });
    }
  }, {
    key: 'cleanFiltered',
    value: function cleanFiltered() {
      var _props7 = this.props,
          column = _props7.column,
          onFilter = _props7.onFilter,
          defaultValue = _props7.defaultValue;

      var value = defaultValue ? defaultValue.number : '';
      var comparator = defaultValue ? defaultValue.comparator : '';
      this.setState(function () {
        return { isSelected: value !== '' };
      });
      this.numberFilterComparator.value = comparator;
      this.numberFilter.value = value;
      onFilter(column, _const.FILTER_TYPE.NUMBER)({ number: value, comparator: comparator });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var isSelected = this.state.isSelected;
      var _props8 = this.props,
          defaultValue = _props8.defaultValue,
          column = _props8.column,
          options = _props8.options,
          style = _props8.style,
          className = _props8.className,
          numberStyle = _props8.numberStyle,
          numberClassName = _props8.numberClassName,
          comparatorStyle = _props8.comparatorStyle,
          comparatorClassName = _props8.comparatorClassName,
          placeholder = _props8.placeholder;

      var selectClass = '\n      select-filter \n      number-filter-input \n      form-control \n      ' + numberClassName + ' \n      ' + (!isSelected ? 'placeholder-selected' : '') + '\n    ';

      return _react2.default.createElement(
        'div',
        {
          onClick: function onClick(e) {
            return e.stopPropagation();
          },
          className: 'filter number-filter ' + className,
          style: style
        },
        _react2.default.createElement(
          'select',
          {
            ref: function ref(n) {
              return _this3.numberFilterComparator = n;
            },
            style: comparatorStyle,
            className: 'number-filter-comparator form-control ' + comparatorClassName,
            onChange: this.onChangeComparator,
            defaultValue: defaultValue ? defaultValue.comparator : ''
          },
          this.getComparatorOptions()
        ),
        options ? _react2.default.createElement(
          'select',
          {
            ref: function ref(n) {
              return _this3.numberFilter = n;
            },
            style: numberStyle,
            className: selectClass,
            onChange: this.onChangeNumberSet,
            defaultValue: defaultValue ? defaultValue.number : ''
          },
          this.getNumberOptions()
        ) : _react2.default.createElement('input', {
          ref: function ref(n) {
            return _this3.numberFilter = n;
          },
          type: 'number',
          style: numberStyle,
          className: 'number-filter-input form-control ' + numberClassName,
          placeholder: placeholder || 'Enter ' + column.text + '...',
          onChange: this.onChangeNumber,
          defaultValue: defaultValue ? defaultValue.number : ''
        })
      );
    }
  }]);

  return NumberFilter;
}(_react.Component);

NumberFilter.propTypes = {
  onFilter: _propTypes2.default.func.isRequired,
  column: _propTypes2.default.object.isRequired,
  options: _propTypes2.default.arrayOf(_propTypes2.default.number),
  defaultValue: _propTypes2.default.shape({
    number: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    comparator: _propTypes2.default.oneOf([].concat(legalComparators, ['']))
  }),
  delay: _propTypes2.default.number,
  /* eslint consistent-return: 0 */
  comparators: function comparators(props, propName) {
    if (!props[propName]) {
      return;
    }
    for (var i = 0; i < props[propName].length; i += 1) {
      var comparatorIsValid = false;
      for (var j = 0; j < legalComparators.length; j += 1) {
        if (legalComparators[j] === props[propName][i] || props[propName][i] === '') {
          comparatorIsValid = true;
          break;
        }
      }
      if (!comparatorIsValid) {
        return new Error('Number comparator provided is not supported.\n          Use only ' + legalComparators);
      }
    }
  },
  placeholder: _propTypes2.default.string,
  withoutEmptyComparatorOption: _propTypes2.default.bool,
  withoutEmptyNumberOption: _propTypes2.default.bool,
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  comparatorStyle: _propTypes2.default.object,
  comparatorClassName: _propTypes2.default.string,
  numberStyle: _propTypes2.default.object,
  numberClassName: _propTypes2.default.string,
  getFilter: _propTypes2.default.func
};

NumberFilter.defaultProps = {
  delay: _const.FILTER_DELAY,
  options: undefined,
  defaultValue: {
    number: undefined,
    comparator: ''
  },
  withoutEmptyComparatorOption: false,
  withoutEmptyNumberOption: false,
  comparators: legalComparators,
  placeholder: undefined,
  style: undefined,
  className: '',
  comparatorStyle: undefined,
  comparatorClassName: '',
  numberStyle: undefined,
  numberClassName: ''
};

exports.default = NumberFilter;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _comparison = __webpack_require__(0);

var Comparator = _interopRequireWildcard(_comparison);

var _const = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/require-default-props: 0 */
/* eslint jsx-a11y/no-static-element-interactions: 0 */
/* eslint no-return-assign: 0 */
/* eslint prefer-template: 0 */


var legalComparators = [Comparator.EQ, Comparator.NE, Comparator.GT, Comparator.GE, Comparator.LT, Comparator.LE];

function dateParser(d) {
  return d.getUTCFullYear() + '-' + ('0' + (d.getUTCMonth() + 1)).slice(-2) + '-' + ('0' + d.getUTCDate()).slice(-2);
}

var DateFilter = function (_Component) {
  _inherits(DateFilter, _Component);

  function DateFilter(props) {
    _classCallCheck(this, DateFilter);

    var _this = _possibleConstructorReturn(this, (DateFilter.__proto__ || Object.getPrototypeOf(DateFilter)).call(this, props));

    _this.timeout = null;
    _this.comparators = props.comparators || legalComparators;
    _this.applyFilter = _this.applyFilter.bind(_this);
    _this.onChangeDate = _this.onChangeDate.bind(_this);
    _this.onChangeComparator = _this.onChangeComparator.bind(_this);
    return _this;
  }

  _createClass(DateFilter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var getFilter = this.props.getFilter;

      var comparator = this.dateFilterComparator.value;
      var date = this.inputDate.value;
      if (comparator && date) {
        this.applyFilter(date, comparator, true);
      }

      // export onFilter function to allow users to access
      if (getFilter) {
        getFilter(function (filterVal) {
          var nullableFilterVal = filterVal || { date: null, comparator: null };
          _this2.dateFilterComparator.value = nullableFilterVal.comparator;
          _this2.inputDate.value = nullableFilterVal.date ? dateParser(nullableFilterVal.date) : null;

          _this2.applyFilter(nullableFilterVal.date, nullableFilterVal.comparator);
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.timeout) clearTimeout(this.timeout);
    }
  }, {
    key: 'onChangeDate',
    value: function onChangeDate(e) {
      var comparator = this.dateFilterComparator.value;
      var filterValue = e.target.value;
      this.applyFilter(filterValue, comparator);
    }
  }, {
    key: 'onChangeComparator',
    value: function onChangeComparator(e) {
      var value = this.inputDate.value;
      var comparator = e.target.value;
      this.applyFilter(value, comparator);
    }
  }, {
    key: 'getComparatorOptions',
    value: function getComparatorOptions() {
      var optionTags = [];
      var withoutEmptyComparatorOption = this.props.withoutEmptyComparatorOption;

      if (!withoutEmptyComparatorOption) {
        optionTags.push(_react2.default.createElement('option', { key: '-1' }));
      }
      for (var i = 0; i < this.comparators.length; i += 1) {
        optionTags.push(_react2.default.createElement(
          'option',
          { key: i, value: this.comparators[i] },
          this.comparators[i]
        ));
      }
      return optionTags;
    }
  }, {
    key: 'getDefaultDate',
    value: function getDefaultDate() {
      var defaultDate = '';
      var defaultValue = this.props.defaultValue;

      if (defaultValue && defaultValue.date) {
        // Set the appropriate format for the input type=date, i.e. "YYYY-MM-DD"
        defaultDate = dateParser(new Date(defaultValue.date));
      }
      return defaultDate;
    }
  }, {
    key: 'applyFilter',
    value: function applyFilter(value, comparator, isInitial) {
      // if (!comparator || !value) {
      //  return;
      // }
      var _props = this.props,
          column = _props.column,
          onFilter = _props.onFilter,
          delay = _props.delay;

      var execute = function execute() {
        // Incoming value should always be a string, and the defaultDate
        // above is implemented as an empty string, so we can just check for that.
        // instead of parsing an invalid Date. The filter function will interpret
        // null as an empty date field
        var date = value === '' ? null : new Date(value);
        onFilter(column, _const.FILTER_TYPE.DATE, isInitial)({ date: date, comparator: comparator });
      };
      if (delay) {
        this.timeout = setTimeout(function () {
          execute();
        }, delay);
      } else {
        execute();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props2 = this.props,
          placeholder = _props2.placeholder,
          text = _props2.column.text,
          style = _props2.style,
          comparatorStyle = _props2.comparatorStyle,
          dateStyle = _props2.dateStyle,
          className = _props2.className,
          comparatorClassName = _props2.comparatorClassName,
          dateClassName = _props2.dateClassName,
          defaultValue = _props2.defaultValue;


      return _react2.default.createElement(
        'div',
        {
          onClick: function onClick(e) {
            return e.stopPropagation();
          },
          className: 'filter date-filter ' + className,
          style: style
        },
        _react2.default.createElement(
          'select',
          {
            ref: function ref(n) {
              return _this3.dateFilterComparator = n;
            },
            style: comparatorStyle,
            className: 'date-filter-comparator form-control ' + comparatorClassName,
            onChange: this.onChangeComparator,
            defaultValue: defaultValue ? defaultValue.comparator : ''
          },
          this.getComparatorOptions()
        ),
        _react2.default.createElement('input', {
          ref: function ref(n) {
            return _this3.inputDate = n;
          },
          className: 'filter date-filter-input form-control ' + dateClassName,
          style: dateStyle,
          type: 'date',
          onChange: this.onChangeDate,
          placeholder: placeholder || 'Enter ' + text + '...',
          defaultValue: this.getDefaultDate()
        })
      );
    }
  }]);

  return DateFilter;
}(_react.Component);

DateFilter.propTypes = {
  onFilter: _propTypes.PropTypes.func.isRequired,
  column: _propTypes.PropTypes.object.isRequired,
  delay: _propTypes.PropTypes.number,
  defaultValue: _propTypes.PropTypes.shape({
    date: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.object]),
    comparator: _propTypes.PropTypes.oneOf([].concat(legalComparators, ['']))
  }),
  /* eslint consistent-return: 0 */
  comparators: function comparators(props, propName) {
    if (!props[propName]) {
      return;
    }
    for (var i = 0; i < props[propName].length; i += 1) {
      var comparatorIsValid = false;
      for (var j = 0; j < legalComparators.length; j += 1) {
        if (legalComparators[j] === props[propName][i] || props[propName][i] === '') {
          comparatorIsValid = true;
          break;
        }
      }
      if (!comparatorIsValid) {
        return new Error('Date comparator provided is not supported.\n          Use only ' + legalComparators);
      }
    }
  },
  placeholder: _propTypes.PropTypes.string,
  withoutEmptyComparatorOption: _propTypes.PropTypes.bool,
  style: _propTypes.PropTypes.object,
  comparatorStyle: _propTypes.PropTypes.object,
  dateStyle: _propTypes.PropTypes.object,
  className: _propTypes.PropTypes.string,
  comparatorClassName: _propTypes.PropTypes.string,
  dateClassName: _propTypes.PropTypes.string,
  getFilter: _propTypes.PropTypes.func
};

DateFilter.defaultProps = {
  delay: 0,
  defaultValue: {
    date: undefined,
    comparator: ''
  },
  withoutEmptyComparatorOption: false,
  comparators: legalComparators,
  placeholder: undefined,
  style: undefined,
  className: '',
  comparatorStyle: undefined,
  comparatorClassName: '',
  dateStyle: undefined,
  dateClassName: ''
};

exports.default = DateFilter;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _filter = __webpack_require__(15);

var _comparison = __webpack_require__(0);

var _const = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */
/* eslint react/require-default-props: 0 */


exports.default = function (_, isRemoteFiltering, handleFilterChange) {
  var FilterContext = _react2.default.createContext();

  var FilterProvider = function (_React$Component) {
    _inherits(FilterProvider, _React$Component);

    function FilterProvider(props) {
      _classCallCheck(this, FilterProvider);

      var _this = _possibleConstructorReturn(this, (FilterProvider.__proto__ || Object.getPrototypeOf(FilterProvider)).call(this, props));

      _this.currFilters = {};
      _this.onFilter = _this.onFilter.bind(_this);
      _this.doFilter = _this.doFilter.bind(_this);
      _this.onExternalFilter = _this.onExternalFilter.bind(_this);
      _this.data = props.data;
      _this.isEmitDataChange = false;
      return _this;
    }

    _createClass(FilterProvider, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (isRemoteFiltering() && Object.keys(this.currFilters).length > 0) {
          handleFilterChange(this.currFilters);
        }
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        // let nextData = nextProps.data;
        if (!isRemoteFiltering() && !_.isEqual(nextProps.data, this.data)) {
          this.doFilter(nextProps, undefined, this.isEmitDataChange);
        } else {
          this.data = nextProps.data;
        }
      }
    }, {
      key: 'onFilter',
      value: function onFilter(column, filterType) {
        var _this2 = this;

        var initialize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        return function (filterVal) {
          // watch out here if migration to context API, #334
          var currFilters = Object.assign({}, _this2.currFilters);
          var dataField = column.dataField,
              filter = column.filter;


          var needClearFilters = !_.isDefined(filterVal) || filterVal === '' || filterVal.length === 0;

          if (needClearFilters) {
            delete currFilters[dataField];
          } else {
            // select default comparator is EQ, others are LIKE
            var _filter$props = filter.props,
                _filter$props$compara = _filter$props.comparator,
                comparator = _filter$props$compara === undefined ? filterType === _const.FILTER_TYPE.SELECT ? _comparison.EQ : _comparison.LIKE : _filter$props$compara,
                _filter$props$caseSen = _filter$props.caseSensitive,
                caseSensitive = _filter$props$caseSen === undefined ? false : _filter$props$caseSen;

            currFilters[dataField] = { filterVal: filterVal, filterType: filterType, comparator: comparator, caseSensitive: caseSensitive };
          }

          _this2.currFilters = currFilters;

          if (isRemoteFiltering()) {
            if (!initialize) {
              handleFilterChange(_this2.currFilters);
            }
            return;
          }

          var result = void 0;
          if (filter.props.onFilter) {
            result = filter.props.onFilter(filterVal);
          }
          _this2.doFilter(_this2.props, result);
        };
      }
    }, {
      key: 'onExternalFilter',
      value: function onExternalFilter(column, filterType) {
        var _this3 = this;

        return function (value) {
          _this3.onFilter(column, filterType)(value);
        };
      }
    }, {
      key: 'getFiltered',
      value: function getFiltered() {
        return this.data;
      }
    }, {
      key: 'doFilter',
      value: function doFilter(props, customResult) {
        var ignoreEmitDataChange = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        var result = customResult;

        var dataChangeListener = props.dataChangeListener,
            data = props.data,
            columns = props.columns;
        // This change will fuck up the filter clearing, I think

        result = result || (0, _filter.filters)(this.data, columns, _)(this.currFilters);
        this.data = result;
        if (dataChangeListener && !ignoreEmitDataChange) {
          this.isEmitDataChange = true;
          dataChangeListener.emit('filterChanged', result.length);
        } else {
          this.isEmitDataChange = false;
          this.forceUpdate();
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          FilterContext.Provider,
          { value: {
              data: this.data,
              onFilter: this.onFilter,
              onExternalFilter: this.onExternalFilter
            }
          },
          this.props.children
        );
      }
    }]);

    return FilterProvider;
  }(_react2.default.Component);

  FilterProvider.propTypes = {
    data: _propTypes2.default.array.isRequired,
    columns: _propTypes2.default.array.isRequired,
    dataChangeListener: _propTypes2.default.object
  };


  return {
    Provider: FilterProvider,
    Consumer: FilterContext.Consumer
  };
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filters = exports.filterFactory = exports.filterByArray = exports.filterByDate = exports.filterByNumber = exports.filterByText = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /* eslint eqeqeq: 0 */
/* eslint no-console: 0 */


var _const = __webpack_require__(1);

var _comparison = __webpack_require__(0);

var filterByText = exports.filterByText = function filterByText(_) {
  return function (data, dataField, _ref, customFilterValue) {
    var _ref$filterVal = _ref.filterVal,
        userInput = _ref$filterVal === undefined ? '' : _ref$filterVal,
        _ref$comparator = _ref.comparator,
        comparator = _ref$comparator === undefined ? _comparison.LIKE : _ref$comparator,
        caseSensitive = _ref.caseSensitive;

    // make sure filter value to be a string
    var filterVal = userInput.toString();

    return data.filter(function (row) {
      var cell = _.get(row, dataField);
      if (customFilterValue) {
        cell = customFilterValue(cell, row);
      }
      var cellStr = _.isDefined(cell) ? cell.toString() : '';
      if (comparator === _comparison.EQ) {
        return cellStr === filterVal;
      }
      if (caseSensitive) {
        return cellStr.includes(filterVal);
      }

      return cellStr.toLocaleUpperCase().indexOf(filterVal.toLocaleUpperCase()) !== -1;
    });
  };
};

var filterByNumber = exports.filterByNumber = function filterByNumber(_) {
  return function (data, dataField, _ref2, customFilterValue) {
    var _ref2$filterVal = _ref2.filterVal,
        comparator = _ref2$filterVal.comparator,
        number = _ref2$filterVal.number;
    return data.filter(function (row) {
      if (number === '' || !comparator) return true;
      var valid = true;
      var cell = _.get(row, dataField);
      if (customFilterValue) {
        cell = customFilterValue(cell, row);
      }

      switch (comparator) {
        case _comparison.EQ:
          {
            if (cell != number) {
              valid = false;
            }
            break;
          }
        case _comparison.GT:
          {
            if (cell <= number) {
              valid = false;
            }
            break;
          }
        case _comparison.GE:
          {
            if (cell < number) {
              valid = false;
            }
            break;
          }
        case _comparison.LT:
          {
            if (cell >= number) {
              valid = false;
            }
            break;
          }
        case _comparison.LE:
          {
            if (cell > number) {
              valid = false;
            }
            break;
          }
        case _comparison.NE:
          {
            if (cell == number) {
              valid = false;
            }
            break;
          }
        default:
          {
            console.error('Number comparator provided is not supported');
            break;
          }
      }
      return valid;
    });
  };
};

var filterByDate = exports.filterByDate = function filterByDate(_) {
  return function (data, dataField, _ref3, customFilterValue) {
    var _ref3$filterVal = _ref3.filterVal,
        comparator = _ref3$filterVal.comparator,
        date = _ref3$filterVal.date;

    if (!date || !comparator) return data;
    var filterDate = date.getUTCDate();
    var filterMonth = date.getUTCMonth();
    var filterYear = date.getUTCFullYear();

    return data.filter(function (row) {
      var valid = true;
      var cell = _.get(row, dataField);

      if (customFilterValue) {
        cell = customFilterValue(cell, row);
      }

      if ((typeof cell === 'undefined' ? 'undefined' : _typeof(cell)) !== 'object') {
        cell = new Date(cell);
      }

      var targetDate = cell.getUTCDate();
      var targetMonth = cell.getUTCMonth();
      var targetYear = cell.getUTCFullYear();

      switch (comparator) {
        case _comparison.EQ:
          {
            if (filterDate !== targetDate || filterMonth !== targetMonth || filterYear !== targetYear) {
              valid = false;
            }
            break;
          }
        case _comparison.GT:
          {
            if (cell <= date) {
              valid = false;
            }
            break;
          }
        case _comparison.GE:
          {
            if (targetYear < filterYear) {
              valid = false;
            } else if (targetYear === filterYear && targetMonth < filterMonth) {
              valid = false;
            } else if (targetYear === filterYear && targetMonth === filterMonth && targetDate < filterDate) {
              valid = false;
            }
            break;
          }
        case _comparison.LT:
          {
            if (cell >= date) {
              valid = false;
            }
            break;
          }
        case _comparison.LE:
          {
            if (targetYear > filterYear) {
              valid = false;
            } else if (targetYear === filterYear && targetMonth > filterMonth) {
              valid = false;
            } else if (targetYear === filterYear && targetMonth === filterMonth && targetDate > filterDate) {
              valid = false;
            }
            break;
          }
        case _comparison.NE:
          {
            if (filterDate === targetDate && filterMonth === targetMonth && filterYear === targetYear) {
              valid = false;
            }
            break;
          }
        default:
          {
            console.error('Date comparator provided is not supported');
            break;
          }
      }
      return valid;
    });
  };
};

var filterByArray = exports.filterByArray = function filterByArray(_) {
  return function (data, dataField, _ref4) {
    var filterVal = _ref4.filterVal,
        comparator = _ref4.comparator;

    if (filterVal.length === 0) return data;
    var refinedFilterVal = filterVal.filter(function (x) {
      return _.isDefined(x);
    }).map(function (x) {
      return x.toString();
    });
    return data.filter(function (row) {
      var cell = _.get(row, dataField);
      var cellStr = _.isDefined(cell) ? cell.toString() : '';
      if (comparator === _comparison.EQ) {
        return refinedFilterVal.indexOf(cellStr) !== -1;
      }
      cellStr = cellStr.toLocaleUpperCase();
      return refinedFilterVal.some(function (item) {
        return cellStr.indexOf(item.toLocaleUpperCase()) !== -1;
      });
    });
  };
};

var filterFactory = exports.filterFactory = function filterFactory(_) {
  return function (filterType) {
    var filterFn = void 0;
    switch (filterType) {
      case _const.FILTER_TYPE.TEXT:
      case _const.FILTER_TYPE.SELECT:
        filterFn = filterByText(_);
        break;
      case _const.FILTER_TYPE.MULTISELECT:
        filterFn = filterByArray(_);
        break;
      case _const.FILTER_TYPE.NUMBER:
        filterFn = filterByNumber(_);
        break;
      case _const.FILTER_TYPE.DATE:
        filterFn = filterByDate(_);
        break;
      default:
        filterFn = filterByText(_);
    }
    return filterFn;
  };
};

var filters = exports.filters = function filters(data, columns, _) {
  return function (currFilters) {
    var factory = filterFactory(_);
    var result = data;
    var filterFn = void 0;
    Object.keys(currFilters).forEach(function (dataField) {
      var filterObj = currFilters[dataField];
      filterFn = factory(filterObj.filterType);
      var filterValue = void 0;
      for (var i = 0; i < columns.length; i += 1) {
        if (columns[i].dataField === dataField) {
          filterValue = columns[i].filterValue;
          break;
        }
      }
      result = filterFn(result, dataField, filterObj, filterValue);
    });
    return result;
  };
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA4ZTc3YTJkYTZkZWYwYzhhMmU2NSIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLWZpbHRlci9zcmMvY29tcGFyaXNvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLWZpbHRlci9zcmMvY29uc3QuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJjb21tb25qc1wiOlwicmVhY3RcIixcImFtZFwiOlwicmVhY3RcIn0iLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1maWx0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1maWx0ZXIvc3JjL2NvbXBvbmVudHMvdGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2ludmFyaWFudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1maWx0ZXIvc3JjL2NvbXBvbmVudHMvc2VsZWN0LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItZmlsdGVyL3NyYy9jb21wb25lbnRzL211bHRpc2VsZWN0LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItZmlsdGVyL3NyYy9jb21wb25lbnRzL251bWJlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLWZpbHRlci9zcmMvY29tcG9uZW50cy9kYXRlLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItZmlsdGVyL3NyYy9jb250ZXh0LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItZmlsdGVyL3NyYy9maWx0ZXIuanMiXSwibmFtZXMiOlsiTElLRSIsIkVRIiwiTkUiLCJHVCIsIkdFIiwiTFQiLCJMRSIsIkZJTFRFUl9UWVBFIiwiVEVYVCIsIlNFTEVDVCIsIk1VTFRJU0VMRUNUIiwiTlVNQkVSIiwiREFURSIsIkZJTFRFUl9ERUxBWSIsIkNvbXBhcmlzb24iLCJvcHRpb25zIiwiY3JlYXRlQ29udGV4dCIsIkZJTFRFUl9UWVBFUyIsIkNvbXBhcmF0b3IiLCJ0ZXh0RmlsdGVyIiwicHJvcHMiLCJGaWx0ZXIiLCJUZXh0RmlsdGVyIiwic2VsZWN0RmlsdGVyIiwiU2VsZWN0RmlsdGVyIiwibXVsdGlTZWxlY3RGaWx0ZXIiLCJNdWx0aVNlbGVjdEZpbHRlciIsIm51bWJlckZpbHRlciIsIk51bWJlckZpbHRlciIsImRhdGVGaWx0ZXIiLCJEYXRlRmlsdGVyIiwiY3VzdG9tRmlsdGVyIiwiZmlsdGVyIiwiYmluZCIsImhhbmRsZUNsaWNrIiwidGltZW91dCIsInN0YXRlIiwidmFsdWUiLCJkZWZhdWx0VmFsdWUiLCJvbkZpbHRlciIsImdldEZpbHRlciIsImNvbHVtbiIsImlucHV0IiwiZmlsdGVyVmFsIiwic2V0U3RhdGUiLCJuZXh0UHJvcHMiLCJhcHBseUZpbHRlciIsImNsZWFuVGltZXIiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiZmlsdGVyVmFsdWUiLCJ0YXJnZXQiLCJzZXRUaW1lb3V0IiwiZGVsYXkiLCJjbGVhclRpbWVvdXQiLCJmaWx0ZXJUZXh0Iiwib25DbGljayIsInBsYWNlaG9sZGVyIiwidGV4dCIsInN0eWxlIiwiY2xhc3NOYW1lIiwiY2FzZVNlbnNpdGl2ZSIsInJlc3QiLCJuIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJvYmplY3QiLCJjb21wYXJhdG9yIiwib25lT2YiLCJzdHJpbmciLCJudW1iZXIiLCJib29sIiwiZGVmYXVsdFByb3BzIiwib3B0aW9uc0VxdWFscyIsImN1cnJPcHRzIiwicHJldk9wdHMiLCJBcnJheSIsImlzQXJyYXkiLCJpIiwibGVuZ3RoIiwibGFiZWwiLCJrZXlzIiwiT2JqZWN0IiwiZ2V0T3B0aW9uVmFsdWUiLCJrZXkiLCJyZXN1bHQiLCJtYXAiLCJpc1NlbGVjdGVkIiwidW5kZWZpbmVkIiwic2VsZWN0SW5wdXQiLCJwcmV2UHJvcHMiLCJuZWVkRmlsdGVyIiwib3B0aW9uVGFncyIsIndpdGhvdXRFbXB0eU9wdGlvbiIsInB1c2giLCJmb3JFYWNoIiwic2VsZWN0Q2xhc3MiLCJnZXRPcHRpb25zIiwib25lT2ZUeXBlIiwiYXJyYXkiLCJhbnkiLCJnZXRTZWxlY3Rpb25zIiwiZnJvbSIsImNvbnRhaW5lciIsInNlbGVjdGVkT3B0aW9ucyIsIml0ZW0iLCJsZWdhbENvbXBhcmF0b3JzIiwiY29tcGFyYXRvcnMiLCJpbmRleE9mIiwib25DaGFuZ2VOdW1iZXIiLCJvbkNoYW5nZU51bWJlclNldCIsIm9uQ2hhbmdlQ29tcGFyYXRvciIsIm51bWJlckZpbHRlckNvbXBhcmF0b3IiLCJ3aXRob3V0RW1wdHlDb21wYXJhdG9yT3B0aW9uIiwid2l0aG91dEVtcHR5TnVtYmVyT3B0aW9uIiwiZmlsdGVyT2JqIiwibnVtYmVyU3R5bGUiLCJudW1iZXJDbGFzc05hbWUiLCJjb21wYXJhdG9yU3R5bGUiLCJjb21wYXJhdG9yQ2xhc3NOYW1lIiwiZ2V0Q29tcGFyYXRvck9wdGlvbnMiLCJnZXROdW1iZXJPcHRpb25zIiwiYXJyYXlPZiIsInNoYXBlIiwicHJvcE5hbWUiLCJjb21wYXJhdG9ySXNWYWxpZCIsImoiLCJFcnJvciIsImRhdGVQYXJzZXIiLCJkIiwiZ2V0VVRDRnVsbFllYXIiLCJnZXRVVENNb250aCIsInNsaWNlIiwiZ2V0VVRDRGF0ZSIsIm9uQ2hhbmdlRGF0ZSIsImRhdGVGaWx0ZXJDb21wYXJhdG9yIiwiZGF0ZSIsImlucHV0RGF0ZSIsIm51bGxhYmxlRmlsdGVyVmFsIiwiZGVmYXVsdERhdGUiLCJEYXRlIiwiaXNJbml0aWFsIiwiZXhlY3V0ZSIsImRhdGVTdHlsZSIsImRhdGVDbGFzc05hbWUiLCJnZXREZWZhdWx0RGF0ZSIsIl8iLCJpc1JlbW90ZUZpbHRlcmluZyIsImhhbmRsZUZpbHRlckNoYW5nZSIsIkZpbHRlckNvbnRleHQiLCJSZWFjdCIsIkZpbHRlclByb3ZpZGVyIiwiY3VyckZpbHRlcnMiLCJkb0ZpbHRlciIsIm9uRXh0ZXJuYWxGaWx0ZXIiLCJkYXRhIiwiaXNFbWl0RGF0YUNoYW5nZSIsImlzRXF1YWwiLCJmaWx0ZXJUeXBlIiwiaW5pdGlhbGl6ZSIsImFzc2lnbiIsImRhdGFGaWVsZCIsIm5lZWRDbGVhckZpbHRlcnMiLCJpc0RlZmluZWQiLCJjdXN0b21SZXN1bHQiLCJpZ25vcmVFbWl0RGF0YUNoYW5nZSIsImRhdGFDaGFuZ2VMaXN0ZW5lciIsImNvbHVtbnMiLCJlbWl0IiwiZm9yY2VVcGRhdGUiLCJjaGlsZHJlbiIsIlByb3ZpZGVyIiwiQ29uc3VtZXIiLCJmaWx0ZXJCeVRleHQiLCJjdXN0b21GaWx0ZXJWYWx1ZSIsInVzZXJJbnB1dCIsInRvU3RyaW5nIiwicm93IiwiY2VsbCIsImdldCIsImNlbGxTdHIiLCJpbmNsdWRlcyIsInRvTG9jYWxlVXBwZXJDYXNlIiwiZmlsdGVyQnlOdW1iZXIiLCJ2YWxpZCIsImNvbnNvbGUiLCJlcnJvciIsImZpbHRlckJ5RGF0ZSIsImZpbHRlckRhdGUiLCJmaWx0ZXJNb250aCIsImZpbHRlclllYXIiLCJ0YXJnZXREYXRlIiwidGFyZ2V0TW9udGgiLCJ0YXJnZXRZZWFyIiwiZmlsdGVyQnlBcnJheSIsInJlZmluZWRGaWx0ZXJWYWwiLCJ4Iiwic29tZSIsImZpbHRlckZhY3RvcnkiLCJmaWx0ZXJGbiIsImZpbHRlcnMiLCJmYWN0b3J5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0RPLElBQU1BLHNCQUFPLE1BQWI7QUFDQSxJQUFNQyxrQkFBSyxHQUFYO0FBQ0EsSUFBTUMsa0JBQUssSUFBWDtBQUNBLElBQU1DLGtCQUFLLEdBQVg7QUFDQSxJQUFNQyxrQkFBSyxJQUFYO0FBQ0EsSUFBTUMsa0JBQUssR0FBWDtBQUNBLElBQU1DLGtCQUFLLElBQVgsQzs7Ozs7Ozs7Ozs7O0FDTkEsSUFBTUMsb0NBQWM7QUFDekJDLFFBQU0sTUFEbUI7QUFFekJDLFVBQVEsUUFGaUI7QUFHekJDLGVBQWEsYUFIWTtBQUl6QkMsVUFBUSxRQUppQjtBQUt6QkMsUUFBTTtBQUxtQixDQUFwQjs7QUFRQSxJQUFNQyxzQ0FBZSxHQUFyQixDOzs7Ozs7QUNSUCwrQzs7Ozs7O0FD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dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUmVhY3RCb290c3RyYXBUYWJsZTJGaWx0ZXJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiUmVhY3RCb290c3RyYXBUYWJsZTJGaWx0ZXJcIl0gPSBmYWN0b3J5KHJvb3RbXCJSZWFjdFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4ZTc3YTJkYTZkZWYwYzhhMmU2NSIsImV4cG9ydCBjb25zdCBMSUtFID0gJ0xJS0UnO1xuZXhwb3J0IGNvbnN0IEVRID0gJz0nO1xuZXhwb3J0IGNvbnN0IE5FID0gJyE9JztcbmV4cG9ydCBjb25zdCBHVCA9ICc+JztcbmV4cG9ydCBjb25zdCBHRSA9ICc+PSc7XG5leHBvcnQgY29uc3QgTFQgPSAnPCc7XG5leHBvcnQgY29uc3QgTEUgPSAnPD0nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1maWx0ZXIvc3JjL2NvbXBhcmlzb24uanMiLCJleHBvcnQgY29uc3QgRklMVEVSX1RZUEUgPSB7XG4gIFRFWFQ6ICdURVhUJyxcbiAgU0VMRUNUOiAnU0VMRUNUJyxcbiAgTVVMVElTRUxFQ1Q6ICdNVUxUSVNFTEVDVCcsXG4gIE5VTUJFUjogJ05VTUJFUicsXG4gIERBVEU6ICdEQVRFJ1xufTtcblxuZXhwb3J0IGNvbnN0IEZJTFRFUl9ERUxBWSA9IDUwMDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItZmlsdGVyL3NyYy9jb25zdC5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifVxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIFN5bWJvbC5mb3IgJiZcbiAgICBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykpIHx8XG4gICAgMHhlYWM3O1xuXG4gIHZhciBpc1ZhbGlkRWxlbWVudCA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgb2JqZWN0ICE9PSBudWxsICYmXG4gICAgICBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IFRleHRGaWx0ZXIgZnJvbSAnLi9zcmMvY29tcG9uZW50cy90ZXh0JztcbmltcG9ydCBTZWxlY3RGaWx0ZXIgZnJvbSAnLi9zcmMvY29tcG9uZW50cy9zZWxlY3QnO1xuaW1wb3J0IE11bHRpU2VsZWN0RmlsdGVyIGZyb20gJy4vc3JjL2NvbXBvbmVudHMvbXVsdGlzZWxlY3QnO1xuaW1wb3J0IE51bWJlckZpbHRlciBmcm9tICcuL3NyYy9jb21wb25lbnRzL251bWJlcic7XG5pbXBvcnQgRGF0ZUZpbHRlciBmcm9tICcuL3NyYy9jb21wb25lbnRzL2RhdGUnO1xuaW1wb3J0IGNyZWF0ZUNvbnRleHQgZnJvbSAnLi9zcmMvY29udGV4dCc7XG5pbXBvcnQgKiBhcyBDb21wYXJpc29uIGZyb20gJy4vc3JjL2NvbXBhcmlzb24nO1xuaW1wb3J0IHsgRklMVEVSX1RZUEUgfSBmcm9tICcuL3NyYy9jb25zdCc7XG5cbmV4cG9ydCBkZWZhdWx0IChvcHRpb25zID0ge30pID0+ICh7XG4gIGNyZWF0ZUNvbnRleHQsXG4gIG9wdGlvbnNcbn0pO1xuXG5leHBvcnQgY29uc3QgRklMVEVSX1RZUEVTID0gRklMVEVSX1RZUEU7XG5cbmV4cG9ydCBjb25zdCBDb21wYXJhdG9yID0gQ29tcGFyaXNvbjtcblxuZXhwb3J0IGNvbnN0IHRleHRGaWx0ZXIgPSAocHJvcHMgPSB7fSkgPT4gKHtcbiAgRmlsdGVyOiBUZXh0RmlsdGVyLFxuICBwcm9wc1xufSk7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RGaWx0ZXIgPSAocHJvcHMgPSB7fSkgPT4gKHtcbiAgRmlsdGVyOiBTZWxlY3RGaWx0ZXIsXG4gIHByb3BzXG59KTtcblxuZXhwb3J0IGNvbnN0IG11bHRpU2VsZWN0RmlsdGVyID0gKHByb3BzID0ge30pID0+ICh7XG4gIEZpbHRlcjogTXVsdGlTZWxlY3RGaWx0ZXIsXG4gIHByb3BzXG59KTtcblxuZXhwb3J0IGNvbnN0IG51bWJlckZpbHRlciA9IChwcm9wcyA9IHt9KSA9PiAoe1xuICBGaWx0ZXI6IE51bWJlckZpbHRlcixcbiAgcHJvcHNcbn0pO1xuXG5leHBvcnQgY29uc3QgZGF0ZUZpbHRlciA9IChwcm9wcyA9IHt9KSA9PiAoe1xuICBGaWx0ZXI6IERhdGVGaWx0ZXIsXG4gIHByb3BzXG59KTtcblxuZXhwb3J0IGNvbnN0IGN1c3RvbUZpbHRlciA9IChwcm9wcyA9IHt9KSA9PiAoe1xuICBwcm9wc1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLWZpbHRlci9pbmRleC5qcyIsIi8qIGVzbGludCByZWFjdC9yZXF1aXJlLWRlZmF1bHQtcHJvcHM6IDAgKi9cbi8qIGVzbGludCByZWFjdC9wcm9wLXR5cGVzOiAwICovXG4vKiBlc2xpbnQgbm8tcmV0dXJuLWFzc2lnbjogMCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3BUeXBlcyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBMSUtFLCBFUSB9IGZyb20gJy4uL2NvbXBhcmlzb24nO1xuaW1wb3J0IHsgRklMVEVSX1RZUEUsIEZJTFRFUl9ERUxBWSB9IGZyb20gJy4uL2NvbnN0JztcblxuY2xhc3MgVGV4dEZpbHRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuZmlsdGVyID0gdGhpcy5maWx0ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMudGltZW91dCA9IG51bGw7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiBwcm9wcy5kZWZhdWx0VmFsdWVcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBvbkZpbHRlciwgZ2V0RmlsdGVyLCBjb2x1bW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZGVmYXVsdFZhbHVlID0gdGhpcy5pbnB1dC52YWx1ZTtcblxuICAgIGlmIChkZWZhdWx0VmFsdWUpIHtcbiAgICAgIG9uRmlsdGVyKHRoaXMucHJvcHMuY29sdW1uLCBGSUxURVJfVFlQRS5URVhULCB0cnVlKShkZWZhdWx0VmFsdWUpO1xuICAgIH1cblxuICAgIC8vIGV4cG9ydCBvbkZpbHRlciBmdW5jdGlvbiB0byBhbGxvdyB1c2VycyB0byBhY2Nlc3NcbiAgICBpZiAoZ2V0RmlsdGVyKSB7XG4gICAgICBnZXRGaWx0ZXIoKGZpbHRlclZhbCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7IHZhbHVlOiBmaWx0ZXJWYWwgfSkpO1xuICAgICAgICBvbkZpbHRlcihjb2x1bW4sIEZJTFRFUl9UWVBFLlRFWFQpKGZpbHRlclZhbCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmIChuZXh0UHJvcHMuZGVmYXVsdFZhbHVlICE9PSB0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSkge1xuICAgICAgdGhpcy5hcHBseUZpbHRlcihuZXh0UHJvcHMuZGVmYXVsdFZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmNsZWFuVGltZXIoKTtcbiAgfVxuXG4gIGZpbHRlcihlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmNsZWFuVGltZXIoKTtcbiAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHsgdmFsdWU6IGZpbHRlclZhbHVlIH0pKTtcbiAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMub25GaWx0ZXIodGhpcy5wcm9wcy5jb2x1bW4sIEZJTFRFUl9UWVBFLlRFWFQpKGZpbHRlclZhbHVlKTtcbiAgICB9LCB0aGlzLnByb3BzLmRlbGF5KTtcbiAgfVxuXG4gIGNsZWFuVGltZXIoKSB7XG4gICAgaWYgKHRoaXMudGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgfVxuICB9XG5cbiAgY2xlYW5GaWx0ZXJlZCgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHsgdmFsdWUgfSkpO1xuICAgIHRoaXMucHJvcHMub25GaWx0ZXIodGhpcy5wcm9wcy5jb2x1bW4sIEZJTFRFUl9UWVBFLlRFWFQpKHZhbHVlKTtcbiAgfVxuXG4gIGFwcGx5RmlsdGVyKGZpbHRlclRleHQpIHtcbiAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7IHZhbHVlOiBmaWx0ZXJUZXh0IH0pKTtcbiAgICB0aGlzLnByb3BzLm9uRmlsdGVyKHRoaXMucHJvcHMuY29sdW1uLCBGSUxURVJfVFlQRS5URVhUKShmaWx0ZXJUZXh0KTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2spIHtcbiAgICAgIHRoaXMucHJvcHMub25DbGljayhlKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICBjb2x1bW46IHsgdGV4dCB9LFxuICAgICAgc3R5bGUsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBvbkZpbHRlcixcbiAgICAgIGNhc2VTZW5zaXRpdmUsXG4gICAgICBkZWZhdWx0VmFsdWUsXG4gICAgICBnZXRGaWx0ZXIsXG4gICAgICAuLi5yZXN0XG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAvLyBzdG9wUHJvcGFnYXRpb24gZm9yIG9uQ2xpY2sgZXZlbnQgaXMgdHJ5IHRvIHByZXZlbnQgc29ydCB3YXMgdHJpZ2dlcmVkLlxuICAgIHJldHVybiAoXG4gICAgICA8aW5wdXRcbiAgICAgICAgeyAuLi5yZXN0IH1cbiAgICAgICAgcmVmPXsgbiA9PiB0aGlzLmlucHV0ID0gbiB9XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgY2xhc3NOYW1lPXsgYGZpbHRlciB0ZXh0LWZpbHRlciBmb3JtLWNvbnRyb2wgJHtjbGFzc05hbWV9YCB9XG4gICAgICAgIHN0eWxlPXsgc3R5bGUgfVxuICAgICAgICBvbkNoYW5nZT17IHRoaXMuZmlsdGVyIH1cbiAgICAgICAgb25DbGljaz17IHRoaXMuaGFuZGxlQ2xpY2sgfVxuICAgICAgICBwbGFjZWhvbGRlcj17IHBsYWNlaG9sZGVyIHx8IGBFbnRlciAke3RleHR9Li4uYCB9XG4gICAgICAgIHZhbHVlPXsgdGhpcy5zdGF0ZS52YWx1ZSB9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuVGV4dEZpbHRlci5wcm9wVHlwZXMgPSB7XG4gIG9uRmlsdGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjb2x1bW46IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgY29tcGFyYXRvcjogUHJvcFR5cGVzLm9uZU9mKFtMSUtFLCBFUV0pLFxuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2FzZVNlbnNpdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG4gIGdldEZpbHRlcjogUHJvcFR5cGVzLmZ1bmNcbn07XG5cblRleHRGaWx0ZXIuZGVmYXVsdFByb3BzID0ge1xuICBkZWxheTogRklMVEVSX0RFTEFZLFxuICBkZWZhdWx0VmFsdWU6ICcnLFxuICBjYXNlU2Vuc2l0aXZlOiBmYWxzZVxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBUZXh0RmlsdGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1maWx0ZXIvc3JjL2NvbXBvbmVudHMvdGV4dC5qcyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCdmYmpzL2xpYi9lbXB0eUZ1bmN0aW9uJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBzaGltKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgaWYgKHNlY3JldCA9PT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgIC8vIEl0IGlzIHN0aWxsIHNhZmUgd2hlbiBjYWxsZWQgZnJvbSBSZWFjdC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaW52YXJpYW50KFxuICAgICAgZmFsc2UsXG4gICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAnVXNlIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICApO1xuICB9O1xuICBzaGltLmlzUmVxdWlyZWQgPSBzaGltO1xuICBmdW5jdGlvbiBnZXRTaGltKCkge1xuICAgIHJldHVybiBzaGltO1xuICB9O1xuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IHNoaW0sXG4gICAgYm9vbDogc2hpbSxcbiAgICBmdW5jOiBzaGltLFxuICAgIG51bWJlcjogc2hpbSxcbiAgICBvYmplY3Q6IHNoaW0sXG4gICAgc3RyaW5nOiBzaGltLFxuICAgIHN5bWJvbDogc2hpbSxcblxuICAgIGFueTogc2hpbSxcbiAgICBhcnJheU9mOiBnZXRTaGltLFxuICAgIGVsZW1lbnQ6IHNoaW0sXG4gICAgaW5zdGFuY2VPZjogZ2V0U2hpbSxcbiAgICBub2RlOiBzaGltLFxuICAgIG9iamVjdE9mOiBnZXRTaGltLFxuICAgIG9uZU9mOiBnZXRTaGltLFxuICAgIG9uZU9mVHlwZTogZ2V0U2hpbSxcbiAgICBzaGFwZTogZ2V0U2hpbVxuICB9O1xuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gZW1wdHlGdW5jdGlvbjtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogXG4gKi9cblxuZnVuY3Rpb24gbWFrZUVtcHR5RnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGFyZztcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHMgYW5kIGRpc2NhcmRzIGlucHV0czsgaXQgaGFzIG5vIHNpZGUgZWZmZWN0cy4gVGhpcyBpc1xuICogcHJpbWFyaWx5IHVzZWZ1bCBpZGlvbWF0aWNhbGx5IGZvciBvdmVycmlkYWJsZSBmdW5jdGlvbiBlbmRwb2ludHMgd2hpY2hcbiAqIGFsd2F5cyBuZWVkIHRvIGJlIGNhbGxhYmxlLCBzaW5jZSBKUyBsYWNrcyBhIG51bGwtY2FsbCBpZGlvbSBhbGEgQ29jb2EuXG4gKi9cbnZhciBlbXB0eUZ1bmN0aW9uID0gZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9O1xuXG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zID0gbWFrZUVtcHR5RnVuY3Rpb247XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zRmFsc2UgPSBtYWtlRW1wdHlGdW5jdGlvbihmYWxzZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVHJ1ZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKHRydWUpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGwgPSBtYWtlRW1wdHlGdW5jdGlvbihudWxsKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUaGlzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcztcbn07XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zQXJndW1lbnQgPSBmdW5jdGlvbiAoYXJnKSB7XG4gIHJldHVybiBhcmc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVtcHR5RnVuY3Rpb247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvZW1wdHlGdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpO1xuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgKyAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KSk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9pbnZhcmlhbnQuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qIGVzbGludCByZWFjdC9yZXF1aXJlLWRlZmF1bHQtcHJvcHM6IDAgKi9cbi8qIGVzbGludCBuby1yZXR1cm4tYXNzaWduOiAwICovXG4vKiBlc2xpbnQgcmVhY3Qvbm8tdW51c2VkLXByb3AtdHlwZXM6IDAgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTElLRSwgRVEgfSBmcm9tICcuLi9jb21wYXJpc29uJztcbmltcG9ydCB7IEZJTFRFUl9UWVBFIH0gZnJvbSAnLi4vY29uc3QnO1xuXG5mdW5jdGlvbiBvcHRpb25zRXF1YWxzKGN1cnJPcHRzLCBwcmV2T3B0cykge1xuICBpZiAoQXJyYXkuaXNBcnJheShjdXJyT3B0cykpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJPcHRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGN1cnJPcHRzW2ldLnZhbHVlICE9PSBwcmV2T3B0c1tpXS52YWx1ZSB8fFxuICAgICAgICBjdXJyT3B0c1tpXS5sYWJlbCAhPT0gcHJldk9wdHNbaV0ubGFiZWxcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjdXJyT3B0cy5sZW5ndGggPT09IHByZXZPcHRzLmxlbmd0aDtcbiAgfVxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY3Vyck9wdHMpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoY3Vyck9wdHNba2V5c1tpXV0gIT09IHByZXZPcHRzW2tleXNbaV1dKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiBPYmplY3Qua2V5cyhjdXJyT3B0cykubGVuZ3RoID09PSBPYmplY3Qua2V5cyhwcmV2T3B0cykubGVuZ3RoO1xufVxuXG5mdW5jdGlvbiBnZXRPcHRpb25WYWx1ZShvcHRpb25zLCBrZXkpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucykpIHtcbiAgICBjb25zdCByZXN1bHQgPSBvcHRpb25zXG4gICAgICAuZmlsdGVyKCh7IGxhYmVsIH0pID0+IGxhYmVsID09PSBrZXkpXG4gICAgICAubWFwKCh7IHZhbHVlIH0pID0+IHZhbHVlKTtcbiAgICByZXR1cm4gcmVzdWx0WzBdO1xuICB9XG4gIHJldHVybiBvcHRpb25zW2tleV07XG59XG5cbmNsYXNzIFNlbGVjdEZpbHRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuZmlsdGVyID0gdGhpcy5maWx0ZXIuYmluZCh0aGlzKTtcbiAgICBjb25zdCBpc1NlbGVjdGVkID0gZ2V0T3B0aW9uVmFsdWUocHJvcHMub3B0aW9ucywgcHJvcHMuZGVmYXVsdFZhbHVlKSAhPT0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc3RhdGUgPSB7IGlzU2VsZWN0ZWQgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgY29sdW1uLCBvbkZpbHRlciwgZ2V0RmlsdGVyIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnNlbGVjdElucHV0LnZhbHVlO1xuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZSAhPT0gJycpIHtcbiAgICAgIG9uRmlsdGVyKGNvbHVtbiwgRklMVEVSX1RZUEUuU0VMRUNULCB0cnVlKSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgLy8gZXhwb3J0IG9uRmlsdGVyIGZ1bmN0aW9uIHRvIGFsbG93IHVzZXJzIHRvIGFjY2Vzc1xuICAgIGlmIChnZXRGaWx0ZXIpIHtcbiAgICAgIGdldEZpbHRlcigoZmlsdGVyVmFsKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHsgaXNTZWxlY3RlZDogZmlsdGVyVmFsICE9PSAnJyB9KSk7XG4gICAgICAgIHRoaXMuc2VsZWN0SW5wdXQudmFsdWUgPSBmaWx0ZXJWYWw7XG5cbiAgICAgICAgb25GaWx0ZXIoY29sdW1uLCBGSUxURVJfVFlQRS5TRUxFQ1QpKGZpbHRlclZhbCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgbGV0IG5lZWRGaWx0ZXIgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUgIT09IHByZXZQcm9wcy5kZWZhdWx0VmFsdWUpIHtcbiAgICAgIG5lZWRGaWx0ZXIgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoIW9wdGlvbnNFcXVhbHModGhpcy5wcm9wcy5vcHRpb25zLCBwcmV2UHJvcHMub3B0aW9ucykpIHtcbiAgICAgIG5lZWRGaWx0ZXIgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAobmVlZEZpbHRlcikge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNlbGVjdElucHV0LnZhbHVlO1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25GaWx0ZXIodGhpcy5wcm9wcy5jb2x1bW4sIEZJTFRFUl9UWVBFLlNFTEVDVCkodmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldE9wdGlvbnMoKSB7XG4gICAgY29uc3Qgb3B0aW9uVGFncyA9IFtdO1xuICAgIGNvbnN0IHsgb3B0aW9ucywgcGxhY2Vob2xkZXIsIGNvbHVtbiwgd2l0aG91dEVtcHR5T3B0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghd2l0aG91dEVtcHR5T3B0aW9uKSB7XG4gICAgICBvcHRpb25UYWdzLnB1c2goKFxuICAgICAgICA8b3B0aW9uIGtleT1cIi0xXCIgdmFsdWU9XCJcIj57IHBsYWNlaG9sZGVyIHx8IGBTZWxlY3QgJHtjb2x1bW4udGV4dH0uLi5gIH08L29wdGlvbj5cbiAgICAgICkpO1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zKSkge1xuICAgICAgb3B0aW9ucy5mb3JFYWNoKCh7IHZhbHVlLCBsYWJlbCB9KSA9PlxuICAgICAgICBvcHRpb25UYWdzLnB1c2goPG9wdGlvbiBrZXk9eyB2YWx1ZSB9IHZhbHVlPXsgdmFsdWUgfT57IGxhYmVsIH08L29wdGlvbj4pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaChrZXkgPT5cbiAgICAgICAgb3B0aW9uVGFncy5wdXNoKDxvcHRpb24ga2V5PXsga2V5IH0gdmFsdWU9eyBrZXkgfT57IG9wdGlvbnNba2V5XSB9PC9vcHRpb24+KVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvblRhZ3M7XG4gIH1cblxuICBjbGVhbkZpbHRlcmVkKCkge1xuICAgIGNvbnN0IHZhbHVlID0gKHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQpID8gdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUgOiAnJztcbiAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7IGlzU2VsZWN0ZWQ6IHZhbHVlICE9PSAnJyB9KSk7XG4gICAgdGhpcy5zZWxlY3RJbnB1dC52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMucHJvcHMub25GaWx0ZXIodGhpcy5wcm9wcy5jb2x1bW4sIEZJTFRFUl9UWVBFLlNFTEVDVCkodmFsdWUpO1xuICB9XG5cbiAgYXBwbHlGaWx0ZXIodmFsdWUpIHtcbiAgICB0aGlzLnNlbGVjdElucHV0LnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoeyBpc1NlbGVjdGVkOiB2YWx1ZSAhPT0gJycgfSkpO1xuICAgIHRoaXMucHJvcHMub25GaWx0ZXIodGhpcy5wcm9wcy5jb2x1bW4sIEZJTFRFUl9UWVBFLlNFTEVDVCkodmFsdWUpO1xuICB9XG5cbiAgZmlsdGVyKGUpIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7IGlzU2VsZWN0ZWQ6IHZhbHVlICE9PSAnJyB9KSk7XG4gICAgdGhpcy5wcm9wcy5vbkZpbHRlcih0aGlzLnByb3BzLmNvbHVtbiwgRklMVEVSX1RZUEUuU0VMRUNUKSh2YWx1ZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgc3R5bGUsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBkZWZhdWx0VmFsdWUsXG4gICAgICBvbkZpbHRlcixcbiAgICAgIGNvbHVtbixcbiAgICAgIG9wdGlvbnMsXG4gICAgICBjb21wYXJhdG9yLFxuICAgICAgd2l0aG91dEVtcHR5T3B0aW9uLFxuICAgICAgY2FzZVNlbnNpdGl2ZSxcbiAgICAgIGdldEZpbHRlcixcbiAgICAgIC4uLnJlc3RcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHNlbGVjdENsYXNzID1cbiAgICAgIGBmaWx0ZXIgc2VsZWN0LWZpbHRlciBmb3JtLWNvbnRyb2wgJHtjbGFzc05hbWV9ICR7dGhpcy5zdGF0ZS5pc1NlbGVjdGVkID8gJycgOiAncGxhY2Vob2xkZXItc2VsZWN0ZWQnfWA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHNlbGVjdFxuICAgICAgICB7IC4uLnJlc3QgfVxuICAgICAgICByZWY9eyBuID0+IHRoaXMuc2VsZWN0SW5wdXQgPSBuIH1cbiAgICAgICAgc3R5bGU9eyBzdHlsZSB9XG4gICAgICAgIGNsYXNzTmFtZT17IHNlbGVjdENsYXNzIH1cbiAgICAgICAgb25DaGFuZ2U9eyB0aGlzLmZpbHRlciB9XG4gICAgICAgIG9uQ2xpY2s9eyBlID0+IGUuc3RvcFByb3BhZ2F0aW9uKCkgfVxuICAgICAgICBkZWZhdWx0VmFsdWU9eyBkZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCA/IGRlZmF1bHRWYWx1ZSA6ICcnIH1cbiAgICAgID5cbiAgICAgICAgeyB0aGlzLmdldE9wdGlvbnMoKSB9XG4gICAgICA8L3NlbGVjdD5cbiAgICApO1xuICB9XG59XG5cblNlbGVjdEZpbHRlci5wcm9wVHlwZXMgPSB7XG4gIG9uRmlsdGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjb2x1bW46IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgb3B0aW9uczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmFycmF5XSkuaXNSZXF1aXJlZCxcbiAgY29tcGFyYXRvcjogUHJvcFR5cGVzLm9uZU9mKFtMSUtFLCBFUV0pLFxuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgd2l0aG91dEVtcHR5T3B0aW9uOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuYW55LFxuICBjYXNlU2Vuc2l0aXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgZ2V0RmlsdGVyOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuU2VsZWN0RmlsdGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGVmYXVsdFZhbHVlOiAnJyxcbiAgY2xhc3NOYW1lOiAnJyxcbiAgd2l0aG91dEVtcHR5T3B0aW9uOiBmYWxzZSxcbiAgY29tcGFyYXRvcjogRVEsXG4gIGNhc2VTZW5zaXRpdmU6IHRydWVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdEZpbHRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItZmlsdGVyL3NyYy9jb21wb25lbnRzL3NlbGVjdC5qcyIsIi8qIGVzbGludCByZWFjdC9yZXF1aXJlLWRlZmF1bHQtcHJvcHM6IDAgKi9cbi8qIGVzbGludCBuby1yZXR1cm4tYXNzaWduOiAwICovXG4vKiBlc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246IDAgKi9cbi8qIGVzbGludCByZWFjdC9uby11bnVzZWQtcHJvcC10eXBlczogMCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBMSUtFLCBFUSB9IGZyb20gJy4uL2NvbXBhcmlzb24nO1xuaW1wb3J0IHsgRklMVEVSX1RZUEUgfSBmcm9tICcuLi9jb25zdCc7XG5cblxuZnVuY3Rpb24gb3B0aW9uc0VxdWFscyhjdXJyT3B0cywgcHJldk9wdHMpIHtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGN1cnJPcHRzKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGN1cnJPcHRzW2tleXNbaV1dICE9PSBwcmV2T3B0c1trZXlzW2ldXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gT2JqZWN0LmtleXMoY3Vyck9wdHMpLmxlbmd0aCA9PT0gT2JqZWN0LmtleXMocHJldk9wdHMpLmxlbmd0aDtcbn1cblxuY29uc3QgZ2V0U2VsZWN0aW9ucyA9IGNvbnRhaW5lciA9PlxuICBBcnJheS5mcm9tKGNvbnRhaW5lci5zZWxlY3RlZE9wdGlvbnMpLm1hcChpdGVtID0+IGl0ZW0udmFsdWUpO1xuXG5jbGFzcyBNdWx0aVNlbGVjdEZpbHRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuZmlsdGVyID0gdGhpcy5maWx0ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFwcGx5RmlsdGVyID0gdGhpcy5hcHBseUZpbHRlci5iaW5kKHRoaXMpO1xuICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBwcm9wcy5kZWZhdWx0VmFsdWUubWFwKGl0ZW0gPT4gcHJvcHMub3B0aW9uc1tpdGVtXSkubGVuZ3RoID4gMDtcbiAgICB0aGlzLnN0YXRlID0geyBpc1NlbGVjdGVkIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGdldEZpbHRlciB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHZhbHVlID0gZ2V0U2VsZWN0aW9ucyh0aGlzLnNlbGVjdElucHV0KTtcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5hcHBseUZpbHRlcih2YWx1ZSk7XG4gICAgfVxuXG4gICAgLy8gZXhwb3J0IG9uRmlsdGVyIGZ1bmN0aW9uIHRvIGFsbG93IHVzZXJzIHRvIGFjY2Vzc1xuICAgIGlmIChnZXRGaWx0ZXIpIHtcbiAgICAgIGdldEZpbHRlcigoZmlsdGVyVmFsKSA9PiB7XG4gICAgICAgIHRoaXMuc2VsZWN0SW5wdXQudmFsdWUgPSBmaWx0ZXJWYWw7XG4gICAgICAgIHRoaXMuYXBwbHlGaWx0ZXIoZmlsdGVyVmFsKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBsZXQgbmVlZEZpbHRlciA9IGZhbHNlO1xuICAgIGlmICh0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSAhPT0gcHJldlByb3BzLmRlZmF1bHRWYWx1ZSkge1xuICAgICAgbmVlZEZpbHRlciA9IHRydWU7XG4gICAgfSBlbHNlIGlmICghb3B0aW9uc0VxdWFscyh0aGlzLnByb3BzLm9wdGlvbnMsIHByZXZQcm9wcy5vcHRpb25zKSkge1xuICAgICAgbmVlZEZpbHRlciA9IHRydWU7XG4gICAgfVxuICAgIGlmIChuZWVkRmlsdGVyKSB7XG4gICAgICB0aGlzLmFwcGx5RmlsdGVyKHRoaXMuc2VsZWN0SW5wdXQudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGdldE9wdGlvbnMoKSB7XG4gICAgY29uc3Qgb3B0aW9uVGFncyA9IFtdO1xuICAgIGNvbnN0IHsgb3B0aW9ucywgcGxhY2Vob2xkZXIsIGNvbHVtbiwgd2l0aG91dEVtcHR5T3B0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghd2l0aG91dEVtcHR5T3B0aW9uKSB7XG4gICAgICBvcHRpb25UYWdzLnB1c2goKFxuICAgICAgICA8b3B0aW9uIGtleT1cIi0xXCIgdmFsdWU9XCJcIj57IHBsYWNlaG9sZGVyIHx8IGBTZWxlY3QgJHtjb2x1bW4udGV4dH0uLi5gIH08L29wdGlvbj5cbiAgICAgICkpO1xuICAgIH1cbiAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5mb3JFYWNoKGtleSA9PlxuICAgICAgb3B0aW9uVGFncy5wdXNoKDxvcHRpb24ga2V5PXsga2V5IH0gdmFsdWU9eyBrZXkgfT57IG9wdGlvbnNba2V5XSB9PC9vcHRpb24+KVxuICAgICk7XG4gICAgcmV0dXJuIG9wdGlvblRhZ3M7XG4gIH1cblxuICBjbGVhbkZpbHRlcmVkKCkge1xuICAgIGNvbnN0IHZhbHVlID0gKHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQpID8gdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUgOiBbXTtcbiAgICB0aGlzLnNlbGVjdElucHV0LnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5hcHBseUZpbHRlcih2YWx1ZSk7XG4gIH1cblxuICBhcHBseUZpbHRlcih2YWx1ZSkge1xuICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDEgJiYgdmFsdWVbMF0gPT09ICcnKSB7XG4gICAgICB2YWx1ZSA9IFtdO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7IGlzU2VsZWN0ZWQ6IHZhbHVlLmxlbmd0aCA+IDAgfSkpO1xuICAgIHRoaXMucHJvcHMub25GaWx0ZXIodGhpcy5wcm9wcy5jb2x1bW4sIEZJTFRFUl9UWVBFLk1VTFRJU0VMRUNUKSh2YWx1ZSk7XG4gIH1cblxuICBmaWx0ZXIoZSkge1xuICAgIGNvbnN0IHZhbHVlID0gZ2V0U2VsZWN0aW9ucyhlLnRhcmdldCk7XG4gICAgdGhpcy5hcHBseUZpbHRlcih2YWx1ZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgc3R5bGUsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBkZWZhdWx0VmFsdWUsXG4gICAgICBvbkZpbHRlcixcbiAgICAgIGNvbHVtbixcbiAgICAgIG9wdGlvbnMsXG4gICAgICBjb21wYXJhdG9yLFxuICAgICAgd2l0aG91dEVtcHR5T3B0aW9uLFxuICAgICAgY2FzZVNlbnNpdGl2ZSxcbiAgICAgIGdldEZpbHRlcixcbiAgICAgIC4uLnJlc3RcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHNlbGVjdENsYXNzID1cbiAgICAgIGBmaWx0ZXIgc2VsZWN0LWZpbHRlciBmb3JtLWNvbnRyb2wgJHtjbGFzc05hbWV9ICR7dGhpcy5zdGF0ZS5pc1NlbGVjdGVkID8gJycgOiAncGxhY2Vob2xkZXItc2VsZWN0ZWQnfWA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHNlbGVjdFxuICAgICAgICB7IC4uLnJlc3QgfVxuICAgICAgICByZWY9eyBuID0+IHRoaXMuc2VsZWN0SW5wdXQgPSBuIH1cbiAgICAgICAgc3R5bGU9eyBzdHlsZSB9XG4gICAgICAgIG11bHRpcGxlXG4gICAgICAgIGNsYXNzTmFtZT17IHNlbGVjdENsYXNzIH1cbiAgICAgICAgb25DaGFuZ2U9eyB0aGlzLmZpbHRlciB9XG4gICAgICAgIG9uQ2xpY2s9eyBlID0+IGUuc3RvcFByb3BhZ2F0aW9uKCkgfVxuICAgICAgICBkZWZhdWx0VmFsdWU9eyBkZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCA/IGRlZmF1bHRWYWx1ZSA6ICcnIH1cbiAgICAgID5cbiAgICAgICAgeyB0aGlzLmdldE9wdGlvbnMoKSB9XG4gICAgICA8L3NlbGVjdD5cbiAgICApO1xuICB9XG59XG5cbk11bHRpU2VsZWN0RmlsdGVyLnByb3BUeXBlcyA9IHtcbiAgb25GaWx0ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNvbHVtbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBvcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGNvbXBhcmF0b3I6IFByb3BUeXBlcy5vbmVPZihbTElLRSwgRVFdKSxcbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHdpdGhvdXRFbXB0eU9wdGlvbjogUHJvcFR5cGVzLmJvb2wsXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLmFycmF5LFxuICBjYXNlU2Vuc2l0aXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgZ2V0RmlsdGVyOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuTXVsdGlTZWxlY3RGaWx0ZXIuZGVmYXVsdFByb3BzID0ge1xuICBkZWZhdWx0VmFsdWU6IFtdLFxuICBjbGFzc05hbWU6ICcnLFxuICB3aXRob3V0RW1wdHlPcHRpb246IGZhbHNlLFxuICBjb21wYXJhdG9yOiBFUSxcbiAgY2FzZVNlbnNpdGl2ZTogdHJ1ZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTXVsdGlTZWxlY3RGaWx0ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLWZpbHRlci9zcmMvY29tcG9uZW50cy9tdWx0aXNlbGVjdC5qcyIsIi8qIGVzbGludCBqc3gtYTExeS9uby1zdGF0aWMtZWxlbWVudC1pbnRlcmFjdGlvbnM6IDAgKi9cbi8qIGVzbGludCByZWFjdC9yZXF1aXJlLWRlZmF1bHQtcHJvcHM6IDAgKi9cbi8qIGVzbGludCBuby1yZXR1cm4tYXNzaWduOiAwICovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0ICogYXMgQ29tcGFyYXRvciBmcm9tICcuLi9jb21wYXJpc29uJztcbmltcG9ydCB7IEZJTFRFUl9UWVBFLCBGSUxURVJfREVMQVkgfSBmcm9tICcuLi9jb25zdCc7XG5cbmNvbnN0IGxlZ2FsQ29tcGFyYXRvcnMgPSBbXG4gIENvbXBhcmF0b3IuRVEsXG4gIENvbXBhcmF0b3IuTkUsXG4gIENvbXBhcmF0b3IuR1QsXG4gIENvbXBhcmF0b3IuR0UsXG4gIENvbXBhcmF0b3IuTFQsXG4gIENvbXBhcmF0b3IuTEVcbl07XG5cbmNsYXNzIE51bWJlckZpbHRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuY29tcGFyYXRvcnMgPSBwcm9wcy5jb21wYXJhdG9ycyB8fCBsZWdhbENvbXBhcmF0b3JzO1xuICAgIHRoaXMudGltZW91dCA9IG51bGw7XG4gICAgbGV0IGlzU2VsZWN0ZWQgPSBwcm9wcy5kZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCAmJiBwcm9wcy5kZWZhdWx0VmFsdWUubnVtYmVyICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKHByb3BzLm9wdGlvbnMgJiYgaXNTZWxlY3RlZCkge1xuICAgICAgaXNTZWxlY3RlZCA9IHByb3BzLm9wdGlvbnMuaW5kZXhPZihwcm9wcy5kZWZhdWx0VmFsdWUubnVtYmVyKSA+IC0xO1xuICAgIH1cbiAgICB0aGlzLnN0YXRlID0geyBpc1NlbGVjdGVkIH07XG4gICAgdGhpcy5vbkNoYW5nZU51bWJlciA9IHRoaXMub25DaGFuZ2VOdW1iZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uQ2hhbmdlTnVtYmVyU2V0ID0gdGhpcy5vbkNoYW5nZU51bWJlclNldC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25DaGFuZ2VDb21wYXJhdG9yID0gdGhpcy5vbkNoYW5nZUNvbXBhcmF0b3IuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgY29sdW1uLCBvbkZpbHRlciwgZ2V0RmlsdGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGNvbXBhcmF0b3IgPSB0aGlzLm51bWJlckZpbHRlckNvbXBhcmF0b3IudmFsdWU7XG4gICAgY29uc3QgbnVtYmVyID0gdGhpcy5udW1iZXJGaWx0ZXIudmFsdWU7XG4gICAgaWYgKGNvbXBhcmF0b3IgJiYgbnVtYmVyKSB7XG4gICAgICBvbkZpbHRlcihjb2x1bW4sIEZJTFRFUl9UWVBFLk5VTUJFUiwgdHJ1ZSkoeyBudW1iZXIsIGNvbXBhcmF0b3IgfSk7XG4gICAgfVxuXG4gICAgLy8gZXhwb3J0IG9uRmlsdGVyIGZ1bmN0aW9uIHRvIGFsbG93IHVzZXJzIHRvIGFjY2Vzc1xuICAgIGlmIChnZXRGaWx0ZXIpIHtcbiAgICAgIGdldEZpbHRlcigoZmlsdGVyVmFsKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHsgaXNTZWxlY3RlZDogKGZpbHRlclZhbCAhPT0gJycpIH0pKTtcbiAgICAgICAgdGhpcy5udW1iZXJGaWx0ZXJDb21wYXJhdG9yLnZhbHVlID0gZmlsdGVyVmFsLmNvbXBhcmF0b3I7XG4gICAgICAgIHRoaXMubnVtYmVyRmlsdGVyLnZhbHVlID0gZmlsdGVyVmFsLm51bWJlcjtcblxuICAgICAgICBvbkZpbHRlcihjb2x1bW4sIEZJTFRFUl9UWVBFLk5VTUJFUikoe1xuICAgICAgICAgIG51bWJlcjogZmlsdGVyVmFsLm51bWJlcixcbiAgICAgICAgICBjb21wYXJhdG9yOiBmaWx0ZXJWYWwuY29tcGFyYXRvclxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICB9XG5cbiAgb25DaGFuZ2VOdW1iZXIoZSkge1xuICAgIGNvbnN0IHsgZGVsYXksIGNvbHVtbiwgb25GaWx0ZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY29tcGFyYXRvciA9IHRoaXMubnVtYmVyRmlsdGVyQ29tcGFyYXRvci52YWx1ZTtcbiAgICBpZiAoY29tcGFyYXRvciA9PT0gJycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMudGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgfVxuICAgIGNvbnN0IGZpbHRlclZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBvbkZpbHRlcihjb2x1bW4sIEZJTFRFUl9UWVBFLk5VTUJFUikoeyBudW1iZXI6IGZpbHRlclZhbHVlLCBjb21wYXJhdG9yIH0pO1xuICAgIH0sIGRlbGF5KTtcbiAgfVxuXG4gIG9uQ2hhbmdlTnVtYmVyU2V0KGUpIHtcbiAgICBjb25zdCB7IGNvbHVtbiwgb25GaWx0ZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY29tcGFyYXRvciA9IHRoaXMubnVtYmVyRmlsdGVyQ29tcGFyYXRvci52YWx1ZTtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7IGlzU2VsZWN0ZWQ6ICh2YWx1ZSAhPT0gJycpIH0pKTtcbiAgICAvLyBpZiAoY29tcGFyYXRvciA9PT0gJycpIHtcbiAgICAvLyAgIHJldHVybjtcbiAgICAvLyB9XG4gICAgb25GaWx0ZXIoY29sdW1uLCBGSUxURVJfVFlQRS5OVU1CRVIpKHsgbnVtYmVyOiB2YWx1ZSwgY29tcGFyYXRvciB9KTtcbiAgfVxuXG4gIG9uQ2hhbmdlQ29tcGFyYXRvcihlKSB7XG4gICAgY29uc3QgeyBjb2x1bW4sIG9uRmlsdGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5udW1iZXJGaWx0ZXIudmFsdWU7XG4gICAgY29uc3QgY29tcGFyYXRvciA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIC8vIGlmICh2YWx1ZSA9PT0gJycpIHtcbiAgICAvLyAgIHJldHVybjtcbiAgICAvLyB9XG4gICAgb25GaWx0ZXIoY29sdW1uLCBGSUxURVJfVFlQRS5OVU1CRVIpKHsgbnVtYmVyOiB2YWx1ZSwgY29tcGFyYXRvciB9KTtcbiAgfVxuXG4gIGdldENvbXBhcmF0b3JPcHRpb25zKCkge1xuICAgIGNvbnN0IG9wdGlvblRhZ3MgPSBbXTtcbiAgICBjb25zdCB7IHdpdGhvdXRFbXB0eUNvbXBhcmF0b3JPcHRpb24gfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCF3aXRob3V0RW1wdHlDb21wYXJhdG9yT3B0aW9uKSB7XG4gICAgICBvcHRpb25UYWdzLnB1c2goPG9wdGlvbiBrZXk9XCItMVwiIC8+KTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbXBhcmF0b3JzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBvcHRpb25UYWdzLnB1c2goXG4gICAgICAgIDxvcHRpb24ga2V5PXsgaSB9IHZhbHVlPXsgdGhpcy5jb21wYXJhdG9yc1tpXSB9PlxuICAgICAgICAgIHsgdGhpcy5jb21wYXJhdG9yc1tpXSB9XG4gICAgICAgIDwvb3B0aW9uPlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvblRhZ3M7XG4gIH1cblxuICBnZXROdW1iZXJPcHRpb25zKCkge1xuICAgIGNvbnN0IG9wdGlvblRhZ3MgPSBbXTtcbiAgICBjb25zdCB7IG9wdGlvbnMsIGNvbHVtbiwgd2l0aG91dEVtcHR5TnVtYmVyT3B0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghd2l0aG91dEVtcHR5TnVtYmVyT3B0aW9uKSB7XG4gICAgICBvcHRpb25UYWdzLnB1c2goXG4gICAgICAgIDxvcHRpb24ga2V5PVwiLTFcIiB2YWx1ZT1cIlwiPlxuICAgICAgICAgIHsgdGhpcy5wcm9wcy5wbGFjZWhvbGRlciB8fCBgU2VsZWN0ICR7Y29sdW1uLnRleHR9Li4uYCB9XG4gICAgICAgIDwvb3B0aW9uPlxuICAgICAgKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBvcHRpb25UYWdzLnB1c2goPG9wdGlvbiBrZXk9eyBpIH0gdmFsdWU9eyBvcHRpb25zW2ldIH0+eyBvcHRpb25zW2ldIH08L29wdGlvbj4pO1xuICAgIH1cbiAgICByZXR1cm4gb3B0aW9uVGFncztcbiAgfVxuXG4gIGFwcGx5RmlsdGVyKGZpbHRlck9iaikge1xuICAgIGNvbnN0IHsgY29sdW1uLCBvbkZpbHRlciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IG51bWJlciwgY29tcGFyYXRvciB9ID0gZmlsdGVyT2JqO1xuICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHsgaXNTZWxlY3RlZDogKG51bWJlciAhPT0gJycpIH0pKTtcbiAgICB0aGlzLm51bWJlckZpbHRlckNvbXBhcmF0b3IudmFsdWUgPSBjb21wYXJhdG9yO1xuICAgIHRoaXMubnVtYmVyRmlsdGVyLnZhbHVlID0gbnVtYmVyO1xuICAgIG9uRmlsdGVyKGNvbHVtbiwgRklMVEVSX1RZUEUuTlVNQkVSKSh7IG51bWJlciwgY29tcGFyYXRvciB9KTtcbiAgfVxuXG4gIGNsZWFuRmlsdGVyZWQoKSB7XG4gICAgY29uc3QgeyBjb2x1bW4sIG9uRmlsdGVyLCBkZWZhdWx0VmFsdWUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdmFsdWUgPSBkZWZhdWx0VmFsdWUgPyBkZWZhdWx0VmFsdWUubnVtYmVyIDogJyc7XG4gICAgY29uc3QgY29tcGFyYXRvciA9IGRlZmF1bHRWYWx1ZSA/IGRlZmF1bHRWYWx1ZS5jb21wYXJhdG9yIDogJyc7XG4gICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoeyBpc1NlbGVjdGVkOiAodmFsdWUgIT09ICcnKSB9KSk7XG4gICAgdGhpcy5udW1iZXJGaWx0ZXJDb21wYXJhdG9yLnZhbHVlID0gY29tcGFyYXRvcjtcbiAgICB0aGlzLm51bWJlckZpbHRlci52YWx1ZSA9IHZhbHVlO1xuICAgIG9uRmlsdGVyKGNvbHVtbiwgRklMVEVSX1RZUEUuTlVNQkVSKSh7IG51bWJlcjogdmFsdWUsIGNvbXBhcmF0b3IgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpc1NlbGVjdGVkIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHtcbiAgICAgIGRlZmF1bHRWYWx1ZSxcbiAgICAgIGNvbHVtbixcbiAgICAgIG9wdGlvbnMsXG4gICAgICBzdHlsZSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIG51bWJlclN0eWxlLFxuICAgICAgbnVtYmVyQ2xhc3NOYW1lLFxuICAgICAgY29tcGFyYXRvclN0eWxlLFxuICAgICAgY29tcGFyYXRvckNsYXNzTmFtZSxcbiAgICAgIHBsYWNlaG9sZGVyXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc2VsZWN0Q2xhc3MgPSBgXG4gICAgICBzZWxlY3QtZmlsdGVyIFxuICAgICAgbnVtYmVyLWZpbHRlci1pbnB1dCBcbiAgICAgIGZvcm0tY29udHJvbCBcbiAgICAgICR7bnVtYmVyQ2xhc3NOYW1lfSBcbiAgICAgICR7IWlzU2VsZWN0ZWQgPyAncGxhY2Vob2xkZXItc2VsZWN0ZWQnIDogJyd9XG4gICAgYDtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIG9uQ2xpY2s9eyBlID0+IGUuc3RvcFByb3BhZ2F0aW9uKCkgfVxuICAgICAgICBjbGFzc05hbWU9eyBgZmlsdGVyIG51bWJlci1maWx0ZXIgJHtjbGFzc05hbWV9YCB9XG4gICAgICAgIHN0eWxlPXsgc3R5bGUgfVxuICAgICAgPlxuICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgcmVmPXsgbiA9PiB0aGlzLm51bWJlckZpbHRlckNvbXBhcmF0b3IgPSBuIH1cbiAgICAgICAgICBzdHlsZT17IGNvbXBhcmF0b3JTdHlsZSB9XG4gICAgICAgICAgY2xhc3NOYW1lPXsgYG51bWJlci1maWx0ZXItY29tcGFyYXRvciBmb3JtLWNvbnRyb2wgJHtjb21wYXJhdG9yQ2xhc3NOYW1lfWAgfVxuICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZUNvbXBhcmF0b3IgfVxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17IGRlZmF1bHRWYWx1ZSA/IGRlZmF1bHRWYWx1ZS5jb21wYXJhdG9yIDogJycgfVxuICAgICAgICA+XG4gICAgICAgICAgeyB0aGlzLmdldENvbXBhcmF0b3JPcHRpb25zKCkgfVxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAge1xuICAgICAgICAgIG9wdGlvbnMgP1xuICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICByZWY9eyBuID0+IHRoaXMubnVtYmVyRmlsdGVyID0gbiB9XG4gICAgICAgICAgICAgIHN0eWxlPXsgbnVtYmVyU3R5bGUgfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9eyBzZWxlY3RDbGFzcyB9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZU51bWJlclNldCB9XG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17IGRlZmF1bHRWYWx1ZSA/IGRlZmF1bHRWYWx1ZS5udW1iZXIgOiAnJyB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHsgdGhpcy5nZXROdW1iZXJPcHRpb25zKCkgfVxuICAgICAgICAgICAgPC9zZWxlY3Q+IDpcbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICByZWY9eyBuID0+IHRoaXMubnVtYmVyRmlsdGVyID0gbiB9XG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICBzdHlsZT17IG51bWJlclN0eWxlIH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgYG51bWJlci1maWx0ZXItaW5wdXQgZm9ybS1jb250cm9sICR7bnVtYmVyQ2xhc3NOYW1lfWAgfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17IHBsYWNlaG9sZGVyIHx8IGBFbnRlciAke2NvbHVtbi50ZXh0fS4uLmAgfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VOdW1iZXIgfVxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9eyBkZWZhdWx0VmFsdWUgPyBkZWZhdWx0VmFsdWUubnVtYmVyIDogJycgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5OdW1iZXJGaWx0ZXIucHJvcFR5cGVzID0ge1xuICBvbkZpbHRlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY29sdW1uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5udW1iZXIpLFxuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgbnVtYmVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gICAgY29tcGFyYXRvcjogUHJvcFR5cGVzLm9uZU9mKFsuLi5sZWdhbENvbXBhcmF0b3JzLCAnJ10pXG4gIH0pLFxuICBkZWxheTogUHJvcFR5cGVzLm51bWJlcixcbiAgLyogZXNsaW50IGNvbnNpc3RlbnQtcmV0dXJuOiAwICovXG4gIGNvbXBhcmF0b3JzOiAocHJvcHMsIHByb3BOYW1lKSA9PiB7XG4gICAgaWYgKCFwcm9wc1twcm9wTmFtZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wc1twcm9wTmFtZV0ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGxldCBjb21wYXJhdG9ySXNWYWxpZCA9IGZhbHNlO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZWdhbENvbXBhcmF0b3JzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIGlmIChsZWdhbENvbXBhcmF0b3JzW2pdID09PSBwcm9wc1twcm9wTmFtZV1baV0gfHwgcHJvcHNbcHJvcE5hbWVdW2ldID09PSAnJykge1xuICAgICAgICAgIGNvbXBhcmF0b3JJc1ZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFjb21wYXJhdG9ySXNWYWxpZCkge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKGBOdW1iZXIgY29tcGFyYXRvciBwcm92aWRlZCBpcyBub3Qgc3VwcG9ydGVkLlxuICAgICAgICAgIFVzZSBvbmx5ICR7bGVnYWxDb21wYXJhdG9yc31gKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB3aXRob3V0RW1wdHlDb21wYXJhdG9yT3B0aW9uOiBQcm9wVHlwZXMuYm9vbCxcbiAgd2l0aG91dEVtcHR5TnVtYmVyT3B0aW9uOiBQcm9wVHlwZXMuYm9vbCxcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY29tcGFyYXRvclN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBjb21wYXJhdG9yQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBudW1iZXJTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgbnVtYmVyQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBnZXRGaWx0ZXI6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5OdW1iZXJGaWx0ZXIuZGVmYXVsdFByb3BzID0ge1xuICBkZWxheTogRklMVEVSX0RFTEFZLFxuICBvcHRpb25zOiB1bmRlZmluZWQsXG4gIGRlZmF1bHRWYWx1ZToge1xuICAgIG51bWJlcjogdW5kZWZpbmVkLFxuICAgIGNvbXBhcmF0b3I6ICcnXG4gIH0sXG4gIHdpdGhvdXRFbXB0eUNvbXBhcmF0b3JPcHRpb246IGZhbHNlLFxuICB3aXRob3V0RW1wdHlOdW1iZXJPcHRpb246IGZhbHNlLFxuICBjb21wYXJhdG9yczogbGVnYWxDb21wYXJhdG9ycyxcbiAgcGxhY2Vob2xkZXI6IHVuZGVmaW5lZCxcbiAgc3R5bGU6IHVuZGVmaW5lZCxcbiAgY2xhc3NOYW1lOiAnJyxcbiAgY29tcGFyYXRvclN0eWxlOiB1bmRlZmluZWQsXG4gIGNvbXBhcmF0b3JDbGFzc05hbWU6ICcnLFxuICBudW1iZXJTdHlsZTogdW5kZWZpbmVkLFxuICBudW1iZXJDbGFzc05hbWU6ICcnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJGaWx0ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLWZpbHRlci9zcmMvY29tcG9uZW50cy9udW1iZXIuanMiLCIvKiBlc2xpbnQgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzOiAwICovXG4vKiBlc2xpbnQganN4LWExMXkvbm8tc3RhdGljLWVsZW1lbnQtaW50ZXJhY3Rpb25zOiAwICovXG4vKiBlc2xpbnQgbm8tcmV0dXJuLWFzc2lnbjogMCAqL1xuLyogZXNsaW50IHByZWZlci10ZW1wbGF0ZTogMCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3BUeXBlcyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgKiBhcyBDb21wYXJhdG9yIGZyb20gJy4uL2NvbXBhcmlzb24nO1xuaW1wb3J0IHsgRklMVEVSX1RZUEUgfSBmcm9tICcuLi9jb25zdCc7XG5cbmNvbnN0IGxlZ2FsQ29tcGFyYXRvcnMgPSBbXG4gIENvbXBhcmF0b3IuRVEsXG4gIENvbXBhcmF0b3IuTkUsXG4gIENvbXBhcmF0b3IuR1QsXG4gIENvbXBhcmF0b3IuR0UsXG4gIENvbXBhcmF0b3IuTFQsXG4gIENvbXBhcmF0b3IuTEVcbl07XG5cbmZ1bmN0aW9uIGRhdGVQYXJzZXIoZCkge1xuICByZXR1cm4gYCR7ZC5nZXRVVENGdWxsWWVhcigpfS0keygnMCcgKyAoZC5nZXRVVENNb250aCgpICsgMSkpLnNsaWNlKC0yKX0tJHsoJzAnICsgZC5nZXRVVENEYXRlKCkpLnNsaWNlKC0yKX1gO1xufVxuXG5jbGFzcyBEYXRlRmlsdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy50aW1lb3V0ID0gbnVsbDtcbiAgICB0aGlzLmNvbXBhcmF0b3JzID0gcHJvcHMuY29tcGFyYXRvcnMgfHwgbGVnYWxDb21wYXJhdG9ycztcbiAgICB0aGlzLmFwcGx5RmlsdGVyID0gdGhpcy5hcHBseUZpbHRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25DaGFuZ2VEYXRlID0gdGhpcy5vbkNoYW5nZURhdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uQ2hhbmdlQ29tcGFyYXRvciA9IHRoaXMub25DaGFuZ2VDb21wYXJhdG9yLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGdldEZpbHRlciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjb21wYXJhdG9yID0gdGhpcy5kYXRlRmlsdGVyQ29tcGFyYXRvci52YWx1ZTtcbiAgICBjb25zdCBkYXRlID0gdGhpcy5pbnB1dERhdGUudmFsdWU7XG4gICAgaWYgKGNvbXBhcmF0b3IgJiYgZGF0ZSkge1xuICAgICAgdGhpcy5hcHBseUZpbHRlcihkYXRlLCBjb21wYXJhdG9yLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvLyBleHBvcnQgb25GaWx0ZXIgZnVuY3Rpb24gdG8gYWxsb3cgdXNlcnMgdG8gYWNjZXNzXG4gICAgaWYgKGdldEZpbHRlcikge1xuICAgICAgZ2V0RmlsdGVyKChmaWx0ZXJWYWwpID0+IHtcbiAgICAgICAgY29uc3QgbnVsbGFibGVGaWx0ZXJWYWwgPSBmaWx0ZXJWYWwgfHwgeyBkYXRlOiBudWxsLCBjb21wYXJhdG9yOiBudWxsIH07XG4gICAgICAgIHRoaXMuZGF0ZUZpbHRlckNvbXBhcmF0b3IudmFsdWUgPSBudWxsYWJsZUZpbHRlclZhbC5jb21wYXJhdG9yO1xuICAgICAgICB0aGlzLmlucHV0RGF0ZS52YWx1ZSA9IG51bGxhYmxlRmlsdGVyVmFsLmRhdGUgPyBkYXRlUGFyc2VyKG51bGxhYmxlRmlsdGVyVmFsLmRhdGUpIDogbnVsbDtcblxuICAgICAgICB0aGlzLmFwcGx5RmlsdGVyKG51bGxhYmxlRmlsdGVyVmFsLmRhdGUsIG51bGxhYmxlRmlsdGVyVmFsLmNvbXBhcmF0b3IpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMudGltZW91dCkgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gIH1cblxuICBvbkNoYW5nZURhdGUoZSkge1xuICAgIGNvbnN0IGNvbXBhcmF0b3IgPSB0aGlzLmRhdGVGaWx0ZXJDb21wYXJhdG9yLnZhbHVlO1xuICAgIGNvbnN0IGZpbHRlclZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5hcHBseUZpbHRlcihmaWx0ZXJWYWx1ZSwgY29tcGFyYXRvcik7XG4gIH1cblxuICBvbkNoYW5nZUNvbXBhcmF0b3IoZSkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pbnB1dERhdGUudmFsdWU7XG4gICAgY29uc3QgY29tcGFyYXRvciA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuYXBwbHlGaWx0ZXIodmFsdWUsIGNvbXBhcmF0b3IpO1xuICB9XG5cbiAgZ2V0Q29tcGFyYXRvck9wdGlvbnMoKSB7XG4gICAgY29uc3Qgb3B0aW9uVGFncyA9IFtdO1xuICAgIGNvbnN0IHsgd2l0aG91dEVtcHR5Q29tcGFyYXRvck9wdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIXdpdGhvdXRFbXB0eUNvbXBhcmF0b3JPcHRpb24pIHtcbiAgICAgIG9wdGlvblRhZ3MucHVzaCg8b3B0aW9uIGtleT1cIi0xXCIgLz4pO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29tcGFyYXRvcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIG9wdGlvblRhZ3MucHVzaChcbiAgICAgICAgPG9wdGlvbiBrZXk9eyBpIH0gdmFsdWU9eyB0aGlzLmNvbXBhcmF0b3JzW2ldIH0+XG4gICAgICAgICAgeyB0aGlzLmNvbXBhcmF0b3JzW2ldIH1cbiAgICAgICAgPC9vcHRpb24+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gb3B0aW9uVGFncztcbiAgfVxuXG4gIGdldERlZmF1bHREYXRlKCkge1xuICAgIGxldCBkZWZhdWx0RGF0ZSA9ICcnO1xuICAgIGNvbnN0IHsgZGVmYXVsdFZhbHVlIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChkZWZhdWx0VmFsdWUgJiYgZGVmYXVsdFZhbHVlLmRhdGUpIHtcbiAgICAgIC8vIFNldCB0aGUgYXBwcm9wcmlhdGUgZm9ybWF0IGZvciB0aGUgaW5wdXQgdHlwZT1kYXRlLCBpLmUuIFwiWVlZWS1NTS1ERFwiXG4gICAgICBkZWZhdWx0RGF0ZSA9IGRhdGVQYXJzZXIobmV3IERhdGUoZGVmYXVsdFZhbHVlLmRhdGUpKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHREYXRlO1xuICB9XG5cbiAgYXBwbHlGaWx0ZXIodmFsdWUsIGNvbXBhcmF0b3IsIGlzSW5pdGlhbCkge1xuICAgIC8vIGlmICghY29tcGFyYXRvciB8fCAhdmFsdWUpIHtcbiAgICAvLyAgcmV0dXJuO1xuICAgIC8vIH1cbiAgICBjb25zdCB7IGNvbHVtbiwgb25GaWx0ZXIsIGRlbGF5IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGV4ZWN1dGUgPSAoKSA9PiB7XG4gICAgICAvLyBJbmNvbWluZyB2YWx1ZSBzaG91bGQgYWx3YXlzIGJlIGEgc3RyaW5nLCBhbmQgdGhlIGRlZmF1bHREYXRlXG4gICAgICAvLyBhYm92ZSBpcyBpbXBsZW1lbnRlZCBhcyBhbiBlbXB0eSBzdHJpbmcsIHNvIHdlIGNhbiBqdXN0IGNoZWNrIGZvciB0aGF0LlxuICAgICAgLy8gaW5zdGVhZCBvZiBwYXJzaW5nIGFuIGludmFsaWQgRGF0ZS4gVGhlIGZpbHRlciBmdW5jdGlvbiB3aWxsIGludGVycHJldFxuICAgICAgLy8gbnVsbCBhcyBhbiBlbXB0eSBkYXRlIGZpZWxkXG4gICAgICBjb25zdCBkYXRlID0gdmFsdWUgPT09ICcnID8gbnVsbCA6IG5ldyBEYXRlKHZhbHVlKTtcbiAgICAgIG9uRmlsdGVyKGNvbHVtbiwgRklMVEVSX1RZUEUuREFURSwgaXNJbml0aWFsKSh7IGRhdGUsIGNvbXBhcmF0b3IgfSk7XG4gICAgfTtcbiAgICBpZiAoZGVsYXkpIHtcbiAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4geyBleGVjdXRlKCk7IH0sIGRlbGF5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhlY3V0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIGNvbHVtbjogeyB0ZXh0IH0sXG4gICAgICBzdHlsZSxcbiAgICAgIGNvbXBhcmF0b3JTdHlsZSxcbiAgICAgIGRhdGVTdHlsZSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGNvbXBhcmF0b3JDbGFzc05hbWUsXG4gICAgICBkYXRlQ2xhc3NOYW1lLFxuICAgICAgZGVmYXVsdFZhbHVlXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBvbkNsaWNrPXsgZSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpIH1cbiAgICAgICAgY2xhc3NOYW1lPXsgYGZpbHRlciBkYXRlLWZpbHRlciAke2NsYXNzTmFtZX1gIH1cbiAgICAgICAgc3R5bGU9eyBzdHlsZSB9XG4gICAgICA+XG4gICAgICAgIDxzZWxlY3RcbiAgICAgICAgICByZWY9eyBuID0+IHRoaXMuZGF0ZUZpbHRlckNvbXBhcmF0b3IgPSBuIH1cbiAgICAgICAgICBzdHlsZT17IGNvbXBhcmF0b3JTdHlsZSB9XG4gICAgICAgICAgY2xhc3NOYW1lPXsgYGRhdGUtZmlsdGVyLWNvbXBhcmF0b3IgZm9ybS1jb250cm9sICR7Y29tcGFyYXRvckNsYXNzTmFtZX1gIH1cbiAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VDb21wYXJhdG9yIH1cbiAgICAgICAgICBkZWZhdWx0VmFsdWU9eyBkZWZhdWx0VmFsdWUgPyBkZWZhdWx0VmFsdWUuY29tcGFyYXRvciA6ICcnIH1cbiAgICAgICAgPlxuICAgICAgICAgIHsgdGhpcy5nZXRDb21wYXJhdG9yT3B0aW9ucygpIH1cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHJlZj17IG4gPT4gdGhpcy5pbnB1dERhdGUgPSBuIH1cbiAgICAgICAgICBjbGFzc05hbWU9eyBgZmlsdGVyIGRhdGUtZmlsdGVyLWlucHV0IGZvcm0tY29udHJvbCAke2RhdGVDbGFzc05hbWV9YCB9XG4gICAgICAgICAgc3R5bGU9eyBkYXRlU3R5bGUgfVxuICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VEYXRlIH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17IHBsYWNlaG9sZGVyIHx8IGBFbnRlciAke3RleHR9Li4uYCB9XG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXsgdGhpcy5nZXREZWZhdWx0RGF0ZSgpIH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuRGF0ZUZpbHRlci5wcm9wVHlwZXMgPSB7XG4gIG9uRmlsdGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjb2x1bW46IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgZGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBkYXRlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0XSksXG4gICAgY29tcGFyYXRvcjogUHJvcFR5cGVzLm9uZU9mKFsuLi5sZWdhbENvbXBhcmF0b3JzLCAnJ10pXG4gIH0pLFxuICAvKiBlc2xpbnQgY29uc2lzdGVudC1yZXR1cm46IDAgKi9cbiAgY29tcGFyYXRvcnM6IChwcm9wcywgcHJvcE5hbWUpID0+IHtcbiAgICBpZiAoIXByb3BzW3Byb3BOYW1lXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BzW3Byb3BOYW1lXS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgbGV0IGNvbXBhcmF0b3JJc1ZhbGlkID0gZmFsc2U7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlZ2FsQ29tcGFyYXRvcnMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgaWYgKGxlZ2FsQ29tcGFyYXRvcnNbal0gPT09IHByb3BzW3Byb3BOYW1lXVtpXSB8fCBwcm9wc1twcm9wTmFtZV1baV0gPT09ICcnKSB7XG4gICAgICAgICAgY29tcGFyYXRvcklzVmFsaWQgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIWNvbXBhcmF0b3JJc1ZhbGlkKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoYERhdGUgY29tcGFyYXRvciBwcm92aWRlZCBpcyBub3Qgc3VwcG9ydGVkLlxuICAgICAgICAgIFVzZSBvbmx5ICR7bGVnYWxDb21wYXJhdG9yc31gKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB3aXRob3V0RW1wdHlDb21wYXJhdG9yT3B0aW9uOiBQcm9wVHlwZXMuYm9vbCxcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIGNvbXBhcmF0b3JTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgZGF0ZVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvbXBhcmF0b3JDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRhdGVDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGdldEZpbHRlcjogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbkRhdGVGaWx0ZXIuZGVmYXVsdFByb3BzID0ge1xuICBkZWxheTogMCxcbiAgZGVmYXVsdFZhbHVlOiB7XG4gICAgZGF0ZTogdW5kZWZpbmVkLFxuICAgIGNvbXBhcmF0b3I6ICcnXG4gIH0sXG4gIHdpdGhvdXRFbXB0eUNvbXBhcmF0b3JPcHRpb246IGZhbHNlLFxuICBjb21wYXJhdG9yczogbGVnYWxDb21wYXJhdG9ycyxcbiAgcGxhY2Vob2xkZXI6IHVuZGVmaW5lZCxcbiAgc3R5bGU6IHVuZGVmaW5lZCxcbiAgY2xhc3NOYW1lOiAnJyxcbiAgY29tcGFyYXRvclN0eWxlOiB1bmRlZmluZWQsXG4gIGNvbXBhcmF0b3JDbGFzc05hbWU6ICcnLFxuICBkYXRlU3R5bGU6IHVuZGVmaW5lZCxcbiAgZGF0ZUNsYXNzTmFtZTogJydcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgRGF0ZUZpbHRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItZmlsdGVyL3NyYy9jb21wb25lbnRzL2RhdGUuanMiLCIvKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuLyogZXNsaW50IHJlYWN0L3JlcXVpcmUtZGVmYXVsdC1wcm9wczogMCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IGZpbHRlcnMgfSBmcm9tICcuL2ZpbHRlcic7XG5pbXBvcnQgeyBMSUtFLCBFUSB9IGZyb20gJy4vY29tcGFyaXNvbic7XG5pbXBvcnQgeyBGSUxURVJfVFlQRSB9IGZyb20gJy4vY29uc3QnO1xuXG5leHBvcnQgZGVmYXVsdCAoXG4gIF8sXG4gIGlzUmVtb3RlRmlsdGVyaW5nLFxuICBoYW5kbGVGaWx0ZXJDaGFuZ2VcbikgPT4ge1xuICBjb25zdCBGaWx0ZXJDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuXG4gIGNsYXNzIEZpbHRlclByb3ZpZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgZGF0YTogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAgICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICAgIGRhdGFDaGFuZ2VMaXN0ZW5lcjogUHJvcFR5cGVzLm9iamVjdFxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICB0aGlzLmN1cnJGaWx0ZXJzID0ge307XG4gICAgICB0aGlzLm9uRmlsdGVyID0gdGhpcy5vbkZpbHRlci5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5kb0ZpbHRlciA9IHRoaXMuZG9GaWx0ZXIuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMub25FeHRlcm5hbEZpbHRlciA9IHRoaXMub25FeHRlcm5hbEZpbHRlci5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5kYXRhID0gcHJvcHMuZGF0YTtcbiAgICAgIHRoaXMuaXNFbWl0RGF0YUNoYW5nZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgaWYgKGlzUmVtb3RlRmlsdGVyaW5nKCkgJiYgT2JqZWN0LmtleXModGhpcy5jdXJyRmlsdGVycykubGVuZ3RoID4gMCkge1xuICAgICAgICBoYW5kbGVGaWx0ZXJDaGFuZ2UodGhpcy5jdXJyRmlsdGVycyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIC8vIGxldCBuZXh0RGF0YSA9IG5leHRQcm9wcy5kYXRhO1xuICAgICAgaWYgKCFpc1JlbW90ZUZpbHRlcmluZygpICYmICFfLmlzRXF1YWwobmV4dFByb3BzLmRhdGEsIHRoaXMuZGF0YSkpIHtcbiAgICAgICAgdGhpcy5kb0ZpbHRlcihuZXh0UHJvcHMsIHVuZGVmaW5lZCwgdGhpcy5pc0VtaXREYXRhQ2hhbmdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5leHRQcm9wcy5kYXRhO1xuICAgICAgfVxuICAgIH1cblxuICAgIG9uRmlsdGVyKGNvbHVtbiwgZmlsdGVyVHlwZSwgaW5pdGlhbGl6ZSA9IGZhbHNlKSB7XG4gICAgICByZXR1cm4gKGZpbHRlclZhbCkgPT4ge1xuICAgICAgICAvLyB3YXRjaCBvdXQgaGVyZSBpZiBtaWdyYXRpb24gdG8gY29udGV4dCBBUEksICMzMzRcbiAgICAgICAgY29uc3QgY3VyckZpbHRlcnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmN1cnJGaWx0ZXJzKTtcbiAgICAgICAgY29uc3QgeyBkYXRhRmllbGQsIGZpbHRlciB9ID0gY29sdW1uO1xuXG4gICAgICAgIGNvbnN0IG5lZWRDbGVhckZpbHRlcnMgPVxuICAgICAgICAgICFfLmlzRGVmaW5lZChmaWx0ZXJWYWwpIHx8XG4gICAgICAgICAgZmlsdGVyVmFsID09PSAnJyB8fFxuICAgICAgICAgIGZpbHRlclZhbC5sZW5ndGggPT09IDA7XG5cbiAgICAgICAgaWYgKG5lZWRDbGVhckZpbHRlcnMpIHtcbiAgICAgICAgICBkZWxldGUgY3VyckZpbHRlcnNbZGF0YUZpZWxkXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBzZWxlY3QgZGVmYXVsdCBjb21wYXJhdG9yIGlzIEVRLCBvdGhlcnMgYXJlIExJS0VcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBjb21wYXJhdG9yID0gKGZpbHRlclR5cGUgPT09IEZJTFRFUl9UWVBFLlNFTEVDVCA/IEVRIDogTElLRSksXG4gICAgICAgICAgICBjYXNlU2Vuc2l0aXZlID0gZmFsc2VcbiAgICAgICAgICB9ID0gZmlsdGVyLnByb3BzO1xuICAgICAgICAgIGN1cnJGaWx0ZXJzW2RhdGFGaWVsZF0gPSB7IGZpbHRlclZhbCwgZmlsdGVyVHlwZSwgY29tcGFyYXRvciwgY2FzZVNlbnNpdGl2ZSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jdXJyRmlsdGVycyA9IGN1cnJGaWx0ZXJzO1xuXG4gICAgICAgIGlmIChpc1JlbW90ZUZpbHRlcmluZygpKSB7XG4gICAgICAgICAgaWYgKCFpbml0aWFsaXplKSB7XG4gICAgICAgICAgICBoYW5kbGVGaWx0ZXJDaGFuZ2UodGhpcy5jdXJyRmlsdGVycyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIGlmIChmaWx0ZXIucHJvcHMub25GaWx0ZXIpIHtcbiAgICAgICAgICByZXN1bHQgPSBmaWx0ZXIucHJvcHMub25GaWx0ZXIoZmlsdGVyVmFsKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRvRmlsdGVyKHRoaXMucHJvcHMsIHJlc3VsdCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIG9uRXh0ZXJuYWxGaWx0ZXIoY29sdW1uLCBmaWx0ZXJUeXBlKSB7XG4gICAgICByZXR1cm4gKHZhbHVlKSA9PiB7XG4gICAgICAgIHRoaXMub25GaWx0ZXIoY29sdW1uLCBmaWx0ZXJUeXBlKSh2YWx1ZSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGdldEZpbHRlcmVkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgICB9XG5cbiAgICBkb0ZpbHRlcihwcm9wcywgY3VzdG9tUmVzdWx0LCBpZ25vcmVFbWl0RGF0YUNoYW5nZSA9IGZhbHNlKSB7XG4gICAgICBsZXQgcmVzdWx0ID0gY3VzdG9tUmVzdWx0O1xuXG4gICAgICBjb25zdCB7IGRhdGFDaGFuZ2VMaXN0ZW5lciwgZGF0YSwgY29sdW1ucyB9ID0gcHJvcHM7XG4gICAgICAvLyBUaGlzIGNoYW5nZSB3aWxsIGZ1Y2sgdXAgdGhlIGZpbHRlciBjbGVhcmluZywgSSB0aGlua1xuICAgICAgcmVzdWx0ID0gcmVzdWx0IHx8IGZpbHRlcnModGhpcy5kYXRhLCBjb2x1bW5zLCBfKSh0aGlzLmN1cnJGaWx0ZXJzKTtcbiAgICAgIHRoaXMuZGF0YSA9IHJlc3VsdDtcbiAgICAgIGlmIChkYXRhQ2hhbmdlTGlzdGVuZXIgJiYgIWlnbm9yZUVtaXREYXRhQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMuaXNFbWl0RGF0YUNoYW5nZSA9IHRydWU7XG4gICAgICAgIGRhdGFDaGFuZ2VMaXN0ZW5lci5lbWl0KCdmaWx0ZXJDaGFuZ2VkJywgcmVzdWx0Lmxlbmd0aCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmlzRW1pdERhdGFDaGFuZ2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxGaWx0ZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXsge1xuICAgICAgICAgIGRhdGE6IHRoaXMuZGF0YSxcbiAgICAgICAgICBvbkZpbHRlcjogdGhpcy5vbkZpbHRlcixcbiAgICAgICAgICBvbkV4dGVybmFsRmlsdGVyOiB0aGlzLm9uRXh0ZXJuYWxGaWx0ZXJcbiAgICAgICAgfSB9XG4gICAgICAgID5cbiAgICAgICAgICB7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICA8L0ZpbHRlckNvbnRleHQuUHJvdmlkZXI+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgUHJvdmlkZXI6IEZpbHRlclByb3ZpZGVyLFxuICAgIENvbnN1bWVyOiBGaWx0ZXJDb250ZXh0LkNvbnN1bWVyXG4gIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1maWx0ZXIvc3JjL2NvbnRleHQuanMiLCIvKiBlc2xpbnQgZXFlcWVxOiAwICovXG4vKiBlc2xpbnQgbm8tY29uc29sZTogMCAqL1xuaW1wb3J0IHsgRklMVEVSX1RZUEUgfSBmcm9tICcuL2NvbnN0JztcbmltcG9ydCB7IExJS0UsIEVRLCBORSwgR1QsIEdFLCBMVCwgTEUgfSBmcm9tICcuL2NvbXBhcmlzb24nO1xuXG5leHBvcnQgY29uc3QgZmlsdGVyQnlUZXh0ID0gXyA9PiAoXG4gIGRhdGEsXG4gIGRhdGFGaWVsZCxcbiAgeyBmaWx0ZXJWYWw6IHVzZXJJbnB1dCA9ICcnLCBjb21wYXJhdG9yID0gTElLRSwgY2FzZVNlbnNpdGl2ZSB9LFxuICBjdXN0b21GaWx0ZXJWYWx1ZVxuKSA9PiB7XG4gIC8vIG1ha2Ugc3VyZSBmaWx0ZXIgdmFsdWUgdG8gYmUgYSBzdHJpbmdcbiAgY29uc3QgZmlsdGVyVmFsID0gdXNlcklucHV0LnRvU3RyaW5nKCk7XG5cbiAgcmV0dXJuIChcbiAgICBkYXRhLmZpbHRlcigocm93KSA9PiB7XG4gICAgICBsZXQgY2VsbCA9IF8uZ2V0KHJvdywgZGF0YUZpZWxkKTtcbiAgICAgIGlmIChjdXN0b21GaWx0ZXJWYWx1ZSkge1xuICAgICAgICBjZWxsID0gY3VzdG9tRmlsdGVyVmFsdWUoY2VsbCwgcm93KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNlbGxTdHIgPSBfLmlzRGVmaW5lZChjZWxsKSA/IGNlbGwudG9TdHJpbmcoKSA6ICcnO1xuICAgICAgaWYgKGNvbXBhcmF0b3IgPT09IEVRKSB7XG4gICAgICAgIHJldHVybiBjZWxsU3RyID09PSBmaWx0ZXJWYWw7XG4gICAgICB9XG4gICAgICBpZiAoY2FzZVNlbnNpdGl2ZSkge1xuICAgICAgICByZXR1cm4gY2VsbFN0ci5pbmNsdWRlcyhmaWx0ZXJWYWwpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2VsbFN0ci50b0xvY2FsZVVwcGVyQ2FzZSgpLmluZGV4T2YoZmlsdGVyVmFsLnRvTG9jYWxlVXBwZXJDYXNlKCkpICE9PSAtMTtcbiAgICB9KVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbHRlckJ5TnVtYmVyID0gXyA9PiAoXG4gIGRhdGEsXG4gIGRhdGFGaWVsZCxcbiAgeyBmaWx0ZXJWYWw6IHsgY29tcGFyYXRvciwgbnVtYmVyIH0gfSxcbiAgY3VzdG9tRmlsdGVyVmFsdWVcbikgPT4gKFxuICBkYXRhLmZpbHRlcigocm93KSA9PiB7XG4gICAgaWYgKG51bWJlciA9PT0gJycgfHwgIWNvbXBhcmF0b3IpIHJldHVybiB0cnVlO1xuICAgIGxldCB2YWxpZCA9IHRydWU7XG4gICAgbGV0IGNlbGwgPSBfLmdldChyb3csIGRhdGFGaWVsZCk7XG4gICAgaWYgKGN1c3RvbUZpbHRlclZhbHVlKSB7XG4gICAgICBjZWxsID0gY3VzdG9tRmlsdGVyVmFsdWUoY2VsbCwgcm93KTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGNvbXBhcmF0b3IpIHtcbiAgICAgIGNhc2UgRVE6IHtcbiAgICAgICAgaWYgKGNlbGwgIT0gbnVtYmVyKSB7XG4gICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgR1Q6IHtcbiAgICAgICAgaWYgKGNlbGwgPD0gbnVtYmVyKSB7XG4gICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgR0U6IHtcbiAgICAgICAgaWYgKGNlbGwgPCBudW1iZXIpIHtcbiAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBMVDoge1xuICAgICAgICBpZiAoY2VsbCA+PSBudW1iZXIpIHtcbiAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBMRToge1xuICAgICAgICBpZiAoY2VsbCA+IG51bWJlcikge1xuICAgICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5FOiB7XG4gICAgICAgIGlmIChjZWxsID09IG51bWJlcikge1xuICAgICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ051bWJlciBjb21wYXJhdG9yIHByb3ZpZGVkIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWxpZDtcbiAgfSlcbik7XG5cbmV4cG9ydCBjb25zdCBmaWx0ZXJCeURhdGUgPSBfID0+IChcbiAgZGF0YSxcbiAgZGF0YUZpZWxkLFxuICB7IGZpbHRlclZhbDogeyBjb21wYXJhdG9yLCBkYXRlIH0gfSxcbiAgY3VzdG9tRmlsdGVyVmFsdWVcbikgPT4ge1xuICBpZiAoIWRhdGUgfHwgIWNvbXBhcmF0b3IpIHJldHVybiBkYXRhO1xuICBjb25zdCBmaWx0ZXJEYXRlID0gZGF0ZS5nZXRVVENEYXRlKCk7XG4gIGNvbnN0IGZpbHRlck1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICBjb25zdCBmaWx0ZXJZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuXG4gIHJldHVybiBkYXRhLmZpbHRlcigocm93KSA9PiB7XG4gICAgbGV0IHZhbGlkID0gdHJ1ZTtcbiAgICBsZXQgY2VsbCA9IF8uZ2V0KHJvdywgZGF0YUZpZWxkKTtcblxuICAgIGlmIChjdXN0b21GaWx0ZXJWYWx1ZSkge1xuICAgICAgY2VsbCA9IGN1c3RvbUZpbHRlclZhbHVlKGNlbGwsIHJvdyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjZWxsICE9PSAnb2JqZWN0Jykge1xuICAgICAgY2VsbCA9IG5ldyBEYXRlKGNlbGwpO1xuICAgIH1cblxuICAgIGNvbnN0IHRhcmdldERhdGUgPSBjZWxsLmdldFVUQ0RhdGUoKTtcbiAgICBjb25zdCB0YXJnZXRNb250aCA9IGNlbGwuZ2V0VVRDTW9udGgoKTtcbiAgICBjb25zdCB0YXJnZXRZZWFyID0gY2VsbC5nZXRVVENGdWxsWWVhcigpO1xuXG5cbiAgICBzd2l0Y2ggKGNvbXBhcmF0b3IpIHtcbiAgICAgIGNhc2UgRVE6IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGZpbHRlckRhdGUgIT09IHRhcmdldERhdGUgfHxcbiAgICAgICAgICBmaWx0ZXJNb250aCAhPT0gdGFyZ2V0TW9udGggfHxcbiAgICAgICAgICBmaWx0ZXJZZWFyICE9PSB0YXJnZXRZZWFyXG4gICAgICAgICkge1xuICAgICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIEdUOiB7XG4gICAgICAgIGlmIChjZWxsIDw9IGRhdGUpIHtcbiAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBHRToge1xuICAgICAgICBpZiAodGFyZ2V0WWVhciA8IGZpbHRlclllYXIpIHtcbiAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldFllYXIgPT09IGZpbHRlclllYXIgJiZcbiAgICAgICAgICB0YXJnZXRNb250aCA8IGZpbHRlck1vbnRoKSB7XG4gICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXRZZWFyID09PSBmaWx0ZXJZZWFyICYmXG4gICAgICAgICAgdGFyZ2V0TW9udGggPT09IGZpbHRlck1vbnRoICYmXG4gICAgICAgICAgdGFyZ2V0RGF0ZSA8IGZpbHRlckRhdGUpIHtcbiAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBMVDoge1xuICAgICAgICBpZiAoY2VsbCA+PSBkYXRlKSB7XG4gICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTEU6IHtcbiAgICAgICAgaWYgKHRhcmdldFllYXIgPiBmaWx0ZXJZZWFyKSB7XG4gICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXRZZWFyID09PSBmaWx0ZXJZZWFyICYmXG4gICAgICAgICAgdGFyZ2V0TW9udGggPiBmaWx0ZXJNb250aCkge1xuICAgICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0WWVhciA9PT0gZmlsdGVyWWVhciAmJlxuICAgICAgICAgIHRhcmdldE1vbnRoID09PSBmaWx0ZXJNb250aCAmJlxuICAgICAgICAgIHRhcmdldERhdGUgPiBmaWx0ZXJEYXRlKSB7XG4gICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTkU6IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGZpbHRlckRhdGUgPT09IHRhcmdldERhdGUgJiZcbiAgICAgICAgICBmaWx0ZXJNb250aCA9PT0gdGFyZ2V0TW9udGggJiZcbiAgICAgICAgICBmaWx0ZXJZZWFyID09PSB0YXJnZXRZZWFyXG4gICAgICAgICkge1xuICAgICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0RhdGUgY29tcGFyYXRvciBwcm92aWRlZCBpcyBub3Qgc3VwcG9ydGVkJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsaWQ7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbHRlckJ5QXJyYXkgPSBfID0+IChcbiAgZGF0YSxcbiAgZGF0YUZpZWxkLFxuICB7IGZpbHRlclZhbCwgY29tcGFyYXRvciB9XG4pID0+IHtcbiAgaWYgKGZpbHRlclZhbC5sZW5ndGggPT09IDApIHJldHVybiBkYXRhO1xuICBjb25zdCByZWZpbmVkRmlsdGVyVmFsID0gZmlsdGVyVmFsXG4gICAgLmZpbHRlcih4ID0+IF8uaXNEZWZpbmVkKHgpKVxuICAgIC5tYXAoeCA9PiB4LnRvU3RyaW5nKCkpO1xuICByZXR1cm4gZGF0YS5maWx0ZXIoKHJvdykgPT4ge1xuICAgIGNvbnN0IGNlbGwgPSBfLmdldChyb3csIGRhdGFGaWVsZCk7XG4gICAgbGV0IGNlbGxTdHIgPSBfLmlzRGVmaW5lZChjZWxsKSA/IGNlbGwudG9TdHJpbmcoKSA6ICcnO1xuICAgIGlmIChjb21wYXJhdG9yID09PSBFUSkge1xuICAgICAgcmV0dXJuIHJlZmluZWRGaWx0ZXJWYWwuaW5kZXhPZihjZWxsU3RyKSAhPT0gLTE7XG4gICAgfVxuICAgIGNlbGxTdHIgPSBjZWxsU3RyLnRvTG9jYWxlVXBwZXJDYXNlKCk7XG4gICAgcmV0dXJuIHJlZmluZWRGaWx0ZXJWYWwuc29tZShpdGVtID0+IGNlbGxTdHIuaW5kZXhPZihpdGVtLnRvTG9jYWxlVXBwZXJDYXNlKCkpICE9PSAtMSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbHRlckZhY3RvcnkgPSBfID0+IChmaWx0ZXJUeXBlKSA9PiB7XG4gIGxldCBmaWx0ZXJGbjtcbiAgc3dpdGNoIChmaWx0ZXJUeXBlKSB7XG4gICAgY2FzZSBGSUxURVJfVFlQRS5URVhUOlxuICAgIGNhc2UgRklMVEVSX1RZUEUuU0VMRUNUOlxuICAgICAgZmlsdGVyRm4gPSBmaWx0ZXJCeVRleHQoXyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIEZJTFRFUl9UWVBFLk1VTFRJU0VMRUNUOlxuICAgICAgZmlsdGVyRm4gPSBmaWx0ZXJCeUFycmF5KF8pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBGSUxURVJfVFlQRS5OVU1CRVI6XG4gICAgICBmaWx0ZXJGbiA9IGZpbHRlckJ5TnVtYmVyKF8pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBGSUxURVJfVFlQRS5EQVRFOlxuICAgICAgZmlsdGVyRm4gPSBmaWx0ZXJCeURhdGUoXyk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgZmlsdGVyRm4gPSBmaWx0ZXJCeVRleHQoXyk7XG4gIH1cbiAgcmV0dXJuIGZpbHRlckZuO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbHRlcnMgPSAoZGF0YSwgY29sdW1ucywgXykgPT4gKGN1cnJGaWx0ZXJzKSA9PiB7XG4gIGNvbnN0IGZhY3RvcnkgPSBmaWx0ZXJGYWN0b3J5KF8pO1xuICBsZXQgcmVzdWx0ID0gZGF0YTtcbiAgbGV0IGZpbHRlckZuO1xuICBPYmplY3Qua2V5cyhjdXJyRmlsdGVycykuZm9yRWFjaCgoZGF0YUZpZWxkKSA9PiB7XG4gICAgY29uc3QgZmlsdGVyT2JqID0gY3VyckZpbHRlcnNbZGF0YUZpZWxkXTtcbiAgICBmaWx0ZXJGbiA9IGZhY3RvcnkoZmlsdGVyT2JqLmZpbHRlclR5cGUpO1xuICAgIGxldCBmaWx0ZXJWYWx1ZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChjb2x1bW5zW2ldLmRhdGFGaWVsZCA9PT0gZGF0YUZpZWxkKSB7XG4gICAgICAgIGZpbHRlclZhbHVlID0gY29sdW1uc1tpXS5maWx0ZXJWYWx1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdCA9IGZpbHRlckZuKHJlc3VsdCwgZGF0YUZpZWxkLCBmaWx0ZXJPYmosIGZpbHRlclZhbHVlKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1maWx0ZXIvc3JjL2ZpbHRlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=
//# sourceMappingURL=react-bootstrap-table2-filter.js.map