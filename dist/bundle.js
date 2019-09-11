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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOM", function() { return DOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Children", function() { return Children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createClass", function() { return createClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFactory", function() { return createFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return cloneElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return isValidElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDOMNode", function() { return findDOMNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unmountComponentAtNode", function() { return unmountComponentAtNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureComponent", function() { return PureComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_renderSubtreeIntoContainer", function() { return renderSubtreeIntoContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact__ = __webpack_require__(68);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "PropTypes", function() { return __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a; });



var version = '15.1.0'; // trick libraries to think we are react

var ELEMENTS = 'a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan'.split(' ');

var REACT_ELEMENT_TYPE = (typeof Symbol!=='undefined' && Symbol.for && Symbol.for('react.element')) || 0xeac7;

var COMPONENT_WRAPPER_KEY = typeof Symbol!=='undefined' ? Symbol.for('__preactCompatWrapper') : '__preactCompatWrapper';

// don't autobind these methods since they already have guaranteed context.
var AUTOBIND_BLACKLIST = {
	constructor: 1,
	render: 1,
	shouldComponentUpdate: 1,
	componentWillReceiveProps: 1,
	componentWillUpdate: 1,
	componentDidUpdate: 1,
	componentWillMount: 1,
	componentDidMount: 1,
	componentWillUnmount: 1,
	componentDidUnmount: 1
};


var CAMEL_PROPS = /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vert|word|writing|x)[A-Z]/;


var BYPASS_HOOK = {};

/*global process*/
var DEV = typeof process==='undefined' || !process.env || "production"!=='production';

// a component that renders nothing. Used to replace components for unmountComponentAtNode.
function EmptyComponent() { return null; }



// make react think we're react.
var VNode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["a" /* h */])('a', null).constructor;
VNode.prototype.$$typeof = REACT_ELEMENT_TYPE;
VNode.prototype.preactCompatUpgraded = false;
VNode.prototype.preactCompatNormalized = false;

Object.defineProperty(VNode.prototype, 'type', {
	get: function() { return this.nodeName; },
	set: function(v) { this.nodeName = v; },
	configurable:true
});

Object.defineProperty(VNode.prototype, 'props', {
	get: function() { return this.attributes; },
	set: function(v) { this.attributes = v; },
	configurable:true
});



var oldEventHook = __WEBPACK_IMPORTED_MODULE_1_preact__["b" /* options */].event;
__WEBPACK_IMPORTED_MODULE_1_preact__["b" /* options */].event = function (e) {
	if (oldEventHook) { e = oldEventHook(e); }
	e.persist = Object;
	e.nativeEvent = e;
	return e;
};


var oldVnodeHook = __WEBPACK_IMPORTED_MODULE_1_preact__["b" /* options */].vnode;
__WEBPACK_IMPORTED_MODULE_1_preact__["b" /* options */].vnode = function (vnode) {
	if (!vnode.preactCompatUpgraded) {
		vnode.preactCompatUpgraded = true;

		var tag = vnode.nodeName,
			attrs = vnode.attributes = extend({}, vnode.attributes);

		if (typeof tag==='function') {
			if (tag[COMPONENT_WRAPPER_KEY]===true || (tag.prototype && 'isReactComponent' in tag.prototype)) {
				if (vnode.children && String(vnode.children)==='') { vnode.children = undefined; }
				if (vnode.children) { attrs.children = vnode.children; }

				if (!vnode.preactCompatNormalized) {
					normalizeVNode(vnode);
				}
				handleComponentVNode(vnode);
			}
		}
		else {
			if (vnode.children && String(vnode.children)==='') { vnode.children = undefined; }
			if (vnode.children) { attrs.children = vnode.children; }

			if (attrs.defaultValue) {
				if (!attrs.value && attrs.value!==0) {
					attrs.value = attrs.defaultValue;
				}
				delete attrs.defaultValue;
			}

			handleElementVNode(vnode, attrs);
		}
	}

	if (oldVnodeHook) { oldVnodeHook(vnode); }
};

function handleComponentVNode(vnode) {
	var tag = vnode.nodeName,
		a = vnode.attributes;

	vnode.attributes = {};
	if (tag.defaultProps) { extend(vnode.attributes, tag.defaultProps); }
	if (a) { extend(vnode.attributes, a); }
}

function handleElementVNode(vnode, a) {
	var shouldSanitize, attrs, i;
	if (a) {
		for (i in a) { if ((shouldSanitize = CAMEL_PROPS.test(i))) { break; } }
		if (shouldSanitize) {
			attrs = vnode.attributes = {};
			for (i in a) {
				if (a.hasOwnProperty(i)) {
					attrs[ CAMEL_PROPS.test(i) ? i.replace(/([A-Z0-9])/, '-$1').toLowerCase() : i ] = a[i];
				}
			}
		}
	}
}



// proxy render() since React returns a Component reference.
function render$1(vnode, parent, callback) {
	var prev = parent && parent._preactCompatRendered && parent._preactCompatRendered.base;

	// ignore impossible previous renders
	if (prev && prev.parentNode!==parent) { prev = null; }

	// default to first Element child
	if (!prev) { prev = parent.children[0]; }

	// remove unaffected siblings
	for (var i=parent.childNodes.length; i--; ) {
		if (parent.childNodes[i]!==prev) {
			parent.removeChild(parent.childNodes[i]);
		}
	}

	var out = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["c" /* render */])(vnode, parent, prev);
	if (parent) { parent._preactCompatRendered = out && (out._component || { base: out }); }
	if (typeof callback==='function') { callback(); }
	return out && out._component || out;
}


var ContextProvider = function () {};

ContextProvider.prototype.getChildContext = function () {
	return this.props.context;
};
ContextProvider.prototype.render = function (props) {
	return props.children[0];
};

function renderSubtreeIntoContainer(parentComponent, vnode, container, callback) {
	var wrap = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["a" /* h */])(ContextProvider, { context: parentComponent.context }, vnode);
	var c = render$1(wrap, container);
	if (callback) { callback(c); }
	return c._component || c.base;
}


function unmountComponentAtNode(container) {
	var existing = container._preactCompatRendered && container._preactCompatRendered.base;
	if (existing && existing.parentNode===container) {
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["c" /* render */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["a" /* h */])(EmptyComponent), container, existing);
		return true;
	}
	return false;
}



var ARR = [];

// This API is completely unnecessary for Preact, so it's basically passthrough.
var Children = {
	map: function(children, fn, ctx) {
		if (children == null) { return null; }
		children = Children.toArray(children);
		if (ctx && ctx!==children) { fn = fn.bind(ctx); }
		return children.map(fn);
	},
	forEach: function(children, fn, ctx) {
		if (children == null) { return null; }
		children = Children.toArray(children);
		if (ctx && ctx!==children) { fn = fn.bind(ctx); }
		children.forEach(fn);
	},
	count: function(children) {
		return children && children.length || 0;
	},
	only: function(children) {
		children = Children.toArray(children);
		if (children.length!==1) { throw new Error('Children.only() expects only one child.'); }
		return children[0];
	},
	toArray: function(children) {
		if (children == null) { return []; }
		return Array.isArray && Array.isArray(children) ? children : ARR.concat(children);
	}
};


/** Track current render() component for ref assignment */
var currentComponent;


function createFactory(type) {
	return createElement.bind(null, type);
}


var DOM = {};
for (var i=ELEMENTS.length; i--; ) {
	DOM[ELEMENTS[i]] = createFactory(ELEMENTS[i]);
}

function upgradeToVNodes(arr, offset) {
	for (var i=offset || 0; i<arr.length; i++) {
		var obj = arr[i];
		if (Array.isArray(obj)) {
			upgradeToVNodes(obj);
		}
		else if (obj && typeof obj==='object' && !isValidElement(obj) && ((obj.props && obj.type) || (obj.attributes && obj.nodeName) || obj.children)) {
			arr[i] = createElement(obj.type || obj.nodeName, obj.props || obj.attributes, obj.children);
		}
	}
}

function isStatelessComponent(c) {
	return typeof c==='function' && !(c.prototype && c.prototype.render);
}


// wraps stateless functional components in a PropTypes validator
function wrapStatelessComponent(WrappedComponent) {
	return createClass({
		displayName: WrappedComponent.displayName || WrappedComponent.name,
		render: function() {
			return WrappedComponent(this.props, this.context);
		}
	});
}


function statelessComponentHook(Ctor) {
	var Wrapped = Ctor[COMPONENT_WRAPPER_KEY];
	if (Wrapped) { return Wrapped===true ? Ctor : Wrapped; }

	Wrapped = wrapStatelessComponent(Ctor);

	Object.defineProperty(Wrapped, COMPONENT_WRAPPER_KEY, { configurable:true, value:true });
	Wrapped.displayName = Ctor.displayName;
	Wrapped.propTypes = Ctor.propTypes;
	Wrapped.defaultProps = Ctor.defaultProps;

	Object.defineProperty(Ctor, COMPONENT_WRAPPER_KEY, { configurable:true, value:Wrapped });

	return Wrapped;
}


function createElement() {
	var args = [], len = arguments.length;
	while ( len-- ) args[ len ] = arguments[ len ];

	upgradeToVNodes(args, 2);
	return normalizeVNode(__WEBPACK_IMPORTED_MODULE_1_preact__["a" /* h */].apply(void 0, args));
}


function normalizeVNode(vnode) {
	vnode.preactCompatNormalized = true;

	applyClassName(vnode);

	if (isStatelessComponent(vnode.nodeName)) {
		vnode.nodeName = statelessComponentHook(vnode.nodeName);
	}

	var ref = vnode.attributes.ref,
		type = ref && typeof ref;
	if (currentComponent && (type==='string' || type==='number')) {
		vnode.attributes.ref = createStringRefProxy(ref, currentComponent);
	}

	applyEventNormalization(vnode);

	return vnode;
}


function cloneElement$1(element, props) {
	var children = [], len = arguments.length - 2;
	while ( len-- > 0 ) children[ len ] = arguments[ len + 2 ];

	if (!isValidElement(element)) { return element; }
	var elementProps = element.attributes || element.props;
	var node = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["a" /* h */])(
		element.nodeName || element.type,
		elementProps,
		element.children || elementProps && elementProps.children
	);
	// Only provide the 3rd argument if needed.
	// Arguments 3+ overwrite element.children in preactCloneElement
	var cloneArgs = [node, props];
	if (children && children.length) {
		cloneArgs.push(children);
	}
	else if (props && props.children) {
		cloneArgs.push(props.children);
	}
	return normalizeVNode(__WEBPACK_IMPORTED_MODULE_1_preact__["d" /* cloneElement */].apply(void 0, cloneArgs));
}


function isValidElement(element) {
	return element && ((element instanceof VNode) || element.$$typeof===REACT_ELEMENT_TYPE);
}


function createStringRefProxy(name, component) {
	return component._refProxies[name] || (component._refProxies[name] = function (resolved) {
		if (component && component.refs) {
			component.refs[name] = resolved;
			if (resolved===null) {
				delete component._refProxies[name];
				component = null;
			}
		}
	});
}


function applyEventNormalization(ref) {
	var nodeName = ref.nodeName;
	var attributes = ref.attributes;

	if (!attributes || typeof nodeName!=='string') { return; }
	var props = {};
	for (var i in attributes) {
		props[i.toLowerCase()] = i;
	}
	if (props.ondoubleclick) {
		attributes.ondblclick = attributes[props.ondoubleclick];
		delete attributes[props.ondoubleclick];
	}
	// for *textual inputs* (incl textarea), normalize `onChange` -> `onInput`:
	if (props.onchange && (nodeName==='textarea' || (nodeName.toLowerCase()==='input' && !/^fil|che|rad/i.test(attributes.type)))) {
		var normalized = props.oninput || 'oninput';
		if (!attributes[normalized]) {
			attributes[normalized] = multihook([attributes[normalized], attributes[props.onchange]]);
			delete attributes[props.onchange];
		}
	}
}


function applyClassName(ref) {
	var attributes = ref.attributes;

	if (!attributes) { return; }
	var cl = attributes.className || attributes.class;
	if (cl) { attributes.className = cl; }
}


function extend(base, props) {
	for (var key in props) {
		if (props.hasOwnProperty(key)) {
			base[key] = props[key];
		}
	}
	return base;
}


function shallowDiffers(a, b) {
	for (var i in a) { if (!(i in b)) { return true; } }
	for (var i$1 in b) { if (a[i$1]!==b[i$1]) { return true; } }
	return false;
}


function findDOMNode(component) {
	return component && component.base || component;
}


function F(){}

function createClass(obj) {
	function cl(props, context) {
		bindAll(this);
		Component$1.call(this, props, context, BYPASS_HOOK);
		newComponentHook.call(this, props, context);
	}

	obj = extend({ constructor: cl }, obj);

	// We need to apply mixins here so that getDefaultProps is correctly mixed
	if (obj.mixins) {
		applyMixins(obj, collateMixins(obj.mixins));
	}
	if (obj.statics) {
		extend(cl, obj.statics);
	}
	if (obj.propTypes) {
		cl.propTypes = obj.propTypes;
	}
	if (obj.defaultProps) {
		cl.defaultProps = obj.defaultProps;
	}
	if (obj.getDefaultProps) {
		cl.defaultProps = obj.getDefaultProps();
	}

	F.prototype = Component$1.prototype;
	cl.prototype = extend(new F(), obj);

	cl.displayName = obj.displayName || 'Component';

	return cl;
}


// Flatten an Array of mixins to a map of method name to mixin implementations
function collateMixins(mixins) {
	var keyed = {};
	for (var i=0; i<mixins.length; i++) {
		var mixin = mixins[i];
		for (var key in mixin) {
			if (mixin.hasOwnProperty(key) && typeof mixin[key]==='function') {
				(keyed[key] || (keyed[key]=[])).push(mixin[key]);
			}
		}
	}
	return keyed;
}


// apply a mapping of Arrays of mixin methods to a component prototype
function applyMixins(proto, mixins) {
	for (var key in mixins) { if (mixins.hasOwnProperty(key)) {
		proto[key] = multihook(
			mixins[key].concat(proto[key] || ARR),
			key==='getDefaultProps' || key==='getInitialState' || key==='getChildContext'
		);
	} }
}


function bindAll(ctx) {
	for (var i in ctx) {
		var v = ctx[i];
		if (typeof v==='function' && !v.__bound && !AUTOBIND_BLACKLIST.hasOwnProperty(i)) {
			(ctx[i] = v.bind(ctx)).__bound = true;
		}
	}
}


function callMethod(ctx, m, args) {
	if (typeof m==='string') {
		m = ctx.constructor.prototype[m];
	}
	if (typeof m==='function') {
		return m.apply(ctx, args);
	}
}

function multihook(hooks, skipDuplicates) {
	return function() {
		var arguments$1 = arguments;
		var this$1 = this;

		var ret;
		for (var i=0; i<hooks.length; i++) {
			var r = callMethod(this$1, hooks[i], arguments$1);

			if (skipDuplicates && r!=null) {
				if (!ret) { ret = {}; }
				for (var key in r) { if (r.hasOwnProperty(key)) {
					ret[key] = r[key];
				} }
			}
			else if (typeof r!=='undefined') { ret = r; }
		}
		return ret;
	};
}


function newComponentHook(props, context) {
	propsHook.call(this, props, context);
	this.componentWillReceiveProps = multihook([propsHook, this.componentWillReceiveProps || 'componentWillReceiveProps']);
	this.render = multihook([propsHook, beforeRender, this.render || 'render', afterRender]);
}


function propsHook(props, context) {
	if (!props) { return; }

	// React annoyingly special-cases single children, and some react components are ridiculously strict about this.
	var c = props.children;
	if (c && Array.isArray(c) && c.length===1) {
		props.children = c[0];

		// but its totally still going to be an Array.
		if (props.children && typeof props.children==='object') {
			props.children.length = 1;
			props.children[0] = props.children;
		}
	}

	// add proptype checking
	if (DEV) {
		var ctor = typeof this==='function' ? this : this.constructor,
			propTypes = this.propTypes || ctor.propTypes;
		var displayName = this.displayName || ctor.name;

		if (propTypes) {
			__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.checkPropTypes(propTypes, props, 'prop', displayName);
		}
	}
}


function beforeRender(props) {
	currentComponent = this;
}

function afterRender() {
	if (currentComponent===this) {
		currentComponent = null;
	}
}



function Component$1(props, context, opts) {
	__WEBPACK_IMPORTED_MODULE_1_preact__["e" /* Component */].call(this, props, context);
	this.state = this.getInitialState ? this.getInitialState() : {};
	this.refs = {};
	this._refProxies = {};
	if (opts!==BYPASS_HOOK) {
		newComponentHook.call(this, props, context);
	}
}
extend(Component$1.prototype = new __WEBPACK_IMPORTED_MODULE_1_preact__["e" /* Component */](), {
	constructor: Component$1,

	isReactComponent: {},

	replaceState: function(state, callback) {
		var this$1 = this;

		this.setState(state, callback);
		for (var i in this$1.state) {
			if (!(i in state)) {
				delete this$1.state[i];
			}
		}
	},

	getDOMNode: function() {
		return this.base;
	},

	isMounted: function() {
		return !!this.base;
	}
});



function PureComponent(props, context) {
	Component$1.call(this, props, context);
}
F.prototype = Component$1.prototype;
PureComponent.prototype = new F();
PureComponent.prototype.isPureReactComponent = true;
PureComponent.prototype.shouldComponentUpdate = function(props, state) {
	return shallowDiffers(this.props, props) || shallowDiffers(this.state, state);
};



var index = {
	version: version,
	DOM: DOM,
	PropTypes: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a,
	Children: Children,
	render: render$1,
	createClass: createClass,
	createFactory: createFactory,
	createElement: createElement,
	cloneElement: cloneElement$1,
	isValidElement: isValidElement,
	findDOMNode: findDOMNode,
	unmountComponentAtNode: unmountComponentAtNode,
	Component: Component$1,
	PureComponent: PureComponent,
	unstable_renderSubtreeIntoContainer: renderSubtreeIntoContainer
};

/* harmony default export */ __webpack_exports__["default"] = (index);
//# sourceMappingURL=preact-compat.es.js.map

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(69)))

/***/ }),
/* 1 */
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
  module.exports = __webpack_require__(70)();
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MemoryRouter__ = __webpack_require__(85);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_0__MemoryRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Prompt__ = __webpack_require__(86);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_1__Prompt__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Redirect__ = __webpack_require__(87);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__Redirect__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Route__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__Route__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Router__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__Router__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__StaticRouter__ = __webpack_require__(88);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__StaticRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Switch__ = __webpack_require__(89);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_6__Switch__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__matchPath__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_7__matchPath__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__withRouter__ = __webpack_require__(90);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_8__withRouter__["a"]; });



















/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (false) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var addLeadingSlash = exports.addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
};

var stripLeadingSlash = exports.stripLeadingSlash = function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
};

var hasBasename = exports.hasBasename = function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
};

var stripBasename = exports.stripBasename = function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
};

var stripTrailingSlash = exports.stripTrailingSlash = function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
};

var parsePath = exports.parsePath = function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var createPath = exports.createPath = function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;


  var path = pathname || '/';

  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

  return path;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _projects = __webpack_require__(15);

var _projects2 = _interopRequireDefault(_projects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	/*
  * searchProjects filters the projects
  */
	filterProjects: function filterProjects(projects, query) {
		console.log("in filterProjects");
		var p = [];
		query = query.toLowerCase(); // lower case better searching
		var qrArr = query.split(' ');
		var fail = false;
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = projects[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var i = _step.value;

				// match against all space separated queries
				fail = false;
				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {
					for (var _iterator2 = qrArr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var q = _step2.value;

						// take single query
						console.log("in filterProjects searach" + JSON.stringify(i['tags']));
						var check = i['name'].toLowerCase().search(q) > -1 || JSON.stringify(i['tags']).toLowerCase().search(q) > -1 || i['date'].toLowerCase().search(q) > -1;
						if (!check) {
							fail = true;
							break;
						}
					}
					// if matched
				} catch (err) {
					_didIteratorError2 = true;
					_iteratorError2 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion2 && _iterator2.return) {
							_iterator2.return();
						}
					} finally {
						if (_didIteratorError2) {
							throw _iteratorError2;
						}
					}
				}

				if (!fail) {
					p.push(i);
				}
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		return p;
	},

	/*
  * get project by id
  */
	getProjectById: function getProjectById(id) {
		var _iteratorNormalCompletion3 = true;
		var _didIteratorError3 = false;
		var _iteratorError3 = undefined;

		try {
			for (var _iterator3 = _projects2.default[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
				var p = _step3.value;

				if (p['id'] === id) {
					return p;
				}
			}
		} catch (err) {
			_didIteratorError3 = true;
			_iteratorError3 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion3 && _iterator3.return) {
					_iterator3.return();
				}
			} finally {
				if (_didIteratorError3) {
					throw _iteratorError3;
				}
			}
		}

		return null;
	},

	/*
  * setSearch and fire
  */
	setSearch: function setSearch(text) {
		var search = document.getElementById('search');
		search.value = text;
		// fire event https://stackoverflow.com/questions/23892547/
		var event = new Event('input', { bubbles: true });
		search.dispatchEvent(event);
	},

	/*
  * focus on search
  */
	focusSearch: function focusSearch() {
		document.getElementById('search').focus();
	},

	/*
  * get domain from link
  * https://stackoverflow.com/questions/8498592/extract-hostname-name-from-string
  */
	getDomain: function getDomain(url) {
		var hostname = void 0;
		//find & remove protocol (http, ftp, etc.) and get hostname
		if (url.indexOf("://") > -1) {
			hostname = url.split('/')[2];
		} else {
			hostname = url.split('/')[0];
		}
		// find & remove port number
		hostname = hostname.split(':')[0];
		// find & remove "?"
		hostname = hostname.split('?')[0];
		return hostname;
	}
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
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

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _redux = __webpack_require__(96);

var manager = function manager() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var action = arguments[1];

	switch (action.type) {
		case 'PUT':
			return action.data;
		case 'CLEAR':
			return {};
		default:
			return state;
	}
};

var store = (0, _redux.createStore)(manager);

exports.default = store;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"app":"app-28iLk","headerDiv":"headerDiv-1d5D6","content":"content-3ko5p","noResults":"noResults-1tIuE","footerDiv":"footerDiv-1YN4O","horizSpace":"horizSpace-293PH"};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.locationsAreEqual = exports.createLocation = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _resolvePathname = __webpack_require__(97);

var _resolvePathname2 = _interopRequireDefault(_resolvePathname);

var _valueEqual = __webpack_require__(101);

var _valueEqual2 = _interopRequireDefault(_valueEqual);

var _PathUtils = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createLocation = exports.createLocation = function createLocation(path, state, key, currentLocation) {
  var location = void 0;
  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = (0, _PathUtils.parsePath)(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);

    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = (0, _resolvePathname2.default)(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
};

var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && (0, _valueEqual2.default)(a.state, b.state);
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _warning = __webpack_require__(3);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createTransitionManager = function createTransitionManager() {
  var prompt = null;

  var setPrompt = function setPrompt(nextPrompt) {
    (0, _warning2.default)(prompt == null, 'A history supports only one prompt at a time');

    prompt = nextPrompt;

    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          (0, _warning2.default)(false, 'A history needs a getUserConfirmation function in order to use a prompt message');

          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  };

  var listeners = [];

  var appendListener = function appendListener(fn) {
    var isActive = true;

    var listener = function listener() {
      if (isActive) fn.apply(undefined, arguments);
    };

    listeners.push(listener);

    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var notifyListeners = function notifyListeners() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(undefined, args);
    });
  };

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
};

exports.default = createTransitionManager;

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






/**
 * The public API for putting history on context.
 */

var Router = function (_React$Component) {
  _inherits(Router, _React$Component);

  function Router() {
    var _temp, _this, _ret;

    _classCallCheck(this, Router);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props.history.location.pathname)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Router.prototype.getChildContext = function getChildContext() {
    return {
      router: _extends({}, this.context.router, {
        history: this.props.history,
        route: {
          location: this.props.history.location,
          match: this.state.match
        }
      })
    };
  };

  Router.prototype.computeMatch = function computeMatch(pathname) {
    return {
      path: '/',
      url: '/',
      params: {},
      isExact: pathname === '/'
    };
  };

  Router.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        history = _props.history;


    __WEBPACK_IMPORTED_MODULE_1_invariant___default()(children == null || __WEBPACK_IMPORTED_MODULE_2_react__["default"].Children.count(children) === 1, 'A <Router> may have only one child element');

    // Do this here so we can setState when a <Redirect> changes the
    // location in componentWillMount. This happens e.g. when doing
    // server rendering using a <StaticRouter>.
    this.unlisten = history.listen(function () {
      _this2.setState({
        match: _this2.computeMatch(history.location.pathname)
      });
    });
  };

  Router.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(this.props.history === nextProps.history, 'You cannot change <Router history>');
  };

  Router.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unlisten();
  };

  Router.prototype.render = function render() {
    var children = this.props.children;

    return children ? __WEBPACK_IMPORTED_MODULE_2_react__["default"].Children.only(children) : null;
  };

  return Router;
}(__WEBPACK_IMPORTED_MODULE_2_react__["default"].Component);

Router.propTypes = {
  history: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired,
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node
};
Router.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object
};
Router.childContextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Router);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path_to_regexp__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path_to_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path_to_regexp__);


var patternCache = {};
var cacheLimit = 10000;
var cacheCount = 0;

var compilePath = function compilePath(pattern, options) {
  var cacheKey = '' + options.end + options.strict;
  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

  if (cache[pattern]) return cache[pattern];

  var keys = [];
  var re = __WEBPACK_IMPORTED_MODULE_0_path_to_regexp___default()(pattern, keys, options);
  var compiledPattern = { re: re, keys: keys };

  if (cacheCount < cacheLimit) {
    cache[pattern] = compiledPattern;
    cacheCount++;
  }

  return compiledPattern;
};

/**
 * Public API for matching a URL pathname to a path pattern.
 */
var matchPath = function matchPath(pathname) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (typeof options === 'string') options = { path: options };

  var _options = options,
      _options$path = _options.path,
      path = _options$path === undefined ? '/' : _options$path,
      _options$exact = _options.exact,
      exact = _options$exact === undefined ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === undefined ? false : _options$strict;

  var _compilePath = compilePath(path, { end: exact, strict: strict }),
      re = _compilePath.re,
      keys = _compilePath.keys;

  var match = re.exec(pathname);

  if (!match) return null;

  var url = match[0],
      values = match.slice(1);

  var isExact = pathname === url;

  if (exact && !isExact) return null;

  return {
    path: path, // the path pattern used to match
    url: path === '/' && url === '' ? '/' : url, // the matched portion of the URL
    isExact: isExact, // whether or not we matched exactly
    params: keys.reduce(function (memo, key, index) {
      memo[key.name] = values[index];
      return memo;
    }, {})
  };
};

/* harmony default export */ __webpack_exports__["a"] = (matchPath);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Tag = __webpack_require__(46);

var _Tag2 = _interopRequireDefault(_Tag);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tag = function (_Component) {
	_inherits(Tag, _Component);

	function Tag() {
		_classCallCheck(this, Tag);

		return _possibleConstructorReturn(this, (Tag.__proto__ || Object.getPrototypeOf(Tag)).apply(this, arguments));
	}

	_createClass(Tag, [{
		key: 'tagClick',
		value: function tagClick(event) {
			var data = event.target.textContent;
			var search = document.getElementById('search');
			var vals = search.value.split(' ');
			var dataIndex = vals.indexOf(data);
			if (dataIndex > -1) {
				// exists, remove it
				vals.splice(dataIndex, 1);
			} else {
				// vals.push(data);
				vals = [data];
			}
			_utils2.default.setSearch(vals.join(' '));
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'span',
				{ className: _Tag2.default.tag, onClick: this.props.clickListener || this.tagClick,
					style: { backgroundColor: this.props.color } },
				this.props.name
			);
		}
	}]);

	return Tag;
}(_react.Component);

exports.default = Tag;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	title: 'Ankush Jain\'s Portfolio'
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var projects = [{
	id: 'Object-Recognition-using-Machine-Learning',
	name: 'Object Recognition using Machine Learning',
	date: '2019',
	weight: 18,
	desc: ['Object Recognition using Machine Learning in digital images and videos.'],
	descdetails: ['Object Recognition using Machine Learning in digital images and videos. Object recognition is refers to a collection of related tasks for identifying objects in digital photographs.'],
	tags: ['Artificial-Intelligence', 'Machine-Learning'],
	github: 'https://github.com/LazyBruceWayne/Object-Recognition-using-Machine-Learning',
	img1: ['https://raw.githubusercontent.com/LazyBruceWayne/Object-Recognition-using-Machine-Learning/master/1.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Object-Recognition-using-Machine-Learning/master/2.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Object-Recognition-using-Machine-Learning/master/3.png']
}, {
	id: 'Trading-with-Artificial-Intelligence',
	name: 'Trading using Artificial Intelligence',
	desc: ['Artificial Intelligence to Predict Stock Price.'],
	descdetails: ['Artificial Intelligence to Predict Stock Price.'],
	date: '2019',
	github: 'https://github.com/LazyBruceWayne/Trading-with-Artificial-Intelligence',
	weight: 17,
	tags: ['Artificial-Intelligence', 'Machine-Learning'],
	img1: ['https://raw.githubusercontent.com/LazyBruceWayne/Trading-with-Artificial-Intelligence/master/ai1.jpg', 'https://raw.githubusercontent.com/LazyBruceWayne/Trading-with-Artificial-Intelligence/master/ai2.jpg', 'https://raw.githubusercontent.com/LazyBruceWayne/Trading-with-Artificial-Intelligence/master/ai3.jpg', 'https://raw.githubusercontent.com/LazyBruceWayne/Trading-with-Artificial-Intelligence/master/ai4.jpg', 'https://raw.githubusercontent.com/LazyBruceWayne/Trading-with-Artificial-Intelligence/master/ai5.jpg']
}, {
	id: 'Decentralized-Voting-App',
	name: 'Decentralized Voting App',
	desc: ['Decentralized voting application on the Ethereum Network with Ganache.'],
	descdetails: ['Decentralized voting application on the Ethereum Network with Ganache.'],
	date: '2019',
	github: 'https://github.com/LazyBruceWayne/Decentralized-Voting-App',
	weight: 16,
	tags: ['DAPP', 'Blockchain', 'Vuejs', 'Nodejs'],
	img1: ['https://raw.githubusercontent.com/LazyBruceWayne/Decentralized-Voting-App/master/1.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Decentralized-Voting-App/master/2.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Decentralized-Voting-App/master/3.png']
}, {
	id: 'payroll_time_tracking',
	name: 'Payroll Time Tracking',
	date: '2019',
	weight: 15,
	desc: ['Control payroll costs with a simple digital clocking system.'],
	descdetails: ['Control payroll costs with a simple digital clocking system.'],
	tags: ['React-Native', 'React', 'Laravel', 'Nodejs'],
	github: 'https://github.com/LazyBruceWayne/payroll_time_tracking',
	img1: ['https://raw.githubusercontent.com/LazyBruceWayne/payroll_time_tracking/master/1.png', 'https://raw.githubusercontent.com/LazyBruceWayne/payroll_time_tracking/master/2.png', 'https://raw.githubusercontent.com/LazyBruceWayne/payroll_time_tracking/master/3.png', 'https://raw.githubusercontent.com/LazyBruceWayne/payroll_time_tracking/master/4.png', 'https://raw.githubusercontent.com/LazyBruceWayne/payroll_time_tracking/master/5.png', 'https://raw.githubusercontent.com/LazyBruceWayne/payroll_time_tracking/master/6.png', 'https://raw.githubusercontent.com/LazyBruceWayne/payroll_time_tracking/master/7.png', 'https://raw.githubusercontent.com/LazyBruceWayne/payroll_time_tracking/master/8.png']
}, {
	id: 'Lazy-CRM',
	name: 'Lazy CRM',
	date: '2019',
	weight: 12,
	desc: ['Customer relationship management system.'],
	descdetails: ['Customer relationship management system.'],
	tags: ['Vuejs', 'Laravel', 'Mysql', 'Nodejs'],
	github: 'https://github.com/LazyBruceWayne/Lazy-CRM',
	img1: ['https://raw.githubusercontent.com/LazyBruceWayne/Lazy-CRM/master/1.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Lazy-CRM/master/2.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Lazy-CRM/master/3.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Lazy-CRM/master/4.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Lazy-CRM/master/5.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Lazy-CRM/master/6.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Lazy-CRM/master/7.png']
}, {
	id: 'Human-Resource-Management',
	name: 'Human Resource Management',
	date: '2019',
	weight: 15,
	desc: ['A human resources management system using ionic...'],
	descdetails: ['A human resources management system or human resources information system is a form of human resources software that combines a number of systems and processes to ...'],
	tags: ['Ionic', 'Angular', 'Laravel', 'Nodejs'],
	github: 'https://github.com/LazyBruceWayne/Human-Resource-Management',
	img1: ['https://raw.githubusercontent.com/LazyBruceWayne/Human-Resource-Management/master/1.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Human-Resource-Management/master/2.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Human-Resource-Management/master/3.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Human-Resource-Management/master/4.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Human-Resource-Management/master/5.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Human-Resource-Management/master/6.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Human-Resource-Management/master/7.png']
}, {
	id: 'ionic_facebook_clone',
	name: 'Ionic Facebook Clone',
	date: '2019',
	weight: 14,
	desc: ['Online social media and social networking service hybrid app..'],
	descdetails: ['Online social media and social networking service hybrid app..'],
	tags: ['Ionic', 'Angular', 'Laravel', 'Nodejs'],
	github: 'https://github.com/LazyBruceWayne/ionic_facebook_clone',
	img1: ['https://raw.githubusercontent.com/LazyBruceWayne/ionic_facebook_clone/master/1.png', 'https://raw.githubusercontent.com/LazyBruceWayne/ionic_facebook_clone/master/2.png', 'https://raw.githubusercontent.com/LazyBruceWayne/ionic_facebook_clone/master/3.png', 'https://raw.githubusercontent.com/LazyBruceWayne/ionic_facebook_clone/master/4.png', 'https://raw.githubusercontent.com/LazyBruceWayne/ionic_facebook_clone/master/5.png', 'https://raw.githubusercontent.com/LazyBruceWayne/ionic_facebook_clone/master/6.png', 'https://raw.githubusercontent.com/LazyBruceWayne/ionic_facebook_clone/master/7.png', 'https://raw.githubusercontent.com/LazyBruceWayne/ionic_facebook_clone/master/8.png', 'https://raw.githubusercontent.com/LazyBruceWayne/ionic_facebook_clone/master/9.png', 'https://raw.githubusercontent.com/LazyBruceWayne/ionic_facebook_clone/master/10.png']
}, {
	id: 'React_native_push_notification',
	name: 'React Native Push Notification',
	date: '2019',
	weight: 13,
	desc: ['Push notification using React native without firebase.'],
	descdetails: ['Push notification using React native without firebase.'],
	tags: ['React-Native', 'React', 'Firbase', 'Nodejs'],
	github: 'https://github.com/LazyBruceWayne/React_native_push_notification',
	img1: ['https://raw.githubusercontent.com/LazyBruceWayne/react_native_push_notification/master/1.jpeg', 'https://raw.githubusercontent.com/LazyBruceWayne/react_native_push_notification/master/2.jpeg', 'https://raw.githubusercontent.com/LazyBruceWayne/react_native_push_notification/master/3.jpeg', 'https://raw.githubusercontent.com/LazyBruceWayne/react_native_push_notification/master/4.jpeg']
}, {
	id: 'React_native_onesignal_notification',
	name: 'React Native Onesignal Notification',
	date: '2019',
	weight: 12,
	desc: ['React native push notification using onesignal.'],
	descdetails: ['React native push notification using onesignal.'],
	tags: ['React-Native', 'React', 'Firbase', 'Nodejs'],
	github: 'https://github.com/LazyBruceWayne/React_native_onesignal_notification',
	img1: ['https://raw.githubusercontent.com/LazyBruceWayne/react_native_onesignal_notification/master/1.jpeg', 'https://raw.githubusercontent.com/LazyBruceWayne/react_native_onesignal_notification/master/2.jpeg', 'https://raw.githubusercontent.com/LazyBruceWayne/react_native_onesignal_notification/master/3.jpeg']
}, {
	id: 'ionic-webview',
	name: 'Ionic Webview',
	date: '2019',
	weight: 12,
	desc: ['Ionic webview.'],
	descdetails: ['Ionic webview.'],
	tags: ['Ionic', 'Laravel', 'Nodejs', 'Vuejs'],
	github: 'https://github.com/LazyBruceWayne/ionic-webview',
	img1: ['https://raw.githubusercontent.com/LazyBruceWayne/ionic-webview/master/1.png', 'https://raw.githubusercontent.com/LazyBruceWayne/ionic-webview/master/2.png']
}, {
	id: 'React-Native-Notes-App',
	name: 'React Native Notes App',
	date: '2019',
	weight: 12,
	desc: ['Notes App is a good helper to manage your schedules and notes.'],
	descdetails: ['Notes App is a good helper to manage your schedules and notes.'],
	tags: ['React-Native', 'React', 'Firbase', 'Nodejs'],
	github: 'https://github.com/LazyBruceWayne/React-Native-Notes-App',
	img1: ['https://raw.githubusercontent.com/LazyBruceWayne/React-Native-Notes-App/master/1.png', 'https://raw.githubusercontent.com/LazyBruceWayne/React-Native-Notes-App/master/2.png', 'https://raw.githubusercontent.com/LazyBruceWayne/React-Native-Notes-App/master/3.png', 'https://raw.githubusercontent.com/LazyBruceWayne/React-Native-Notes-App/master/4.png', 'https://raw.githubusercontent.com/LazyBruceWayne/React-Native-Notes-App/master/5.png']
}, {
	id: 'rent-apartment',
	name: 'Rent Apartment',
	date: '2019',
	weight: 11,
	desc: ['System that provides a common platform for property buyers & sellers to locate properties of interest in India.'],
	descdetails: ['System that provides a common platform for property buyers & sellers to locate properties of interest in India, and source information about all property related issues.'],
	tags: ['Angular', 'Nodejs', 'Expressjs', 'Mongodb', 'MEAN'],
	github: 'https://github.com/LazyBruceWayne/rent-apartment',
	img1: ['https://raw.githubusercontent.com/LazyBruceWayne/rent-apartment/master/1.png', 'https://raw.githubusercontent.com/LazyBruceWayne/rent-apartment/master/2.png', 'https://raw.githubusercontent.com/LazyBruceWayne/rent-apartment/master/3.png', 'https://raw.githubusercontent.com/LazyBruceWayne/rent-apartment/master/4.png', 'https://raw.githubusercontent.com/LazyBruceWayne/rent-apartment/master/5.png', 'https://raw.githubusercontent.com/LazyBruceWayne/rent-apartment/master/6.png', 'https://raw.githubusercontent.com/LazyBruceWayne/rent-apartment/master/7.png', 'https://raw.githubusercontent.com/LazyBruceWayne/rent-apartment/master/8.png', 'https://raw.githubusercontent.com/LazyBruceWayne/rent-apartment/master/11.png']
}, {
	id: 'Angular-Firebase-Ecommerce',
	name: 'Angular Firebase Ecommerce',
	date: '2018',
	weight: 11,
	desc: ['Ecommerce with angular and firebase.'],
	descdetails: ['Ecommerce with angular and firebase.'],
	tags: ['Angular', 'Nodejs', 'Firebase', 'E-commerce'],
	github: 'https://github.com/LazyBruceWayne/Angular-Firebase-Ecommerce',
	img1: ['https://raw.githubusercontent.com/LazyBruceWayne/Angular-Firebase-Ecommerce/master/screen2.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Angular-Firebase-Ecommerce/master/screen3.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Angular-Firebase-Ecommerce/master/screen4.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Angular-Firebase-Ecommerce/master/screen5.png']
}, {
	id: 'React-firebase-ecommerce',
	name: 'React Firebase Ecommerce',
	date: '2019',
	weight: 11,
	desc: ['Online Shopping Site for Fashion & Lifestyle developed with react and firebase.'],
	descdetails: ['Online Shopping Site for Fashion & Lifestyle developed with react and firebase.'],
	tags: ['React', 'Nodejs', 'Firebase', 'E-commerce'],
	github: 'https://github.com/LazyBruceWayne/React-firebase-ecommerce',
	img1: ['https://raw.githubusercontent.com/LazyBruceWayne/React-firebase-ecommerce/master/1.png', 'https://raw.githubusercontent.com/LazyBruceWayne/React-firebase-ecommerce/master/2.png', 'https://raw.githubusercontent.com/LazyBruceWayne/React-firebase-ecommerce/master/3.png', 'https://raw.githubusercontent.com/LazyBruceWayne/React-firebase-ecommerce/master/4.png', 'https://raw.githubusercontent.com/LazyBruceWayne/React-firebase-ecommerce/master/5.png']
}, {
	id: 'Buy-Online-Domain-Name',
	name: 'Domain Name Portal',
	date: '2019',
	weight: 10,
	desc: ['Search and buy Brandable domains names build with react and laravel.'],
	descdetails: ['Search and buy Brandable domains for your company and products system build with react and laravel.'],
	tags: ['React', 'Nodejs', 'Laravel', 'Mysql'],
	github: 'https://github.com/LazyBruceWayne/Buy-Online-Domain-Name',
	img1: ['https://raw.githubusercontent.com/LazyBruceWayne/Buy-Online-Domain-Name/master/1.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Buy-Online-Domain-Name/master/2.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Buy-Online-Domain-Name/master/3.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Buy-Online-Domain-Name/master/4.png']
}, {
	id: 'Lazy-eCommerce',
	name: 'Lazy eCommerce',
	date: '2017',
	weight: 9,
	desc: ['Single / Multi vendor ecommerce.'],
	descdetails: ['Single / Multi vendor ecommerce.'],
	tags: ['laravel', 'mysql', 'E-commerce'],
	github: 'https://github.com/LazyBruceWayne/Lazy-eCommerce',
	img1: ['https://raw.githubusercontent.com/LazyBruceWayne/Lazy-eCommerce/master/1.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Lazy-eCommerce/master/2.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Lazy-eCommerce/master/3.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Lazy-eCommerce/master/4.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Lazy-eCommerce/master/5.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Lazy-eCommerce/master/6.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Lazy-eCommerce/master/7.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Lazy-eCommerce/master/8.png']
}, {
	id: 'developers_portfolio',
	name: 'Developers Portfolio',
	date: '2019',
	weight: 10,
	desc: ['From open source to business, you can host and review code, manage projects.'],
	descdetails: ['From open source to business, you can host and review code, manage projects, and build software alongside many developers.'],
	tags: ['React', 'Nodejs', 'Expressjs', 'Mongodb', 'MERN'],
	github: 'https://github.com/LazyBruceWayne/developers_portfolio',
	img1: ['https://raw.githubusercontent.com/LazyBruceWayne/developers_portfolio/master/1.png', 'https://raw.githubusercontent.com/LazyBruceWayne/developers_portfolio/master/2.png', 'https://raw.githubusercontent.com/LazyBruceWayne/developers_portfolio/master/3.png', 'https://raw.githubusercontent.com/LazyBruceWayne/developers_portfolio/master/4.png', 'https://raw.githubusercontent.com/LazyBruceWayne/developers_portfolio/master/5.png', 'https://raw.githubusercontent.com/LazyBruceWayne/developers_portfolio/master/6.png', 'https://raw.githubusercontent.com/LazyBruceWayne/developers_portfolio/master/7.png', 'https://raw.githubusercontent.com/LazyBruceWayne/developers_portfolio/master/8.png', 'https://raw.githubusercontent.com/LazyBruceWayne/developers_portfolio/master/11.png', 'https://raw.githubusercontent.com/LazyBruceWayne/developers_portfolio/master/10.png']
}, {
	id: 'Online-video-platform',
	name: 'Online Video Platform',
	date: '2018',
	weight: 9,
	desc: ['An online video platform, provided by a video hosting service, enables users to upload, convert, store and play back video.'],
	descdetails: ['An online video platform, provided by a video hosting service, enables users to upload, convert, store and play back video content on the Internet..'],
	tags: ['React', 'Nodejs', 'Expressjs', 'Mongodb', 'MERN'],
	github: 'https://github.com/LazyBruceWayne/Online-video-platform',
	img1: ['https://raw.githubusercontent.com/LazyBruceWayne/Online-video-platform/master/1.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Online-video-platform/master/2.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Online-video-platform/master/3.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Online-video-platform/master/4.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Online-video-platform/master/5.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Online-video-platform/master/6.png']
}, {
	id: 'MERN-Social-Media',
	name: 'MERN Social Media',
	date: '2018',
	weight: 8,
	desc: ['User-generated content, such as text posts or comments, digital photos or videos, and data..'],
	descdetails: ['Interactive Web 2.0 Internet-based applications. User-generated content, such as text posts or comments, digital photos or videos, and data..'],
	tags: ['React', 'Nodejs', 'Expressjs', 'Mongodb', 'MERN'],
	github: 'https://github.com/LazyBruceWayne/MERN-Social-Media',
	img1: ['https://raw.githubusercontent.com/LazyBruceWayne/MERN-Social-Media/master/1.png', 'https://raw.githubusercontent.com/LazyBruceWayne/MERN-Social-Media/master/2.png', 'https://raw.githubusercontent.com/LazyBruceWayne/MERN-Social-Media/master/3.png', 'https://raw.githubusercontent.com/LazyBruceWayne/MERN-Social-Media/master/4.png', 'https://raw.githubusercontent.com/LazyBruceWayne/MERN-Social-Media/master/5.png', 'https://raw.githubusercontent.com/LazyBruceWayne/MERN-Social-Media/master/6.png']
}, {
	id: 'Youtube-ideas',
	name: 'Youtube ideas',
	date: '2018',
	weight: 7,
	desc: ['YouTube video ideas Forum.'],
	descdetails: ['YouTube video ideas Forum.'],
	tags: ['React', 'Nodejs', 'Expressjs', 'Mongodb', 'MERN'],
	github: 'https://github.com/LazyBruceWayne/youtube_ideas',
	img1: ['https://raw.githubusercontent.com/LazyBruceWayne/youtube_ideas/master/1.png', 'https://raw.githubusercontent.com/LazyBruceWayne/youtube_ideas/master/2.png', 'https://raw.githubusercontent.com/LazyBruceWayne/youtube_ideas/master/3a.png', 'https://raw.githubusercontent.com/LazyBruceWayne/youtube_ideas/master/3b.png', 'https://raw.githubusercontent.com/LazyBruceWayne/youtube_ideas/master/4.png']
}, {
	id: 'MERN-JWT-Auth',
	name: 'MERN JWT Auth',
	date: '2018',
	weight: 6,
	desc: ['The MERN (MongoDB, Express.js, React JS, and Node.js) stack JWT Authentication project.'],
	descdetails: ['The MERN (MongoDB, Express.js, React JS, and Node.js) stack JWT Authentication project.'],
	tags: ['React', 'Nodejs', 'Expressjs', 'Mongodb', 'MERN'],
	github: 'https://github.com/LazyBruceWayne/MERN-JWT-Auth',
	img1: ['https://raw.githubusercontent.com/LazyBruceWayne/MERN-JWT-Auth/master/1.png', 'https://raw.githubusercontent.com/LazyBruceWayne/MERN-JWT-Auth/master/2.png', 'https://raw.githubusercontent.com/LazyBruceWayne/MERN-JWT-Auth/master/3.png', 'https://raw.githubusercontent.com/LazyBruceWayne/MERN-JWT-Auth/master/4.png', 'https://raw.githubusercontent.com/LazyBruceWayne/MERN-JWT-Auth/master/5.png', 'https://raw.githubusercontent.com/LazyBruceWayne/MERN-JWT-Auth/master/6.png']
}, {
	id: 'MEAN-Online-Store',
	name: 'MEAN Online Store',
	date: '2018',
	weight: 6,
	desc: ['Online Store Using Angular, MongoDB, ExpressJS,NodeJS.'],
	descdetails: ['Online Store Using Angular, MongoDB, ExpressJS,NodeJS.'],
	tags: ['Angular', 'Nodejs', 'Expressjs', 'Mongodb', 'MEAN'],
	github: 'https://github.com/LazyBruceWayne/MEAN-Online-Store',
	img1: ['https://raw.githubusercontent.com/LazyBruceWayne/MEAN-Online-Store/master/screencapture-1.png', 'https://raw.githubusercontent.com/LazyBruceWayne/MEAN-Online-Store/master/screencapture-2.png']
}, {
	id: 'Spring-Boot-React-Social-Auth',
	name: 'Spring Boot React Social Auth',
	date: '2018',
	weight: 6,
	desc: ['Spring-Boot and React Social Auth Login system. Login using github, google and facebook.'],
	descdetails: ['Spring-Boot and React Social Auth Login system. Login using github, google and facebook.'],
	tags: ['React', 'Springboot', 'Mysql', 'Java'],
	github: 'https://github.com/LazyBruceWayne/Spring-Boot-React-Social-Auth',
	img1: ['https://raw.githubusercontent.com/LazyBruceWayne/Spring-Boot-React-Social-Auth/master/1.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Spring-Boot-React-Social-Auth/master/2.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Spring-Boot-React-Social-Auth/master/3.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Spring-Boot-React-Social-Auth/master/4.png']
}, {
	id: 'Payroll-System',
	name: 'Payroll System',
	date: '2019',
	weight: 16,
	desc: ['Payroll system involves everything that has to do with the payment of employees.'],
	descdetails: ['Payroll system involves everything that has to do with the payment of employees and the filing of employment taxes. This includes keeping track of hours, calculating wages, withholding taxes and other deductions, printing and delivering checks and paying employment taxes to the government.'],
	tags: ['JavaFX', 'JavaSwing', 'Mysql', 'Java'],
	github: 'https://github.com/LazyBruceWayne/Payroll-System',
	img1: ['https://raw.githubusercontent.com/LazyBruceWayne/Payroll-System/master/1.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Payroll-System/master/2.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Payroll-System/master/3.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Payroll-System/master/4.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Payroll-System/master/5.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Payroll-System/master/6.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Payroll-System/master/7.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Payroll-System/master/8.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Payroll-System/master/9.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Payroll-System/master/10.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Payroll-System/master/11.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Payroll-System/master/12.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Payroll-System/master/13.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Payroll-System/master/14.png']
}, {
	id: 'india_mart_clone',
	name: 'India Mart Clone',
	date: '2017',
	weight: 5,
	desc: ['online marketplace that assists manufacturers, suppliers & exporters to trade with each other at a common, reliable & transparent platform.'],
	descdetails: ['online marketplace that assists manufacturers, suppliers & exporters to trade with each other at a common, reliable & transparent platform.'],
	tags: ['laravel', 'mysql'],
	github: 'https://github.com/LazyBruceWayne/india_mart_clone',
	img1: ['https://raw.githubusercontent.com/LazyBruceWayne/india_mart_clone/master/OM1.png', 'https://raw.githubusercontent.com/LazyBruceWayne/india_mart_clone/master/OM2.png', 'https://raw.githubusercontent.com/LazyBruceWayne/india_mart_clone/master/OM3.png', 'https://raw.githubusercontent.com/LazyBruceWayne/india_mart_clone/master/OM4.png']
}, {
	id: 'Jewellery-Store',
	name: 'Jewellery Store',
	date: '2017',
	weight: 5,
	desc: ['Buy Gold and Diamond Jewellery Online in India with the latest jewellery designs..'],
	descdetails: ['Buy Gold and Diamond Jewellery Online in India with the latest jewellery designs..'],
	tags: ['laravel', 'mysql', 'E-commerce'],
	github: 'https://github.com/LazyBruceWayne/jewellery_store',
	img1: ['https://raw.githubusercontent.com/LazyBruceWayne/jewellery_store/master/a1.png', 'https://raw.githubusercontent.com/LazyBruceWayne/jewellery_store/master/a2.png', 'https://raw.githubusercontent.com/LazyBruceWayne/jewellery_store/master/a3.png', 'https://raw.githubusercontent.com/LazyBruceWayne/jewellery_store/master/a4.png', 'https://raw.githubusercontent.com/LazyBruceWayne/jewellery_store/master/a5.png', 'https://raw.githubusercontent.com/LazyBruceWayne/jewellery_store/master/a6.png']
}, {
	id: 'Make-My-Trip-Clone',
	name: 'Make My Trip Clone',
	date: '2017',
	weight: 5,
	desc: ['Find best deals on Banglow,Farm house,Hostel,Flats,Row houses,Warehouse and Office Space for India & International.'],
	descdetails: ['Find best deals on Banglow,Farm house,Hostel,Flats,Row houses,Warehouse and Office Space for India & International.'],
	tags: ['laravel', 'mysql'],
	github: 'https://github.com/LazyBruceWayne/make_my_trip_clone',
	img1: ['https://raw.githubusercontent.com/LazyBruceWayne/make_my_trip_clone/master/sh1.png', 'https://raw.githubusercontent.com/LazyBruceWayne/make_my_trip_clone/master/sh2.png', 'https://raw.githubusercontent.com/LazyBruceWayne/make_my_trip_clone/master/sh3.png', 'https://raw.githubusercontent.com/LazyBruceWayne/make_my_trip_clone/master/sh4.png', 'https://raw.githubusercontent.com/LazyBruceWayne/make_my_trip_clone/master/sh5.png']
}, {
	id: 'best_deals_finder',
	name: 'Best Deals Finder',
	date: '2017',
	weight: 5,
	desc: ['Now SAVE MORE! Get the latest and up-to-date coupons & cashback offers on some of India top franchise.'],
	descdetails: ['Now SAVE MORE! Get the latest and up-to-date coupons & cashback offers on some of India top franchise.'],
	tags: ['laravel', 'mysql'],
	github: 'https://github.com/LazyBruceWayne/best_deals_finder',
	img1: []
}, {
	id: 'Fantasy-Sports-App',
	name: 'Fantasy Sports App',
	date: '2018',
	weight: 4,
	desc: [' App offers users huge pools of daily and weekly fantasy sports contests in football and more.'],
	descdetails: ['This App offers users huge pools of daily and weekly fantasy sports contests in football, baseball, basketball, hockey, golf, soccer for many prizes. The platform allows users to challenge friends or compete against other users in any sport and track the results in league-exclusive leaderboards.'],
	tags: ['laravel', 'mysql'],
	github: 'https://github.com/LazyBruceWayne/Fantasy-Sports-App',
	img1: ['https://raw.githubusercontent.com/LazyBruceWayne/Fantasy-Sports-App/master/1.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Fantasy-Sports-App/master/2.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Fantasy-Sports-App/master/3.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Fantasy-Sports-App/master/4.png']
}, {
	id: 'Youtube-Video-Poster',
	name: 'Youtube Video Poster',
	date: '2018',
	weight: 4,
	desc: ['Upload videos on youtube on multiple channels using this app.'],
	descdetails: ['Upload videos on youtube on multiple channels using this app.'],
	tags: ['laravel', 'mysql'],
	github: 'https://github.com/LazyBruceWayne/Youtube-Video-Poster',
	img1: ['https://raw.githubusercontent.com/LazyBruceWayne/Youtube-Video-Poster/master/1.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Youtube-Video-Poster/master/2.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Youtube-Video-Poster/master/3.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Youtube-Video-Poster/master/4.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Youtube-Video-Poster/master/5.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Youtube-Video-Poster/master/6.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Youtube-Video-Poster/master/7.png']
}, {
	id: 'Lazy-HRMS',
	name: 'Lazy-HRMS',
	date: '2018',
	weight: 4,
	desc: ['Human Resource Management System.'],
	descdetails: ['Human Resource Management System.'],
	tags: ['laravel', 'mysql', 'Codeigniter'],
	github: 'https://github.com/LazyBruceWayne/Lazy-HRMS',
	img1: ['https://raw.githubusercontent.com/LazyBruceWayne/Lazy-HRMS/master/15.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Lazy-HRMS/master/2.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Lazy-HRMS/master/3.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Lazy-HRMS/master/4.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Lazy-HRMS/master/5.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Lazy-HRMS/master/6.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Lazy-HRMS/master/7.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Lazy-HRMS/master/8.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Lazy-HRMS/master/9.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Lazy-HRMS/master/10.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Lazy-HRMS/master/11.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Lazy-HRMS/master/12.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Lazy-HRMS/master/13.png', 'https://raw.githubusercontent.com/LazyBruceWayne/Lazy-HRMS/master/14.png']
}];

/*
 * Sort and return
 */
function compareDates(a, b) {
	// current year
	var year = new Date().getFullYear();
	// base year - when I started development
	var baseYear = 2013 - 1;

	// date value generator
	var fd = function fd(date) {
		if (date.indexOf('present') > -1) return year - baseYear + 1; // largest, so +1
		else {
				for (var yr = year; yr > baseYear; yr--) {
					if (date.indexOf(yr.toString().substring(3)) > -1) {
						return yr - baseYear;
					}
				}
			}
	};

	var wta = fd(a.date) + (a.weight || 0);
	var wtb = fd(b.date) + (b.weight || 0);

	if (wta < wtb) {
		return 1;
	} else if (wta > wtb) {
		return -1;
	} else {
		// a comes before b in original array
		// let comp = (a.weight || 5) <= (b.weight || 5);
		return -1; // (comp) ? 1 : -1;
	}
}

projects.sort(compareDates);

exports.default = projects;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = LightenDarkenColor;
// https://css-tricks.com/snippets/javascript/lighten-darken-color/

function LightenDarkenColor(col, amt) {

	var usePound = false;

	if (col[0] == "#") {
		col = col.slice(1);
		usePound = true;
	}

	var num = parseInt(col, 16);

	var r = (num >> 16) + amt;

	if (r > 255) r = 255;else if (r < 0) r = 0;

	var b = (num >> 8 & 0x00FF) + amt;

	if (b > 255) b = 255;else if (b < 0) b = 0;

	var g = (num & 0x0000FF) + amt;

	if (g > 255) g = 255;else if (g < 0) g = 0;

	return (usePound ? "#" : "") + (g | b << 8 | r << 16).toString(16);
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = pattern;

var _geopattern = __webpack_require__(19);

var _geopattern2 = _interopRequireDefault(_geopattern);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function pattern(key) {
	return _geopattern2.default.generate(key, {
		baseColor: '#d2f9a8' // #f0fab8
	});
}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;

function isPlainObject(obj) {
	if (!obj || toString.call(obj) !== '[object Object]' || obj.nodeType || obj.setInterval)
		return false;

	var has_own_constructor = hasOwn.call(obj, 'constructor');
	var has_is_property_of_method = hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
	// Not own constructor property must be Object
	if (obj.constructor && !has_own_constructor && !has_is_property_of_method)
		return false;

	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;
	for ( key in obj ) {}

	return key === undefined || hasOwn.call( obj, key );
};

module.exports = function extend() {
	var options, name, src, copy, copyIsArray, clone,
	    target = arguments[0] || {},
	    i = 1,
	    length = arguments.length,
	    deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && typeof target !== "function") {
		target = {};
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( isPlainObject(copy) || (copyIsArray = Array.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray(src) ? src : [];

					} else {
						clone = src && isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

(function ($) {

'use strict';

var Pattern = __webpack_require__(52);

/*
 * Normalize arguments, if not given, to:
 * string: (new Date()).toString()
 * options: {}
 */
function optArgs(cb) {
	return function (string, options) {
		if (typeof string === 'object') {
			options = string;
			string = null;
		}
		if (string === null || string === undefined) {
			string = (new Date()).toString();
		}
		if (!options) {
			options = {};
		}

		return cb.call(this, string, options);
	};
}

var GeoPattern = module.exports = {
	generate: optArgs(function (string, options) {
		return new Pattern(string, options);
	})
};

if ($) {

	// If jQuery, add plugin
	$.fn.geopattern = optArgs(function (string, options) {
		return this.each(function () {
			var titleSha = $(this).attr('data-title-sha');
			if (titleSha) {
				options = $.extend({
					hash: titleSha
				}, options);
			}
			var pattern = GeoPattern.generate(string, options);
			$(this).css('background-image', pattern.toDataUrl());
		});
	});

}

}(typeof jQuery !== 'undefined' ? jQuery : null));


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};

var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};

var getConfirmation = exports.getConfirmation = function getConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
var supportsHistory = exports.supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

  return window.history && 'pushState' in window.history;
};

/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */
var supportsPopStateOnHashChange = exports.supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};

/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */
var isExtraneousPopstateEvent = exports.isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(66);


/** Built-in value references. */
var Symbol = __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Symbol;

/* harmony default export */ __webpack_exports__["a"] = (Symbol);


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getPrototype_js__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__ = __webpack_require__(67);




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__["a" /* default */])(value) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["a" /* default */])(value) != objectTag) {
    return false;
  }
  var proto = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__getPrototype_js__["a" /* default */])(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ __webpack_exports__["a"] = (isPlainObject);


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var isModifiedEvent = function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

/**
 * The public API for rendering a history-aware <a>.
 */

var Link = function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    var _temp, _this, _ret;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.props.onClick) _this.props.onClick(event);

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore right clicks
      !_this.props.target && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();

          var history = _this.context.router.history;
          var _this$props = _this.props,
              replace = _this$props.replace,
              to = _this$props.to;


          if (replace) {
            history.replace(to);
          } else {
            history.push(to);
          }
        }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Link.prototype.render = function render() {
    var _props = this.props,
        replace = _props.replace,
        to = _props.to,
        props = _objectWithoutProperties(_props, ['replace', 'to']); // eslint-disable-line no-unused-vars

    var href = this.context.router.history.createHref(typeof to === 'string' ? { pathname: to } : to);

    return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('a', _extends({}, props, { onClick: this.handleClick, href: href }));
  };

  return Link;
}(__WEBPACK_IMPORTED_MODULE_0_react__["default"].Component);

Link.propTypes = {
  onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  target: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  replace: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  to: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object]).isRequired
};
Link.defaultProps = {
  replace: false
};
Link.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    history: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
      push: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
      replace: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
      createHref: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
    }).isRequired
  }).isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Link);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__matchPath__ = __webpack_require__(12);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






/**
 * The public API for matching a single path and rendering.
 */

var Route = function (_React$Component) {
  _inherits(Route, _React$Component);

  function Route() {
    var _temp, _this, _ret;

    _classCallCheck(this, Route);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props, _this.context.router)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Route.prototype.getChildContext = function getChildContext() {
    return {
      router: _extends({}, this.context.router, {
        route: {
          location: this.props.location || this.context.router.route.location,
          match: this.state.match
        }
      })
    };
  };

  Route.prototype.computeMatch = function computeMatch(_ref, _ref2) {
    var computedMatch = _ref.computedMatch,
        location = _ref.location,
        path = _ref.path,
        strict = _ref.strict,
        exact = _ref.exact;
    var route = _ref2.route;

    if (computedMatch) return computedMatch; // <Switch> already computed the match for us

    var pathname = (location || route.location).pathname;

    return path ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__matchPath__["a" /* default */])(pathname, { path: path, strict: strict, exact: exact }) : route.match;
  };

  Route.prototype.componentWillMount = function componentWillMount() {
    var _props = this.props,
        component = _props.component,
        render = _props.render,
        children = _props.children;


    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(component && render), 'You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored');

    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(component && children), 'You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored');

    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(render && children), 'You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored');
  };

  Route.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(nextProps.location && !this.props.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(!nextProps.location && this.props.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');

    this.setState({
      match: this.computeMatch(nextProps, nextContext.router)
    });
  };

  Route.prototype.render = function render() {
    var match = this.state.match;
    var _props2 = this.props,
        children = _props2.children,
        component = _props2.component,
        render = _props2.render;
    var _context$router = this.context.router,
        history = _context$router.history,
        route = _context$router.route,
        staticContext = _context$router.staticContext;

    var location = this.props.location || route.location;
    var props = { match: match, location: location, history: history, staticContext: staticContext };

    return component ? // component prop gets first priority, only called if there's a match
    match ? __WEBPACK_IMPORTED_MODULE_1_react__["default"].createElement(component, props) : null : render ? // render prop is next, only called if there's a match
    match ? render(props) : null : children ? // children come last, always called
    typeof children === 'function' ? children(props) : !Array.isArray(children) || children.length ? // Preact defaults to empty children array
    __WEBPACK_IMPORTED_MODULE_1_react__["default"].Children.only(children) : null : null;
  };

  return Route;
}(__WEBPACK_IMPORTED_MODULE_1_react__["default"].Component);

Route.propTypes = {
  computedMatch: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object, // private, from <Switch>
  path: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  exact: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  strict: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  component: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  render: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node]),
  location: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object
};
Route.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
    history: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired,
    route: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired,
    staticContext: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object
  })
};
Route.childContextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Route);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compose;
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ActionTypes; });
/* harmony export (immutable) */ __webpack_exports__["a"] = createStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_symbol_observable__);



/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT'

  /**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */
};function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = observable, _ref2;
}

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 28 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = registerSW;
// registers SW
function registerSW() {
	if ('serviceWorker' in navigator) {
		var prefix = window.location.host.indexOf('localhost') < 0 ? '/work' : '';
		navigator.serviceWorker.register(prefix + '/sw.js', { scope: prefix + '/' }).then(function (registration) {
			console.log('Service Worker Registered');
		});
		navigator.serviceWorker.ready.then(function (registration) {
			console.log('Service Worker Ready');
		});
	}
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _Home = __webpack_require__(8);

var _Home2 = _interopRequireDefault(_Home);

var _Detail = __webpack_require__(47);

var _Detail2 = _interopRequireDefault(_Detail);

var _Page = __webpack_require__(41);

var _Page2 = _interopRequireDefault(_Page);

var _Tag = __webpack_require__(13);

var _Tag2 = _interopRequireDefault(_Tag);

var _GitHubStar = __webpack_require__(34);

var _GitHubStar2 = _interopRequireDefault(_GitHubStar);

var _state = __webpack_require__(7);

var _state2 = _interopRequireDefault(_state);

var _pattern = __webpack_require__(17);

var _pattern2 = _interopRequireDefault(_pattern);

var _ligthenDarkenColor = __webpack_require__(16);

var _ligthenDarkenColor2 = _interopRequireDefault(_ligthenDarkenColor);

var _config = __webpack_require__(14);

var _config2 = _interopRequireDefault(_config);

var _reactDom = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectDetail = function (_Component) {
	_inherits(ProjectDetail, _Component);

	function ProjectDetail(props) {
		_classCallCheck(this, ProjectDetail);

		var _this = _possibleConstructorReturn(this, (ProjectDetail.__proto__ || Object.getPrototypeOf(ProjectDetail)).call(this, props));

		_this.state = {
			project: _utils2.default.getProjectById(_this.props.match.params.id)
		};
		return _this;
	}

	_createClass(ProjectDetail, [{
		key: 'tagClick',
		value: function tagClick(event) {
			var tag = event.target.textContent;
			_state2.default.dispatch({ type: 'PUT', data: {
					search: tag
				} });
			window.location.href = '#';
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			console.log('I was triggered during render');
			// let pattern = patternGen(this.state.project.name);
			// document.getElementsByClassName(styles.name)[0].style.color = ldColor(pattern.color, -90);
			// // document's title
			// document.title = this.state.project.name + ' · ' + config.title;
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var project = this.state.project;
			// 404
			if (project === null) {
				return _react2.default.createElement(_Page2.default, null);
			}
			// color (state)
			this.state.color = (0, _pattern2.default)(this.state.project.name).color;
			var topColor = (0, _ligthenDarkenColor2.default)(this.state.color, -50);
			var tagColor = (0, _ligthenDarkenColor2.default)(this.state.color, 15);
			// tags and websites
			var tagsDOM = project.tags.map(function (t) {
				return _react2.default.createElement(_Tag2.default, { key: t, name: t, clickListener: _this2.tagClick, color: tagColor });
			});
			var websitesDOM = [];
			if (project.websites) {
				websitesDOM = project.websites.map(function (w) {
					return _react2.default.createElement(
						'div',
						{ key: w },
						'Website: ',
						_react2.default.createElement(
							'a',
							{ href: w, target: '_blank' },
							_utils2.default.getDomain(w)
						)
					);
				});
			}

			// github
			var gh = "";
			if (project.github) {
				var re = new RegExp('.*github[^\/]*\/([^\/]+(\/[^\/\#]+)?).*$', 'i');
				var found = project.github.match(re);
				gh = found[1];
			}

			// desc
			var descDOM = project.descdetails.map(function (d, index) {
				return _react2.default.createElement(
					'p',
					{ key: project.id + "" + index },
					d
				);
			});
			var descDOMImg = project.img1.map(function (d, index) {
				return _react2.default.createElement('img', { src: d, className: _Detail2.default.imgsty });
			});

			// render
			return _react2.default.createElement(
				'div',
				{ className: [_Home2.default.app, _Detail2.default.page].join(' ') },
				_react2.default.createElement(
					'div',
					{ className: _Detail2.default.name, style: { color: topColor } },
					_react2.default.createElement(
						'a',
						{ href: '#', className: _Detail2.default.backLink },
						'\u2190'
					),
					project.name
				),
				_react2.default.createElement('div', { className: _Detail2.default.hr }),
				project.github && _react2.default.createElement(
					'div',
					{ className: _Detail2.default.ghButton },
					_react2.default.createElement(_GitHubStar2.default, { github: project.githubRepo || project.github })
				),
				_react2.default.createElement(
					'div',
					{ className: _Detail2.default.links },
					project.github && _react2.default.createElement(
						'div',
						null,
						'GitHub: ',
						_react2.default.createElement(
							'a',
							{ href: project.github, target: '_blank' },
							gh
						)
					),
					websitesDOM
				),
				_react2.default.createElement(
					'div',
					{ className: _Detail2.default.desc },
					descDOM,
					_react2.default.createElement(
						'div',
						{ 'class': 'row' },
						_react2.default.createElement(
							'div',
							{ 'class': 'column' },
							descDOMImg
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: _Detail2.default.tags },
					tagsDOM
				),
				_react2.default.createElement(
					'footer',
					{ className: _Detail2.default.footerDiv },
					_react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
							'span',
							{ className: _Detail2.default.horizSpace },
							'Copyright @ Ankush Jain 2019'
						)
					)
				)
			);
		}
	}]);

	return ProjectDetail;
}(_react.Component);

exports.default = ProjectDetail;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _geopattern = __webpack_require__(19);

var _geopattern2 = _interopRequireDefault(_geopattern);

var _Search = __webpack_require__(38);

var _Search2 = _interopRequireDefault(_Search);

var _Header = __webpack_require__(35);

var _Header2 = _interopRequireDefault(_Header);

var _Project = __webpack_require__(37);

var _Project2 = _interopRequireDefault(_Project);

var _Home = __webpack_require__(8);

var _Home2 = _interopRequireDefault(_Home);

var _reactAddToHomescreen = __webpack_require__(72);

var _reactAddToHomescreen2 = _interopRequireDefault(_reactAddToHomescreen);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _projects = __webpack_require__(15);

var _projects2 = _interopRequireDefault(_projects);

var _state = __webpack_require__(7);

var _state2 = _interopRequireDefault(_state);

var _config = __webpack_require__(14);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
	_inherits(App, _Component);

	function App(props) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

		_this.state = {
			searchText: '',
			projects: _projects2.default
		};
		_this.inputChange = _this.inputChange.bind(_this);
		return _this;
	}

	_createClass(App, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			// set header color
			this.setHeaderColor();
			// document's title
			document.title = _config2.default.title;

			// use query param
			// generally passed manually so return
			var searchText = this.props.location.search.substring(1);
			if (searchText) {
				// optimize, only needed when search has something
				_utils2.default.setSearch(searchText);
				return;
			}
			// use internal state
			var st = _state2.default.getState();
			if (st.search !== undefined && st.search) {
				_utils2.default.setSearch(st.search);
				return; // let setState handle scroll
			}
			// scroll state
			if (st.yOffset !== undefined) {
				window.scrollTo(0, st.yOffset);
			}
			// clear state
			_state2.default.dispatch({ type: 'CLEAR' });
		}

		/*
   * sets a random color to header text
   */

	}, {
		key: 'setHeaderColor',
		value: function setHeaderColor() {
			var str = Date.now().toString();
			var pattern = _geopattern2.default.generate(str, {
				baseColor: '#8e354b'
			});
			document.getElementsByClassName(_Home2.default.headerDiv)[0].style.color = pattern.color;
		}
	}, {
		key: 'inputChange',
		value: function inputChange(event) {
			// something was added in the filter. We had AND matching right now.
			var useState = event.target.value.indexOf(this.state.searchText) == 0;
			this.setState({
				searchText: event.target.value,
				projects: _utils2.default.filterProjects(useState ? this.state.projects : _projects2.default, event.target.value)
			}, function () {
				_utils2.default.focusSearch();
				// set scroll
				var st = _state2.default.getState();
				if (st.yOffset !== undefined) {
					window.scrollTo(0, st.yOffset);
				}
				_state2.default.dispatch({ type: 'CLEAR' });
			});
		}
	}, {
		key: 'handleAddToHomescreenClick',
		value: function handleAddToHomescreenClick() {
			alert('\n\t    1. Open Share menu\n\t    2. Tap on "Add to Home Screen" button');
		}
	}, {
		key: 'render',
		value: function render() {
			var projectDOM = this.state.projects.map(function (p) {
				return _react2.default.createElement(_Project2.default, _extends({ key: p.id }, p));
			});
			// empty list of projects
			if (projectDOM.length === 0) {
				projectDOM = _react2.default.createElement(
					'div',
					{ className: _Home2.default.noResults },
					'No results found'
				);
			}
			return _react2.default.createElement(
				'div',
				{ className: _Home2.default.app },
				_react2.default.createElement(
					'header',
					{ className: _Home2.default.headerDiv },
					_react2.default.createElement(_Header2.default, null),
					_react2.default.createElement(_Search2.default, { changeHandler: this.inputChange })
				),
				_react2.default.createElement(
					'div',
					{ className: _Home2.default.content },
					projectDOM
				),
				_react2.default.createElement(_reactAddToHomescreen2.default, { onAddToHomescreenClick: this.handleAddToHomescreenClick }),
				_react2.default.createElement(
					'footer',
					{ className: _Home2.default.footerDiv },
					_react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
							'span',
							{ className: _Home2.default.horizSpace },
							'Copyright @ Ankush Jain 2019'
						)
					)
				)
			);
		}
	}]);

	return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"router":"router-25VlQ"};

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BrowserRouter__ = __webpack_require__(73);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserRouter", function() { return __WEBPACK_IMPORTED_MODULE_0__BrowserRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HashRouter__ = __webpack_require__(74);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "HashRouter", function() { return __WEBPACK_IMPORTED_MODULE_1__HashRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Link__ = __webpack_require__(23);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return __WEBPACK_IMPORTED_MODULE_2__Link__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MemoryRouter__ = __webpack_require__(75);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return __WEBPACK_IMPORTED_MODULE_3__MemoryRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__NavLink__ = __webpack_require__(76);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return __WEBPACK_IMPORTED_MODULE_4__NavLink__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Prompt__ = __webpack_require__(77);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Prompt", function() { return __WEBPACK_IMPORTED_MODULE_5__Prompt__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Redirect__ = __webpack_require__(78);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return __WEBPACK_IMPORTED_MODULE_6__Redirect__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Route__ = __webpack_require__(79);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return __WEBPACK_IMPORTED_MODULE_7__Route__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Router__ = __webpack_require__(80);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return __WEBPACK_IMPORTED_MODULE_8__Router__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__StaticRouter__ = __webpack_require__(81);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return __WEBPACK_IMPORTED_MODULE_9__StaticRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Switch__ = __webpack_require__(82);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return __WEBPACK_IMPORTED_MODULE_10__Switch__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__matchPath__ = __webpack_require__(83);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return __WEBPACK_IMPORTED_MODULE_11__matchPath__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__withRouter__ = __webpack_require__(84);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return __WEBPACK_IMPORTED_MODULE_12__withRouter__["a"]; });



























/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GitHubStar = function (_Component) {
	_inherits(GitHubStar, _Component);

	function GitHubStar() {
		_classCallCheck(this, GitHubStar);

		return _possibleConstructorReturn(this, (GitHubStar.__proto__ || Object.getPrototypeOf(GitHubStar)).apply(this, arguments));
	}

	_createClass(GitHubStar, [{
		key: 'render',
		value: function render() {
			var re = new RegExp('.*github[^\/]*\/([^\/]+)\/([^/\#]+)($|.*)', 'i');
			var found = this.props.github.match(re);
			var width = window.innerWidth;
			var size = 'large',
			    height = '30px';
			if (width < 550) {
				size = 'none';
				height = '20px';
			}
			return _react2.default.createElement('iframe', {
				src: 'https://ghbtns.com/github-btn.html?user=' + found[1] + '&repo=' + found[2] + '&type=star&count=true&size=' + size,
				frameBorder: '0', scrolling: '0', width: '160px', height: height });
		}
	}]);

	return GitHubStar;
}(_react.Component);

exports.default = GitHubStar;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(42);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
	_inherits(Header, _Component);

	function Header() {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	}

	_createClass(Header, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'div',
					{ className: _Header2.default.header },
					_react2.default.createElement(
						'a',
						{ className: _Header2.default.profileLink, href: '/' },
						'Ankush Jain\'s Portfolio'
					)
				),
				_react2.default.createElement(
					'div',
					{ className: _Header2.default.tagline },
					'Full Stack Developer'
				)
			);
		}
	}]);

	return Header;
}(_react.Component);

exports.default = Header;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ProjectLinks = __webpack_require__(43);

var _ProjectLinks2 = _interopRequireDefault(_ProjectLinks);

var _pathResolver = __webpack_require__(40);

var _pathResolver2 = _interopRequireDefault(_pathResolver);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectLinks = function (_Component) {
	_inherits(ProjectLinks, _Component);

	function ProjectLinks() {
		_classCallCheck(this, ProjectLinks);

		return _possibleConstructorReturn(this, (ProjectLinks.__proto__ || Object.getPrototypeOf(ProjectLinks)).apply(this, arguments));
	}

	_createClass(ProjectLinks, [{
		key: 'render',
		value: function render() {
			// websites
			var websitesDOM = void 0;
			if (this.props.websites) {
				websitesDOM = this.props.websites.map(function (w) {
					return _react2.default.createElement(
						'a',
						{ key: w, href: w, target: '_blank', className: _ProjectLinks2.default.logoContainer, title: _utils2.default.getDomain(w) },
						_react2.default.createElement('img', { className: _ProjectLinks2.default.logo, src: (0, _pathResolver2.default)("/img/link-symbol.svg") })
					);
				});
			}

			return _react2.default.createElement(
				'span',
				{ className: _ProjectLinks2.default.projectLinks },
				this.props.websites && websitesDOM,
				this.props.github && _react2.default.createElement(
					'a',
					{ href: this.props.github, target: '_blank', className: _ProjectLinks2.default.logoContainer, title: 'GitHub' },
					_react2.default.createElement('img', { className: _ProjectLinks2.default.logo, src: (0, _pathResolver2.default)("/img/github-logo.svg") })
				)
			);
		}
	}]);

	return ProjectLinks;
}(_react.Component);

exports.default = ProjectLinks;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Tag = __webpack_require__(13);

var _Tag2 = _interopRequireDefault(_Tag);

var _Project = __webpack_require__(44);

var _Project2 = _interopRequireDefault(_Project);

var _ProjectLinks = __webpack_require__(36);

var _ProjectLinks2 = _interopRequireDefault(_ProjectLinks);

var _state = __webpack_require__(7);

var _state2 = _interopRequireDefault(_state);

var _pattern = __webpack_require__(17);

var _pattern2 = _interopRequireDefault(_pattern);

var _ligthenDarkenColor = __webpack_require__(16);

var _ligthenDarkenColor2 = _interopRequireDefault(_ligthenDarkenColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Project = function (_Component) {
	_inherits(Project, _Component);

	function Project(props) {
		_classCallCheck(this, Project);

		var _this = _possibleConstructorReturn(this, (Project.__proto__ || Object.getPrototypeOf(Project)).call(this, props));

		_this.desClick = _this.desClick.bind(_this);
		_this.state = {};
		return _this;
	}

	_createClass(Project, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			// let pattern = patternGen(this.props.name);
			// document.getElementsByClassName(this.props.id)[0].style.backgroundColor = pattern.color;
			// let card = document.getElementsByClassName(this.props.id)[0];
			// card.getElementsByClassName(styles.projectName)[0].style.color = ldColor(pattern.color, -50);
			// let desc = document.getElementsByClassName(this.props.id + 'desc')[0];
			// desc.style.backgroundColor = ldColor(pattern.color, 10);
			// desc.style.borderColor = ldColor(pattern.color, -40);
		}
	}, {
		key: 'desClick',
		value: function desClick(event) {
			var query = document.getElementById('search').value;
			_state2.default.dispatch({ type: 'PUT', data: {
					search: query,
					yOffset: window.pageYOffset
				} });
			window.location.href = '#/' + this.props.id;
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			// color
			this.state.color = (0, _pattern2.default)(this.props.name).color;
			var nameColor = (0, _ligthenDarkenColor2.default)(this.state.color, -70);
			this.state.tagColor = (0, _ligthenDarkenColor2.default)(this.state.color, 15);
			// tags
			var tagsDOM = this.props.tags.map(function (t) {
				return _react2.default.createElement(_Tag2.default, { key: t, name: t, color: _this2.state.tagColor });
			});
			return _react2.default.createElement(
				'div',
				{ className: _Project2.default.projectOuter },
				_react2.default.createElement(
					'div',
					{ className: [_Project2.default.project, this.props.id].join(' ') },
					_react2.default.createElement(
						'div',
						{ className: this.props.name.length > 20 ? _Project2.default.projectTitleSmall : _Project2.default.projectTitle },
						_react2.default.createElement(
							'span',
							{ onClick: this.desClick, className: (_Project2.default.projectName, _Project2.default.projectDesc), style: { color: nameColor } },
							this.props.name
						),
						_react2.default.createElement('span', { style: { flexGrow: 100 } }),
						_react2.default.createElement(_ProjectLinks2.default, this.props)
					),
					this.props.date && _react2.default.createElement(
						'div',
						{ className: _Project2.default.projectDate },
						this.props.date
					),
					_react2.default.createElement(
						'div',
						{ className: _Project2.default.projectDesc, onClick: this.desClick },
						this.props.desc[0]
					),
					_react2.default.createElement(
						'div',
						{ className: _Project2.default.projectTags },
						tagsDOM
					)
				)
			);
		}
	}]);

	return Project;
}(_react.Component);

exports.default = Project;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Search = __webpack_require__(45);

var _Search2 = _interopRequireDefault(_Search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_Component) {
	_inherits(Search, _Component);

	function Search() {
		_classCallCheck(this, Search);

		return _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
	}

	_createClass(Search, [{
		key: 'render',

		// type=search helps with the (x) mark
		value: function render() {
			return _react2.default.createElement('input', { type: 'search', id: 'search', placeholder: 'Serach...',
				autoComplete: 'off', spellCheck: 'false',
				className: _Search2.default.search, onChange: this.props.changeHandler, autoFocus: 'autofocus' });
		}
	}]);

	return Search;
}(_react.Component);

exports.default = Search;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(0);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(33);

var _loadSW = __webpack_require__(29);

var _loadSW2 = _interopRequireDefault(_loadSW);

var _Home = __webpack_require__(31);

var _Home2 = _interopRequireDefault(_Home);

var _Detail = __webpack_require__(30);

var _Detail2 = _interopRequireDefault(_Detail);

var _index = __webpack_require__(32);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// service worker ftw
(0, _loadSW2.default)();

_reactDom2.default.render(_react2.default.createElement(
	_reactRouterDom.HashRouter,
	null,
	_react2.default.createElement(
		'div',
		{ className: _index2.default.router },
		_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
		_react2.default.createElement(_reactRouterDom.Route, { path: '/:id', component: _Detail2.default })
	)
), document.getElementById('app'));

// react-hot-loader
if (false) {
	module.hot.accept();
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = pathResolver;
function pathResolver(uri) {
	return uri.replace(/^\/+/g, '');
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Home = __webpack_require__(8);

var _Home2 = _interopRequireDefault(_Home);

var _Page = __webpack_require__(48);

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page404 = function (_Component) {
	_inherits(Page404, _Component);

	function Page404() {
		_classCallCheck(this, Page404);

		return _possibleConstructorReturn(this, (Page404.__proto__ || Object.getPrototypeOf(Page404)).apply(this, arguments));
	}

	_createClass(Page404, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: _Home2.default.app },
				_react2.default.createElement(
					'div',
					{ className: _Page2.default.text404 },
					'404'
				),
				_react2.default.createElement(
					'div',
					{ className: _Page2.default.detail404 },
					'Head back ',
					_react2.default.createElement(
						'a',
						{ href: '#' },
						'home'
					)
				)
			);
		}
	}]);

	return Page404;
}(_react.Component);

exports.default = Page404;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"header":"header-1Xm7V","tagline":"tagline-2w_dc","profileLink":"profileLink-OWyJH"};

/***/ }),
/* 43 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"projectLinks":"projectLinks-QpqMW","logo":"logo-2L11S"};

/***/ }),
/* 44 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"projectOuter":"projectOuter-23Utm","project":"project-MgmEp","projectTitleSmall":"projectTitleSmall-Da212","projectTitle":"projectTitle-1vTJH","projectName":"projectName-2Xhrs","projectDate":"projectDate-TITd9","projectDesc":"projectDesc-1JM2W","projectTags":"projectTags-SxIgK","projectLinks":"projectLinks-Zlo7s"};

/***/ }),
/* 45 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"search":"search-2gRr6"};

/***/ }),
/* 46 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"tag":"tag-2vJ6b"};

/***/ }),
/* 47 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"page":"page-14x7O","backLink":"backLink-2mHvU","name":"name-fcp-W","hr":"hr-3TMFz","ghButton":"ghButton-2budO","links":"links-foytf","desc":"desc-YRvPh","tags":"tags-2A645","imgsty":"imgsty-3YyHY","footerDiv":"footerDiv-3aBGF","horizSpace":"horizSpace-3skHE"};

/***/ }),
/* 48 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"text404":"text404-3wx1Y","detail404":"detail404-2QifN"};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
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
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*eslint sort-vars:0, curly:0*/



/**
 * Converts a hex CSS color value to RGB.
 * Adapted from http://stackoverflow.com/a/5624139.
 *
 * @param	String	hex		The hexadecimal color value
 * @return	Object			The RGB representation
 */
function hex2rgb(hex) {
	// Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
	var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	hex = hex.replace(shorthandRegex, function (m, r, g, b) {
		return r + r + g + g + b + b;
	});

	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? {
		r: parseInt(result[1], 16),
		g: parseInt(result[2], 16),
		b: parseInt(result[3], 16)
	} : null;
}

/**
 * Converts an RGB color value to a hex string.
 * @param  Object rgb RGB as r, g, and b keys
 * @return String     Hex color string
 */
function rgb2hex(rgb) {
	return '#' + ['r', 'g', 'b'].map(function (key) {
		return ('0' + rgb[key].toString(16)).slice(-2);
	}).join('');
}

/**
 * Converts an RGB color value to HSL. Conversion formula adapted from
 * http://en.wikipedia.org/wiki/HSL_color_space. This function adapted
 * from http://stackoverflow.com/a/9493060.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h, s, and l in the set [0, 1].
 *
 * @param   Object  rgb     RGB as r, g, and b keys
 * @return  Object          HSL as h, s, and l keys
 */
function rgb2hsl(rgb) {
	var r = rgb.r, g = rgb.g, b = rgb.b;
	r /= 255; g /= 255; b /= 255;
	var max = Math.max(r, g, b), min = Math.min(r, g, b);
	var h, s, l = (max + min) / 2;

	if (max === min) {
		h = s = 0; // achromatic
	} else {
		var d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
		switch (max) {
			case r: h = (g - b) / d + (g < b ? 6 : 0); break;
			case g: h = (b - r) / d + 2; break;
			case b: h = (r - g) / d + 4; break;
		}
		h /= 6;
	}

	return { h: h, s: s, l: l };
}

/**
 * Converts an HSL color value to RGB. Conversion formula adapted from
 * http://en.wikipedia.org/wiki/HSL_color_space. This function adapted
 * from http://stackoverflow.com/a/9493060.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   Object  hsl     HSL as h, s, and l keys
 * @return  Object          RGB as r, g, and b values
 */
function hsl2rgb(hsl) {

	function hue2rgb(p, q, t) {
		if (t < 0) t += 1;
		if (t > 1) t -= 1;
		if (t < 1 / 6) return p + (q - p) * 6 * t;
		if (t < 1 / 2) return q;
		if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
		return p;
	}

	var h = hsl.h, s = hsl.s, l = hsl.l;
	var r, g, b;

	if(s === 0){
		r = g = b = l; // achromatic
	}else{

		var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		var p = 2 * l - q;
		r = hue2rgb(p, q, h + 1 / 3);
		g = hue2rgb(p, q, h);
		b = hue2rgb(p, q, h - 1 / 3);
	}

	return {
		r: Math.round(r * 255),
		g: Math.round(g * 255),
		b: Math.round(b * 255)
	};
}

module.exports = {
	hex2rgb: hex2rgb,
	rgb2hex: rgb2hex,
	rgb2hsl: rgb2hsl,
	hsl2rgb: hsl2rgb,
	rgb2rgbString: function (rgb) {
		return 'rgb(' + [rgb.r, rgb.g, rgb.b].join(',') + ')';
	}
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var extend = __webpack_require__(18);
var color  = __webpack_require__(51);
var SHA1   = __webpack_require__(53);
var SVG    = __webpack_require__(54);



var DEFAULTS = {
	baseColor: '#933c3c'
};

var PATTERNS = [
	'octogons',
	'overlappingCircles',
	'plusSigns',
	'xes',
	'sineWaves',
	'hexagons',
	'overlappingRings',
	'plaid',
	'triangles',
	'squares',
	'concentricCircles',
	'diamonds',
	'tessellation',
	'nestedSquares',
	'mosaicSquares',
	'chevrons'
];

var FILL_COLOR_DARK  = '#222';
var FILL_COLOR_LIGHT = '#ddd';
var STROKE_COLOR     = '#000';
var STROKE_OPACITY   = 0.02;
var OPACITY_MIN      = 0.02;
var OPACITY_MAX      = 0.15;



// Helpers

/**
 * Extract a substring from a hex string and parse it as an integer
 * @param {string} hash - Source hex string
 * @param {number} index - Start index of substring
 * @param {number} [length] - Length of substring. Defaults to 1.
 */
function hexVal(hash, index, len) {
	return parseInt(hash.substr(index, len || 1), 16);
}

/*
 * Re-maps a number from one range to another
 * http://processing.org/reference/map_.html
 */
function map(value, vMin, vMax, dMin, dMax) {
	var vValue = parseFloat(value);
	var vRange = vMax - vMin;
	var dRange = dMax - dMin;

	return (vValue - vMin) * dRange / vRange + dMin;
}

function fillColor(val) {
	return (val % 2 === 0) ? FILL_COLOR_LIGHT : FILL_COLOR_DARK;
}

function fillOpacity(val) {
	return map(val, 0, 15, OPACITY_MIN, OPACITY_MAX);
}



var Pattern = module.exports = function (string, options) {
	this.opts = extend({}, DEFAULTS, options);
	this.hash = options.hash || SHA1(string);
	this.svg = new SVG();

	this.generateBackground();
	this.generatePattern();

	return this;
};

Pattern.prototype.toSvg = function () {
	return this.svg.toString();
};

Pattern.prototype.toString = function () {
	return this.toSvg();
};

Pattern.prototype.toBase64 = function () {
	var str = this.toSvg();
	var b64;

	// Use window.btoa if in the browser; otherwise fallback to node buffers
	if (typeof window !== 'undefined' && typeof window.btoa === 'function') {
		b64 = window.btoa(str);
	} else {
		b64 = new Buffer(str).toString('base64');
	}

	return b64;
};

Pattern.prototype.toDataUri = function () {
	return 'data:image/svg+xml;base64,' + this.toBase64();
};

Pattern.prototype.toDataUrl = function () {
	return 'url("' + this.toDataUri() + '")';
};

Pattern.prototype.generateBackground = function () {
	var baseColor, hueOffset, rgb, satOffset;

	if (this.opts.color) {
		rgb = color.hex2rgb(this.opts.color);
	} else {
		hueOffset = map(hexVal(this.hash, 14, 3), 0, 4095, 0, 359);
		satOffset = hexVal(this.hash, 17);
		baseColor = color.rgb2hsl(color.hex2rgb(this.opts.baseColor));

		baseColor.h = (((baseColor.h * 360 - hueOffset) + 360) % 360) / 360;

		if (satOffset % 2 === 0) {
			baseColor.s = Math.min(1, ((baseColor.s * 100) + satOffset) / 100);
		} else {
			baseColor.s = Math.max(0, ((baseColor.s * 100) - satOffset) / 100);
		}
		rgb = color.hsl2rgb(baseColor);
	}

	this.color = color.rgb2hex(rgb);

	this.svg.rect(0, 0, '100%', '100%', {
		fill: color.rgb2rgbString(rgb)
	});
};

Pattern.prototype.generatePattern = function () {
	var generator = this.opts.generator;

	if (generator) {
		if (PATTERNS.indexOf(generator) < 0) {
			throw new Error('The generator '
				+ generator
				+ ' does not exist.');
		}
	} else {
		generator = PATTERNS[hexVal(this.hash, 20)];
	}

	return this['geo' + generator.slice(0, 1).toUpperCase() + generator.slice(1)]();
};

function buildHexagonShape(sideLength) {
	var c = sideLength;
	var a = c / 2;
	var b = Math.sin(60 * Math.PI / 180) * c;
	return [
		0, b,
		a, 0,
		a + c, 0,
		2 * c, b,
		a + c, 2 * b,
		a, 2 * b,
		0, b
	].join(',');
}

Pattern.prototype.geoHexagons = function () {
	var scale      = hexVal(this.hash, 0);
	var sideLength = map(scale, 0, 15, 8, 60);
	var hexHeight  = sideLength * Math.sqrt(3);
	var hexWidth   = sideLength * 2;
	var hex        = buildHexagonShape(sideLength);
	var dy, fill, i, opacity, styles, val, x, y;

	this.svg.setWidth(hexWidth * 3 + sideLength * 3);
	this.svg.setHeight(hexHeight * 6);

	i = 0;
	for (y = 0; y < 6; y++) {
		for (x = 0; x < 6; x++) {
			val     = hexVal(this.hash, i);
			dy      = x % 2 === 0 ? y * hexHeight : y * hexHeight + hexHeight / 2;
			opacity = fillOpacity(val);
			fill    = fillColor(val);

			styles = {
				fill: fill,
				'fill-opacity': opacity,
				stroke: STROKE_COLOR,
				'stroke-opacity': STROKE_OPACITY
			};

			this.svg.polyline(hex, styles).transform({
				translate: [
					x * sideLength * 1.5 - hexWidth / 2,
					dy - hexHeight / 2
				]
			});

			// Add an extra one at top-right, for tiling.
			if (x === 0) {
				this.svg.polyline(hex, styles).transform({
					translate: [
						6 * sideLength * 1.5 - hexWidth / 2,
						dy - hexHeight / 2
					]
				});
			}

			// Add an extra row at the end that matches the first row, for tiling.
			if (y === 0) {
				dy = x % 2 === 0 ? 6 * hexHeight : 6 * hexHeight + hexHeight / 2;
				this.svg.polyline(hex, styles).transform({
					translate: [
						x * sideLength * 1.5 - hexWidth / 2,
						dy - hexHeight / 2
					]
				});
			}

			// Add an extra one at bottom-right, for tiling.
			if (x === 0 && y === 0) {
				this.svg.polyline(hex, styles).transform({
					translate: [
						6 * sideLength * 1.5 - hexWidth / 2,
						5 * hexHeight + hexHeight / 2
					]
				});
			}

			i++;
		}
	}
};

Pattern.prototype.geoSineWaves = function () {
	var period    = Math.floor(map(hexVal(this.hash, 0), 0, 15, 100, 400));
	var amplitude = Math.floor(map(hexVal(this.hash, 1), 0, 15, 30, 100));
	var waveWidth = Math.floor(map(hexVal(this.hash, 2), 0, 15, 3, 30));
	var fill, i, opacity, str, styles, val, xOffset;

	this.svg.setWidth(period);
	this.svg.setHeight(waveWidth * 36);

	for (i = 0; i < 36; i++) {
		val     = hexVal(this.hash, i);
		opacity = fillOpacity(val);
		fill    = fillColor(val);
		xOffset = period / 4 * 0.7;

		styles = {
			fill: 'none',
			stroke: fill,
			opacity: opacity,
			'stroke-width': '' + waveWidth + 'px'
		};

		str = 'M0 ' + amplitude +
			' C ' + xOffset + ' 0, ' + (period / 2 - xOffset) + ' 0, ' + (period / 2) + ' ' + amplitude +
			' S ' + (period - xOffset) + ' ' + (amplitude * 2) + ', ' + period + ' ' + amplitude +
			' S ' + (period * 1.5 - xOffset) + ' 0, ' + (period * 1.5) + ', ' + amplitude;

		this.svg.path(str, styles).transform({
			translate: [
				-period / 4,
				waveWidth * i - amplitude * 1.5
			]
		});
		this.svg.path(str, styles).transform({
			translate: [
				-period / 4,
				waveWidth * i - amplitude * 1.5 + waveWidth * 36
			]
		});
	}
};

function buildChevronShape(width, height) {
	var e = height * 0.66;
	return [
		[
			0, 0,
			width / 2, height - e,
			width / 2, height,
			0, e,
			0, 0
		],
		[
			width / 2, height - e,
			width, 0,
			width, e,
			width / 2, height,
			width / 2, height - e
		]
	].map(function (x) { return x.join(','); });
}

Pattern.prototype.geoChevrons = function () {
	var chevronWidth  = map(hexVal(this.hash, 0), 0, 15, 30, 80);
	var chevronHeight = map(hexVal(this.hash, 0), 0, 15, 30, 80);
	var chevron       = buildChevronShape(chevronWidth, chevronHeight);
	var fill, i, opacity, styles, val, x, y;

	this.svg.setWidth(chevronWidth * 6);
	this.svg.setHeight(chevronHeight * 6 * 0.66);

	i = 0;
	for (y = 0; y < 6; y++) {
		for (x = 0; x < 6; x++) {
			val     = hexVal(this.hash, i);
			opacity = fillOpacity(val);
			fill    = fillColor(val);

			styles = {
				stroke: STROKE_COLOR,
				'stroke-opacity': STROKE_OPACITY,
				fill: fill,
				'fill-opacity': opacity,
				'stroke-width': 1
			};

			this.svg.group(styles).transform({
				translate: [
					x * chevronWidth,
					y * chevronHeight * 0.66 - chevronHeight / 2
				]
			}).polyline(chevron).end();

			// Add an extra row at the end that matches the first row, for tiling.
			if (y === 0) {
				this.svg.group(styles).transform({
					translate: [
						x * chevronWidth,
						6 * chevronHeight * 0.66 - chevronHeight / 2
					]
				}).polyline(chevron).end();
			}

			i += 1;
		}
	}
};

function buildPlusShape(squareSize) {
	return [
		[squareSize, 0, squareSize, squareSize * 3],
		[0, squareSize, squareSize * 3, squareSize]
	];
}

Pattern.prototype.geoPlusSigns = function () {
	var squareSize = map(hexVal(this.hash, 0), 0, 15, 10, 25);
	var plusSize   = squareSize * 3;
	var plusShape  = buildPlusShape(squareSize);
	var dx, fill, i, opacity, styles, val, x, y;

	this.svg.setWidth(squareSize * 12);
	this.svg.setHeight(squareSize * 12);

	i = 0;
	for (y = 0; y < 6; y++) {
		for (x = 0; x < 6; x++) {
			val     = hexVal(this.hash, i);
			opacity = fillOpacity(val);
			fill    = fillColor(val);
			dx      = (y % 2 === 0) ? 0 : 1;

			styles = {
				fill: fill,
				stroke: STROKE_COLOR,
				'stroke-opacity': STROKE_OPACITY,
				'fill-opacity': opacity
			};

			this.svg.group(styles).transform({
				translate: [
					x * plusSize - x * squareSize + dx * squareSize - squareSize,
					y * plusSize - y * squareSize - plusSize / 2
				]
			}).rect(plusShape).end();

			// Add an extra column on the right for tiling.
			if (x === 0) {
				this.svg.group(styles).transform({
					translate: [
						4 * plusSize - x * squareSize + dx * squareSize - squareSize,
						y * plusSize - y * squareSize - plusSize / 2
					]
				}).rect(plusShape).end();
			}

			// Add an extra row on the bottom that matches the first row, for tiling
			if (y === 0) {
				this.svg.group(styles).transform({
					translate: [
						x * plusSize - x * squareSize + dx * squareSize - squareSize,
						4 * plusSize - y * squareSize - plusSize / 2
					]
				}).rect(plusShape).end();
			}

			// Add an extra one at top-right and bottom-right, for tiling
			if (x === 0 && y === 0) {
				this.svg.group(styles).transform({
					translate: [
						4 * plusSize - x * squareSize + dx * squareSize - squareSize,
						4 * plusSize - y * squareSize - plusSize / 2
					]
				}).rect(plusShape).end();
			}

			i++;
		}
	}
};

Pattern.prototype.geoXes = function () {
	var squareSize = map(hexVal(this.hash, 0), 0, 15, 10, 25);
	var xShape     = buildPlusShape(squareSize);
	var xSize      = squareSize * 3 * 0.943;
	var dy, fill, i, opacity, styles, val, x, y;

	this.svg.setWidth(xSize * 3);
	this.svg.setHeight(xSize * 3);

	i = 0;
	for (y = 0; y < 6; y++) {
		for (x = 0; x < 6; x++) {
			val     = hexVal(this.hash, i);
			opacity = fillOpacity(val);
			dy      = x % 2 === 0 ? y * xSize - xSize * 0.5 : y * xSize - xSize * 0.5 + xSize / 4;
			fill    = fillColor(val);

			styles = {
				fill: fill,
				opacity: opacity
			};

			this.svg.group(styles).transform({
				translate: [
					x * xSize / 2 - xSize / 2,
					dy - y * xSize / 2
				],
				rotate: [
					45,
					xSize / 2,
					xSize / 2
				]
			}).rect(xShape).end();

			// Add an extra column on the right for tiling.
			if (x === 0) {
				this.svg.group(styles).transform({
					translate: [
						6 * xSize / 2 - xSize / 2,
						dy - y * xSize / 2
					],
					rotate: [
						45,
						xSize / 2,
						xSize / 2
					]
				}).rect(xShape).end();
			}

			// // Add an extra row on the bottom that matches the first row, for tiling.
			if (y === 0) {
				dy = x % 2 === 0 ? 6 * xSize - xSize / 2 : 6 * xSize - xSize / 2 + xSize / 4;
				this.svg.group(styles).transform({
					translate: [
						x * xSize / 2 - xSize / 2,
						dy - 6 * xSize / 2
					],
					rotate: [
						45,
						xSize / 2,
						xSize / 2
					]
				}).rect(xShape).end();
			}

			// These can hang off the bottom, so put a row at the top for tiling.
			if (y === 5) {
				this.svg.group(styles).transform({
					translate: [
						x * xSize / 2 - xSize / 2,
						dy - 11 * xSize / 2
					],
					rotate: [
						45,
						xSize / 2,
						xSize / 2
					]
				}).rect(xShape).end();
			}

			// Add an extra one at top-right and bottom-right, for tiling
			if (x === 0 && y === 0) {
				this.svg.group(styles).transform({
					translate: [
						6 * xSize / 2 - xSize / 2,
						dy - 6 * xSize / 2
					],
					rotate: [
						45,
						xSize / 2,
						xSize / 2
					]
				}).rect(xShape).end();
			}
			i++;
		}
	}
};

Pattern.prototype.geoOverlappingCircles = function () {
	var scale    = hexVal(this.hash, 0);
	var diameter = map(scale, 0, 15, 25, 200);
	var radius   = diameter / 2;
	var circle, fill, i, opacity, styles, val, x, y;

	this.svg.setWidth(radius * 6);
	this.svg.setHeight(radius * 6);

	i = 0;
	for (y = 0; y < 6; y++) {
		for (x = 0; x < 6; x++) {
			val     = hexVal(this.hash, i);
			opacity = fillOpacity(val);
			fill    = fillColor(val);

			styles = {
				fill: fill,
				opacity: opacity
			};

			this.svg.circle(x * radius, y * radius, radius, styles);

			// Add an extra one at top-right, for tiling.
			if (x === 0) {
				this.svg.circle(6 * radius, y * radius, radius, styles);
			}

			// // Add an extra row at the end that matches the first row, for tiling.
			if (y === 0) {
				this.svg.circle(x * radius, 6 * radius, radius, styles);
			}

			// // Add an extra one at bottom-right, for tiling.
			if (x === 0 && y === 0) {
				this.svg.circle(6 * radius, 6 * radius, radius, styles);
			}

			i++;
		}
	}
};

function buildOctogonShape(squareSize) {
	var s = squareSize;
	var c = s * 0.33;
	return [
		c, 0,
		s - c, 0,
		s, c,
		s, s - c,
		s - c, s,
		c, s,
		0, s - c,
		0, c,
		c, 0
	].join(',');
}

Pattern.prototype.geoOctogons = function () {
	var squareSize = map(hexVal(this.hash, 0), 0, 15, 10, 60);
	var tile       = buildOctogonShape(squareSize);
	var fill, i, opacity, val, x, y;

	this.svg.setWidth(squareSize * 6);
	this.svg.setHeight(squareSize * 6);

	i = 0;
	for (y = 0; y < 6; y++) {
		for (x = 0; x < 6; x++) {
			val     = hexVal(this.hash, i);
			opacity = fillOpacity(val);
			fill    = fillColor(val);

			this.svg.polyline(tile, {
				fill: fill,
				'fill-opacity': opacity,
				stroke: STROKE_COLOR,
				'stroke-opacity': STROKE_OPACITY
			}).transform({
				translate: [
					x * squareSize,
					y * squareSize
				]
			});

			i += 1;
		}
	}
};

Pattern.prototype.geoSquares = function () {
	var squareSize = map(hexVal(this.hash, 0), 0, 15, 10, 60);
	var fill, i, opacity, val, x, y;

	this.svg.setWidth(squareSize * 6);
	this.svg.setHeight(squareSize * 6);

	i = 0;
	for (y = 0; y < 6; y++) {
		for (x = 0; x < 6; x++) {
			val     = hexVal(this.hash, i);
			opacity = fillOpacity(val);
			fill    = fillColor(val);

			this.svg.rect(x * squareSize, y * squareSize, squareSize, squareSize, {
				fill: fill,
				'fill-opacity': opacity,
				stroke: STROKE_COLOR,
				'stroke-opacity': STROKE_OPACITY
			});

			i += 1;
		}
	}
};

Pattern.prototype.geoConcentricCircles = function () {
	var scale       = hexVal(this.hash, 0);
	var ringSize    = map(scale, 0, 15, 10, 60);
	var strokeWidth = ringSize / 5;
	var fill, i, opacity, val, x, y;

	this.svg.setWidth((ringSize + strokeWidth) * 6);
	this.svg.setHeight((ringSize + strokeWidth) * 6);

	i = 0;
	for (y = 0; y < 6; y++) {
		for (x = 0; x < 6; x++) {
			val     = hexVal(this.hash, i);
			opacity = fillOpacity(val);
			fill    = fillColor(val);

			this.svg.circle(
				x * ringSize + x * strokeWidth + (ringSize + strokeWidth) / 2,
				y * ringSize + y * strokeWidth + (ringSize + strokeWidth) / 2,
				ringSize / 2,
				{
					fill: 'none',
					stroke: fill,
					opacity: opacity,
					'stroke-width': strokeWidth + 'px'
				}
			);

			val     = hexVal(this.hash, 39 - i);
			opacity = fillOpacity(val);
			fill    = fillColor(val);

			this.svg.circle(
				x * ringSize + x * strokeWidth + (ringSize + strokeWidth) / 2,
				y * ringSize + y * strokeWidth + (ringSize + strokeWidth) / 2,
				ringSize / 4,
				{
					fill: fill,
					'fill-opacity': opacity
				}
			);

			i += 1;
		}
	}
};

Pattern.prototype.geoOverlappingRings = function () {
	var scale       = hexVal(this.hash, 0);
	var ringSize    = map(scale, 0, 15, 10, 60);
	var strokeWidth = ringSize / 4;
	var fill, i, opacity, styles, val, x, y;

	this.svg.setWidth(ringSize * 6);
	this.svg.setHeight(ringSize * 6);

	i = 0;
	for (y = 0; y < 6; y++) {
		for (x = 0; x < 6; x++) {
			val     = hexVal(this.hash, i);
			opacity = fillOpacity(val);
			fill    = fillColor(val);

			styles = {
				fill: 'none',
				stroke: fill,
				opacity: opacity,
				'stroke-width': strokeWidth + 'px'
			};

			this.svg.circle(x * ringSize, y * ringSize, ringSize - strokeWidth / 2, styles);

			// Add an extra one at top-right, for tiling.
			if (x === 0) {
				this.svg.circle(6 * ringSize, y * ringSize, ringSize - strokeWidth / 2, styles);
			}

			if (y === 0) {
				this.svg.circle(x * ringSize, 6 * ringSize, ringSize - strokeWidth / 2, styles);
			}

			if (x === 0 && y === 0) {
				this.svg.circle(6 * ringSize, 6 * ringSize, ringSize - strokeWidth / 2, styles);
			}

			i += 1;
		}
	}
};

function buildTriangleShape(sideLength, height) {
	var halfWidth = sideLength / 2;
	return [
		halfWidth, 0,
		sideLength, height,
		0, height,
		halfWidth, 0
	].join(',');
}

Pattern.prototype.geoTriangles = function () {
	var scale          = hexVal(this.hash, 0);
	var sideLength     = map(scale, 0, 15, 15, 80);
	var triangleHeight = sideLength / 2 * Math.sqrt(3);
	var triangle       = buildTriangleShape(sideLength, triangleHeight);
	var fill, i, opacity, rotation, styles, val, x, y;

	this.svg.setWidth(sideLength * 3);
	this.svg.setHeight(triangleHeight * 6);

	i = 0;
	for (y = 0; y < 6; y++) {
		for (x = 0; x < 6; x++) {
			val     = hexVal(this.hash, i);
			opacity = fillOpacity(val);
			fill    = fillColor(val);

			styles = {
				fill: fill,
				'fill-opacity': opacity,
				stroke: STROKE_COLOR,
				'stroke-opacity': STROKE_OPACITY
			};

			if (y % 2 === 0) {
				rotation = x % 2 === 0 ? 180 : 0;
			} else {
				rotation = x % 2 !== 0 ? 180 : 0;
			}

			this.svg.polyline(triangle, styles).transform({
				translate: [
					x * sideLength * 0.5 - sideLength / 2,
					triangleHeight * y
				],
				rotate: [
					rotation,
					sideLength / 2,
					triangleHeight / 2
				]
			});

			// Add an extra one at top-right, for tiling.
			if (x === 0) {
				this.svg.polyline(triangle, styles).transform({
					translate: [
						6 * sideLength * 0.5 - sideLength / 2,
						triangleHeight * y
					],
					rotate: [
						rotation,
						sideLength / 2,
						triangleHeight / 2
					]
				});
			}

			i += 1;
		}
	}
};

function buildDiamondShape(width, height) {
	return [
		width / 2, 0,
		width, height / 2,
		width / 2, height,
		0, height / 2
	].join(',');
}

Pattern.prototype.geoDiamonds = function () {
	var diamondWidth  = map(hexVal(this.hash, 0), 0, 15, 10, 50);
	var diamondHeight = map(hexVal(this.hash, 1), 0, 15, 10, 50);
	var diamond       = buildDiamondShape(diamondWidth, diamondHeight);
	var dx, fill, i, opacity, styles, val, x, y;

	this.svg.setWidth(diamondWidth * 6);
	this.svg.setHeight(diamondHeight * 3);

	i = 0;
	for (y = 0; y < 6; y++) {
		for (x = 0; x < 6; x++) {
			val     = hexVal(this.hash, i);
			opacity = fillOpacity(val);
			fill    = fillColor(val);

			styles = {
				fill: fill,
				'fill-opacity': opacity,
				stroke: STROKE_COLOR,
				'stroke-opacity': STROKE_OPACITY
			};

			dx = (y % 2 === 0) ? 0 : diamondWidth / 2;

			this.svg.polyline(diamond, styles).transform({
				translate: [
					x * diamondWidth - diamondWidth / 2 + dx,
					diamondHeight / 2 * y - diamondHeight / 2
				]
			});

			// Add an extra one at top-right, for tiling.
			if (x === 0) {
				this.svg.polyline(diamond, styles).transform({
					translate: [
						6 * diamondWidth - diamondWidth / 2 + dx,
						diamondHeight / 2 * y - diamondHeight / 2
					]
				});
			}

			// Add an extra row at the end that matches the first row, for tiling.
			if (y === 0) {
				this.svg.polyline(diamond, styles).transform({
					translate: [
						x * diamondWidth - diamondWidth / 2 + dx,
						diamondHeight / 2 * 6 - diamondHeight / 2
					]
				});
			}

			// Add an extra one at bottom-right, for tiling.
			if (x === 0 && y === 0) {
				this.svg.polyline(diamond, styles).transform({
					translate: [
						6 * diamondWidth - diamondWidth / 2 + dx,
						diamondHeight / 2 * 6 - diamondHeight / 2
					]
				});
			}

			i += 1;
		}
	}
};

Pattern.prototype.geoNestedSquares = function () {
	var blockSize  = map(hexVal(this.hash, 0), 0, 15, 4, 12);
	var squareSize = blockSize * 7;
	var fill, i, opacity, styles, val, x, y;

	this.svg.setWidth((squareSize + blockSize) * 6 + blockSize * 6);
	this.svg.setHeight((squareSize + blockSize) * 6 + blockSize * 6);

	i = 0;
	for (y = 0; y < 6; y++) {
		for (x = 0; x < 6; x++) {
			val     = hexVal(this.hash, i);
			opacity = fillOpacity(val);
			fill    = fillColor(val);

			styles = {
				fill: 'none',
				stroke: fill,
				opacity: opacity,
				'stroke-width': blockSize + 'px'
			};

			this.svg.rect(x * squareSize + x * blockSize * 2 + blockSize / 2,
			              y * squareSize + y * blockSize * 2 + blockSize / 2,
			              squareSize, squareSize, styles);

			val     = hexVal(this.hash, 39 - i);
			opacity = fillOpacity(val);
			fill    = fillColor(val);

			styles = {
				fill: 'none',
				stroke: fill,
				opacity: opacity,
				'stroke-width': blockSize + 'px'
			};

			this.svg.rect(x * squareSize + x * blockSize * 2 + blockSize / 2 + blockSize * 2,
			              y * squareSize + y * blockSize * 2 + blockSize / 2 + blockSize * 2,
			              blockSize * 3, blockSize * 3, styles);

			i += 1;
		}
	}
};

function buildRightTriangleShape(sideLength) {
	return [
		0, 0,
		sideLength, sideLength,
		0, sideLength,
		0, 0
	].join(',');
}

function drawInnerMosaicTile(svg, x, y, triangleSize, vals) {
	var triangle = buildRightTriangleShape(triangleSize);
	var opacity  = fillOpacity(vals[0]);
	var fill     = fillColor(vals[0]);
	var styles   = {
		stroke: STROKE_COLOR,
		'stroke-opacity': STROKE_OPACITY,
		'fill-opacity': opacity,
		fill: fill
	};

	svg.polyline(triangle, styles).transform({
		translate: [
			x + triangleSize,
			y
		],
		scale: [-1, 1]
	});
	svg.polyline(triangle, styles).transform({
		translate: [
			x + triangleSize,
			y + triangleSize * 2
		],
		scale: [1, -1]
	});

	opacity = fillOpacity(vals[1]);
	fill    = fillColor(vals[1]);
	styles  = {
		stroke: STROKE_COLOR,
		'stroke-opacity': STROKE_OPACITY,
		'fill-opacity': opacity,
		fill: fill
	};

	svg.polyline(triangle, styles).transform({
		translate: [
			x + triangleSize,
			y + triangleSize * 2
		],
		scale: [-1, -1]
	});
	svg.polyline(triangle, styles).transform({
		translate: [
			x + triangleSize,
			y
		],
		scale: [1, 1]
	});
}

function drawOuterMosaicTile(svg, x, y, triangleSize, val) {
	var opacity  = fillOpacity(val);
	var fill     = fillColor(val);
	var triangle = buildRightTriangleShape(triangleSize);
	var styles   = {
		stroke: STROKE_COLOR,
		'stroke-opacity': STROKE_OPACITY,
		'fill-opacity': opacity,
		fill: fill
	};

	svg.polyline(triangle, styles).transform({
		translate: [
			x,
			y + triangleSize
		],
		scale: [1, -1]
	});
	svg.polyline(triangle, styles).transform({
		translate: [
			x + triangleSize * 2,
			y + triangleSize
		],
		scale: [-1, -1]
	});
	svg.polyline(triangle, styles).transform({
		translate: [
			x,
			y + triangleSize
		],
		scale: [1, 1]
	});
	svg.polyline(triangle, styles).transform({
		translate: [
			x + triangleSize * 2,
			y + triangleSize
		],
		scale: [-1, 1]
	});
}

Pattern.prototype.geoMosaicSquares = function () {
	var triangleSize = map(hexVal(this.hash, 0), 0, 15, 15, 50);
	var i, x, y;

	this.svg.setWidth(triangleSize * 8);
	this.svg.setHeight(triangleSize * 8);

	i = 0;
	for (y = 0; y < 4; y++) {
		for (x = 0; x < 4; x++) {
			if (x % 2 === 0) {
				if (y % 2 === 0) {
					drawOuterMosaicTile(this.svg,
						x * triangleSize * 2,
						y * triangleSize * 2,
						triangleSize,
						hexVal(this.hash, i)
					);
				} else {
					drawInnerMosaicTile(this.svg,
						x * triangleSize * 2,
						y * triangleSize * 2,
						triangleSize,
						[hexVal(this.hash, i), hexVal(this.hash, i + 1)]
					);
				}
			} else {
				if (y % 2 === 0) {
					drawInnerMosaicTile(this.svg,
						x * triangleSize * 2,
						y * triangleSize * 2,
						triangleSize,
						[hexVal(this.hash, i), hexVal(this.hash, i + 1)]
					);
				} else {
					drawOuterMosaicTile(this.svg,
						x * triangleSize * 2,
						y * triangleSize * 2,
						triangleSize,
						hexVal(this.hash, i)
					);
				}
			}

			i += 1;
		}
	}
};

Pattern.prototype.geoPlaid = function () {
	var height = 0;
	var width  = 0;
	var fill, i, opacity, space, stripeHeight, stripeWidth, val;

	// Horizontal stripes
	i = 0;
	while (i < 36) {
		space   = hexVal(this.hash, i);
		height += space + 5;

		val          = hexVal(this.hash, i + 1);
		opacity      = fillOpacity(val);
		fill         = fillColor(val);
		stripeHeight = val + 5;

		this.svg.rect(0, height, '100%', stripeHeight, {
			opacity: opacity,
			fill: fill
		});

		height += stripeHeight;
		i += 2;
	}

	// Vertical stripes
	i = 0;
	while (i < 36) {
		space  = hexVal(this.hash, i);
		width += space + 5;

		val         = hexVal(this.hash, i + 1);
		opacity     = fillOpacity(val);
		fill        = fillColor(val);
		stripeWidth = val + 5;

		this.svg.rect(width, 0, stripeWidth, '100%', {
			opacity: opacity,
			fill: fill
		});

		width += stripeWidth;
		i += 2;
	}

	this.svg.setWidth(width);
	this.svg.setHeight(height);
};

function buildRotatedTriangleShape(sideLength, triangleWidth) {
	var halfHeight = sideLength / 2;
	return [
		0, 0,
		triangleWidth, halfHeight,
		0, sideLength,
		0, 0
	].join(',');
}

Pattern.prototype.geoTessellation = function () {
	// 3.4.6.4 semi-regular tessellation
	var sideLength     = map(hexVal(this.hash, 0), 0, 15, 5, 40);
	var hexHeight      = sideLength * Math.sqrt(3);
	var hexWidth       = sideLength * 2;
	var triangleHeight = sideLength / 2 * Math.sqrt(3);
	var triangle       = buildRotatedTriangleShape(sideLength, triangleHeight);
	var tileWidth      = sideLength * 3 + triangleHeight * 2;
	var tileHeight     = (hexHeight * 2) + (sideLength * 2);
	var fill, i, opacity, styles, val;

	this.svg.setWidth(tileWidth);
	this.svg.setHeight(tileHeight);

	for (i = 0; i < 20; i++) {
		val     = hexVal(this.hash, i);
		opacity = fillOpacity(val);
		fill    = fillColor(val);

		styles  = {
			stroke: STROKE_COLOR,
			'stroke-opacity': STROKE_OPACITY,
			fill: fill,
			'fill-opacity': opacity,
			'stroke-width': 1
		};

		switch (i) {
			case 0: // All 4 corners
				this.svg.rect(-sideLength / 2, -sideLength / 2, sideLength, sideLength, styles);
				this.svg.rect(tileWidth - sideLength / 2, -sideLength / 2, sideLength, sideLength, styles);
				this.svg.rect(-sideLength / 2, tileHeight - sideLength / 2, sideLength, sideLength, styles);
				this.svg.rect(tileWidth - sideLength / 2, tileHeight - sideLength / 2, sideLength, sideLength, styles);
				break;
			case 1: // Center / top square
				this.svg.rect(hexWidth / 2 + triangleHeight, hexHeight / 2, sideLength, sideLength, styles);
				break;
			case 2: // Side squares
				this.svg.rect(-sideLength / 2, tileHeight / 2 - sideLength / 2, sideLength, sideLength, styles);
				this.svg.rect(tileWidth - sideLength / 2, tileHeight / 2 - sideLength / 2, sideLength, sideLength, styles);
				break;
			case 3: // Center / bottom square
				this.svg.rect(hexWidth / 2 + triangleHeight, hexHeight * 1.5 + sideLength, sideLength, sideLength, styles);
				break;
			case 4: // Left top / bottom triangle
				this.svg.polyline(triangle, styles).transform({
					translate: [
						sideLength / 2,
						-sideLength / 2
					],
					rotate: [
						0,
						sideLength / 2,
						triangleHeight / 2
					]
				});
				this.svg.polyline(triangle, styles).transform({
					translate: [
						sideLength / 2,
						tileHeight - -sideLength / 2
					],
					rotate: [
						0,
						sideLength / 2,
						triangleHeight / 2
					],
					scale: [1, -1]
				});
				break;
			case 5: // Right top / bottom triangle
				this.svg.polyline(triangle, styles).transform({
					translate: [
						tileWidth - sideLength / 2,
						-sideLength / 2
					],
					rotate: [
						0,
						sideLength / 2,
						triangleHeight / 2
					],
					scale: [-1, 1]
				});
				this.svg.polyline(triangle, styles).transform({
					translate: [
						tileWidth - sideLength / 2,
						tileHeight + sideLength / 2
					],
					rotate: [
						0,
						sideLength / 2,
						triangleHeight / 2
					],
					scale: [-1, -1]
				});
				break;
			case 6: // Center / top / right triangle
				this.svg.polyline(triangle, styles).transform({
					translate: [
						tileWidth / 2 + sideLength / 2,
						hexHeight / 2
					]});
				break;
			case 7: // Center / top / left triangle
				this.svg.polyline(triangle, styles).transform({
					translate: [
						tileWidth - tileWidth / 2 - sideLength / 2,
						hexHeight / 2
					],
					scale: [-1, 1]
				});
				break;
			case 8: // Center / bottom / right triangle
				this.svg.polyline(triangle, styles).transform({
					translate: [
						tileWidth / 2 + sideLength / 2,
						tileHeight - hexHeight / 2
					],
					scale: [1, -1]
				});
				break;
			case 9: // Center / bottom / left triangle
				this.svg.polyline(triangle, styles).transform({
					translate: [
						tileWidth - tileWidth / 2 - sideLength / 2,
						tileHeight - hexHeight / 2
					],
					scale: [-1, -1]
				});
				break;
			case 10: // Left / middle triangle
				this.svg.polyline(triangle, styles).transform({
					translate: [
						sideLength / 2,
						tileHeight / 2 - sideLength / 2
					]
				});
				break;
			case 11: // Right // middle triangle
				this.svg.polyline(triangle, styles).transform({
					translate: [
						tileWidth - sideLength / 2,
						tileHeight / 2 - sideLength / 2
					],
					scale: [-1, 1]
				});
				break;
			case 12: // Left / top square
				this.svg.rect(0, 0, sideLength, sideLength, styles).transform({
					translate: [sideLength / 2, sideLength / 2],
					rotate: [-30, 0, 0]
				});
				break;
			case 13: // Right / top square
				this.svg.rect(0, 0, sideLength, sideLength, styles).transform({
					scale: [-1, 1],
					translate: [-tileWidth + sideLength / 2, sideLength / 2],
					rotate: [-30, 0, 0]
				});
				break;
			case 14: // Left / center-top square
				this.svg.rect(0, 0, sideLength, sideLength, styles).transform({
					translate: [
						sideLength / 2,
						tileHeight / 2 - sideLength / 2 - sideLength
					],
					rotate: [30, 0, sideLength]
				});
				break;
			case 15: // Right / center-top square
				this.svg.rect(0, 0, sideLength, sideLength, styles).transform({
					scale: [-1, 1],
					translate: [
						-tileWidth + sideLength / 2,
						tileHeight / 2 - sideLength / 2  - sideLength
					],
					rotate: [30, 0, sideLength]
				});
				break;
			case 16: // Left / center-top square
				this.svg.rect(0, 0, sideLength, sideLength, styles).transform({
					scale: [1, -1],
					translate: [
						sideLength / 2,
						-tileHeight + tileHeight / 2 - sideLength / 2 - sideLength
					],
					rotate: [30, 0, sideLength]
				});
				break;
			case 17: // Right / center-bottom square
				this.svg.rect(0, 0, sideLength, sideLength, styles).transform({
					scale: [-1, -1],
					translate: [
						-tileWidth + sideLength / 2,
						-tileHeight + tileHeight / 2 - sideLength / 2 - sideLength
					],
					rotate: [30, 0, sideLength]
				});
				break;
			case 18: // Left / bottom square
				this.svg.rect(0, 0, sideLength, sideLength, styles).transform({
					scale: [1, -1],
					translate: [
						sideLength / 2,
						-tileHeight + sideLength / 2
					],
					rotate: [-30, 0, 0]
				});
				break;
			case 19: // Right / bottom square
				this.svg.rect(0, 0, sideLength, sideLength, styles).transform({
					scale: [-1, -1],
					translate: [
						-tileWidth + sideLength / 2,
						-tileHeight + sideLength / 2
					],
					rotate: [-30, 0, 0]
				});
				break;
		}
	}
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
https://github.com/creationix/git-sha1/blob/master/git-sha1.js

The MIT License (MIT)

Copyright (c) 2013 Tim Caswell

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/



// A streaming interface for when nothing is passed in.
function create() {

	var h0 = 0x67452301;
	var h1 = 0xEFCDAB89;
	var h2 = 0x98BADCFE;
	var h3 = 0x10325476;
	var h4 = 0xC3D2E1F0;
	// The first 64 bytes (16 words) is the data chunk
	var block = new Uint32Array(80), offset = 0, shift = 24;
	var totalLength = 0;

	// We have a full block to process.  Let's do it!
	function processBlock() {
		// Extend the sixteen 32-bit words into eighty 32-bit words:
		for (var i = 16; i < 80; i++) {
			var w = block[i - 3] ^ block[i - 8] ^ block[i - 14] ^ block[i - 16];
			block[i] = (w << 1) | (w >>> 31);
		}

		// log(block);

		// Initialize hash value for this chunk:
		var a = h0;
		var b = h1;
		var c = h2;
		var d = h3;
		var e = h4;
		var f, k;

		// Main loop:
		for (i = 0; i < 80; i++) {
			if (i < 20) {
				f = d ^ (b & (c ^ d));
				k = 0x5A827999;
			}
			else if (i < 40) {
				f = b ^ c ^ d;
				k = 0x6ED9EBA1;
			}
			else if (i < 60) {
				f = (b & c) | (d & (b | c));
				k = 0x8F1BBCDC;
			}
			else {
				f = b ^ c ^ d;
				k = 0xCA62C1D6;
			}
			var temp = (a << 5 | a >>> 27) + f + e + k + (block[i] | 0);
			e = d;
			d = c;
			c = (b << 30 | b >>> 2);
			b = a;
			a = temp;
		}

		// Add this chunk's hash to result so far:
		h0 = (h0 + a) | 0;
		h1 = (h1 + b) | 0;
		h2 = (h2 + c) | 0;
		h3 = (h3 + d) | 0;
		h4 = (h4 + e) | 0;

		// The block is now reusable.
		offset = 0;
		for (i = 0; i < 16; i++) {
			block[i] = 0;
		}
	}

	function write(byte) {
		block[offset] |= (byte & 0xff) << shift;
		if (shift) {
			shift -= 8;
		}
		else {
			offset++;
			shift = 24;
		}
		if (offset === 16) {
			processBlock();
		}
	}

	function updateString(string) {
		var length = string.length;
		totalLength += length * 8;
		for (var i = 0; i < length; i++) {
			write(string.charCodeAt(i));
		}
	}

	// The user gave us more data.  Store it!
	function update(chunk) {
		if (typeof chunk === 'string') {
			return updateString(chunk);
		}
		var length = chunk.length;
		totalLength += length * 8;
		for (var i = 0; i < length; i++) {
			write(chunk[i]);
		}
	}

	function toHex(word) {
		var hex = '';
		for (var i = 28; i >= 0; i -= 4) {
			hex += ((word >> i) & 0xf).toString(16);
		}
		return hex;
	}

	// No more data will come, pad the block, process and return the result.
	function digest() {
		// Pad
		write(0x80);
		if (offset > 14 || (offset === 14 && shift < 24)) {
			processBlock();
		}
		offset = 14;
		shift = 24;

		// 64-bit length big-endian
		write(0x00); // numbers this big aren't accurate in javascript anyway
		write(0x00); // ..So just hard-code to zero.
		write(totalLength > 0xffffffffff ? totalLength / 0x10000000000 : 0x00);
		write(totalLength > 0xffffffff ? totalLength / 0x100000000 : 0x00);
		for (var s = 24; s >= 0; s -= 8) {
			write(totalLength >> s);
		}

		// At this point one last processBlock() should trigger and we can pull out the result.
		return toHex(h0) +
		toHex(h1) +
		toHex(h2) +
		toHex(h3) +
		toHex(h4);
	}

	return { update: update, digest: digest };
}

// Input chunks must be either arrays of bytes or "raw" encoded strings
module.exports = function sha1(buffer) {
	if (buffer === undefined) {
		return create();
	}
	var shasum = create();
	shasum.update(buffer);
	return shasum.digest();
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var extend = __webpack_require__(18);
var XMLNode = __webpack_require__(55);

function SVG() {
	this.width = 100;
	this.height = 100;
	this.svg = XMLNode('svg');
	this.context = []; // Track nested nodes
	this.setAttributes(this.svg, {
		xmlns: 'http://www.w3.org/2000/svg',
		width: this.width,
		height: this.height
	});

	return this;
}

module.exports = SVG;

// This is a hack so groups work.
SVG.prototype.currentContext = function () {
	return this.context[this.context.length - 1] || this.svg;
};

// This is a hack so groups work.
SVG.prototype.end = function () {
	this.context.pop();
	return this;
};

SVG.prototype.currentNode = function () {
	var context = this.currentContext();
	return context.lastChild || context;
};

SVG.prototype.transform = function (transformations) {
	this.currentNode().setAttribute('transform',
		Object.keys(transformations).map(function (transformation) {
			return transformation + '(' + transformations[transformation].join(',') + ')';
		}).join(' ')
	);
	return this;
};

SVG.prototype.setAttributes = function (el, attrs) {
	Object.keys(attrs).forEach(function (attr) {
		el.setAttribute(attr, attrs[attr]);
	});
};

SVG.prototype.setWidth = function (width) {
	this.svg.setAttribute('width', Math.floor(width));
};

SVG.prototype.setHeight = function (height) {
	this.svg.setAttribute('height', Math.floor(height));
};

SVG.prototype.toString = function () {
	return this.svg.toString();
};

SVG.prototype.rect = function (x, y, width, height, args) {
	// Accept array first argument
	var self = this;
	if (Array.isArray(x)) {
		x.forEach(function (a) {
			self.rect.apply(self, a.concat(args));
		});
		return this;
	}

	var rect = XMLNode('rect');
	this.currentContext().appendChild(rect);
	this.setAttributes(rect, extend({
		x: x,
		y: y,
		width: width,
		height: height
	}, args));

	return this;
};

SVG.prototype.circle = function (cx, cy, r, args) {
	var circle = XMLNode('circle');
	this.currentContext().appendChild(circle);
	this.setAttributes(circle, extend({
		cx: cx,
		cy: cy,
		r: r
	}, args));

	return this;
};

SVG.prototype.path = function (str, args) {
	var path = XMLNode('path');
	this.currentContext().appendChild(path);
	this.setAttributes(path, extend({
		d: str
	}, args));

	return this;
};

SVG.prototype.polyline = function (str, args) {
	// Accept array first argument
	var self = this;
	if (Array.isArray(str)) {
		str.forEach(function (s) {
			self.polyline(s, args);
		});
		return this;
	}

	var polyline = XMLNode('polyline');
	this.currentContext().appendChild(polyline);
	this.setAttributes(polyline, extend({
		points: str
	}, args));

	return this;
};

// group and context are hacks
SVG.prototype.group = function (args) {
	var group = XMLNode('g');
	this.currentContext().appendChild(group);
	this.context.push(group);
	this.setAttributes(group, extend({}, args));
	return this;
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var XMLNode = module.exports = function (tagName) {
	if (!(this instanceof XMLNode)) {
		return new XMLNode(tagName);
	}

	this.tagName = tagName;
	this.attributes = Object.create(null);
	this.children = [];
	this.lastChild = null;

	return this;
};

XMLNode.prototype.appendChild = function (child) {
	this.children.push(child);
	this.lastChild = child;

	return this;
};

XMLNode.prototype.setAttribute = function (name, value) {
	this.attributes[name] = value;

	return this;
};

XMLNode.prototype.toString = function () {
	var self = this;

	return [
		'<',
		self.tagName,
		Object.keys(self.attributes).map(function (attr) {
			return [
				' ',
				attr,
				'="',
				self.attributes[attr],
				'"'
			].join('');
		}).join(''),
		'>',
		self.children.map(function (child) {
			return child.toString();
		}).join(''),
		'</',
		self.tagName,
		'>'
	].join('');
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(3);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(6);

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(9);

var _PathUtils = __webpack_require__(4);

var _createTransitionManager = __webpack_require__(10);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _DOMUtils = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

var getHistoryState = function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
};

/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */
var createBrowserHistory = function createBrowserHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Browser history needs a DOM');

  var globalHistory = window.history;
  var canUseHistory = (0, _DOMUtils.supportsHistory)();
  var needsHashChangeListener = !(0, _DOMUtils.supportsPopStateOnHashChange)();

  var _props$forceRefresh = props.forceRefresh,
      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
      _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

  var getDOMLocation = function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;


    var path = pathname + search + hash;

    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);

    return (0, _LocationUtils.createLocation)(path, state, key);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var handlePopState = function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if ((0, _DOMUtils.isExtraneousPopstateEvent)(event)) return;

    handlePop(getDOMLocation(event.state));
  };

  var handleHashChange = function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  };

  var forceNextPop = false;

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allKeys.indexOf(fromLocation.key);

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key];

  // Public interface

  var createHref = function createHref(location) {
    return basename + (0, _PathUtils.createPath)(location);
  };

  var push = function push(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.pushState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

          nextKeys.push(location.key);
          allKeys = nextKeys;

          setState({ action: action, location: location });
        }
      } else {
        (0, _warning2.default)(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');

        window.location.href = href;
      }
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.replaceState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);

          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

          setState({ action: action, location: location });
        }
      } else {
        (0, _warning2.default)(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');

        window.location.replace(href);
      }
    });
  };

  var go = function go(n) {
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      (0, _DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      (0, _DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createBrowserHistory;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(3);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(6);

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(9);

var _PathUtils = __webpack_require__(4);

var _createTransitionManager = __webpack_require__(10);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _DOMUtils = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HashChangeEvent = 'hashchange';

var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + (0, _PathUtils.stripLeadingSlash)(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: _PathUtils.stripLeadingSlash,
    decodePath: _PathUtils.addLeadingSlash
  },
  slash: {
    encodePath: _PathUtils.addLeadingSlash,
    decodePath: _PathUtils.addLeadingSlash
  }
};

var getHashPath = function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
};

var pushHashPath = function pushHashPath(path) {
  return window.location.hash = path;
};

var replaceHashPath = function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');

  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
};

var createHashHistory = function createHashHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Hash history needs a DOM');

  var globalHistory = window.history;
  var canGoWithoutReload = (0, _DOMUtils.supportsGoWithoutReloadUsingHash)();

  var _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
      _props$hashType = props.hashType,
      hashType = _props$hashType === undefined ? 'slash' : _props$hashType;

  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;


  var getDOMLocation = function getDOMLocation() {
    var path = decodePath(getHashPath());

    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);

    return (0, _LocationUtils.createLocation)(path);
  };

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var forceNextPop = false;
  var ignorePath = null;

  var handleHashChange = function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;

      if (!forceNextPop && (0, _LocationUtils.locationsAreEqual)(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === (0, _PathUtils.createPath)(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;

      handlePop(location);
    }
  };

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(toLocation));

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(fromLocation));

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  // Ensure the hash is encoded properly before doing anything else.
  var path = getHashPath();
  var encodedPath = encodePath(path);

  if (path !== encodedPath) replaceHashPath(encodedPath);

  var initialLocation = getDOMLocation();
  var allPaths = [(0, _PathUtils.createPath)(initialLocation)];

  // Public interface

  var createHref = function createHref(location) {
    return '#' + encodePath(basename + (0, _PathUtils.createPath)(location));
  };

  var push = function push(path, state) {
    (0, _warning2.default)(state === undefined, 'Hash history cannot push state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = (0, _PathUtils.createPath)(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);

        var prevIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

        nextPaths.push(path);
        allPaths = nextPaths;

        setState({ action: action, location: location });
      } else {
        (0, _warning2.default)(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');

        setState();
      }
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(state === undefined, 'Hash history cannot replace state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = (0, _PathUtils.createPath)(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf((0, _PathUtils.createPath)(history.location));

      if (prevIndex !== -1) allPaths[prevIndex] = path;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    (0, _warning2.default)(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');

    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createHashHistory;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(3);

var _warning2 = _interopRequireDefault(_warning);

var _PathUtils = __webpack_require__(4);

var _LocationUtils = __webpack_require__(9);

var _createTransitionManager = __webpack_require__(10);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clamp = function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
};

/**
 * Creates a history object that stores locations in memory.
 */
var createMemoryHistory = function createMemoryHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var getUserConfirmation = props.getUserConfirmation,
      _props$initialEntries = props.initialEntries,
      initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries,
      _props$initialIndex = props.initialIndex,
      initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;


  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = history.entries.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? (0, _LocationUtils.createLocation)(entry, undefined, createKey()) : (0, _LocationUtils.createLocation)(entry, undefined, entry.key || createKey());
  });

  // Public interface

  var createHref = _PathUtils.createPath;

  var push = function push(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;

      var nextEntries = history.entries.slice(0);
      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      history.entries[history.index] = location;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);

    var action = 'POP';
    var location = history.entries[nextIndex];

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var canGo = function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  };

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return transitionManager.setPrompt(prompt);
  };

  var listen = function listen(listener) {
    return transitionManager.appendListener(listener);
  };

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createMemoryHistory;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */


var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    arguments: true,
    arity: true
};

var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
        var keys = Object.getOwnPropertyNames(sourceComponent);

        /* istanbul ignore else */
        if (isGetOwnPropertySymbolsAvailable) {
            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
                try {
                    targetComponent[keys[i]] = sourceComponent[keys[i]];
                } catch (error) {

                }
            }
        }
    }

    return targetComponent;
};


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getRawTag_js__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectToString_js__ = __webpack_require__(64);




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__getRawTag_js__["a" /* default */])(value)
    : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__objectToString_js__["a" /* default */])(value);
}

/* harmony default export */ __webpack_exports__["a"] = (baseGetTag);


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(28)))

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overArg_js__ = __webpack_require__(65);


/** Built-in value references. */
var getPrototype = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__overArg_js__["a" /* default */])(Object.getPrototypeOf, Object);

/* harmony default export */ __webpack_exports__["a"] = (getPrototype);


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(21);


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (getRawTag);


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ __webpack_exports__["a"] = (objectToString);


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (overArg);


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__(61);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["a"] = (root);


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ __webpack_exports__["a"] = (isObjectLike);


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return h; });
/* unused harmony export createElement */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return cloneElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return render; });
/* unused harmony export rerender */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return options; });
/** Virtual DOM Node */
function VNode() {}

/** Global options
 *	@public
 *	@namespace options {Object}
 */
var options = {

	/** If `true`, `prop` changes trigger synchronous component updates.
  *	@name syncComponentUpdates
  *	@type Boolean
  *	@default true
  */
	//syncComponentUpdates: true,

	/** Processes all created VNodes.
  *	@param {VNode} vnode	A newly-created VNode to normalize/process
  */
	//vnode(vnode) { }

	/** Hook invoked after a component is mounted. */
	// afterMount(component) { }

	/** Hook invoked after the DOM is updated with a component's latest render. */
	// afterUpdate(component) { }

	/** Hook invoked immediately before a component is unmounted. */
	// beforeUnmount(component) { }
};

var stack = [];

var EMPTY_CHILDREN = [];

/** JSX/hyperscript reviver
*	Benchmarks: https://esbench.com/bench/57ee8f8e330ab09900a1a1a0
 *	@see http://jasonformat.com/wtf-is-jsx
 *	@public
 */
function h(nodeName, attributes) {
	var children = EMPTY_CHILDREN,
	    lastSimple,
	    child,
	    simple,
	    i;
	for (i = arguments.length; i-- > 2;) {
		stack.push(arguments[i]);
	}
	if (attributes && attributes.children != null) {
		if (!stack.length) stack.push(attributes.children);
		delete attributes.children;
	}
	while (stack.length) {
		if ((child = stack.pop()) && child.pop !== undefined) {
			for (i = child.length; i--;) {
				stack.push(child[i]);
			}
		} else {
			if (typeof child === 'boolean') child = null;

			if (simple = typeof nodeName !== 'function') {
				if (child == null) child = '';else if (typeof child === 'number') child = String(child);else if (typeof child !== 'string') simple = false;
			}

			if (simple && lastSimple) {
				children[children.length - 1] += child;
			} else if (children === EMPTY_CHILDREN) {
				children = [child];
			} else {
				children.push(child);
			}

			lastSimple = simple;
		}
	}

	var p = new VNode();
	p.nodeName = nodeName;
	p.children = children;
	p.attributes = attributes == null ? undefined : attributes;
	p.key = attributes == null ? undefined : attributes.key;

	// if a "vnode hook" is defined, pass every created VNode to it
	if (options.vnode !== undefined) options.vnode(p);

	return p;
}

/** Copy own-properties from `props` onto `obj`.
 *	@returns obj
 *	@private
 */
function extend(obj, props) {
  for (var i in props) {
    obj[i] = props[i];
  }return obj;
}

/** Call a function asynchronously, as soon as possible.
 *	@param {Function} callback
 */
var defer = typeof Promise == 'function' ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

function cloneElement(vnode, props) {
	return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
}

// DOM properties that should NOT have "px" added when numeric
var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

/** Managed queue of dirty components to be re-rendered */

var items = [];

function enqueueRender(component) {
	if (!component._dirty && (component._dirty = true) && items.push(component) == 1) {
		(options.debounceRendering || defer)(rerender);
	}
}

function rerender() {
	var p,
	    list = items;
	items = [];
	while (p = list.pop()) {
		if (p._dirty) renderComponent(p);
	}
}

/** Check if two nodes are equivalent.
 *	@param {Element} node
 *	@param {VNode} vnode
 *	@private
 */
function isSameNodeType(node, vnode, hydrating) {
	if (typeof vnode === 'string' || typeof vnode === 'number') {
		return node.splitText !== undefined;
	}
	if (typeof vnode.nodeName === 'string') {
		return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
	}
	return hydrating || node._componentConstructor === vnode.nodeName;
}

/** Check if an Element has a given normalized name.
*	@param {Element} node
*	@param {String} nodeName
 */
function isNamedNode(node, nodeName) {
	return node.normalizedNodeName === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
}

/**
 * Reconstruct Component-style `props` from a VNode.
 * Ensures default/fallback values from `defaultProps`:
 * Own-properties of `defaultProps` not present in `vnode.attributes` are added.
 * @param {VNode} vnode
 * @returns {Object} props
 */
function getNodeProps(vnode) {
	var props = extend({}, vnode.attributes);
	props.children = vnode.children;

	var defaultProps = vnode.nodeName.defaultProps;
	if (defaultProps !== undefined) {
		for (var i in defaultProps) {
			if (props[i] === undefined) {
				props[i] = defaultProps[i];
			}
		}
	}

	return props;
}

/** Create an element with the given nodeName.
 *	@param {String} nodeName
 *	@param {Boolean} [isSvg=false]	If `true`, creates an element within the SVG namespace.
 *	@returns {Element} node
 */
function createNode(nodeName, isSvg) {
	var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
	node.normalizedNodeName = nodeName;
	return node;
}

/** Remove a child node from its parent if attached.
 *	@param {Element} node		The node to remove
 */
function removeNode(node) {
	var parentNode = node.parentNode;
	if (parentNode) parentNode.removeChild(node);
}

/** Set a named attribute on the given Node, with special behavior for some names and event handlers.
 *	If `value` is `null`, the attribute/handler will be removed.
 *	@param {Element} node	An element to mutate
 *	@param {string} name	The name/key to set, such as an event or attribute name
 *	@param {any} old	The last value that was set for this name/node pair
 *	@param {any} value	An attribute value, such as a function to be used as an event handler
 *	@param {Boolean} isSvg	Are we currently diffing inside an svg?
 *	@private
 */
function setAccessor(node, name, old, value, isSvg) {
	if (name === 'className') name = 'class';

	if (name === 'key') {
		// ignore
	} else if (name === 'ref') {
		if (old) old(null);
		if (value) value(node);
	} else if (name === 'class' && !isSvg) {
		node.className = value || '';
	} else if (name === 'style') {
		if (!value || typeof value === 'string' || typeof old === 'string') {
			node.style.cssText = value || '';
		}
		if (value && typeof value === 'object') {
			if (typeof old !== 'string') {
				for (var i in old) {
					if (!(i in value)) node.style[i] = '';
				}
			}
			for (var i in value) {
				node.style[i] = typeof value[i] === 'number' && IS_NON_DIMENSIONAL.test(i) === false ? value[i] + 'px' : value[i];
			}
		}
	} else if (name === 'dangerouslySetInnerHTML') {
		if (value) node.innerHTML = value.__html || '';
	} else if (name[0] == 'o' && name[1] == 'n') {
		var useCapture = name !== (name = name.replace(/Capture$/, ''));
		name = name.toLowerCase().substring(2);
		if (value) {
			if (!old) node.addEventListener(name, eventProxy, useCapture);
		} else {
			node.removeEventListener(name, eventProxy, useCapture);
		}
		(node._listeners || (node._listeners = {}))[name] = value;
	} else if (name !== 'list' && name !== 'type' && !isSvg && name in node) {
		setProperty(node, name, value == null ? '' : value);
		if (value == null || value === false) node.removeAttribute(name);
	} else {
		var ns = isSvg && name !== (name = name.replace(/^xlink\:?/, ''));
		if (value == null || value === false) {
			if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase());else node.removeAttribute(name);
		} else if (typeof value !== 'function') {
			if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);else node.setAttribute(name, value);
		}
	}
}

/** Attempt to set a DOM property to the given value.
 *	IE & FF throw for certain property-value combinations.
 */
function setProperty(node, name, value) {
	try {
		node[name] = value;
	} catch (e) {}
}

/** Proxy an event to hooked event handlers
 *	@private
 */
function eventProxy(e) {
	return this._listeners[e.type](options.event && options.event(e) || e);
}

/** Queue of components that have been mounted and are awaiting componentDidMount */
var mounts = [];

/** Diff recursion count, used to track the end of the diff cycle. */
var diffLevel = 0;

/** Global flag indicating if the diff is currently within an SVG */
var isSvgMode = false;

/** Global flag indicating if the diff is performing hydration */
var hydrating = false;

/** Invoke queued componentDidMount lifecycle methods */
function flushMounts() {
	var c;
	while (c = mounts.pop()) {
		if (options.afterMount) options.afterMount(c);
		if (c.componentDidMount) c.componentDidMount();
	}
}

/** Apply differences in a given vnode (and it's deep children) to a real DOM Node.
 *	@param {Element} [dom=null]		A DOM node to mutate into the shape of the `vnode`
 *	@param {VNode} vnode			A VNode (with descendants forming a tree) representing the desired DOM structure
 *	@returns {Element} dom			The created/mutated element
 *	@private
 */
function diff(dom, vnode, context, mountAll, parent, componentRoot) {
	// diffLevel having been 0 here indicates initial entry into the diff (not a subdiff)
	if (!diffLevel++) {
		// when first starting the diff, check if we're diffing an SVG or within an SVG
		isSvgMode = parent != null && parent.ownerSVGElement !== undefined;

		// hydration is indicated by the existing element to be diffed not having a prop cache
		hydrating = dom != null && !('__preactattr_' in dom);
	}

	var ret = idiff(dom, vnode, context, mountAll, componentRoot);

	// append the element if its a new parent
	if (parent && ret.parentNode !== parent) parent.appendChild(ret);

	// diffLevel being reduced to 0 means we're exiting the diff
	if (! --diffLevel) {
		hydrating = false;
		// invoke queued componentDidMount lifecycle methods
		if (!componentRoot) flushMounts();
	}

	return ret;
}

/** Internals of `diff()`, separated to allow bypassing diffLevel / mount flushing. */
function idiff(dom, vnode, context, mountAll, componentRoot) {
	var out = dom,
	    prevSvgMode = isSvgMode;

	// empty values (null, undefined, booleans) render as empty Text nodes
	if (vnode == null || typeof vnode === 'boolean') vnode = '';

	// Fast case: Strings & Numbers create/update Text nodes.
	if (typeof vnode === 'string' || typeof vnode === 'number') {

		// update if it's already a Text node:
		if (dom && dom.splitText !== undefined && dom.parentNode && (!dom._component || componentRoot)) {
			/* istanbul ignore if */ /* Browser quirk that can't be covered: https://github.com/developit/preact/commit/fd4f21f5c45dfd75151bd27b4c217d8003aa5eb9 */
			if (dom.nodeValue != vnode) {
				dom.nodeValue = vnode;
			}
		} else {
			// it wasn't a Text node: replace it with one and recycle the old Element
			out = document.createTextNode(vnode);
			if (dom) {
				if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
				recollectNodeTree(dom, true);
			}
		}

		out['__preactattr_'] = true;

		return out;
	}

	// If the VNode represents a Component, perform a component diff:
	var vnodeName = vnode.nodeName;
	if (typeof vnodeName === 'function') {
		return buildComponentFromVNode(dom, vnode, context, mountAll);
	}

	// Tracks entering and exiting SVG namespace when descending through the tree.
	isSvgMode = vnodeName === 'svg' ? true : vnodeName === 'foreignObject' ? false : isSvgMode;

	// If there's no existing element or it's the wrong type, create a new one:
	vnodeName = String(vnodeName);
	if (!dom || !isNamedNode(dom, vnodeName)) {
		out = createNode(vnodeName, isSvgMode);

		if (dom) {
			// move children into the replacement node
			while (dom.firstChild) {
				out.appendChild(dom.firstChild);
			} // if the previous Element was mounted into the DOM, replace it inline
			if (dom.parentNode) dom.parentNode.replaceChild(out, dom);

			// recycle the old element (skips non-Element node types)
			recollectNodeTree(dom, true);
		}
	}

	var fc = out.firstChild,
	    props = out['__preactattr_'],
	    vchildren = vnode.children;

	if (props == null) {
		props = out['__preactattr_'] = {};
		for (var a = out.attributes, i = a.length; i--;) {
			props[a[i].name] = a[i].value;
		}
	}

	// Optimization: fast-path for elements containing a single TextNode:
	if (!hydrating && vchildren && vchildren.length === 1 && typeof vchildren[0] === 'string' && fc != null && fc.splitText !== undefined && fc.nextSibling == null) {
		if (fc.nodeValue != vchildren[0]) {
			fc.nodeValue = vchildren[0];
		}
	}
	// otherwise, if there are existing or new children, diff them:
	else if (vchildren && vchildren.length || fc != null) {
			innerDiffNode(out, vchildren, context, mountAll, hydrating || props.dangerouslySetInnerHTML != null);
		}

	// Apply attributes/props from VNode to the DOM Element:
	diffAttributes(out, vnode.attributes, props);

	// restore previous SVG mode: (in case we're exiting an SVG namespace)
	isSvgMode = prevSvgMode;

	return out;
}

/** Apply child and attribute changes between a VNode and a DOM Node to the DOM.
 *	@param {Element} dom			Element whose children should be compared & mutated
 *	@param {Array} vchildren		Array of VNodes to compare to `dom.childNodes`
 *	@param {Object} context			Implicitly descendant context object (from most recent `getChildContext()`)
 *	@param {Boolean} mountAll
 *	@param {Boolean} isHydrating	If `true`, consumes externally created elements similar to hydration
 */
function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
	var originalChildren = dom.childNodes,
	    children = [],
	    keyed = {},
	    keyedLen = 0,
	    min = 0,
	    len = originalChildren.length,
	    childrenLen = 0,
	    vlen = vchildren ? vchildren.length : 0,
	    j,
	    c,
	    f,
	    vchild,
	    child;

	// Build up a map of keyed children and an Array of unkeyed children:
	if (len !== 0) {
		for (var i = 0; i < len; i++) {
			var _child = originalChildren[i],
			    props = _child['__preactattr_'],
			    key = vlen && props ? _child._component ? _child._component.__key : props.key : null;
			if (key != null) {
				keyedLen++;
				keyed[key] = _child;
			} else if (props || (_child.splitText !== undefined ? isHydrating ? _child.nodeValue.trim() : true : isHydrating)) {
				children[childrenLen++] = _child;
			}
		}
	}

	if (vlen !== 0) {
		for (var i = 0; i < vlen; i++) {
			vchild = vchildren[i];
			child = null;

			// attempt to find a node based on key matching
			var key = vchild.key;
			if (key != null) {
				if (keyedLen && keyed[key] !== undefined) {
					child = keyed[key];
					keyed[key] = undefined;
					keyedLen--;
				}
			}
			// attempt to pluck a node of the same type from the existing children
			else if (!child && min < childrenLen) {
					for (j = min; j < childrenLen; j++) {
						if (children[j] !== undefined && isSameNodeType(c = children[j], vchild, isHydrating)) {
							child = c;
							children[j] = undefined;
							if (j === childrenLen - 1) childrenLen--;
							if (j === min) min++;
							break;
						}
					}
				}

			// morph the matched/found/created DOM child to match vchild (deep)
			child = idiff(child, vchild, context, mountAll);

			f = originalChildren[i];
			if (child && child !== dom && child !== f) {
				if (f == null) {
					dom.appendChild(child);
				} else if (child === f.nextSibling) {
					removeNode(f);
				} else {
					dom.insertBefore(child, f);
				}
			}
		}
	}

	// remove unused keyed children:
	if (keyedLen) {
		for (var i in keyed) {
			if (keyed[i] !== undefined) recollectNodeTree(keyed[i], false);
		}
	}

	// remove orphaned unkeyed children:
	while (min <= childrenLen) {
		if ((child = children[childrenLen--]) !== undefined) recollectNodeTree(child, false);
	}
}

/** Recursively recycle (or just unmount) a node and its descendants.
 *	@param {Node} node						DOM node to start unmount/removal from
 *	@param {Boolean} [unmountOnly=false]	If `true`, only triggers unmount lifecycle, skips removal
 */
function recollectNodeTree(node, unmountOnly) {
	var component = node._component;
	if (component) {
		// if node is owned by a Component, unmount that component (ends up recursing back here)
		unmountComponent(component);
	} else {
		// If the node's VNode had a ref function, invoke it with null here.
		// (this is part of the React spec, and smart for unsetting references)
		if (node['__preactattr_'] != null && node['__preactattr_'].ref) node['__preactattr_'].ref(null);

		if (unmountOnly === false || node['__preactattr_'] == null) {
			removeNode(node);
		}

		removeChildren(node);
	}
}

/** Recollect/unmount all children.
 *	- we use .lastChild here because it causes less reflow than .firstChild
 *	- it's also cheaper than accessing the .childNodes Live NodeList
 */
function removeChildren(node) {
	node = node.lastChild;
	while (node) {
		var next = node.previousSibling;
		recollectNodeTree(node, true);
		node = next;
	}
}

/** Apply differences in attributes from a VNode to the given DOM Element.
 *	@param {Element} dom		Element with attributes to diff `attrs` against
 *	@param {Object} attrs		The desired end-state key-value attribute pairs
 *	@param {Object} old			Current/previous attributes (from previous VNode or element's prop cache)
 */
function diffAttributes(dom, attrs, old) {
	var name;

	// remove attributes no longer present on the vnode by setting them to undefined
	for (name in old) {
		if (!(attrs && attrs[name] != null) && old[name] != null) {
			setAccessor(dom, name, old[name], old[name] = undefined, isSvgMode);
		}
	}

	// add new & update changed attributes
	for (name in attrs) {
		if (name !== 'children' && name !== 'innerHTML' && (!(name in old) || attrs[name] !== (name === 'value' || name === 'checked' ? dom[name] : old[name]))) {
			setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
		}
	}
}

/** Retains a pool of Components for re-use, keyed on component name.
 *	Note: since component names are not unique or even necessarily available, these are primarily a form of sharding.
 *	@private
 */
var components = {};

/** Reclaim a component for later re-use by the recycler. */
function collectComponent(component) {
	var name = component.constructor.name;
	(components[name] || (components[name] = [])).push(component);
}

/** Create a component. Normalizes differences between PFC's and classful Components. */
function createComponent(Ctor, props, context) {
	var list = components[Ctor.name],
	    inst;

	if (Ctor.prototype && Ctor.prototype.render) {
		inst = new Ctor(props, context);
		Component.call(inst, props, context);
	} else {
		inst = new Component(props, context);
		inst.constructor = Ctor;
		inst.render = doRender;
	}

	if (list) {
		for (var i = list.length; i--;) {
			if (list[i].constructor === Ctor) {
				inst.nextBase = list[i].nextBase;
				list.splice(i, 1);
				break;
			}
		}
	}
	return inst;
}

/** The `.render()` method for a PFC backing instance. */
function doRender(props, state, context) {
	return this.constructor(props, context);
}

/** Set a component's `props` (generally derived from JSX attributes).
 *	@param {Object} props
 *	@param {Object} [opts]
 *	@param {boolean} [opts.renderSync=false]	If `true` and {@link options.syncComponentUpdates} is `true`, triggers synchronous rendering.
 *	@param {boolean} [opts.render=true]			If `false`, no render will be triggered.
 */
function setComponentProps(component, props, opts, context, mountAll) {
	if (component._disable) return;
	component._disable = true;

	if (component.__ref = props.ref) delete props.ref;
	if (component.__key = props.key) delete props.key;

	if (!component.base || mountAll) {
		if (component.componentWillMount) component.componentWillMount();
	} else if (component.componentWillReceiveProps) {
		component.componentWillReceiveProps(props, context);
	}

	if (context && context !== component.context) {
		if (!component.prevContext) component.prevContext = component.context;
		component.context = context;
	}

	if (!component.prevProps) component.prevProps = component.props;
	component.props = props;

	component._disable = false;

	if (opts !== 0) {
		if (opts === 1 || options.syncComponentUpdates !== false || !component.base) {
			renderComponent(component, 1, mountAll);
		} else {
			enqueueRender(component);
		}
	}

	if (component.__ref) component.__ref(component);
}

/** Render a Component, triggering necessary lifecycle events and taking High-Order Components into account.
 *	@param {Component} component
 *	@param {Object} [opts]
 *	@param {boolean} [opts.build=false]		If `true`, component will build and store a DOM node if not already associated with one.
 *	@private
 */
function renderComponent(component, opts, mountAll, isChild) {
	if (component._disable) return;

	var props = component.props,
	    state = component.state,
	    context = component.context,
	    previousProps = component.prevProps || props,
	    previousState = component.prevState || state,
	    previousContext = component.prevContext || context,
	    isUpdate = component.base,
	    nextBase = component.nextBase,
	    initialBase = isUpdate || nextBase,
	    initialChildComponent = component._component,
	    skip = false,
	    rendered,
	    inst,
	    cbase;

	// if updating
	if (isUpdate) {
		component.props = previousProps;
		component.state = previousState;
		component.context = previousContext;
		if (opts !== 2 && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === false) {
			skip = true;
		} else if (component.componentWillUpdate) {
			component.componentWillUpdate(props, state, context);
		}
		component.props = props;
		component.state = state;
		component.context = context;
	}

	component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
	component._dirty = false;

	if (!skip) {
		rendered = component.render(props, state, context);

		// context to pass to the child, can be updated via (grand-)parent component
		if (component.getChildContext) {
			context = extend(extend({}, context), component.getChildContext());
		}

		var childComponent = rendered && rendered.nodeName,
		    toUnmount,
		    base;

		if (typeof childComponent === 'function') {
			// set up high order component link

			var childProps = getNodeProps(rendered);
			inst = initialChildComponent;

			if (inst && inst.constructor === childComponent && childProps.key == inst.__key) {
				setComponentProps(inst, childProps, 1, context, false);
			} else {
				toUnmount = inst;

				component._component = inst = createComponent(childComponent, childProps, context);
				inst.nextBase = inst.nextBase || nextBase;
				inst._parentComponent = component;
				setComponentProps(inst, childProps, 0, context, false);
				renderComponent(inst, 1, mountAll, true);
			}

			base = inst.base;
		} else {
			cbase = initialBase;

			// destroy high order component link
			toUnmount = initialChildComponent;
			if (toUnmount) {
				cbase = component._component = null;
			}

			if (initialBase || opts === 1) {
				if (cbase) cbase._component = null;
				base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, true);
			}
		}

		if (initialBase && base !== initialBase && inst !== initialChildComponent) {
			var baseParent = initialBase.parentNode;
			if (baseParent && base !== baseParent) {
				baseParent.replaceChild(base, initialBase);

				if (!toUnmount) {
					initialBase._component = null;
					recollectNodeTree(initialBase, false);
				}
			}
		}

		if (toUnmount) {
			unmountComponent(toUnmount);
		}

		component.base = base;
		if (base && !isChild) {
			var componentRef = component,
			    t = component;
			while (t = t._parentComponent) {
				(componentRef = t).base = base;
			}
			base._component = componentRef;
			base._componentConstructor = componentRef.constructor;
		}
	}

	if (!isUpdate || mountAll) {
		mounts.unshift(component);
	} else if (!skip) {
		// Ensure that pending componentDidMount() hooks of child components
		// are called before the componentDidUpdate() hook in the parent.
		// Note: disabled as it causes duplicate hooks, see https://github.com/developit/preact/issues/750
		// flushMounts();

		if (component.componentDidUpdate) {
			component.componentDidUpdate(previousProps, previousState, previousContext);
		}
		if (options.afterUpdate) options.afterUpdate(component);
	}

	if (component._renderCallbacks != null) {
		while (component._renderCallbacks.length) {
			component._renderCallbacks.pop().call(component);
		}
	}

	if (!diffLevel && !isChild) flushMounts();
}

/** Apply the Component referenced by a VNode to the DOM.
 *	@param {Element} dom	The DOM node to mutate
 *	@param {VNode} vnode	A Component-referencing VNode
 *	@returns {Element} dom	The created/mutated element
 *	@private
 */
function buildComponentFromVNode(dom, vnode, context, mountAll) {
	var c = dom && dom._component,
	    originalComponent = c,
	    oldDom = dom,
	    isDirectOwner = c && dom._componentConstructor === vnode.nodeName,
	    isOwner = isDirectOwner,
	    props = getNodeProps(vnode);
	while (c && !isOwner && (c = c._parentComponent)) {
		isOwner = c.constructor === vnode.nodeName;
	}

	if (c && isOwner && (!mountAll || c._component)) {
		setComponentProps(c, props, 3, context, mountAll);
		dom = c.base;
	} else {
		if (originalComponent && !isDirectOwner) {
			unmountComponent(originalComponent);
			dom = oldDom = null;
		}

		c = createComponent(vnode.nodeName, props, context);
		if (dom && !c.nextBase) {
			c.nextBase = dom;
			// passing dom/oldDom as nextBase will recycle it if unused, so bypass recycling on L229:
			oldDom = null;
		}
		setComponentProps(c, props, 1, context, mountAll);
		dom = c.base;

		if (oldDom && dom !== oldDom) {
			oldDom._component = null;
			recollectNodeTree(oldDom, false);
		}
	}

	return dom;
}

/** Remove a component from the DOM and recycle it.
 *	@param {Component} component	The Component instance to unmount
 *	@private
 */
function unmountComponent(component) {
	if (options.beforeUnmount) options.beforeUnmount(component);

	var base = component.base;

	component._disable = true;

	if (component.componentWillUnmount) component.componentWillUnmount();

	component.base = null;

	// recursively tear down & recollect high-order component children:
	var inner = component._component;
	if (inner) {
		unmountComponent(inner);
	} else if (base) {
		if (base['__preactattr_'] && base['__preactattr_'].ref) base['__preactattr_'].ref(null);

		component.nextBase = base;

		removeNode(base);
		collectComponent(component);

		removeChildren(base);
	}

	if (component.__ref) component.__ref(null);
}

/** Base Component class.
 *	Provides `setState()` and `forceUpdate()`, which trigger rendering.
 *	@public
 *
 *	@example
 *	class MyFoo extends Component {
 *		render(props, state) {
 *			return <div />;
 *		}
 *	}
 */
function Component(props, context) {
	this._dirty = true;

	/** @public
  *	@type {object}
  */
	this.context = context;

	/** @public
  *	@type {object}
  */
	this.props = props;

	/** @public
  *	@type {object}
  */
	this.state = this.state || {};
}

extend(Component.prototype, {

	/** Returns a `boolean` indicating if the component should re-render when receiving the given `props` and `state`.
  *	@param {object} nextProps
  *	@param {object} nextState
  *	@param {object} nextContext
  *	@returns {Boolean} should the component re-render
  *	@name shouldComponentUpdate
  *	@function
  */

	/** Update component state by copying properties from `state` to `this.state`.
  *	@param {object} state		A hash of state properties to update with new values
  *	@param {function} callback	A function to be called once component state is updated
  */
	setState: function setState(state, callback) {
		var s = this.state;
		if (!this.prevState) this.prevState = extend({}, s);
		extend(s, typeof state === 'function' ? state(s, this.props) : state);
		if (callback) (this._renderCallbacks = this._renderCallbacks || []).push(callback);
		enqueueRender(this);
	},


	/** Immediately perform a synchronous re-render of the component.
  *	@param {function} callback		A function to be called after component is re-rendered.
  *	@private
  */
	forceUpdate: function forceUpdate(callback) {
		if (callback) (this._renderCallbacks = this._renderCallbacks || []).push(callback);
		renderComponent(this, 2);
	},


	/** Accepts `props` and `state`, and returns a new Virtual DOM tree to build.
  *	Virtual DOM is generally constructed via [JSX](http://jasonformat.com/wtf-is-jsx).
  *	@param {object} props		Props (eg: JSX attributes) received from parent element/component
  *	@param {object} state		The component's current state
  *	@param {object} context		Context object (if a parent component has provided context)
  *	@returns VNode
  */
	render: function render() {}
});

/** Render JSX into a `parent` Element.
 *	@param {VNode} vnode		A (JSX) VNode to render
 *	@param {Element} parent		DOM element to render into
 *	@param {Element} [merge]	Attempt to re-use an existing DOM tree rooted at `merge`
 *	@public
 *
 *	@example
 *	// render a div into <body>:
 *	render(<div id="hello">hello!</div>, document.body);
 *
 *	@example
 *	// render a "Thing" component into #foo:
 *	const Thing = ({ name }) => <span>{ name }</span>;
 *	render(<Thing name="one" />, document.querySelector('#foo'));
 */
function render(vnode, parent, merge) {
  return diff(merge, vnode, {}, false, parent, false);
}

var preact = {
	h: h,
	createElement: h,
	cloneElement: cloneElement,
	Component: Component,
	render: render,
	rerender: rerender,
	options: options
};

/* unused harmony default export */ var _unused_webpack_default_export = (preact);
//# sourceMappingURL=preact.esm.js.map


/***/ }),
/* 69 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 70 */
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



var emptyFunction = __webpack_require__(49);
var invariant = __webpack_require__(50);
var ReactPropTypesSecret = __webpack_require__(71);

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
/* 71 */
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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (function(t) {
  var a = {};
  function r(n) {
    if (a[n]) return a[n].exports;
    var c = (a[n] = { i: n, l: !1, exports: {} });
    return t[n].call(c.exports, c, c.exports, r), (c.l = !0), c.exports;
  }
  return (
    (r.m = t),
    (r.c = a),
    (r.d = function(t, a, n) {
      r.o(t, a) || Object.defineProperty(t, a, { enumerable: !0, get: n });
    }),
    (r.r = function(t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (r.t = function(t, a) {
      if ((1 & a && (t = r(t)), 8 & a)) return t;
      if (4 & a && 'object' == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: t }),
        2 & a && 'string' != typeof t)
      )
        for (var c in t)
          r.d(
            n,
            c,
            function(a) {
              return t[a];
            }.bind(null, c),
          );
      return n;
    }),
    (r.n = function(t) {
      var a =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return r.d(a, 'a', a), a;
    }),
    (r.o = function(t, a) {
      return Object.prototype.hasOwnProperty.call(t, a);
    }),
    (r.p = ''),
    r((r.s = 1))
  );
})([
  function(t, a) {
    t.exports = __webpack_require__(0);
  },
  function(t, a, r) {
    'use strict';
    Object.defineProperty(a, '__esModule', { value: !0 });
    var n = (function() {
      function t(t, a) {
        for (var r = 0; r < a.length; r++) {
          var n = a[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      return function(a, r, n) {
        return r && t(a.prototype, r), n && t(a, n), a;
      };
    })();
    r(2);
    var c = r(0),
      e = h(c),
      v = h(r(7)),
      i = r(11),
      d = r(10);
    function h(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function o(t, a) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return !a || ('object' != typeof a && 'function' != typeof a) ? t : a;
    }
    var l = (function(t) {
      function a() {
        var t, r, n;
        !(function(t, a) {
          if (!(t instanceof a))
            throw new TypeError('Cannot call a class as a function');
        })(this, a);
        for (var c = arguments.length, e = Array(c), i = 0; i < c; i++)
          e[i] = arguments[i];
        return (
          (r = n = o(
            this,
            (t = a.__proto__ || Object.getPrototypeOf(a)).call.apply(
              t,
              [this].concat(e),
            ),
          )),
          (n.propTypes = {
            onAddToHomescreenClick: v.default.func,
            title: v.default.string,
            icon: v.default.string,
          }),
          (n.state = { bannerVisible: !0 }),
          (n.onAddToHomescreenClick = function() {
            n.props.onAddToHomescreenClick();
          }),
          (n.handleCloseBannerBtnClick = function() {
            return n.setState({ bannerVisible: !1 });
          }),
          o(n, r)
        );
      }
      return (
        (function(t, a) {
          if ('function' != typeof a && null !== a)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof a,
            );
          (t.prototype = Object.create(a && a.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            a &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, a)
                : (t.__proto__ = a));
        })(a, c.Component),
        n(a, [
          {
            key: 'render',
            value: function() {
              var t = this.props,
                a = t.title,
                r = t.icon,
                n =
                  this.state.bannerVisible &&
                  (0, d.isIos)() &&
                  !(0, d.isInStandaloneMode)();
              return e.default.createElement(
                'div',
                null,
                n
                  ? e.default.createElement(
                      'div',
                      { className: 'add-to-home-banner' },
                      e.default.createElement(
                        'div',
                        { className: 'add-to-home-content' },
                        r
                          ? e.default.createElement('img', {
                              className: 'add-to-home-icon',
                              src: r,
                            })
                          : null,
                        e.default.createElement(
                          'div',
                          { className: 'add-to-home-text' },
                          e.default.createElement(
                            'a',
                            { onClick: this.onAddToHomescreenClick },
                            a || 'Add to home screen',
                          ),
                        ),
                      ),
                      e.default.createElement(i.MdClose, {
                        className: 'add-to-home-close-btn',
                        onClick: this.handleCloseBannerBtnClick,
                      }),
                    )
                  : null,
              );
            },
          },
        ]),
        a
      );
    })();
    a.default = l;
  },
  function(t, a, r) {
    var n = r(3);
    'string' == typeof n && (n = [[t.i, n, '']]);
    var c = { hmr: !0, transform: void 0, insertInto: void 0 };
    r(5)(n, c);
    n.locals && (t.exports = n.locals);
  },
  function(t, a, r) {
    (t.exports = r(4)(!1)).push([
      t.i,
      '.add-to-home-banner {\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n  background: white;\n  color: black;\n  text-align: left;\n  -webkit-user-select: none;\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n  .add-to-home-banner .add-to-home-content {\n    display: flex;\n    align-items: center; }\n  .add-to-home-banner .add-to-home-icon {\n    width: 32px;\n    height: 32px;\n    padding: 10px;\n    padding-right: 0; }\n  .add-to-home-banner .add-to-home-text {\n    display: inline-block;\n    font-size: 16px;\n    padding-left: 10px; }\n  .add-to-home-banner .add-to-home-close-btn {\n    display: inline-block;\n    position: relative;\n    right: 4px;\n    float: right;\n    font-size: 32px; }\n',
      '',
    ]);
  },
  function(t, a) {
    t.exports = function(t) {
      var a = [];
      return (
        (a.toString = function() {
          return this.map(function(a) {
            var r = (function(t, a) {
              var r = t[1] || '',
                n = t[3];
              if (!n) return r;
              if (a && 'function' == typeof btoa) {
                var c = ((v = n),
                  '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(v)))) +
                    ' */'),
                  e = n.sources.map(function(t) {
                    return '/*# sourceURL=' + n.sourceRoot + t + ' */';
                  });
                return [r]
                  .concat(e)
                  .concat([c])
                  .join('\n');
              }
              var v;
              return [r].join('\n');
            })(a, t);
            return a[2] ? '@media ' + a[2] + '{' + r + '}' : r;
          }).join('');
        }),
        (a.i = function(t, r) {
          'string' == typeof t && (t = [[null, t, '']]);
          for (var n = {}, c = 0; c < this.length; c++) {
            var e = this[c][0];
            'number' == typeof e && (n[e] = !0);
          }
          for (c = 0; c < t.length; c++) {
            var v = t[c];
            ('number' == typeof v[0] && n[v[0]]) ||
              (r && !v[2]
                ? (v[2] = r)
                : r && (v[2] = '(' + v[2] + ') and (' + r + ')'),
              a.push(v));
          }
        }),
        a
      );
    };
  },
  function(t, a, r) {
    var n,
      c,
      e = {},
      v = ((n = function() {
        return window && document && document.all && !window.atob;
      }),
      function() {
        return void 0 === c && (c = n.apply(this, arguments)), c;
      }),
      i = (function(t) {
        var a = {};
        return function(t, r) {
          if ('function' == typeof t) return t();
          if (void 0 === a[t]) {
            var n = function(t, a) {
              return a ? a.querySelector(t) : document.querySelector(t);
            }.call(this, t, r);
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head;
              } catch (t) {
                n = null;
              }
            a[t] = n;
          }
          return a[t];
        };
      })(),
      d = null,
      h = 0,
      o = [],
      l = r(6);
    function u(t, a) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r],
          c = e[n.id];
        if (c) {
          c.refs++;
          for (var v = 0; v < c.parts.length; v++) c.parts[v](n.parts[v]);
          for (; v < n.parts.length; v++) c.parts.push(p(n.parts[v], a));
        } else {
          var i = [];
          for (v = 0; v < n.parts.length; v++) i.push(p(n.parts[v], a));
          e[n.id] = { id: n.id, refs: 1, parts: i };
        }
      }
    }
    function s(t, a) {
      for (var r = [], n = {}, c = 0; c < t.length; c++) {
        var e = t[c],
          v = a.base ? e[0] + a.base : e[0],
          i = { css: e[1], media: e[2], sourceMap: e[3] };
        n[v] ? n[v].parts.push(i) : r.push((n[v] = { id: v, parts: [i] }));
      }
      return r;
    }
    function M(t, a) {
      var r = i(t.insertInto);
      if (!r)
        throw new Error(
          "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.",
        );
      var n = o[o.length - 1];
      if ('top' === t.insertAt)
        n
          ? n.nextSibling
            ? r.insertBefore(a, n.nextSibling)
            : r.appendChild(a)
          : r.insertBefore(a, r.firstChild),
          o.push(a);
      else if ('bottom' === t.insertAt) r.appendChild(a);
      else {
        if ('object' != typeof t.insertAt || !t.insertAt.before)
          throw new Error(
            "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n",
          );
        var c = i(t.insertAt.before, r);
        r.insertBefore(a, c);
      }
    }
    function g(t) {
      if (null === t.parentNode) return !1;
      t.parentNode.removeChild(t);
      var a = o.indexOf(t);
      a >= 0 && o.splice(a, 1);
    }
    function z(t) {
      var a = document.createElement('style');
      if (
        (void 0 === t.attrs.type && (t.attrs.type = 'text/css'),
        void 0 === t.attrs.nonce)
      ) {
        var n = (function() {
          0;
          return r.nc;
        })();
        n && (t.attrs.nonce = n);
      }
      return m(a, t.attrs), M(t, a), a;
    }
    function m(t, a) {
      Object.keys(a).forEach(function(r) {
        t.setAttribute(r, a[r]);
      });
    }
    function p(t, a) {
      var r, n, c, e;
      if (a.transform && t.css) {
        if (
          !(e =
            'function' == typeof a.transform
              ? a.transform(t.css)
              : a.transform.default(t.css))
        )
          return function() {};
        t.css = e;
      }
      if (a.singleton) {
        var v = h++;
        (r = d || (d = z(a))),
          (n = V.bind(null, r, v, !1)),
          (c = V.bind(null, r, v, !0));
      } else
        t.sourceMap &&
        'function' == typeof URL &&
        'function' == typeof URL.createObjectURL &&
        'function' == typeof URL.revokeObjectURL &&
        'function' == typeof Blob &&
        'function' == typeof btoa
          ? ((r = (function(t) {
              var a = document.createElement('link');
              return (
                void 0 === t.attrs.type && (t.attrs.type = 'text/css'),
                (t.attrs.rel = 'stylesheet'),
                m(a, t.attrs),
                M(t, a),
                a
              );
            })(a)),
            (n = function(t, a, r) {
              var n = r.css,
                c = r.sourceMap,
                e = void 0 === a.convertToAbsoluteUrls && c;
              (a.convertToAbsoluteUrls || e) && (n = l(n));
              c &&
                (n +=
                  '\n/*# sourceMappingURL=data:application/json;base64,' +
                  btoa(unescape(encodeURIComponent(JSON.stringify(c)))) +
                  ' */');
              var v = new Blob([n], { type: 'text/css' }),
                i = t.href;
              (t.href = URL.createObjectURL(v)), i && URL.revokeObjectURL(i);
            }.bind(null, r, a)),
            (c = function() {
              g(r), r.href && URL.revokeObjectURL(r.href);
            }))
          : ((r = z(a)),
            (n = function(t, a) {
              var r = a.css,
                n = a.media;
              n && t.setAttribute('media', n);
              if (t.styleSheet) t.styleSheet.cssText = r;
              else {
                for (; t.firstChild; ) t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(r));
              }
            }.bind(null, r)),
            (c = function() {
              g(r);
            }));
      return (
        n(t),
        function(a) {
          if (a) {
            if (
              a.css === t.css &&
              a.media === t.media &&
              a.sourceMap === t.sourceMap
            )
              return;
            n((t = a));
          } else c();
        }
      );
    }
    t.exports = function(t, a) {
      if ('undefined' != typeof DEBUG && DEBUG && 'object' != typeof document)
        throw new Error(
          'The style-loader cannot be used in a non-browser environment',
        );
      ((a = a || {}).attrs = 'object' == typeof a.attrs ? a.attrs : {}),
        a.singleton || 'boolean' == typeof a.singleton || (a.singleton = v()),
        a.insertInto || (a.insertInto = 'head'),
        a.insertAt || (a.insertAt = 'bottom');
      var r = s(t, a);
      return (
        u(r, a),
        function(t) {
          for (var n = [], c = 0; c < r.length; c++) {
            var v = r[c];
            (i = e[v.id]).refs--, n.push(i);
          }
          t && u(s(t, a), a);
          for (c = 0; c < n.length; c++) {
            var i;
            if (0 === (i = n[c]).refs) {
              for (var d = 0; d < i.parts.length; d++) i.parts[d]();
              delete e[i.id];
            }
          }
        }
      );
    };
    var f,
      H = ((f = []),
      function(t, a) {
        return (f[t] = a), f.filter(Boolean).join('\n');
      });
    function V(t, a, r, n) {
      var c = r ? '' : n.css;
      if (t.styleSheet) t.styleSheet.cssText = H(a, c);
      else {
        var e = document.createTextNode(c),
          v = t.childNodes;
        v[a] && t.removeChild(v[a]),
          v.length ? t.insertBefore(e, v[a]) : t.appendChild(e);
      }
    }
  },
  function(t, a) {
    t.exports = function(t) {
      var a = 'undefined' != typeof window && window.location;
      if (!a) throw new Error('fixUrls requires window.location');
      if (!t || 'string' != typeof t) return t;
      var r = a.protocol + '//' + a.host,
        n = r + a.pathname.replace(/\/[^\/]*$/, '/');
      return t.replace(
        /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
        function(t, a) {
          var c,
            e = a
              .trim()
              .replace(/^"(.*)"$/, function(t, a) {
                return a;
              })
              .replace(/^'(.*)'$/, function(t, a) {
                return a;
              });
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(e)
            ? t
            : ((c =
                0 === e.indexOf('//')
                  ? e
                  : 0 === e.indexOf('/')
                  ? r + e
                  : n + e.replace(/^\.\//, '')),
              'url(' + JSON.stringify(c) + ')');
        },
      );
    };
  },
  function(t, a, r) {
    t.exports = r(8)();
  },
  function(t, a, r) {
    'use strict';
    var n = r(9);
    function c() {}
    t.exports = function() {
      function t(t, a, r, c, e, v) {
        if (v !== n) {
          var i = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
          );
          throw ((i.name = 'Invariant Violation'), i);
        }
      }
      function a() {
        return t;
      }
      t.isRequired = t;
      var r = {
        array: t,
        bool: t,
        func: t,
        number: t,
        object: t,
        string: t,
        symbol: t,
        any: t,
        arrayOf: a,
        element: t,
        instanceOf: a,
        node: t,
        objectOf: a,
        oneOf: a,
        oneOfType: a,
        shape: a,
        exact: a,
      };
      return (r.checkPropTypes = c), (r.PropTypes = r), r;
    };
  },
  function(t, a, r) {
    'use strict';
    t.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  },
  function(t, a, r) {
    'use strict';
    Object.defineProperty(a, '__esModule', { value: !0 });
    (a.isIos = function() {
      var t = window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test(t);
    }),
      (a.isInStandaloneMode = function() {
        return 'standalone' in window.navigator && window.navigator.standalone;
      });
  },
  function(t, a, r) {
    'use strict';
    r.r(a);
    var n = r(0),
      c = {
        color: void 0,
        size: void 0,
        className: void 0,
        style: void 0,
        attr: void 0,
      },
      e = n.createContext && n.createContext(c),
      v = function() {
        return (v =
          Object.assign ||
          function(t) {
            for (var a, r = 1, n = arguments.length; r < n; r++)
              for (var c in (a = arguments[r]))
                Object.prototype.hasOwnProperty.call(a, c) && (t[c] = a[c]);
            return t;
          }).apply(this, arguments);
      },
      i = function(t, a) {
        var r = {};
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) &&
            a.indexOf(n) < 0 &&
            (r[n] = t[n]);
        if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
          var c = 0;
          for (n = Object.getOwnPropertySymbols(t); c < n.length; c++)
            a.indexOf(n[c]) < 0 && (r[n[c]] = t[n[c]]);
        }
        return r;
      };
    function d(t) {
      return function(a) {
        return n.createElement(
          h,
          v({ attr: v({}, t.attr) }, a),
          (function t(a) {
            return (
              a &&
              a.map(function(a, r) {
                return n.createElement(
                  a.tag,
                  v({ key: r }, a.attr),
                  t(a.child),
                );
              })
            );
          })(t.child),
        );
      };
    }
    function h(t) {
      var a = function(a) {
        var r,
          c = t.size || a.size || '1em';
        a.className && (r = a.className),
          t.className && (r = (r ? r + ' ' : '') + t.className);
        var e = t.attr,
          d = i(t, ['attr']);
        return n.createElement(
          'svg',
          v(
            { stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
            a.attr,
            e,
            d,
            {
              className: r,
              style: v({ color: t.color || a.color }, a.style, t.style),
              height: c,
              width: c,
            },
          ),
          t.children,
        );
      };
      return void 0 !== e
        ? n.createElement(e.Consumer, null, function(t) {
            return a(t);
          })
        : a(c);
    }
    r.d(a, 'Md3dRotation', function() {
      return o;
    }),
      r.d(a, 'MdAccessibility', function() {
        return l;
      }),
      r.d(a, 'MdAccessible', function() {
        return u;
      }),
      r.d(a, 'MdAccountBalance', function() {
        return s;
      }),
      r.d(a, 'MdAccountBalanceWallet', function() {
        return M;
      }),
      r.d(a, 'MdAccountBox', function() {
        return g;
      }),
      r.d(a, 'MdAccountCircle', function() {
        return z;
      }),
      r.d(a, 'MdAddShoppingCart', function() {
        return m;
      }),
      r.d(a, 'MdAlarm', function() {
        return p;
      }),
      r.d(a, 'MdAlarmAdd', function() {
        return f;
      }),
      r.d(a, 'MdAlarmOff', function() {
        return H;
      }),
      r.d(a, 'MdAlarmOn', function() {
        return V;
      }),
      r.d(a, 'MdAllOut', function() {
        return y;
      }),
      r.d(a, 'MdAndroid', function() {
        return L;
      }),
      r.d(a, 'MdAnnouncement', function() {
        return B;
      }),
      r.d(a, 'MdAspectRatio', function() {
        return w;
      }),
      r.d(a, 'MdAssessment', function() {
        return x;
      }),
      r.d(a, 'MdAssignment', function() {
        return N;
      }),
      r.d(a, 'MdAssignmentInd', function() {
        return C;
      }),
      r.d(a, 'MdAssignmentLate', function() {
        return S;
      }),
      r.d(a, 'MdAssignmentReturn', function() {
        return A;
      }),
      r.d(a, 'MdAssignmentReturned', function() {
        return b;
      }),
      r.d(a, 'MdAssignmentTurnedIn', function() {
        return P;
      }),
      r.d(a, 'MdAutorenew', function() {
        return F;
      }),
      r.d(a, 'MdBackup', function() {
        return k;
      }),
      r.d(a, 'MdBook', function() {
        return O;
      }),
      r.d(a, 'MdBookmark', function() {
        return T;
      }),
      r.d(a, 'MdBookmarkBorder', function() {
        return R;
      }),
      r.d(a, 'MdBugReport', function() {
        return D;
      }),
      r.d(a, 'MdBuild', function() {
        return I;
      }),
      r.d(a, 'MdCached', function() {
        return E;
      }),
      r.d(a, 'MdCameraEnhance', function() {
        return W;
      }),
      r.d(a, 'MdCardGiftcard', function() {
        return U;
      }),
      r.d(a, 'MdCardMembership', function() {
        return G;
      }),
      r.d(a, 'MdCardTravel', function() {
        return j;
      }),
      r.d(a, 'MdChangeHistory', function() {
        return _;
      }),
      r.d(a, 'MdCheckCircle', function() {
        return K;
      }),
      r.d(a, 'MdChromeReaderMode', function() {
        return Q;
      }),
      r.d(a, 'MdClass', function() {
        return q;
      }),
      r.d(a, 'MdCode', function() {
        return Z;
      }),
      r.d(a, 'MdCompareArrows', function() {
        return J;
      }),
      r.d(a, 'MdCopyright', function() {
        return $;
      }),
      r.d(a, 'MdCreditCard', function() {
        return Y;
      }),
      r.d(a, 'MdDashboard', function() {
        return X;
      }),
      r.d(a, 'MdDateRange', function() {
        return tt;
      }),
      r.d(a, 'MdDelete', function() {
        return at;
      }),
      r.d(a, 'MdDeleteForever', function() {
        return rt;
      }),
      r.d(a, 'MdDescription', function() {
        return nt;
      }),
      r.d(a, 'MdDns', function() {
        return ct;
      }),
      r.d(a, 'MdDone', function() {
        return et;
      }),
      r.d(a, 'MdDoneAll', function() {
        return vt;
      }),
      r.d(a, 'MdDonutLarge', function() {
        return it;
      }),
      r.d(a, 'MdDonutSmall', function() {
        return dt;
      }),
      r.d(a, 'MdEject', function() {
        return ht;
      }),
      r.d(a, 'MdEuroSymbol', function() {
        return ot;
      }),
      r.d(a, 'MdEvent', function() {
        return lt;
      }),
      r.d(a, 'MdEventSeat', function() {
        return ut;
      }),
      r.d(a, 'MdExitToApp', function() {
        return st;
      }),
      r.d(a, 'MdExplore', function() {
        return Mt;
      }),
      r.d(a, 'MdExtension', function() {
        return gt;
      }),
      r.d(a, 'MdFace', function() {
        return zt;
      }),
      r.d(a, 'MdFavorite', function() {
        return mt;
      }),
      r.d(a, 'MdFavoriteBorder', function() {
        return pt;
      }),
      r.d(a, 'MdFeedback', function() {
        return ft;
      }),
      r.d(a, 'MdFindInPage', function() {
        return Ht;
      }),
      r.d(a, 'MdFindReplace', function() {
        return Vt;
      }),
      r.d(a, 'MdFingerprint', function() {
        return yt;
      }),
      r.d(a, 'MdFlightLand', function() {
        return Lt;
      }),
      r.d(a, 'MdFlightTakeoff', function() {
        return Bt;
      }),
      r.d(a, 'MdFlipToBack', function() {
        return wt;
      }),
      r.d(a, 'MdFlipToFront', function() {
        return xt;
      }),
      r.d(a, 'MdGTranslate', function() {
        return Nt;
      }),
      r.d(a, 'MdGavel', function() {
        return Ct;
      }),
      r.d(a, 'MdGetApp', function() {
        return St;
      }),
      r.d(a, 'MdGif', function() {
        return At;
      }),
      r.d(a, 'MdGrade', function() {
        return bt;
      }),
      r.d(a, 'MdGroupWork', function() {
        return Pt;
      }),
      r.d(a, 'MdHelp', function() {
        return Ft;
      }),
      r.d(a, 'MdHelpOutline', function() {
        return kt;
      }),
      r.d(a, 'MdHighlightOff', function() {
        return Ot;
      }),
      r.d(a, 'MdHistory', function() {
        return Tt;
      }),
      r.d(a, 'MdHome', function() {
        return Rt;
      }),
      r.d(a, 'MdHourglassEmpty', function() {
        return Dt;
      }),
      r.d(a, 'MdHourglassFull', function() {
        return It;
      }),
      r.d(a, 'MdHttp', function() {
        return Et;
      }),
      r.d(a, 'MdHttps', function() {
        return Wt;
      }),
      r.d(a, 'MdImportantDevices', function() {
        return Ut;
      }),
      r.d(a, 'MdInfo', function() {
        return Gt;
      }),
      r.d(a, 'MdInfoOutline', function() {
        return jt;
      }),
      r.d(a, 'MdInput', function() {
        return _t;
      }),
      r.d(a, 'MdInvertColors', function() {
        return Kt;
      }),
      r.d(a, 'MdLabel', function() {
        return Qt;
      }),
      r.d(a, 'MdLabelOutline', function() {
        return qt;
      }),
      r.d(a, 'MdLanguage', function() {
        return Zt;
      }),
      r.d(a, 'MdLaunch', function() {
        return Jt;
      }),
      r.d(a, 'MdLightbulbOutline', function() {
        return $t;
      }),
      r.d(a, 'MdLineStyle', function() {
        return Yt;
      }),
      r.d(a, 'MdLineWeight', function() {
        return Xt;
      }),
      r.d(a, 'MdList', function() {
        return ta;
      }),
      r.d(a, 'MdLock', function() {
        return aa;
      }),
      r.d(a, 'MdLockOpen', function() {
        return ra;
      }),
      r.d(a, 'MdLockOutline', function() {
        return na;
      }),
      r.d(a, 'MdLoyalty', function() {
        return ca;
      }),
      r.d(a, 'MdMarkunreadMailbox', function() {
        return ea;
      }),
      r.d(a, 'MdMotorcycle', function() {
        return va;
      }),
      r.d(a, 'MdNoteAdd', function() {
        return ia;
      }),
      r.d(a, 'MdOfflinePin', function() {
        return da;
      }),
      r.d(a, 'MdOpacity', function() {
        return ha;
      }),
      r.d(a, 'MdOpenInBrowser', function() {
        return oa;
      }),
      r.d(a, 'MdOpenInNew', function() {
        return la;
      }),
      r.d(a, 'MdOpenWith', function() {
        return ua;
      }),
      r.d(a, 'MdPageview', function() {
        return sa;
      }),
      r.d(a, 'MdPanTool', function() {
        return Ma;
      }),
      r.d(a, 'MdPayment', function() {
        return ga;
      }),
      r.d(a, 'MdPermCameraMic', function() {
        return za;
      }),
      r.d(a, 'MdPermContactCalendar', function() {
        return ma;
      }),
      r.d(a, 'MdPermDataSetting', function() {
        return pa;
      }),
      r.d(a, 'MdPermDeviceInformation', function() {
        return fa;
      }),
      r.d(a, 'MdPermIdentity', function() {
        return Ha;
      }),
      r.d(a, 'MdPermMedia', function() {
        return Va;
      }),
      r.d(a, 'MdPermPhoneMsg', function() {
        return ya;
      }),
      r.d(a, 'MdPermScanWifi', function() {
        return La;
      }),
      r.d(a, 'MdPets', function() {
        return Ba;
      }),
      r.d(a, 'MdPictureInPicture', function() {
        return wa;
      }),
      r.d(a, 'MdPictureInPictureAlt', function() {
        return xa;
      }),
      r.d(a, 'MdPlayForWork', function() {
        return Na;
      }),
      r.d(a, 'MdPolymer', function() {
        return Ca;
      }),
      r.d(a, 'MdPowerSettingsNew', function() {
        return Sa;
      }),
      r.d(a, 'MdPregnantWoman', function() {
        return Aa;
      }),
      r.d(a, 'MdPrint', function() {
        return ba;
      }),
      r.d(a, 'MdQueryBuilder', function() {
        return Pa;
      }),
      r.d(a, 'MdQuestionAnswer', function() {
        return Fa;
      }),
      r.d(a, 'MdReceipt', function() {
        return ka;
      }),
      r.d(a, 'MdRecordVoiceOver', function() {
        return Oa;
      }),
      r.d(a, 'MdRedeem', function() {
        return Ta;
      }),
      r.d(a, 'MdRemoveShoppingCart', function() {
        return Ra;
      }),
      r.d(a, 'MdReorder', function() {
        return Da;
      }),
      r.d(a, 'MdReportProblem', function() {
        return Ia;
      }),
      r.d(a, 'MdRestore', function() {
        return Ea;
      }),
      r.d(a, 'MdRestorePage', function() {
        return Wa;
      }),
      r.d(a, 'MdRoom', function() {
        return Ua;
      }),
      r.d(a, 'MdRoundedCorner', function() {
        return Ga;
      }),
      r.d(a, 'MdRowing', function() {
        return ja;
      }),
      r.d(a, 'MdSchedule', function() {
        return _a;
      }),
      r.d(a, 'MdSearch', function() {
        return Ka;
      }),
      r.d(a, 'MdSettings', function() {
        return Qa;
      }),
      r.d(a, 'MdSettingsApplications', function() {
        return qa;
      }),
      r.d(a, 'MdSettingsBackupRestore', function() {
        return Za;
      }),
      r.d(a, 'MdSettingsBluetooth', function() {
        return Ja;
      }),
      r.d(a, 'MdSettingsBrightness', function() {
        return $a;
      }),
      r.d(a, 'MdSettingsCell', function() {
        return Ya;
      }),
      r.d(a, 'MdSettingsEthernet', function() {
        return Xa;
      }),
      r.d(a, 'MdSettingsInputAntenna', function() {
        return tr;
      }),
      r.d(a, 'MdSettingsInputComponent', function() {
        return ar;
      }),
      r.d(a, 'MdSettingsInputComposite', function() {
        return rr;
      }),
      r.d(a, 'MdSettingsInputHdmi', function() {
        return nr;
      }),
      r.d(a, 'MdSettingsInputSvideo', function() {
        return cr;
      }),
      r.d(a, 'MdSettingsOverscan', function() {
        return er;
      }),
      r.d(a, 'MdSettingsPhone', function() {
        return vr;
      }),
      r.d(a, 'MdSettingsPower', function() {
        return ir;
      }),
      r.d(a, 'MdSettingsRemote', function() {
        return dr;
      }),
      r.d(a, 'MdSettingsVoice', function() {
        return hr;
      }),
      r.d(a, 'MdShop', function() {
        return or;
      }),
      r.d(a, 'MdShopTwo', function() {
        return lr;
      }),
      r.d(a, 'MdShoppingBasket', function() {
        return ur;
      }),
      r.d(a, 'MdShoppingCart', function() {
        return sr;
      }),
      r.d(a, 'MdSpeakerNotes', function() {
        return Mr;
      }),
      r.d(a, 'MdSpeakerNotesOff', function() {
        return gr;
      }),
      r.d(a, 'MdSpellcheck', function() {
        return zr;
      }),
      r.d(a, 'MdStars', function() {
        return mr;
      }),
      r.d(a, 'MdStore', function() {
        return pr;
      }),
      r.d(a, 'MdSubject', function() {
        return fr;
      }),
      r.d(a, 'MdSupervisorAccount', function() {
        return Hr;
      }),
      r.d(a, 'MdSwapHoriz', function() {
        return Vr;
      }),
      r.d(a, 'MdSwapVert', function() {
        return yr;
      }),
      r.d(a, 'MdSwapVerticalCircle', function() {
        return Lr;
      }),
      r.d(a, 'MdSystemUpdateAlt', function() {
        return Br;
      }),
      r.d(a, 'MdTab', function() {
        return wr;
      }),
      r.d(a, 'MdTabUnselected', function() {
        return xr;
      }),
      r.d(a, 'MdTheaters', function() {
        return Nr;
      }),
      r.d(a, 'MdThumbDown', function() {
        return Cr;
      }),
      r.d(a, 'MdThumbUp', function() {
        return Sr;
      }),
      r.d(a, 'MdThumbsUpDown', function() {
        return Ar;
      }),
      r.d(a, 'MdTimeline', function() {
        return br;
      }),
      r.d(a, 'MdToc', function() {
        return Pr;
      }),
      r.d(a, 'MdToday', function() {
        return Fr;
      }),
      r.d(a, 'MdToll', function() {
        return kr;
      }),
      r.d(a, 'MdTouchApp', function() {
        return Or;
      }),
      r.d(a, 'MdTrackChanges', function() {
        return Tr;
      }),
      r.d(a, 'MdTranslate', function() {
        return Rr;
      }),
      r.d(a, 'MdTrendingDown', function() {
        return Dr;
      }),
      r.d(a, 'MdTrendingFlat', function() {
        return Ir;
      }),
      r.d(a, 'MdTrendingUp', function() {
        return Er;
      }),
      r.d(a, 'MdTurnedIn', function() {
        return Wr;
      }),
      r.d(a, 'MdTurnedInNot', function() {
        return Ur;
      }),
      r.d(a, 'MdUpdate', function() {
        return Gr;
      }),
      r.d(a, 'MdVerifiedUser', function() {
        return jr;
      }),
      r.d(a, 'MdViewAgenda', function() {
        return _r;
      }),
      r.d(a, 'MdViewArray', function() {
        return Kr;
      }),
      r.d(a, 'MdViewCarousel', function() {
        return Qr;
      }),
      r.d(a, 'MdViewColumn', function() {
        return qr;
      }),
      r.d(a, 'MdViewDay', function() {
        return Zr;
      }),
      r.d(a, 'MdViewHeadline', function() {
        return Jr;
      }),
      r.d(a, 'MdViewList', function() {
        return $r;
      }),
      r.d(a, 'MdViewModule', function() {
        return Yr;
      }),
      r.d(a, 'MdViewQuilt', function() {
        return Xr;
      }),
      r.d(a, 'MdViewStream', function() {
        return tn;
      }),
      r.d(a, 'MdViewWeek', function() {
        return an;
      }),
      r.d(a, 'MdVisibility', function() {
        return rn;
      }),
      r.d(a, 'MdVisibilityOff', function() {
        return nn;
      }),
      r.d(a, 'MdWatchLater', function() {
        return cn;
      }),
      r.d(a, 'MdWork', function() {
        return en;
      }),
      r.d(a, 'MdYoutubeSearchedFor', function() {
        return vn;
      }),
      r.d(a, 'MdZoomIn', function() {
        return dn;
      }),
      r.d(a, 'MdZoomOut', function() {
        return hn;
      }),
      r.d(a, 'MdAddAlert', function() {
        return on;
      }),
      r.d(a, 'MdError', function() {
        return ln;
      }),
      r.d(a, 'MdErrorOutline', function() {
        return un;
      }),
      r.d(a, 'MdWarning', function() {
        return sn;
      }),
      r.d(a, 'MdAddToQueue', function() {
        return Mn;
      }),
      r.d(a, 'MdAirplay', function() {
        return gn;
      }),
      r.d(a, 'MdAlbum', function() {
        return zn;
      }),
      r.d(a, 'MdArtTrack', function() {
        return mn;
      }),
      r.d(a, 'MdAvTimer', function() {
        return pn;
      }),
      r.d(a, 'MdBrandingWatermark', function() {
        return fn;
      }),
      r.d(a, 'MdCallToAction', function() {
        return Hn;
      }),
      r.d(a, 'MdClosedCaption', function() {
        return Vn;
      }),
      r.d(a, 'MdEqualizer', function() {
        return yn;
      }),
      r.d(a, 'MdExplicit', function() {
        return Ln;
      }),
      r.d(a, 'MdFastForward', function() {
        return Bn;
      }),
      r.d(a, 'MdFastRewind', function() {
        return wn;
      }),
      r.d(a, 'MdFeaturedPlayList', function() {
        return xn;
      }),
      r.d(a, 'MdFeaturedVideo', function() {
        return Nn;
      }),
      r.d(a, 'MdFiberDvr', function() {
        return Cn;
      }),
      r.d(a, 'MdFiberManualRecord', function() {
        return Sn;
      }),
      r.d(a, 'MdFiberNew', function() {
        return An;
      }),
      r.d(a, 'MdFiberPin', function() {
        return bn;
      }),
      r.d(a, 'MdFiberSmartRecord', function() {
        return Pn;
      }),
      r.d(a, 'MdForward10', function() {
        return Fn;
      }),
      r.d(a, 'MdForward30', function() {
        return kn;
      }),
      r.d(a, 'MdForward5', function() {
        return On;
      }),
      r.d(a, 'MdGames', function() {
        return Tn;
      }),
      r.d(a, 'MdHd', function() {
        return Rn;
      }),
      r.d(a, 'MdHearing', function() {
        return Dn;
      }),
      r.d(a, 'MdHighQuality', function() {
        return In;
      }),
      r.d(a, 'MdLibraryAdd', function() {
        return En;
      }),
      r.d(a, 'MdLibraryBooks', function() {
        return Wn;
      }),
      r.d(a, 'MdLibraryMusic', function() {
        return Un;
      }),
      r.d(a, 'MdLoop', function() {
        return Gn;
      }),
      r.d(a, 'MdMic', function() {
        return jn;
      }),
      r.d(a, 'MdMicNone', function() {
        return _n;
      }),
      r.d(a, 'MdMicOff', function() {
        return Kn;
      }),
      r.d(a, 'MdMovie', function() {
        return Qn;
      }),
      r.d(a, 'MdMusicVideo', function() {
        return qn;
      }),
      r.d(a, 'MdNewReleases', function() {
        return Zn;
      }),
      r.d(a, 'MdNotInterested', function() {
        return Jn;
      }),
      r.d(a, 'MdNote', function() {
        return $n;
      }),
      r.d(a, 'MdPause', function() {
        return Yn;
      }),
      r.d(a, 'MdPauseCircleFilled', function() {
        return Xn;
      }),
      r.d(a, 'MdPauseCircleOutline', function() {
        return tc;
      }),
      r.d(a, 'MdPlayArrow', function() {
        return ac;
      }),
      r.d(a, 'MdPlayCircleFilled', function() {
        return rc;
      }),
      r.d(a, 'MdPlayCircleOutline', function() {
        return nc;
      }),
      r.d(a, 'MdPlaylistAdd', function() {
        return cc;
      }),
      r.d(a, 'MdPlaylistAddCheck', function() {
        return ec;
      }),
      r.d(a, 'MdPlaylistPlay', function() {
        return vc;
      }),
      r.d(a, 'MdQueue', function() {
        return ic;
      }),
      r.d(a, 'MdQueueMusic', function() {
        return dc;
      }),
      r.d(a, 'MdQueuePlayNext', function() {
        return hc;
      }),
      r.d(a, 'MdRadio', function() {
        return oc;
      }),
      r.d(a, 'MdRecentActors', function() {
        return lc;
      }),
      r.d(a, 'MdRemoveFromQueue', function() {
        return uc;
      }),
      r.d(a, 'MdRepeat', function() {
        return sc;
      }),
      r.d(a, 'MdRepeatOne', function() {
        return Mc;
      }),
      r.d(a, 'MdReplay10', function() {
        return gc;
      }),
      r.d(a, 'MdReplay', function() {
        return zc;
      }),
      r.d(a, 'MdReplay30', function() {
        return mc;
      }),
      r.d(a, 'MdReplay5', function() {
        return pc;
      }),
      r.d(a, 'MdShuffle', function() {
        return fc;
      }),
      r.d(a, 'MdSkipNext', function() {
        return Hc;
      }),
      r.d(a, 'MdSkipPrevious', function() {
        return Vc;
      }),
      r.d(a, 'MdSlowMotionVideo', function() {
        return yc;
      }),
      r.d(a, 'MdSnooze', function() {
        return Lc;
      }),
      r.d(a, 'MdSortByAlpha', function() {
        return Bc;
      }),
      r.d(a, 'MdStop', function() {
        return wc;
      }),
      r.d(a, 'MdSubscriptions', function() {
        return xc;
      }),
      r.d(a, 'MdSubtitles', function() {
        return Nc;
      }),
      r.d(a, 'MdSurroundSound', function() {
        return Cc;
      }),
      r.d(a, 'MdVideoCall', function() {
        return Sc;
      }),
      r.d(a, 'MdVideoLabel', function() {
        return Ac;
      }),
      r.d(a, 'MdVideoLibrary', function() {
        return bc;
      }),
      r.d(a, 'MdVideocam', function() {
        return Pc;
      }),
      r.d(a, 'MdVideocamOff', function() {
        return Fc;
      }),
      r.d(a, 'MdVolumeDown', function() {
        return kc;
      }),
      r.d(a, 'MdVolumeMute', function() {
        return Oc;
      }),
      r.d(a, 'MdVolumeOff', function() {
        return Tc;
      }),
      r.d(a, 'MdVolumeUp', function() {
        return Rc;
      }),
      r.d(a, 'MdWeb', function() {
        return Dc;
      }),
      r.d(a, 'MdWebAsset', function() {
        return Ic;
      }),
      r.d(a, 'MdBusiness', function() {
        return Ec;
      }),
      r.d(a, 'MdCall', function() {
        return Wc;
      }),
      r.d(a, 'MdCallEnd', function() {
        return Uc;
      }),
      r.d(a, 'MdCallMade', function() {
        return Gc;
      }),
      r.d(a, 'MdCallMerge', function() {
        return jc;
      }),
      r.d(a, 'MdCallMissed', function() {
        return _c;
      }),
      r.d(a, 'MdCallMissedOutgoing', function() {
        return Kc;
      }),
      r.d(a, 'MdCallReceived', function() {
        return Qc;
      }),
      r.d(a, 'MdCallSplit', function() {
        return qc;
      }),
      r.d(a, 'MdChat', function() {
        return Zc;
      }),
      r.d(a, 'MdChatBubble', function() {
        return Jc;
      }),
      r.d(a, 'MdChatBubbleOutline', function() {
        return $c;
      }),
      r.d(a, 'MdClearAll', function() {
        return Yc;
      }),
      r.d(a, 'MdComment', function() {
        return Xc;
      }),
      r.d(a, 'MdContactMail', function() {
        return te;
      }),
      r.d(a, 'MdContactPhone', function() {
        return ae;
      }),
      r.d(a, 'MdContacts', function() {
        return re;
      }),
      r.d(a, 'MdDialerSip', function() {
        return ne;
      }),
      r.d(a, 'MdDialpad', function() {
        return ce;
      }),
      r.d(a, 'MdEmail', function() {
        return ee;
      }),
      r.d(a, 'MdForum', function() {
        return ve;
      }),
      r.d(a, 'MdImportContacts', function() {
        return ie;
      }),
      r.d(a, 'MdImportExport', function() {
        return de;
      }),
      r.d(a, 'MdInvertColorsOff', function() {
        return he;
      }),
      r.d(a, 'MdLiveHelp', function() {
        return oe;
      }),
      r.d(a, 'MdLocationOff', function() {
        return le;
      }),
      r.d(a, 'MdLocationOn', function() {
        return ue;
      }),
      r.d(a, 'MdMailOutline', function() {
        return se;
      }),
      r.d(a, 'MdMessage', function() {
        return Me;
      }),
      r.d(a, 'MdNoSim', function() {
        return ge;
      }),
      r.d(a, 'MdPhone', function() {
        return ze;
      }),
      r.d(a, 'MdPhonelinkErase', function() {
        return me;
      }),
      r.d(a, 'MdPhonelinkLock', function() {
        return pe;
      }),
      r.d(a, 'MdPhonelinkRing', function() {
        return fe;
      }),
      r.d(a, 'MdPhonelinkSetup', function() {
        return He;
      }),
      r.d(a, 'MdPortableWifiOff', function() {
        return Ve;
      }),
      r.d(a, 'MdPresentToAll', function() {
        return ye;
      }),
      r.d(a, 'MdRingVolume', function() {
        return Le;
      }),
      r.d(a, 'MdRssFeed', function() {
        return Be;
      }),
      r.d(a, 'MdScreenShare', function() {
        return we;
      }),
      r.d(a, 'MdSpeakerPhone', function() {
        return xe;
      }),
      r.d(a, 'MdStayCurrentLandscape', function() {
        return Ne;
      }),
      r.d(a, 'MdStayCurrentPortrait', function() {
        return Ce;
      }),
      r.d(a, 'MdStayPrimaryLandscape', function() {
        return Se;
      }),
      r.d(a, 'MdStayPrimaryPortrait', function() {
        return Ae;
      }),
      r.d(a, 'MdStopScreenShare', function() {
        return be;
      }),
      r.d(a, 'MdSwapCalls', function() {
        return Pe;
      }),
      r.d(a, 'MdTextsms', function() {
        return Fe;
      }),
      r.d(a, 'MdVoicemail', function() {
        return ke;
      }),
      r.d(a, 'MdVpnKey', function() {
        return Oe;
      }),
      r.d(a, 'MdAdd', function() {
        return Te;
      }),
      r.d(a, 'MdAddBox', function() {
        return Re;
      }),
      r.d(a, 'MdAddCircle', function() {
        return De;
      }),
      r.d(a, 'MdAddCircleOutline', function() {
        return Ie;
      }),
      r.d(a, 'MdArchive', function() {
        return Ee;
      }),
      r.d(a, 'MdBackspace', function() {
        return We;
      }),
      r.d(a, 'MdBlock', function() {
        return Ue;
      }),
      r.d(a, 'MdClear', function() {
        return Ge;
      }),
      r.d(a, 'MdContentCopy', function() {
        return je;
      }),
      r.d(a, 'MdContentCut', function() {
        return _e;
      }),
      r.d(a, 'MdContentPaste', function() {
        return Ke;
      }),
      r.d(a, 'MdCreate', function() {
        return Qe;
      }),
      r.d(a, 'MdDeleteSweep', function() {
        return qe;
      }),
      r.d(a, 'MdDrafts', function() {
        return Ze;
      }),
      r.d(a, 'MdFilterList', function() {
        return Je;
      }),
      r.d(a, 'MdFlag', function() {
        return $e;
      }),
      r.d(a, 'MdFontDownload', function() {
        return Ye;
      }),
      r.d(a, 'MdForward', function() {
        return Xe;
      }),
      r.d(a, 'MdGesture', function() {
        return tv;
      }),
      r.d(a, 'MdInbox', function() {
        return av;
      }),
      r.d(a, 'MdLink', function() {
        return rv;
      }),
      r.d(a, 'MdLowPriority', function() {
        return nv;
      }),
      r.d(a, 'MdMail', function() {
        return cv;
      }),
      r.d(a, 'MdMarkunread', function() {
        return ev;
      }),
      r.d(a, 'MdMoveToInbox', function() {
        return vv;
      }),
      r.d(a, 'MdNextWeek', function() {
        return iv;
      }),
      r.d(a, 'MdRedo', function() {
        return dv;
      }),
      r.d(a, 'MdRemove', function() {
        return hv;
      }),
      r.d(a, 'MdRemoveCircle', function() {
        return ov;
      }),
      r.d(a, 'MdRemoveCircleOutline', function() {
        return lv;
      }),
      r.d(a, 'MdReply', function() {
        return uv;
      }),
      r.d(a, 'MdReplyAll', function() {
        return sv;
      }),
      r.d(a, 'MdReport', function() {
        return Mv;
      }),
      r.d(a, 'MdSave', function() {
        return gv;
      }),
      r.d(a, 'MdSelectAll', function() {
        return zv;
      }),
      r.d(a, 'MdSend', function() {
        return mv;
      }),
      r.d(a, 'MdSort', function() {
        return pv;
      }),
      r.d(a, 'MdTextFormat', function() {
        return fv;
      }),
      r.d(a, 'MdUnarchive', function() {
        return Hv;
      }),
      r.d(a, 'MdUndo', function() {
        return Vv;
      }),
      r.d(a, 'MdWeekend', function() {
        return yv;
      }),
      r.d(a, 'MdAccessAlarm', function() {
        return Lv;
      }),
      r.d(a, 'MdAccessAlarms', function() {
        return Bv;
      }),
      r.d(a, 'MdAccessTime', function() {
        return wv;
      }),
      r.d(a, 'MdAddAlarm', function() {
        return xv;
      }),
      r.d(a, 'MdAirplanemodeActive', function() {
        return Nv;
      }),
      r.d(a, 'MdAirplanemodeInactive', function() {
        return Cv;
      }),
      r.d(a, 'MdBattery20', function() {
        return Sv;
      }),
      r.d(a, 'MdBattery30', function() {
        return Av;
      }),
      r.d(a, 'MdBattery50', function() {
        return bv;
      }),
      r.d(a, 'MdBattery60', function() {
        return Pv;
      }),
      r.d(a, 'MdBattery80', function() {
        return Fv;
      }),
      r.d(a, 'MdBattery90', function() {
        return kv;
      }),
      r.d(a, 'MdBatteryAlert', function() {
        return Ov;
      }),
      r.d(a, 'MdBatteryCharging20', function() {
        return Tv;
      }),
      r.d(a, 'MdBatteryCharging30', function() {
        return Rv;
      }),
      r.d(a, 'MdBatteryCharging50', function() {
        return Dv;
      }),
      r.d(a, 'MdBatteryCharging60', function() {
        return Iv;
      }),
      r.d(a, 'MdBatteryCharging80', function() {
        return Ev;
      }),
      r.d(a, 'MdBatteryCharging90', function() {
        return Wv;
      }),
      r.d(a, 'MdBatteryChargingFull', function() {
        return Uv;
      }),
      r.d(a, 'MdBatteryFull', function() {
        return Gv;
      }),
      r.d(a, 'MdBatteryStd', function() {
        return jv;
      }),
      r.d(a, 'MdBatteryUnknown', function() {
        return _v;
      }),
      r.d(a, 'MdBluetooth', function() {
        return Kv;
      }),
      r.d(a, 'MdBluetoothConnected', function() {
        return Qv;
      }),
      r.d(a, 'MdBluetoothDisabled', function() {
        return qv;
      }),
      r.d(a, 'MdBluetoothSearching', function() {
        return Zv;
      }),
      r.d(a, 'MdBrightnessAuto', function() {
        return Jv;
      }),
      r.d(a, 'MdBrightnessHigh', function() {
        return $v;
      }),
      r.d(a, 'MdBrightnessLow', function() {
        return Yv;
      }),
      r.d(a, 'MdBrightnessMedium', function() {
        return Xv;
      }),
      r.d(a, 'MdDataUsage', function() {
        return ti;
      }),
      r.d(a, 'MdDeveloperMode', function() {
        return ai;
      }),
      r.d(a, 'MdDevices', function() {
        return ri;
      }),
      r.d(a, 'MdDvr', function() {
        return ni;
      }),
      r.d(a, 'MdGpsFixed', function() {
        return ci;
      }),
      r.d(a, 'MdGpsNotFixed', function() {
        return ei;
      }),
      r.d(a, 'MdGpsOff', function() {
        return vi;
      }),
      r.d(a, 'MdGraphicEq', function() {
        return ii;
      }),
      r.d(a, 'MdLocationDisabled', function() {
        return di;
      }),
      r.d(a, 'MdLocationSearching', function() {
        return hi;
      }),
      r.d(a, 'MdNetworkCell', function() {
        return oi;
      }),
      r.d(a, 'MdNetworkWifi', function() {
        return li;
      }),
      r.d(a, 'MdNfc', function() {
        return ui;
      }),
      r.d(a, 'MdScreenLockLandscape', function() {
        return si;
      }),
      r.d(a, 'MdScreenLockPortrait', function() {
        return Mi;
      }),
      r.d(a, 'MdScreenLockRotation', function() {
        return gi;
      }),
      r.d(a, 'MdScreenRotation', function() {
        return zi;
      }),
      r.d(a, 'MdSdStorage', function() {
        return mi;
      }),
      r.d(a, 'MdSettingsSystemDaydream', function() {
        return pi;
      }),
      r.d(a, 'MdSignalCellular0Bar', function() {
        return fi;
      }),
      r.d(a, 'MdSignalCellular1Bar', function() {
        return Hi;
      }),
      r.d(a, 'MdSignalCellular2Bar', function() {
        return Vi;
      }),
      r.d(a, 'MdSignalCellular3Bar', function() {
        return yi;
      }),
      r.d(a, 'MdSignalCellular4Bar', function() {
        return Li;
      }),
      r.d(a, 'MdSignalCellularConnectedNoInternet0Bar', function() {
        return Bi;
      }),
      r.d(a, 'MdSignalCellularConnectedNoInternet1Bar', function() {
        return wi;
      }),
      r.d(a, 'MdSignalCellularConnectedNoInternet2Bar', function() {
        return xi;
      }),
      r.d(a, 'MdSignalCellularConnectedNoInternet3Bar', function() {
        return Ni;
      }),
      r.d(a, 'MdSignalCellularConnectedNoInternet4Bar', function() {
        return Ci;
      }),
      r.d(a, 'MdSignalCellularNoSim', function() {
        return Si;
      }),
      r.d(a, 'MdSignalCellularNull', function() {
        return Ai;
      }),
      r.d(a, 'MdSignalCellularOff', function() {
        return bi;
      }),
      r.d(a, 'MdSignalWifi0Bar', function() {
        return Pi;
      }),
      r.d(a, 'MdSignalWifi1Bar', function() {
        return Fi;
      }),
      r.d(a, 'MdSignalWifi1BarLock', function() {
        return ki;
      }),
      r.d(a, 'MdSignalWifi2Bar', function() {
        return Oi;
      }),
      r.d(a, 'MdSignalWifi2BarLock', function() {
        return Ti;
      }),
      r.d(a, 'MdSignalWifi3Bar', function() {
        return Ri;
      }),
      r.d(a, 'MdSignalWifi3BarLock', function() {
        return Di;
      }),
      r.d(a, 'MdSignalWifi4Bar', function() {
        return Ii;
      }),
      r.d(a, 'MdSignalWifi4BarLock', function() {
        return Ei;
      }),
      r.d(a, 'MdSignalWifiOff', function() {
        return Wi;
      }),
      r.d(a, 'MdStorage', function() {
        return Ui;
      }),
      r.d(a, 'MdUsb', function() {
        return Gi;
      }),
      r.d(a, 'MdWallpaper', function() {
        return ji;
      }),
      r.d(a, 'MdWidgets', function() {
        return _i;
      }),
      r.d(a, 'MdWifiLock', function() {
        return Ki;
      }),
      r.d(a, 'MdWifiTethering', function() {
        return Qi;
      }),
      r.d(a, 'MdAttachFile', function() {
        return qi;
      }),
      r.d(a, 'MdAttachMoney', function() {
        return Zi;
      }),
      r.d(a, 'MdBorderAll', function() {
        return Ji;
      }),
      r.d(a, 'MdBorderBottom', function() {
        return $i;
      }),
      r.d(a, 'MdBorderClear', function() {
        return Yi;
      }),
      r.d(a, 'MdBorderColor', function() {
        return Xi;
      }),
      r.d(a, 'MdBorderHorizontal', function() {
        return td;
      }),
      r.d(a, 'MdBorderInner', function() {
        return ad;
      }),
      r.d(a, 'MdBorderLeft', function() {
        return rd;
      }),
      r.d(a, 'MdBorderOuter', function() {
        return nd;
      }),
      r.d(a, 'MdBorderRight', function() {
        return cd;
      }),
      r.d(a, 'MdBorderStyle', function() {
        return ed;
      }),
      r.d(a, 'MdBorderTop', function() {
        return vd;
      }),
      r.d(a, 'MdBorderVertical', function() {
        return id;
      }),
      r.d(a, 'MdBubbleChart', function() {
        return dd;
      }),
      r.d(a, 'MdDragHandle', function() {
        return hd;
      }),
      r.d(a, 'MdFormatAlignCenter', function() {
        return od;
      }),
      r.d(a, 'MdFormatAlignJustify', function() {
        return ld;
      }),
      r.d(a, 'MdFormatAlignLeft', function() {
        return ud;
      }),
      r.d(a, 'MdFormatAlignRight', function() {
        return sd;
      }),
      r.d(a, 'MdFormatBold', function() {
        return Md;
      }),
      r.d(a, 'MdFormatClear', function() {
        return gd;
      }),
      r.d(a, 'MdFormatColorFill', function() {
        return zd;
      }),
      r.d(a, 'MdFormatColorReset', function() {
        return md;
      }),
      r.d(a, 'MdFormatColorText', function() {
        return pd;
      }),
      r.d(a, 'MdFormatIndentDecrease', function() {
        return fd;
      }),
      r.d(a, 'MdFormatIndentIncrease', function() {
        return Hd;
      }),
      r.d(a, 'MdFormatItalic', function() {
        return Vd;
      }),
      r.d(a, 'MdFormatLineSpacing', function() {
        return yd;
      }),
      r.d(a, 'MdFormatListBulleted', function() {
        return Ld;
      }),
      r.d(a, 'MdFormatListNumbered', function() {
        return Bd;
      }),
      r.d(a, 'MdFormatPaint', function() {
        return wd;
      }),
      r.d(a, 'MdFormatQuote', function() {
        return xd;
      }),
      r.d(a, 'MdFormatShapes', function() {
        return Nd;
      }),
      r.d(a, 'MdFormatSize', function() {
        return Cd;
      }),
      r.d(a, 'MdFormatStrikethrough', function() {
        return Sd;
      }),
      r.d(a, 'MdFormatTextdirectionLToR', function() {
        return Ad;
      }),
      r.d(a, 'MdFormatTextdirectionRToL', function() {
        return bd;
      }),
      r.d(a, 'MdFormatUnderlined', function() {
        return Pd;
      }),
      r.d(a, 'MdFunctions', function() {
        return Fd;
      }),
      r.d(a, 'MdHighlight', function() {
        return kd;
      }),
      r.d(a, 'MdInsertChart', function() {
        return Od;
      }),
      r.d(a, 'MdInsertComment', function() {
        return Td;
      }),
      r.d(a, 'MdInsertDriveFile', function() {
        return Rd;
      }),
      r.d(a, 'MdInsertEmoticon', function() {
        return Dd;
      }),
      r.d(a, 'MdInsertInvitation', function() {
        return Id;
      }),
      r.d(a, 'MdInsertLink', function() {
        return Ed;
      }),
      r.d(a, 'MdInsertPhoto', function() {
        return Wd;
      }),
      r.d(a, 'MdLinearScale', function() {
        return Ud;
      }),
      r.d(a, 'MdMergeType', function() {
        return Gd;
      }),
      r.d(a, 'MdModeComment', function() {
        return jd;
      }),
      r.d(a, 'MdModeEdit', function() {
        return _d;
      }),
      r.d(a, 'MdMonetizationOn', function() {
        return Kd;
      }),
      r.d(a, 'MdMoneyOff', function() {
        return Qd;
      }),
      r.d(a, 'MdMultilineChart', function() {
        return qd;
      }),
      r.d(a, 'MdPieChart', function() {
        return Zd;
      }),
      r.d(a, 'MdPieChartOutlined', function() {
        return Jd;
      }),
      r.d(a, 'MdPublish', function() {
        return $d;
      }),
      r.d(a, 'MdShortText', function() {
        return Yd;
      }),
      r.d(a, 'MdShowChart', function() {
        return Xd;
      }),
      r.d(a, 'MdSpaceBar', function() {
        return th;
      }),
      r.d(a, 'MdStrikethroughS', function() {
        return ah;
      }),
      r.d(a, 'MdTextFields', function() {
        return rh;
      }),
      r.d(a, 'MdTitle', function() {
        return nh;
      }),
      r.d(a, 'MdVerticalAlignBottom', function() {
        return ch;
      }),
      r.d(a, 'MdVerticalAlignCenter', function() {
        return eh;
      }),
      r.d(a, 'MdVerticalAlignTop', function() {
        return vh;
      }),
      r.d(a, 'MdWrapText', function() {
        return ih;
      }),
      r.d(a, 'MdAttachment', function() {
        return dh;
      }),
      r.d(a, 'MdCloud', function() {
        return hh;
      }),
      r.d(a, 'MdCloudCircle', function() {
        return oh;
      }),
      r.d(a, 'MdCloudDone', function() {
        return lh;
      }),
      r.d(a, 'MdCloudDownload', function() {
        return uh;
      }),
      r.d(a, 'MdCloudOff', function() {
        return sh;
      }),
      r.d(a, 'MdCloudQueue', function() {
        return Mh;
      }),
      r.d(a, 'MdCloudUpload', function() {
        return gh;
      }),
      r.d(a, 'MdCreateNewFolder', function() {
        return zh;
      }),
      r.d(a, 'MdFileDownload', function() {
        return mh;
      }),
      r.d(a, 'MdFileUpload', function() {
        return ph;
      }),
      r.d(a, 'MdFolder', function() {
        return fh;
      }),
      r.d(a, 'MdFolderOpen', function() {
        return Hh;
      }),
      r.d(a, 'MdFolderShared', function() {
        return Vh;
      }),
      r.d(a, 'MdCast', function() {
        return yh;
      }),
      r.d(a, 'MdCastConnected', function() {
        return Lh;
      }),
      r.d(a, 'MdComputer', function() {
        return Bh;
      }),
      r.d(a, 'MdDesktopMac', function() {
        return wh;
      }),
      r.d(a, 'MdDesktopWindows', function() {
        return xh;
      }),
      r.d(a, 'MdDeveloperBoard', function() {
        return Nh;
      }),
      r.d(a, 'MdDeviceHub', function() {
        return Ch;
      }),
      r.d(a, 'MdDevicesOther', function() {
        return Sh;
      }),
      r.d(a, 'MdDock', function() {
        return Ah;
      }),
      r.d(a, 'MdGamepad', function() {
        return bh;
      }),
      r.d(a, 'MdHeadset', function() {
        return Ph;
      }),
      r.d(a, 'MdHeadsetMic', function() {
        return Fh;
      }),
      r.d(a, 'MdKeyboard', function() {
        return kh;
      }),
      r.d(a, 'MdKeyboardArrowDown', function() {
        return Oh;
      }),
      r.d(a, 'MdKeyboardArrowLeft', function() {
        return Th;
      }),
      r.d(a, 'MdKeyboardArrowRight', function() {
        return Rh;
      }),
      r.d(a, 'MdKeyboardArrowUp', function() {
        return Dh;
      }),
      r.d(a, 'MdKeyboardBackspace', function() {
        return Ih;
      }),
      r.d(a, 'MdKeyboardCapslock', function() {
        return Eh;
      }),
      r.d(a, 'MdKeyboardHide', function() {
        return Wh;
      }),
      r.d(a, 'MdKeyboardReturn', function() {
        return Uh;
      }),
      r.d(a, 'MdKeyboardTab', function() {
        return Gh;
      }),
      r.d(a, 'MdKeyboardVoice', function() {
        return jh;
      }),
      r.d(a, 'MdLaptop', function() {
        return _h;
      }),
      r.d(a, 'MdLaptopChromebook', function() {
        return Kh;
      }),
      r.d(a, 'MdLaptopMac', function() {
        return Qh;
      }),
      r.d(a, 'MdLaptopWindows', function() {
        return qh;
      }),
      r.d(a, 'MdMemory', function() {
        return Zh;
      }),
      r.d(a, 'MdMouse', function() {
        return Jh;
      }),
      r.d(a, 'MdPhoneAndroid', function() {
        return $h;
      }),
      r.d(a, 'MdPhoneIphone', function() {
        return Yh;
      }),
      r.d(a, 'MdPhonelink', function() {
        return Xh;
      }),
      r.d(a, 'MdPhonelinkOff', function() {
        return to;
      }),
      r.d(a, 'MdPowerInput', function() {
        return ao;
      }),
      r.d(a, 'MdRouter', function() {
        return ro;
      }),
      r.d(a, 'MdScanner', function() {
        return no;
      }),
      r.d(a, 'MdSecurity', function() {
        return co;
      }),
      r.d(a, 'MdSimCard', function() {
        return eo;
      }),
      r.d(a, 'MdSmartphone', function() {
        return vo;
      }),
      r.d(a, 'MdSpeaker', function() {
        return io;
      }),
      r.d(a, 'MdSpeakerGroup', function() {
        return ho;
      }),
      r.d(a, 'MdTablet', function() {
        return oo;
      }),
      r.d(a, 'MdTabletAndroid', function() {
        return lo;
      }),
      r.d(a, 'MdTabletMac', function() {
        return uo;
      }),
      r.d(a, 'MdToys', function() {
        return so;
      }),
      r.d(a, 'MdTv', function() {
        return Mo;
      }),
      r.d(a, 'MdVideogameAsset', function() {
        return go;
      }),
      r.d(a, 'MdWatch', function() {
        return zo;
      }),
      r.d(a, 'MdAddAPhoto', function() {
        return mo;
      }),
      r.d(a, 'MdAddToPhotos', function() {
        return po;
      }),
      r.d(a, 'MdAdjust', function() {
        return fo;
      }),
      r.d(a, 'MdAssistant', function() {
        return Ho;
      }),
      r.d(a, 'MdAssistantPhoto', function() {
        return Vo;
      }),
      r.d(a, 'MdAudiotrack', function() {
        return yo;
      }),
      r.d(a, 'MdBlurCircular', function() {
        return Lo;
      }),
      r.d(a, 'MdBlurLinear', function() {
        return Bo;
      }),
      r.d(a, 'MdBlurOff', function() {
        return wo;
      }),
      r.d(a, 'MdBlurOn', function() {
        return xo;
      }),
      r.d(a, 'MdBrightness1', function() {
        return No;
      }),
      r.d(a, 'MdBrightness2', function() {
        return Co;
      }),
      r.d(a, 'MdBrightness3', function() {
        return So;
      }),
      r.d(a, 'MdBrightness4', function() {
        return Ao;
      }),
      r.d(a, 'MdBrightness5', function() {
        return bo;
      }),
      r.d(a, 'MdBrightness6', function() {
        return Po;
      }),
      r.d(a, 'MdBrightness7', function() {
        return Fo;
      }),
      r.d(a, 'MdBrokenImage', function() {
        return ko;
      }),
      r.d(a, 'MdBrush', function() {
        return Oo;
      }),
      r.d(a, 'MdBurstMode', function() {
        return To;
      }),
      r.d(a, 'MdCamera', function() {
        return Ro;
      }),
      r.d(a, 'MdCameraAlt', function() {
        return Do;
      }),
      r.d(a, 'MdCameraFront', function() {
        return Io;
      }),
      r.d(a, 'MdCameraRear', function() {
        return Eo;
      }),
      r.d(a, 'MdCameraRoll', function() {
        return Wo;
      }),
      r.d(a, 'MdCenterFocusStrong', function() {
        return Uo;
      }),
      r.d(a, 'MdCenterFocusWeak', function() {
        return Go;
      }),
      r.d(a, 'MdCollections', function() {
        return jo;
      }),
      r.d(a, 'MdCollectionsBookmark', function() {
        return _o;
      }),
      r.d(a, 'MdColorLens', function() {
        return Ko;
      }),
      r.d(a, 'MdColorize', function() {
        return Qo;
      }),
      r.d(a, 'MdCompare', function() {
        return qo;
      }),
      r.d(a, 'MdControlPoint', function() {
        return Zo;
      }),
      r.d(a, 'MdControlPointDuplicate', function() {
        return Jo;
      }),
      r.d(a, 'MdCrop169', function() {
        return $o;
      }),
      r.d(a, 'MdCrop', function() {
        return Yo;
      }),
      r.d(a, 'MdCrop32', function() {
        return Xo;
      }),
      r.d(a, 'MdCrop54', function() {
        return tl;
      }),
      r.d(a, 'MdCrop75', function() {
        return al;
      }),
      r.d(a, 'MdCropDin', function() {
        return rl;
      }),
      r.d(a, 'MdCropFree', function() {
        return nl;
      }),
      r.d(a, 'MdCropLandscape', function() {
        return cl;
      }),
      r.d(a, 'MdCropOriginal', function() {
        return el;
      }),
      r.d(a, 'MdCropPortrait', function() {
        return vl;
      }),
      r.d(a, 'MdCropRotate', function() {
        return il;
      }),
      r.d(a, 'MdCropSquare', function() {
        return dl;
      }),
      r.d(a, 'MdDehaze', function() {
        return hl;
      }),
      r.d(a, 'MdDetails', function() {
        return ol;
      }),
      r.d(a, 'MdEdit', function() {
        return ll;
      }),
      r.d(a, 'MdExposure', function() {
        return ul;
      }),
      r.d(a, 'MdExposureNeg1', function() {
        return sl;
      }),
      r.d(a, 'MdExposureNeg2', function() {
        return Ml;
      }),
      r.d(a, 'MdExposurePlus1', function() {
        return gl;
      }),
      r.d(a, 'MdExposurePlus2', function() {
        return zl;
      }),
      r.d(a, 'MdExposureZero', function() {
        return ml;
      }),
      r.d(a, 'MdFilter1', function() {
        return pl;
      }),
      r.d(a, 'MdFilter2', function() {
        return fl;
      }),
      r.d(a, 'MdFilter', function() {
        return Hl;
      }),
      r.d(a, 'MdFilter3', function() {
        return Vl;
      }),
      r.d(a, 'MdFilter4', function() {
        return yl;
      }),
      r.d(a, 'MdFilter5', function() {
        return Ll;
      }),
      r.d(a, 'MdFilter6', function() {
        return Bl;
      }),
      r.d(a, 'MdFilter7', function() {
        return wl;
      }),
      r.d(a, 'MdFilter8', function() {
        return xl;
      }),
      r.d(a, 'MdFilter9', function() {
        return Nl;
      }),
      r.d(a, 'MdFilter9Plus', function() {
        return Cl;
      }),
      r.d(a, 'MdFilterBAndW', function() {
        return Sl;
      }),
      r.d(a, 'MdFilterCenterFocus', function() {
        return Al;
      }),
      r.d(a, 'MdFilterDrama', function() {
        return bl;
      }),
      r.d(a, 'MdFilterFrames', function() {
        return Pl;
      }),
      r.d(a, 'MdFilterHdr', function() {
        return Fl;
      }),
      r.d(a, 'MdFilterNone', function() {
        return kl;
      }),
      r.d(a, 'MdFilterTiltShift', function() {
        return Ol;
      }),
      r.d(a, 'MdFilterVintage', function() {
        return Tl;
      }),
      r.d(a, 'MdFlare', function() {
        return Rl;
      }),
      r.d(a, 'MdFlashAuto', function() {
        return Dl;
      }),
      r.d(a, 'MdFlashOff', function() {
        return Il;
      }),
      r.d(a, 'MdFlashOn', function() {
        return El;
      }),
      r.d(a, 'MdFlip', function() {
        return Wl;
      }),
      r.d(a, 'MdGradient', function() {
        return Ul;
      }),
      r.d(a, 'MdGrain', function() {
        return Gl;
      }),
      r.d(a, 'MdGridOff', function() {
        return jl;
      }),
      r.d(a, 'MdGridOn', function() {
        return _l;
      }),
      r.d(a, 'MdHdrOff', function() {
        return Kl;
      }),
      r.d(a, 'MdHdrOn', function() {
        return Ql;
      }),
      r.d(a, 'MdHdrStrong', function() {
        return ql;
      }),
      r.d(a, 'MdHdrWeak', function() {
        return Zl;
      }),
      r.d(a, 'MdHealing', function() {
        return Jl;
      }),
      r.d(a, 'MdImage', function() {
        return $l;
      }),
      r.d(a, 'MdImageAspectRatio', function() {
        return Yl;
      }),
      r.d(a, 'MdIso', function() {
        return Xl;
      }),
      r.d(a, 'MdLandscape', function() {
        return tu;
      }),
      r.d(a, 'MdLeakAdd', function() {
        return au;
      }),
      r.d(a, 'MdLeakRemove', function() {
        return ru;
      }),
      r.d(a, 'MdLens', function() {
        return nu;
      }),
      r.d(a, 'MdLinkedCamera', function() {
        return cu;
      }),
      r.d(a, 'MdLooks', function() {
        return eu;
      }),
      r.d(a, 'MdLooks3', function() {
        return vu;
      }),
      r.d(a, 'MdLooks4', function() {
        return iu;
      }),
      r.d(a, 'MdLooks5', function() {
        return du;
      }),
      r.d(a, 'MdLooks6', function() {
        return hu;
      }),
      r.d(a, 'MdLooksOne', function() {
        return ou;
      }),
      r.d(a, 'MdLooksTwo', function() {
        return lu;
      }),
      r.d(a, 'MdLoupe', function() {
        return uu;
      }),
      r.d(a, 'MdMonochromePhotos', function() {
        return su;
      }),
      r.d(a, 'MdMovieCreation', function() {
        return Mu;
      }),
      r.d(a, 'MdMovieFilter', function() {
        return gu;
      }),
      r.d(a, 'MdMusicNote', function() {
        return zu;
      }),
      r.d(a, 'MdNature', function() {
        return mu;
      }),
      r.d(a, 'MdNaturePeople', function() {
        return pu;
      }),
      r.d(a, 'MdNavigateBefore', function() {
        return fu;
      }),
      r.d(a, 'MdNavigateNext', function() {
        return Hu;
      }),
      r.d(a, 'MdPalette', function() {
        return Vu;
      }),
      r.d(a, 'MdPanorama', function() {
        return yu;
      }),
      r.d(a, 'MdPanoramaFishEye', function() {
        return Lu;
      }),
      r.d(a, 'MdPanoramaHorizontal', function() {
        return Bu;
      }),
      r.d(a, 'MdPanoramaVertical', function() {
        return wu;
      }),
      r.d(a, 'MdPanoramaWideAngle', function() {
        return xu;
      }),
      r.d(a, 'MdPhoto', function() {
        return Nu;
      }),
      r.d(a, 'MdPhotoAlbum', function() {
        return Cu;
      }),
      r.d(a, 'MdPhotoCamera', function() {
        return Su;
      }),
      r.d(a, 'MdPhotoFilter', function() {
        return Au;
      }),
      r.d(a, 'MdPhotoLibrary', function() {
        return bu;
      }),
      r.d(a, 'MdPhotoSizeSelectActual', function() {
        return Pu;
      }),
      r.d(a, 'MdPhotoSizeSelectLarge', function() {
        return Fu;
      }),
      r.d(a, 'MdPhotoSizeSelectSmall', function() {
        return ku;
      }),
      r.d(a, 'MdPictureAsPdf', function() {
        return Ou;
      }),
      r.d(a, 'MdPortrait', function() {
        return Tu;
      }),
      r.d(a, 'MdRemoveRedEye', function() {
        return Ru;
      }),
      r.d(a, 'MdRotate90DegreesCcw', function() {
        return Du;
      }),
      r.d(a, 'MdRotateLeft', function() {
        return Iu;
      }),
      r.d(a, 'MdRotateRight', function() {
        return Eu;
      }),
      r.d(a, 'MdSlideshow', function() {
        return Wu;
      }),
      r.d(a, 'MdStraighten', function() {
        return Uu;
      }),
      r.d(a, 'MdStyle', function() {
        return Gu;
      }),
      r.d(a, 'MdSwitchCamera', function() {
        return ju;
      }),
      r.d(a, 'MdSwitchVideo', function() {
        return _u;
      }),
      r.d(a, 'MdTagFaces', function() {
        return Ku;
      }),
      r.d(a, 'MdTexture', function() {
        return Qu;
      }),
      r.d(a, 'MdTimelapse', function() {
        return qu;
      }),
      r.d(a, 'MdTimer10', function() {
        return Zu;
      }),
      r.d(a, 'MdTimer', function() {
        return Ju;
      }),
      r.d(a, 'MdTimer3', function() {
        return $u;
      }),
      r.d(a, 'MdTimerOff', function() {
        return Yu;
      }),
      r.d(a, 'MdTonality', function() {
        return Xu;
      }),
      r.d(a, 'MdTransform', function() {
        return ts;
      }),
      r.d(a, 'MdTune', function() {
        return as;
      }),
      r.d(a, 'MdViewComfy', function() {
        return rs;
      }),
      r.d(a, 'MdViewCompact', function() {
        return ns;
      }),
      r.d(a, 'MdVignette', function() {
        return cs;
      }),
      r.d(a, 'MdWbAuto', function() {
        return es;
      }),
      r.d(a, 'MdWbCloudy', function() {
        return vs;
      }),
      r.d(a, 'MdWbIncandescent', function() {
        return is;
      }),
      r.d(a, 'MdWbIridescent', function() {
        return ds;
      }),
      r.d(a, 'MdWbSunny', function() {
        return hs;
      }),
      r.d(a, 'MdAddLocation', function() {
        return os;
      }),
      r.d(a, 'MdBeenhere', function() {
        return ls;
      }),
      r.d(a, 'MdDirections', function() {
        return us;
      }),
      r.d(a, 'MdDirectionsBike', function() {
        return ss;
      }),
      r.d(a, 'MdDirectionsBoat', function() {
        return Ms;
      }),
      r.d(a, 'MdDirectionsBus', function() {
        return gs;
      }),
      r.d(a, 'MdDirectionsCar', function() {
        return zs;
      }),
      r.d(a, 'MdDirectionsRailway', function() {
        return ms;
      }),
      r.d(a, 'MdDirectionsRun', function() {
        return ps;
      }),
      r.d(a, 'MdDirectionsSubway', function() {
        return fs;
      }),
      r.d(a, 'MdDirectionsTransit', function() {
        return Hs;
      }),
      r.d(a, 'MdDirectionsWalk', function() {
        return Vs;
      }),
      r.d(a, 'MdEditLocation', function() {
        return ys;
      }),
      r.d(a, 'MdEvStation', function() {
        return Ls;
      }),
      r.d(a, 'MdFlight', function() {
        return Bs;
      }),
      r.d(a, 'MdHotel', function() {
        return ws;
      }),
      r.d(a, 'MdLayers', function() {
        return xs;
      }),
      r.d(a, 'MdLayersClear', function() {
        return Ns;
      }),
      r.d(a, 'MdLocalActivity', function() {
        return Cs;
      }),
      r.d(a, 'MdLocalAirport', function() {
        return Ss;
      }),
      r.d(a, 'MdLocalAtm', function() {
        return As;
      }),
      r.d(a, 'MdLocalBar', function() {
        return bs;
      }),
      r.d(a, 'MdLocalCafe', function() {
        return Ps;
      }),
      r.d(a, 'MdLocalCarWash', function() {
        return Fs;
      }),
      r.d(a, 'MdLocalConvenienceStore', function() {
        return ks;
      }),
      r.d(a, 'MdLocalDining', function() {
        return Os;
      }),
      r.d(a, 'MdLocalDrink', function() {
        return Ts;
      }),
      r.d(a, 'MdLocalFlorist', function() {
        return Rs;
      }),
      r.d(a, 'MdLocalGasStation', function() {
        return Ds;
      }),
      r.d(a, 'MdLocalGroceryStore', function() {
        return Is;
      }),
      r.d(a, 'MdLocalHospital', function() {
        return Es;
      }),
      r.d(a, 'MdLocalHotel', function() {
        return Ws;
      }),
      r.d(a, 'MdLocalLaundryService', function() {
        return Us;
      }),
      r.d(a, 'MdLocalLibrary', function() {
        return Gs;
      }),
      r.d(a, 'MdLocalMall', function() {
        return js;
      }),
      r.d(a, 'MdLocalMovies', function() {
        return _s;
      }),
      r.d(a, 'MdLocalOffer', function() {
        return Ks;
      }),
      r.d(a, 'MdLocalParking', function() {
        return Qs;
      }),
      r.d(a, 'MdLocalPharmacy', function() {
        return qs;
      }),
      r.d(a, 'MdLocalPhone', function() {
        return Zs;
      }),
      r.d(a, 'MdLocalPizza', function() {
        return Js;
      }),
      r.d(a, 'MdLocalPlay', function() {
        return $s;
      }),
      r.d(a, 'MdLocalPostOffice', function() {
        return Ys;
      }),
      r.d(a, 'MdLocalPrintshop', function() {
        return Xs;
      }),
      r.d(a, 'MdLocalSee', function() {
        return tM;
      }),
      r.d(a, 'MdLocalShipping', function() {
        return aM;
      });
    r.d(a, 'MdLocalTaxi', function() {
      return rM;
    }),
      r.d(a, 'MdMap', function() {
        return nM;
      }),
      r.d(a, 'MdMyLocation', function() {
        return cM;
      }),
      r.d(a, 'MdNavigation', function() {
        return eM;
      }),
      r.d(a, 'MdNearMe', function() {
        return vM;
      }),
      r.d(a, 'MdPersonPin', function() {
        return iM;
      }),
      r.d(a, 'MdPersonPinCircle', function() {
        return dM;
      }),
      r.d(a, 'MdPinDrop', function() {
        return hM;
      }),
      r.d(a, 'MdPlace', function() {
        return oM;
      }),
      r.d(a, 'MdRateReview', function() {
        return lM;
      }),
      r.d(a, 'MdRestaurant', function() {
        return uM;
      }),
      r.d(a, 'MdRestaurantMenu', function() {
        return sM;
      }),
      r.d(a, 'MdSatellite', function() {
        return MM;
      }),
      r.d(a, 'MdStoreMallDirectory', function() {
        return gM;
      }),
      r.d(a, 'MdStreetview', function() {
        return zM;
      }),
      r.d(a, 'MdSubway', function() {
        return mM;
      }),
      r.d(a, 'MdTerrain', function() {
        return pM;
      }),
      r.d(a, 'MdTraffic', function() {
        return fM;
      }),
      r.d(a, 'MdTrain', function() {
        return HM;
      }),
      r.d(a, 'MdTram', function() {
        return VM;
      }),
      r.d(a, 'MdTransferWithinAStation', function() {
        return yM;
      }),
      r.d(a, 'MdZoomOutMap', function() {
        return LM;
      }),
      r.d(a, 'MdApps', function() {
        return BM;
      }),
      r.d(a, 'MdArrowBack', function() {
        return wM;
      }),
      r.d(a, 'MdArrowDownward', function() {
        return xM;
      }),
      r.d(a, 'MdArrowDropDown', function() {
        return NM;
      }),
      r.d(a, 'MdArrowDropDownCircle', function() {
        return CM;
      }),
      r.d(a, 'MdArrowDropUp', function() {
        return SM;
      }),
      r.d(a, 'MdArrowForward', function() {
        return AM;
      }),
      r.d(a, 'MdArrowUpward', function() {
        return bM;
      }),
      r.d(a, 'MdCancel', function() {
        return PM;
      }),
      r.d(a, 'MdCheck', function() {
        return FM;
      }),
      r.d(a, 'MdChevronLeft', function() {
        return kM;
      }),
      r.d(a, 'MdChevronRight', function() {
        return OM;
      }),
      r.d(a, 'MdClose', function() {
        return TM;
      }),
      r.d(a, 'MdExpandLess', function() {
        return RM;
      }),
      r.d(a, 'MdExpandMore', function() {
        return DM;
      }),
      r.d(a, 'MdFirstPage', function() {
        return IM;
      }),
      r.d(a, 'MdFullscreen', function() {
        return EM;
      }),
      r.d(a, 'MdFullscreenExit', function() {
        return WM;
      }),
      r.d(a, 'MdLastPage', function() {
        return UM;
      }),
      r.d(a, 'MdMenu', function() {
        return GM;
      }),
      r.d(a, 'MdMoreHoriz', function() {
        return jM;
      }),
      r.d(a, 'MdMoreVert', function() {
        return _M;
      }),
      r.d(a, 'MdRefresh', function() {
        return KM;
      }),
      r.d(a, 'MdSubdirectoryArrowLeft', function() {
        return QM;
      }),
      r.d(a, 'MdSubdirectoryArrowRight', function() {
        return qM;
      }),
      r.d(a, 'MdUnfoldLess', function() {
        return ZM;
      }),
      r.d(a, 'MdUnfoldMore', function() {
        return JM;
      }),
      r.d(a, 'MdAdb', function() {
        return $M;
      }),
      r.d(a, 'MdAirlineSeatFlat', function() {
        return YM;
      }),
      r.d(a, 'MdAirlineSeatFlatAngled', function() {
        return XM;
      }),
      r.d(a, 'MdAirlineSeatIndividualSuite', function() {
        return tg;
      }),
      r.d(a, 'MdAirlineSeatLegroomExtra', function() {
        return ag;
      }),
      r.d(a, 'MdAirlineSeatLegroomNormal', function() {
        return rg;
      }),
      r.d(a, 'MdAirlineSeatLegroomReduced', function() {
        return ng;
      }),
      r.d(a, 'MdAirlineSeatReclineExtra', function() {
        return cg;
      }),
      r.d(a, 'MdAirlineSeatReclineNormal', function() {
        return eg;
      }),
      r.d(a, 'MdBluetoothAudio', function() {
        return vg;
      }),
      r.d(a, 'MdConfirmationNumber', function() {
        return ig;
      }),
      r.d(a, 'MdDiscFull', function() {
        return dg;
      }),
      r.d(a, 'MdDoNotDisturb', function() {
        return hg;
      }),
      r.d(a, 'MdDoNotDisturbAlt', function() {
        return og;
      }),
      r.d(a, 'MdDoNotDisturbOff', function() {
        return lg;
      }),
      r.d(a, 'MdDoNotDisturbOn', function() {
        return ug;
      }),
      r.d(a, 'MdDriveEta', function() {
        return sg;
      }),
      r.d(a, 'MdEnhancedEncryption', function() {
        return Mg;
      }),
      r.d(a, 'MdEventAvailable', function() {
        return gg;
      }),
      r.d(a, 'MdEventBusy', function() {
        return zg;
      }),
      r.d(a, 'MdEventNote', function() {
        return mg;
      }),
      r.d(a, 'MdFolderSpecial', function() {
        return pg;
      }),
      r.d(a, 'MdLiveTv', function() {
        return fg;
      }),
      r.d(a, 'MdMms', function() {
        return Hg;
      }),
      r.d(a, 'MdMore', function() {
        return Vg;
      }),
      r.d(a, 'MdNetworkCheck', function() {
        return yg;
      }),
      r.d(a, 'MdNetworkLocked', function() {
        return Lg;
      }),
      r.d(a, 'MdNoEncryption', function() {
        return Bg;
      }),
      r.d(a, 'MdOndemandVideo', function() {
        return wg;
      }),
      r.d(a, 'MdPersonalVideo', function() {
        return xg;
      }),
      r.d(a, 'MdPhoneBluetoothSpeaker', function() {
        return Ng;
      }),
      r.d(a, 'MdPhoneForwarded', function() {
        return Cg;
      }),
      r.d(a, 'MdPhoneInTalk', function() {
        return Sg;
      }),
      r.d(a, 'MdPhoneLocked', function() {
        return Ag;
      }),
      r.d(a, 'MdPhoneMissed', function() {
        return bg;
      }),
      r.d(a, 'MdPhonePaused', function() {
        return Pg;
      }),
      r.d(a, 'MdPower', function() {
        return Fg;
      }),
      r.d(a, 'MdPriorityHigh', function() {
        return kg;
      }),
      r.d(a, 'MdRvHookup', function() {
        return Og;
      }),
      r.d(a, 'MdSdCard', function() {
        return Tg;
      }),
      r.d(a, 'MdSimCardAlert', function() {
        return Rg;
      }),
      r.d(a, 'MdSms', function() {
        return Dg;
      }),
      r.d(a, 'MdSmsFailed', function() {
        return Ig;
      }),
      r.d(a, 'MdSync', function() {
        return Eg;
      }),
      r.d(a, 'MdSyncDisabled', function() {
        return Wg;
      }),
      r.d(a, 'MdSyncProblem', function() {
        return Ug;
      }),
      r.d(a, 'MdSystemUpdate', function() {
        return Gg;
      }),
      r.d(a, 'MdTapAndPlay', function() {
        return jg;
      }),
      r.d(a, 'MdTimeToLeave', function() {
        return _g;
      }),
      r.d(a, 'MdVibration', function() {
        return Kg;
      }),
      r.d(a, 'MdVoiceChat', function() {
        return Qg;
      }),
      r.d(a, 'MdVpnLock', function() {
        return qg;
      }),
      r.d(a, 'MdWc', function() {
        return Zg;
      }),
      r.d(a, 'MdWifi', function() {
        return Jg;
      }),
      r.d(a, 'MdAcUnit', function() {
        return $g;
      }),
      r.d(a, 'MdAirportShuttle', function() {
        return Yg;
      }),
      r.d(a, 'MdAllInclusive', function() {
        return Xg;
      }),
      r.d(a, 'MdBeachAccess', function() {
        return tz;
      }),
      r.d(a, 'MdBusinessCenter', function() {
        return az;
      }),
      r.d(a, 'MdCasino', function() {
        return rz;
      }),
      r.d(a, 'MdChildCare', function() {
        return nz;
      }),
      r.d(a, 'MdChildFriendly', function() {
        return cz;
      }),
      r.d(a, 'MdFitnessCenter', function() {
        return ez;
      }),
      r.d(a, 'MdFreeBreakfast', function() {
        return vz;
      }),
      r.d(a, 'MdGolfCourse', function() {
        return iz;
      }),
      r.d(a, 'MdHotTub', function() {
        return dz;
      }),
      r.d(a, 'MdKitchen', function() {
        return hz;
      }),
      r.d(a, 'MdPool', function() {
        return oz;
      }),
      r.d(a, 'MdRoomService', function() {
        return lz;
      }),
      r.d(a, 'MdSmokeFree', function() {
        return uz;
      }),
      r.d(a, 'MdSmokingRooms', function() {
        return sz;
      }),
      r.d(a, 'MdSpa', function() {
        return Mz;
      }),
      r.d(a, 'MdCake', function() {
        return gz;
      }),
      r.d(a, 'MdDomain', function() {
        return zz;
      }),
      r.d(a, 'MdGroup', function() {
        return mz;
      }),
      r.d(a, 'MdGroupAdd', function() {
        return pz;
      }),
      r.d(a, 'MdLocationCity', function() {
        return fz;
      }),
      r.d(a, 'MdMood', function() {
        return Hz;
      }),
      r.d(a, 'MdMoodBad', function() {
        return Vz;
      }),
      r.d(a, 'MdNotifications', function() {
        return yz;
      }),
      r.d(a, 'MdNotificationsActive', function() {
        return Lz;
      }),
      r.d(a, 'MdNotificationsNone', function() {
        return Bz;
      }),
      r.d(a, 'MdNotificationsOff', function() {
        return wz;
      }),
      r.d(a, 'MdNotificationsPaused', function() {
        return xz;
      }),
      r.d(a, 'MdPages', function() {
        return Nz;
      }),
      r.d(a, 'MdPartyMode', function() {
        return Cz;
      }),
      r.d(a, 'MdPeople', function() {
        return Sz;
      }),
      r.d(a, 'MdPeopleOutline', function() {
        return Az;
      }),
      r.d(a, 'MdPerson', function() {
        return bz;
      }),
      r.d(a, 'MdPersonAdd', function() {
        return Pz;
      }),
      r.d(a, 'MdPersonOutline', function() {
        return Fz;
      }),
      r.d(a, 'MdPlusOne', function() {
        return kz;
      }),
      r.d(a, 'MdPoll', function() {
        return Oz;
      }),
      r.d(a, 'MdPublic', function() {
        return Tz;
      }),
      r.d(a, 'MdSchool', function() {
        return Rz;
      }),
      r.d(a, 'MdSentimentDissatisfied', function() {
        return Dz;
      }),
      r.d(a, 'MdSentimentNeutral', function() {
        return Iz;
      }),
      r.d(a, 'MdSentimentSatisfied', function() {
        return Ez;
      }),
      r.d(a, 'MdSentimentVeryDissatisfied', function() {
        return Wz;
      }),
      r.d(a, 'MdSentimentVerySatisfied', function() {
        return Uz;
      }),
      r.d(a, 'MdShare', function() {
        return Gz;
      }),
      r.d(a, 'MdWhatshot', function() {
        return jz;
      }),
      r.d(a, 'MdCheckBox', function() {
        return _z;
      }),
      r.d(a, 'MdCheckBoxOutlineBlank', function() {
        return Kz;
      }),
      r.d(a, 'MdIndeterminateCheckBox', function() {
        return Qz;
      }),
      r.d(a, 'MdRadioButtonChecked', function() {
        return qz;
      }),
      r.d(a, 'MdRadioButtonUnchecked', function() {
        return Zz;
      }),
      r.d(a, 'MdStar', function() {
        return Jz;
      }),
      r.d(a, 'MdStarBorder', function() {
        return $z;
      }),
      r.d(a, 'MdStarHalf', function() {
        return Yz;
      });
    var o = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32zm.89-6.52c-.19 0-.37-.03-.52-.08-.16-.06-.29-.13-.4-.24-.11-.1-.2-.22-.26-.37-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95.14.27.33.5.56.69.24.18.51.32.82.41.3.1.62.15.96.15.37 0 .72-.05 1.03-.15.32-.1.6-.25.83-.44s.42-.43.55-.72c.13-.29.2-.61.2-.97 0-.19-.02-.38-.07-.56-.05-.18-.12-.35-.23-.51-.1-.16-.24-.3-.4-.43-.17-.13-.37-.23-.61-.31.2-.09.37-.2.52-.33.15-.13.27-.27.37-.42.1-.15.17-.3.22-.46.05-.16.07-.32.07-.48 0-.36-.06-.68-.18-.96-.12-.28-.29-.51-.51-.69-.2-.19-.47-.33-.77-.43C9.1 8.05 8.76 8 8.39 8c-.36 0-.69.05-1 .16-.3.11-.57.26-.79.45-.21.19-.38.41-.51.67-.12.26-.18.54-.18.85h1.3c0-.17.03-.32.09-.45s.14-.25.25-.34c.11-.09.23-.17.38-.22.15-.05.3-.08.48-.08.4 0 .7.1.89.31.19.2.29.49.29.86 0 .18-.03.34-.08.49-.05.15-.14.27-.25.37-.11.1-.25.18-.41.24-.16.06-.36.09-.58.09H7.5v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4.07.16.1.35.1.57 0 .41-.12.72-.35.93-.23.23-.55.33-.95.33zm8.55-5.92c-.32-.33-.7-.59-1.14-.77-.43-.18-.92-.27-1.46-.27H12v8h2.3c.55 0 1.06-.09 1.51-.27.45-.18.84-.43 1.16-.76.32-.33.57-.73.74-1.19.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57-.18-.47-.43-.87-.75-1.2zm-.39 3.16c0 .42-.05.79-.14 1.13-.1.33-.24.62-.43.85-.19.23-.43.41-.71.53-.29.12-.62.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69.38.46.57 1.12.57 1.99v.4zM12 0l-.66.03 3.81 3.81 1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.44 4.84 18.29 0 12 0z',
            },
          },
        ],
      })(t);
    };
    o.displayName = 'Md3dRotation';
    var l = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z',
            },
          },
        ],
      })(t);
    };
    l.displayName = 'MdAccessibility';
    var u = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          { tag: 'circle', attr: { cx: '12', cy: '4', r: '2' } },
          {
            tag: 'path',
            attr: {
              d:
                'M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z',
            },
          },
        ],
      })(t);
    };
    u.displayName = 'MdAccessible';
    var s = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z',
            },
          },
        ],
      })(t);
    };
    s.displayName = 'MdAccountBalance';
    var M = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z',
            },
          },
        ],
      })(t);
    };
    M.displayName = 'MdAccountBalanceWallet';
    var g = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z',
            },
          },
        ],
      })(t);
    };
    g.displayName = 'MdAccountBox';
    var z = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z',
            },
          },
        ],
      })(t);
    };
    z.displayName = 'MdAccountCircle';
    var m = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z',
            },
          },
        ],
      })(t);
    };
    m.displayName = 'MdAddShoppingCart';
    var p = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z',
            },
          },
        ],
      })(t);
    };
    p.displayName = 'MdAlarm';
    var f = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z',
            },
          },
        ],
      })(t);
    };
    f.displayName = 'MdAlarmAdd';
    var H = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 6c3.87 0 7 3.13 7 7 0 .84-.16 1.65-.43 2.4l1.52 1.52c.58-1.19.91-2.51.91-3.92 0-4.97-4.03-9-9-9-1.41 0-2.73.33-3.92.91L9.6 6.43C10.35 6.16 11.16 6 12 6zm10-.28l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM2.92 2.29L1.65 3.57 2.98 4.9l-1.11.93 1.42 1.42 1.11-.94.8.8C3.83 8.69 3 10.75 3 13c0 4.97 4.02 9 9 9 2.25 0 4.31-.83 5.89-2.2l2.2 2.2 1.27-1.27L3.89 3.27l-.97-.98zm13.55 16.1C15.26 19.39 13.7 20 12 20c-3.87 0-7-3.13-7-7 0-1.7.61-3.26 1.61-4.47l9.86 9.86zM8.02 3.28L6.6 1.86l-.86.71 1.42 1.42.86-.71z',
            },
          },
        ],
      })(t);
    };
    H.displayName = 'MdAlarmOff';
    var V = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-1.46-5.47L8.41 12.4l-1.06 1.06 3.18 3.18 6-6-1.06-1.06-4.93 4.95z',
            },
          },
        ],
      })(t);
    };
    V.displayName = 'MdAlarmOn';
    var y = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M16.21 4.16l4 4v-4zm4 12l-4 4h4zm-12 4l-4-4v4zm-4-12l4-4h-4zm12.95-.95c-2.73-2.73-7.17-2.73-9.9 0s-2.73 7.17 0 9.9 7.17 2.73 9.9 0 2.73-7.16 0-9.9zm-1.1 8.8c-2.13 2.13-5.57 2.13-7.7 0s-2.13-5.57 0-7.7 5.57-2.13 7.7 0 2.13 5.57 0 7.7z',
            },
          },
        ],
      })(t);
    };
    y.displayName = 'MdAllOut';
    var L = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z',
            },
          },
        ],
      })(t);
    };
    L.displayName = 'MdAndroid';
    var B = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z',
            },
          },
        ],
      })(t);
    };
    B.displayName = 'MdAnnouncement';
    var w = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z',
            },
          },
        ],
      })(t);
    };
    w.displayName = 'MdAspectRatio';
    var x = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z',
            },
          },
        ],
      })(t);
    };
    x.displayName = 'MdAssessment';
    var N = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z',
            },
          },
        ],
      })(t);
    };
    N.displayName = 'MdAssignment';
    var C = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z',
            },
          },
        ],
      })(t);
    };
    C.displayName = 'MdAssignmentInd';
    var S = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 15h-2v-2h2v2zm0-4h-2V8h2v6zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z',
            },
          },
        ],
      })(t);
    };
    S.displayName = 'MdAssignmentLate';
    var A = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 12h-4v3l-5-5 5-5v3h4v4z',
            },
          },
        ],
      })(t);
    };
    A.displayName = 'MdAssignmentReturn';
    var b = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 15l-5-5h3V9h4v4h3l-5 5z',
            },
          },
        ],
      })(t);
    };
    b.displayName = 'MdAssignmentReturned';
    var P = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z',
            },
          },
        ],
      })(t);
    };
    P.displayName = 'MdAssignmentTurnedIn';
    var F = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z',
            },
          },
        ],
      })(t);
    };
    F.displayName = 'MdAutorenew';
    var k = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z',
            },
          },
        ],
      })(t);
    };
    k.displayName = 'MdBackup';
    var O = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z',
            },
          },
        ],
      })(t);
    };
    O.displayName = 'MdBook';
    var T = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d: 'M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z',
            },
          },
        ],
      })(t);
    };
    T.displayName = 'MdBookmark';
    var R = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z',
            },
          },
        ],
      })(t);
    };
    R.displayName = 'MdBookmarkBorder';
    var D = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z',
            },
          },
        ],
      })(t);
    };
    D.displayName = 'MdBugReport';
    var I = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z',
            },
          },
        ],
      })(t);
    };
    I.displayName = 'MdBuild';
    var E = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z',
            },
          },
        ],
      })(t);
    };
    E.displayName = 'MdCached';
    var W = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M9 3L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.17L15 3H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-1l1.25-2.75L16 13l-2.75-1.25L12 9l-1.25 2.75L8 13l2.75 1.25z',
            },
          },
        ],
      })(t);
    };
    W.displayName = 'MdCameraEnhance';
    var U = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z',
            },
          },
        ],
      })(t);
    };
    U.displayName = 'MdCardGiftcard';
    var G = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V4h16v6z',
            },
          },
        ],
      })(t);
    };
    G.displayName = 'MdCardMembership';
    var j = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z',
            },
          },
        ],
      })(t);
    };
    j.displayName = 'MdCardTravel';
    var _ = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: { d: 'M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z' },
          },
        ],
      })(t);
    };
    _.displayName = 'MdChangeHistory';
    var K = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
            },
          },
        ],
      })(t);
    };
    K.displayName = 'MdCheckCircle';
    var Q = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z',
            },
          },
        ],
      })(t);
    };
    Q.displayName = 'MdChromeReaderMode';
    var q = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z',
            },
          },
        ],
      })(t);
    };
    q.displayName = 'MdClass';
    var Z = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z',
            },
          },
        ],
      })(t);
    };
    Z.displayName = 'MdCode';
    var J = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z',
            },
          },
        ],
      })(t);
    };
    J.displayName = 'MdCompareArrows';
    var $ = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91 1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z',
            },
          },
        ],
      })(t);
    };
    $.displayName = 'MdCopyright';
    var Y = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z',
            },
          },
        ],
      })(t);
    };
    Y.displayName = 'MdCreditCard';
    var X = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z',
            },
          },
        ],
      })(t);
    };
    X.displayName = 'MdDashboard';
    var tt = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z',
            },
          },
        ],
      })(t);
    };
    tt.displayName = 'MdDateRange';
    var at = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z',
            },
          },
        ],
      })(t);
    };
    at.displayName = 'MdDelete';
    var rt = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z',
            },
          },
        ],
      })(t);
    };
    rt.displayName = 'MdDeleteForever';
    var nt = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z',
            },
          },
        ],
      })(t);
    };
    nt.displayName = 'MdDescription';
    var ct = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z',
            },
          },
        ],
      })(t);
    };
    ct.displayName = 'MdDns';
    var et = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: { d: 'M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' },
          },
        ],
      })(t);
    };
    et.displayName = 'MdDone';
    var vt = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z',
            },
          },
        ],
      })(t);
    };
    vt.displayName = 'MdDoneAll';
    var it = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M11 5.08V2c-5 .5-9 4.81-9 10s4 9.5 9 10v-3.08c-3-.48-6-3.4-6-6.92s3-6.44 6-6.92zM18.97 11H22c-.47-5-4-8.53-9-9v3.08C16 5.51 18.54 8 18.97 11zM13 18.92V22c5-.47 8.53-4 9-9h-3.03c-.43 3-2.97 5.49-5.97 5.92z',
            },
          },
        ],
      })(t);
    };
    it.displayName = 'MdDonutLarge';
    var dt = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M11 9.16V2c-5 .5-9 4.79-9 10s4 9.5 9 10v-7.16c-1-.41-2-1.52-2-2.84s1-2.43 2-2.84zM14.86 11H22c-.48-4.75-4-8.53-9-9v7.16c1 .3 1.52.98 1.86 1.84zM13 14.84V22c5-.47 8.52-4.25 9-9h-7.14c-.34.86-.86 1.54-1.86 1.84z',
            },
          },
        ],
      })(t);
    };
    dt.displayName = 'MdDonutSmall';
    var ht = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          { tag: 'path', attr: { d: 'M5 17h14v2H5zm7-12L5.33 15h13.34z' } },
        ],
      })(t);
    };
    ht.displayName = 'MdEject';
    var ot = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15v-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15V9H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3v2h3.06c-.04.33-.06.66-.06 1 0 .34.02.67.06 1H3v2h3.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z',
            },
          },
        ],
      })(t);
    };
    ot.displayName = 'MdEuroSymbol';
    var lt = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z',
            },
          },
        ],
      })(t);
    };
    lt.displayName = 'MdEvent';
    var ut = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M4 18v3h3v-3h10v3h3v-6H4zm15-8h3v3h-3zM2 10h3v3H2zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z',
            },
          },
        ],
      })(t);
    };
    ut.displayName = 'MdEventSeat';
    var st = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z',
            },
          },
        ],
      })(t);
    };
    st.displayName = 'MdExitToApp';
    var Mt = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z',
            },
          },
        ],
      })(t);
    };
    Mt.displayName = 'MdExplore';
    var gt = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z',
            },
          },
        ],
      })(t);
    };
    gt.displayName = 'MdExtension';
    var zt = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z',
            },
          },
        ],
      })(t);
    };
    zt.displayName = 'MdFace';
    var mt = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
            },
          },
        ],
      })(t);
    };
    mt.displayName = 'MdFavorite';
    var pt = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z',
            },
          },
        ],
      })(t);
    };
    pt.displayName = 'MdFavoriteBorder';
    var ft = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z',
            },
          },
        ],
      })(t);
    };
    ft.displayName = 'MdFeedback';
    var Ht = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z',
            },
          },
        ],
      })(t);
    };
    Ht.displayName = 'MdFindInPage';
    var Vt = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05C14.68 4.78 12.93 4 11 4c-3.53 0-6.43 2.61-6.92 6H6.1c.46-2.28 2.48-4 4.9-4zm5.64 9.14c.66-.9 1.12-1.97 1.28-3.14H15.9c-.46 2.28-2.48 4-4.9 4-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05C7.32 17.22 9.07 18 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z',
            },
          },
        ],
      })(t);
    };
    Vt.displayName = 'MdFindReplace';
    var yt = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z',
            },
          },
        ],
      })(t);
    };
    yt.displayName = 'MdFingerprint';
    var Lt = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M2.5 19h19v2h-19zm7.18-5.73l4.35 1.16 5.31 1.42c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l1.6.43 5.31 1.43z',
            },
          },
        ],
      })(t);
    };
    Lt.displayName = 'MdFlightLand';
    var Bt = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 1.82 3.16.77 1.33 1.6-.43 5.31-1.42 4.35-1.16L21 11.49c.81-.23 1.28-1.05 1.07-1.85z',
            },
          },
        ],
      })(t);
    };
    Bt.displayName = 'MdFlightTakeoff';
    var wt = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M9 7H7v2h2V7zm0 4H7v2h2v-2zm0-8c-1.11 0-2 .9-2 2h2V3zm4 12h-2v2h2v-2zm6-12v2h2c0-1.1-.9-2-2-2zm-6 0h-2v2h2V3zM9 17v-2H7c0 1.1.89 2 2 2zm10-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zM5 7H3v12c0 1.1.89 2 2 2h12v-2H5V7zm10-2h2V3h-2v2zm0 12h2v-2h-2v2z',
            },
          },
        ],
      })(t);
    };
    wt.displayName = 'MdFlipToBack';
    var xt = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3c0 1.1.89 2 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9c-1.11 0-2 .9-2 2v10c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2z',
            },
          },
        ],
      })(t);
    };
    xt.displayName = 'MdFlipToFront';
    var Nt = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 5h-9.12L10 2H4c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h7l1 3h8c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM7.17 14.59c-2.25 0-4.09-1.83-4.09-4.09s1.83-4.09 4.09-4.09c1.04 0 1.99.37 2.74 1.07l.07.06-1.23 1.18-.06-.05c-.29-.27-.78-.59-1.52-.59-1.31 0-2.38 1.09-2.38 2.42s1.07 2.42 2.38 2.42c1.37 0 1.96-.87 2.12-1.46H7.08V9.91h3.95l.01.07c.04.21.05.4.05.61 0 2.35-1.61 4-3.92 4zm6.03-1.71c.33.6.74 1.18 1.19 1.7l-.54.53-.65-2.23zm.77-.76h-.99l-.31-1.04h3.99s-.34 1.31-1.56 2.74c-.52-.62-.89-1.23-1.13-1.7zM21 20c0 .55-.45 1-1 1h-7l2-2-.81-2.77.92-.92L17.79 18l.73-.73-2.71-2.68c.9-1.03 1.6-2.25 1.92-3.51H19v-1.04h-3.64V9h-1.04v1.04h-1.96L11.18 6H20c.55 0 1 .45 1 1v13z',
            },
          },
        ],
      })(t);
    };
    Nt.displayName = 'MdGTranslate';
    var Ct = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M1 21h12v2H1zM5.245 8.07l2.83-2.827 14.14 14.142-2.828 2.828zM12.317 1l5.657 5.656-2.83 2.83-5.654-5.66zM3.825 9.485l5.657 5.657-2.828 2.828-5.657-5.657z',
            },
          },
        ],
      })(t);
    };
    Ct.displayName = 'MdGavel';
    var St = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: { d: 'M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z' },
          },
        ],
      })(t);
    };
    St.displayName = 'MdGetApp';
    var At = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M11.5 9H13v6h-1.5zM9 9H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-.5-.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1z',
            },
          },
        ],
      })(t);
    };
    At.displayName = 'MdGif';
    var bt = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z',
            },
          },
        ],
      })(t);
    };
    bt.displayName = 'MdGrade';
    var Pt = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zm6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
            },
          },
        ],
      })(t);
    };
    Pt.displayName = 'MdGroupWork';
    var Ft = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z',
            },
          },
        ],
      })(t);
    };
    Ft.displayName = 'MdHelp';
    var kt = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z',
            },
          },
        ],
      })(t);
    };
    kt.displayName = 'MdHelpOutline';
    var Ot = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z',
            },
          },
        ],
      })(t);
    };
    Ot.displayName = 'MdHighlightOff';
    var Tt = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z',
            },
          },
        ],
      })(t);
    };
    Tt.displayName = 'MdHistory';
    var Rt = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          { tag: 'path', attr: { d: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' } },
        ],
      })(t);
    };
    Rt.displayName = 'MdHome';
    var Dt = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z',
            },
          },
        ],
      })(t);
    };
    Dt.displayName = 'MdHourglassEmpty';
    var It = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z',
            },
          },
        ],
      })(t);
    };
    It.displayName = 'MdHourglassFull';
    var Et = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5v2zm2.5-.5h1.5V15H10v-4.5h1.5V9H7v1.5zm5.5 0H14V15h1.5v-4.5H17V9h-4.5v1.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5zm0 2.5h-2v-1h2v1z',
            },
          },
        ],
      })(t);
    };
    Et.displayName = 'MdHttp';
    var Wt = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z',
            },
          },
        ],
      })(t);
    };
    Wt.displayName = 'MdHttps';
    var Ut = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M23 11.01L18 11c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.99-1-.99zM23 20h-5v-7h5v7zM20 2H2C.89 2 0 2.89 0 4v12c0 1.1.89 2 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V4c0-1.11-.9-2-2-2zm-8.03 7L11 6l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9h-3.03z',
            },
          },
        ],
      })(t);
    };
    Ut.displayName = 'MdImportantDevices';
    var Gt = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z',
            },
          },
        ],
      })(t);
    };
    Gt.displayName = 'MdInfo';
    var jt = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z',
            },
          },
        ],
      })(t);
    };
    jt.displayName = 'MdInfoOutline';
    var _t = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z',
            },
          },
        ],
      })(t);
    };
    _t.displayName = 'MdInput';
    var Kt = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z',
            },
          },
        ],
      })(t);
    };
    Kt.displayName = 'MdInvertColors';
    var Qt = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z',
            },
          },
        ],
      })(t);
    };
    Qt.displayName = 'MdLabel';
    var qt = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z',
            },
          },
        ],
      })(t);
    };
    qt.displayName = 'MdLabelOutline';
    var Zt = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z',
            },
          },
        ],
      })(t);
    };
    Zt.displayName = 'MdLanguage';
    var Jt = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z',
            },
          },
        ],
      })(t);
    };
    Jt.displayName = 'MdLaunch';
    var $t = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z',
            },
          },
        ],
      })(t);
    };
    $t.displayName = 'MdLightbulbOutline';
    var Yt = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M3 16h5v-2H3v2zm6.5 0h5v-2h-5v2zm6.5 0h5v-2h-5v2zM3 20h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM3 12h8v-2H3v2zm10 0h8v-2h-8v2zM3 4v4h18V4H3z',
            },
          },
        ],
      })(t);
    };
    Yt.displayName = 'MdLineStyle';
    var Xt = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d: 'M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z',
            },
          },
        ],
      })(t);
    };
    Xt.displayName = 'MdLineWeight';
    var ta = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z',
            },
          },
        ],
      })(t);
    };
    ta.displayName = 'MdList';
    var aa = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z',
            },
          },
        ],
      })(t);
    };
    aa.displayName = 'MdLock';
    var ra = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z',
            },
          },
        ],
      })(t);
    };
    ra.displayName = 'MdLockOpen';
    var na = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z',
            },
          },
        ],
      })(t);
    };
    na.displayName = 'MdLockOutline';
    var ca = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7zm11.77 8.27L13 19.54l-4.27-4.27C8.28 14.81 8 14.19 8 13.5c0-1.38 1.12-2.5 2.5-2.5.69 0 1.32.28 1.77.74l.73.72.73-.73c.45-.45 1.08-.73 1.77-.73 1.38 0 2.5 1.12 2.5 2.5 0 .69-.28 1.32-.73 1.77z',
            },
          },
        ],
      })(t);
    };
    ca.displayName = 'MdLoyalty';
    var ea = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z',
            },
          },
        ],
      })(t);
    };
    ea.displayName = 'MdMarkunreadMailbox';
    var va = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19.44 9.03L15.41 5H11v2h3.59l2 2H5c-2.8 0-5 2.2-5 5s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h1.65l2.77-2.77c-.21.54-.32 1.14-.32 1.77 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2.65-1.97-4.77-4.56-4.97zM7.82 15C7.4 16.15 6.28 17 5 17c-1.63 0-3-1.37-3-3s1.37-3 3-3c1.28 0 2.4.85 2.82 2H5v2h2.82zM19 17c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z',
            },
          },
        ],
      })(t);
    };
    va.displayName = 'MdMotorcycle';
    var ia = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z',
            },
          },
        ],
      })(t);
    };
    ia.displayName = 'MdNoteAdd';
    var da = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 16H7v-2h10v2zm-6.7-4L7 10.7l1.4-1.4 1.9 1.9 5.3-5.3L17 7.3 10.3 14z',
            },
          },
        ],
      })(t);
    };
    da.displayName = 'MdOfflinePin';
    var ha = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z',
            },
          },
        ],
      })(t);
    };
    ha.displayName = 'MdOpacity';
    var oa = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z',
            },
          },
        ],
      })(t);
    };
    oa.displayName = 'MdOpenInBrowser';
    var la = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z',
            },
          },
        ],
      })(t);
    };
    la.displayName = 'MdOpenInNew';
    var ua = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z',
            },
          },
        ],
      })(t);
    };
    ua.displayName = 'MdOpenWith';
    var sa = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21l-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z',
            },
          },
        ],
      })(t);
    };
    sa.displayName = 'MdPageview';
    var Ma = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z',
            },
          },
        ],
      })(t);
    };
    Ma.displayName = 'MdPanTool';
    var ga = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z',
            },
          },
        ],
      })(t);
    };
    ga.displayName = 'MdPayment';
    var za = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v-2.09c-2.83-.48-5-2.94-5-5.91h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 2.97-2.17 5.43-5 5.91V21h7c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-6 8c0 1.1-.9 2-2 2s-2-.9-2-2V9c0-1.1.9-2 2-2s2 .9 2 2v4z',
            },
          },
        ],
      })(t);
    };
    za.displayName = 'MdPermCameraMic';
    var ma = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z',
            },
          },
        ],
      })(t);
    };
    ma.displayName = 'MdPermContactCalendar';
    var pa = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M18.99 11.5c.34 0 .67.03 1 .07L20 0 0 20h11.56c-.04-.33-.07-.66-.07-1 0-4.14 3.36-7.5 7.5-7.5zm3.71 7.99c.02-.16.04-.32.04-.49 0-.17-.01-.33-.04-.49l1.06-.83c.09-.08.12-.21.06-.32l-1-1.73c-.06-.11-.19-.15-.31-.11l-1.24.5c-.26-.2-.54-.37-.85-.49l-.19-1.32c-.01-.12-.12-.21-.24-.21h-2c-.12 0-.23.09-.25.21l-.19 1.32c-.3.13-.59.29-.85.49l-1.24-.5c-.11-.04-.24 0-.31.11l-1 1.73c-.06.11-.04.24.06.32l1.06.83c-.02.16-.03.32-.03.49 0 .17.01.33.03.49l-1.06.83c-.09.08-.12.21-.06.32l1 1.73c.06.11.19.15.31.11l1.24-.5c.26.2.54.37.85.49l.19 1.32c.02.12.12.21.25.21h2c.12 0 .23-.09.25-.21l.19-1.32c.3-.13.59-.29.84-.49l1.25.5c.11.04.24 0 .31-.11l1-1.73c.06-.11.03-.24-.06-.32l-1.07-.83zm-3.71 1.01c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z',
            },
          },
        ],
      })(t);
    };
    pa.displayName = 'MdPermDataSetting';
    var fa = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M13 7h-2v2h2V7zm0 4h-2v6h2v-6zm4-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z',
            },
          },
        ],
      })(t);
    };
    fa.displayName = 'MdPermDeviceInformation';
    var Ha = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z',
            },
          },
        ],
      })(t);
    };
    Ha.displayName = 'MdPermIdentity';
    var Va = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z',
            },
          },
        ],
      })(t);
    };
    Va.displayName = 'MdPermMedia';
    var ya = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z',
            },
          },
        ],
      })(t);
    };
    ya.displayName = 'MdPermPhoneMsg';
    var La = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3zm1 13h-2v-6h2v6zm-2-8V6h2v2h-2z',
            },
          },
        ],
      })(t);
    };
    La.displayName = 'MdPermScanWifi';
    var Ba = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          { tag: 'circle', attr: { cx: '4.5', cy: '9.5', r: '2.5' } },
          { tag: 'circle', attr: { cx: '9', cy: '5.5', r: '2.5' } },
          { tag: 'circle', attr: { cx: '15', cy: '5.5', r: '2.5' } },
          { tag: 'circle', attr: { cx: '19.5', cy: '9.5', r: '2.5' } },
          {
            tag: 'path',
            attr: {
              d:
                'M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z',
            },
          },
        ],
      })(t);
    };
    Ba.displayName = 'MdPets';
    var wa = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z',
            },
          },
        ],
      })(t);
    };
    wa.displayName = 'MdPictureInPicture';
    var xa = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 11h-8v6h8v-6zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z',
            },
          },
        ],
      })(t);
    };
    xa.displayName = 'MdPictureInPictureAlt';
    var Na = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z',
            },
          },
        ],
      })(t);
    };
    Na.displayName = 'MdPlayForWork';
    var Ca = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z',
            },
          },
        ],
      })(t);
    };
    Ca.displayName = 'MdPolymer';
    var Sa = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z',
            },
          },
        ],
      })(t);
    };
    Sa.displayName = 'MdPowerSettingsNew';
    var Aa = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm7 9c-.01-1.34-.83-2.51-2-3 0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3v-4z',
            },
          },
        ],
      })(t);
    };
    Aa.displayName = 'MdPregnantWoman';
    var ba = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z',
            },
          },
        ],
      })(t);
    };
    ba.displayName = 'MdPrint';
    var Pa = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z',
            },
          },
        ],
      })(t);
    };
    Pa.displayName = 'MdQueryBuilder';
    var Fa = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z',
            },
          },
        ],
      })(t);
    };
    Fa.displayName = 'MdQuestionAnswer';
    var ka = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z',
            },
          },
        ],
      })(t);
    };
    ka.displayName = 'MdReceipt';
    var Oa = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          { tag: 'circle', attr: { cx: '9', cy: '9', r: '4' } },
          {
            tag: 'path',
            attr: {
              d:
                'M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z',
            },
          },
        ],
      })(t);
    };
    Oa.displayName = 'MdRecordVoiceOver';
    var Ta = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z',
            },
          },
        ],
      })(t);
    };
    Ta.displayName = 'MdRedeem';
    var Ra = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M22.73 22.73L2.77 2.77 2 2l-.73-.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.27-1.27zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h2.36l2 2H7.42zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H6.54l9.01 9zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z',
            },
          },
        ],
      })(t);
    };
    Ra.displayName = 'MdRemoveShoppingCart';
    var Da = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d: 'M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z',
            },
          },
        ],
      })(t);
    };
    Da.displayName = 'MdReorder';
    var Ia = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: { d: 'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z' },
          },
        ],
      })(t);
    };
    Ia.displayName = 'MdReportProblem';
    var Ea = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z',
            },
          },
        ],
      })(t);
    };
    Ea.displayName = 'MdRestore';
    var Wa = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-2 16c-2.05 0-3.81-1.24-4.58-3h1.71c.63.9 1.68 1.5 2.87 1.5 1.93 0 3.5-1.57 3.5-3.5S13.93 9.5 12 9.5c-1.35 0-2.52.78-3.1 1.9l1.6 1.6h-4V9l1.3 1.3C8.69 8.92 10.23 8 12 8c2.76 0 5 2.24 5 5s-2.24 5-5 5z',
            },
          },
        ],
      })(t);
    };
    Wa.displayName = 'MdRestorePage';
    var Ua = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
            },
          },
        ],
      })(t);
    };
    Ua.displayName = 'MdRoom';
    var Ga = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 19h2v2h-2v-2zm0-2h2v-2h-2v2zM3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm0-4h2V3H3v2zm4 0h2V3H7v2zm8 16h2v-2h-2v2zm-4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-8 0h2v-2H7v2zm-4 0h2v-2H3v2zM21 8c0-2.76-2.24-5-5-5h-5v2h5c1.65 0 3 1.35 3 3v5h2V8z',
            },
          },
        ],
      })(t);
    };
    Ga.displayName = 'MdRoundedCorner';
    var ja = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M8.5 14.5L4 19l1.5 1.5L9 17h2l-2.5-2.5zM15 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 20.01L18 24l-2.99-3.01V19.5l-7.1-7.09c-.31.05-.61.07-.91.07v-2.16c1.66.03 3.61-.87 4.67-2.04l1.4-1.55c.19-.21.43-.38.69-.5.29-.14.62-.23.96-.23h.03C15.99 6.01 17 7.02 17 8.26v5.75c0 .84-.35 1.61-.92 2.16l-3.58-3.58v-2.27c-.63.52-1.43 1.02-2.29 1.39L16.5 18H18l3 3.01z',
            },
          },
        ],
      })(t);
    };
    ja.displayName = 'MdRowing';
    var _a = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z',
            },
          },
        ],
      })(t);
    };
    _a.displayName = 'MdSchedule';
    var Ka = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z',
            },
          },
        ],
      })(t);
    };
    Ka.displayName = 'MdSearch';
    var Qa = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z',
            },
          },
        ],
      })(t);
    };
    Qa.displayName = 'MdSettings';
    var qa = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z',
            },
          },
        ],
      })(t);
    };
    qa.displayName = 'MdSettingsApplications';
    var Za = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z',
            },
          },
        ],
      })(t);
    };
    Za.displayName = 'MdSettingsBackupRestore';
    var Ja = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M11 24h2v-2h-2v2zm-4 0h2v-2H7v2zm8 0h2v-2h-2v2zm2.71-18.29L12 0h-1v7.59L6.41 3 5 4.41 10.59 10 5 15.59 6.41 17 11 12.41V20h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 3.83l1.88 1.88L13 7.59V3.83zm1.88 10.46L13 16.17v-3.76l1.88 1.88z',
            },
          },
        ],
      })(t);
    };
    Ja.displayName = 'MdSettingsBluetooth';
    var $a = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02zM8 16h2.5l1.5 1.5 1.5-1.5H16v-2.5l1.5-1.5-1.5-1.5V8h-2.5L12 6.5 10.5 8H8v2.5L6.5 12 8 13.5V16zm4-7c1.66 0 3 1.34 3 3s-1.34 3-3 3V9z',
            },
          },
        ],
      })(t);
    };
    $a.displayName = 'MdSettingsBrightness';
    var Ya = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM16 .01L8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99zM16 16H8V4h8v12z',
            },
          },
        ],
      })(t);
    };
    Ya.displayName = 'MdSettingsCell';
    var Xa = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z',
            },
          },
        ],
      })(t);
    };
    Xa.displayName = 'MdSettingsEthernet';
    var tr = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm1 9.29c.88-.39 1.5-1.26 1.5-2.29 0-1.38-1.12-2.5-2.5-2.5S9.5 10.62 9.5 12c0 1.02.62 1.9 1.5 2.29v3.3L7.59 21 9 22.41l3-3 3 3L16.41 21 13 17.59v-3.3zM12 1C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11z',
            },
          },
        ],
      })(t);
    };
    tr.displayName = 'MdSettingsInputAntenna';
    var ar = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z',
            },
          },
        ],
      })(t);
    };
    ar.displayName = 'MdSettingsInputComponent';
    var rr = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z',
            },
          },
        ],
      })(t);
    };
    rr.displayName = 'MdSettingsInputComposite';
    var nr = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7h-1zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8V4z',
            },
          },
        ],
      })(t);
    };
    nr.displayName = 'MdSettingsInputHdmi';
    var cr = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M8 11.5c0-.83-.67-1.5-1.5-1.5S5 10.67 5 11.5 5.67 13 6.5 13 8 12.33 8 11.5zm7-5c0-.83-.67-1.5-1.5-1.5h-3C9.67 5 9 5.67 9 6.5S9.67 8 10.5 8h3c.83 0 1.5-.67 1.5-1.5zM8.5 15c-.83 0-1.5.67-1.5 1.5S7.67 18 8.5 18s1.5-.67 1.5-1.5S9.33 15 8.5 15zM12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 20c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9zm5.5-11c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-2 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z',
            },
          },
        ],
      })(t);
    };
    cr.displayName = 'MdSettingsInputSvideo';
    var er = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12.01 5.5L10 8h4l-1.99-2.5zM18 10v4l2.5-1.99L18 10zM6 10l-2.5 2.01L6 14v-4zm8 6h-4l2.01 2.5L14 16zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z',
            },
          },
        ],
      })(t);
    };
    er.displayName = 'MdSettingsOverscan';
    var vr = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M13 9h-2v2h2V9zm4 0h-2v2h2V9zm3 6.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 9v2h2V9h-2z',
            },
          },
        ],
      })(t);
    };
    vr.displayName = 'MdSettingsPhone';
    var ir = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm2-22h-2v10h2V2zm3.56 2.44l-1.45 1.45C16.84 6.94 18 8.83 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44C5.36 5.88 4 8.28 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56zM15 24h2v-2h-2v2z',
            },
          },
        ],
      })(t);
    };
    ir.displayName = 'MdSettingsPower';
    var dr = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1zm-3 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM7.05 6.05l1.41 1.41C9.37 6.56 10.62 6 12 6s2.63.56 3.54 1.46l1.41-1.41C15.68 4.78 13.93 4 12 4s-3.68.78-4.95 2.05zM12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41C7.26 3.01 9.51 2 12 2s4.74 1.01 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0z',
            },
          },
        ],
      })(t);
    };
    dr.displayName = 'MdSettingsRemote';
    var hr = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M7 24h2v-2H7v2zm5-11c1.66 0 2.99-1.34 2.99-3L15 4c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 3 3zm-1 11h2v-2h-2v2zm4 0h2v-2h-2v2zm4-14h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.41 2.72 6.23 6 6.72V20h2v-3.28c3.28-.49 6-3.31 6-6.72z',
            },
          },
        ],
      })(t);
    };
    hr.displayName = 'MdSettingsVoice';
    var or = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zM9 18V9l7.5 4L9 18z',
            },
          },
        ],
      })(t);
    };
    or.displayName = 'MdShop';
    var lr = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M3 9H1v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H3V9zm15-4V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm0 12V8l5.5 3-5.5 4z',
            },
          },
        ],
      })(t);
    };
    lr.displayName = 'MdShopTwo';
    var ur = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z',
            },
          },
        ],
      })(t);
    };
    ur.displayName = 'MdShoppingBasket';
    var sr = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z',
            },
          },
        ],
      })(t);
    };
    sr.displayName = 'MdShoppingCart';
    var Mr = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 14H6v-2h2v2zm0-3H6V9h2v2zm0-3H6V6h2v2zm7 6h-5v-2h5v2zm3-3h-8V9h8v2zm0-3h-8V6h8v2z',
            },
          },
        ],
      })(t);
    };
    Mr.displayName = 'MdSpeakerNotes';
    var gr = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M10.54 11l-.54-.54L7.54 8 6 6.46 2.38 2.84 1.27 1.73 0 3l2.01 2.01L2 22l4-4h9l5.73 5.73L22 22.46 17.54 18l-7-7zM8 14H6v-2h2v2zm-2-3V9l2 2H6zm14-9H4.08L10 7.92V6h8v2h-7.92l1 1H18v2h-4.92l6.99 6.99C21.14 17.95 22 17.08 22 16V4c0-1.1-.9-2-2-2z',
            },
          },
        ],
      })(t);
    };
    gr.displayName = 'MdSpeakerNotesOff';
    var zr = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3zm-6.02-5L8.5 5.48 10.57 11H6.43zm15.16.59l-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z',
            },
          },
        ],
      })(t);
    };
    zr.displayName = 'MdSpellcheck';
    var mr = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z',
            },
          },
        ],
      })(t);
    };
    mr.displayName = 'MdStars';
    var pr = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z',
            },
          },
        ],
      })(t);
    };
    pr.displayName = 'MdStore';
    var fr = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z',
            },
          },
        ],
      })(t);
    };
    fr.displayName = 'MdSubject';
    var Hr = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z',
            },
          },
        ],
      })(t);
    };
    Hr.displayName = 'MdSupervisorAccount';
    var Vr = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z',
            },
          },
        ],
      })(t);
    };
    Vr.displayName = 'MdSwapHoriz';
    var yr = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z',
            },
          },
        ],
      })(t);
    };
    yr.displayName = 'MdSwapVert';
    var Lr = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.5 9L10 5.5 13.5 9H11v4H9V9H6.5zm11 6L14 18.5 10.5 15H13v-4h2v4h2.5z',
            },
          },
        ],
      })(t);
    };
    Lr.displayName = 'MdSwapVerticalCircle';
    var Br = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 16.5l4-4h-3v-9h-2v9H8l4 4zm9-13h-6v1.99h6v14.03H3V5.49h6V3.5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2z',
            },
          },
        ],
      })(t);
    };
    Br.displayName = 'MdSystemUpdateAlt';
    var wr = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z',
            },
          },
        ],
      })(t);
    };
    wr.displayName = 'MdTab';
    var xr = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M1 9h2V7H1v2zm0 4h2v-2H1v2zm0-8h2V3c-1.1 0-2 .9-2 2zm8 16h2v-2H9v2zm-8-4h2v-2H1v2zm2 4v-2H1c0 1.1.9 2 2 2zM21 3h-8v6h10V5c0-1.1-.9-2-2-2zm0 14h2v-2h-2v2zM9 5h2V3H9v2zM5 21h2v-2H5v2zM5 5h2V3H5v2zm16 16c1.1 0 2-.9 2-2h-2v2zm0-8h2v-2h-2v2zm-8 8h2v-2h-2v2zm4 0h2v-2h-2v2z',
            },
          },
        ],
      })(t);
    };
    xr.displayName = 'MdTabUnselected';
    var Nr = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z',
            },
          },
        ],
      })(t);
    };
    Nr.displayName = 'MdTheaters';
    var Cr = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z',
            },
          },
        ],
      })(t);
    };
    Cr.displayName = 'MdThumbDown';
    var Sr = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z',
            },
          },
        ],
      })(t);
    };
    Sr.displayName = 'MdThumbUp';
    var Ar = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 6c0-.55-.45-1-1-1H5.82l.66-3.18.02-.23c0-.31-.13-.59-.33-.8L5.38 0 .44 4.94C.17 5.21 0 5.59 0 6v6.5c0 .83.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.91l2.26-5.29c.07-.17.11-.36.11-.55V6zm10.5 4h-6.75c-.62 0-1.15.38-1.38.91l-2.26 5.29c-.07.17-.11.36-.11.55V18c0 .55.45 1 1 1h5.18l-.66 3.18-.02.24c0 .31.13.59.33.8l.79.78 4.94-4.94c.27-.27.44-.65.44-1.06v-6.5c0-.83-.67-1.5-1.5-1.5z',
            },
          },
        ],
      })(t);
    };
    Ar.displayName = 'MdThumbsUpDown';
    var br = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z',
            },
          },
        ],
      })(t);
    };
    br.displayName = 'MdTimeline';
    var Pr = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z',
            },
          },
        ],
      })(t);
    };
    Pr.displayName = 'MdToc';
    var Fr = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z',
            },
          },
        ],
      })(t);
    };
    Fr.displayName = 'MdToday';
    var kr = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM3 12c0-2.61 1.67-4.83 4-5.65V4.26C3.55 5.15 1 8.27 1 12s2.55 6.85 6 7.74v-2.09c-2.33-.82-4-3.04-4-5.65z',
            },
          },
        ],
      })(t);
    };
    kr.displayName = 'MdToll';
    var Or = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z',
            },
          },
        ],
      })(t);
    };
    Or.displayName = 'MdTouchApp';
    var Tr = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19.07 4.93l-1.41 1.41C19.1 7.79 20 9.79 20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V2h-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-2.76-1.12-5.26-2.93-7.07z',
            },
          },
        ],
      })(t);
    };
    Tr.displayName = 'MdTrackChanges';
    var Rr = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z',
            },
          },
        ],
      })(t);
    };
    Rr.displayName = 'MdTranslate';
    var Dr = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z',
            },
          },
        ],
      })(t);
    };
    Dr.displayName = 'MdTrendingDown';
    var Ir = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [{ tag: 'path', attr: { d: 'M22 12l-4-4v3H3v2h15v3z' } }],
      })(t);
    };
    Ir.displayName = 'MdTrendingFlat';
    var Er = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z',
            },
          },
        ],
      })(t);
    };
    Er.displayName = 'MdTrendingUp';
    var Wr = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d: 'M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z',
            },
          },
        ],
      })(t);
    };
    Wr.displayName = 'MdTurnedIn';
    var Ur = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z',
            },
          },
        ],
      })(t);
    };
    Ur.displayName = 'MdTurnedInNot';
    var Gr = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z',
            },
          },
        ],
      })(t);
    };
    Gr.displayName = 'MdUpdate';
    var jr = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z',
            },
          },
        ],
      })(t);
    };
    jr.displayName = 'MdVerifiedUser';
    var _r = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 13H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm0-10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z',
            },
          },
        ],
      })(t);
    };
    _r.displayName = 'MdViewAgenda';
    var Kr = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: { d: 'M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z' },
          },
        ],
      })(t);
    };
    Kr.displayName = 'MdViewArray';
    var Qr = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: { d: 'M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z' },
          },
        ],
      })(t);
    };
    Qr.displayName = 'MdViewCarousel';
    var qr = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: { d: 'M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z' },
          },
        ],
      })(t);
    };
    qr.displayName = 'MdViewColumn';
    var Zr = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M2 21h19v-3H2v3zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 3v3h19V3H2z',
            },
          },
        ],
      })(t);
    };
    Zr.displayName = 'MdViewDay';
    var Jr = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d: 'M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z',
            },
          },
        ],
      })(t);
    };
    Jr.displayName = 'MdViewHeadline';
    var $r = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z',
            },
          },
        ],
      })(t);
    };
    $r.displayName = 'MdViewList';
    var Yr = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z',
            },
          },
        ],
      })(t);
    };
    Yr.displayName = 'MdViewModule';
    var Xr = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z',
            },
          },
        ],
      })(t);
    };
    Xr.displayName = 'MdViewQuilt';
    var tn = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [{ tag: 'path', attr: { d: 'M4 18h17v-6H4v6zM4 5v6h17V5H4z' } }],
      })(t);
    };
    tn.displayName = 'MdViewStream';
    var an = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z',
            },
          },
        ],
      })(t);
    };
    an.displayName = 'MdViewWeek';
    var rn = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z',
            },
          },
        ],
      })(t);
    };
    rn.displayName = 'MdVisibility';
    var nn = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z',
            },
          },
        ],
      })(t);
    };
    nn.displayName = 'MdVisibilityOff';
    var cn = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z',
            },
          },
        ],
      })(t);
    };
    cn.displayName = 'MdWatchLater';
    var en = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z',
            },
          },
        ],
      })(t);
    };
    en.displayName = 'MdWork';
    var vn = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M17.01 14h-.8l-.27-.27c.98-1.14 1.57-2.61 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 3-6.5 6.5H2l3.84 4 4.16-4H6.51C6.51 7 8.53 5 11.01 5s4.5 2.01 4.5 4.5c0 2.48-2.02 4.5-4.5 4.5-.65 0-1.26-.14-1.82-.38L7.71 15.1c.97.57 2.09.9 3.3.9 1.61 0 3.08-.59 4.22-1.57l.27.27v.79l5.01 4.99L22 19l-4.99-5z',
            },
          },
        ],
      })(t);
    };
    vn.displayName = 'MdYoutubeSearchedFor';
    var dn = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm2.5-4h-2v2H9v-2H7V9h2V7h1v2h2v1z',
            },
          },
        ],
      })(t);
    };
    dn.displayName = 'MdZoomIn';
    var hn = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z',
            },
          },
        ],
      })(t);
    };
    hn.displayName = 'MdZoomOut';
    var on = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zm8.87-4.19V11c0-3.25-2.25-5.97-5.29-6.69v-.72C13.59 2.71 12.88 2 12 2s-1.59.71-1.59 1.59v.72C7.37 5.03 5.12 7.75 5.12 11v5.82L3 18.94V20h18v-1.06l-2.12-2.12zM16 13.01h-3v3h-2v-3H8V11h3V8h2v3h3v2.01z',
            },
          },
        ],
      })(t);
    };
    on.displayName = 'MdAddAlert';
    var ln = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z',
            },
          },
        ],
      })(t);
    };
    ln.displayName = 'MdError';
    var un = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
            },
          },
        ],
      })(t);
    };
    un.displayName = 'MdErrorOutline';
    var sn = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: { d: 'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z' },
          },
        ],
      })(t);
    };
    sn.displayName = 'MdWarning';
    var Mn = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-7v2h-3v3h-2v-3H8v-2h3V7h2v3h3z',
            },
          },
        ],
      })(t);
    };
    Mn.displayName = 'MdAddToQueue';
    var gn = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M6 22h12l-6-6zM21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V5h18v12h-4v2h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z',
            },
          },
        ],
      })(t);
    };
    gn.displayName = 'MdAirplay';
    var zn = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-5.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z',
            },
          },
        ],
      })(t);
    };
    zn.displayName = 'MdAlbum';
    var mn = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M22 13h-8v-2h8v2zm0-6h-8v2h8V7zm-8 10h8v-2h-8v2zm-2-8v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2zm-1.5 6l-2.25-3-1.75 2.26-1.25-1.51L3.5 15h7z',
            },
          },
        ],
      })(t);
    };
    mn.displayName = 'MdArtTrack';
    var pn = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M11 17c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm0-14v4h2V5.08c3.39.49 6 3.39 6 6.92 0 3.87-3.13 7-7 7s-7-3.13-7-7c0-1.68.59-3.22 1.58-4.42L12 13l1.41-1.41-6.8-6.8v.02C4.42 6.45 3 9.05 3 12c0 4.97 4.02 9 9 9 4.97 0 9-4.03 9-9s-4.03-9-9-9h-1zm7 9c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zM6 12c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1z',
            },
          },
        ],
      })(t);
    };
    pn.displayName = 'MdAvTimer';
    var fn = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16h-9v-6h9v6z',
            },
          },
        ],
      })(t);
    };
    fn.displayName = 'MdBrandingWatermark';
    var Hn = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3v-3h18v3z',
            },
          },
        ],
      })(t);
    };
    Hn.displayName = 'MdCallToAction';
    var Vn = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 7H9.5v-.5h-2v3h2V13H11v1c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1zm7 0h-1.5v-.5h-2v3h2V13H18v1c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1z',
            },
          },
        ],
      })(t);
    };
    Vn.displayName = 'MdClosedCaption';
    var yn = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: { d: 'M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z' },
          },
        ],
      })(t);
    };
    yn.displayName = 'MdEqualizer';
    var Ln = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h4v2h-4v2h4v2H9V7h6v2z',
            },
          },
        ],
      })(t);
    };
    Ln.displayName = 'MdExplicit';
    var Bn = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: { d: 'M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z' },
          },
        ],
      })(t);
    };
    Bn.displayName = 'MdFastForward';
    var wn = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: { d: 'M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z' },
          },
        ],
      })(t);
    };
    wn.displayName = 'MdFastRewind';
    var xn = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 8H3V9h9v2zm0-4H3V5h9v2z',
            },
          },
        ],
      })(t);
    };
    xn.displayName = 'MdFeaturedPlayList';
    var Nn = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 9H3V5h9v7z',
            },
          },
        ],
      })(t);
    };
    Nn.displayName = 'MdFeaturedVideo';
    var Cn = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M17.5 10.5h2v1h-2zm-13 0h2v3h-2zM21 3H3c-1.11 0-2 .89-2 2v14c0 1.1.89 2 2 2h18c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zM8 13.5c0 .85-.65 1.5-1.5 1.5H3V9h3.5c.85 0 1.5.65 1.5 1.5v3zm4.62 1.5h-1.5L9.37 9h1.5l1 3.43 1-3.43h1.5l-1.75 6zM21 11.5c0 .6-.4 1.15-.9 1.4L21 15h-1.5l-.85-2H17.5v2H16V9h3.5c.85 0 1.5.65 1.5 1.5v1z',
            },
          },
        ],
      })(t);
    };
    Cn.displayName = 'MdFiberDvr';
    var Sn = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [{ tag: 'circle', attr: { cx: '12', cy: '12', r: '8' } }],
      })(t);
    };
    Sn.displayName = 'MdFiberManualRecord';
    var An = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zM8.5 15H7.3l-2.55-3.5V15H3.5V9h1.25l2.5 3.5V9H8.5v6zm5-4.74H11v1.12h2.5v1.26H11v1.11h2.5V15h-4V9h4v1.26zm7 3.74c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1V9h1.25v4.51h1.13V9.99h1.25v3.51h1.12V9h1.25v5z',
            },
          },
        ],
      })(t);
    };
    An.displayName = 'MdFiberNew';
    var bn = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M5.5 10.5h2v1h-2zM20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zM9 11.5c0 .85-.65 1.5-1.5 1.5h-2v2H4V9h3.5c.85 0 1.5.65 1.5 1.5v1zm3.5 3.5H11V9h1.5v6zm7.5 0h-1.2l-2.55-3.5V15H15V9h1.25l2.5 3.5V9H20v6z',
            },
          },
        ],
      })(t);
    };
    bn.displayName = 'MdFiberPin';
    var Pn = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'g',
            attr: {},
            child: [
              { tag: 'circle', attr: { cx: '9', cy: '12', r: '8' } },
              {
                tag: 'path',
                attr: {
                  d:
                    'M17 4.26v2.09c2.33.82 4 3.04 4 5.65s-1.67 4.83-4 5.65v2.09c3.45-.89 6-4.01 6-7.74s-2.55-6.85-6-7.74z',
                },
              },
            ],
          },
        ],
      })(t);
    };
    Pn.displayName = 'MdFiberSmartRecord';
    var Fn = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M4 13c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6v4l5-5-5-5v4c-4.4 0-8 3.6-8 8zm6.8 3H10v-3.3L9 13v-.7l1.8-.6h.1V16zm4.3-1.8c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1.3.2.5.3.2.3.3.6.1.5.1.8v.7zm-.8-.8v-.5s-.1-.2-.1-.3-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5z',
            },
          },
        ],
      })(t);
    };
    Fn.displayName = 'MdForward10';
    var kn = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M9.6 13.5h.4c.2 0 .4-.1.5-.2s.2-.2.2-.4v-.2s-.1-.1-.1-.2-.1-.1-.2-.1h-.5s-.1.1-.2.1-.1.1-.1.2v.2h-1c0-.2 0-.3.1-.5s.2-.3.3-.4.3-.2.4-.2.4-.1.5-.1c.2 0 .4 0 .6.1s.3.1.5.2.2.2.3.4.1.3.1.5v.3s-.1.2-.1.3-.1.2-.2.2-.2.1-.3.2c.2.1.4.2.5.4s.2.4.2.6c0 .2 0 .4-.1.5s-.2.3-.3.4-.3.2-.5.2-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.4-.1-.6h.8v.2s.1.1.1.2.1.1.2.1h.5s.1-.1.2-.1.1-.1.1-.2v-.5s-.1-.1-.1-.2-.1-.1-.2-.1h-.6v-.7zm5.7.7c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1.3.2.5.3.2.3.3.6.1.5.1.8v.7zm-.9-.8v-.5s-.1-.2-.1-.3-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5zM4 13c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6v4l5-5-5-5v4c-4.4 0-8 3.6-8 8z',
            },
          },
        ],
      })(t);
    };
    kn.displayName = 'MdForward30';
    var On = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M4 13c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6v4l5-5-5-5v4c-4.4 0-8 3.6-8 8zm6.7.9l.2-2.2h2.4v.7h-1.7l-.1.9s.1 0 .1-.1.1 0 .1-.1.1 0 .2 0h.2c.2 0 .4 0 .5.1s.3.2.4.3.2.3.3.5.1.4.1.6c0 .2 0 .4-.1.5s-.1.3-.3.5-.3.2-.5.3-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.3-.1-.5h.8c0 .2.1.3.2.4s.2.1.4.1c.1 0 .2 0 .3-.1l.2-.2s.1-.2.1-.3v-.6l-.1-.2-.2-.2s-.2-.1-.3-.1h-.2s-.1 0-.2.1-.1 0-.1.1-.1.1-.1.1h-.6z',
            },
          },
        ],
      })(t);
    };
    On.displayName = 'MdForward5';
    var Tn = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z',
            },
          },
        ],
      })(t);
    };
    Tn.displayName = 'MdGames';
    var Rn = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 12H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11v6zm2-6h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1h-4V9zm1.5 4.5h2v-3h-2v3z',
            },
          },
        ],
      })(t);
    };
    Rn.displayName = 'MdHd';
    var Dn = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M17 20c-.29 0-.56-.06-.76-.15-.71-.37-1.21-.88-1.71-2.38-.51-1.56-1.47-2.29-2.39-3-.79-.61-1.61-1.24-2.32-2.53C9.29 10.98 9 9.93 9 9c0-2.8 2.2-5 5-5s5 2.2 5 5h2c0-3.93-3.07-7-7-7S7 5.07 7 9c0 1.26.38 2.65 1.07 3.9.91 1.65 1.98 2.48 2.85 3.15.81.62 1.39 1.07 1.71 2.05.6 1.82 1.37 2.84 2.73 3.55.51.23 1.07.35 1.64.35 2.21 0 4-1.79 4-4h-2c0 1.1-.9 2-2 2zM7.64 2.64L6.22 1.22C4.23 3.21 3 5.96 3 9s1.23 5.79 3.22 7.78l1.41-1.41C6.01 13.74 5 11.49 5 9s1.01-4.74 2.64-6.36zM11.5 9c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5-2.5 1.12-2.5 2.5z',
            },
          },
        ],
      })(t);
    };
    Dn.displayName = 'MdHearing';
    var In = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 11H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11v6zm7-1c0 .55-.45 1-1 1h-.75v1.5h-1.5V15H14c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v4zm-3.5-.5h2v-3h-2v3z',
            },
          },
        ],
      })(t);
    };
    In.displayName = 'MdHighQuality';
    var En = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z',
            },
          },
        ],
      })(t);
    };
    En.displayName = 'MdLibraryAdd';
    var Wn = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z',
            },
          },
        ],
      })(t);
    };
    Wn.displayName = 'MdLibraryBooks';
    var Un = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 5h-3v5.5c0 1.38-1.12 2.5-2.5 2.5S10 13.88 10 12.5s1.12-2.5 2.5-2.5c.57 0 1.08.19 1.5.51V5h4v2zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z',
            },
          },
        ],
      })(t);
    };
    Un.displayName = 'MdLibraryMusic';
    var Gn = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z',
            },
          },
        ],
      })(t);
    };
    Gn.displayName = 'MdLoop';
    var jn = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z',
            },
          },
        ],
      })(t);
    };
    jn.displayName = 'MdMic';
    var _n = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1.2-9.1c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2l-.01 6.2c0 .66-.53 1.2-1.19 1.2-.66 0-1.2-.54-1.2-1.2V4.9zm6.5 6.1c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z',
            },
          },
        ],
      })(t);
    };
    _n.displayName = 'MdMicNone';
    var Kn = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z',
            },
          },
        ],
      })(t);
    };
    Kn.displayName = 'MdMicOff';
    var Qn = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z',
            },
          },
        ],
      })(t);
    };
    Qn.displayName = 'MdMovie';
    var qn = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM8 15c0-1.66 1.34-3 3-3 .35 0 .69.07 1 .18V6h5v2h-3v7.03c-.02 1.64-1.35 2.97-3 2.97-1.66 0-3-1.34-3-3z',
            },
          },
        ],
      })(t);
    };
    qn.displayName = 'MdMusicVideo';
    var Zn = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z',
            },
          },
        ],
      })(t);
    };
    Zn.displayName = 'MdNewReleases';
    var Jn = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z',
            },
          },
        ],
      })(t);
    };
    Jn.displayName = 'MdNotInterested';
    var $n = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M22 10l-6-6H4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99l16-.01c1.1 0 2-.89 2-1.99v-8zm-7-4.5l5.5 5.5H15V5.5z',
            },
          },
        ],
      })(t);
    };
    $n.displayName = 'MdNote';
    var Yn = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          { tag: 'path', attr: { d: 'M6 19h4V5H6v14zm8-14v14h4V5h-4z' } },
        ],
      })(t);
    };
    Yn.displayName = 'MdPause';
    var Xn = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z',
            },
          },
        ],
      })(t);
    };
    Xn.displayName = 'MdPauseCircleFilled';
    var tc = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M9 16h2V8H9v8zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-4h2V8h-2v8z',
            },
          },
        ],
      })(t);
    };
    tc.displayName = 'MdPauseCircleOutline';
    var ac = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [{ tag: 'path', attr: { d: 'M8 5v14l11-7z' } }],
      })(t);
    };
    ac.displayName = 'MdPlayArrow';
    var rc = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z',
            },
          },
        ],
      })(t);
    };
    rc.displayName = 'MdPlayCircleFilled';
    var nc = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z',
            },
          },
        ],
      })(t);
    };
    nc.displayName = 'MdPlayCircleOutline';
    var cc = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z',
            },
          },
        ],
      })(t);
    };
    cc.displayName = 'MdPlaylistAdd';
    var ec = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M14 10H2v2h12v-2zm0-4H2v2h12V6zM2 16h8v-2H2v2zm19.5-4.5L23 13l-6.99 7-4.51-4.5L13 14l3.01 3 5.49-5.5z',
            },
          },
        ],
      })(t);
    };
    ec.displayName = 'MdPlaylistAddCheck';
    var vc = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 9H2v2h17V9zm0-4H2v2h17V5zM2 15h13v-2H2v2zm15-2v6l5-3-5-3z',
            },
          },
        ],
      })(t);
    };
    vc.displayName = 'MdPlaylistPlay';
    var ic = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z',
            },
          },
        ],
      })(t);
    };
    ic.displayName = 'MdQueue';
    var dc = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z',
            },
          },
        ],
      })(t);
    };
    dc.displayName = 'MdQueueMusic';
    var hc = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h2v-2H3V5h18v8h2V5c0-1.11-.9-2-2-2zm-8 7V7h-2v3H8v2h3v3h2v-3h3v-2h-3zm11 8l-4.5 4.5L18 21l3-3-3-3 1.5-1.5L24 18z',
            },
          },
        ],
      })(t);
    };
    hc.displayName = 'MdQueuePlayNext';
    var oc = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M3.24 6.15C2.51 6.43 2 7.17 2 8v12c0 1.1.89 2 2 2h16c1.11 0 2-.9 2-2V8c0-1.11-.89-2-2-2H8.3l8.26-3.34L15.88 1 3.24 6.15zM7 20c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm13-8h-2v-2h-2v2H4V8h16v4z',
            },
          },
        ],
      })(t);
    };
    oc.displayName = 'MdRadio';
    var lc = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 5v14h2V5h-2zm-4 14h2V5h-2v14zM14 5H2c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM8 7.75c1.24 0 2.25 1.01 2.25 2.25S9.24 12.25 8 12.25 5.75 11.24 5.75 10 6.76 7.75 8 7.75zM12.5 17h-9v-.75c0-1.5 3-2.25 4.5-2.25s4.5.75 4.5 2.25V17z',
            },
          },
        ],
      })(t);
    };
    lc.displayName = 'MdRecentActors';
    var uc = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-7v2H8v-2h8z',
            },
          },
        ],
      })(t);
    };
    uc.displayName = 'MdRemoveFromQueue';
    var sc = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z',
            },
          },
        ],
      })(t);
    };
    sc.displayName = 'MdRepeat';
    var Mc = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4zm-4-2V9h-1l-2 1v1h1.5v4H13z',
            },
          },
        ],
      })(t);
    };
    Mc.displayName = 'MdRepeatOne';
    var gc = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 5V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8zm-1.1 11H10v-3.3L9 13v-.7l1.8-.6h.1V16zm4.3-1.8c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1c.2.1.3.2.5.3s.2.3.3.6.1.5.1.8v.7zm-.9-.8v-.5s-.1-.2-.1-.3-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5z',
            },
          },
        ],
      })(t);
    };
    gc.displayName = 'MdReplay10';
    var zc = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z',
            },
          },
        ],
      })(t);
    };
    zc.displayName = 'MdReplay';
    var mc = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 5V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8zm-2.4 8.5h.4c.2 0 .4-.1.5-.2s.2-.2.2-.4v-.2s-.1-.1-.1-.2-.1-.1-.2-.1h-.5s-.1.1-.2.1-.1.1-.1.2v.2h-1c0-.2 0-.3.1-.5s.2-.3.3-.4.3-.2.4-.2.4-.1.5-.1c.2 0 .4 0 .6.1s.3.1.5.2.2.2.3.4.1.3.1.5v.3s-.1.2-.1.3-.1.2-.2.2-.2.1-.3.2c.2.1.4.2.5.4s.2.4.2.6c0 .2 0 .4-.1.5s-.2.3-.3.4-.3.2-.5.2-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.4-.1-.6h.8v.2s.1.1.1.2.1.1.2.1h.5s.1-.1.2-.1.1-.1.1-.2v-.5s-.1-.1-.1-.2-.1-.1-.2-.1h-.6v-.7zm5.7.7c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1.3.2.5.3.2.3.3.6.1.5.1.8v.7zm-.8-.8v-.5c0-.1-.1-.2-.1-.3s-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5z',
            },
          },
        ],
      })(t);
    };
    mc.displayName = 'MdReplay30';
    var pc = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 5V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8zm-1.3 8.9l.2-2.2h2.4v.7h-1.7l-.1.9s.1 0 .1-.1.1 0 .1-.1.1 0 .2 0h.2c.2 0 .4 0 .5.1s.3.2.4.3.2.3.3.5.1.4.1.6c0 .2 0 .4-.1.5s-.1.3-.3.5-.3.2-.4.3-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.3-.1-.5h.8c0 .2.1.3.2.4s.2.1.4.1c.1 0 .2 0 .3-.1l.2-.2s.1-.2.1-.3v-.6l-.1-.2-.2-.2s-.2-.1-.3-.1h-.2s-.1 0-.2.1-.1 0-.1.1-.1.1-.1.1h-.7z',
            },
          },
        ],
      })(t);
    };
    pc.displayName = 'MdReplay5';
    var fc = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z',
            },
          },
        ],
      })(t);
    };
    fc.displayName = 'MdShuffle';
    var Hc = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          { tag: 'path', attr: { d: 'M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z' } },
        ],
      })(t);
    };
    Hc.displayName = 'MdSkipNext';
    var Vc = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [{ tag: 'path', attr: { d: 'M6 6h2v12H6zm3.5 6l8.5 6V6z' } }],
      })(t);
    };
    Vc.displayName = 'MdSkipPrevious';
    var yc = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M13.05 9.79L10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zM11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69c1.11-.86 2.44-1.44 3.9-1.62zM5.69 7.1L4.26 5.68C3.05 7.16 2.25 8.99 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9zM4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43c-.86-1.1-1.44-2.43-1.62-3.89zm1.61 6.74C7.16 20.95 9 21.75 11 21.95v-2.02c-1.46-.18-2.79-.76-3.9-1.62l-1.42 1.43zM22 12c0 5.16-3.92 9.42-8.95 9.95v-2.02C16.97 19.41 20 16.05 20 12s-3.03-7.41-6.95-7.93V2.05C18.08 2.58 22 6.84 22 12z',
            },
          },
        ],
      })(t);
    };
    yc.displayName = 'MdSlowMotionVideo';
    var Lc = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-3-9h3.63L9 15.2V17h6v-2h-3.63L15 10.8V9H9v2z',
            },
          },
        ],
      })(t);
    };
    Lc.displayName = 'MdSnooze';
    var Bc = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M14.94 4.66h-4.72l2.36-2.36zm-4.69 14.71h4.66l-2.33 2.33zM6.1 6.27L1.6 17.73h1.84l.92-2.45h5.11l.92 2.45h1.84L7.74 6.27H6.1zm-1.13 7.37l1.94-5.18 1.94 5.18H4.97zm10.76 2.5h6.12v1.59h-8.53v-1.29l5.92-8.56h-5.88v-1.6h8.3v1.26l-5.93 8.6z',
            },
          },
        ],
      })(t);
    };
    Bc.displayName = 'MdSortByAlpha';
    var wc = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [{ tag: 'path', attr: { d: 'M6 6h12v12H6z' } }],
      })(t);
    };
    wc.displayName = 'MdStop';
    var xc = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 8H4V6h16v2zm-2-6H6v2h12V2zm4 10v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-6 4l-6-3.27v6.53L16 16z',
            },
          },
        ],
      })(t);
    };
    xc.displayName = 'MdSubscriptions';
    var Nc = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 12h4v2H4v-2zm10 6H4v-2h10v2zm6 0h-4v-2h4v2zm0-4H10v-2h10v2z',
            },
          },
        ],
      })(t);
    };
    Nc.displayName = 'MdSubtitles';
    var Cc = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7.76 16.24l-1.41 1.41C4.78 16.1 4 14.05 4 12c0-2.05.78-4.1 2.34-5.66l1.41 1.41C6.59 8.93 6 10.46 6 12s.59 3.07 1.76 4.24zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm5.66 1.66l-1.41-1.41C17.41 15.07 18 13.54 18 12s-.59-3.07-1.76-4.24l1.41-1.41C19.22 7.9 20 9.95 20 12c0 2.05-.78 4.1-2.34 5.66zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
            },
          },
        ],
      })(t);
    };
    Cc.displayName = 'MdSurroundSound';
    var Sc = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z',
            },
          },
        ],
      })(t);
    };
    Sc.displayName = 'MdVideoCall';
    var Ac = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H3V5h18v11z',
            },
          },
        ],
      })(t);
    };
    Ac.displayName = 'MdVideoLabel';
    var bc = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z',
            },
          },
        ],
      })(t);
    };
    bc.displayName = 'MdVideoLibrary';
    var Pc = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z',
            },
          },
        ],
      })(t);
    };
    Pc.displayName = 'MdVideocam';
    var Fc = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 6.5l-4 4V7c0-.55-.45-1-1-1H9.82L21 17.18V6.5zM3.27 2L2 3.27 4.73 6H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.21 0 .39-.08.54-.18L19.73 21 21 19.73 3.27 2z',
            },
          },
        ],
      })(t);
    };
    Fc.displayName = 'MdVideocamOff';
    var kc = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z',
            },
          },
        ],
      })(t);
    };
    kc.displayName = 'MdVolumeDown';
    var Oc = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [{ tag: 'path', attr: { d: 'M7 9v6h4l5 5V4l-5 5H7z' } }],
      })(t);
    };
    Oc.displayName = 'MdVolumeMute';
    var Tc = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z',
            },
          },
        ],
      })(t);
    };
    Tc.displayName = 'MdVolumeOff';
    var Rc = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z',
            },
          },
        ],
      })(t);
    };
    Rc.displayName = 'MdVolumeUp';
    var Dc = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z',
            },
          },
        ],
      })(t);
    };
    Dc.displayName = 'MdWeb';
    var Ic = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm0 14H5V8h14v10z',
            },
          },
        ],
      })(t);
    };
    Ic.displayName = 'MdWebAsset';
    var Ec = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z',
            },
          },
        ],
      })(t);
    };
    Ec.displayName = 'MdBusiness';
    var Wc = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z',
            },
          },
        ],
      })(t);
    };
    Wc.displayName = 'MdCall';
    var Uc = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08c-.18-.17-.29-.42-.29-.7 0-.28.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.11-.7-.28-.79-.74-1.69-1.36-2.67-1.85-.33-.16-.56-.5-.56-.9v-3.1C15.15 9.25 13.6 9 12 9z',
            },
          },
        ],
      })(t);
    };
    Uc.displayName = 'MdCallEnd';
    var Gc = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: { d: 'M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z' },
          },
        ],
      })(t);
    };
    Gc.displayName = 'MdCallMade';
    var jc = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M17 20.41L18.41 19 15 15.59 13.59 17 17 20.41zM7.5 8H11v5.59L5.59 19 7 20.41l6-6V8h3.5L12 3.5 7.5 8z',
            },
          },
        ],
      })(t);
    };
    jc.displayName = 'MdCallMerge';
    var _c = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: { d: 'M19.59 7L12 14.59 6.41 9H11V7H3v8h2v-4.59l7 7 9-9z' },
          },
        ],
      })(t);
    };
    _c.displayName = 'MdCallMissed';
    var Kc = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d: 'M3 8.41l9 9 7-7V15h2V7h-8v2h4.59L12 14.59 4.41 7 3 8.41z',
            },
          },
        ],
      })(t);
    };
    Kc.displayName = 'MdCallMissedOutgoing';
    var Qc = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: { d: 'M20 5.41L18.59 4 7 15.59V9H5v10h10v-2H8.41z' },
          },
        ],
      })(t);
    };
    Qc.displayName = 'MdCallReceived';
    var qc = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M14 4l2.29 2.29-2.88 2.88 1.42 1.42 2.88-2.88L20 10V4zm-4 0H4v6l2.29-2.29 4.71 4.7V20h2v-8.41l-5.29-5.3z',
            },
          },
        ],
      })(t);
    };
    qc.displayName = 'MdCallSplit';
    var Zc = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z',
            },
          },
        ],
      })(t);
    };
    Zc.displayName = 'MdChat';
    var Jc = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z',
            },
          },
        ],
      })(t);
    };
    Jc.displayName = 'MdChatBubble';
    var $c = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z',
            },
          },
        ],
      })(t);
    };
    $c.displayName = 'MdChatBubbleOutline';
    var Yc = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: { d: 'M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z' },
          },
        ],
      })(t);
    };
    Yc.displayName = 'MdClearAll';
    var Xc = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z',
            },
          },
        ],
      })(t);
    };
    Xc.displayName = 'MdComment';
    var te = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 8V7l-3 2-3-2v1l3 2 3-2zm1-5H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm8-6h-8V6h8v6z',
            },
          },
        ],
      })(t);
    };
    te.displayName = 'MdContactMail';
    var ae = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm3.85-4h1.64L21 16l-1.99 1.99c-1.31-.98-2.28-2.38-2.73-3.99-.18-.64-.28-1.31-.28-2s.1-1.36.28-2c.45-1.62 1.42-3.01 2.73-3.99L21 8l-1.51 2h-1.64c-.22.63-.35 1.3-.35 2s.13 1.37.35 2z',
            },
          },
        ],
      })(t);
    };
    ae.displayName = 'MdContactPhone';
    var re = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 0H4v2h16V0zM4 24h16v-2H4v2zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75zM17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z',
            },
          },
        ],
      })(t);
    };
    re.displayName = 'MdContacts';
    var ne = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M17 3h-1v5h1V3zm-2 2h-2V4h2V3h-3v3h2v1h-2v1h3V5zm3-2v5h1V6h2V3h-3zm2 2h-1V4h1v1zm0 10.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.01.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.27-.26.35-.65.24-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z',
            },
          },
        ],
      })(t);
    };
    ne.displayName = 'MdDialerSip';
    var ce = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 19c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-6 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
            },
          },
        ],
      })(t);
    };
    ce.displayName = 'MdDialpad';
    var ee = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
            },
          },
        ],
      })(t);
    };
    ee.displayName = 'MdEmail';
    var ve = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z',
            },
          },
        ],
      })(t);
    };
    ve.displayName = 'MdForum';
    var ie = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z',
            },
          },
        ],
      })(t);
    };
    ie.displayName = 'MdImportContacts';
    var de = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z',
            },
          },
        ],
      })(t);
    };
    de.displayName = 'MdImportExport';
    var he = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20.65 20.87l-2.35-2.35-6.3-6.29-3.56-3.57-1.42-1.41L4.27 4.5 3 5.77l2.78 2.78c-2.55 3.14-2.36 7.76.56 10.69C7.9 20.8 9.95 21.58 12 21.58c1.79 0 3.57-.59 5.03-1.78l2.7 2.7L21 21.23l-.35-.36zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59c0-1.32.43-2.57 1.21-3.6L12 14.77v4.82zM12 5.1v4.58l7.25 7.26c1.37-2.96.84-6.57-1.6-9.01L12 2.27l-3.7 3.7 1.41 1.41L12 5.1z',
            },
          },
        ],
      })(t);
    };
    he.displayName = 'MdInvertColorsOff';
    var oe = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 16h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 11.9 13 12.5 13 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z',
            },
          },
        ],
      })(t);
    };
    oe.displayName = 'MdLiveHelp';
    var le = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 6.5c1.38 0 2.5 1.12 2.5 2.5 0 .74-.33 1.39-.83 1.85l3.63 3.63c.98-1.86 1.7-3.8 1.7-5.48 0-3.87-3.13-7-7-7-1.98 0-3.76.83-5.04 2.15l3.19 3.19c.46-.52 1.11-.84 1.85-.84zm4.37 9.6l-4.63-4.63-.11-.11L3.27 3 2 4.27l3.18 3.18C5.07 7.95 5 8.47 5 9c0 5.25 7 13 7 13s1.67-1.85 3.38-4.35L18.73 21 20 19.73l-3.63-3.63z',
            },
          },
        ],
      })(t);
    };
    le.displayName = 'MdLocationOff';
    var ue = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
            },
          },
        ],
      })(t);
    };
    ue.displayName = 'MdLocationOn';
    var se = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z',
            },
          },
        ],
      })(t);
    };
    se.displayName = 'MdMailOutline';
    var Me = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z',
            },
          },
        ],
      })(t);
    };
    Me.displayName = 'MdMessage';
    var ge = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M18.99 5c0-1.1-.89-2-1.99-2h-7L7.66 5.34 19 16.68 18.99 5zM3.65 3.88L2.38 5.15 5 7.77V19c0 1.1.9 2 2 2h10.01c.35 0 .67-.1.96-.26l1.88 1.88 1.27-1.27L3.65 3.88z',
            },
          },
        ],
      })(t);
    };
    ge.displayName = 'MdNoSim';
    var ze = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z',
            },
          },
        ],
      })(t);
    };
    ze.displayName = 'MdPhone';
    var me = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M13 8.2l-1-1-4 4-4-4-1 1 4 4-4 4 1 1 4-4 4 4 1-1-4-4 4-4zM19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z',
            },
          },
        ],
      })(t);
    };
    me.displayName = 'MdPhonelinkErase';
    var pe = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-8.2 10V9.5C10.8 8.1 9.4 7 8 7S5.2 8.1 5.2 9.5V11c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3zm-1.3 0h-3V9.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3V11z',
            },
          },
        ],
      })(t);
    };
    pe.displayName = 'MdPhonelinkLock';
    var fe = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20.1 7.7l-1 1c1.8 1.8 1.8 4.6 0 6.5l1 1c2.5-2.3 2.5-6.1 0-8.5zM18 9.8l-1 1c.5.7.5 1.6 0 2.3l1 1c1.2-1.2 1.2-3 0-4.3zM14 1H4c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 19H4V4h10v16z',
            },
          },
        ],
      })(t);
    };
    fe.displayName = 'MdPhonelinkRing';
    var He = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M11.8 12.5v-1l1.1-.8c.1-.1.1-.2.1-.3l-1-1.7c-.1-.1-.2-.2-.3-.1l-1.3.4c-.3-.2-.6-.4-.9-.5l-.2-1.3c0-.1-.1-.2-.3-.2H7c-.1 0-.2.1-.3.2l-.2 1.3c-.3.1-.6.3-.9.5l-1.3-.5c-.1 0-.2 0-.3.1l-1 1.7c-.1.1 0 .2.1.3l1.1.8v1l-1.1.8c-.1.2-.1.3-.1.4l1 1.7c.1.1.2.2.3.1l1.4-.4c.3.2.6.4.9.5l.2 1.3c-.1.1.1.2.2.2h2c.1 0 .2-.1.3-.2l.2-1.3c.3-.1.6-.3.9-.5l1.3.5c.1 0 .2 0 .3-.1l1-1.7c.1-.1 0-.2-.1-.3l-1.1-.9zM8 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z',
            },
          },
        ],
      })(t);
    };
    He.displayName = 'MdPhonelinkSetup';
    var Ve = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M17.56 14.24c.28-.69.44-1.45.44-2.24 0-3.31-2.69-6-6-6-.79 0-1.55.16-2.24.44l1.62 1.62c.2-.03.41-.06.62-.06 2.21 0 4 1.79 4 4 0 .21-.02.42-.05.63l1.61 1.61zM12 4c4.42 0 8 3.58 8 8 0 1.35-.35 2.62-.95 3.74l1.47 1.47C21.46 15.69 22 13.91 22 12c0-5.52-4.48-10-10-10-1.91 0-3.69.55-5.21 1.47l1.46 1.46C9.37 4.34 10.65 4 12 4zM3.27 2.5L2 3.77l2.1 2.1C2.79 7.57 2 9.69 2 12c0 3.7 2.01 6.92 4.99 8.65l1-1.73C5.61 17.53 4 14.96 4 12c0-1.76.57-3.38 1.53-4.69l1.43 1.44C6.36 9.68 6 10.8 6 12c0 2.22 1.21 4.15 3 5.19l1-1.74c-1.19-.7-2-1.97-2-3.45 0-.65.17-1.25.44-1.79l1.58 1.58L10 12c0 1.1.9 2 2 2l.21-.02.01.01 7.51 7.51L21 20.23 4.27 3.5l-1-1z',
            },
          },
        ],
      })(t);
    };
    Ve.displayName = 'MdPortableWifiOff';
    var ye = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 3H3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h18c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 16.02H3V4.98h18v14.04zM10 12H8l4-4 4 4h-2v4h-4v-4z',
            },
          },
        ],
      })(t);
    };
    ye.displayName = 'MdPresentToAll';
    var Le = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M23.71 16.67C20.66 13.78 16.54 12 12 12 7.46 12 3.34 13.78.29 16.67c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l2.48 2.48c.18.18.43.29.71.29.27 0 .52-.11.7-.28.79-.74 1.69-1.36 2.66-1.85.33-.16.56-.5.56-.9v-3.1c1.45-.48 3-.73 4.6-.73s3.15.25 4.6.72v3.1c0 .39.23.74.56.9.98.49 1.87 1.12 2.66 1.85.18.18.43.28.7.28.28 0 .53-.11.71-.29l2.48-2.48c.18-.18.29-.43.29-.71 0-.27-.11-.52-.29-.7zM21.16 6.26l-1.41-1.41-3.56 3.55 1.41 1.41s3.45-3.52 3.56-3.55zM13 2h-2v5h2V2zM6.4 9.81L7.81 8.4 4.26 4.84 2.84 6.26c.11.03 3.56 3.55 3.56 3.55z',
            },
          },
        ],
      })(t);
    };
    Le.displayName = 'MdRingVolume';
    var Be = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          { tag: 'circle', attr: { cx: '6.18', cy: '17.82', r: '2.18' } },
          {
            tag: 'path',
            attr: {
              d:
                'M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z',
            },
          },
        ],
      })(t);
    };
    Be.displayName = 'MdRssFeed';
    var we = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.11-.9-2-2-2H4c-1.11 0-2 .89-2 2v10c0 1.1.89 2 2 2H0v2h24v-2h-4zm-7-3.53v-2.19c-2.78 0-4.61.85-6 2.72.56-2.67 2.11-5.33 6-5.87V7l4 3.73-4 3.74z',
            },
          },
        ],
      })(t);
    };
    we.displayName = 'MdScreenShare';
    var xe = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M7 7.07L8.43 8.5c.91-.91 2.18-1.48 3.57-1.48s2.66.57 3.57 1.48L17 7.07C15.72 5.79 13.95 5 12 5s-3.72.79-5 2.07zM12 1C8.98 1 6.24 2.23 4.25 4.21l1.41 1.41C7.28 4 9.53 3 12 3s4.72 1 6.34 2.62l1.41-1.41C17.76 2.23 15.02 1 12 1zm2.86 9.01L9.14 10C8.51 10 8 10.51 8 11.14v9.71c0 .63.51 1.14 1.14 1.14h5.71c.63 0 1.14-.51 1.14-1.14v-9.71c.01-.63-.5-1.13-1.13-1.13zM15 20H9v-8h6v8z',
            },
          },
        ],
      })(t);
    };
    xe.displayName = 'MdSpeakerPhone';
    var Ne = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M1.01 7L1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2zM19 7v10H5V7h14z',
            },
          },
        ],
      })(t);
    };
    Ne.displayName = 'MdStayCurrentLandscape';
    var Ce = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M17 1.01L7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z',
            },
          },
        ],
      })(t);
    };
    Ce.displayName = 'MdStayCurrentPortrait';
    var Se = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M1.01 7L1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2zM19 7v10H5V7h14z',
            },
          },
        ],
      })(t);
    };
    Se.displayName = 'MdStayPrimaryLandscape';
    var Ae = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M17 1.01L7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z',
            },
          },
        ],
      })(t);
    };
    Ae.displayName = 'MdStayPrimaryPortrait';
    var be = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21.22 18.02l2 2H24v-2h-2.78zm.77-2l.01-10c0-1.11-.9-2-2-2H7.22l5.23 5.23c.18-.04.36-.07.55-.1V7.02l4 3.73-1.58 1.47 5.54 5.54c.61-.33 1.03-.99 1.03-1.74zM2.39 1.73L1.11 3l1.54 1.54c-.4.36-.65.89-.65 1.48v10c0 1.1.89 2 2 2H0v2h18.13l2.71 2.71 1.27-1.27L2.39 1.73zM7 15.02c.31-1.48.92-2.95 2.07-4.06l1.59 1.59c-1.54.38-2.7 1.18-3.66 2.47z',
            },
          },
        ],
      })(t);
    };
    be.displayName = 'MdStopScreenShare';
    var Pe = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M18 4l-4 4h3v7c0 1.1-.9 2-2 2s-2-.9-2-2V8c0-2.21-1.79-4-4-4S5 5.79 5 8v7H2l4 4 4-4H7V8c0-1.1.9-2 2-2s2 .9 2 2v7c0 2.21 1.79 4 4 4s4-1.79 4-4V8h3l-4-4z',
            },
          },
        ],
      })(t);
    };
    Pe.displayName = 'MdSwapCalls';
    var Fe = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z',
            },
          },
        ],
      })(t);
    };
    Fe.displayName = 'MdTextsms';
    var ke = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M18.5 6C15.46 6 13 8.46 13 11.5c0 1.33.47 2.55 1.26 3.5H9.74c.79-.95 1.26-2.17 1.26-3.5C11 8.46 8.54 6 5.5 6S0 8.46 0 11.5 2.46 17 5.5 17h13c3.04 0 5.5-2.46 5.5-5.5S21.54 6 18.5 6zm-13 9C3.57 15 2 13.43 2 11.5S3.57 8 5.5 8 9 9.57 9 11.5 7.43 15 5.5 15zm13 0c-1.93 0-3.5-1.57-3.5-3.5S16.57 8 18.5 8 22 9.57 22 11.5 20.43 15 18.5 15z',
            },
          },
        ],
      })(t);
    };
    ke.displayName = 'MdVoicemail';
    var Oe = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z',
            },
          },
        ],
      })(t);
    };
    Oe.displayName = 'MdVpnKey';
    var Te = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          { tag: 'path', attr: { d: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' } },
        ],
      })(t);
    };
    Te.displayName = 'MdAdd';
    var Re = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z',
            },
          },
        ],
      })(t);
    };
    Re.displayName = 'MdAddBox';
    var De = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z',
            },
          },
        ],
      })(t);
    };
    De.displayName = 'MdAddCircle';
    var Ie = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z',
            },
          },
        ],
      })(t);
    };
    Ie.displayName = 'MdAddCircleOutline';
    var Ee = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z',
            },
          },
        ],
      })(t);
    };
    Ee.displayName = 'MdArchive';
    var We = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z',
            },
          },
        ],
      })(t);
    };
    We.displayName = 'MdBackspace';
    var Ue = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z',
            },
          },
        ],
      })(t);
    };
    Ue.displayName = 'MdBlock';
    var Ge = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
            },
          },
        ],
      })(t);
    };
    Ge.displayName = 'MdClear';
    var je = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z',
            },
          },
        ],
      })(t);
    };
    je.displayName = 'MdContentCopy';
    var _e = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z',
            },
          },
        ],
      })(t);
    };
    _e.displayName = 'MdContentCut';
    var Ke = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z',
            },
          },
        ],
      })(t);
    };
    Ke.displayName = 'MdContentPaste';
    var Qe = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z',
            },
          },
        ],
      })(t);
    };
    Qe.displayName = 'MdCreate';
    var qe = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z',
            },
          },
        ],
      })(t);
    };
    qe.displayName = 'MdDeleteSweep';
    var Ze = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z',
            },
          },
        ],
      })(t);
    };
    Ze.displayName = 'MdDrafts';
    var Je = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: { d: 'M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z' },
          },
        ],
      })(t);
    };
    Je.displayName = 'MdFilterList';
    var $e = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          { tag: 'path', attr: { d: 'M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z' } },
        ],
      })(t);
    };
    $e.displayName = 'MdFlag';
    var Ye = function(t) {
      return d({
        tag: 'svg',
        attr: { baseProfile: 'tiny', viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z',
            },
          },
        ],
      })(t);
    };
    Ye.displayName = 'MdFontDownload';
    var Xe = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [{ tag: 'path', attr: { d: 'M12 8V4l8 8-8 8v-4H4V8z' } }],
      })(t);
    };
    Xe.displayName = 'MdForward';
    var tv = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22.5.2 0 1.03-.3 1.52-.25.42-2.86 3.89-2.86 6.31 0 1.28.48 2.34 1.34 2.98.75.56 1.74.73 2.64.46 1.07-.31 1.95-1.4 3.06-2.77 1.21-1.49 2.83-3.44 4.08-3.44 1.63 0 1.65 1.01 1.76 1.79-3.78.64-5.38 3.67-5.38 5.37 0 1.7 1.44 3.09 3.21 3.09 1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2-2.25 0-4.18 1.91-4.94 2.84-.58.73-2.06 2.48-2.29 2.72-.25.3-.68.84-1.11.84-.45 0-.72-.83-.36-1.92.35-1.09 1.4-2.86 1.85-3.52.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3 5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72 0-.6.73-2.2 2.87-2.76-.3 2.69-1.43 3.48-2.13 3.48z',
            },
          },
        ],
      })(t);
    };
    tv.displayName = 'MdGesture';
    var av = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z',
            },
          },
        ],
      })(t);
    };
    av.displayName = 'MdInbox';
    var rv = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z',
            },
          },
        ],
      })(t);
    };
    rv.displayName = 'MdLink';
    var nv = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z',
            },
          },
        ],
      })(t);
    };
    nv.displayName = 'MdLowPriority';
    var cv = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
            },
          },
        ],
      })(t);
    };
    cv.displayName = 'MdMail';
    var ev = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
            },
          },
        ],
      })(t);
    };
    ev.displayName = 'MdMarkunread';
    var vv = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z',
            },
          },
        ],
      })(t);
    };
    vv.displayName = 'MdMoveToInbox';
    var iv = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 7h-4V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm1 13.5l-1-1 3-3-3-3 1-1 4 4-4 4z',
            },
          },
        ],
      })(t);
    };
    iv.displayName = 'MdNextWeek';
    var dv = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z',
            },
          },
        ],
      })(t);
    };
    dv.displayName = 'MdRedo';
    var hv = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [{ tag: 'path', attr: { d: 'M19 13H5v-2h14v2z' } }],
      })(t);
    };
    hv.displayName = 'MdRemove';
    var ov = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z',
            },
          },
        ],
      })(t);
    };
    ov.displayName = 'MdRemoveCircle';
    var lv = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z',
            },
          },
        ],
      })(t);
    };
    lv.displayName = 'MdRemoveCircleOutline';
    var uv = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d: 'M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z',
            },
          },
        ],
      })(t);
    };
    uv.displayName = 'MdReply';
    var sv = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z',
            },
          },
        ],
      })(t);
    };
    sv.displayName = 'MdReplyAll';
    var Mv = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z',
            },
          },
        ],
      })(t);
    };
    Mv.displayName = 'MdReport';
    var gv = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z',
            },
          },
        ],
      })(t);
    };
    gv.displayName = 'MdSave';
    var zv = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z',
            },
          },
        ],
      })(t);
    };
    zv.displayName = 'MdSelectAll';
    var mv = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          { tag: 'path', attr: { d: 'M2.01 21L23 12 2.01 3 2 10l15 2-15 2z' } },
        ],
      })(t);
    };
    mv.displayName = 'MdSend';
    var pv = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: { d: 'M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z' },
          },
        ],
      })(t);
    };
    pv.displayName = 'MdSort';
    var fv = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z',
            },
          },
        ],
      })(t);
    };
    fv.displayName = 'MdTextFormat';
    var Hv = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20.55 5.22l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.15.55L3.46 5.22C3.17 5.57 3 6.01 3 6.5V19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.49-.17-.93-.45-1.28zM12 9.5l5.5 5.5H14v2h-4v-2H6.5L12 9.5zM5.12 5l.82-1h12l.93 1H5.12z',
            },
          },
        ],
      })(t);
    };
    Hv.displayName = 'MdUnarchive';
    var Vv = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z',
            },
          },
        ],
      })(t);
    };
    Vv.displayName = 'MdUndo';
    var yv = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 10c-1.1 0-2 .9-2 2v3H5v-3c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-3-5H6c-1.1 0-2 .9-2 2v2.15c1.16.41 2 1.51 2 2.82V14h12v-2.03c0-1.3.84-2.4 2-2.82V7c0-1.1-.9-2-2-2z',
            },
          },
        ],
      })(t);
    };
    yv.displayName = 'MdWeekend';
    var Lv = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z',
            },
          },
        ],
      })(t);
    };
    Lv.displayName = 'MdAccessAlarm';
    var Bv = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M22 5.7l-4.6-3.9-1.3 1.5 4.6 3.9L22 5.7zM7.9 3.4L6.6 1.9 2 5.7l1.3 1.5 4.6-3.8zM12.5 8H11v6l4.7 2.9.8-1.2-4-2.4V8zM12 4c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z',
            },
          },
        ],
      })(t);
    };
    Bv.displayName = 'MdAccessAlarms';
    var wv = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z',
            },
          },
        ],
      })(t);
    };
    wv.displayName = 'MdAccessTime';
    var xv = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z',
            },
          },
        ],
      })(t);
    };
    xv.displayName = 'MdAddAlarm';
    var Nv = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          { tag: 'path', attr: { d: 'M10.18 9' } },
          {
            tag: 'path',
            attr: {
              d:
                'M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z',
            },
          },
        ],
      })(t);
    };
    Nv.displayName = 'MdAirplanemodeActive';
    var Cv = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M13 9V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5v3.68l7.83 7.83L21 16v-2l-8-5zM3 5.27l4.99 4.99L2 14v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-3.73L18.73 21 20 19.73 4.27 4 3 5.27z',
            },
          },
        ],
      })(t);
    };
    Cv.displayName = 'MdAirplanemodeInactive';
    var Sv = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M7 17v3.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V17H7z',
            },
          },
          {
            tag: 'path',
            attr: {
              fillOpacity: '.3',
              d:
                'M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V17h10V5.33z',
            },
          },
        ],
      })(t);
    };
    Sv.displayName = 'MdBattery20';
    var Av = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              fillOpacity: '.3',
              d:
                'M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V15h10V5.33z',
            },
          },
          {
            tag: 'path',
            attr: {
              d:
                'M7 15v5.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V15H7z',
            },
          },
        ],
      })(t);
    };
    Av.displayName = 'MdBattery30';
    var bv = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              fillOpacity: '.3',
              d:
                'M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V13h10V5.33z',
            },
          },
          {
            tag: 'path',
            attr: {
              d:
                'M7 13v7.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V13H7z',
            },
          },
        ],
      })(t);
    };
    bv.displayName = 'MdBattery50';
    var Pv = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              fillOpacity: '.3',
              d:
                'M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V11h10V5.33z',
            },
          },
          {
            tag: 'path',
            attr: {
              d:
                'M7 11v9.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V11H7z',
            },
          },
        ],
      })(t);
    };
    Pv.displayName = 'MdBattery60';
    var Fv = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              fillOpacity: '.3',
              d:
                'M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V9h10V5.33z',
            },
          },
          {
            tag: 'path',
            attr: {
              d:
                'M7 9v11.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V9H7z',
            },
          },
        ],
      })(t);
    };
    Fv.displayName = 'MdBattery80';
    var kv = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              fillOpacity: '.3',
              d:
                'M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V8h10V5.33z',
            },
          },
          {
            tag: 'path',
            attr: {
              d:
                'M7 8v12.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V8H7z',
            },
          },
        ],
      })(t);
    };
    kv.displayName = 'MdBattery90';
    var Ov = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM13 18h-2v-2h2v2zm0-4h-2V9h2v5z',
            },
          },
        ],
      })(t);
    };
    Ov.displayName = 'MdBatteryAlert';
    var Tv = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M11 20v-3H7v3.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V17h-4.4L11 20z',
            },
          },
          {
            tag: 'path',
            attr: {
              fillOpacity: '.3',
              d:
                'M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V17h4v-2.5H9L13 7v5.5h2L12.6 17H17V5.33C17 4.6 16.4 4 15.67 4z',
            },
          },
        ],
      })(t);
    };
    Tv.displayName = 'MdBatteryCharging20';
    var Rv = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              fillOpacity: '.3',
              d:
                'M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v9.17h2L13 7v5.5h2l-1.07 2H17V5.33C17 4.6 16.4 4 15.67 4z',
            },
          },
          {
            tag: 'path',
            attr: {
              d:
                'M11 20v-5.5H7v6.17C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V14.5h-3.07L11 20z',
            },
          },
        ],
      })(t);
    };
    Rv.displayName = 'MdBatteryCharging30';
    var Dv = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M14.47 13.5L11 20v-5.5H9l.53-1H7v7.17C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V13.5h-2.53z',
            },
          },
          {
            tag: 'path',
            attr: {
              fillOpacity: '.3',
              d:
                'M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v8.17h2.53L13 7v5.5h2l-.53 1H17V5.33C17 4.6 16.4 4 15.67 4z',
            },
          },
        ],
      })(t);
    };
    Dv.displayName = 'MdBatteryCharging50';
    var Iv = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              fillOpacity: '.3',
              d:
                'M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V11h3.87L13 7v4h4V5.33C17 4.6 16.4 4 15.67 4z',
            },
          },
          {
            tag: 'path',
            attr: {
              d:
                'M13 12.5h2L11 20v-5.5H9l1.87-3.5H7v9.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V11h-4v1.5z',
            },
          },
        ],
      })(t);
    };
    Iv.displayName = 'MdBatteryCharging60';
    var Ev = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              fillOpacity: '.3',
              d:
                'M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V9h4.93L13 7v2h4V5.33C17 4.6 16.4 4 15.67 4z',
            },
          },
          {
            tag: 'path',
            attr: {
              d:
                'M13 12.5h2L11 20v-5.5H9L11.93 9H7v11.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V9h-4v3.5z',
            },
          },
        ],
      })(t);
    };
    Ev.displayName = 'MdBatteryCharging80';
    var Wv = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              fillOpacity: '.3',
              d:
                'M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V8h5.47L13 7v1h4V5.33C17 4.6 16.4 4 15.67 4z',
            },
          },
          {
            tag: 'path',
            attr: {
              d:
                'M13 12.5h2L11 20v-5.5H9L12.47 8H7v12.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V8h-4v4.5z',
            },
          },
        ],
      })(t);
    };
    Wv.displayName = 'MdBatteryCharging90';
    var Uv = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM11 20v-5.5H9L13 7v5.5h2L11 20z',
            },
          },
        ],
      })(t);
    };
    Uv.displayName = 'MdBatteryChargingFull';
    var Gv = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z',
            },
          },
        ],
      })(t);
    };
    Gv.displayName = 'MdBatteryFull';
    var jv = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z',
            },
          },
        ],
      })(t);
    };
    jv.displayName = 'MdBatteryStd';
    var _v = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zm-2.72 13.95h-1.9v-1.9h1.9v1.9zm1.35-5.26s-.38.42-.67.71c-.48.48-.83 1.15-.83 1.6h-1.6c0-.83.46-1.52.93-2l.93-.94c.27-.27.44-.65.44-1.06 0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5H9c0-1.66 1.34-3 3-3s3 1.34 3 3c0 .66-.27 1.26-.7 1.69z',
            },
          },
        ],
      })(t);
    };
    _v.displayName = 'MdBatteryUnknown';
    var Kv = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z',
            },
          },
        ],
      })(t);
    };
    Kv.displayName = 'MdBluetooth';
    var Qv = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M7 12l-2-2-2 2 2 2 2-2zm10.71-4.29L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88zM19 10l-2 2 2 2 2-2-2-2z',
            },
          },
        ],
      })(t);
    };
    Qv.displayName = 'MdBluetoothConnected';
    var qv = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M13 5.83l1.88 1.88-1.6 1.6 1.41 1.41 3.02-3.02L12 2h-1v5.03l2 2v-3.2zM5.41 4L4 5.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l4.29-4.29 2.3 2.29L20 18.59 5.41 4zM13 18.17v-3.76l1.88 1.88L13 18.17z',
            },
          },
        ],
      })(t);
    };
    qv.displayName = 'MdBluetoothDisabled';
    var Zv = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M14.24 12.01l2.32 2.32c.28-.72.44-1.51.44-2.33 0-.82-.16-1.59-.43-2.31l-2.33 2.32zm5.29-5.3l-1.26 1.26c.63 1.21.98 2.57.98 4.02s-.36 2.82-.98 4.02l1.2 1.2c.97-1.54 1.54-3.36 1.54-5.31-.01-1.89-.55-3.67-1.48-5.19zm-3.82 1L10 2H9v7.59L4.41 5 3 6.41 8.59 12 3 17.59 4.41 19 9 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM11 5.83l1.88 1.88L11 9.59V5.83zm1.88 10.46L11 18.17v-3.76l1.88 1.88z',
            },
          },
        ],
      })(t);
    };
    Zv.displayName = 'MdBluetoothSearching';
    var Jv = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M10.85 12.65h2.3L12 9l-1.15 3.65zM20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM14.3 16l-.7-2h-3.2l-.7 2H7.8L11 7h2l3.2 9h-1.9z',
            },
          },
        ],
      })(t);
    };
    Jv.displayName = 'MdBrightnessAuto';
    var $v = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z',
            },
          },
        ],
      })(t);
    };
    $v.displayName = 'MdBrightnessHigh';
    var Yv = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z',
            },
          },
        ],
      })(t);
    };
    Yv.displayName = 'MdBrightnessLow';
    var Xv = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6z',
            },
          },
        ],
      })(t);
    };
    Xv.displayName = 'MdBrightnessMedium';
    var ti = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z',
            },
          },
        ],
      })(t);
    };
    ti.displayName = 'MdDataUsage';
    var ai = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M7 5h10v2h2V3c0-1.1-.9-1.99-2-1.99L7 1c-1.1 0-2 .9-2 2v4h2V5zm8.41 11.59L20 12l-4.59-4.59L14 8.83 17.17 12 14 15.17l1.41 1.42zM10 15.17L6.83 12 10 8.83 8.59 7.41 4 12l4.59 4.59L10 15.17zM17 19H7v-2H5v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v2z',
            },
          },
        ],
      })(t);
    };
    ai.displayName = 'MdDeveloperMode';
    var ri = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z',
            },
          },
        ],
      })(t);
    };
    ri.displayName = 'MdDevices';
    var ni = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12zm-2-9H8v2h11V8zm0 4H8v2h11v-2zM7 8H5v2h2V8zm0 4H5v2h2v-2z',
            },
          },
        ],
      })(t);
    };
    ni.displayName = 'MdDvr';
    var ci = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z',
            },
          },
        ],
      })(t);
    };
    ci.displayName = 'MdGpsFixed';
    var ei = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z',
            },
          },
        ],
      })(t);
    };
    ei.displayName = 'MdGpsNotFixed';
    var vi = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06c-1.13.12-2.19.46-3.16.97l1.5 1.5C10.16 5.19 11.06 5 12 5c3.87 0 7 3.13 7 7 0 .94-.19 1.84-.52 2.65l1.5 1.5c.5-.96.84-2.02.97-3.15H23v-2h-2.06zM3 4.27l2.04 2.04C3.97 7.62 3.25 9.23 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c1.77-.2 3.38-.91 4.69-1.98L19.73 21 21 19.73 4.27 3 3 4.27zm13.27 13.27C15.09 18.45 13.61 19 12 19c-3.87 0-7-3.13-7-7 0-1.61.55-3.09 1.46-4.27l9.81 9.81z',
            },
          },
        ],
      })(t);
    };
    vi.displayName = 'MdGpsOff';
    var ii = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M7 18h2V6H7v12zm4 4h2V2h-2v20zm-8-8h2v-4H3v4zm12 4h2V6h-2v12zm4-8v4h2v-4h-2z',
            },
          },
        ],
      })(t);
    };
    ii.displayName = 'MdGraphicEq';
    var di = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06c-1.13.12-2.19.46-3.16.97l1.5 1.5C10.16 5.19 11.06 5 12 5c3.87 0 7 3.13 7 7 0 .94-.19 1.84-.52 2.65l1.5 1.5c.5-.96.84-2.02.97-3.15H23v-2h-2.06zM3 4.27l2.04 2.04C3.97 7.62 3.25 9.23 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c1.77-.2 3.38-.91 4.69-1.98L19.73 21 21 19.73 4.27 3 3 4.27zm13.27 13.27C15.09 18.45 13.61 19 12 19c-3.87 0-7-3.13-7-7 0-1.61.55-3.09 1.46-4.27l9.81 9.81z',
            },
          },
        ],
      })(t);
    };
    di.displayName = 'MdLocationDisabled';
    var hi = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z',
            },
          },
        ],
      })(t);
    };
    hi.displayName = 'MdLocationSearching';
    var oi = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          { tag: 'path', attr: { fillOpacity: '.3', d: 'M2 22h20V2z' } },
          { tag: 'path', attr: { d: 'M17 7L2 22h15z' } },
        ],
      })(t);
    };
    oi.displayName = 'MdNetworkCell';
    var li = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              fillOpacity: '.3',
              d:
                'M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z',
            },
          },
          {
            tag: 'path',
            attr: {
              d:
                'M3.53 10.95l8.46 10.54.01.01.01-.01 8.46-10.54C20.04 10.62 16.81 8 12 8c-4.81 0-8.04 2.62-8.47 2.95z',
            },
          },
        ],
      })(t);
    };
    li.displayName = 'MdNetworkWifi';
    var ui = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16zM18 6h-5c-1.1 0-2 .9-2 2v2.28c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V8h3v8H8V8h2V6H6v12h12V6z',
            },
          },
        ],
      })(t);
    };
    ui.displayName = 'MdNfc';
    var si = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 5H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-2 12H5V7h14v10zm-9-1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1v-1c0-1.11-.9-2-2-2-1.11 0-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1zm.8-6c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2v1h-2.4v-1z',
            },
          },
        ],
      })(t);
    };
    si.displayName = 'MdScreenLockLandscape';
    var Mi = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M10 16h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1v-1c0-1.11-.9-2-2-2-1.11 0-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1zm.8-6c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2v1h-2.4v-1zM17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14z',
            },
          },
        ],
      })(t);
    };
    Mi.displayName = 'MdScreenLockPortrait';
    var gi = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M23.25 12.77l-2.57-2.57-1.41 1.41 2.22 2.22-5.66 5.66L4.51 8.17l5.66-5.66 2.1 2.1 1.41-1.41L11.23.75c-.59-.59-1.54-.59-2.12 0L2.75 7.11c-.59.59-.59 1.54 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12zM8.47 20.48C5.2 18.94 2.86 15.76 2.5 12H1c.51 6.16 5.66 11 11.95 11l.66-.03-3.81-3.82-1.33 1.33zM16 9h5c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1v-.5C21 1.12 19.88 0 18.5 0S16 1.12 16 2.5V3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm.8-6.5c0-.94.76-1.7 1.7-1.7s1.7.76 1.7 1.7V3h-3.4v-.5z',
            },
          },
        ],
      })(t);
    };
    gi.displayName = 'MdScreenLockRotation';
    var zi = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M16.48 2.52c3.27 1.55 5.61 4.72 5.97 8.48h1.5C23.44 4.84 18.29 0 12 0l-.66.03 3.81 3.81 1.33-1.32zm-6.25-.77c-.59-.59-1.54-.59-2.12 0L1.75 8.11c-.59.59-.59 1.54 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12L10.23 1.75zm4.6 19.44L2.81 9.17l6.36-6.36 12.02 12.02-6.36 6.36zm-7.31.29C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32z',
            },
          },
        ],
      })(t);
    };
    zi.displayName = 'MdScreenRotation';
    var mi = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 6h-2V4h2v4zm3 0h-2V4h2v4zm3 0h-2V4h2v4z',
            },
          },
        ],
      })(t);
    };
    mi.displayName = 'MdSdStorage';
    var pi = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M9 16h6.5c1.38 0 2.5-1.12 2.5-2.5S16.88 11 15.5 11h-.05c-.24-1.69-1.69-3-3.45-3-1.4 0-2.6.83-3.16 2.02h-.16C7.17 10.18 6 11.45 6 13c0 1.66 1.34 3 3 3zM21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z',
            },
          },
        ],
      })(t);
    };
    pi.displayName = 'MdSettingsSystemDaydream';
    var fi = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [{ tag: 'path', attr: { fillOpacity: '.3', d: 'M2 22h20V2z' } }],
      })(t);
    };
    fi.displayName = 'MdSignalCellular0Bar';
    var Hi = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          { tag: 'path', attr: { fillOpacity: '.3', d: 'M2 22h20V2z' } },
          { tag: 'path', attr: { d: 'M12 12L2 22h10z' } },
        ],
      })(t);
    };
    Hi.displayName = 'MdSignalCellular1Bar';
    var Vi = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          { tag: 'path', attr: { fillOpacity: '.3', d: 'M2 22h20V2z' } },
          { tag: 'path', attr: { d: 'M14 10L2 22h12z' } },
        ],
      })(t);
    };
    Vi.displayName = 'MdSignalCellular2Bar';
    var yi = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          { tag: 'path', attr: { fillOpacity: '.3', d: 'M2 22h20V2z' } },
          { tag: 'path', attr: { d: 'M17 7L2 22h15z' } },
        ],
      })(t);
    };
    yi.displayName = 'MdSignalCellular3Bar';
    var Li = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [{ tag: 'path', attr: { d: 'M2 22h20V2z' } }],
      })(t);
    };
    Li.displayName = 'MdSignalCellular4Bar';
    var Bi = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          { tag: 'path', attr: { fillOpacity: '.3', d: 'M22 8V2L2 22h16V8z' } },
          { tag: 'path', attr: { d: 'M20 22h2v-2h-2v2zm0-12v8h2v-8h-2z' } },
        ],
      })(t);
    };
    Bi.displayName = 'MdSignalCellularConnectedNoInternet0Bar';
    var wi = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          { tag: 'path', attr: { fillOpacity: '.3', d: 'M22 8V2L2 22h16V8z' } },
          {
            tag: 'path',
            attr: { d: 'M20 10v8h2v-8h-2zm-8 12V12L2 22h10zm8 0h2v-2h-2v2z' },
          },
        ],
      })(t);
    };
    wi.displayName = 'MdSignalCellularConnectedNoInternet1Bar';
    var xi = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          { tag: 'path', attr: { fillOpacity: '.3', d: 'M22 8V2L2 22h16V8z' } },
          {
            tag: 'path',
            attr: { d: 'M14 22V10L2 22h12zm6-12v8h2v-8h-2zm0 12h2v-2h-2v2z' },
          },
        ],
      })(t);
    };
    xi.displayName = 'MdSignalCellularConnectedNoInternet2Bar';
    var Ni = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          { tag: 'path', attr: { fillOpacity: '.3', d: 'M22 8V2L2 22h16V8z' } },
          {
            tag: 'path',
            attr: { d: 'M17 22V7L2 22h15zm3-12v8h2v-8h-2zm0 12h2v-2h-2v2z' },
          },
        ],
      })(t);
    };
    Ni.displayName = 'MdSignalCellularConnectedNoInternet3Bar';
    var Ci = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: { d: 'M20 18h2v-8h-2v8zm0 4h2v-2h-2v2zM2 22h16V8h4V2L2 22z' },
          },
        ],
      })(t);
    };
    Ci.displayName = 'MdSignalCellularConnectedNoInternet4Bar';
    var Si = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M18.99 5c0-1.1-.89-2-1.99-2h-7L7.66 5.34 19 16.68 18.99 5zM3.65 3.88L2.38 5.15 5 7.77V19c0 1.1.9 2 2 2h10.01c.35 0 .67-.1.96-.26l1.88 1.88 1.27-1.27L3.65 3.88z',
            },
          },
        ],
      })(t);
    };
    Si.displayName = 'MdSignalCellularNoSim';
    var Ai = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: { d: 'M20 6.83V20H6.83L20 6.83M22 2L2 22h20V2z' },
          },
        ],
      })(t);
    };
    Ai.displayName = 'MdSignalCellularNull';
    var bi = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 1l-8.59 8.59L21 18.18V1zM4.77 4.5L3.5 5.77l6.36 6.36L1 21h17.73l2 2L22 21.73 4.77 4.5z',
            },
          },
        ],
      })(t);
    };
    bi.displayName = 'MdSignalCellularOff';
    var Pi = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              fillOpacity: '.3',
              d:
                'M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z',
            },
          },
        ],
      })(t);
    };
    Pi.displayName = 'MdSignalWifi0Bar';
    var Fi = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              fillOpacity: '.3',
              d:
                'M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z',
            },
          },
          {
            tag: 'path',
            attr: {
              d:
                'M6.67 14.86L12 21.49v.01l.01-.01 5.33-6.63C17.06 14.65 15.03 13 12 13s-5.06 1.65-5.33 1.86z',
            },
          },
        ],
      })(t);
    };
    Fi.displayName = 'MdSignalWifi1Bar';
    var ki = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16z',
            },
          },
          {
            tag: 'path',
            attr: {
              d:
                'M15.5 14.5c0-2.8 2.2-5 5-5 .4 0 .7 0 1 .1L23.6 7c-.4-.3-4.9-4-11.6-4C5.3 3 .8 6.7.4 7L12 21.5l3.5-4.3v-2.7z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            attr: {
              d:
                'M6.7 14.9l5.3 6.6 3.5-4.3v-2.6c0-.2 0-.5.1-.7-.9-.5-2.2-.9-3.6-.9-3 0-5.1 1.7-5.3 1.9z',
            },
          },
        ],
      })(t);
    };
    ki.displayName = 'MdSignalWifi1BarLock';
    var Oi = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              fillOpacity: '.3',
              d:
                'M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z',
            },
          },
          {
            tag: 'path',
            attr: {
              d:
                'M4.79 12.52l7.2 8.98H12l.01-.01 7.2-8.98C18.85 12.24 16.1 10 12 10s-6.85 2.24-7.21 2.52z',
            },
          },
        ],
      })(t);
    };
    Oi.displayName = 'MdSignalWifi2Bar';
    var Ti = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16z',
            },
          },
          {
            tag: 'path',
            attr: {
              d:
                'M15.5 14.5c0-2.8 2.2-5 5-5 .4 0 .7 0 1 .1L23.6 7c-.4-.3-4.9-4-11.6-4C5.3 3 .8 6.7.4 7L12 21.5l3.5-4.3v-2.7z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            attr: {
              d:
                'M4.8 12.5l7.2 9 3.5-4.4v-2.6c0-1.3.5-2.5 1.4-3.4C15.6 10.5 14 10 12 10c-4.1 0-6.8 2.2-7.2 2.5z',
            },
          },
        ],
      })(t);
    };
    Ti.displayName = 'MdSignalWifi2BarLock';
    var Ri = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              fillOpacity: '.3',
              d:
                'M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z',
            },
          },
          {
            tag: 'path',
            attr: {
              d:
                'M3.53 10.95l8.46 10.54.01.01.01-.01 8.46-10.54C20.04 10.62 16.81 8 12 8c-4.81 0-8.04 2.62-8.47 2.95z',
            },
          },
        ],
      })(t);
    };
    Ri.displayName = 'MdSignalWifi3Bar';
    var Di = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              opacity: '.3',
              d:
                'M12 3C5.3 3 .8 6.7.4 7l3.2 3.9L12 21.5l3.5-4.3v-2.6c0-2.2 1.4-4 3.3-4.7.3-.1.5-.2.8-.2.3-.1.6-.1.9-.1.4 0 .7 0 1 .1L23.6 7c-.4-.3-4.9-4-11.6-4z',
            },
          },
          {
            tag: 'path',
            attr: {
              d:
                'M23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16zm-10 5.5l3.5-4.3v-2.6c0-2.2 1.4-4 3.3-4.7C17.3 9 14.9 8 12 8c-4.8 0-8 2.6-8.5 2.9',
            },
          },
        ],
      })(t);
    };
    Di.displayName = 'MdSignalWifi3BarLock';
    var Ii = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z',
            },
          },
        ],
      })(t);
    };
    Ii.displayName = 'MdSignalWifi4Bar';
    var Ei = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16zm-6.5-1.5c0-2.8 2.2-5 5-5 .4 0 .7 0 1 .1L23.6 7c-.4-.3-4.9-4-11.6-4C5.3 3 .8 6.7.4 7L12 21.5l3.5-4.4v-2.6z',
            },
          },
        ],
      })(t);
    };
    Ei.displayName = 'MdSignalWifi4BarLock';
    var Wi = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M23.64 7c-.45-.34-4.93-4-11.64-4-1.5 0-2.89.19-4.15.48L18.18 13.8 23.64 7zm-6.6 8.22L3.27 1.44 2 2.72l2.05 2.06C1.91 5.76.59 6.82.36 7l11.63 14.49.01.01.01-.01 3.9-4.86 3.32 3.32 1.27-1.27-3.46-3.46z',
            },
          },
        ],
      })(t);
    };
    Wi.displayName = 'MdSignalWifiOff';
    var Ui = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z',
            },
          },
        ],
      })(t);
    };
    Ui.displayName = 'MdStorage';
    var Gi = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M15 7v4h1v2h-3V5h2l-3-4-3 4h2v8H8v-2.07c.7-.37 1.2-1.08 1.2-1.93 0-1.21-.99-2.2-2.2-2.2-1.21 0-2.2.99-2.2 2.2 0 .85.5 1.56 1.2 1.93V13c0 1.11.89 2 2 2h3v3.05c-.71.37-1.2 1.1-1.2 1.95 0 1.22.99 2.2 2.2 2.2 1.21 0 2.2-.98 2.2-2.2 0-.85-.49-1.58-1.2-1.95V15h3c1.11 0 2-.89 2-2v-2h1V7h-4z',
            },
          },
        ],
      })(t);
    };
    Gi.displayName = 'MdUsb';
    var ji = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M4 4h7V2H4c-1.1 0-2 .9-2 2v7h2V4zm6 9l-4 5h12l-3-4-2.03 2.71L10 13zm7-4.5c0-.83-.67-1.5-1.5-1.5S14 7.67 14 8.5s.67 1.5 1.5 1.5S17 9.33 17 8.5zM20 2h-7v2h7v7h2V4c0-1.1-.9-2-2-2zm0 18h-7v2h7c1.1 0 2-.9 2-2v-7h-2v7zM4 13H2v7c0 1.1.9 2 2 2h7v-2H4v-7z',
            },
          },
        ],
      })(t);
    };
    ji.displayName = 'MdWallpaper';
    var _i = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z',
            },
          },
        ],
      })(t);
    };
    _i.displayName = 'MdWidgets';
    var Ki = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20.5 9.5c.28 0 .55.04.81.08L24 6c-3.34-2.51-7.5-4-12-4S3.34 3.49 0 6l12 16 3.5-4.67V14.5c0-2.76 2.24-5 5-5zM23 16v-1.5c0-1.38-1.12-2.5-2.5-2.5S18 13.12 18 14.5V16c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm-1 0h-3v-1.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V16z',
            },
          },
        ],
      })(t);
    };
    Ki.displayName = 'MdWifiLock';
    var Qi = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 2c0-3.31-2.69-6-6-6s-6 2.69-6 6c0 2.22 1.21 4.15 3 5.19l1-1.74c-1.19-.7-2-1.97-2-3.45 0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.48-.81 2.75-2 3.45l1 1.74c1.79-1.04 3-2.97 3-5.19zM12 3C6.48 3 2 7.48 2 13c0 3.7 2.01 6.92 4.99 8.65l1-1.73C5.61 18.53 4 15.96 4 13c0-4.42 3.58-8 8-8s8 3.58 8 8c0 2.96-1.61 5.53-4 6.92l1 1.73c2.99-1.73 5-4.95 5-8.65 0-5.52-4.48-10-10-10z',
            },
          },
        ],
      })(t);
    };
    Qi.displayName = 'MdWifiTethering';
    var qi = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z',
            },
          },
        ],
      })(t);
    };
    qi.displayName = 'MdAttachFile';
    var Zi = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z',
            },
          },
        ],
      })(t);
    };
    Zi.displayName = 'MdAttachMoney';
    var Ji = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M3 3v18h18V3H3zm8 16H5v-6h6v6zm0-8H5V5h6v6zm8 8h-6v-6h6v6zm0-8h-6V5h6v6z',
            },
          },
        ],
      })(t);
    };
    Ji.displayName = 'MdBorderAll';
    var $i = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M9 11H7v2h2v-2zm4 4h-2v2h2v-2zM9 3H7v2h2V3zm4 8h-2v2h2v-2zM5 3H3v2h2V3zm8 4h-2v2h2V7zm4 4h-2v2h2v-2zm-4-8h-2v2h2V3zm4 0h-2v2h2V3zm2 10h2v-2h-2v2zm0 4h2v-2h-2v2zM5 7H3v2h2V7zm14-4v2h2V3h-2zm0 6h2V7h-2v2zM5 11H3v2h2v-2zM3 21h18v-2H3v2zm2-6H3v2h2v-2z',
            },
          },
        ],
      })(t);
    };
    $i.displayName = 'MdBorderBottom';
    var Yi = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M7 5h2V3H7v2zm0 8h2v-2H7v2zm0 8h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm-8 0h2v-2H3v2zm0-4h2v-2H3v2zm0-4h2v-2H3v2zm0-4h2V7H3v2zm0-4h2V3H3v2zm8 8h2v-2h-2v2zm8 4h2v-2h-2v2zm0-4h2v-2h-2v2zm0 8h2v-2h-2v2zm0-12h2V7h-2v2zm-8 0h2V7h-2v2zm8-6v2h2V3h-2zm-8 2h2V3h-2v2zm4 16h2v-2h-2v2zm0-8h2v-2h-2v2zm0-8h2V3h-2v2z',
            },
          },
        ],
      })(t);
    };
    Yi.displayName = 'MdBorderClear';
    var Xi = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M17.75 7L14 3.25l-10 10V17h3.75l10-10zm2.96-2.96c.39-.39.39-1.02 0-1.41L18.37.29c-.39-.39-1.02-.39-1.41 0L15 2.25 18.75 6l1.96-1.96z',
            },
          },
          { tag: 'path', attr: { fillOpacity: '.36', d: 'M0 20h24v4H0z' } },
        ],
      })(t);
    };
    Xi.displayName = 'MdBorderColor';
    var td = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M3 21h2v-2H3v2zM5 7H3v2h2V7zM3 17h2v-2H3v2zm4 4h2v-2H7v2zM5 3H3v2h2V3zm4 0H7v2h2V3zm8 0h-2v2h2V3zm-4 4h-2v2h2V7zm0-4h-2v2h2V3zm6 14h2v-2h-2v2zm-8 4h2v-2h-2v2zm-8-8h18v-2H3v2zM19 3v2h2V3h-2zm0 6h2V7h-2v2zm-8 8h2v-2h-2v2zm4 4h2v-2h-2v2zm4 0h2v-2h-2v2z',
            },
          },
        ],
      })(t);
    };
    td.displayName = 'MdBorderHorizontal';
    var ad = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M3 21h2v-2H3v2zm4 0h2v-2H7v2zM5 7H3v2h2V7zM3 17h2v-2H3v2zM9 3H7v2h2V3zM5 3H3v2h2V3zm12 0h-2v2h2V3zm2 6h2V7h-2v2zm0-6v2h2V3h-2zm-4 18h2v-2h-2v2zM13 3h-2v8H3v2h8v8h2v-8h8v-2h-8V3zm6 18h2v-2h-2v2zm0-4h2v-2h-2v2z',
            },
          },
        ],
      })(t);
    };
    ad.displayName = 'MdBorderInner';
    var rd = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M11 21h2v-2h-2v2zm0-4h2v-2h-2v2zm0-12h2V3h-2v2zm0 4h2V7h-2v2zm0 4h2v-2h-2v2zm-4 8h2v-2H7v2zM7 5h2V3H7v2zm0 8h2v-2H7v2zm-4 8h2V3H3v18zM19 9h2V7h-2v2zm-4 12h2v-2h-2v2zm4-4h2v-2h-2v2zm0-14v2h2V3h-2zm0 10h2v-2h-2v2zm0 8h2v-2h-2v2zm-4-8h2v-2h-2v2zm0-8h2V3h-2v2z',
            },
          },
        ],
      })(t);
    };
    rd.displayName = 'MdBorderLeft';
    var nd = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M13 7h-2v2h2V7zm0 4h-2v2h2v-2zm4 0h-2v2h2v-2zM3 3v18h18V3H3zm16 16H5V5h14v14zm-6-4h-2v2h2v-2zm-4-4H7v2h2v-2z',
            },
          },
        ],
      })(t);
    };
    nd.displayName = 'MdBorderOuter';
    var cd = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M7 21h2v-2H7v2zM3 5h2V3H3v2zm4 0h2V3H7v2zm0 8h2v-2H7v2zm-4 8h2v-2H3v2zm8 0h2v-2h-2v2zm-8-8h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm8 8h2v-2h-2v2zm4-4h2v-2h-2v2zm4-10v18h2V3h-2zm-4 18h2v-2h-2v2zm0-16h2V3h-2v2zm-4 8h2v-2h-2v2zm0-8h2V3h-2v2zm0 4h2V7h-2v2z',
            },
          },
        ],
      })(t);
    };
    cd.displayName = 'MdBorderRight';
    var ed = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M15 21h2v-2h-2v2zm4 0h2v-2h-2v2zM7 21h2v-2H7v2zm4 0h2v-2h-2v2zm8-4h2v-2h-2v2zm0-4h2v-2h-2v2zM3 3v18h2V5h16V3H3zm16 6h2V7h-2v2z',
            },
          },
        ],
      })(t);
    };
    ed.displayName = 'MdBorderStyle';
    var vd = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M7 21h2v-2H7v2zm0-8h2v-2H7v2zm4 0h2v-2h-2v2zm0 8h2v-2h-2v2zm-8-4h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2v-2H3v2zm0-4h2V7H3v2zm8 8h2v-2h-2v2zm8-8h2V7h-2v2zm0 4h2v-2h-2v2zM3 3v2h18V3H3zm16 14h2v-2h-2v2zm-4 4h2v-2h-2v2zM11 9h2V7h-2v2zm8 12h2v-2h-2v2zm-4-8h2v-2h-2v2z',
            },
          },
        ],
      })(t);
    };
    vd.displayName = 'MdBorderTop';
    var id = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M3 9h2V7H3v2zm0-4h2V3H3v2zm4 16h2v-2H7v2zm0-8h2v-2H7v2zm-4 0h2v-2H3v2zm0 8h2v-2H3v2zm0-4h2v-2H3v2zM7 5h2V3H7v2zm12 12h2v-2h-2v2zm-8 4h2V3h-2v18zm8 0h2v-2h-2v2zm0-8h2v-2h-2v2zm0-10v2h2V3h-2zm0 6h2V7h-2v2zm-4-4h2V3h-2v2zm0 16h2v-2h-2v2zm0-8h2v-2h-2v2z',
            },
          },
        ],
      })(t);
    };
    id.displayName = 'MdBorderVertical';
    var dd = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          { tag: 'circle', attr: { cx: '7.2', cy: '14.4', r: '3.2' } },
          { tag: 'circle', attr: { cx: '14.8', cy: '18', r: '2' } },
          { tag: 'circle', attr: { cx: '15.2', cy: '8.8', r: '4.8' } },
        ],
      })(t);
    };
    dd.displayName = 'MdBubbleChart';
    var hd = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          { tag: 'path', attr: { d: 'M20 9H4v2h16V9zM4 15h16v-2H4v2z' } },
        ],
      })(t);
    };
    hd.displayName = 'MdDragHandle';
    var od = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z',
            },
          },
        ],
      })(t);
    };
    od.displayName = 'MdFormatAlignCenter';
    var ld = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z',
            },
          },
        ],
      })(t);
    };
    ld.displayName = 'MdFormatAlignJustify';
    var ud = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z',
            },
          },
        ],
      })(t);
    };
    ud.displayName = 'MdFormatAlignLeft';
    var sd = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z',
            },
          },
        ],
      })(t);
    };
    sd.displayName = 'MdFormatAlignRight';
    var Md = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z',
            },
          },
        ],
      })(t);
    };
    Md.displayName = 'MdFormatBold';
    var gd = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M3.27 5L2 6.27l6.97 6.97L6.5 19h3l1.57-3.66L16.73 21 18 19.73 3.55 5.27 3.27 5zM6 5v.18L8.82 8h2.4l-.72 1.68 2.1 2.1L14.21 8H20V5H6z',
            },
          },
        ],
      })(t);
    };
    gd.displayName = 'MdFormatClear';
    var zd = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M16.56 8.94L7.62 0 6.21 1.41l2.38 2.38-5.15 5.15c-.59.59-.59 1.54 0 2.12l5.5 5.5c.29.29.68.44 1.06.44s.77-.15 1.06-.44l5.5-5.5c.59-.58.59-1.53 0-2.12zM5.21 10L10 5.21 14.79 10H5.21zM19 11.5s-2 2.17-2 3.5c0 1.1.9 2 2 2s2-.9 2-2c0-1.33-2-3.5-2-3.5z',
            },
          },
          { tag: 'path', attr: { fillOpacity: '.36', d: 'M0 20h24v4H0z' } },
        ],
      })(t);
    };
    zd.displayName = 'MdFormatColorFill';
    var md = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M18 14c0-4-6-10.8-6-10.8s-1.33 1.51-2.73 3.52l8.59 8.59c.09-.42.14-.86.14-1.31zm-.88 3.12L12.5 12.5 5.27 5.27 4 6.55l3.32 3.32C6.55 11.32 6 12.79 6 14c0 3.31 2.69 6 6 6 1.52 0 2.9-.57 3.96-1.5l2.63 2.63 1.27-1.27-2.74-2.74z',
            },
          },
        ],
      })(t);
    };
    md.displayName = 'MdFormatColorReset';
    var pd = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          { tag: 'path', attr: { fillOpacity: '.36', d: 'M0 20h24v4H0z' } },
          {
            tag: 'path',
            attr: {
              d:
                'M11 3L5.5 17h2.25l1.12-3h6.25l1.12 3h2.25L13 3h-2zm-1.38 9L12 5.67 14.38 12H9.62z',
            },
          },
        ],
      })(t);
    };
    pd.displayName = 'MdFormatColorText';
    var fd = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M11 17h10v-2H11v2zm-8-5l4 4V8l-4 4zm0 9h18v-2H3v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z',
            },
          },
        ],
      })(t);
    };
    fd.displayName = 'MdFormatIndentDecrease';
    var Hd = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M3 21h18v-2H3v2zM3 8v8l4-4-4-4zm8 9h10v-2H11v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z',
            },
          },
        ],
      })(t);
    };
    Hd.displayName = 'MdFormatIndentIncrease';
    var Vd = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: { d: 'M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z' },
          },
        ],
      })(t);
    };
    Vd.displayName = 'MdFormatItalic';
    var yd = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M6 7h2.5L5 3.5 1.5 7H4v10H1.5L5 20.5 8.5 17H6V7zm4-2v2h12V5H10zm0 14h12v-2H10v2zm0-6h12v-2H10v2z',
            },
          },
        ],
      })(t);
    };
    yd.displayName = 'MdFormatLineSpacing';
    var Ld = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z',
            },
          },
        ],
      })(t);
    };
    Ld.displayName = 'MdFormatListBulleted';
    var Bd = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z',
            },
          },
        ],
      })(t);
    };
    Bd.displayName = 'MdFormatListNumbered';
    var wd = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3z',
            },
          },
        ],
      })(t);
    };
    wd.displayName = 'MdFormatPaint';
    var xd = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: { d: 'M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z' },
          },
        ],
      })(t);
    };
    xd.displayName = 'MdFormatQuote';
    var Nd = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M23 7V1h-6v2H7V1H1v6h2v10H1v6h6v-2h10v2h6v-6h-2V7h2zM3 3h2v2H3V3zm2 18H3v-2h2v2zm12-2H7v-2H5V7h2V5h10v2h2v10h-2v2zm4 2h-2v-2h2v2zM19 5V3h2v2h-2zm-5.27 9h-3.49l-.73 2H7.89l3.4-9h1.4l3.41 9h-1.63l-.74-2zm-3.04-1.26h2.61L12 8.91l-1.31 3.83z',
            },
          },
        ],
      })(t);
    };
    Nd.displayName = 'MdFormatShapes';
    var Cd = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: { d: 'M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z' },
          },
        ],
      })(t);
    };
    Cd.displayName = 'MdFormatSize';
    var Sd = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d: 'M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z',
            },
          },
        ],
      })(t);
    };
    Sd.displayName = 'MdFormatStrikethrough';
    var Ad = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M9 10v5h2V4h2v11h2V4h2V2H9C6.79 2 5 3.79 5 6s1.79 4 4 4zm12 8l-4-4v3H5v2h12v3l4-4z',
            },
          },
        ],
      })(t);
    };
    Ad.displayName = 'MdFormatTextdirectionLToR';
    var bd = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M10 10v5h2V4h2v11h2V4h2V2h-8C7.79 2 6 3.79 6 6s1.79 4 4 4zm-2 7v-3l-4 4 4 4v-3h12v-2H8z',
            },
          },
        ],
      })(t);
    };
    bd.displayName = 'MdFormatTextdirectionRToL';
    var Pd = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z',
            },
          },
        ],
      })(t);
    };
    Pd.displayName = 'MdFormatUnderlined';
    var Fd = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: { d: 'M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7z' },
          },
        ],
      })(t);
    };
    Fd.displayName = 'MdFunctions';
    var kd = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M6 14l3 3v5h6v-5l3-3V9H6zm5-12h2v3h-2zM3.5 5.875L4.914 4.46l2.12 2.122L5.62 7.997zm13.46.71l2.123-2.12 1.414 1.414L18.375 8z',
            },
          },
        ],
      })(t);
    };
    kd.displayName = 'MdHighlight';
    var Od = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z',
            },
          },
        ],
      })(t);
    };
    Od.displayName = 'MdInsertChart';
    var Td = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z',
            },
          },
        ],
      })(t);
    };
    Td.displayName = 'MdInsertComment';
    var Rd = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z',
            },
          },
        ],
      })(t);
    };
    Rd.displayName = 'MdInsertDriveFile';
    var Dd = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z',
            },
          },
        ],
      })(t);
    };
    Dd.displayName = 'MdInsertEmoticon';
    var Id = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z',
            },
          },
        ],
      })(t);
    };
    Id.displayName = 'MdInsertInvitation';
    var Ed = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z',
            },
          },
        ],
      })(t);
    };
    Ed.displayName = 'MdInsertLink';
    var Wd = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z',
            },
          },
        ],
      })(t);
    };
    Wd.displayName = 'MdInsertPhoto';
    var Ud = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19.5 9.5c-1.03 0-1.9.62-2.29 1.5h-2.92c-.39-.88-1.26-1.5-2.29-1.5s-1.9.62-2.29 1.5H6.79c-.39-.88-1.26-1.5-2.29-1.5C3.12 9.5 2 10.62 2 12s1.12 2.5 2.5 2.5c1.03 0 1.9-.62 2.29-1.5h2.92c.39.88 1.26 1.5 2.29 1.5s1.9-.62 2.29-1.5h2.92c.39.88 1.26 1.5 2.29 1.5 1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5z',
            },
          },
        ],
      })(t);
    };
    Ud.displayName = 'MdLinearScale';
    var Gd = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M17 20.41L18.41 19 15 15.59 13.59 17 17 20.41zM7.5 8H11v5.59L5.59 19 7 20.41l6-6V8h3.5L12 3.5 7.5 8z',
            },
          },
        ],
      })(t);
    };
    Gd.displayName = 'MdMergeType';
    var jd = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z',
            },
          },
        ],
      })(t);
    };
    jd.displayName = 'MdModeComment';
    var _d = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z',
            },
          },
        ],
      })(t);
    };
    _d.displayName = 'MdModeEdit';
    var Kd = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z',
            },
          },
        ],
      })(t);
    };
    Kd.displayName = 'MdMonetizationOn';
    var Qd = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12.5 6.9c1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-.53.12-1.03.3-1.48.54l1.47 1.47c.41-.17.91-.27 1.51-.27zM5.33 4.06L4.06 5.33 7.5 8.77c0 2.08 1.56 3.21 3.91 3.91l3.51 3.51c-.34.48-1.05.91-2.42.91-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c.96-.18 1.82-.55 2.45-1.12l2.22 2.22 1.27-1.27L5.33 4.06z',
            },
          },
        ],
      })(t);
    };
    Qd.displayName = 'MdMoneyOff';
    var qd = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M22 6.92l-1.41-1.41-2.85 3.21C15.68 6.4 12.83 5 9.61 5 6.72 5 4.07 6.16 2 8l1.42 1.42C5.12 7.93 7.27 7 9.61 7c2.74 0 5.09 1.26 6.77 3.24l-2.88 3.24-4-4L2 16.99l1.5 1.5 6-6.01 4 4 4.05-4.55c.75 1.35 1.25 2.9 1.44 4.55H21c-.22-2.3-.95-4.39-2.04-6.14L22 6.92z',
            },
          },
        ],
      })(t);
    };
    qd.displayName = 'MdMultilineChart';
    var Zd = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99zm0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99h-8.97z',
            },
          },
        ],
      })(t);
    };
    Zd.displayName = 'MdPieChart';
    var Jd = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 2.07c3.61.45 6.48 3.33 6.93 6.93H13V4.07zM4 12c0-4.06 3.07-7.44 7-7.93v15.87c-3.93-.5-7-3.88-7-7.94zm9 7.93V13h6.93c-.45 3.61-3.32 6.48-6.93 6.93z',
            },
          },
        ],
      })(t);
    };
    Jd.displayName = 'MdPieChartOutlined';
    var $d = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: { d: 'M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z' },
          },
        ],
      })(t);
    };
    $d.displayName = 'MdPublish';
    var Yd = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [{ tag: 'path', attr: { d: 'M4 9h16v2H4zm0 4h10v2H4z' } }],
      })(t);
    };
    Yd.displayName = 'MdShortText';
    var Xd = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z',
            },
          },
        ],
      })(t);
    };
    Xd.displayName = 'MdShowChart';
    var th = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [{ tag: 'path', attr: { d: 'M18 9v4H6V9H4v6h16V9z' } }],
      })(t);
    };
    th.displayName = 'MdSpaceBar';
    var ah = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M7.24 8.75c-.26-.48-.39-1.03-.39-1.67 0-.61.13-1.16.4-1.67.26-.5.63-.93 1.11-1.29.48-.35 1.05-.63 1.7-.83.66-.19 1.39-.29 2.18-.29.81 0 1.54.11 2.21.34.66.22 1.23.54 1.69.94.47.4.83.88 1.08 1.43.25.55.38 1.15.38 1.81h-3.01c0-.31-.05-.59-.15-.85-.09-.27-.24-.49-.44-.68-.2-.19-.45-.33-.75-.44-.3-.1-.66-.16-1.06-.16-.39 0-.74.04-1.03.13-.29.09-.53.21-.72.36-.19.16-.34.34-.44.55-.1.21-.15.43-.15.66 0 .48.25.88.74 1.21.38.25.77.48 1.41.7H7.39c-.05-.08-.11-.17-.15-.25zM21 12v-2H3v2h9.62c.18.07.4.14.55.2.37.17.66.34.87.51.21.17.35.36.43.57.07.2.11.43.11.69 0 .23-.05.45-.14.66-.09.2-.23.38-.42.53-.19.15-.42.26-.71.35-.29.08-.63.13-1.01.13-.43 0-.83-.04-1.18-.13s-.66-.23-.91-.42c-.25-.19-.45-.44-.59-.75-.14-.31-.25-.76-.25-1.21H6.4c0 .55.08 1.13.24 1.58.16.45.37.85.65 1.21.28.35.6.66.98.92.37.26.78.48 1.22.65.44.17.9.3 1.38.39.48.08.96.13 1.44.13.8 0 1.53-.09 2.18-.28s1.21-.45 1.67-.79c.46-.34.82-.77 1.07-1.27s.38-1.07.38-1.71c0-.6-.1-1.14-.31-1.61-.05-.11-.11-.23-.17-.33H21z',
            },
          },
        ],
      })(t);
    };
    ah.displayName = 'MdStrikethroughS';
    var rh = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: { d: 'M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z' },
          },
        ],
      })(t);
    };
    rh.displayName = 'MdTextFields';
    var nh = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [{ tag: 'path', attr: { d: 'M5 4v3h5.5v12h3V7H19V4z' } }],
      })(t);
    };
    nh.displayName = 'MdTitle';
    var ch = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: { d: 'M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z' },
          },
        ],
      })(t);
    };
    ch.displayName = 'MdVerticalAlignBottom';
    var eh = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M8 19h3v4h2v-4h3l-4-4-4 4zm8-14h-3V1h-2v4H8l4 4 4-4zM4 11v2h16v-2H4z',
            },
          },
        ],
      })(t);
    };
    eh.displayName = 'MdVerticalAlignCenter';
    var vh = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: { d: 'M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z' },
          },
        ],
      })(t);
    };
    vh.displayName = 'MdVerticalAlignTop';
    var ih = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3 3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z',
            },
          },
        ],
      })(t);
    };
    ih.displayName = 'MdWrapText';
    var dh = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z',
            },
          },
        ],
      })(t);
    };
    dh.displayName = 'MdAttachment';
    var hh = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z',
            },
          },
        ],
      })(t);
    };
    hh.displayName = 'MdCloud';
    var oh = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3l.14.01C8.58 8.28 10.13 7 12 7c2.21 0 4 1.79 4 4h.5c1.38 0 2.5 1.12 2.5 2.5S17.88 16 16.5 16z',
            },
          },
        ],
      })(t);
    };
    oh.displayName = 'MdCloudCircle';
    var lh = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41L10 17z',
            },
          },
        ],
      })(t);
    };
    lh.displayName = 'MdCloudDone';
    var uh = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z',
            },
          },
        ],
      })(t);
    };
    uh.displayName = 'MdCloudDownload';
    var sh = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z',
            },
          },
        ],
      })(t);
    };
    sh.displayName = 'MdCloudOff';
    var Mh = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z',
            },
          },
        ],
      })(t);
    };
    Mh.displayName = 'MdCloudQueue';
    var gh = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z',
            },
          },
        ],
      })(t);
    };
    gh.displayName = 'MdCloudUpload';
    var zh = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z',
            },
          },
        ],
      })(t);
    };
    zh.displayName = 'MdCreateNewFolder';
    var mh = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: { d: 'M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z' },
          },
        ],
      })(t);
    };
    mh.displayName = 'MdFileDownload';
    var ph = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          { tag: 'path', attr: { d: 'M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z' } },
        ],
      })(t);
    };
    ph.displayName = 'MdFileUpload';
    var fh = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z',
            },
          },
        ],
      })(t);
    };
    fh.displayName = 'MdFolder';
    var Hh = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z',
            },
          },
        ],
      })(t);
    };
    Hh.displayName = 'MdFolderOpen';
    var Vh = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z',
            },
          },
        ],
      })(t);
    };
    Vh.displayName = 'MdFolderShared';
    var yh = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11z',
            },
          },
        ],
      })(t);
    };
    yh.displayName = 'MdCast';
    var Lh = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm18-7H5v1.63c3.96 1.28 7.09 4.41 8.37 8.37H19V7zM1 10v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11zm20-7H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z',
            },
          },
        ],
      })(t);
    };
    Lh.displayName = 'MdCastConnected';
    var Bh = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z',
            },
          },
        ],
      })(t);
    };
    Bh.displayName = 'MdComputer';
    var wh = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z',
            },
          },
        ],
      })(t);
    };
    wh.displayName = 'MdDesktopMac';
    var xh = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z',
            },
          },
        ],
      })(t);
    };
    xh.displayName = 'MdDesktopWindows';
    var Nh = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M22 9V7h-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14zM6 13h5v4H6zm6-6h4v3h-4zM6 7h5v5H6zm6 4h4v6h-4z',
            },
          },
        ],
      })(t);
    };
    Nh.displayName = 'MdDeveloperBoard';
    var Ch = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M17 16l-4-4V8.82C14.16 8.4 15 7.3 15 6c0-1.66-1.34-3-3-3S9 4.34 9 6c0 1.3.84 2.4 2 2.82V12l-4 4H3v5h5v-3.05l4-4.2 4 4.2V21h5v-5h-4z',
            },
          },
        ],
      })(t);
    };
    Ch.displayName = 'MdDeviceHub';
    var Sh = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M3 6h18V4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V6zm10 6H9v1.78c-.61.55-1 1.33-1 2.22s.39 1.67 1 2.22V20h4v-1.78c.61-.55 1-1.34 1-2.22s-.39-1.67-1-2.22V12zm-2 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM22 8h-6c-.5 0-1 .5-1 1v10c0 .5.5 1 1 1h6c.5 0 1-.5 1-1V9c0-.5-.5-1-1-1zm-1 10h-4v-8h4v8z',
            },
          },
        ],
      })(t);
    };
    Sh.displayName = 'MdDevicesOther';
    var Ah = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M8 23h8v-2H8v2zm8-21.99L8 1c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM16 15H8V5h8v10z',
            },
          },
        ],
      })(t);
    };
    Ah.displayName = 'MdDock';
    var bh = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z',
            },
          },
        ],
      })(t);
    };
    bh.displayName = 'MdGamepad';
    var Ph = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z',
            },
          },
        ],
      })(t);
    };
    Ph.displayName = 'MdHeadset';
    var Fh = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4v1h-7v2h6c1.66 0 3-1.34 3-3V10c0-4.97-4.03-9-9-9z',
            },
          },
        ],
      })(t);
    };
    Fh.displayName = 'MdHeadsetMic';
    var kh = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm0-4h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z',
            },
          },
        ],
      })(t);
    };
    kh.displayName = 'MdKeyboard';
    var Oh = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: { d: 'M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z' },
          },
        ],
      })(t);
    };
    Oh.displayName = 'MdKeyboardArrowDown';
    var Th = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: { d: 'M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z' },
          },
        ],
      })(t);
    };
    Th.displayName = 'MdKeyboardArrowLeft';
    var Rh = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: { d: 'M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z' },
          },
        ],
      })(t);
    };
    Rh.displayName = 'MdKeyboardArrowRight';
    var Dh = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: { d: 'M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z' },
          },
        ],
      })(t);
    };
    Dh.displayName = 'MdKeyboardArrowUp';
    var Ih = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d: 'M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z',
            },
          },
        ],
      })(t);
    };
    Ih.displayName = 'MdKeyboardBackspace';
    var Eh = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 8.41L16.59 13 18 11.59l-6-6-6 6L7.41 13 12 8.41zM6 18h12v-2H6v2z',
            },
          },
        ],
      })(t);
    };
    Eh.displayName = 'MdKeyboardCapslock';
    var Wh = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 3H4c-1.1 0-1.99.9-1.99 2L2 15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 3h2v2h-2V6zm0 3h2v2h-2V9zM8 6h2v2H8V6zm0 3h2v2H8V9zm-1 2H5V9h2v2zm0-3H5V6h2v2zm9 7H8v-2h8v2zm0-4h-2V9h2v2zm0-3h-2V6h2v2zm3 3h-2V9h2v2zm0-3h-2V6h2v2zm-7 15l4-4H8l4 4z',
            },
          },
        ],
      })(t);
    };
    Wh.displayName = 'MdKeyboardHide';
    var Uh = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d: 'M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z',
            },
          },
        ],
      })(t);
    };
    Uh.displayName = 'MdKeyboardReturn';
    var Gh = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M11.59 7.41L15.17 11H1v2h14.17l-3.59 3.59L13 18l6-6-6-6-1.41 1.41zM20 6v12h2V6h-2z',
            },
          },
        ],
      })(t);
    };
    Gh.displayName = 'MdKeyboardTab';
    var jh = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.42 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z',
            },
          },
        ],
      })(t);
    };
    jh.displayName = 'MdKeyboardVoice';
    var _h = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z',
            },
          },
        ],
      })(t);
    };
    _h.displayName = 'MdLaptop';
    var Kh = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d: 'M22 18V3H2v15H0v2h24v-2h-2zm-8 0h-4v-1h4v1zm6-3H4V5h16v10z',
            },
          },
        ],
      })(t);
    };
    Kh.displayName = 'MdLaptopChromebook';
    var Qh = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2h-4zM4 5h16v11H4V5zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z',
            },
          },
        ],
      })(t);
    };
    Qh.displayName = 'MdLaptopMac';
    var qh = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 18v-1c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2v1H0v2h24v-2h-4zM4 5h16v10H4V5z',
            },
          },
        ],
      })(t);
    };
    qh.displayName = 'MdLaptopWindows';
    var Zh = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z',
            },
          },
        ],
      })(t);
    };
    Zh.displayName = 'MdMemory';
    var Jh = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M13 1.07V9h7c0-4.08-3.05-7.44-7-7.93zM4 15c0 4.42 3.58 8 8 8s8-3.58 8-8v-4H4v4zm7-13.93C7.05 1.56 4 4.92 4 9h7V1.07z',
            },
          },
        ],
      })(t);
    };
    Jh.displayName = 'MdMouse';
    var $h = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z',
            },
          },
        ],
      })(t);
    };
    $h.displayName = 'MdPhoneAndroid';
    var Yh = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z',
            },
          },
        ],
      })(t);
    };
    Yh.displayName = 'MdPhoneIphone';
    var Xh = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z',
            },
          },
        ],
      })(t);
    };
    Xh.displayName = 'MdPhonelink';
    var to = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M22 6V4H6.82l2 2H22zM1.92 1.65L.65 2.92l1.82 1.82C2.18 5.08 2 5.52 2 6v11H0v3h17.73l2.35 2.35 1.27-1.27L3.89 3.62 1.92 1.65zM4 6.27L14.73 17H4V6.27zM23 8h-6c-.55 0-1 .45-1 1v4.18l2 2V10h4v7h-2.18l3 3H23c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1z',
            },
          },
        ],
      })(t);
    };
    to.displayName = 'MdPhonelinkOff';
    var ao = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d: 'M2 9v2h19V9H2zm0 6h5v-2H2v2zm7 0h5v-2H9v2zm7 0h5v-2h-5v2z',
            },
          },
        ],
      })(t);
    };
    ao.displayName = 'MdPowerInput';
    var ro = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20.2 5.9l.8-.8C19.6 3.7 17.8 3 16 3s-3.6.7-5 2.1l.8.8C13 4.8 14.5 4.2 16 4.2s3 .6 4.2 1.7zm-.9.8c-.9-.9-2.1-1.4-3.3-1.4s-2.4.5-3.3 1.4l.8.8c.7-.7 1.6-1 2.5-1 .9 0 1.8.3 2.5 1l.8-.8zM19 13h-2V9h-2v4H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zM8 18H6v-2h2v2zm3.5 0h-2v-2h2v2zm3.5 0h-2v-2h2v2z',
            },
          },
        ],
      })(t);
    };
    ro.displayName = 'MdRouter';
    var no = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19.8 10.7L4.2 5l-.7 1.9L17.6 12H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5.5c0-.8-.5-1.6-1.2-1.8zM7 17H5v-2h2v2zm12 0H9v-2h10v2z',
            },
          },
        ],
      })(t);
    };
    no.displayName = 'MdScanner';
    var co = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z',
            },
          },
        ],
      })(t);
    };
    co.displayName = 'MdSecurity';
    var eo = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19.99 4c0-1.1-.89-2-1.99-2h-8L4 8v12c0 1.1.9 2 2 2h12.01c1.1 0 1.99-.9 1.99-2l-.01-16zM9 19H7v-2h2v2zm8 0h-2v-2h2v2zm-8-4H7v-4h2v4zm4 4h-2v-4h2v4zm0-6h-2v-2h2v2zm4 2h-2v-4h2v4z',
            },
          },
        ],
      })(t);
    };
    eo.displayName = 'MdSimCard';
    var vo = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z',
            },
          },
        ],
      })(t);
    };
    vo.displayName = 'MdSmartphone';
    var io = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 1.99 2 1.99L17 22c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 2c1.1 0 2 .9 2 2s-.9 2-2 2c-1.11 0-2-.9-2-2s.89-2 2-2zm0 16c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z',
            },
          },
        ],
      })(t);
    };
    io.displayName = 'MdSpeaker';
    var ho = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M18.2 1H9.8C8.81 1 8 1.81 8 2.8v14.4c0 .99.81 1.79 1.8 1.79l8.4.01c.99 0 1.8-.81 1.8-1.8V2.8c0-.99-.81-1.8-1.8-1.8zM14 3c1.1 0 2 .89 2 2s-.9 2-2 2-2-.89-2-2 .9-2 2-2zm0 13.5c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z',
            },
          },
          { tag: 'circle', attr: { cx: '14', cy: '12.5', r: '2.5' } },
          { tag: 'path', attr: { d: 'M6 5H4v16c0 1.1.89 2 2 2h10v-2H6V5z' } },
        ],
      })(t);
    };
    ho.displayName = 'MdSpeakerGroup';
    var oo = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 1.99-.9 1.99-2L23 6c0-1.1-.9-2-2-2zm-2 14H5V6h14v12z',
            },
          },
        ],
      })(t);
    };
    oo.displayName = 'MdTablet';
    var lo = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M18 0H6C4.34 0 3 1.34 3 3v18c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3zm-4 22h-4v-1h4v1zm5.25-3H4.75V3h14.5v16z',
            },
          },
        ],
      })(t);
    };
    lo.displayName = 'MdTabletAndroid';
    var uo = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M18.5 0h-14C3.12 0 2 1.12 2 2.5v19C2 22.88 3.12 24 4.5 24h14c1.38 0 2.5-1.12 2.5-2.5v-19C21 1.12 19.88 0 18.5 0zm-7 23c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7.5-4H4V3h15v16z',
            },
          },
        ],
      })(t);
    };
    uo.displayName = 'MdTabletMac';
    var so = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 12c0-3 2.5-5.5 5.5-5.5S23 9 23 12H12zm0 0c0 3-2.5 5.5-5.5 5.5S1 15 1 12h11zm0 0c-3 0-5.5-2.5-5.5-5.5S9 1 12 1v11zm0 0c3 0 5.5 2.5 5.5 5.5S15 23 12 23V12z',
            },
          },
        ],
      })(t);
    };
    so.displayName = 'MdToys';
    var Mo = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z',
            },
          },
        ],
      })(t);
    };
    Mo.displayName = 'MdTv';
    var go = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z',
            },
          },
        ],
      })(t);
    };
    go.displayName = 'MdVideogameAsset';
    var zo = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 12c0-2.54-1.19-4.81-3.04-6.27L16 0H8l-.95 5.73C5.19 7.19 4 9.45 4 12s1.19 4.81 3.05 6.27L8 24h8l.96-5.73C18.81 16.81 20 14.54 20 12zM6 12c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6z',
            },
          },
        ],
      })(t);
    };
    zo.displayName = 'MdWatch';
    var mo = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M3 4V1h2v3h3v2H5v3H3V6H0V4h3zm3 6V7h3V4h7l1.83 2H21c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V10h3zm7 9c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-3.2-5c0 1.77 1.43 3.2 3.2 3.2s3.2-1.43 3.2-3.2-1.43-3.2-3.2-3.2-3.2 1.43-3.2 3.2z',
            },
          },
        ],
      })(t);
    };
    mo.displayName = 'MdAddAPhoto';
    var po = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z',
            },
          },
        ],
      })(t);
    };
    po.displayName = 'MdAddToPhotos';
    var fo = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z',
            },
          },
        ],
      })(t);
    };
    fo.displayName = 'MdAdjust';
    var Ho = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5.12 10.88L12 17l-1.88-4.12L6 11l4.12-1.88L12 5l1.88 4.12L18 11l-4.12 1.88z',
            },
          },
        ],
      })(t);
    };
    Ho.displayName = 'MdAssistant';
    var Vo = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          { tag: 'path', attr: { d: 'M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z' } },
        ],
      })(t);
    };
    Vo.displayName = 'MdAssistantPhoto';
    var yo = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z',
            },
          },
        ],
      })(t);
    };
    yo.displayName = 'MdAudiotrack';
    var Lo = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M10 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM7 9.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm3 7c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-3-3c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm3-6c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM14 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-1.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm3 6c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm0-4c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm2-3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm0-3.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z',
            },
          },
        ],
      })(t);
    };
    Lo.displayName = 'MdBlurCircular';
    var Bo = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M5 17.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM9 13c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zM3 21h18v-2H3v2zM5 9.5c.83 0 1.5-.67 1.5-1.5S5.83 6.5 5 6.5 3.5 7.17 3.5 8 4.17 9.5 5 9.5zm0 4c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM9 17c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm8-.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM3 3v2h18V3H3zm14 5.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm0 4c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM13 9c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z',
            },
          },
        ],
      })(t);
    };
    Bo.displayName = 'MdBlurLinear';
    var wo = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M14 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-.2 4.48l.2.02c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5l.02.2c.09.67.61 1.19 1.28 1.28zM14 3.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm-4 0c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm11 7c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM10 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm8 8c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-4 13.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM2.5 5.27l3.78 3.78L6 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1c0-.1-.03-.19-.06-.28l2.81 2.81c-.71.11-1.25.73-1.25 1.47 0 .83.67 1.5 1.5 1.5.74 0 1.36-.54 1.47-1.25l2.81 2.81c-.09-.03-.18-.06-.28-.06-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1c0-.1-.03-.19-.06-.28l3.78 3.78L20 20.23 3.77 4 2.5 5.27zM10 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm11-3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM6 13c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM3 9.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm7 11c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM6 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-3-3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5z',
            },
          },
        ],
      })(t);
    };
    wo.displayName = 'MdBlurOff';
    var xo = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M6 13c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-3 .5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM6 5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm15 5.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM14 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-3.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm-11 10c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm7 7c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm0-17c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM10 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 5.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm8 .5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm3 8.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM14 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-4-12c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0 8.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4-4.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-4c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z',
            },
          },
        ],
      })(t);
    };
    xo.displayName = 'MdBlurOn';
    var No = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [{ tag: 'circle', attr: { cx: '12', cy: '12', r: '10' } }],
      })(t);
    };
    No.displayName = 'MdBrightness1';
    var Co = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M10 2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z',
            },
          },
        ],
      })(t);
    };
    Co.displayName = 'MdBrightness2';
    var So = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z',
            },
          },
        ],
      })(t);
    };
    So.displayName = 'MdBrightness3';
    var Ao = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6z',
            },
          },
        ],
      })(t);
    };
    Ao.displayName = 'MdBrightness4';
    var bo = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z',
            },
          },
        ],
      })(t);
    };
    bo.displayName = 'MdBrightness5';
    var Po = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6z',
            },
          },
        ],
      })(t);
    };
    Po.displayName = 'MdBrightness6';
    var Fo = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z',
            },
          },
        ],
      })(t);
    };
    Fo.displayName = 'MdBrightness7';
    var ko = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 5v6.59l-3-3.01-4 4.01-4-4-4 4-3-3.01V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2zm-3 6.42l3 3.01V19c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-6.58l3 2.99 4-4 4 4 4-3.99z',
            },
          },
        ],
      })(t);
    };
    ko.displayName = 'MdBrokenImage';
    var Oo = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z',
            },
          },
        ],
      })(t);
    };
    Oo.displayName = 'MdBrush';
    var To = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M1 5h2v14H1zm4 0h2v14H5zm17 0H10c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM11 17l2.5-3.15L15.29 16l2.5-3.22L21 17H11z',
            },
          },
        ],
      })(t);
    };
    To.displayName = 'MdBurstMode';
    var Ro = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M9.4 10.5l4.77-8.26C13.47 2.09 12.75 2 12 2c-2.4 0-4.6.85-6.32 2.25l3.66 6.35.06-.1zM21.54 9c-.92-2.92-3.15-5.26-6-6.34L11.88 9h9.66zm.26 1h-7.49l.29.5 4.76 8.25C21 16.97 22 14.61 22 12c0-.69-.07-1.35-.2-2zM8.54 12l-3.9-6.75C3.01 7.03 2 9.39 2 12c0 .69.07 1.35.2 2h7.49l-1.15-2zm-6.08 3c.92 2.92 3.15 5.26 6 6.34L12.12 15H2.46zm11.27 0l-3.9 6.76c.7.15 1.42.24 2.17.24 2.4 0 4.6-.85 6.32-2.25l-3.66-6.35-.93 1.6z',
            },
          },
        ],
      })(t);
    };
    Ro.displayName = 'MdCamera';
    var Do = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          { tag: 'circle', attr: { cx: '12', cy: '12', r: '3.2' } },
          {
            tag: 'path',
            attr: {
              d:
                'M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z',
            },
          },
        ],
      })(t);
    };
    Do.displayName = 'MdCameraAlt';
    var Io = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M10 20H5v2h5v2l3-3-3-3v2zm4 0v2h5v-2h-5zM12 8c1.1 0 2-.9 2-2s-.9-2-2-2-1.99.9-1.99 2S10.9 8 12 8zm5-8H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM7 2h10v10.5c0-1.67-3.33-2.5-5-2.5s-5 .83-5 2.5V2z',
            },
          },
        ],
      })(t);
    };
    Io.displayName = 'MdCameraFront';
    var Eo = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M10 20H5v2h5v2l3-3-3-3v2zm4 0v2h5v-2h-5zm3-20H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm-5 6c-1.11 0-2-.9-2-2s.89-2 1.99-2 2 .9 2 2C14 5.1 13.1 6 12 6z',
            },
          },
        ],
      })(t);
    };
    Eo.displayName = 'MdCameraRear';
    var Wo = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M14 5c0-1.1-.9-2-2-2h-1V2c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v1H4c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2h8V5h-8zm-2 13h-2v-2h2v2zm0-9h-2V7h2v2zm4 9h-2v-2h2v2zm0-9h-2V7h2v2zm4 9h-2v-2h2v2zm0-9h-2V7h2v2z',
            },
          },
        ],
      })(t);
    };
    Wo.displayName = 'MdCameraRoll';
    var Uo = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-7 7H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4z',
            },
          },
        ],
      })(t);
    };
    Uo.displayName = 'MdCenterFocusStrong';
    var Go = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z',
            },
          },
        ],
      })(t);
    };
    Go.displayName = 'MdCenterFocusWeak';
    var jo = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z',
            },
          },
        ],
      })(t);
    };
    jo.displayName = 'MdCollections';
    var _o = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 10l-2.5-1.5L15 12V4h5v8z',
            },
          },
        ],
      })(t);
    };
    _o.displayName = 'MdCollectionsBookmark';
    var Ko = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z',
            },
          },
        ],
      })(t);
    };
    Ko.displayName = 'MdColorLens';
    var Qo = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20.71 5.63l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42zM6.92 19L5 17.08l8.06-8.06 1.92 1.92L6.92 19z',
            },
          },
        ],
      })(t);
    };
    Qo.displayName = 'MdColorize';
    var qo = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M10 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v2h2V1h-2v2zm0 15H5l5-6v6zm9-15h-5v2h5v13l-5-6v9h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z',
            },
          },
        ],
      })(t);
    };
    qo.displayName = 'MdCompare';
    var Zo = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z',
            },
          },
        ],
      })(t);
    };
    Zo.displayName = 'MdControlPoint';
    var Jo = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M16 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM2 12c0-2.79 1.64-5.2 4.01-6.32V3.52C2.52 4.76 0 8.09 0 12s2.52 7.24 6.01 8.48v-2.16C3.64 17.2 2 14.79 2 12zm13-9c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z',
            },
          },
        ],
      })(t);
    };
    Jo.displayName = 'MdControlPointDuplicate';
    var $o = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z',
            },
          },
        ],
      })(t);
    };
    $o.displayName = 'MdCrop169';
    var Yo = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M17 15h2V7c0-1.1-.9-2-2-2H9v2h8v8zM7 17V1H5v4H1v2h4v10c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7z',
            },
          },
        ],
      })(t);
    };
    Yo.displayName = 'MdCrop';
    var Xo = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 4H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H5V6h14v12z',
            },
          },
        ],
      })(t);
    };
    Xo.displayName = 'MdCrop32';
    var tl = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 12H5V7h14v10z',
            },
          },
        ],
      })(t);
    };
    tl.displayName = 'MdCrop54';
    var al = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H5V9h14v6z',
            },
          },
        ],
      })(t);
    };
    al.displayName = 'MdCrop75';
    var rl = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z',
            },
          },
        ],
      })(t);
    };
    rl.displayName = 'MdCropDin';
    var nl = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M3 5v4h2V5h4V3H5c-1.1 0-2 .9-2 2zm2 10H3v4c0 1.1.9 2 2 2h4v-2H5v-4zm14 4h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zm0-16h-4v2h4v4h2V5c0-1.1-.9-2-2-2z',
            },
          },
        ],
      })(t);
    };
    nl.displayName = 'MdCropFree';
    var cl = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 12H5V7h14v10z',
            },
          },
        ],
      })(t);
    };
    cl.displayName = 'MdCropLandscape';
    var el = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z',
            },
          },
        ],
      })(t);
    };
    el.displayName = 'MdCropOriginal';
    var vl = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M17 3H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7V5h10v14z',
            },
          },
        ],
      })(t);
    };
    vl.displayName = 'MdCropPortrait';
    var il = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M7.47 21.49C4.2 19.93 1.86 16.76 1.5 13H0c.51 6.16 5.66 11 11.95 11 .23 0 .44-.02.66-.03L8.8 20.15l-1.33 1.34zM12.05 0c-.23 0-.44.02-.66.04l3.81 3.81 1.33-1.33C19.8 4.07 22.14 7.24 22.5 11H24c-.51-6.16-5.66-11-11.95-11zM16 14h2V8c0-1.11-.9-2-2-2h-6v2h6v6zm-8 2V4H6v2H4v2h2v8c0 1.1.89 2 2 2h8v2h2v-2h2v-2H8z',
            },
          },
        ],
      })(t);
    };
    il.displayName = 'MdCropRotate';
    var dl = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H6V6h12v12z',
            },
          },
        ],
      })(t);
    };
    dl.displayName = 'MdCropSquare';
    var hl = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: { d: 'M2 15.5v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20v-2H2z' },
          },
        ],
      })(t);
    };
    hl.displayName = 'MdDehaze';
    var ol = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: { d: 'M3 4l9 16 9-16H3zm3.38 2h11.25L12 16 6.38 6z' },
          },
        ],
      })(t);
    };
    ol.displayName = 'MdDetails';
    var ll = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z',
            },
          },
        ],
      })(t);
    };
    ll.displayName = 'MdEdit';
    var ul = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M15 17v2h2v-2h2v-2h-2v-2h-2v2h-2v2h2zm5-15H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM5 5h6v2H5V5zm15 15H4L20 4v16z',
            },
          },
        ],
      })(t);
    };
    ul.displayName = 'MdExposure';
    var sl = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d: 'M4 11v2h8v-2H4zm15 7h-2V7.38L14 8.4V6.7L18.7 5h.3v13z',
            },
          },
        ],
      })(t);
    };
    sl.displayName = 'MdExposureNeg1';
    var Ml = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M15.05 16.29l2.86-3.07c.38-.39.72-.79 1.04-1.18.32-.39.59-.78.82-1.17.23-.39.41-.78.54-1.17s.19-.79.19-1.18c0-.53-.09-1.02-.27-1.46-.18-.44-.44-.81-.78-1.11-.34-.31-.77-.54-1.26-.71-.51-.16-1.08-.24-1.72-.24-.69 0-1.31.11-1.85.32-.54.21-1 .51-1.36.88-.37.37-.65.8-.84 1.3-.18.47-.27.97-.28 1.5h2.14c.01-.31.05-.6.13-.87.09-.29.23-.54.4-.75.18-.21.41-.37.68-.49.27-.12.6-.18.96-.18.31 0 .58.05.81.15.23.1.43.25.59.43.16.18.28.4.37.65.08.25.13.52.13.81 0 .22-.03.43-.08.65-.06.22-.15.45-.29.7-.14.25-.32.53-.56.83-.23.3-.52.65-.88 1.03l-4.17 4.55V18H21v-1.71h-5.95zM2 11v2h8v-2H2z',
            },
          },
        ],
      })(t);
    };
    Ml.displayName = 'MdExposureNeg2';
    var gl = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M10 7H8v4H4v2h4v4h2v-4h4v-2h-4V7zm10 11h-2V7.38L15 8.4V6.7L19.7 5h.3v13z',
            },
          },
        ],
      })(t);
    };
    gl.displayName = 'MdExposurePlus1';
    var zl = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M16.05 16.29l2.86-3.07c.38-.39.72-.79 1.04-1.18.32-.39.59-.78.82-1.17.23-.39.41-.78.54-1.17.13-.39.19-.79.19-1.18 0-.53-.09-1.02-.27-1.46-.18-.44-.44-.81-.78-1.11-.34-.31-.77-.54-1.26-.71-.51-.16-1.08-.24-1.72-.24-.69 0-1.31.11-1.85.32-.54.21-1 .51-1.36.88-.37.37-.65.8-.84 1.3-.18.47-.27.97-.28 1.5h2.14c.01-.31.05-.6.13-.87.09-.29.23-.54.4-.75.18-.21.41-.37.68-.49.27-.12.6-.18.96-.18.31 0 .58.05.81.15.23.1.43.25.59.43.16.18.28.4.37.65.08.25.13.52.13.81 0 .22-.03.43-.08.65-.06.22-.15.45-.29.7-.14.25-.32.53-.56.83-.23.3-.52.65-.88 1.03l-4.17 4.55V18H22v-1.71h-5.95zM8 7H6v4H2v2h4v4h2v-4h4v-2H8V7z',
            },
          },
        ],
      })(t);
    };
    zl.displayName = 'MdExposurePlus2';
    var ml = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M16.14 12.5c0 1-.1 1.85-.3 2.55-.2.7-.48 1.27-.83 1.7-.36.44-.79.75-1.3.95-.51.2-1.07.3-1.7.3-.62 0-1.18-.1-1.69-.3-.51-.2-.95-.51-1.31-.95-.36-.44-.65-1.01-.85-1.7-.2-.7-.3-1.55-.3-2.55v-2.04c0-1 .1-1.85.3-2.55.2-.7.48-1.26.84-1.69.36-.43.8-.74 1.31-.93C10.81 5.1 11.38 5 12 5c.63 0 1.19.1 1.7.29.51.19.95.5 1.31.93.36.43.64.99.84 1.69.2.7.3 1.54.3 2.55v2.04zm-2.11-2.36c0-.64-.05-1.18-.13-1.62-.09-.44-.22-.79-.4-1.06-.17-.27-.39-.46-.64-.58-.25-.13-.54-.19-.86-.19-.32 0-.61.06-.86.18s-.47.31-.64.58c-.17.27-.31.62-.4 1.06s-.13.98-.13 1.62v2.67c0 .64.05 1.18.14 1.62.09.45.23.81.4 1.09s.39.48.64.61.54.19.87.19c.33 0 .62-.06.87-.19s.46-.33.63-.61c.17-.28.3-.64.39-1.09.09-.45.13-.99.13-1.62v-2.66z',
            },
          },
        ],
      })(t);
    };
    ml.displayName = 'MdExposureZero';
    var pl = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm11 10h2V5h-4v2h2v8zm7-14H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z',
            },
          },
        ],
      })(t);
    };
    pl.displayName = 'MdFilter1';
    var fl = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-4-4h-4v-2h2c1.1 0 2-.89 2-2V7c0-1.11-.9-2-2-2h-4v2h4v2h-2c-1.1 0-2 .89-2 2v4h6v-2z',
            },
          },
        ],
      })(t);
    };
    fl.displayName = 'MdFilter2';
    var Hl = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M15.96 10.29l-2.75 3.54-1.96-2.36L8.5 15h11l-3.54-4.71zM3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z',
            },
          },
        ],
      })(t);
    };
    Hl.displayName = 'MdFilter';
    var Vl = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zM3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm14 8v-1.5c0-.83-.67-1.5-1.5-1.5.83 0 1.5-.67 1.5-1.5V7c0-1.11-.9-2-2-2h-4v2h4v2h-2v2h2v2h-4v2h4c1.1 0 2-.89 2-2z',
            },
          },
        ],
      })(t);
    };
    Vl.displayName = 'MdFilter3';
    var yl = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm12 10h2V5h-2v4h-2V5h-2v6h4v4zm6-14H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z',
            },
          },
        ],
      })(t);
    };
    yl.displayName = 'MdFilter4';
    var Ll = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zM3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm14 8v-2c0-1.11-.9-2-2-2h-2V7h4V5h-6v6h4v2h-4v2h4c1.1 0 2-.89 2-2z',
            },
          },
        ],
      })(t);
    };
    Ll.displayName = 'MdFilter5';
    var Bl = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-8-2h2c1.1 0 2-.89 2-2v-2c0-1.11-.9-2-2-2h-2V7h4V5h-4c-1.1 0-2 .89-2 2v6c0 1.11.9 2 2 2zm0-4h2v2h-2v-2z',
            },
          },
        ],
      })(t);
    };
    Bl.displayName = 'MdFilter6';
    var wl = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-8-2l4-8V5h-6v2h4l-4 8h2z',
            },
          },
        ],
      })(t);
    };
    wl.displayName = 'MdFilter7';
    var xl = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-8-2h2c1.1 0 2-.89 2-2v-1.5c0-.83-.67-1.5-1.5-1.5.83 0 1.5-.67 1.5-1.5V7c0-1.11-.9-2-2-2h-2c-1.1 0-2 .89-2 2v1.5c0 .83.67 1.5 1.5 1.5-.83 0-1.5.67-1.5 1.5V13c0 1.11.9 2 2 2zm0-8h2v2h-2V7zm0 4h2v2h-2v-2z',
            },
          },
        ],
      })(t);
    };
    xl.displayName = 'MdFilter8';
    var Nl = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zM15 5h-2c-1.1 0-2 .89-2 2v2c0 1.11.9 2 2 2h2v2h-4v2h4c1.1 0 2-.89 2-2V7c0-1.11-.9-2-2-2zm0 4h-2V7h2v2z',
            },
          },
        ],
      })(t);
    };
    Nl.displayName = 'MdFilter9';
    var Cl = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm11 7V8c0-1.11-.9-2-2-2h-1c-1.1 0-2 .89-2 2v1c0 1.11.9 2 2 2h1v1H9v2h3c1.1 0 2-.89 2-2zm-3-3V8h1v1h-1zm10-8H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 8h-2V7h-2v2h-2v2h2v2h2v-2h2v6H7V3h14v6z',
            },
          },
        ],
      })(t);
    };
    Cl.displayName = 'MdFilter9Plus';
    var Sl = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16l-7-8v8H5l7-8V5h7v14z',
            },
          },
        ],
      })(t);
    };
    Sl.displayName = 'MdFilterBAndW';
    var Al = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zM12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z',
            },
          },
        ],
      })(t);
    };
    Al.displayName = 'MdFilterCenterFocus';
    var bl = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.61 5.64 5.36 8.04 2.35 8.36 0 10.9 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4h2c0-2.76-1.86-5.08-4.4-5.78C8.61 6.88 10.2 6 12 6c3.03 0 5.5 2.47 5.5 5.5v.5H19c1.65 0 3 1.35 3 3s-1.35 3-3 3z',
            },
          },
        ],
      })(t);
    };
    bl.displayName = 'MdFilterDrama';
    var Pl = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 4h-4l-4-4-4 4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H4V6h4.52l3.52-3.5L15.52 6H20v14zM18 8H6v10h12',
            },
          },
        ],
      })(t);
    };
    Pl.displayName = 'MdFilterFrames';
    var Fl = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z',
            },
          },
        ],
      })(t);
    };
    Fl.displayName = 'MdFilterHdr';
    var kl = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z',
            },
          },
        ],
      })(t);
    };
    kl.displayName = 'MdFilterNone';
    var Ol = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69c1.11-.86 2.44-1.44 3.9-1.62zm7.32.19C16.84 3.05 15.01 2.25 13 2.05v2.02c1.46.18 2.79.76 3.9 1.62l1.42-1.43zM19.93 11h2.02c-.2-2.01-1-3.84-2.21-5.32L18.31 7.1c.86 1.11 1.44 2.44 1.62 3.9zM5.69 7.1L4.26 5.68C3.05 7.16 2.25 8.99 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9zM4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43c-.86-1.1-1.44-2.43-1.62-3.89zM15 12c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zm3.31 4.9l1.43 1.43c1.21-1.48 2.01-3.32 2.21-5.32h-2.02c-.18 1.45-.76 2.78-1.62 3.89zM13 19.93v2.02c2.01-.2 3.84-1 5.32-2.21l-1.43-1.43c-1.1.86-2.43 1.44-3.89 1.62zm-7.32-.19C7.16 20.95 9 21.75 11 21.95v-2.02c-1.46-.18-2.79-.76-3.9-1.62l-1.42 1.43z',
            },
          },
        ],
      })(t);
    };
    Ol.displayName = 'MdFilterTiltShift';
    var Tl = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M18.7 12.4c-.28-.16-.57-.29-.86-.4.29-.11.58-.24.86-.4 1.92-1.11 2.99-3.12 3-5.19-1.79-1.03-4.07-1.11-6 0-.28.16-.54.35-.78.54.05-.31.08-.63.08-.95 0-2.22-1.21-4.15-3-5.19C10.21 1.85 9 3.78 9 6c0 .32.03.64.08.95-.24-.2-.5-.39-.78-.55-1.92-1.11-4.2-1.03-6 0 0 2.07 1.07 4.08 3 5.19.28.16.57.29.86.4-.29.11-.58.24-.86.4-1.92 1.11-2.99 3.12-3 5.19 1.79 1.03 4.07 1.11 6 0 .28-.16.54-.35.78-.54-.05.32-.08.64-.08.96 0 2.22 1.21 4.15 3 5.19 1.79-1.04 3-2.97 3-5.19 0-.32-.03-.64-.08-.95.24.2.5.38.78.54 1.92 1.11 4.2 1.03 6 0-.01-2.07-1.08-4.08-3-5.19zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z',
            },
          },
        ],
      })(t);
    };
    Tl.displayName = 'MdFilterVintage';
    var Rl = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M7 11H1v2h6v-2zm2.17-3.24L7.05 5.64 5.64 7.05l2.12 2.12 1.41-1.41zM13 1h-2v6h2V1zm5.36 6.05l-1.41-1.41-2.12 2.12 1.41 1.41 2.12-2.12zM17 11v2h6v-2h-6zm-5-2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm2.83 7.24l2.12 2.12 1.41-1.41-2.12-2.12-1.41 1.41zm-9.19.71l1.41 1.41 2.12-2.12-1.41-1.41-2.12 2.12zM11 23h2v-6h-2v6z',
            },
          },
        ],
      })(t);
    };
    Rl.displayName = 'MdFlare';
    var Dl = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M3 2v12h3v9l7-12H9l4-9H3zm16 0h-2l-3.2 9h1.9l.7-2h3.2l.7 2h1.9L19 2zm-2.15 5.65L18 4l1.15 3.65h-2.3z',
            },
          },
        ],
      })(t);
    };
    Dl.displayName = 'MdFlashAuto';
    var Il = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M3.27 3L2 4.27l5 5V13h3v9l3.58-6.14L17.73 20 19 18.73 3.27 3zM17 10h-4l4-8H7v2.18l8.46 8.46L17 10z',
            },
          },
        ],
      })(t);
    };
    Il.displayName = 'MdFlashOff';
    var El = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [{ tag: 'path', attr: { d: 'M7 2v11h3v9l7-12h-4l4-8z' } }],
      })(t);
    };
    El.displayName = 'MdFlashOn';
    var Wl = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M15 21h2v-2h-2v2zm4-12h2V7h-2v2zM3 5v14c0 1.1.9 2 2 2h4v-2H5V5h4V3H5c-1.1 0-2 .9-2 2zm16-2v2h2c0-1.1-.9-2-2-2zm-8 20h2V1h-2v22zm8-6h2v-2h-2v2zM15 5h2V3h-2v2zm4 8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2z',
            },
          },
        ],
      })(t);
    };
    Wl.displayName = 'MdFlip';
    var Ul = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M11 9h2v2h-2zm-2 2h2v2H9zm4 0h2v2h-2zm2-2h2v2h-2zM7 9h2v2H7zm12-6H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 18H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm2-7h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2H9v-2H7v2H5v-2h2v-2H5V5h14v6z',
            },
          },
        ],
      })(t);
    };
    Ul.displayName = 'MdGradient';
    var Gl = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M10 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-4 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
            },
          },
        ],
      })(t);
    };
    Gl.displayName = 'MdGrain';
    var jl = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M8 4v1.45l2 2V4h4v4h-3.45l2 2H14v1.45l2 2V10h4v4h-3.45l2 2H20v1.45l2 2V4c0-1.1-.9-2-2-2H4.55l2 2H8zm8 0h4v4h-4V4zM1.27 1.27L0 2.55l2 2V20c0 1.1.9 2 2 2h15.46l2 2 1.27-1.27L1.27 1.27zM10 12.55L11.45 14H10v-1.45zm-6-6L5.45 8H4V6.55zM8 20H4v-4h4v4zm0-6H4v-4h3.45l.55.55V14zm6 6h-4v-4h3.45l.55.54V20zm2 0v-1.46L17.46 20H16z',
            },
          },
        ],
      })(t);
    };
    jl.displayName = 'MdGridOff';
    var _l = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z',
            },
          },
        ],
      })(t);
    };
    _l.displayName = 'MdGridOn';
    var Kl = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M17.5 15v-2h1.1l.9 2H21l-.9-2.1c.5-.2.9-.8.9-1.4v-1c0-.8-.7-1.5-1.5-1.5H16v4.9l1.1 1.1h.4zm0-4.5h2v1h-2v-1zm-4.5 0v.4l1.5 1.5v-1.9c0-.8-.7-1.5-1.5-1.5h-1.9l1.5 1.5h.4zm-3.5-1l-7-7-1.1 1L6.9 9h-.4v2h-2V9H3v6h1.5v-2.5h2V15H8v-4.9l1.5 1.5V15h3.4l7.6 7.6 1.1-1.1-12.1-12z',
            },
          },
        ],
      })(t);
    };
    Kl.displayName = 'MdHdrOff';
    var Ql = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 11.5v-1c0-.8-.7-1.5-1.5-1.5H16v6h1.5v-2h1.1l.9 2H21l-.9-2.1c.5-.3.9-.8.9-1.4zm-1.5 0h-2v-1h2v1zm-13-.5h-2V9H3v6h1.5v-2.5h2V15H8V9H6.5v2zM13 9H9.5v6H13c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zm0 4.5h-2v-3h2v3z',
            },
          },
        ],
      })(t);
    };
    Ql.displayName = 'MdHdrOn';
    var ql = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M17 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zM5 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z',
            },
          },
        ],
      })(t);
    };
    ql.displayName = 'MdHdrStrong';
    var Zl = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M5 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm12-2c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z',
            },
          },
        ],
      })(t);
    };
    Zl.displayName = 'MdHdrWeak';
    var Jl = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M17.73 12.02l3.98-3.98c.39-.39.39-1.02 0-1.41l-4.34-4.34c-.39-.39-1.02-.39-1.41 0l-3.98 3.98L8 2.29C7.8 2.1 7.55 2 7.29 2c-.25 0-.51.1-.7.29L2.25 6.63c-.39.39-.39 1.02 0 1.41l3.98 3.98L2.25 16c-.39.39-.39 1.02 0 1.41l4.34 4.34c.39.39 1.02.39 1.41 0l3.98-3.98 3.98 3.98c.2.2.45.29.71.29.26 0 .51-.1.71-.29l4.34-4.34c.39-.39.39-1.02 0-1.41l-3.99-3.98zM12 9c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-4.71 1.96L3.66 7.34l3.63-3.63 3.62 3.62-3.62 3.63zM10 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2.66 9.34l-3.63-3.62 3.63-3.63 3.62 3.62-3.62 3.63z',
            },
          },
        ],
      })(t);
    };
    Jl.displayName = 'MdHealing';
    var $l = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z',
            },
          },
        ],
      })(t);
    };
    $l.displayName = 'MdImage';
    var Yl = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M16 10h-2v2h2v-2zm0 4h-2v2h2v-2zm-8-4H6v2h2v-2zm4 0h-2v2h2v-2zm8-6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z',
            },
          },
        ],
      })(t);
    };
    Yl.displayName = 'MdImageAspectRatio';
    var Xl = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5.5 7.5h2v-2H9v2h2V9H9v2H7.5V9h-2V7.5zM19 19H5L19 5v14zm-2-2v-1.5h-5V17h5z',
            },
          },
        ],
      })(t);
    };
    Xl.displayName = 'MdIso';
    var tu = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z',
            },
          },
        ],
      })(t);
    };
    tu.displayName = 'MdLandscape';
    var au = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M6 3H3v3c1.66 0 3-1.34 3-3zm8 0h-2c0 4.97-4.03 9-9 9v2c6.08 0 11-4.93 11-11zm-4 0H8c0 2.76-2.24 5-5 5v2c3.87 0 7-3.13 7-7zm0 18h2c0-4.97 4.03-9 9-9v-2c-6.07 0-11 4.93-11 11zm8 0h3v-3c-1.66 0-3 1.34-3 3zm-4 0h2c0-2.76 2.24-5 5-5v-2c-3.87 0-7 3.13-7 7z',
            },
          },
        ],
      })(t);
    };
    au.displayName = 'MdLeakAdd';
    var ru = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M10 3H8c0 .37-.04.72-.12 1.06l1.59 1.59C9.81 4.84 10 3.94 10 3zM3 4.27l2.84 2.84C5.03 7.67 4.06 8 3 8v2c1.61 0 3.09-.55 4.27-1.46L8.7 9.97C7.14 11.24 5.16 12 3 12v2c2.71 0 5.19-.99 7.11-2.62l2.5 2.5C10.99 15.81 10 18.29 10 21h2c0-2.16.76-4.14 2.03-5.69l1.43 1.43C14.55 17.91 14 19.39 14 21h2c0-1.06.33-2.03.89-2.84L19.73 21 21 19.73 4.27 3 3 4.27zM14 3h-2c0 1.5-.37 2.91-1.02 4.16l1.46 1.46C13.42 6.98 14 5.06 14 3zm5.94 13.12c.34-.08.69-.12 1.06-.12v-2c-.94 0-1.84.19-2.66.52l1.6 1.6zm-4.56-4.56l1.46 1.46C18.09 12.37 19.5 12 21 12v-2c-2.06 0-3.98.58-5.62 1.56z',
            },
          },
        ],
      })(t);
    };
    ru.displayName = 'MdLeakRemove';
    var nu = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z',
            },
          },
        ],
      })(t);
    };
    nu.displayName = 'MdLens';
    var cu = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          { tag: 'circle', attr: { cx: '12', cy: '14', r: '3.2' } },
          {
            tag: 'path',
            attr: {
              d:
                'M16 3.33c2.58 0 4.67 2.09 4.67 4.67H22c0-3.31-2.69-6-6-6v1.33M16 6c1.11 0 2 .89 2 2h1.33c0-1.84-1.49-3.33-3.33-3.33V6',
            },
          },
          {
            tag: 'path',
            attr: {
              d:
                'M17 9c0-1.11-.89-2-2-2V4H9L7.17 6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9h-5zm-5 10c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z',
            },
          },
        ],
      })(t);
    };
    cu.displayName = 'MdLinkedCamera';
    var eu = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 10c-3.86 0-7 3.14-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.86-3.14-7-7-7zm0-4C5.93 6 1 10.93 1 17h2c0-4.96 4.04-9 9-9s9 4.04 9 9h2c0-6.07-4.93-11-11-11z',
            },
          },
        ],
      })(t);
    };
    eu.displayName = 'MdLooks';
    var vu = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19.01 3h-14c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 7.5c0 .83-.67 1.5-1.5 1.5.83 0 1.5.67 1.5 1.5V15c0 1.11-.9 2-2 2h-4v-2h4v-2h-2v-2h2V9h-4V7h4c1.1 0 2 .89 2 2v1.5z',
            },
          },
        ],
      })(t);
    };
    vu.displayName = 'MdLooks3';
    var iu = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 14h-2v-4H9V7h2v4h2V7h2v10z',
            },
          },
        ],
      })(t);
    };
    iu.displayName = 'MdLooks4';
    var du = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h2c1.1 0 2 .89 2 2v2c0 1.11-.9 2-2 2H9v-2h4v-2H9V7h6v2z',
            },
          },
        ],
      })(t);
    };
    du.displayName = 'MdLooks5';
    var hu = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M11 15h2v-2h-2v2zm8-12H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h2c1.1 0 2 .89 2 2v2c0 1.11-.9 2-2 2h-2c-1.1 0-2-.89-2-2V9c0-1.11.9-2 2-2h4v2z',
            },
          },
        ],
      })(t);
    };
    hu.displayName = 'MdLooks6';
    var ou = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z',
            },
          },
        ],
      })(t);
    };
    ou.displayName = 'MdLooksOne';
    var lu = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 8c0 1.11-.9 2-2 2h-2v2h4v2H9v-4c0-1.11.9-2 2-2h2V9H9V7h4c1.1 0 2 .89 2 2v2z',
            },
          },
        ],
      })(t);
    };
    lu.displayName = 'MdLooksTwo';
    var uu = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.49 2 2 6.49 2 12s4.49 10 10 10h8c1.1 0 2-.9 2-2v-8c0-5.51-4.49-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z',
            },
          },
        ],
      })(t);
    };
    uu.displayName = 'MdLoupe';
    var su = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 5h-3.2L15 3H9L7.2 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 14h-8v-1c-2.8 0-5-2.2-5-5s2.2-5 5-5V7h8v12zm-3-6c0-2.8-2.2-5-5-5v1.8c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2V18c2.8 0 5-2.2 5-5zm-8.2 0c0 1.8 1.4 3.2 3.2 3.2V9.8c-1.8 0-3.2 1.4-3.2 3.2z',
            },
          },
        ],
      })(t);
    };
    su.displayName = 'MdMonochromePhotos';
    var Mu = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z',
            },
          },
        ],
      })(t);
    };
    Mu.displayName = 'MdMovieCreation';
    var gu = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M18 4l2 3h-3l-2-3h-2l2 3h-3l-2-3H8l2 3H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4zm-6.75 11.25L10 18l-1.25-2.75L6 14l2.75-1.25L10 10l1.25 2.75L14 14l-2.75 1.25zm5.69-3.31L16 14l-.94-2.06L13 11l2.06-.94L16 8l.94 2.06L19 11l-2.06.94z',
            },
          },
        ],
      })(t);
    };
    gu.displayName = 'MdMovieFilter';
    var zu = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z',
            },
          },
        ],
      })(t);
    };
    zu.displayName = 'MdMusicNote';
    var mu = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M13 16.12c3.47-.41 6.17-3.36 6.17-6.95 0-3.87-3.13-7-7-7s-7 3.13-7 7c0 3.47 2.52 6.34 5.83 6.89V20H5v2h14v-2h-6v-3.88z',
            },
          },
        ],
      })(t);
    };
    mu.displayName = 'MdNature';
    var pu = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M22.17 9.17c0-3.87-3.13-7-7-7s-7 3.13-7 7c0 3.47 2.52 6.34 5.83 6.89V20H6v-3h1v-4c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v4h1v5h16v-2h-3v-3.88c3.47-.41 6.17-3.36 6.17-6.95zM4.5 11c.83 0 1.5-.67 1.5-1.5S5.33 8 4.5 8 3 8.67 3 9.5 3.67 11 4.5 11z',
            },
          },
        ],
      })(t);
    };
    pu.displayName = 'MdNaturePeople';
    var fu = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: { d: 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z' },
          },
        ],
      })(t);
    };
    fu.displayName = 'MdNavigateBefore';
    var Hu = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: { d: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' },
          },
        ],
      })(t);
    };
    Hu.displayName = 'MdNavigateNext';
    var Vu = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z',
            },
          },
        ],
      })(t);
    };
    Vu.displayName = 'MdPalette';
    var yu = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M23 18V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zM8.5 12.5l2.5 3.01L14.5 11l4.5 6H5l3.5-4.5z',
            },
          },
        ],
      })(t);
    };
    yu.displayName = 'MdPanorama';
    var Lu = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z',
            },
          },
        ],
      })(t);
    };
    Lu.displayName = 'MdPanoramaFishEye';
    var Bu = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 6.54v10.91c-2.6-.77-5.28-1.16-8-1.16-2.72 0-5.4.39-8 1.16V6.54c2.6.77 5.28 1.16 8 1.16 2.72.01 5.4-.38 8-1.16M21.43 4c-.1 0-.2.02-.31.06C18.18 5.16 15.09 5.7 12 5.7c-3.09 0-6.18-.55-9.12-1.64-.11-.04-.22-.06-.31-.06-.34 0-.57.23-.57.63v14.75c0 .39.23.62.57.62.1 0 .2-.02.31-.06 2.94-1.1 6.03-1.64 9.12-1.64 3.09 0 6.18.55 9.12 1.64.11.04.21.06.31.06.33 0 .57-.23.57-.63V4.63c0-.4-.24-.63-.57-.63z',
            },
          },
        ],
      })(t);
    };
    Bu.displayName = 'MdPanoramaHorizontal';
    var wu = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19.94 21.12c-1.1-2.94-1.64-6.03-1.64-9.12 0-3.09.55-6.18 1.64-9.12.04-.11.06-.22.06-.31 0-.34-.23-.57-.63-.57H4.63c-.4 0-.63.23-.63.57 0 .1.02.2.06.31C5.16 5.82 5.71 8.91 5.71 12c0 3.09-.55 6.18-1.64 9.12-.05.11-.07.22-.07.31 0 .33.23.57.63.57h14.75c.39 0 .63-.24.63-.57-.01-.1-.03-.2-.07-.31zM6.54 20c.77-2.6 1.16-5.28 1.16-8 0-2.72-.39-5.4-1.16-8h10.91c-.77 2.6-1.16 5.28-1.16 8 0 2.72.39 5.4 1.16 8H6.54z',
            },
          },
        ],
      })(t);
    };
    wu.displayName = 'MdPanoramaVertical';
    var xu = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 6c2.45 0 4.71.2 7.29.64.47 1.78.71 3.58.71 5.36 0 1.78-.24 3.58-.71 5.36-2.58.44-4.84.64-7.29.64s-4.71-.2-7.29-.64C4.24 15.58 4 13.78 4 12c0-1.78.24-3.58.71-5.36C7.29 6.2 9.55 6 12 6m0-2c-2.73 0-5.22.24-7.95.72l-.93.16-.25.9C2.29 7.85 2 9.93 2 12s.29 4.15.87 6.22l.25.89.93.16c2.73.49 5.22.73 7.95.73s5.22-.24 7.95-.72l.93-.16.25-.89c.58-2.08.87-4.16.87-6.23s-.29-4.15-.87-6.22l-.25-.89-.93-.16C17.22 4.24 14.73 4 12 4z',
            },
          },
        ],
      })(t);
    };
    xu.displayName = 'MdPanoramaWideAngle';
    var Nu = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z',
            },
          },
        ],
      })(t);
    };
    Nu.displayName = 'MdPhoto';
    var Cu = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4zm0 15l3-3.86 2.14 2.58 3-3.86L18 19H6z',
            },
          },
        ],
      })(t);
    };
    Cu.displayName = 'MdPhotoAlbum';
    var Su = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          { tag: 'circle', attr: { cx: '12', cy: '12', r: '3.2' } },
          {
            tag: 'path',
            attr: {
              d:
                'M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z',
            },
          },
        ],
      })(t);
    };
    Su.displayName = 'MdPhotoCamera';
    var Au = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19.02 10v9H5V5h9V3H5.02c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9h-2zM17 10l.94-2.06L20 7l-2.06-.94L17 4l-.94 2.06L14 7l2.06.94zm-3.75.75L12 8l-1.25 2.75L8 12l2.75 1.25L12 16l1.25-2.75L16 12z',
            },
          },
        ],
      })(t);
    };
    Au.displayName = 'MdPhotoFilter';
    var bu = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z',
            },
          },
        ],
      })(t);
    };
    bu.displayName = 'MdPhotoLibrary';
    var Pu = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 3H3C2 3 1 4 1 5v14c0 1.1.9 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2zM5 17l3.5-4.5 2.5 3.01L14.5 11l4.5 6H5z',
            },
          },
        ],
      })(t);
    };
    Pu.displayName = 'MdPhotoSizeSelectActual';
    var Fu = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 15h2v2h-2v-2zm0-4h2v2h-2v-2zm2 8h-2v2c1 0 2-1 2-2zM13 3h2v2h-2V3zm8 4h2v2h-2V7zm0-4v2h2c0-1-1-2-2-2zM1 7h2v2H1V7zm16-4h2v2h-2V3zm0 16h2v2h-2v-2zM3 3C2 3 1 4 1 5h2V3zm6 0h2v2H9V3zM5 3h2v2H5V3zm-4 8v8c0 1.1.9 2 2 2h12V11H1zm2 8l2.5-3.21 1.79 2.15 2.5-3.22L13 19H3z',
            },
          },
        ],
      })(t);
    };
    Fu.displayName = 'MdPhotoSizeSelectLarge';
    var ku = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M23 15h-2v2h2v-2zm0-4h-2v2h2v-2zm0 8h-2v2c1 0 2-1 2-2zM15 3h-2v2h2V3zm8 4h-2v2h2V7zm-2-4v2h2c0-1-1-2-2-2zM3 21h8v-6H1v4c0 1.1.9 2 2 2zM3 7H1v2h2V7zm12 12h-2v2h2v-2zm4-16h-2v2h2V3zm0 16h-2v2h2v-2zM3 3C2 3 1 4 1 5h2V3zm0 8H1v2h2v-2zm8-8H9v2h2V3zM7 3H5v2h2V3z',
            },
          },
        ],
      })(t);
    };
    ku.displayName = 'MdPhotoSizeSelectSmall';
    var Ou = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z',
            },
          },
        ],
      })(t);
    };
    Ou.displayName = 'MdPictureAsPdf';
    var Tu = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 12.25c1.24 0 2.25-1.01 2.25-2.25S13.24 7.75 12 7.75 9.75 8.76 9.75 10s1.01 2.25 2.25 2.25zm4.5 4c0-1.5-3-2.25-4.5-2.25s-4.5.75-4.5 2.25V17h9v-.75zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z',
            },
          },
        ],
      })(t);
    };
    Tu.displayName = 'MdPortrait';
    var Ru = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z',
            },
          },
        ],
      })(t);
    };
    Ru.displayName = 'MdRemoveRedEye';
    var Du = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M7.34 6.41L.86 12.9l6.49 6.48 6.49-6.48-6.5-6.49zM3.69 12.9l3.66-3.66L11 12.9l-3.66 3.66-3.65-3.66zm15.67-6.26C17.61 4.88 15.3 4 13 4V.76L8.76 5 13 9.24V6c1.79 0 3.58.68 4.95 2.05 2.73 2.73 2.73 7.17 0 9.9C16.58 19.32 14.79 20 13 20c-.97 0-1.94-.21-2.84-.61l-1.49 1.49C10.02 21.62 11.51 22 13 22c2.3 0 4.61-.88 6.36-2.64 3.52-3.51 3.52-9.21 0-12.72z',
            },
          },
        ],
      })(t);
    };
    Du.displayName = 'MdRotate90DegreesCcw';
    var Iu = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M7.11 8.53L5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47zM6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47zm1.01 5.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03L7.1 18.32zM13 4.07V1L8.45 5.55 13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93z',
            },
          },
        ],
      })(t);
    };
    Iu.displayName = 'MdRotateLeft';
    var Eu = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M15.55 5.55L11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10l4.55-4.45zM19.93 11c-.17-1.39-.72-2.73-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47h2.02zM13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03zm3.89-2.42l1.42 1.41c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.48z',
            },
          },
        ],
      })(t);
    };
    Eu.displayName = 'MdRotateRight';
    var Wu = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M10 8v8l5-4-5-4zm9-5H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z',
            },
          },
        ],
      })(t);
    };
    Wu.displayName = 'MdSlideshow';
    var Uu = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h2v4h2V8h2v4h2V8h2v4h2V8h2v4h2V8h2v8z',
            },
          },
        ],
      })(t);
    };
    Uu.displayName = 'MdStraighten';
    var Gu = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M2.53 19.65l1.34.56v-9.03l-2.43 5.86c-.41 1.02.08 2.19 1.09 2.61zm19.5-3.7L17.07 3.98c-.31-.75-1.04-1.21-1.81-1.23-.26 0-.53.04-.79.15L7.1 5.95c-.75.31-1.21 1.03-1.23 1.8-.01.27.04.54.15.8l4.96 11.97c.31.76 1.05 1.22 1.83 1.23.26 0 .52-.05.77-.15l7.36-3.05c1.02-.42 1.51-1.59 1.09-2.6zM7.88 8.75c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-2 11c0 1.1.9 2 2 2h1.45l-3.45-8.34v6.34z',
            },
          },
        ],
      })(t);
    };
    Gu.displayName = 'MdStyle';
    var ju = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 11.5V13H9v2.5L5.5 12 9 8.5V11h6V8.5l3.5 3.5-3.5 3.5z',
            },
          },
        ],
      })(t);
    };
    ju.displayName = 'MdSwitchCamera';
    var _u = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M18 9.5V6c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-3.5l4 4v-13l-4 4zm-5 6V13H7v2.5L3.5 12 7 8.5V11h6V8.5l3.5 3.5-3.5 3.5z',
            },
          },
        ],
      })(t);
    };
    _u.displayName = 'MdSwitchVideo';
    var Ku = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z',
            },
          },
        ],
      })(t);
    };
    Ku.displayName = 'MdTagFaces';
    var Qu = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19.51 3.08L3.08 19.51c.09.34.27.65.51.9.25.24.56.42.9.51L20.93 4.49c-.19-.69-.73-1.23-1.42-1.41zM11.88 3L3 11.88v2.83L14.71 3h-2.83zM5 3c-1.1 0-2 .9-2 2v2l4-4H5zm14 18c.55 0 1.05-.22 1.41-.59.37-.36.59-.86.59-1.41v-2l-4 4h2zm-9.71 0h2.83L21 12.12V9.29L9.29 21z',
            },
          },
        ],
      })(t);
    };
    Qu.displayName = 'MdTexture';
    var qu = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M16.24 7.76C15.07 6.59 13.54 6 12 6v6l-4.24 4.24c2.34 2.34 6.14 2.34 8.49 0 2.34-2.34 2.34-6.14-.01-8.48zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
            },
          },
        ],
      })(t);
    };
    qu.displayName = 'MdTimelapse';
    var Zu = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M0 7.72V9.4l3-1V18h2V6h-.25L0 7.72zm23.78 6.65c-.14-.28-.35-.53-.63-.74-.28-.21-.61-.39-1.01-.53s-.85-.27-1.35-.38c-.35-.07-.64-.15-.87-.23-.23-.08-.41-.16-.55-.25-.14-.09-.23-.19-.28-.3-.05-.11-.08-.24-.08-.39 0-.14.03-.28.09-.41.06-.13.15-.25.27-.34.12-.1.27-.18.45-.24s.4-.09.64-.09c.25 0 .47.04.66.11.19.07.35.17.48.29.13.12.22.26.29.42.06.16.1.32.1.49h1.95c0-.39-.08-.75-.24-1.09-.16-.34-.39-.63-.69-.88-.3-.25-.66-.44-1.09-.59C21.49 9.07 21 9 20.46 9c-.51 0-.98.07-1.39.21-.41.14-.77.33-1.06.57-.29.24-.51.52-.67.84-.16.32-.23.65-.23 1.01s.08.69.23.96c.15.28.36.52.64.73.27.21.6.38.98.53.38.14.81.26 1.27.36.39.08.71.17.95.26s.43.19.57.29c.13.1.22.22.27.34.05.12.07.25.07.39 0 .32-.13.57-.4.77-.27.2-.66.29-1.17.29-.22 0-.43-.02-.64-.08-.21-.05-.4-.13-.56-.24-.17-.11-.3-.26-.41-.44-.11-.18-.17-.41-.18-.67h-1.89c0 .36.08.71.24 1.05.16.34.39.65.7.93.31.27.69.49 1.15.66.46.17.98.25 1.58.25.53 0 1.01-.06 1.44-.19.43-.13.8-.31 1.11-.54.31-.23.54-.51.71-.83.17-.32.25-.67.25-1.06-.02-.4-.09-.74-.24-1.02zm-9.96-7.32c-.34-.4-.75-.7-1.23-.88-.47-.18-1.01-.27-1.59-.27-.58 0-1.11.09-1.59.27-.48.18-.89.47-1.23.88-.34.41-.6.93-.79 1.59-.18.65-.28 1.45-.28 2.39v1.92c0 .94.09 1.74.28 2.39.19.66.45 1.19.8 1.6.34.41.75.71 1.23.89.48.18 1.01.28 1.59.28.59 0 1.12-.09 1.59-.28.48-.18.88-.48 1.22-.89.34-.41.6-.94.78-1.6.18-.65.28-1.45.28-2.39v-1.92c0-.94-.09-1.74-.28-2.39-.18-.66-.44-1.19-.78-1.59zm-.92 6.17c0 .6-.04 1.11-.12 1.53-.08.42-.2.76-.36 1.02-.16.26-.36.45-.59.57-.23.12-.51.18-.82.18-.3 0-.58-.06-.82-.18s-.44-.31-.6-.57c-.16-.26-.29-.6-.38-1.02-.09-.42-.13-.93-.13-1.53v-2.5c0-.6.04-1.11.13-1.52.09-.41.21-.74.38-1 .16-.25.36-.43.6-.55.24-.11.51-.17.81-.17.31 0 .58.06.81.17.24.11.44.29.6.55.16.25.29.58.37.99.08.41.13.92.13 1.52v2.51z',
            },
          },
        ],
      })(t);
    };
    Zu.displayName = 'MdTimer10';
    var Ju = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z',
            },
          },
        ],
      })(t);
    };
    Ju.displayName = 'MdTimer';
    var $u = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M11.61 12.97c-.16-.24-.36-.46-.62-.65-.25-.19-.56-.35-.93-.48.3-.14.57-.3.8-.5.23-.2.42-.41.57-.64.15-.23.27-.46.34-.71.08-.24.11-.49.11-.73 0-.55-.09-1.04-.28-1.46-.18-.42-.44-.77-.78-1.06-.33-.28-.73-.5-1.2-.64-.45-.13-.97-.2-1.53-.2-.55 0-1.06.08-1.52.24-.47.17-.87.4-1.2.69-.33.29-.6.63-.78 1.03-.2.39-.29.83-.29 1.29h1.98c0-.26.05-.49.14-.69.09-.2.22-.38.38-.52.17-.14.36-.25.58-.33.22-.08.46-.12.73-.12.61 0 1.06.16 1.36.47.3.31.44.75.44 1.32 0 .27-.04.52-.12.74-.08.22-.21.41-.38.57-.17.16-.38.28-.63.37-.25.09-.55.13-.89.13H6.72v1.57H7.9c.34 0 .64.04.91.11.27.08.5.19.69.35.19.16.34.36.44.61.1.24.16.54.16.87 0 .62-.18 1.09-.53 1.42-.35.33-.84.49-1.45.49-.29 0-.56-.04-.8-.13-.24-.08-.44-.2-.61-.36-.17-.16-.3-.34-.39-.56-.09-.22-.14-.46-.14-.72H4.19c0 .55.11 1.03.32 1.45.21.42.5.77.86 1.05s.77.49 1.24.63.96.21 1.48.21c.57 0 1.09-.08 1.58-.23.49-.15.91-.38 1.26-.68.36-.3.64-.66.84-1.1.2-.43.3-.93.3-1.48 0-.29-.04-.58-.11-.86-.08-.25-.19-.51-.35-.76zm9.26 1.4c-.14-.28-.35-.53-.63-.74-.28-.21-.61-.39-1.01-.53s-.85-.27-1.35-.38c-.35-.07-.64-.15-.87-.23-.23-.08-.41-.16-.55-.25-.14-.09-.23-.19-.28-.3-.05-.11-.08-.24-.08-.39s.03-.28.09-.41c.06-.13.15-.25.27-.34.12-.1.27-.18.45-.24s.4-.09.64-.09c.25 0 .47.04.66.11.19.07.35.17.48.29.13.12.22.26.29.42.06.16.1.32.1.49h1.95c0-.39-.08-.75-.24-1.09-.16-.34-.39-.63-.69-.88-.3-.25-.66-.44-1.09-.59-.43-.15-.92-.22-1.46-.22-.51 0-.98.07-1.39.21-.41.14-.77.33-1.06.57-.29.24-.51.52-.67.84-.16.32-.23.65-.23 1.01s.08.68.23.96c.15.28.37.52.64.73.27.21.6.38.98.53.38.14.81.26 1.27.36.39.08.71.17.95.26s.43.19.57.29c.13.1.22.22.27.34.05.12.07.25.07.39 0 .32-.13.57-.4.77-.27.2-.66.29-1.17.29-.22 0-.43-.02-.64-.08-.21-.05-.4-.13-.56-.24-.17-.11-.3-.26-.41-.44-.11-.18-.17-.41-.18-.67h-1.89c0 .36.08.71.24 1.05.16.34.39.65.7.93.31.27.69.49 1.15.66.46.17.98.25 1.58.25.53 0 1.01-.06 1.44-.19.43-.13.8-.31 1.11-.54.31-.23.54-.51.71-.83.17-.32.25-.67.25-1.06-.02-.4-.09-.74-.24-1.02z',
            },
          },
        ],
      })(t);
    };
    $u.displayName = 'MdTimer3';
    var Yu = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19.04 4.55l-1.42 1.42C16.07 4.74 14.12 4 12 4c-1.83 0-3.53.55-4.95 1.48l1.46 1.46C9.53 6.35 10.73 6 12 6c3.87 0 7 3.13 7 7 0 1.27-.35 2.47-.94 3.49l1.45 1.45C20.45 16.53 21 14.83 21 13c0-2.12-.74-4.07-1.97-5.61l1.42-1.42-1.41-1.42zM15 1H9v2h6V1zm-4 8.44l2 2V8h-2v1.44zM3.02 4L1.75 5.27 4.5 8.03C3.55 9.45 3 11.16 3 13c0 4.97 4.02 9 9 9 1.84 0 3.55-.55 4.98-1.5l2.5 2.5 1.27-1.27-7.71-7.71L3.02 4zM12 20c-3.87 0-7-3.13-7-7 0-1.28.35-2.48.95-3.52l9.56 9.56c-1.03.61-2.23.96-3.51.96z',
            },
          },
        ],
      })(t);
    };
    Yu.displayName = 'MdTimerOff';
    var Xu = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86zm2-15.86c1.03.13 2 .45 2.87.93H13v-.93zM13 7h5.24c.25.31.48.65.68 1H13V7zm0 3h6.74c.08.33.15.66.19 1H13v-1zm0 9.93V19h2.87c-.87.48-1.84.8-2.87.93zM18.24 17H13v-1h5.92c-.2.35-.43.69-.68 1zm1.5-3H13v-1h6.93c-.04.34-.11.67-.19 1z',
            },
          },
        ],
      })(t);
    };
    Xu.displayName = 'MdTonality';
    var ts = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M22 18v-2H8V4h2L7 1 4 4h2v2H2v2h4v8c0 1.1.9 2 2 2h8v2h-2l3 3 3-3h-2v-2h4zM10 8h6v6h2V8c0-1.1-.9-2-2-2h-6v2z',
            },
          },
        ],
      })(t);
    };
    ts.displayName = 'MdTransform';
    var as = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z',
            },
          },
        ],
      })(t);
    };
    as.displayName = 'MdTune';
    var rs = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M3 9h4V5H3v4zm0 5h4v-4H3v4zm5 0h4v-4H8v4zm5 0h4v-4h-4v4zM8 9h4V5H8v4zm5-4v4h4V5h-4zm5 9h4v-4h-4v4zM3 19h4v-4H3v4zm5 0h4v-4H8v4zm5 0h4v-4h-4v4zm5 0h4v-4h-4v4zm0-14v4h4V5h-4z',
            },
          },
        ],
      })(t);
    };
    rs.displayName = 'MdViewComfy';
    var ns = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: { d: 'M3 19h6v-7H3v7zm7 0h12v-7H10v7zM3 5v6h19V5H3z' },
          },
        ],
      })(t);
    };
    ns.displayName = 'MdViewCompact';
    var cs = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 15c-4.42 0-8-2.69-8-6s3.58-6 8-6 8 2.69 8 6-3.58 6-8 6z',
            },
          },
        ],
      })(t);
    };
    cs.displayName = 'MdVignette';
    var es = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M6.85 12.65h2.3L8 9l-1.15 3.65zM22 7l-1.2 6.29L19.3 7h-1.6l-1.49 6.29L15 7h-.76C12.77 5.17 10.53 4 8 4c-4.42 0-8 3.58-8 8s3.58 8 8 8c3.13 0 5.84-1.81 7.15-4.43l.1.43H17l1.5-6.1L20 16h1.75l2.05-9H22zm-11.7 9l-.7-2H6.4l-.7 2H3.8L7 7h2l3.2 9h-1.9z',
            },
          },
        ],
      })(t);
    };
    es.displayName = 'MdWbAuto';
    var vs = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19.36 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96z',
            },
          },
        ],
      })(t);
    };
    vs.displayName = 'MdWbCloudy';
    var is = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M3.55 18.54l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8zM11 22.45h2V19.5h-2v2.95zM4 10.5H1v2h3v-2zm11-4.19V1.5H9v4.81C7.21 7.35 6 9.28 6 11.5c0 3.31 2.69 6 6 6s6-2.69 6-6c0-2.22-1.21-4.15-3-5.19zm5 4.19v2h3v-2h-3zm-2.76 7.66l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4z',
            },
          },
        ],
      })(t);
    };
    is.displayName = 'MdWbIncandescent';
    var ds = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M5 14.5h14v-6H5v6zM11 .55V3.5h2V.55h-2zm8.04 2.5l-1.79 1.79 1.41 1.41 1.8-1.79-1.42-1.41zM13 22.45V19.5h-2v2.95h2zm7.45-3.91l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zM3.55 4.46l1.79 1.79 1.41-1.41-1.79-1.79-1.41 1.41zm1.41 15.49l1.79-1.8-1.41-1.41-1.79 1.79 1.41 1.42z',
            },
          },
        ],
      })(t);
    };
    ds.displayName = 'MdWbIridescent';
    var hs = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z',
            },
          },
        ],
      })(t);
    };
    hs.displayName = 'MdWbSunny';
    var os = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm4 8h-3v3h-2v-3H8V8h3V5h2v3h3v2z',
            },
          },
        ],
      })(t);
    };
    os.displayName = 'MdAddLocation';
    var ls = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 1H5c-1.1 0-1.99.9-1.99 2L3 15.93c0 .69.35 1.3.88 1.66L12 23l8.11-5.41c.53-.36.88-.97.88-1.66L21 3c0-1.1-.9-2-2-2zm-9 15l-5-5 1.41-1.41L10 13.17l7.59-7.59L19 7l-9 9z',
            },
          },
        ],
      })(t);
    };
    ls.displayName = 'MdBeenhere';
    var us = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21.71 11.29l-9-9c-.39-.39-1.02-.39-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z',
            },
          },
        ],
      })(t);
    };
    us.displayName = 'MdDirections';
    var ss = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10l2.4-2.4.8.8c1.3 1.3 3 2.1 5.1 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L7.8 8.4c-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4L11 14v5h2v-6.2l-2.2-2.3zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z',
            },
          },
        ],
      })(t);
    };
    ss.displayName = 'MdDirectionsBike';
    var Ms = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.15.52-.06.78L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z',
            },
          },
        ],
      })(t);
    };
    Ms.displayName = 'MdDirectionsBoat';
    var gs = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z',
            },
          },
        ],
      })(t);
    };
    gs.displayName = 'MdDirectionsBus';
    var zs = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z',
            },
          },
        ],
      })(t);
    };
    zs.displayName = 'MdDirectionsCar';
    var ms = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M4 15.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V5c0-3.5-3.58-4-8-4s-8 .5-8 4v10.5zm8 1.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-7H6V5h12v5z',
            },
          },
        ],
      })(t);
    };
    ms.displayName = 'MdDirectionsRailway';
    var ps = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z',
            },
          },
        ],
      })(t);
    };
    ps.displayName = 'MdDirectionsRun';
    var fs = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 2c-4.42 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-6H6V6h5v5zm5.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6h-5V6h5v5z',
            },
          },
        ],
      })(t);
    };
    fs.displayName = 'MdDirectionsSubway';
    var Hs = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 2c-4.42 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-6H6V6h5v5zm5.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6h-5V6h5v5z',
            },
          },
        ],
      })(t);
    };
    Hs.displayName = 'MdDirectionsTransit';
    var Vs = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7',
            },
          },
        ],
      })(t);
    };
    Vs.displayName = 'MdDirectionsWalk';
    var ys = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm-1.56 10H9v-1.44l3.35-3.34 1.43 1.43L10.44 12zm4.45-4.45l-.7.7-1.44-1.44.7-.7c.15-.15.39-.15.54 0l.9.9c.15.15.15.39 0 .54z',
            },
          },
        ],
      })(t);
    };
    ys.displayName = 'MdEditLocation';
    var Ls = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77zM18 10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM8 18v-4.5H6L10 6v5h2l-4 7z',
            },
          },
        ],
      })(t);
    };
    Ls.displayName = 'MdEvStation';
    var Bs = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          { tag: 'path', attr: { d: 'M10.18 9' } },
          {
            tag: 'path',
            attr: {
              d:
                'M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z',
            },
          },
        ],
      })(t);
    };
    Bs.displayName = 'MdFlight';
    var ws = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z',
            },
          },
        ],
      })(t);
    };
    ws.displayName = 'MdHotel';
    var xs = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z',
            },
          },
        ],
      })(t);
    };
    xs.displayName = 'MdLayers';
    var Ns = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19.81 14.99l1.19-.92-1.43-1.43-1.19.92 1.43 1.43zm-.45-4.72L21 9l-9-7-2.91 2.27 7.87 7.88 2.4-1.88zM3.27 1L2 2.27l4.22 4.22L3 9l1.63 1.27L12 16l2.1-1.63 1.43 1.43L12 18.54l-7.37-5.73L3 14.07l9 7 4.95-3.85L20.73 21 22 19.73 3.27 1z',
            },
          },
        ],
      })(t);
    };
    Ns.displayName = 'MdLayersClear';
    var Cs = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 12c0-1.1.9-2 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2zm-4.42 4.8L12 14.5l-3.58 2.3 1.08-4.12-3.29-2.69 4.24-.25L12 5.8l1.54 3.95 4.24.25-3.29 2.69 1.09 4.11z',
            },
          },
        ],
      })(t);
    };
    Cs.displayName = 'MdLocalActivity';
    var Ss = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z',
            },
          },
        ],
      })(t);
    };
    Ss.displayName = 'MdLocalAirport';
    var As = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M11 17h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h4V8h-2V7h-2v1h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H9v2h2v1zm9-13H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12z',
            },
          },
        ],
      })(t);
    };
    As.displayName = 'MdLocalAtm';
    var bs = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9zM7.43 7L5.66 5h12.69l-1.78 2H7.43z',
            },
          },
        ],
      })(t);
    };
    bs.displayName = 'MdLocalBar';
    var Ps = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM2 21h18v-2H2v2z',
            },
          },
        ],
      })(t);
    };
    Ps.displayName = 'MdLocalCafe';
    var Fs = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M17 5c.83 0 1.5-.67 1.5-1.5 0-1-1.5-2.7-1.5-2.7s-1.5 1.7-1.5 2.7c0 .83.67 1.5 1.5 1.5zm-5 0c.83 0 1.5-.67 1.5-1.5 0-1-1.5-2.7-1.5-2.7s-1.5 1.7-1.5 2.7c0 .83.67 1.5 1.5 1.5zM7 5c.83 0 1.5-.67 1.5-1.5C8.5 2.5 7 .8 7 .8S5.5 2.5 5.5 3.5C5.5 4.33 6.17 5 7 5zm11.92 3.01C18.72 7.42 18.16 7 17.5 7h-11c-.66 0-1.21.42-1.42 1.01L3 14v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 18c-.83 0-1.5-.67-1.5-1.5S5.67 15 6.5 15s1.5.67 1.5 1.5S7.33 18 6.5 18zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 13l1.5-4.5h11L19 13H5z',
            },
          },
        ],
      })(t);
    };
    Fs.displayName = 'MdLocalCarWash';
    var ks = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 7V4H5v3H2v13h8v-4h4v4h8V7h-3zm-8 3H9v1h2v1H8V9h2V8H8V7h3v3zm5 2h-1v-2h-2V7h1v2h1V7h1v5z',
            },
          },
        ],
      })(t);
    };
    ks.displayName = 'MdLocalConvenienceStore';
    var Os = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z',
            },
          },
        ],
      })(t);
    };
    Os.displayName = 'MdLocalDining';
    var Ts = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M3 2l2.01 18.23C5.13 21.23 5.97 22 7 22h10c1.03 0 1.87-.77 1.99-1.77L21 2H3zm9 17c-1.66 0-3-1.34-3-3 0-2 3-5.4 3-5.4s3 3.4 3 5.4c0 1.66-1.34 3-3 3zm6.33-11H5.67l-.44-4h13.53l-.43 4z',
            },
          },
        ],
      })(t);
    };
    Ts.displayName = 'MdLocalDrink';
    var Rs = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9zM5.6 10.25c0 1.38 1.12 2.5 2.5 2.5.53 0 1.01-.16 1.42-.44l-.02.19c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5l-.02-.19c.4.28.89.44 1.42.44 1.38 0 2.5-1.12 2.5-2.5 0-1-.59-1.85-1.43-2.25.84-.4 1.43-1.25 1.43-2.25 0-1.38-1.12-2.5-2.5-2.5-.53 0-1.01.16-1.42.44l.02-.19C14.5 2.12 13.38 1 12 1S9.5 2.12 9.5 3.5l.02.19c-.4-.28-.89-.44-1.42-.44-1.38 0-2.5 1.12-2.5 2.5 0 1 .59 1.85 1.43 2.25-.84.4-1.43 1.25-1.43 2.25zM12 5.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8s1.12-2.5 2.5-2.5zM3 13c0 4.97 4.03 9 9 9 0-4.97-4.03-9-9-9z',
            },
          },
        ],
      })(t);
    };
    Rs.displayName = 'MdLocalFlorist';
    var Ds = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77zM12 10H6V5h6v5zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z',
            },
          },
        ],
      })(t);
    };
    Ds.displayName = 'MdLocalGasStation';
    var Is = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z',
            },
          },
        ],
      })(t);
    };
    Is.displayName = 'MdLocalGroceryStore';
    var Es = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z',
            },
          },
        ],
      })(t);
    };
    Es.displayName = 'MdLocalHospital';
    var Ws = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z',
            },
          },
        ],
      })(t);
    };
    Ws.displayName = 'MdLocalHotel';
    var Us = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M9.17 16.83c1.56 1.56 4.1 1.56 5.66 0 1.56-1.56 1.56-4.1 0-5.66l-5.66 5.66zM18 2.01L6 2c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V4c0-1.11-.89-1.99-2-1.99zM10 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM7 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm5 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z',
            },
          },
        ],
      })(t);
    };
    Us.displayName = 'MdLocalLaundryService';
    var Gs = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z',
            },
          },
        ],
      })(t);
    };
    Gs.displayName = 'MdLocalLibrary';
    var js = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm0 10c-2.76 0-5-2.24-5-5h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5z',
            },
          },
        ],
      })(t);
    };
    js.displayName = 'MdLocalMall';
    var _s = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z',
            },
          },
        ],
      })(t);
    };
    _s.displayName = 'MdLocalMovies';
    var Ks = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z',
            },
          },
        ],
      })(t);
    };
    Ks.displayName = 'MdLocalOffer';
    var Qs = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M13 3H6v18h4v-6h3c3.31 0 6-2.69 6-6s-2.69-6-6-6zm.2 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z',
            },
          },
        ],
      })(t);
    };
    Qs.displayName = 'MdLocalParking';
    var qs = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 5h-2.64l1.14-3.14L17.15 1l-1.46 4H3v2l2 6-2 6v2h18v-2l-2-6 2-6V5zm-5 9h-3v3h-2v-3H8v-2h3V9h2v3h3v2z',
            },
          },
        ],
      })(t);
    };
    qs.displayName = 'MdLocalPharmacy';
    var Zs = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z',
            },
          },
        ],
      })(t);
    };
    Zs.displayName = 'MdLocalPhone';
    var Js = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 2C8.43 2 5.23 3.54 3.01 6L12 22l8.99-16C18.78 3.55 15.57 2 12 2zM7 7c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm5 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z',
            },
          },
        ],
      })(t);
    };
    Js.displayName = 'MdLocalPizza';
    var $s = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 12c0-1.1.9-2 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2zm-4.42 4.8L12 14.5l-3.58 2.3 1.08-4.12-3.29-2.69 4.24-.25L12 5.8l1.54 3.95 4.24.25-3.29 2.69 1.09 4.11z',
            },
          },
        ],
      })(t);
    };
    $s.displayName = 'MdLocalPlay';
    var Ys = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
            },
          },
        ],
      })(t);
    };
    Ys.displayName = 'MdLocalPostOffice';
    var Xs = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z',
            },
          },
        ],
      })(t);
    };
    Xs.displayName = 'MdLocalPrintshop';
    var tM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          { tag: 'circle', attr: { cx: '12', cy: '12', r: '3.2' } },
          {
            tag: 'path',
            attr: {
              d:
                'M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z',
            },
          },
        ],
      })(t);
    };
    tM.displayName = 'MdLocalSee';
    var aM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z',
            },
          },
        ],
      })(t);
    };
    aM.displayName = 'MdLocalShipping';
    var rM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M18.92 6.01C18.72 5.42 18.16 5 17.5 5H15V3H9v2H6.5c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z',
            },
          },
        ],
      })(t);
    };
    rM.displayName = 'MdLocalTaxi';
    var nM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z',
            },
          },
        ],
      })(t);
    };
    nM.displayName = 'MdMap';
    var cM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z',
            },
          },
        ],
      })(t);
    };
    cM.displayName = 'MdMyLocation';
    var eM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: { d: 'M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z' },
          },
        ],
      })(t);
    };
    eM.displayName = 'MdNavigation';
    var vM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: { d: 'M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z' },
          },
        ],
      })(t);
    };
    vM.displayName = 'MdNearMe';
    var iM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 3.3c1.49 0 2.7 1.21 2.7 2.7 0 1.49-1.21 2.7-2.7 2.7-1.49 0-2.7-1.21-2.7-2.7 0-1.49 1.21-2.7 2.7-2.7zM18 16H6v-.9c0-2 4-3.1 6-3.1s6 1.1 6 3.1v.9z',
            },
          },
        ],
      })(t);
    };
    iM.displayName = 'MdPersonPin';
    var dM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 2c1.1 0 2 .9 2 2 0 1.11-.9 2-2 2s-2-.89-2-2c0-1.1.9-2 2-2zm0 10c-1.67 0-3.14-.85-4-2.15.02-1.32 2.67-2.05 4-2.05s3.98.73 4 2.05c-.86 1.3-2.33 2.15-4 2.15z',
            },
          },
        ],
      })(t);
    };
    dM.displayName = 'MdPersonPinCircle';
    var hM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M18 8c0-3.31-2.69-6-6-6S6 4.69 6 8c0 4.5 6 11 6 11s6-6.5 6-11zm-8 0c0-1.1.9-2 2-2s2 .9 2 2-.89 2-2 2c-1.1 0-2-.9-2-2zM5 20v2h14v-2H5z',
            },
          },
        ],
      })(t);
    };
    hM.displayName = 'MdPinDrop';
    var oM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
            },
          },
        ],
      })(t);
    };
    oM.displayName = 'MdPlace';
    var lM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z',
            },
          },
        ],
      })(t);
    };
    lM.displayName = 'MdRateReview';
    var uM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z',
            },
          },
        ],
      })(t);
    };
    uM.displayName = 'MdRestaurant';
    var sM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z',
            },
          },
        ],
      })(t);
    };
    sM.displayName = 'MdRestaurantMenu';
    var MM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.99h3C8 6.65 6.66 8 5 8V4.99zM5 12v-2c2.76 0 5-2.25 5-5.01h2C12 8.86 8.87 12 5 12zm0 6l3.5-4.5 2.5 3.01L14.5 12l4.5 6H5z',
            },
          },
        ],
      })(t);
    };
    MM.displayName = 'MdSatellite';
    var gM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z',
            },
          },
        ],
      })(t);
    };
    gM.displayName = 'MdStoreMallDirectory';
    var zM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12.56 14.33c-.34.27-.56.7-.56 1.17V21h7c1.1 0 2-.9 2-2v-5.98c-.94-.33-1.95-.52-3-.52-2.03 0-3.93.7-5.44 1.83z',
            },
          },
          { tag: 'circle', attr: { cx: '18', cy: '6', r: '5' } },
          {
            tag: 'path',
            attr: {
              d:
                'M11.5 6c0-1.08.27-2.1.74-3H5c-1.1 0-2 .9-2 2v14c0 .55.23 1.05.59 1.41l9.82-9.82C12.23 9.42 11.5 7.8 11.5 6z',
            },
          },
        ],
      })(t);
    };
    zM.displayName = 'MdStreetview';
    var mM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          { tag: 'circle', attr: { cx: '15.5', cy: '16', r: '1' } },
          { tag: 'circle', attr: { cx: '8.5', cy: '16', r: '1' } },
          {
            tag: 'path',
            attr: {
              d:
                'M7.01 9h10v5h-10zM17.8 2.8C16 2.09 13.86 2 12 2c-1.86 0-4 .09-5.8.8C3.53 3.84 2 6.05 2 8.86V22h20V8.86c0-2.81-1.53-5.02-4.2-6.06zm.2 13.08c0 1.45-1.18 2.62-2.63 2.62l1.13 1.12V20H15l-1.5-1.5h-2.83L9.17 20H7.5v-.38l1.12-1.12C7.18 18.5 6 17.32 6 15.88V9c0-2.63 3-3 6-3 3.32 0 6 .38 6 3v6.88z',
            },
          },
        ],
      })(t);
    };
    mM.displayName = 'MdSubway';
    var pM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z',
            },
          },
        ],
      })(t);
    };
    pM.displayName = 'MdTerrain';
    var fM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 10h-3V8.86c1.72-.45 3-2 3-3.86h-3V4c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v1H4c0 1.86 1.28 3.41 3 3.86V10H4c0 1.86 1.28 3.41 3 3.86V15H4c0 1.86 1.28 3.41 3 3.86V20c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1.14c1.72-.45 3-2 3-3.86h-3v-1.14c1.72-.45 3-2 3-3.86zm-8 9c-1.11 0-2-.9-2-2s.89-2 2-2c1.1 0 2 .9 2 2s-.89 2-2 2zm0-5c-1.11 0-2-.9-2-2s.89-2 2-2c1.1 0 2 .9 2 2s-.89 2-2 2zm0-5c-1.11 0-2-.9-2-2 0-1.11.89-2 2-2 1.1 0 2 .89 2 2 0 1.1-.89 2-2 2z',
            },
          },
        ],
      })(t);
    };
    fM.displayName = 'MdTraffic';
    var HM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-7H6V6h5v4zm2 0V6h5v4h-5zm3.5 7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z',
            },
          },
        ],
      })(t);
    };
    HM.displayName = 'MdTrain';
    var VM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 16.94V8.5c0-2.79-2.61-3.4-6.01-3.49l.76-1.51H17V2H7v1.5h4.75l-.76 1.52C7.86 5.11 5 5.73 5 8.5v8.44c0 1.45 1.19 2.66 2.59 2.97L6 21.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 20h-.08c1.69 0 2.58-1.37 2.58-3.06zm-7 1.56c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5-4.5H7V9h10v5z',
            },
          },
        ],
      })(t);
    };
    VM.displayName = 'MdTram';
    var yM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M16.49 15.5v-1.75L14 16.25l2.49 2.5V17H22v-1.5zm3.02 4.25H14v1.5h5.51V23L22 20.5 19.51 18zM9.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5.75 8.9L3 23h2.1l1.75-8L9 17v6h2v-7.55L8.95 13.4l.6-3C10.85 12 12.8 13 15 13v-2c-1.85 0-3.45-1-4.35-2.45l-.95-1.6C9.35 6.35 8.7 6 8 6c-.25 0-.5.05-.75.15L2 8.3V13h2V9.65l1.75-.75',
            },
          },
        ],
      })(t);
    };
    yM.displayName = 'MdTransferWithinAStation';
    var LM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z',
            },
          },
        ],
      })(t);
    };
    LM.displayName = 'MdZoomOutMap';
    var BM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z',
            },
          },
        ],
      })(t);
    };
    BM.displayName = 'MdApps';
    var wM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d: 'M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z',
            },
          },
        ],
      })(t);
    };
    wM.displayName = 'MdArrowBack';
    var xM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z',
            },
          },
        ],
      })(t);
    };
    xM.displayName = 'MdArrowDownward';
    var NM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [{ tag: 'path', attr: { d: 'M7 10l5 5 5-5z' } }],
      })(t);
    };
    NM.displayName = 'MdArrowDropDown';
    var CM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z',
            },
          },
        ],
      })(t);
    };
    CM.displayName = 'MdArrowDropDownCircle';
    var SM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [{ tag: 'path', attr: { d: 'M7 14l5-5 5 5z' } }],
      })(t);
    };
    SM.displayName = 'MdArrowDropUp';
    var AM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d: 'M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z',
            },
          },
        ],
      })(t);
    };
    AM.displayName = 'MdArrowForward';
    var bM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d: 'M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z',
            },
          },
        ],
      })(t);
    };
    bM.displayName = 'MdArrowUpward';
    var PM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z',
            },
          },
        ],
      })(t);
    };
    PM.displayName = 'MdCancel';
    var FM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: { d: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z' },
          },
        ],
      })(t);
    };
    FM.displayName = 'MdCheck';
    var kM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: { d: 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z' },
          },
        ],
      })(t);
    };
    kM.displayName = 'MdChevronLeft';
    var OM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: { d: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' },
          },
        ],
      })(t);
    };
    OM.displayName = 'MdChevronRight';
    var TM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
            },
          },
        ],
      })(t);
    };
    TM.displayName = 'MdClose';
    var RM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: { d: 'M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z' },
          },
        ],
      })(t);
    };
    RM.displayName = 'MdExpandLess';
    var DM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: { d: 'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z' },
          },
        ],
      })(t);
    };
    DM.displayName = 'MdExpandMore';
    var IM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d: 'M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z',
            },
          },
        ],
      })(t);
    };
    IM.displayName = 'MdFirstPage';
    var EM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z',
            },
          },
        ],
      })(t);
    };
    EM.displayName = 'MdFullscreen';
    var WM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z',
            },
          },
        ],
      })(t);
    };
    WM.displayName = 'MdFullscreenExit';
    var UM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d: 'M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z',
            },
          },
        ],
      })(t);
    };
    UM.displayName = 'MdLastPage';
    var GM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: { d: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' },
          },
        ],
      })(t);
    };
    GM.displayName = 'MdMenu';
    var jM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
            },
          },
        ],
      })(t);
    };
    jM.displayName = 'MdMoreHoriz';
    var _M = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
            },
          },
        ],
      })(t);
    };
    _M.displayName = 'MdMoreVert';
    var KM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z',
            },
          },
        ],
      })(t);
    };
    KM.displayName = 'MdRefresh';
    var QM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z',
            },
          },
        ],
      })(t);
    };
    QM.displayName = 'MdSubdirectoryArrowLeft';
    var qM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z',
            },
          },
        ],
      })(t);
    };
    qM.displayName = 'MdSubdirectoryArrowRight';
    var ZM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z',
            },
          },
        ],
      })(t);
    };
    ZM.displayName = 'MdUnfoldLess';
    var JM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z',
            },
          },
        ],
      })(t);
    };
    JM.displayName = 'MdUnfoldMore';
    var $M = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M5 16c0 3.87 3.13 7 7 7s7-3.13 7-7v-4H5v4zM16.12 4.37l2.1-2.1-.82-.83-2.3 2.31C14.16 3.28 13.12 3 12 3s-2.16.28-3.09.75L6.6 1.44l-.82.83 2.1 2.1C6.14 5.64 5 7.68 5 10v1h14v-1c0-2.32-1.14-4.36-2.88-5.63zM9 9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z',
            },
          },
        ],
      })(t);
    };
    $M.displayName = 'MdAdb';
    var YM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M22 11v2H9V7h9c2.21 0 4 1.79 4 4zM2 14v2h6v2h8v-2h6v-2H2zm5.14-1.9c1.16-1.19 1.14-3.08-.04-4.24-1.19-1.16-3.08-1.14-4.24.04-1.16 1.19-1.14 3.08.04 4.24 1.19 1.16 3.08 1.14 4.24-.04z',
            },
          },
        ],
      })(t);
    };
    YM.displayName = 'MdAirlineSeatFlat';
    var XM = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M22.25 14.29l-.69 1.89L9.2 11.71l2.08-5.66 8.56 3.09c2.1.76 3.18 3.06 2.41 5.15zM1.5 12.14L8 14.48V19h8v-1.63L20.52 19l.69-1.89-19.02-6.86-.69 1.89zm5.8-1.94c1.49-.72 2.12-2.51 1.41-4C7.99 4.71 6.2 4.08 4.7 4.8c-1.49.71-2.12 2.5-1.4 4 .71 1.49 2.5 2.12 4 1.4z',
            },
          },
        ],
      })(t);
    };
    XM.displayName = 'MdAirlineSeatFlatAngled';
    var tg = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M7 13c1.65 0 3-1.35 3-3S8.65 7 7 7s-3 1.35-3 3 1.35 3 3 3zm12-6h-8v7H3V7H1v10h22v-6c0-2.21-1.79-4-4-4z',
            },
          },
        ],
      })(t);
    };
    tg.displayName = 'MdAirlineSeatIndividualSuite';
    var ag = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M4 12V3H2v9c0 2.76 2.24 5 5 5h6v-2H7c-1.66 0-3-1.34-3-3zm18.83 5.24c-.38-.72-1.29-.97-2.03-.63l-1.09.5-3.41-6.98c-.34-.68-1.03-1.12-1.79-1.12L11 9V3H5v8c0 1.66 1.34 3 3 3h7l3.41 7 3.72-1.7c.77-.36 1.1-1.3.7-2.06z',
            },
          },
        ],
      })(t);
    };
    ag.displayName = 'MdAirlineSeatLegroomExtra';
    var rg = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M5 12V3H3v9c0 2.76 2.24 5 5 5h6v-2H8c-1.66 0-3-1.34-3-3zm15.5 6H19v-7c0-1.1-.9-2-2-2h-5V3H6v8c0 1.65 1.35 3 3 3h7v7h4.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z',
            },
          },
        ],
      })(t);
    };
    rg.displayName = 'MdAirlineSeatLegroomNormal';
    var ng = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19.97 19.2c.18.96-.55 1.8-1.47 1.8H14v-3l1-4H9c-1.65 0-3-1.35-3-3V3h6v6h5c1.1 0 2 .9 2 2l-2 7h1.44c.73 0 1.39.49 1.53 1.2zM5 12V3H3v9c0 2.76 2.24 5 5 5h4v-2H8c-1.66 0-3-1.34-3-3z',
            },
          },
        ],
      })(t);
    };
    ng.displayName = 'MdAirlineSeatLegroomReduced';
    var cg = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M5.35 5.64c-.9-.64-1.12-1.88-.49-2.79.63-.9 1.88-1.12 2.79-.49.9.64 1.12 1.88.49 2.79-.64.9-1.88 1.12-2.79.49zM16 19H8.93c-1.48 0-2.74-1.08-2.96-2.54L4 7H2l1.99 9.76C4.37 19.2 6.47 21 8.94 21H16v-2zm.23-4h-4.88l-1.03-4.1c1.58.89 3.28 1.54 5.15 1.22V9.99c-1.63.31-3.44-.27-4.69-1.25L9.14 7.47c-.23-.18-.49-.3-.76-.38-.32-.09-.66-.12-.99-.06h-.02c-1.23.22-2.05 1.39-1.84 2.61l1.35 5.92C7.16 16.98 8.39 18 9.83 18h6.85l3.82 3 1.5-1.5-5.77-4.5z',
            },
          },
        ],
      })(t);
    };
    cg.displayName = 'MdAirlineSeatReclineExtra';
    var eg = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M7.59 5.41c-.78-.78-.78-2.05 0-2.83.78-.78 2.05-.78 2.83 0 .78.78.78 2.05 0 2.83-.79.79-2.05.79-2.83 0zM6 16V7H4v9c0 2.76 2.24 5 5 5h6v-2H9c-1.66 0-3-1.34-3-3zm14 4.07L14.93 15H11.5v-3.68c1.4 1.15 3.6 2.16 5.5 2.16v-2.16c-1.66.02-3.61-.87-4.67-2.04l-1.4-1.55c-.19-.21-.43-.38-.69-.5-.29-.14-.62-.23-.96-.23h-.03C8.01 7 7 8.01 7 9.25V15c0 1.66 1.34 3 3 3h5.07l3.5 3.5L20 20.07z',
            },
          },
        ],
      })(t);
    };
    eg.displayName = 'MdAirlineSeatReclineNormal';
    var vg = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M14.24 12.01l2.32 2.32c.28-.72.44-1.51.44-2.33 0-.82-.16-1.59-.43-2.31l-2.33 2.32zm5.29-5.3l-1.26 1.26c.63 1.21.98 2.57.98 4.02s-.36 2.82-.98 4.02l1.2 1.2c.97-1.54 1.54-3.36 1.54-5.31-.01-1.89-.55-3.67-1.48-5.19zm-3.82 1L10 2H9v7.59L4.41 5 3 6.41 8.59 12 3 17.59 4.41 19 9 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM11 5.83l1.88 1.88L11 9.59V5.83zm1.88 10.46L11 18.17v-3.76l1.88 1.88z',
            },
          },
        ],
      })(t);
    };
    vg.displayName = 'MdBluetoothAudio';
    var ig = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M22 10V6c0-1.11-.9-2-2-2H4c-1.1 0-1.99.89-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2zm-9 7.5h-2v-2h2v2zm0-4.5h-2v-2h2v2zm0-4.5h-2v-2h2v2z',
            },
          },
        ],
      })(t);
    };
    ig.displayName = 'MdConfirmationNumber';
    var dg = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 16h2v-2h-2v2zm0-9v5h2V7h-2zM10 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z',
            },
          },
        ],
      })(t);
    };
    dg.displayName = 'MdDiscFull';
    var hg = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z',
            },
          },
        ],
      })(t);
    };
    hg.displayName = 'MdDoNotDisturb';
    var og = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM4 12c0-4.4 3.6-8 8-8 1.8 0 3.5.6 4.9 1.7L5.7 16.9C4.6 15.5 4 13.8 4 12zm8 8c-1.8 0-3.5-.6-4.9-1.7L18.3 7.1C19.4 8.5 20 10.2 20 12c0 4.4-3.6 8-8 8z',
            },
          },
        ],
      })(t);
    };
    og.displayName = 'MdDoNotDisturbAlt';
    var lg = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M17 11v2h-1.46l4.68 4.68C21.34 16.07 22 14.11 22 12c0-5.52-4.48-10-10-10-2.11 0-4.07.66-5.68 1.78L13.54 11H17zM2.27 2.27L1 3.54l2.78 2.78C2.66 7.93 2 9.89 2 12c0 5.52 4.48 10 10 10 2.11 0 4.07-.66 5.68-1.78L20.46 23l1.27-1.27L11 11 2.27 2.27zM7 13v-2h1.46l2 2H7z',
            },
          },
        ],
      })(t);
    };
    lg.displayName = 'MdDoNotDisturbOff';
    var ug = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z',
            },
          },
        ],
      })(t);
    };
    ug.displayName = 'MdDoNotDisturbOn';
    var sg = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M18.92 5.01C18.72 4.42 18.16 4 17.5 4h-11c-.66 0-1.21.42-1.42 1.01L3 11v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 15c-.83 0-1.5-.67-1.5-1.5S5.67 12 6.5 12s1.5.67 1.5 1.5S7.33 15 6.5 15zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 10l1.5-4.5h11L19 10H5z',
            },
          },
        ],
      })(t);
    };
    sg.displayName = 'MdDriveEta';
    var Mg = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM16 16h-3v3h-2v-3H8v-2h3v-3h2v3h3v2z',
            },
          },
        ],
      })(t);
    };
    Mg.displayName = 'MdEnhancedEncryption';
    var gg = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M16.53 11.06L15.47 10l-4.88 4.88-2.12-2.12-1.06 1.06L10.59 17l5.94-5.94zM19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z',
            },
          },
        ],
      })(t);
    };
    gg.displayName = 'MdEventAvailable';
    var zg = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M9.31 17l2.44-2.44L14.19 17l1.06-1.06-2.44-2.44 2.44-2.44L14.19 10l-2.44 2.44L9.31 10l-1.06 1.06 2.44 2.44-2.44 2.44L9.31 17zM19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z',
            },
          },
        ],
      })(t);
    };
    zg.displayName = 'MdEventBusy';
    var mg = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M17 10H7v2h10v-2zm2-7h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zm-5-5H7v2h7v-2z',
            },
          },
        ],
      })(t);
    };
    mg.displayName = 'MdEventNote';
    var pg = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-2.06 11L15 15.28 12.06 17l.78-3.33-2.59-2.24 3.41-.29L15 8l1.34 3.14 3.41.29-2.59 2.24.78 3.33z',
            },
          },
        ],
      })(t);
    };
    pg.displayName = 'MdFolderSpecial';
    var fg = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 6h-7.59l3.29-3.29L16 2l-4 4-4-4-.71.71L10.59 6H3c-1.1 0-2 .89-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2-2zm0 14H3V8h18v12zM9 10v8l7-4z',
            },
          },
        ],
      })(t);
    };
    fg.displayName = 'MdLiveTv';
    var Hg = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM5 14l3.5-4.5 2.5 3.01L14.5 8l4.5 6H5z',
            },
          },
        ],
      })(t);
    };
    Hg.displayName = 'MdMms';
    var Vg = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.97.89 1.66.89H22c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z',
            },
          },
        ],
      })(t);
    };
    Vg.displayName = 'MdMore';
    var yg = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M15.9 5c-.17 0-.32.09-.41.23l-.07.15-5.18 11.65c-.16.29-.26.61-.26.96 0 1.11.9 2.01 2.01 2.01.96 0 1.77-.68 1.96-1.59l.01-.03L16.4 5.5c0-.28-.22-.5-.5-.5zM1 9l2 2c2.88-2.88 6.79-4.08 10.53-3.62l1.19-2.68C9.89 3.84 4.74 5.27 1 9zm20 2l2-2c-1.64-1.64-3.55-2.82-5.59-3.57l-.53 2.82c1.5.62 2.9 1.53 4.12 2.75zm-4 4l2-2c-.8-.8-1.7-1.42-2.66-1.89l-.55 2.92c.42.27.83.59 1.21.97zM5 13l2 2c1.13-1.13 2.56-1.79 4.03-2l1.28-2.88c-2.63-.08-5.3.87-7.31 2.88z',
            },
          },
        ],
      })(t);
    };
    yg.displayName = 'MdNetworkCheck';
    var Lg = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19.5 10c.17 0 .33.03.5.05V1L1 20h13v-3c0-.89.39-1.68 1-2.23v-.27c0-2.48 2.02-4.5 4.5-4.5zm2.5 6v-1.5c0-1.38-1.12-2.5-2.5-2.5S17 13.12 17 14.5V16c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm-1 0h-3v-1.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V16z',
            },
          },
        ],
      })(t);
    };
    Lg.displayName = 'MdNetworkLocked';
    var Bg = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 21.78L4.22 5 3 6.22l2.04 2.04C4.42 8.6 4 9.25 4 10v10c0 1.1.9 2 2 2h12c.23 0 .45-.05.66-.12L19.78 23 21 21.78zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H9.66L20 18.34V10c0-1.1-.9-2-2-2h-1V6c0-2.76-2.24-5-5-5-2.56 0-4.64 1.93-4.94 4.4L8.9 7.24V6z',
            },
          },
        ],
      })(t);
    };
    Bg.displayName = 'MdNoEncryption';
    var wg = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-6l-7 4V7z',
            },
          },
        ],
      })(t);
    };
    wg.displayName = 'MdOndemandVideo';
    var xg = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12z',
            },
          },
        ],
      })(t);
    };
    xg.displayName = 'MdPersonalVideo';
    var Ng = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M14.71 9.5L17 7.21V11h.5l2.85-2.85L18.21 6l2.15-2.15L17.5 1H17v3.79L14.71 2.5l-.71.71L16.79 6 14 8.79l.71.71zM18 2.91l.94.94-.94.94V2.91zm0 4.3l.94.94-.94.94V7.21zm2 8.29c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z',
            },
          },
        ],
      })(t);
    };
    Ng.displayName = 'MdPhoneBluetoothSpeaker';
    var Cg = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M18 11l5-5-5-5v3h-4v4h4v3zm2 4.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z',
            },
          },
        ],
      })(t);
    };
    Cg.displayName = 'MdPhoneForwarded';
    var Sg = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z',
            },
          },
        ],
      })(t);
    };
    Sg.displayName = 'MdPhoneInTalk';
    var Ag = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM20 4v-.5C20 2.12 18.88 1 17.5 1S15 2.12 15 3.5V4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-.8 0h-3.4v-.5c0-.94.76-1.7 1.7-1.7s1.7.76 1.7 1.7V4z',
            },
          },
        ],
      })(t);
    };
    Ag.displayName = 'MdPhoneLocked';
    var bg = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M6.5 5.5L12 11l7-7-1-1-6 6-4.5-4.5H11V3H5v6h1.5V5.5zm17.21 11.17C20.66 13.78 16.54 12 12 12 7.46 12 3.34 13.78.29 16.67c-.18.18-.29.43-.29.71s.11.53.29.71l2.48 2.48c.18.18.43.29.71.29.27 0 .52-.11.7-.28.79-.74 1.69-1.36 2.66-1.85.33-.16.56-.5.56-.9v-3.1c1.45-.48 3-.73 4.6-.73 1.6 0 3.15.25 4.6.72v3.1c0 .39.23.74.56.9.98.49 1.87 1.12 2.67 1.85.18.18.43.28.7.28.28 0 .53-.11.71-.29l2.48-2.48c.18-.18.29-.43.29-.71s-.12-.52-.3-.7z',
            },
          },
        ],
      })(t);
    };
    bg.displayName = 'MdPhoneMissed';
    var Pg = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M17 3h-2v7h2V3zm3 12.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 3v7h2V3h-2z',
            },
          },
        ],
      })(t);
    };
    Pg.displayName = 'MdPhonePaused';
    var Fg = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M16.01 7L16 3h-2v4h-4V3H8v4h-.01C7 6.99 6 7.99 6 8.99v5.49L9.5 18v3h5v-3l3.5-3.51v-5.5c0-1-1-2-1.99-1.99z',
            },
          },
        ],
      })(t);
    };
    Fg.displayName = 'MdPower';
    var kg = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          { tag: 'circle', attr: { cx: '12', cy: '19', r: '2' } },
          { tag: 'path', attr: { d: 'M10 3h4v12h-4z' } },
        ],
      })(t);
    };
    kg.displayName = 'MdPriorityHigh';
    var Og = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 17v-6c0-1.1-.9-2-2-2H7V7l-3 3 3 3v-2h4v3H4v3c0 1.1.9 2 2 2h2c0 1.66 1.34 3 3 3s3-1.34 3-3h8v-2h-2zm-9 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm7-6h-4v-3h4v3zM17 2v2H9v2h8v2l3-3z',
            },
          },
        ],
      })(t);
    };
    Og.displayName = 'MdRvHookup';
    var Tg = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 6h-2V4h2v4zm3 0h-2V4h2v4zm3 0h-2V4h2v4z',
            },
          },
        ],
      })(t);
    };
    Tg.displayName = 'MdSdCard';
    var Rg = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 15h-2v-2h2v2zm0-4h-2V8h2v5z',
            },
          },
        ],
      })(t);
    };
    Rg.displayName = 'MdSimCardAlert';
    var Dg = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z',
            },
          },
        ],
      })(t);
    };
    Dg.displayName = 'MdSms';
    var Ig = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z',
            },
          },
        ],
      })(t);
    };
    Ig.displayName = 'MdSmsFailed';
    var Eg = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z',
            },
          },
        ],
      })(t);
    };
    Eg.displayName = 'MdSync';
    var Wg = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M10 6.35V4.26c-.8.21-1.55.54-2.23.96l1.46 1.46c.25-.12.5-.24.77-.33zm-7.14-.94l2.36 2.36C4.45 8.99 4 10.44 4 12c0 2.21.91 4.2 2.36 5.64L4 20h6v-6l-2.24 2.24C6.68 15.15 6 13.66 6 12c0-1 .25-1.94.68-2.77l8.08 8.08c-.25.13-.5.25-.77.34v2.09c.8-.21 1.55-.54 2.23-.96l2.36 2.36 1.27-1.27L4.14 4.14 2.86 5.41zM20 4h-6v6l2.24-2.24C17.32 8.85 18 10.34 18 12c0 1-.25 1.94-.68 2.77l1.46 1.46C19.55 15.01 20 13.56 20 12c0-2.21-.91-4.2-2.36-5.64L20 4z',
            },
          },
        ],
      })(t);
    };
    Wg.displayName = 'MdSyncDisabled';
    var Ug = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M3 12c0 2.21.91 4.2 2.36 5.64L3 20h6v-6l-2.24 2.24C5.68 15.15 5 13.66 5 12c0-2.61 1.67-4.83 4-5.65V4.26C5.55 5.15 3 8.27 3 12zm8 5h2v-2h-2v2zM21 4h-6v6l2.24-2.24C18.32 8.85 19 10.34 19 12c0 2.61-1.67 4.83-4 5.65v2.09c3.45-.89 6-4.01 6-7.74 0-2.21-.91-4.2-2.36-5.64L21 4zm-10 9h2V7h-2v6z',
            },
          },
        ],
      })(t);
    };
    Ug.displayName = 'MdSyncProblem';
    var Gg = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14zm-1-6h-3V8h-2v5H8l4 4 4-4z',
            },
          },
        ],
      })(t);
    };
    Gg.displayName = 'MdSystemUpdate';
    var jg = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M2 16v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0 4v3h3c0-1.66-1.34-3-3-3zm0-8v2c4.97 0 9 4.03 9 9h2c0-6.08-4.92-11-11-11zM17 1.01L7 1c-1.1 0-2 .9-2 2v7.37c.69.16 1.36.37 2 .64V5h10v13h-3.03c.52 1.25.84 2.59.95 4H17c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99z',
            },
          },
        ],
      })(t);
    };
    jg.displayName = 'MdTapAndPlay';
    var _g = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M18.92 5.01C18.72 4.42 18.16 4 17.5 4h-11c-.66 0-1.21.42-1.42 1.01L3 11v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 15c-.83 0-1.5-.67-1.5-1.5S5.67 12 6.5 12s1.5.67 1.5 1.5S7.33 15 6.5 15zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 10l1.5-4.5h11L19 10H5z',
            },
          },
        ],
      })(t);
    };
    _g.displayName = 'MdTimeToLeave';
    var Kg = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M0 15h2V9H0v6zm3 2h2V7H3v10zm19-8v6h2V9h-2zm-3 8h2V7h-2v10zM16.5 3h-9C6.67 3 6 3.67 6 4.5v15c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-15c0-.83-.67-1.5-1.5-1.5zM16 19H8V5h8v14z',
            },
          },
        ],
      })(t);
    };
    Kg.displayName = 'MdVibration';
    var Qg = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12l-4-3.2V14H6V6h8v3.2L18 6v8z',
            },
          },
        ],
      })(t);
    };
    Qg.displayName = 'MdVoiceChat';
    var qg = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M22 4v-.5C22 2.12 20.88 1 19.5 1S17 2.12 17 3.5V4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-.8 0h-3.4v-.5c0-.94.76-1.7 1.7-1.7s1.7.76 1.7 1.7V4zm-2.28 8c.04.33.08.66.08 1 0 2.08-.8 3.97-2.1 5.39-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H7v-2h2c.55 0 1-.45 1-1V8h2c1.1 0 2-.9 2-2V3.46c-.95-.3-1.95-.46-3-.46C5.48 3 1 7.48 1 13s4.48 10 10 10 10-4.48 10-10c0-.34-.02-.67-.05-1h-2.03zM10 20.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L8 16v1c0 1.1.9 2 2 2v1.93z',
            },
          },
        ],
      })(t);
    };
    qg.displayName = 'MdVpnLock';
    var Zg = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M5.5 22v-7.5H4V9c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v5.5H9.5V22h-4zM18 22v-6h3l-2.54-7.63C18.18 7.55 17.42 7 16.56 7h-.12c-.86 0-1.63.55-1.9 1.37L12 16h3v6h3zM7.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm9 0c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2z',
            },
          },
        ],
      })(t);
    };
    Zg.displayName = 'MdWc';
    var Jg = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z',
            },
          },
        ],
      })(t);
    };
    Jg.displayName = 'MdWifi';
    var $g = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22z',
            },
          },
        ],
      })(t);
    };
    $g.displayName = 'MdAcUnit';
    var Yg = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M17 5H3c-1.1 0-2 .89-2 2v9h2c0 1.65 1.34 3 3 3s3-1.35 3-3h5.5c0 1.65 1.34 3 3 3s3-1.35 3-3H23v-5l-6-6zM3 11V7h4v4H3zm3 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7-6.5H9V7h4v4zm4.5 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM15 11V7h1l4 4h-5z',
            },
          },
        ],
      })(t);
    };
    Yg.displayName = 'MdAirportShuttle';
    var Xg = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L12 10.66 10.48 12h.01L7.8 14.39c-.64.64-1.49.99-2.4.99-1.87 0-3.39-1.51-3.39-3.38S3.53 8.62 5.4 8.62c.91 0 1.76.35 2.44 1.03l1.13 1 1.51-1.34L9.22 8.2C8.2 7.18 6.84 6.62 5.4 6.62 2.42 6.62 0 9.04 0 12s2.42 5.38 5.4 5.38c1.44 0 2.8-.56 3.77-1.53l2.83-2.5.01.01L13.52 12h-.01l2.69-2.39c.64-.64 1.49-.99 2.4-.99 1.87 0 3.39 1.51 3.39 3.38s-1.52 3.38-3.39 3.38c-.9 0-1.76-.35-2.44-1.03l-1.14-1.01-1.51 1.34 1.27 1.12c1.02 1.01 2.37 1.57 3.82 1.57 2.98 0 5.4-2.41 5.4-5.38s-2.42-5.37-5.4-5.37z',
            },
          },
        ],
      })(t);
    };
    Xg.displayName = 'MdAllInclusive';
    var tz = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M13.127 14.56l1.43-1.43 6.44 6.443L19.57 21zm4.293-5.73l2.86-2.86c-3.95-3.95-10.35-3.96-14.3-.02 3.93-1.3 8.31-.25 11.44 2.88zM5.95 5.98c-3.94 3.95-3.93 10.35.02 14.3l2.86-2.86C5.7 14.29 4.65 9.91 5.95 5.98zm.02-.02l-.01.01c-.38 3.01 1.17 6.88 4.3 10.02l5.73-5.73c-3.13-3.13-7.01-4.68-10.02-4.3z',
            },
          },
        ],
      })(t);
    };
    tz.displayName = 'MdBeachAccess';
    var az = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z',
            },
          },
        ],
      })(t);
    };
    az.displayName = 'MdBusinessCenter';
    var rz = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7.5 18c-.83 0-1.5-.67-1.5-1.5S6.67 15 7.5 15s1.5.67 1.5 1.5S8.33 18 7.5 18zm0-9C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6 9 6.67 9 7.5 8.33 9 7.5 9zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm0-9c-.83 0-1.5-.67-1.5-1.5S15.67 6 16.5 6s1.5.67 1.5 1.5S17.33 9 16.5 9z',
            },
          },
        ],
      })(t);
    };
    rz.displayName = 'MdCasino';
    var nz = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          { tag: 'circle', attr: { cx: '14.5', cy: '10.5', r: '1.25' } },
          { tag: 'circle', attr: { cx: '9.5', cy: '10.5', r: '1.25' } },
          {
            tag: 'path',
            attr: {
              d:
                'M22.94 12.66c.04-.21.06-.43.06-.66s-.02-.45-.06-.66c-.25-1.51-1.36-2.74-2.81-3.17-.53-1.12-1.28-2.1-2.19-2.91C16.36 3.85 14.28 3 12 3s-4.36.85-5.94 2.26c-.92.81-1.67 1.8-2.19 2.91-1.45.43-2.56 1.65-2.81 3.17-.04.21-.06.43-.06.66s.02.45.06.66c.25 1.51 1.36 2.74 2.81 3.17.52 1.11 1.27 2.09 2.17 2.89C7.62 20.14 9.71 21 12 21s4.38-.86 5.97-2.28c.9-.8 1.65-1.79 2.17-2.89 1.44-.43 2.55-1.65 2.8-3.17zM19 14c-.1 0-.19-.02-.29-.03-.2.67-.49 1.29-.86 1.86C16.6 17.74 14.45 19 12 19s-4.6-1.26-5.85-3.17c-.37-.57-.66-1.19-.86-1.86-.1.01-.19.03-.29.03-1.1 0-2-.9-2-2s.9-2 2-2c.1 0 .19.02.29.03.2-.67.49-1.29.86-1.86C7.4 6.26 9.55 5 12 5s4.6 1.26 5.85 3.17c.37.57.66 1.19.86 1.86.1-.01.19-.03.29-.03 1.1 0 2 .9 2 2s-.9 2-2 2zM7.5 14c.76 1.77 2.49 3 4.5 3s3.74-1.23 4.5-3h-9z',
            },
          },
        ],
      })(t);
    };
    nz.displayName = 'MdChildCare';
    var cz = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M13 2v8h8c0-4.42-3.58-8-8-8zm6.32 13.89C20.37 14.54 21 12.84 21 11H6.44l-.95-2H2v2h2.22s1.89 4.07 2.12 4.42c-1.1.59-1.84 1.75-1.84 3.08C4.5 20.43 6.07 22 8 22c1.76 0 3.22-1.3 3.46-3h2.08c.24 1.7 1.7 3 3.46 3 1.93 0 3.5-1.57 3.5-3.5 0-1.04-.46-1.97-1.18-2.61zM8 20c-.83 0-1.5-.67-1.5-1.5S7.17 17 8 17s1.5.67 1.5 1.5S8.83 20 8 20zm9 0c-.83 0-1.5-.67-1.5-1.5S16.17 17 17 17s1.5.67 1.5 1.5S17.83 20 17 20z',
            },
          },
        ],
      })(t);
    };
    cz.displayName = 'MdChildFriendly';
    var ez = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z',
            },
          },
        ],
      })(t);
    };
    ez.displayName = 'MdFitnessCenter';
    var vz = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z',
            },
          },
        ],
      })(t);
    };
    vz.displayName = 'MdFreeBreakfast';
    var iz = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          { tag: 'circle', attr: { cx: '19.5', cy: '19.5', r: '1.5' } },
          {
            tag: 'path',
            attr: {
              d:
                'M17 5.92L9 2v18H7v-1.73c-1.79.35-3 .99-3 1.73 0 1.1 2.69 2 6 2s6-.9 6-2c0-.99-2.16-1.81-5-1.97V8.98l6-3.06z',
            },
          },
        ],
      })(t);
    };
    iz.displayName = 'MdGolfCourse';
    var dz = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          { tag: 'circle', attr: { cx: '7', cy: '6', r: '2' } },
          {
            tag: 'path',
            attr: {
              d:
                'M11.15 12c-.31-.22-.59-.46-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5-.29-.14-.62-.23-.96-.23h-.03C6.01 9 5 10.01 5 11.25V12H2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8H11.15zM7 20H5v-6h2v6zm4 0H9v-6h2v6zm4 0h-2v-6h2v6zm4 0h-2v-6h2v6zm-.35-14.14l-.07-.07c-.57-.62-.82-1.41-.67-2.2L18 3h-1.89l-.06.43c-.2 1.36.27 2.71 1.3 3.72l.07.06c.57.62.82 1.41.67 2.2l-.11.59h1.91l.06-.43c.21-1.36-.27-2.71-1.3-3.71zm-4 0l-.07-.07c-.57-.62-.82-1.41-.67-2.2L14 3h-1.89l-.06.43c-.2 1.36.27 2.71 1.3 3.72l.07.06c.57.62.82 1.41.67 2.2l-.11.59h1.91l.06-.43c.21-1.36-.27-2.71-1.3-3.71z',
            },
          },
        ],
      })(t);
    };
    dz.displayName = 'MdHotTub';
    var hz = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M18 2.01L6 2c-1.1 0-2 .89-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.11-.9-1.99-2-1.99zM18 20H6v-9.02h12V20zm0-11H6V4h12v5zM8 5h2v3H8zm0 7h2v5H8z',
            },
          },
        ],
      })(t);
    };
    hz.displayName = 'MdKitchen';
    var oz = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M22 21c-1.11 0-1.73-.37-2.18-.64-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.46.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.46.27-1.08.64-2.19.64-1.11 0-1.73-.37-2.18-.64-.37-.23-.6-.36-1.15-.36s-.78.13-1.15.36c-.46.27-1.08.64-2.19.64v-2c.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64s1.73.37 2.18.64c.37.23.59.36 1.15.36.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64 1.11 0 1.73.37 2.18.64.37.22.6.36 1.15.36s.78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.23.59.36 1.15.36v2zm0-4.5c-1.11 0-1.73-.37-2.18-.64-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.45.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.45.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36s-.78.13-1.15.36c-.47.27-1.09.64-2.2.64v-2c.56 0 .78-.13 1.15-.36.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36.56 0 .78-.13 1.15-.36.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36s.78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36v2zM8.67 12c.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64 1.11 0 1.73.37 2.18.64.37.22.6.36 1.15.36s.78-.13 1.15-.36c.12-.07.26-.15.41-.23L10.48 5C8.93 3.45 7.5 2.99 5 3v2.5c1.82-.01 2.89.39 4 1.5l1 1-3.25 3.25c.31.12.56.27.77.39.37.23.59.36 1.15.36z',
            },
          },
          { tag: 'circle', attr: { cx: '16.5', cy: '5.5', r: '2.5' } },
        ],
      })(t);
    };
    oz.displayName = 'MdPool';
    var lz = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M2 17h20v2H2zm11.84-9.21c.1-.24.16-.51.16-.79 0-1.1-.9-2-2-2s-2 .9-2 2c0 .28.06.55.16.79C6.25 8.6 3.27 11.93 3 16h18c-.27-4.07-3.25-7.4-7.16-8.21z',
            },
          },
        ],
      })(t);
    };
    lz.displayName = 'MdRoomService';
    var uz = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M2 6l6.99 7H2v3h9.99l7 7 1.26-1.25-17-17zm18.5 7H22v3h-1.5zM18 13h1.5v3H18zm.85-8.12c.62-.61 1-1.45 1-2.38h-1.5c0 1.02-.83 1.85-1.85 1.85v1.5c2.24 0 4 1.83 4 4.07V12H22V9.92c0-2.23-1.28-4.15-3.15-5.04zM14.5 8.7h1.53c1.05 0 1.97.74 1.97 2.05V12h1.5v-1.59c0-1.8-1.6-3.16-3.47-3.16H14.5c-1.02 0-1.85-.98-1.85-2s.83-1.75 1.85-1.75V2c-1.85 0-3.35 1.5-3.35 3.35s1.5 3.35 3.35 3.35zm2.5 7.23V13h-2.93z',
            },
          },
        ],
      })(t);
    };
    uz.displayName = 'MdSmokeFree';
    var sz = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M2 16h15v3H2zm18.5 0H22v3h-1.5zM18 16h1.5v3H18zm.85-8.27c.62-.61 1-1.45 1-2.38C19.85 3.5 18.35 2 16.5 2v1.5c1.02 0 1.85.83 1.85 1.85S17.52 7.2 16.5 7.2v1.5c2.24 0 4 1.83 4 4.07V15H22v-2.24c0-2.22-1.28-4.14-3.15-5.03zm-2.82 2.47H14.5c-1.02 0-1.85-.98-1.85-2s.83-1.75 1.85-1.75v-1.5c-1.85 0-3.35 1.5-3.35 3.35s1.5 3.35 3.35 3.35h1.53c1.05 0 1.97.74 1.97 2.05V15h1.5v-1.64c0-1.81-1.6-3.16-3.47-3.16z',
            },
          },
        ],
      })(t);
    };
    sz.displayName = 'MdSmokingRooms';
    var Mz = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M8.55 12c-1.07-.71-2.25-1.27-3.53-1.61 1.28.34 2.46.9 3.53 1.61zm10.43-1.61c-1.29.34-2.49.91-3.57 1.64 1.08-.73 2.28-1.3 3.57-1.64z',
            },
          },
          {
            tag: 'path',
            attr: {
              d:
                'M15.49 9.63c-.18-2.79-1.31-5.51-3.43-7.63-2.14 2.14-3.32 4.86-3.55 7.63 1.28.68 2.46 1.56 3.49 2.63 1.03-1.06 2.21-1.94 3.49-2.63zm-6.5 2.65c-.14-.1-.3-.19-.45-.29.15.11.31.19.45.29zm6.42-.25c-.13.09-.27.16-.4.26.13-.1.27-.17.4-.26zM12 15.45C9.85 12.17 6.18 10 2 10c0 5.32 3.36 9.82 8.03 11.49.63.23 1.29.4 1.97.51.68-.12 1.33-.29 1.97-.51C18.64 19.82 22 15.32 22 10c-4.18 0-7.85 2.17-10 5.45z',
            },
          },
        ],
      })(t);
    };
    Mz.displayName = 'MdSpa';
    var gz = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 6c1.11 0 2-.9 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2zm4.6 9.99l-1.07-1.07-1.08 1.07c-1.3 1.3-3.58 1.31-4.89 0l-1.07-1.07-1.09 1.07C6.75 16.64 5.88 17 4.96 17c-.73 0-1.4-.23-1.96-.61V21c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-4.61c-.56.38-1.23.61-1.96.61-.92 0-1.79-.36-2.44-1.01zM18 9h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v1.54c0 1.08.88 1.96 1.96 1.96.52 0 1.02-.2 1.38-.57l2.14-2.13 2.13 2.13c.74.74 2.03.74 2.77 0l2.14-2.13 2.13 2.13c.37.37.86.57 1.38.57 1.08 0 1.96-.88 1.96-1.96V12C21 10.34 19.66 9 18 9z',
            },
          },
        ],
      })(t);
    };
    gz.displayName = 'MdCake';
    var zz = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z',
            },
          },
        ],
      })(t);
    };
    zz.displayName = 'MdDomain';
    var mz = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z',
            },
          },
        ],
      })(t);
    };
    mz.displayName = 'MdGroup';
    var pz = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M8 10H5V7H3v3H0v2h3v3h2v-3h3v-2zm10 1c1.66 0 2.99-1.34 2.99-3S19.66 5 18 5c-.32 0-.63.05-.91.14.57.81.9 1.79.9 2.86s-.34 2.04-.9 2.86c.28.09.59.14.91.14zm-5 0c1.66 0 2.99-1.34 2.99-3S14.66 5 13 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm6.62 2.16c.83.73 1.38 1.66 1.38 2.84v2h3v-2c0-1.54-2.37-2.49-4.38-2.84zM13 13c-2 0-6 1-6 3v2h12v-2c0-2-4-3-6-3z',
            },
          },
        ],
      })(t);
    };
    pz.displayName = 'MdGroupAdd';
    var fz = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z',
            },
          },
        ],
      })(t);
    };
    fz.displayName = 'MdLocationCity';
    var Hz = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z',
            },
          },
        ],
      })(t);
    };
    Hz.displayName = 'MdMood';
    var Vz = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 3c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5z',
            },
          },
        ],
      })(t);
    };
    Vz.displayName = 'MdMoodBad';
    var yz = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z',
            },
          },
        ],
      })(t);
    };
    yz.displayName = 'MdNotifications';
    var Lz = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z',
            },
          },
        ],
      })(t);
    };
    Lz.displayName = 'MdNotificationsActive';
    var Bz = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z',
            },
          },
        ],
      })(t);
    };
    Bz.displayName = 'MdNotificationsNone';
    var wz = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 18.69L7.84 6.14 5.27 3.49 4 4.76l2.8 2.8v.01c-.52.99-.8 2.16-.8 3.42v5l-2 2v1h13.73l2 2L21 19.72l-1-1.03zM12 22c1.11 0 2-.89 2-2h-4c0 1.11.89 2 2 2zm6-7.32V11c0-3.08-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68c-.15.03-.29.08-.42.12-.1.03-.2.07-.3.11h-.01c-.01 0-.01 0-.02.01-.23.09-.46.2-.68.31 0 0-.01 0-.01.01L18 14.68z',
            },
          },
        ],
      })(t);
    };
    wz.displayName = 'MdNotificationsOff';
    var xz = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.93 6 11v5l-2 2v1h16v-1l-2-2zm-3.5-6.2l-2.8 3.4h2.8V15h-5v-1.8l2.8-3.4H9.5V8h5v1.8z',
            },
          },
        ],
      })(t);
    };
    xz.displayName = 'MdNotificationsPaused';
    var Nz = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M3 5v6h5L7 7l4 1V3H5c-1.1 0-2 .9-2 2zm5 8H3v6c0 1.1.9 2 2 2h6v-5l-4 1 1-4zm9 4l-4-1v5h6c1.1 0 2-.9 2-2v-6h-5l1 4zm2-14h-6v5l4-1-1 4h5V5c0-1.1-.9-2-2-2z',
            },
          },
        ],
      })(t);
    };
    Nz.displayName = 'MdPages';
    var Cz = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 3c1.63 0 3.06.79 3.98 2H12c-1.66 0-3 1.34-3 3 0 .35.07.69.18 1H7.1c-.06-.32-.1-.66-.1-1 0-2.76 2.24-5 5-5zm0 10c-1.63 0-3.06-.79-3.98-2H12c1.66 0 3-1.34 3-3 0-.35-.07-.69-.18-1h2.08c.07.32.1.66.1 1 0 2.76-2.24 5-5 5z',
            },
          },
        ],
      })(t);
    };
    Cz.displayName = 'MdPartyMode';
    var Sz = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z',
            },
          },
        ],
      })(t);
    };
    Sz.displayName = 'MdPeople';
    var Az = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M16.5 13c-1.2 0-3.07.34-4.5 1-1.43-.67-3.3-1-4.5-1C5.33 13 1 14.08 1 16.25V19h22v-2.75c0-2.17-4.33-3.25-6.5-3.25zm-4 4.5h-10v-1.25c0-.54 2.56-1.75 5-1.75s5 1.21 5 1.75v1.25zm9 0H14v-1.25c0-.46-.2-.86-.52-1.22.88-.3 1.96-.53 3.02-.53 2.44 0 5 1.21 5 1.75v1.25zM7.5 12c1.93 0 3.5-1.57 3.5-3.5S9.43 5 7.5 5 4 6.57 4 8.5 5.57 12 7.5 12zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 5.5c1.93 0 3.5-1.57 3.5-3.5S18.43 5 16.5 5 13 6.57 13 8.5s1.57 3.5 3.5 3.5zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z',
            },
          },
        ],
      })(t);
    };
    Az.displayName = 'MdPeopleOutline';
    var bz = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
            },
          },
        ],
      })(t);
    };
    bz.displayName = 'MdPerson';
    var Pz = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
            },
          },
        ],
      })(t);
    };
    Pz.displayName = 'MdPersonAdd';
    var Fz = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z',
            },
          },
        ],
      })(t);
    };
    Fz.displayName = 'MdPersonOutline';
    var kz = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d: 'M10 8H8v4H4v2h4v4h2v-4h4v-2h-4zm4.5-1.92V7.9l2.5-.5V18h2V5z',
            },
          },
        ],
      })(t);
    };
    kz.displayName = 'MdPlusOne';
    var Oz = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z',
            },
          },
        ],
      })(t);
    };
    Oz.displayName = 'MdPoll';
    var Tz = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z',
            },
          },
        ],
      })(t);
    };
    Tz.displayName = 'MdPublic';
    var Rz = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z',
            },
          },
        ],
      })(t);
    };
    Rz.displayName = 'MdSchool';
    var Dz = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          { tag: 'circle', attr: { cx: '15.5', cy: '9.5', r: '1.5' } },
          { tag: 'circle', attr: { cx: '8.5', cy: '9.5', r: '1.5' } },
          {
            tag: 'path',
            attr: {
              d:
                'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-6c-2.33 0-4.32 1.45-5.12 3.5h1.67c.69-1.19 1.97-2 3.45-2s2.75.81 3.45 2h1.67c-.8-2.05-2.79-3.5-5.12-3.5z',
            },
          },
        ],
      })(t);
    };
    Dz.displayName = 'MdSentimentDissatisfied';
    var Iz = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          { tag: 'path', attr: { d: 'M9 14h6v1.5H9z' } },
          { tag: 'circle', attr: { cx: '15.5', cy: '9.5', r: '1.5' } },
          { tag: 'circle', attr: { cx: '8.5', cy: '9.5', r: '1.5' } },
          {
            tag: 'path',
            attr: {
              d:
                'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
            },
          },
        ],
      })(t);
    };
    Iz.displayName = 'MdSentimentNeutral';
    var Ez = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          { tag: 'circle', attr: { cx: '15.5', cy: '9.5', r: '1.5' } },
          { tag: 'circle', attr: { cx: '8.5', cy: '9.5', r: '1.5' } },
          {
            tag: 'path',
            attr: {
              d:
                'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-4c-1.48 0-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5s4.32-1.45 5.12-3.5h-1.67c-.7 1.19-1.97 2-3.45 2z',
            },
          },
        ],
      })(t);
    };
    Ez.displayName = 'MdSentimentSatisfied';
    var Wz = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm4.18-12.24l-1.06 1.06-1.06-1.06L13 8.82l1.06 1.06L13 10.94 14.06 12l1.06-1.06L16.18 12l1.06-1.06-1.06-1.06 1.06-1.06zM7.82 12l1.06-1.06L9.94 12 11 10.94 9.94 9.88 11 8.82 9.94 7.76 8.88 8.82 7.82 7.76 6.76 8.82l1.06 1.06-1.06 1.06zM12 14c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5z',
            },
          },
        ],
      })(t);
    };
    Wz.displayName = 'MdSentimentVeryDissatisfied';
    var Uz = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm1-10.06L14.06 11l1.06-1.06L16.18 11l1.06-1.06-2.12-2.12zm-4.12 0L9.94 11 11 9.94 8.88 7.82 6.76 9.94 7.82 11zM12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z',
            },
          },
        ],
      })(t);
    };
    Uz.displayName = 'MdSentimentVerySatisfied';
    var Gz = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z',
            },
          },
        ],
      })(t);
    };
    Gz.displayName = 'MdShare';
    var jz = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z',
            },
          },
        ],
      })(t);
    };
    jz.displayName = 'MdWhatshot';
    var _z = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
            },
          },
        ],
      })(t);
    };
    _z.displayName = 'MdCheckBox';
    var Kz = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z',
            },
          },
        ],
      })(t);
    };
    Kz.displayName = 'MdCheckBoxOutlineBlank';
    var Qz = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z',
            },
          },
        ],
      })(t);
    };
    Qz.displayName = 'MdIndeterminateCheckBox';
    var qz = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
            },
          },
        ],
      })(t);
    };
    qz.displayName = 'MdRadioButtonChecked';
    var Zz = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
            },
          },
        ],
      })(t);
    };
    Zz.displayName = 'MdRadioButtonUnchecked';
    var Jz = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z',
            },
          },
        ],
      })(t);
    };
    Jz.displayName = 'MdStar';
    var $z = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z',
            },
          },
        ],
      })(t);
    };
    $z.displayName = 'MdStarBorder';
    var Yz = function(t) {
      return d({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
          {
            tag: 'path',
            attr: {
              d:
                'M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z',
            },
          },
        ],
      })(t);
    };
    Yz.displayName = 'MdStarHalf';
  },
]);


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_history_createBrowserHistory__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_history_createBrowserHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_history_createBrowserHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router__ = __webpack_require__(2);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter = function (_React$Component) {
  _inherits(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, BrowserRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = __WEBPACK_IMPORTED_MODULE_2_history_createBrowserHistory___default()(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  BrowserRouter.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_3_react_router__["e" /* Router */], { history: this.history, children: this.props.children });
  };

  return BrowserRouter;
}(__WEBPACK_IMPORTED_MODULE_0_react__["default"].Component);

BrowserRouter.propTypes = {
  basename: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  forceRefresh: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  getUserConfirmation: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  keyLength: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node
};


/* harmony default export */ __webpack_exports__["a"] = (BrowserRouter);

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_history_createHashHistory__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_history_createHashHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_history_createHashHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router__ = __webpack_require__(2);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter = function (_React$Component) {
  _inherits(HashRouter, _React$Component);

  function HashRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, HashRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = __WEBPACK_IMPORTED_MODULE_2_history_createHashHistory___default()(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  HashRouter.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_3_react_router__["e" /* Router */], { history: this.history, children: this.props.children });
  };

  return HashRouter;
}(__WEBPACK_IMPORTED_MODULE_0_react__["default"].Component);

HashRouter.propTypes = {
  basename: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  getUserConfirmation: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  hashType: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['hashbang', 'noslash', 'slash']),
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node
};


/* harmony default export */ __webpack_exports__["a"] = (HashRouter);

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0_react_router__["i"]; });


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Link__ = __webpack_require__(23);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
var NavLink = function NavLink(_ref) {
  var to = _ref.to,
      exact = _ref.exact,
      strict = _ref.strict,
      location = _ref.location,
      activeClassName = _ref.activeClassName,
      className = _ref.className,
      activeStyle = _ref.activeStyle,
      style = _ref.style,
      getIsActive = _ref.isActive,
      rest = _objectWithoutProperties(_ref, ['to', 'exact', 'strict', 'location', 'activeClassName', 'className', 'activeStyle', 'style', 'isActive']);

  return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_2_react_router__["f" /* Route */], {
    path: (typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object' ? to.pathname : to,
    exact: exact,
    strict: strict,
    location: location,
    children: function children(_ref2) {
      var location = _ref2.location,
          match = _ref2.match;

      var isActive = !!(getIsActive ? getIsActive(match, location) : match);

      return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */], _extends({
        to: to,
        className: isActive ? [activeClassName, className].filter(function (i) {
          return i;
        }).join(' ') : className,
        style: isActive ? _extends({}, style, activeStyle) : style
      }, rest));
    }
  });
};

NavLink.propTypes = {
  to: __WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */].propTypes.to,
  exact: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  strict: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  location: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  activeClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  activeStyle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  style: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  isActive: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};

NavLink.defaultProps = {
  activeClassName: 'active'
};

/* harmony default export */ __webpack_exports__["a"] = (NavLink);

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0_react_router__["h"]; });


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0_react_router__["g"]; });


/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0_react_router__["f"]; });


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0_react_router__["e"]; });


/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0_react_router__["d"]; });


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0_react_router__["c"]; });


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0_react_router__["b"]; });


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0_react_router__["a"]; });


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_history_createMemoryHistory__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_history_createMemoryHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_history_createMemoryHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Router__ = __webpack_require__(11);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






/**
 * The public API for a <Router> that stores location in memory.
 */

var MemoryRouter = function (_React$Component) {
  _inherits(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, MemoryRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = __WEBPACK_IMPORTED_MODULE_2_history_createMemoryHistory___default()(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  MemoryRouter.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_3__Router__["a" /* default */], { history: this.history, children: this.props.children });
  };

  return MemoryRouter;
}(__WEBPACK_IMPORTED_MODULE_0_react__["default"].Component);

MemoryRouter.propTypes = {
  initialEntries: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array,
  initialIndex: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  getUserConfirmation: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  keyLength: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node
};


/* harmony default export */ __webpack_exports__["a"] = (MemoryRouter);

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




/**
 * The public API for prompting the user before navigating away
 * from a screen with a component.
 */

var Prompt = function (_React$Component) {
  _inherits(Prompt, _React$Component);

  function Prompt() {
    _classCallCheck(this, Prompt);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Prompt.prototype.enable = function enable(message) {
    if (this.unblock) this.unblock();

    this.unblock = this.context.router.history.block(message);
  };

  Prompt.prototype.disable = function disable() {
    if (this.unblock) {
      this.unblock();
      this.unblock = null;
    }
  };

  Prompt.prototype.componentWillMount = function componentWillMount() {
    if (this.props.when) this.enable(this.props.message);
  };

  Prompt.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.when) {
      if (!this.props.when || this.props.message !== nextProps.message) this.enable(nextProps.message);
    } else {
      this.disable();
    }
  };

  Prompt.prototype.componentWillUnmount = function componentWillUnmount() {
    this.disable();
  };

  Prompt.prototype.render = function render() {
    return null;
  };

  return Prompt;
}(__WEBPACK_IMPORTED_MODULE_0_react__["default"].Component);

Prompt.propTypes = {
  when: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  message: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]).isRequired
};
Prompt.defaultProps = {
  when: true
};
Prompt.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    history: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
      block: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
    }).isRequired
  }).isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Prompt);

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




/**
 * The public API for updating the location programatically
 * with a component.
 */

var Redirect = function (_React$Component) {
  _inherits(Redirect, _React$Component);

  function Redirect() {
    _classCallCheck(this, Redirect);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Redirect.prototype.isStatic = function isStatic() {
    return this.context.router && this.context.router.staticContext;
  };

  Redirect.prototype.componentWillMount = function componentWillMount() {
    if (this.isStatic()) this.perform();
  };

  Redirect.prototype.componentDidMount = function componentDidMount() {
    if (!this.isStatic()) this.perform();
  };

  Redirect.prototype.perform = function perform() {
    var history = this.context.router.history;
    var _props = this.props,
        push = _props.push,
        to = _props.to;


    if (push) {
      history.push(to);
    } else {
      history.replace(to);
    }
  };

  Redirect.prototype.render = function render() {
    return null;
  };

  return Redirect;
}(__WEBPACK_IMPORTED_MODULE_0_react__["default"].Component);

Redirect.propTypes = {
  push: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  from: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  to: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object])
};
Redirect.defaultProps = {
  push: false
};
Redirect.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    history: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
      push: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
      replace: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
    }).isRequired,
    staticContext: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
  }).isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Redirect);

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_invariant__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_PathUtils__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_PathUtils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_history_PathUtils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Router__ = __webpack_require__(11);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var normalizeLocation = function normalizeLocation(object) {
  var _object$pathname = object.pathname,
      pathname = _object$pathname === undefined ? '/' : _object$pathname,
      _object$search = object.search,
      search = _object$search === undefined ? '' : _object$search,
      _object$hash = object.hash,
      hash = _object$hash === undefined ? '' : _object$hash;


  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var addBasename = function addBasename(basename, location) {
  if (!basename) return location;

  return _extends({}, location, {
    pathname: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_history_PathUtils__["addLeadingSlash"])(basename) + location.pathname
  });
};

var stripBasename = function stripBasename(basename, location) {
  if (!basename) return location;

  var base = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_history_PathUtils__["addLeadingSlash"])(basename);

  if (location.pathname.indexOf(base) !== 0) return location;

  return _extends({}, location, {
    pathname: location.pathname.substr(base.length)
  });
};

var createLocation = function createLocation(location) {
  return typeof location === 'string' ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_history_PathUtils__["parsePath"])(location) : normalizeLocation(location);
};

var createURL = function createURL(location) {
  return typeof location === 'string' ? location : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_history_PathUtils__["createPath"])(location);
};

var staticHandler = function staticHandler(methodName) {
  return function () {
    __WEBPACK_IMPORTED_MODULE_0_invariant___default()(false, 'You cannot %s with <StaticRouter>', methodName);
  };
};

var noop = function noop() {};

/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */

var StaticRouter = function (_React$Component) {
  _inherits(StaticRouter, _React$Component);

  function StaticRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, StaticRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.createHref = function (path) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_history_PathUtils__["addLeadingSlash"])(_this.props.basename + createURL(path));
    }, _this.handlePush = function (location) {
      var _this$props = _this.props,
          basename = _this$props.basename,
          context = _this$props.context;

      context.action = 'PUSH';
      context.location = addBasename(basename, createLocation(location));
      context.url = createURL(context.location);
    }, _this.handleReplace = function (location) {
      var _this$props2 = _this.props,
          basename = _this$props2.basename,
          context = _this$props2.context;

      context.action = 'REPLACE';
      context.location = addBasename(basename, createLocation(location));
      context.url = createURL(context.location);
    }, _this.handleListen = function () {
      return noop;
    }, _this.handleBlock = function () {
      return noop;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  StaticRouter.prototype.getChildContext = function getChildContext() {
    return {
      router: {
        staticContext: this.props.context
      }
    };
  };

  StaticRouter.prototype.render = function render() {
    var _props = this.props,
        basename = _props.basename,
        context = _props.context,
        location = _props.location,
        props = _objectWithoutProperties(_props, ['basename', 'context', 'location']);

    var history = {
      createHref: this.createHref,
      action: 'POP',
      location: stripBasename(basename, createLocation(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler('go'),
      goBack: staticHandler('goBack'),
      goForward: staticHandler('goForward'),
      listen: this.handleListen,
      block: this.handleBlock
    };

    return __WEBPACK_IMPORTED_MODULE_1_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_4__Router__["a" /* default */], _extends({}, props, { history: history }));
  };

  return StaticRouter;
}(__WEBPACK_IMPORTED_MODULE_1_react__["default"].Component);

StaticRouter.propTypes = {
  basename: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  context: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired,
  location: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object])
};
StaticRouter.defaultProps = {
  basename: '',
  location: '/'
};
StaticRouter.childContextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (StaticRouter);

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_warning__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__matchPath__ = __webpack_require__(12);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






/**
 * The public API for rendering the first <Route> that matches.
 */

var Switch = function (_React$Component) {
  _inherits(Switch, _React$Component);

  function Switch() {
    _classCallCheck(this, Switch);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Switch.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    __WEBPACK_IMPORTED_MODULE_2_warning___default()(!(nextProps.location && !this.props.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    __WEBPACK_IMPORTED_MODULE_2_warning___default()(!(!nextProps.location && this.props.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
  };

  Switch.prototype.render = function render() {
    var route = this.context.router.route;
    var children = this.props.children;

    var location = this.props.location || route.location;

    var match = void 0,
        child = void 0;
    __WEBPACK_IMPORTED_MODULE_0_react__["default"].Children.forEach(children, function (element) {
      if (!__WEBPACK_IMPORTED_MODULE_0_react__["default"].isValidElement(element)) return;

      var _element$props = element.props,
          pathProp = _element$props.path,
          exact = _element$props.exact,
          strict = _element$props.strict,
          from = _element$props.from;

      var path = pathProp || from;

      if (match == null) {
        child = element;
        match = path ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__matchPath__["a" /* default */])(location.pathname, { path: path, exact: exact, strict: strict }) : route.match;
      }
    });

    return match ? __WEBPACK_IMPORTED_MODULE_0_react__["default"].cloneElement(child, { location: location, computedMatch: match }) : null;
  };

  return Switch;
}(__WEBPACK_IMPORTED_MODULE_0_react__["default"].Component);

Switch.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    route: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
  }).isRequired
};
Switch.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  location: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};


/* harmony default export */ __webpack_exports__["a"] = (Switch);

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Route__ = __webpack_require__(24);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






/**
 * A public higher-order component to access the imperative API
 */
var withRouter = function withRouter(Component) {
  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = _objectWithoutProperties(props, ['wrappedComponentRef']);

    return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_3__Route__["a" /* default */], { render: function render(routeComponentProps) {
        return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(Component, _extends({}, remainingProps, routeComponentProps, { ref: wrappedComponentRef }));
      } });
  };

  C.displayName = 'withRouter(' + (Component.displayName || Component.name) + ')';
  C.WrappedComponent = Component;
  C.propTypes = {
    wrappedComponentRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
  };

  return __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics___default()(C, Component);
};

/* harmony default export */ __webpack_exports__["a"] = (withRouter);

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var isarray = __webpack_require__(91)

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = applyMiddleware;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose__ = __webpack_require__(25);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = __WEBPACK_IMPORTED_MODULE_0__compose__["a" /* default */].apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bindActionCreators;
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = combineReducers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_warning__ = __webpack_require__(27);




function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === __WEBPACK_IMPORTED_MODULE_0__createStore__["b" /* ActionTypes */].INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__["a" /* default */])(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: __WEBPACK_IMPORTED_MODULE_0__createStore__["b" /* ActionTypes */].INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + __WEBPACK_IMPORTED_MODULE_0__createStore__["b" /* ActionTypes */].INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {
      if (typeof reducers[key] === 'undefined') {
        warning('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  if (false) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combineReducers__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__compose__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_warning__ = __webpack_require__(27);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return __WEBPACK_IMPORTED_MODULE_0__createStore__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return __WEBPACK_IMPORTED_MODULE_1__combineReducers__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return __WEBPACK_IMPORTED_MODULE_4__compose__["a"]; });







/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (false) {
  warning('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}



/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsolute = function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
};

// About 1.5x faster than the two-arg version of Array#splice()
var spliceOne = function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }list.pop();
};

// This implementation is based heavily on node's url.parse
var resolvePathname = function resolvePathname(to) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash = void 0;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
};

module.exports = resolvePathname;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(99);


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__(100);

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var root; /* global window */


if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28), __webpack_require__(102)(module)))

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var valueEqual = function valueEqual(a, b) {
  if (a === b) return true;

  if (a == null || b == null) return false;

  if (Array.isArray(a)) return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
    return valueEqual(item, b[index]);
  });

  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

  if (aType !== bType) return false;

  if (aType === 'object') {
    var aValue = a.valueOf();
    var bValue = b.valueOf();

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;

    return aKeys.every(function (key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
};

exports.default = valueEqual;

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })
/******/ ]);