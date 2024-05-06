'use strict'
var log = null
var $manifest$cssAutoClassificator = false
var $manifest$cssDisableTransformations = false
var $manifest$cssDisableTransitions = false
var $manifest$disableAnimations = false
var $manifest$expectRunContextEvent = false
var $manifest$html5$prefix = ""
var $manifest$log$disable = false
var $manifest$requireExplicitRecursiveVisibilityStyle = false
var $manifest$requireVerticalTextAlignmentStyle = false
var $manifest$resolutionHeight = 0
var $manifest$resolutionWidth = 0
var $manifest$style$font$family = "Arial"
var $manifest$style$font$lineHeight = 1.2
var $manifest$style$font$pixelSize = 16
var $manifest$style$font$pointSize = 0
var $manifest$system$fingerprint = false
var $manifest$trace$focus = false
var $manifest$trace$keys = false
var $manifest$trace$listeners = false
var $manifest$useNativeFocusForInput = true
var $manifest$virtual$height = 1080
var $manifest$virtual$width = 1920
var qml = (function() {/** @const */
var exports = {};
/** @const */
var _globals = exports
if (!_globals.controls) /** @const */ _globals.controls = {}
var $controls = _globals.controls
if (!_globals.controls.core) /** @const */ _globals.controls.core = {}
var $controls$core = _globals.controls.core
if (!_globals.controls.input) /** @const */ _globals.controls.input = {}
var $controls$input = _globals.controls.input
if (!_globals.controls.pure) /** @const */ _globals.controls.pure = {}
var $controls$pure = _globals.controls.pure
if (!_globals.controls.web) /** @const */ _globals.controls.web = {}
var $controls$web = _globals.controls.web
if (!_globals.core) /** @const */ _globals.core = {}
var $core = _globals.core
if (!_globals.html5) /** @const */ _globals.html5 = {}
var $html5 = _globals.html5
if (!_globals.src) /** @const */ _globals.src = {}
var $src = _globals.src
if (!_globals.video) /** @const */ _globals.video = {}
var $video = _globals.video
if (!_globals.video.html5) /** @const */ _globals.video.html5 = {}
var $video$html5 = _globals.video.html5
if (!_globals.video.videojs) /** @const */ _globals.video.videojs = {}
var $video$videojs = _globals.video.videojs
if (!_globals.web) /** @const */ _globals.web = {}
var $web = _globals.web
_globals.core.core = (function() {/** @const */
var exports = _globals;
//=====[import core.core]=====================

//WARNING: no log() function usage before init.js

$core.device = 0
$core.vendor = ""
$core.__videoBackends = {}

if (typeof navigator !== 'undefined') {
	exports.core.os = navigator.platform
	exports.core.userAgent = navigator.userAgent
	exports.core.language = navigator.language
} else {
	exports.core.os = 'unknown'
	exports.core.userAgent = 'Unknown'
}

var _checkDevice = function(target, info) {
	if (exports.core.userAgent.indexOf(target) < 0)
		return

	exports.core.vendor = info.vendor
	exports.core.device = info.device
	exports.core.os = info.os
}

if (!exports.core.vendor) {
	_checkDevice('Blackberry', { 'vendor': 'blackberry', 'device': 2, 'os': 'blackberry' })
	_checkDevice('Android', { 'vendor': 'google', 'device': 2, 'os': 'android' })
	_checkDevice('iPhone', { 'vendor': 'apple', 'device': 2, 'os': 'iOS' })
	_checkDevice('iPad', { 'vendor': 'apple', 'device': 2, 'os': 'iOS' })
	_checkDevice('iPod', { 'vendor': 'apple', 'device': 2, 'os': 'iOS' })
}

if (exports.core.userAgent.indexOf('Chromium') >= 0)
	exports.core.browser = "Chromium"
else if (exports.core.userAgent.indexOf('Chrome') >= 0)
	exports.core.browser = "Chrome"
else if (exports.core.userAgent.indexOf('Opera') >= 0)
	exports.core.browser = "Opera"
else if (exports.core.userAgent.indexOf('Firefox') >= 0)
	exports.core.browser = "Firefox"
else if (exports.core.userAgent.indexOf('Safari') >= 0)
	exports.core.browser = "Safari"
else if (exports.core.userAgent.indexOf('MSIE') >= 0)
	exports.core.browser = "IE"
else if (exports.core.userAgent.indexOf('YaBrowser') >= 0)
	exports.core.browser = "Yandex"
else
	exports.core.browser = ''


_globals._backend = function() { return _globals.html5.html }
_globals.core.__locationBackend = function() { return _globals.html5.location }
_globals.core.__localStorageBackend = function() { return _globals.html5.localstorage }
_globals.core.__videoBackends.html5 = function() { return _globals.video.html5.backend }
_globals.core.__deviceBackend = function() { return _globals.web.device }

exports.core.keyCodes = {
	13: 'Select',
	16: 'Shift',
	17: 'Ctrl',
	18: 'LeftAlt',
	27: 'Back',
	37: 'Left',
	32: 'Space',
	33: 'PageUp',
	34: 'PageDown',
	36: 'Menu',
	38: 'Up',
	39: 'Right',
	40: 'Down',
	48: '0',
	49: '1',
	50: '2',
	51: '3',
	52: '4',
	53: '5',
	54: '6',
	55: '7',
	56: '8',
	57: '9',
	65: 'A',
	66: 'B',
	67: 'C',
	68: 'D',
	69: 'E',
	70: 'F',
	71: 'G',
	72: 'H',
	73: 'I',
	74: 'J',
	75: 'K',
	76: 'L',
	77: 'M',
	78: 'N',
	79: 'O',
	80: 'P',
	81: 'Q',
	82: 'R',
	83: 'S',
	84: 'T',
	85: 'U',
	86: 'V',
	87: 'W',
	88: 'X',
	89: 'Y',
	90: 'Z',
	112: 'Red',
	113: 'Green',
	114: 'Yellow',
	115: 'Blue',
	219: 'Red',     // [
	221: 'Green',   // ]
	186: 'Yellow',  // ;
	222: 'Blue',    // '
	230: 'RightAlt',
	187: 'VolumeUp',
	189: 'VolumeDown',
	191: 'Mute',
	// NumPad
	96: '0',
	97: '1',
	98: '2',
	99: '3',
	100: '4',
	101: '5',
	102: '6',
	103: '7',
	104: '8',
	105: '9',
	107: 'VolumeUp',
	109: 'VolumeDown',
	111: 'Mute',
}

exports.closeApp = function() {
	window.close()
}
_globals.core.__videoBackends.videojs = function() { return _globals.video.videojs.backend }


if (!Function.prototype.bind) {
	Function.prototype.bind = function(oThis) {
		if (typeof this !== 'function') {
			throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable')
		}

		var aArgs = Array.prototype.slice.call(arguments, 1),
			fToBind = this,
			fNOP    = function() {},
			fBound  = function() {
				return fToBind.apply(this instanceof fNOP && oThis
					? this
					: oThis,
					aArgs.concat(Array.prototype.slice.call(arguments)))
			}

			fNOP.prototype = this.prototype;
			fBound.prototype = new fNOP();

			return fBound;
	}

	if (log === null) {
		//old webkits with no bind don't allow binding console.log
		log = function() {
			var line = ''
			for(var i = 0; i < arguments.length; ++i) {
				line += arguments[i] + ' '
			}
			console.log(line)
		}
	}
}

if (log === null)
	log = console.log.bind(console)

var colorTable = {
	'aliceblue':			'f0f8ff',
	'antiquewhite':			'faebd7',
	'aqua':					'00ffff',
	'aquamarine':			'7fffd4',
	'azure':				'f0ffff',
	'beige':				'f5f5dc',
	'bisque':				'ffe4c4',
	'black':				'000000',
	'blanchedalmond':		'ffebcd',
	'blue':					'0000ff',
	'blueviolet':			'8a2be2',
	'brown':				'a52a2a',
	'burlywood':			'deb887',
	'cadetblue':			'5f9ea0',
	'chartreuse':			'7fff00',
	'chocolate':			'd2691e',
	'coral':				'ff7f50',
	'cornflowerblue':		'6495ed',
	'cornsilk':				'fff8dc',
	'crimson':				'dc143c',
	'cyan':					'00ffff',
	'darkblue':				'00008b',
	'darkcyan':				'008b8b',
	'darkgoldenrod':		'b8860b',
	'darkgray':				'a9a9a9',
	'darkgreen':			'006400',
	'darkgrey':				'a9a9a9',
	'darkkhaki':			'bdb76b',
	'darkmagenta':			'8b008b',
	'darkolivegreen':		'556b2f',
	'darkorange':			'ff8c00',
	'darkorchid':			'9932cc',
	'darkred':				'8b0000',
	'darksalmon':			'e9967a',
	'darkseagreen':			'8fbc8f',
	'darkslateblue':		'483d8b',
	'darkslategray':		'2f4f4f',
	'darkslategrey':		'2f4f4f',
	'darkturquoise':		'00ced1',
	'darkviolet':			'9400d3',
	'deeppink':				'ff1493',
	'deepskyblue':			'00bfff',
	'dimgray':				'696969',
	'dimgrey':				'696969',
	'dodgerblue':			'1e90ff',
	'firebrick':			'b22222',
	'floralwhite':			'fffaf0',
	'forestgreen':			'228b22',
	'fuchsia':				'ff00ff',
	'gainsboro':			'dcdcdc',
	'ghostwhite':			'f8f8ff',
	'gold':					'ffd700',
	'goldenrod':			'daa520',
	'gray':					'808080',
	'grey':					'808080',
	'green':				'008000',
	'greenyellow':			'adff2f',
	'honeydew':				'f0fff0',
	'hotpink':				'ff69b4',
	'indianred':			'cd5c5c',
	'indigo':				'4b0082',
	'ivory':				'fffff0',
	'khaki':				'f0e68c',
	'lavender':				'e6e6fa',
	'lavenderblush':		'fff0f5',
	'lawngreen':			'7cfc00',
	'lemonchiffon':			'fffacd',
	'lightblue':			'add8e6',
	'lightcoral':			'f08080',
	'lightcyan':			'e0ffff',
	'lightgoldenrodyellow':	'fafad2',
	'lightgray':			'd3d3d3',
	'lightgreen':			'90ee90',
	'lightgrey':			'd3d3d3',
	'lightpink':			'ffb6c1',
	'lightsalmon':			'ffa07a',
	'lightseagreen':		'20b2aa',
	'lightskyblue':			'87cefa',
	'lightslategray':		'778899',
	'lightslategrey':		'778899',
	'lightsteelblue':		'b0c4de',
	'lightyellow':			'ffffe0',
	'lime':					'00ff00',
	'limegreen':			'32cd32',
	'linen':				'faf0e6',
	'magenta':				'ff00ff',
	'maroon':				'800000',
	'mediumaquamarine':		'66cdaa',
	'mediumblue':			'0000cd',
	'mediumorchid':			'ba55d3',
	'mediumpurple':			'9370db',
	'mediumseagreen':		'3cb371',
	'mediumslateblue':		'7b68ee',
	'mediumspringgreen':	'00fa9a',
	'mediumturquoise':		'48d1cc',
	'mediumvioletred':		'c71585',
	'midnightblue':			'191970',
	'mintcream':			'f5fffa',
	'mistyrose':			'ffe4e1',
	'moccasin':				'ffe4b5',
	'navajowhite':			'ffdead',
	'navy':					'000080',
	'oldlace':				'fdf5e6',
	'olive':				'808000',
	'olivedrab':			'6b8e23',
	'orange':				'ffa500',
	'orangered':			'ff4500',
	'orchid':				'da70d6',
	'palegoldenrod':		'eee8aa',
	'palegreen':			'98fb98',
	'paleturquoise':		'afeeee',
	'palevioletred':		'db7093',
	'papayawhip':			'ffefd5',
	'peachpuff':			'ffdab9',
	'peru':					'cd853f',
	'pink':					'ffc0cb',
	'plum':					'dda0dd',
	'powderblue':			'b0e0e6',
	'purple':				'800080',
	'red':					'ff0000',
	'rosybrown':			'bc8f8f',
	'royalblue':			'4169e1',
	'saddlebrown':			'8b4513',
	'salmon':				'fa8072',
	'sandybrown':			'f4a460',
	'seagreen':				'2e8b57',
	'seashell':				'fff5ee',
	'sienna':				'a0522d',
	'silver':				'c0c0c0',
	'skyblue':				'87ceeb',
	'slateblue':			'6a5acd',
	'slategray':			'708090',
	'slategrey':			'708090',
	'snow':					'fffafa',
	'springgreen':			'00ff7f',
	'steelblue':			'4682b4',
	'tan':					'd2b48c',
	'teal':					'008080',
	'thistle':				'd8bfd8',
	'tomato':				'ff6347',
	'turquoise':			'40e0d0',
	'violet':				'ee82ee',
	'wheat':				'f5deb3',
	'white':				'ffffff',
	'whitesmoke':			'f5f5f5',
	'yellow':				'ffff00',
	'yellowgreen':			'9acd32',
	'': 					'',
	'transparent': 			'0000'
}

var safeCallImpl = function(callback, self, args, onError) {
	try { return callback.apply(self, args) } catch(ex) { onError(ex) }
}

exports.core.safeCall = function(self, args, onError) {
	return function(callback) { return safeCallImpl(callback, self, args, onError) }
}

exports.core.assign = function(target, path, value) {
	var path = path.split('.')
	var n = path.length - 1
	for(var i = 0; i < n; ++i) {
		target = target[path[i]]
	}
	target[path[n]] = value
}

$core.getKeyCodeByName = function(key) {
	var codes = $core.keyCodes
	for (var i in codes) {
		if (codes[i] === key)
			return ~~i
	}
}

/* @const @type {!$core.CoreObject} */

/**
 * @constructor
 */

var CoreObjectComponent = $core.CoreObject = function(parent) {
	this._local = Object.create(parent? parent._local: null)
}

var CoreObjectComponentPrototype = CoreObjectComponent.prototype
CoreObjectComponentPrototype.componentName = 'core.CoreObject'
CoreObjectComponentPrototype.constructor = CoreObjectComponent

/** @private **/
CoreObjectComponentPrototype.$c = function() { }

/** @private **/
CoreObjectComponentPrototype.$s = function() { }

CoreObjectComponentPrototype.__init = function() {
	var c = {}
	this.$c(c)
	this.$s(c)
	this.completed()
}

/** @private **/
CoreObjectComponentPrototype.__complete = function() { /*do not add anything here, it must be empty (empty onCompleted optimisation)*/ }

///@private gets object by id
CoreObjectComponentPrototype._get = function(name, unsafe) {
	if (name in this) //do not remove in here, properties may contain undefined!
		return this[name]

	if (name in this._local)
		return this._local[name]

	if (unsafe)
		return null
	else
		throw new Error("invalid property requested: '" + name + "'")
}

/** @constructor */
var Color = $core.Color = function(value) {
	if (Array.isArray(value)) {
		this.r = value[0]
		this.g = value[1]
		this.b = value[2]
		this.a = value[3] !== undefined? value[3]: 255
		return
	}
	if (typeof value !== 'string')
	{
		this.r = this.b = this.a = 255
		this.g = 0
		log("invalid color specification: " + value, new Error().stack)
		return
	}
	var triplet
	if (value[0] === '#') {
		triplet = value.substring(1)
	} else if (value.substring(0, 4) === "rgba") {
		var b = value.indexOf('('), e = value.lastIndexOf(')')
		value = value.substring(b + 1, e).split(',')
		this.r = parseInt(value[0], 10)
		this.g = parseInt(value[1], 10)
		this.b = parseInt(value[2], 10)
		this.a = Math.floor(parseFloat(value[3]) * 255)
		return
	} else
		triplet = colorTable[value]

	if (!triplet) {
		this.r = this.b = this.a = 255
		this.g = 0
		log("invalid color specification: " + value, new Error().stack)
		return
	}

	var len = triplet.length;
	if (len === 3 || len === 4) {
		var r = parseInt(triplet[0], 16)
		var g = parseInt(triplet[1], 16)
		var b = parseInt(triplet[2], 16)
		var a = (len === 4)? parseInt(triplet[3], 16): 15
		this.r = (r << 4) | r;
		this.g = (g << 4) | g;
		this.b = (b << 4) | b;
		this.a = (a << 4) | a;
	} else if (len === 6 || len === 8) {
		this.r = parseInt(triplet.substring(0, 2), 16)
		this.g = parseInt(triplet.substring(2, 4), 16)
		this.b = parseInt(triplet.substring(4, 6), 16)
		this.a = (len === 8)? parseInt(triplet.substring(6, 8), 16): 255
	} else
		throw new Error("invalid color specification: " + value)
}

Color.interpolate = function(dst, src, t) {
	if (!(dst instanceof Color))
		dst = new Color(dst)
	if (!(src instanceof Color))
		src = new Color(src)

	var interpolate = function (dst, src, t) {
		return Math.floor(t * (dst - src) + src)
	}

	var r = interpolate(dst.r, src.r, t)
	var g = interpolate(dst.g, src.g, t)
	var b = interpolate(dst.b, src.b, t)
	var a = interpolate(dst.a, src.a, t)

	return new Color([r, g, b, a])
}

Color.normalize = function(spec) {
	if (spec instanceof Color)
		return spec
	else
		return (new Color(spec))
}

var ColorPrototype = Color.prototype
ColorPrototype.constructor = $core.Color
/** @const */

ColorPrototype.rgba = ColorPrototype.toString = function() {
	var a = this.a
	return a == 255?
		"rgb(" + this.r + "," + this.g + "," + this.b + ")":
		"rgba(" + this.r + "," + this.g + "," + this.b + "," + (a / 255) + ")";
}

var hexByte = function(v) {
	var h = (v >> 4) & 0x0f
	var l = (v) & 0x0f
	h += (h > 9)? 0x57: 0x30
	l += (l > 9)? 0x57: 0x30
	return String.fromCharCode(h, l)
}

ColorPrototype.hex = function() {
	return '#' + hexByte(this.r) + hexByte(this.g) + hexByte(this.b) + hexByte(this.a)
}

ColorPrototype.ahex = function() {
	return '#' + hexByte(this.a) + hexByte(this.r) + hexByte(this.g) + hexByte(this.b)
}

exports.addLazyProperty = function(proto, name, creator) {
	var get = function(object) {
		var properties = object.__properties
		var storage = properties[name]
		if (storage !== undefined) {
			if (storage.value === undefined)
				storage.value = creator(object)
			return storage
		}

		return properties[name] = new PropertyStorage(creator(object))
	}

	Object.defineProperty(proto, name, {
		get: function() {
			return get(this).value
		},

		set: function(newValue) {
			var storage = get(this)
			if (storage.forwardSet(this, name, newValue, null))
				return

			throw new Error('could not set lazy property ' + name + ' in ' + proto.componentName)
		},
		enumerable: true
	})
}

exports.addConstProperty = function(proto, name, getter) {
	Object.defineProperty(proto, name, {
		get: function() {
			return getter.call(this)
		},

		set: function(newValue) {
			throw new Error('could not set const property')
		},
		enumerable: true
	})
}

var PropertyStorage = function(value) {
	this.value = value
	this.onChanged = []
}
exports.PropertyStorage = PropertyStorage

var PropertyStoragePrototype = PropertyStorage.prototype

PropertyStoragePrototype.getAnimation = function(name, animation) {
	var a = this.animation
	return a && a.enabled() && !a._native && a._context._completed? a: null
}

PropertyStoragePrototype.__removeUpdater = function(callback) {
	var deps = this.deps
	for(var i = 0, n = deps.length; i < n; i += 2) {
		var object = deps[i]
		var name = deps[i + 1]
		object.removeOnChanged(name, callback)
	}
}

PropertyStoragePrototype.removeUpdater = function() {
	var oldCallback = this.callback
	if (oldCallback !== undefined) {
		this.__removeUpdater(oldCallback)
		this.deps = this.callback = undefined
	}
}

PropertyStoragePrototype.replaceUpdater = function(parent, callback, deps) {
	var oldCallback = this.callback
	if (oldCallback !== undefined)
		this.__removeUpdater(oldCallback)

	this.callback = callback
	this.deps = deps
	var connectOnChanged = parent.connectOnChanged
	for(var i = 0, n = deps.length; i < n; i += 2) {
		var object = deps[i]
		var name = deps[i + 1]
		connectOnChanged.call(parent, object, name, callback)
	}
	callback()
}

PropertyStoragePrototype.forwardSet = function(object, name, newValue, defaultValue) {
	var oldValue = this.getCurrentValue(defaultValue)
	if (oldValue !== null && (oldValue instanceof Object)) {
		//forward property update for mixins
		var forwardTarget = oldValue.defaultProperty
		if (forwardTarget === undefined)
			return false

		var forwardedOldValue = oldValue[forwardTarget]
		if (newValue !== forwardedOldValue) {
			oldValue[forwardTarget] = newValue
			this.callOnChanged(object, name, newValue, forwardedOldValue)
		}
		return true
	} else if (newValue instanceof Object) {
		//first assignment of mixin
		var forwardTarget = newValue.defaultProperty
		if (forwardTarget === undefined)
			return false

		object.connectOnChanged(newValue, forwardTarget, function(v, ov) {
			var storage = object.__properties[name]
			if (storage !== undefined)
				storage.callOnChanged(object, name, v, ov)
		})
		return false
	}
}

PropertyStoragePrototype.discard = function() {
	var animation = this.getAnimation()
	if (animation)
		animation.complete()
	this.onChanged = []
}

PropertyStoragePrototype.getSimpleValue = function(defaultValue) {
	var value = this.value
	return value !== undefined? value: defaultValue
}

PropertyStoragePrototype.getCurrentValue = function(defaultValue) {
	var value = this.interpolatedValue
	return value !== undefined? value: this.getSimpleValue(defaultValue)
}

PropertyStoragePrototype.setCurrentValue = function(object, name, newValue, defaultValue, callUpdate) {
	var oldValue = this.value
	this.interpolatedValue = undefined
	this.value = newValue
	if (callUpdate)
		this.callOnChanged(object, name, newValue, oldValue)
}

PropertyStoragePrototype.set = function(object, name, newValue, defaultValue, callUpdate) {
	var oldValue = this.value
	if (oldValue === undefined)
		oldValue = defaultValue

	if (oldValue === newValue)
		return
	if (this.forwardSet(object, name, newValue, defaultValue))
		return
	this.value = newValue
	if (callUpdate)
		this.callOnChanged(object, name, newValue, oldValue)
}

var _callOnChanged = function(object, name, value, handlers) {
	var protoCallbacks = object['__changed__' + name]
	var hasProtoCallbacks = protoCallbacks !== undefined
	var hasHandlers = handlers !== undefined

	if (!hasProtoCallbacks && !hasHandlers)
		return

	var invoker = $core.safeCall(object, [value], function(ex) { log("on " + name + " changed callback failed: ", ex, ex.stack) })

	if (hasProtoCallbacks)
		protoCallbacks.forEach(invoker)

	if (hasHandlers)
		handlers.forEach(invoker)
}

PropertyStoragePrototype.callOnChanged = function(object, name, value) {
	_callOnChanged(object, name, value, this.onChanged)
}

PropertyStoragePrototype.removeOnChanged = function(callback) {
	var handlers = this.onChanged
	var idx = handlers.indexOf(callback)
	if (idx >= 0)
		return handlers.splice(idx, 1)
}

var getDefaultValueForType = exports.getDefaultValueForType = function(type) {
	switch(type) {
		case 'enum': //fixme: add default value here
		case 'int':		return 0
		case 'bool':	return false
		case 'real':	return 0.0
		case 'string':	return ""
		case 'array':	return []
		case 'color':
		case 'Color':	return '#0000'
		default:		return (type[0].toUpperCase() === type[0])? null: undefined
	}
}

var convertTo = exports.convertTo = function(type, value) {
	switch(type) {
		case 'enum':
		case 'int':		return ~~value
		case 'bool':	return value? true: false
		case 'real':	return +value
		case 'string':	return String(value)
		default:		return value
	}
}

var getConvertFunction = exports.getConvertFunction = function(type) {
	switch(type) {
		case 'enum':
		case 'int':		return function(value) { return ~~value }
		case 'bool':	return function(value) { return value? true: false }
		case 'real':	return function(value) { return +value }
		case 'string':	return function(value) { return String(value) }
		default:		return function(value) { return value }
	}
}

var isTypeAnimable = function(type) {
	switch(type) {
		case 'int':
		case 'real':
		case 'color':
		case 'Color':
			return true;
		default:
			return false;
	}
}

exports.addProperty = function(proto, type, name, defaultValue) {
	var convert = getConvertFunction(type)
	var animable = isTypeAnimable(type)

	if (defaultValue !== undefined) {
		defaultValue = convert(defaultValue)
	} else {
		defaultValue = getDefaultValueForType(type)
	}

	var createStorage = function(newValue) {
		var properties = this.__properties
		var storage = properties[name]
		if (storage === undefined) { //no storage
			if (newValue === defaultValue) //value === defaultValue, no storage allocation
				return
			storage = properties[name] = new PropertyStorage(defaultValue)
		}
		return storage
	}

	var simpleGet = function() {
		var storage = this.__properties[name]
		return storage !== undefined? storage.getSimpleValue(defaultValue): defaultValue
	}

	var simpleSet = function(newValue) {
		newValue = convert(newValue)
		var storage = createStorage.call(this, newValue)
		if (storage === undefined)
			return

		storage.set(this, name, newValue, defaultValue, true)
	}

	var animatedGet = function() {
		var storage = this.__properties[name]
		return storage !== undefined?
			storage.getCurrentValue(defaultValue):
			defaultValue
	}

	var animatedSet = function(newValue) {
		newValue = convert(newValue)

		var storage = createStorage.call(this, newValue)
		if (storage === undefined)
			return

		var animation = storage.getAnimation()
		if (animation && storage.value !== newValue) {
			var context = this._context
			var backend = context.backend
			if (storage.frameRequest)
				backend.cancelAnimationFrame(storage.frameRequest)

			storage.started = Date.now()

			var src = storage.getCurrentValue(defaultValue)
			var dst = newValue

			var self = this

			var complete = function() {
				if (storage.frameRequest) {
					backend.cancelAnimationFrame(storage.frameRequest)
					storage.frameRequest = undefined
				}
				if (storage.frameRequestDelayed) {
					clearTimeout(storage.frameRequestDelayed)
					storage.frameRequestDelayed = undefined
				}
				animation.complete = function() { }
				storage.interpolatedValue = undefined
				storage.started = undefined
				animation.running = false
				storage.callOnChanged(self, name, dst, src)
			}

			var duration = animation.duration

			var nextFrame = context.wrapNativeCallback(function() {
				var now = Date.now()
				var t = 1.0 * (now - storage.started) / duration
				if (t >= 1 || !animation.active()) {
					complete()
				} else {
					storage.interpolatedValue = convert(animation.interpolate(dst, src, t))
					storage.callOnChanged(self, name, storage.getCurrentValue(defaultValue), src)
					storage.frameRequest = backend.requestAnimationFrame(nextFrame)
				}
			})

			if (animation.delay <= 0)
				storage.frameRequest = backend.requestAnimationFrame(nextFrame)
			else {
				storage.frameRequestDelayed = setTimeout(nextFrame, animation.delay)
			}

			animation.running = true
			animation.complete = complete
		}
		storage.set(this, name, newValue, defaultValue, !animation)
		// if ((!animation || !animation.running) && newValue === defaultValue)
		// 	this.__properties[name] = undefined
	}

	Object.defineProperty(proto, name, {
		get: animable? animatedGet: simpleGet,
		set: animable? animatedSet: simpleSet,
		enumerable: true
	})
}

exports.addAliasProperty = function(object, name, getObject, srcProperty) {
	var target = getObject()
	object.connectOnChanged(target, srcProperty, function(value) {
		var storage = object.__properties[name]
		if (storage !== undefined)
			storage.callOnChanged(object, name, value)
		else
			_callOnChanged(object, name, value) //call prototype handlers
	})

	Object.defineProperty(object, name, {
		get: function() { return target[srcProperty] },
		set: function(value) { target[srcProperty] = value },
		enumerable: true
	})
}

$core.createSignal = function(name) {
	return function() {
		this.emitWithArgs(name, arguments)
	}
}
$core.createSignalForwarder = function(object, name) {
	return (function() {
		object.emitWithArgs(name, arguments)
	})
}

/** @constructor */
$core.EventBinder = function(target) {
	this.target = target
	this.callbacks = {}
	this.enabled = false
}

$core.EventBinder.prototype.on = function(event, callback) {
	if (event in this.callbacks)
		throw new Error('double adding of event (' + event + ')')
	this.callbacks[event] = callback
	if (this.enabled)
		this.target.on(event, callback)
}

$core.EventBinder.prototype.constructor = $core.EventBinder

$core.EventBinder.prototype.enable = function(value) {
	if (value != this.enabled) {
		var target = this.target
		this.enabled = value
		if (value) {
			for(var event in this.callbacks)
				target.on(event, this.callbacks[event])
		} else {
			for(var event in this.callbacks)
				target.removeListener(event, this.callbacks[event])
		}
	}
}

var protoEvent = function(prefix, proto, name, callback) {
	var sname = prefix + name
	//if property was in base prototype, create shallow copy and put our handler there or we would add to base prototype's array
	var storage = proto[sname]
	if (storage !== undefined) {
		var ownStorage = proto.hasOwnProperty(sname)
		if (ownStorage)
			storage.push(callback)
		else {
			var copy = storage.slice()
			copy.push(callback)
			proto[sname] = copy
		}
	} else
		proto[sname] = [callback]
}

$core._protoOn = function(proto, name, callback)
{ protoEvent('__on__', proto, name, callback) }

$core._protoOnChanged = function(proto, name, callback)
{ protoEvent('__changed__', proto, name, callback) }

$core._protoOnKey = function(proto, name, callback)
{ protoEvent('__key__', proto, name, callback) }

var ObjectEnumerator = function(callback) {
	this._callback = callback
	this._queue = []
	this.history = []
}

var ObjectEnumeratorPrototype = ObjectEnumerator.prototype
ObjectEnumeratorPrototype.constructor = ObjectEnumerator

ObjectEnumeratorPrototype.unshift = function() {
	var q = this._queue
	q.unshift.apply(q, arguments)
}

ObjectEnumeratorPrototype.push = function() {
	var q = this._queue
	q.push.apply(q, arguments)
}

ObjectEnumeratorPrototype.enumerate = function(root, arg) {
	var args = [this, arg]
	var queue = this._queue
	queue.unshift(root)
	while(queue.length) {
		var el = queue.shift()
		this.history.push(el)
		var r = this._callback.apply(el, args)
		if (r)
			break
	}
}

exports.forEach = function(root, callback, arg) {
	var oe = new ObjectEnumerator(callback)
	oe.enumerate(root, arg)
	return arg
}

exports.createObject = function(item) {
	item.__init()
	var parent = item.parent
	if ('_updateVisibilityForChild' in parent)
		parent._updateVisibilityForChild(item, parent.recursiveVisible)
	if ('_tryFocus' in parent)
		parent._tryFocus()
	item._context.scheduleComplete()
}

return exports;
} )()
//========================================

/** @const @type {!CoreObject} */
var core = _globals.core.core


//=====[component core.EventEmitter]=====================

	var EventEmitterBaseComponent = $core.CoreObject
	var EventEmitterBasePrototype = EventEmitterBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.CoreObject}
 */
	var EventEmitterComponent = $core.EventEmitter = function(parent, row) {
		EventEmitterBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this._eventHandlers = {}
		this._onConnections = []
	}

	}
	var EventEmitterPrototype = EventEmitterComponent.prototype = Object.create(EventEmitterBasePrototype)

	EventEmitterPrototype.constructor = EventEmitterComponent

	EventEmitterPrototype.componentName = 'core.EventEmitter'
	EventEmitterPrototype.discard = function() {
		this.removeAllOn()
		for(var name in this._eventHandlers)
			this.removeAllListeners(name)
	}
	EventEmitterPrototype.removeAllOn = function() {
		var connections = this._onConnections
		for(var i = 0, n = connections.length; i < n; i += 3)
			connections[i].removeListener(connections[i + 1], connections[i + 2])
		this._onConnections = []
	}
	EventEmitterPrototype.removeAllListeners = function(name) {
		delete this._eventHandlers[name]
	}
	EventEmitterPrototype.emit = function(name) {
		if (name === '')
			throw new Error('empty listener name')

		var proto_callback = this['__on__' + name]
		var handlers = this._eventHandlers[name]

		if (proto_callback === undefined && handlers === undefined)
			return

		
		/* COPY_ARGS(args, 1) */
		var $n = arguments.length
		var args = new Array($n - 1)
		var $d = 0, $s = 1;
		while($s < $n) {
			args[$d++] = arguments[$s++]
		}


		var invoker = $core.safeCall(
			this, args,
			function(ex) { log("event/signal " + name + " handler failed:", ex, ex.stack) }
		)

		if (proto_callback !== undefined)
			proto_callback.forEach(invoker)

		if (handlers !== undefined)
			handlers.forEach(invoker)
	}
	EventEmitterPrototype.emitWithArgs = function(name,args) {
		if (name === '')
			throw new Error('empty listener name')

		var proto_callback = this['__on__' + name]
		var handlers = this._eventHandlers[name]

		if (proto_callback === undefined && handlers === undefined)
			return

		var invoker = $core.safeCall(
			this, args,
			function(ex) { log("event/signal " + name + " handler failed:", ex, ex.stack) }
		)

		if (proto_callback !== undefined)
			proto_callback.forEach(invoker)

		if (handlers !== undefined)
			handlers.forEach(invoker)
	}
	EventEmitterPrototype.removeListener = function(name,callback) {
		if (!(name in this._eventHandlers) || callback === undefined || callback === null || name === '') {
			if ($manifest$trace$listeners)
				log('invalid removeListener(' + name + ', ' + callback + ') invocation', new Error().stack)
			return
		}

		var handlers = this._eventHandlers[name]
		var idx = handlers.indexOf(callback)
		if (idx >= 0)
			handlers.splice(idx, 1)
		else if ($manifest$trace$listeners)
			log('failed to remove listener for', name, 'from', this)

		if (!handlers.length)
			this.removeAllListeners(name)
	}
	EventEmitterPrototype.on = function(name,callback) {
		if (name === '')
			throw new Error('empty listener name')

		var storage = this._eventHandlers
		var handlers = storage[name]
		if (handlers !== undefined)
			handlers.push(callback)
		else {
			storage[name] = [callback]
		}
	}
	EventEmitterPrototype.connectOn = function(target,name,callback) {
		target.on(name, callback)
		this._onConnections.push(target, name, callback)
	}

	EventEmitterPrototype.$c = function($c) {
		var $this = this;
		EventEmitterBasePrototype.$c.call(this, $c.$b = { })

	}
	EventEmitterPrototype.$s = function($c) {
		var $this = this;
	EventEmitterBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component core.Object]=====================

	var ObjectBaseComponent = $core.EventEmitter
	var ObjectBasePrototype = ObjectBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.EventEmitter}
 */
	var ObjectComponent = $core.Object = function(parent, row) {
		ObjectBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this.parent = parent
		this.children = []
		this.__properties = {}
		this.__attachedObjects = []
		if (parent)
			parent.__attachedObjects.push(this)

		var context = this._context = parent? parent._context: null
		if (row) {
			var local = this._local
			local.model = row
			local._delegate = this
		}
		this._changedConnections = []
		this._properties = {}
	}

	}
	var ObjectPrototype = ObjectComponent.prototype = Object.create(ObjectBasePrototype)

	{
		ObjectPrototype._propertyToStyle = {
			width: 'width', height: 'height',
			x: 'left', y: 'top', viewX: 'left', viewY: 'top',
			opacity: 'opacity',
			border: 'border',
			radius: 'border-radius',
			rotate: 'transform',
			boxshadow: 'box-shadow',
			transform: 'transform',
			visible: 'visibility', visibleInView: 'visibility',
			background: 'background',
			color: 'color',
			backgroundImage: 'background-image',
			font: 'font'
		}
	}

	ObjectPrototype.constructor = ObjectComponent

	ObjectPrototype.componentName = 'core.Object'
	ObjectPrototype.completed = function() {
		if (this.__complete !== $core.CoreObject.prototype.__complete && this._registerDelayedAction('complete'))
			this._context.__onCompleted(this)
	}
	ObjectPrototype.discard = function() {
		this.removeAllOnChanged()

		var attached = this.__attachedObjects
		this.__attachedObjects = []
		attached.forEach(function(child) { child.discard() })

		var parent = this.parent
		if (parent) {
			var discardIdx = parent.__attachedObjects.indexOf(this)
			if (discardIdx >= 0)
				parent.__attachedObjects.splice(discardIdx, 1)
		}

		this.children = []
		this._local = {}

		var properties = this.__properties
		for(var name in properties) //fixme: it was added once, then removed, is it needed at all? it double-deletes callbacks
			properties[name].discard()
		this._properties = {}

		$core.EventEmitter.prototype.discard.apply(this)
	}
	ObjectPrototype.removeAllOnChanged = function() {
		var connections = this._changedConnections
		for(var i = 0, n = connections.length; i < n; i += 3)
			connections[i].removeOnChanged(connections[i + 1], connections[i + 2])
		this._changedConnections = []
	}
	ObjectPrototype.getComponentPath = function() {
		var path = []
		var self = this
		while(self) {
			var name = self.componentName
			if (self.parent) {
				var idx = self.parent.children.indexOf(self)
				if (idx >= 0)
					name += '@' + idx
			}
			path.unshift(name)
			self = self.parent
		}
		return path.join(" → ")
	}
	ObjectPrototype._tryFocus = function() { return false }
	ObjectPrototype.addChild = function(child) {
		this.children.push(child);
	}
	ObjectPrototype.removeChild = function(child) {
		var children = this.children
		var idx = children.indexOf(child)
		if (idx >= 0)
			children.splice(idx, 1)
	}
	ObjectPrototype._cancelDelayedAction = function(name) {
		this._registeredDelayedActions[name] = false
	}
	ObjectPrototype._setId = function(name) {
		var p = this;
		while(p) {
			p._local[name] = this;
			p = p.parent;
		}
	}
	ObjectPrototype._registerDelayedAction = function(name) {
		var registry = this._registeredDelayedActions

		if (registry === undefined)
			registry = this._registeredDelayedActions = {}

		if (registry[name] === true)
			return false

		registry[name] = true
		return true
	}
	ObjectPrototype.resetAnimation = function(name) {
		var storage = this.__properties[name]
		if (storage !== undefined && storage.animation) {
			var animation = storage.animation
			animation.disable()
			var target = animation.target
			animation.target = target
			storage.animation = null
			animation.enable() //fixme: enabling without target to avoid installing native animation
			animation.target = target
		}
	}
	ObjectPrototype._removeUpdater = function(name) {
		var storage = this.__properties[name]
		if (storage !== undefined)
			storage.removeUpdater()
	}
	ObjectPrototype.updateAnimation = function(name,animation) {
		this._context.backend.setAnimation(this, name, animation)
	}
	ObjectPrototype.setAnimation = function(name,animation) {
	var context = this._get('context', true)

		if ($manifest$disableAnimations)
			return

		if (animation === null)
			return this.resetAnimation(name)

		var context = this._context
		var backend = context.backend
		if (name === 'contentX' || name === 'contentY')
			log('WARNING: you\'re trying to animate contentX/contentY property, this will always use animation frames, ignoring CSS transitions, please use content.x/content.y instead')

		animation.target = this
		animation.property = name
		var storage = this._createPropertyStorage(name)
		storage.animation = animation
		if (backend.setAnimation(this, name, animation)) {
			animation._native = true
		} else {
			var target = this[name]
			//this is special fallback for combined css animation, e.g transform
			//if native backend refuse to animate, we call _animateAll()
			//see Transform._animateAll for details
			if (target && (typeof target === 'object') && ('_animateAll' in target)) {
				target._animateAll(animation)
			}
		}
	}
	ObjectPrototype.removeOnChanged = function(name,callback) {
		var storage = this.__properties[name]
		var removed
		if (storage !== undefined)
			removed = storage.removeOnChanged(callback)

		if ($manifest$trace$listeners && !removed)
			log('failed to remove changed listener for', name, 'from', this)
	}
	ObjectPrototype.onChanged = function(name,callback) {
		var storage = this._createPropertyStorage(name)
		storage.onChanged.push(callback)
	}
	ObjectPrototype._replaceUpdater = function(name,callback,deps) {
		this._createPropertyStorage(name).replaceUpdater(this, callback, deps)
	}
	ObjectPrototype._setProperty = function(name,value) {
		//cancel any running software animations
		var storage = this._createPropertyStorage(name, value)
		var animation = storage.animation
		if (animation !== undefined)
			animation.disable()
		storage.setCurrentValue(this, null, value)
		if (animation !== undefined)
			animation.enable()
	}
	ObjectPrototype._createPropertyStorage = function(name,value) {
		var storage = this.__properties[name]
		if (storage !== undefined)
			return storage

		return this.__properties[name] = new $core.core.PropertyStorage(value)
	}
	ObjectPrototype.connectOnChanged = function(target,name,callback) {
		target.onChanged(name, callback)
		this._changedConnections.push(target, name, callback)
	}

	ObjectPrototype.$c = function($c) {
		var $this = this;
		ObjectBasePrototype.$c.call(this, $c.$b = { })

	}
	ObjectPrototype.$s = function($c) {
		var $this = this;
	ObjectBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component core.Item]=====================

	var ItemBaseComponent = $core.Object
	var ItemBasePrototype = ItemBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Object}
 */
	var ItemComponent = $core.Item = function(parent, row) {
		ItemBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this._pressedHandlers = {}
		this._topPadding = 0
		if (parent) {
			if (this.element)
				throw new Error('double ctor call')

			this._createElement(this.getTag(), this.getClass())
		} //no parent == top level element, skip
	}

	}
	var ItemPrototype = ItemComponent.prototype = Object.create(ItemBasePrototype)

	ItemPrototype.constructor = ItemComponent

	ItemPrototype.componentName = 'core.Item'
	ItemPrototype.newBoundingBox = $core.createSignal('newBoundingBox')
	ItemPrototype.anchorsMarginsUpdated = $core.createSignal('anchorsMarginsUpdated')
	core.addProperty(ItemPrototype, 'int', 'x')
	core.addProperty(ItemPrototype, 'int', 'y')
	core.addProperty(ItemPrototype, 'int', 'z')
	core.addProperty(ItemPrototype, 'int', 'width')
	core.addProperty(ItemPrototype, 'int', 'height')
	core.addProperty(ItemPrototype, 'bool', 'clip')
	core.addLazyProperty(ItemPrototype, 'radius', (function(__parent, __row) {
		var lazy$radius = new $core.Radius(__parent, __row)
		var $c = { lazy$radius : lazy$radius }

//creating component Radius
			lazy$radius.$c($c.$c$lazy$radius = { })


//setting up component Radius
			var lazy$radius = $c.lazy$radius
			lazy$radius.$s($c.$c$lazy$radius)
			delete $c.$c$lazy$radius


			lazy$radius.completed()

		return lazy$radius
}))
	core.addProperty(ItemPrototype, 'bool', 'fullscreen')
	core.addProperty(ItemPrototype, 'bool', 'focus')
	core.addProperty(ItemPrototype, 'bool', 'focused')
	core.addProperty(ItemPrototype, 'bool', 'activeFocus')
	core.addProperty(ItemPrototype, 'Item', 'focusedChild')
	core.addProperty(ItemPrototype, 'bool', 'visible', (true))
	core.addProperty(ItemPrototype, 'bool', 'visibleInView', (true))
	core.addProperty(ItemPrototype, 'bool', 'recursiveVisible', (false))
	core.addProperty(ItemPrototype, 'real', 'opacity', (1))
	core.addLazyProperty(ItemPrototype, 'anchors', (function(__parent, __row) {
		var lazy$anchors = new $core.Anchors(__parent, __row)
		var $c = { lazy$anchors : lazy$anchors }

//creating component Anchors
			lazy$anchors.$c($c.$c$lazy$anchors = { })


//setting up component Anchors
			var lazy$anchors = $c.lazy$anchors
			lazy$anchors.$s($c.$c$lazy$anchors)
			delete $c.$c$lazy$anchors


			lazy$anchors.completed()

		return lazy$anchors
}))
	core.addLazyProperty(ItemPrototype, 'effects', (function(__parent, __row) {
		var lazy$effects = new $core.Effects(__parent, __row)
		var $c = { lazy$effects : lazy$effects }

//creating component Effects
			lazy$effects.$c($c.$c$lazy$effects = { })


//setting up component Effects
			var lazy$effects = $c.lazy$effects
			lazy$effects.$s($c.$c$lazy$effects)
			delete $c.$c$lazy$effects


			lazy$effects.completed()

		return lazy$effects
}))
	core.addLazyProperty(ItemPrototype, 'transform', (function(__parent, __row) {
		var lazy$transform = new $core.Transform(__parent, __row)
		var $c = { lazy$transform : lazy$transform }

//creating component Transform
			lazy$transform.$c($c.$c$lazy$transform = { })


//setting up component Transform
			var lazy$transform = $c.lazy$transform
			lazy$transform.$s($c.$c$lazy$transform)
			delete $c.$c$lazy$transform


			lazy$transform.completed()

		return lazy$transform
}))
	core.addProperty(ItemPrototype, 'bool', 'cssTranslatePositioning')
	core.addProperty(ItemPrototype, 'bool', 'cssNullTranslate3D')
	core.addProperty(ItemPrototype, 'bool', 'cssDelegateAlwaysVisibleOnAcceleratedSurfaces', (true))
	core.addProperty(ItemPrototype, 'bool', 'cssPointerTouchEvents', (false))
	core.addConstProperty(ItemPrototype, 'left', function() { return [this, 0]; })
	core.addConstProperty(ItemPrototype, 'top', function() { return [this, 1]; })
	core.addConstProperty(ItemPrototype, 'right', function() { return [this, 2]; })
	core.addConstProperty(ItemPrototype, 'bottom', function() { return [this, 3]; })
	core.addConstProperty(ItemPrototype, 'horizontalCenter', function() { return [this, 4]; })
	core.addConstProperty(ItemPrototype, 'verticalCenter', function() { return [this, 5]; })
	core.addProperty(ItemPrototype, 'int', 'viewX')
	core.addProperty(ItemPrototype, 'int', 'viewY')
	core.addProperty(ItemPrototype, 'int', 'keyProcessDelay')
	ItemPrototype.discard = function() {
		$core.Object.prototype.discard.apply(this)
		this.focusedChild = null
		this._pressedHandlers = {}
		if (this.element)
			this.element.discard()
	}
	ItemPrototype._tryFocus = function() {
		if (!this.visible)
			return false

		if (this.focusedChild && this.focusedChild._tryFocus())
			return true

		var children = this.children
		for(var i = 0; i < children.length; ++i) {
			var child = children[i]
			if (child._tryFocus()) {
				this._focusChild(child)
				return true
			}
		}
		return this.focus
	}
	ItemPrototype.setFocus = function() {
		this.forceActiveFocus()
	}
	ItemPrototype._updateStyle = function() {
		var element = this.element
		if (element)
			element.updateStyle()
	}
	ItemPrototype.toScreen = function() {
		var item = this
		var x = 0, y = 0
		var w = this.width + (this._borderWidthAdjust || 0) + (this._borderInnerWidthAdjust || 0)
		var h = this.height + (this._borderHeightAdjust || 0) + (this._borderInnerHeightAdjust || 0)

		while(item) {
			x += item.x + item.viewX + (item._borderXAdjust || 0)
			y += item.y + item.viewY + (item._borderYAdjust || 0)
			if (item.hasOwnProperty('view')) {
				var content = item.view.content
				x += content.x
				y += content.y
			}
			item = item.parent
		}
		return [x, y, x + w, y + h, x + w / 2, y + h / 2];
	}
	ItemPrototype.hasActiveFocus = function() {
		var item = this
		while(item.parent) {
			if (item.parent.focusedChild != item)
				return false

			item = item.parent
		}
		return true
	}
	ItemPrototype.forceActiveFocus = function() {
		var item = this
		while(item.parent) {
			item.parent._focusChild(item);
			item = item.parent;
		}
		if (this._tryFocus())
			this._propagateFocusToParents()
	}
	ItemPrototype._propagateFocusToParents = function() {
		var item = this;
		while(item.parent && (!item.parent.focusedChild || !item.parent.focusedChild.visible)) {
			item.parent._focusChild(item)
			item = item.parent
		}
	}
	ItemPrototype._updateVisibility = function() {
		var visible = this.visible && this.visibleInView

		var updateStyle = true
		var view = this.view
		if (view !== undefined) {
			var content = view.content
			//do not update real style for individual delegate in case of hardware accelerated surfaces
			//it may trigger large invisible repaints
			//consider this as default in the future.
			if (content.cssDelegateAlwaysVisibleOnAcceleratedSurfaces && (content.cssTranslatePositioning || content.cssNullTranslate3D) && !$manifest$cssDisableTransformations)
				updateStyle = false
		}

		if (updateStyle)
			this.style('visibility', visible? 'inherit': 'hidden')

		this.recursiveVisible = visible && (this.parent !== null? this.parent.recursiveVisible: true)
	}
	ItemPrototype._setSizeAdjust = function() {
		var x = this.x + this.viewX + (this._borderXAdjust || 0)
		var y = this.y + this.viewY + (this._borderYAdjust || 0)

		if (this.cssTranslatePositioning && !$manifest$cssDisableTransformations) {
			this.transform.translateX = x
			this.transform.translateY = y
		} else {
			this.style('left', x)
			this.style('top', y)
		}
		this.newBoundingBox()
	}
	ItemPrototype.getClass = function() { return '' }
	ItemPrototype.getTag = function() { return 'div' }
	ItemPrototype._focusTree = function(active) {
		this.activeFocus = active;
		if (this.focusedChild)
			this.focusedChild._focusTree(active);
	}
	ItemPrototype.addChild = function(child) {
		$core.Object.prototype.addChild.apply(this, arguments)
		if (child._tryFocus())
			child._propagateFocusToParents()
	}
	ItemPrototype._focusChild = function(child) {
		if (child.parent !== this)
			throw new Error('invalid object passed as child')
		if (this.focusedChild === child)
			return
		if (this.focusedChild) {
			this.focusedChild._focusTree(false)
			this.focusedChild.focused = false
		}
		this.focusedChild = child
		if (this.focusedChild) {
			this.focusedChild._focusTree(this.hasActiveFocus())
			this.focusedChild.focused = true
		}
	}
	ItemPrototype.focusChild = function(child) {
		this._propagateFocusToParents()
		this._focusChild(child)
	}
	ItemPrototype._updateVisibilityForChild = function(child,value) {
		child.recursiveVisible = value && child.visible && child.visibleInView
	}
	ItemPrototype._attachElement = function(element) {
		if (this.element)
			this.element.discard()

		this.element = element
		var parent = this.parent
		if (parent)
			parent.element.append(element)
	}
	ItemPrototype._processKey = function(key,event) {
		if ($manifest$trace$keys)
			log(this.getComponentPath(), '_processKey', key, event)
		var eventTime = event.timeStamp

		if (this.keyProcessDelay) {
			if (this._lastEvent && eventTime > this._lastEvent && eventTime - this._lastEvent < this.keyProcessDelay)
				return true

			this._lastEvent = eventTime
		}

		//fixme: create invoker only if any of handlers exist
		var invoker = $core.safeCall(this, [key, event], function (ex) { log("on " + key + " handler failed:", ex, ex.stack) })
		var proto_callback = this['__key__' + key]

		if (key in this._pressedHandlers && this.invokeKeyHandlers(key, event, this._pressedHandlers[key], invoker))
			return true

		if (proto_callback && this.invokeKeyHandlers(key, event, proto_callback, invoker))
			return true

		var proto_callback = this['__key__Key']
		if ('Key' in this._pressedHandlers  && this.invokeKeyHandlers(key, event, this._pressedHandlers['Key'], invoker))
			return true

		if (proto_callback && this.invokeKeyHandlers(key, event, proto_callback, invoker))
			return true

		return false
	}
	ItemPrototype.invokeKeyHandlers = function(key,event,handlers,invoker) {
		for(var i = handlers.length - 1; i >= 0; --i) {
			var callback = handlers[i]
			if (invoker(callback)) {
				if ($manifest$trace$keys)
					log("key " + key + " handled in " + (performance.now() - event.timeStamp).toFixed(3) + " ms by", this, new Error().stack)
				return true;
			}
		}
		return false;
	}
	ItemPrototype.onPressed = function(name,callback) {
	var key = this._get('key', true)

		var wrapper
		if (name != 'Key')
			wrapper = function(key, event) { event.accepted = true; callback(key, event); return event.accepted }
		else
			wrapper = callback;

		if (name in this._pressedHandlers)
			this._pressedHandlers[name].push(wrapper);
		else
			this._pressedHandlers[name] = [wrapper];
	}
	ItemPrototype.style = function(name,style) {
		var element = this.element
		if (element)
			return element.style(name, style)
		else
			log('WARNING: style skipped:', name, style)
	}
	ItemPrototype._enqueueNextChildInFocusChain = function(queue,handlers) {
		this._tryFocus() //soft-restore focus for invisible components
		var focusedChild = this.focusedChild
		if (focusedChild && focusedChild.visible) {
			queue.unshift(focusedChild)
			handlers.unshift(focusedChild)
		}
	}
	ItemPrototype.registerStyle = function(style,tag) {
		var rules = 'position: absolute; visibility: inherit; opacity: 1.0;'
		rules += 'border-style: solid; border-width: 0px; border-radius: 0px; box-sizing: border-box; border-color: rgba(0,0,0,1);'
		rules += 'white-space: nowrap; transform: none;'
		rules += 'left: 0px; top: 0px; width: 0px; height: 0px;'
		rules += 'font-family: ' + $manifest$style$font$family + '; line-height: ' + $manifest$style$font$lineHeight + '; '
		rules += 'pointer-events: none; touch-action: none; '
		if ($manifest$style$font$pixelSize)
			rules += 'font-size: ' + $manifest$style$font$pixelSize + 'px; '
		else if ($manifest$style$font$pointSize)
			rules += 'font-size: ' + $manifest$style$font$pointSize + 'pt; '
		style.addRule(tag, rules)
	}
	ItemPrototype._createElement = function(tag,cls) {
	var context = this._get('context', true)

		var context = this._context
		if (context === null)
			context = this

		context.registerStyle(this, tag, cls)
		this._attachElement(context.createElement(tag, cls))
	}
	$core._protoOnChanged(ItemPrototype, 'cssNullTranslate3D', function(value) {
		if (!$manifest$cssDisableTransformations)
			this.style('transform', value ? 'translateZ(0)' : '')
	})
	$core._protoOnChanged(ItemPrototype, 'focus', function(value) {
		if (this.parent)
			this.parent._tryFocus()
	})
	$core._protoOnChanged(ItemPrototype, 'height', function(value) {
		this.style('height', value - this._topPadding + (this._borderHeightAdjust || 0))
		this.newBoundingBox()
	})
	$core._protoOnChanged(ItemPrototype, 'width', function(value) {
		this.style('width', value + (this._borderWidthAdjust || 0))
		this.newBoundingBox()
	})
	$core._protoOnChanged(ItemPrototype, 'fullscreen', function(value) {
		var backend = this._context.backend
		if (!('enterFullscreenMode' in backend)) {
			log('enterFullscreenMode is not available in current backend, fullscreen: ' + value)
			return
		}
		if (value)
			backend.enterFullscreenMode(this.element);
		else
			backend.exitFullscreenMode();
	})
	$core._protoOnChanged(ItemPrototype, 'recursiveVisible', function(value) {
		var children = this.children
		for(var i = 0, n = children.length; i < n; ++i) {
			var child = children[i]
			this._updateVisibilityForChild(child, value)
		}

		if (!value && this.parent)
			this.parent._tryFocus()

		if ($manifest$requireExplicitRecursiveVisibilityStyle) {
			this.style("-pure-recursive-visibility", value)
		}
	})
	$core._protoOnChanged(ItemPrototype, 'cssPointerTouchEvents', function(value) {
		var style = value? 'auto': 'none'
		this.style('pointer-events', style)
		this.style('touch-action', style)
	})
	var $code$0 = function(value) {
		var x = this.x + this.viewX
		if (this.cssTranslatePositioning && !$manifest$cssDisableTransformations)
			this.transform.translateX = x
		else
			this.style('left', x)
		this.newBoundingBox()
	}
	$core._protoOnChanged(ItemPrototype, 'x', $code$0)
	$core._protoOnChanged(ItemPrototype, 'viewX', $code$0)
	var $code$1 = function(value) {
		var y = this.y + this.viewY
		if (this.cssTranslatePositioning && !$manifest$cssDisableTransformations)
			this.transform.translateY = y
		else
			this.style('top', y)
		this.newBoundingBox()
	}
	$core._protoOnChanged(ItemPrototype, 'y', $code$1)
	$core._protoOnChanged(ItemPrototype, 'viewY', $code$1)
	$core._protoOnChanged(ItemPrototype, 'opacity', function(value) { if (this.element) this.style('opacity', value); })
	var $code$2 = function(value) { this._updateVisibility() }
	$core._protoOnChanged(ItemPrototype, 'visible', $code$2)
	$core._protoOnChanged(ItemPrototype, 'visibleInView', $code$2)
	$core._protoOnChanged(ItemPrototype, 'clip', function(value) { this.style('overflow', value? 'hidden': 'visible') })
	$core._protoOnChanged(ItemPrototype, 'z', function(value) { this.style('z-index', value) })

	ItemPrototype.$c = function($c) {
		var $this = this;
		ItemBasePrototype.$c.call(this, $c.$b = { })

	}
	ItemPrototype.$s = function($c) {
		var $this = this;
	ItemBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component core.Context]=====================

	var ContextBaseComponent = $core.Item
	var ContextBasePrototype = ContextBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Item}
 */
	var ContextComponent = $core.Context = function(parent, row) {
		ContextBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this.options = arguments[2]
		this.l10n = this.options.l10n || {}

		this._local['context'] = this
		this._context = this
		this._started = false
		this._completed = false
		this._processingActions = false
		this._delayedActions = []
		this._completedObjects = []
		this._stylesRegistered = {}
		this._asyncInvoker = $core.safeCall(this, [], function (ex) { log("async action failed:", ex, ex.stack) })

		this.backend = _globals._backend()

		this._init()
	}

	}
	var ContextPrototype = ContextComponent.prototype = Object.create(ContextBasePrototype)

	ContextPrototype.constructor = ContextComponent

	ContextPrototype.componentName = 'core.Context'
	ContextPrototype.message = $core.createSignal('message')
	core.addProperty(ContextPrototype, 'int', 'scrollY')
	core.addProperty(ContextPrototype, 'int', 'keyProcessDelay')
	core.addProperty(ContextPrototype, 'string', 'language')
	core.addProperty(ContextPrototype, 'System', 'system')
	core.addProperty(ContextPrototype, 'Location', 'location')
	core.addProperty(ContextPrototype, 'Stylesheet', 'stylesheet')
	core.addProperty(ContextPrototype, 'string', 'buildIdentifier')
	core.addProperty(ContextPrototype, 'int', 'virtualWidth', ($manifest$virtual$width))
	core.addProperty(ContextPrototype, 'int', 'virtualHeight', ($manifest$virtual$height))
	core.addProperty(ContextPrototype, 'real', 'virtualScale')
	ContextPrototype._processActions = function() {
		if (!this._started || this._processingActions)
			return

		this._processingActions = true

		var invoker = this._asyncInvoker

		while (this._delayedActions.length || this._completedObjects.length) {
			var actions = this._delayedActions
			this._delayedActions = []
			for(var i = 0, n = actions.length; i < n; ++i)
				invoker(actions[i])

			var objects = this._completedObjects
			this._completedObjects = []
			for(var i = 0, n = objects.length; i < n; ++i) {
				var object = objects[i]
				try { object.__complete() }
				catch(ex) { log('onCompleted failed', ex, ex.stack)}
			}
		}

		this._processingActions = false
		this.backend.tick(this)
	}
	ContextPrototype._init = function() {
		log('Context: initializing...')
		new this.backend.init(this)
	}
	ContextPrototype._run = function() {
		log('Context: signalling layout')
		this.visibleInView = true
		this.newBoundingBox()
		log('Context: calling completed()')
		this._started = true
		this._processActions()
		this._completed = true
	}
	ContextPrototype.init = function() {
		this.__init()
		this.backend.initSystem(this.system)
	}
	ContextPrototype.run = function() {
		this.backend.run(this, this._run.bind(this))
	}
	ContextPrototype.scheduleComplete = function() {
	var context = this._get('context', true)

		this.delayedAction('context:completed', this, this._processActions)
	}
	ContextPrototype.tr = function() { return this.qsTr.apply(this, arguments) }
	ContextPrototype.scheduleAction = function(action) {
		this._delayedActions.push(action)
	}
	ContextPrototype.wrapNativeCallback = function(callback) {
		var ctx = this
		return function() {
			try {
				var r = callback.apply(this, arguments)
				ctx._processActions()
				return r
			} catch(ex) {
				ctx._processActions()
				throw ex
			}
		}
	}
	ContextPrototype.start = function(instance) {
		this.children.push(instance)
		instance.__init()
		log('Context: created instance')
		// log('Context: calling on completed')
		return instance;
	}
	ContextPrototype.registerStyle = function(item,tag,cls) {
		cls = this.mangleClass(cls)
		var selector = cls? tag + '.' + cls: tag
		if (!(selector in this._stylesRegistered)) {
			item.registerStyle(this.stylesheet, selector)
			this._stylesRegistered[selector] = true
		}
	}
	ContextPrototype.processKey = function(key,event) {
		var handlers = core.forEach(this, $core.Item.prototype._enqueueNextChildInFocusChain, [])
		var n = handlers.length
		for(var i = 0; i < n; ++i) {
			var handler = handlers[i]
			if (handler._processKey(key, event))
				return true
		}
		return false
	}
	ContextPrototype.updateL10n = function(lang,data) {
		this.l10n[lang] = data
		var storage = this.__properties.language
		storage.callOnChanged(this, 'language', this.language, this.language)
	}
	ContextPrototype.mangleClass = function(name) {
		return $manifest$html5$prefix + name
	}
	ContextPrototype.delayedAction = function(name,self,method,delay) {
		if (!self._registerDelayedAction(name))
			return

		var callback = function() {
			self._cancelDelayedAction(name)
			method.call(self)
		}

		if (delay > 0) {
			setTimeout(this.wrapNativeCallback(callback), delay)
		} else if (delay === 0) {
			this.backend.requestAnimationFrame(this.wrapNativeCallback(callback))
		} else {
			this.scheduleAction(callback)
		}
	}
	ContextPrototype.__onCompleted = function(object) {
		this._completedObjects.push(object)
	}
	ContextPrototype.createElement = function(tag,cls) {
		return this.backend.createElement(this, tag, cls)
	}
	ContextPrototype.qsTr = function(text) {
		var args = arguments
		var lang = this.language
		var messages = this.l10n[lang] || {}
		var contexts = messages[text] || {}
		for(var name in contexts) {
			text = contexts[name] //fixme: add context handling here
			break
		}
		return text.replace(/%(\d+)/, function(text, index) { return args[index] })
	}

	ContextPrototype.$c = function($c) {
		var $this = this;
		ContextBasePrototype.$c.call(this, $c.$b = { })
//creating component core.<anonymous>
		var _this$system = new $core.System($this)
		$c._this$system = _this$system

//creating component System
		_this$system.$c($c.$c$_this$system = { })

		$this.system = _this$system
//creating component core.<anonymous>
		var _this$location = new $core.Location($this)
		$c._this$location = _this$location

//creating component Location
		_this$location.$c($c.$c$_this$location = { })

		$this.location = _this$location
//creating component core.<anonymous>
		var _this$stylesheet = new $html5.Stylesheet($this)
		$c._this$stylesheet = _this$stylesheet

//creating component Stylesheet
		_this$stylesheet.$c($c.$c$_this$stylesheet = { })

		$this.stylesheet = _this$stylesheet
	}
	ContextPrototype.$s = function($c) {
		var $this = this;
	ContextBasePrototype.$s.call(this, $c.$b); delete $c.$b
//setting up component System
			var _this$system = $c._this$system
			_this$system.$s($c.$c$_this$system)
			delete $c.$c$_this$system


			_this$system.completed()

//setting up component Location
			var _this$location = $c._this$location
			_this$location.$s($c.$c$_this$location)
			delete $c.$c$_this$location


			_this$location.completed()

//setting up component Stylesheet
			var _this$stylesheet = $c._this$stylesheet
			_this$stylesheet.$s($c.$c$_this$stylesheet)
			delete $c.$c$_this$stylesheet


			_this$stylesheet.completed()
//assigning virtualScale to (Math.min(((${system.resolutionWidth} || ${width}) / ${virtualWidth}),((${system.resolutionHeight} || ${height}) / ${virtualHeight})))
			$this._replaceUpdater('virtualScale', function() { $this.virtualScale = (Math.min((($this.system.resolutionWidth || $this.width) / $this.virtualWidth),(($this.system.resolutionHeight || $this.height) / $this.virtualHeight))) }, [$this,'width',$this.system,'resolutionHeight',$this,'virtualWidth',$this,'height',$this,'virtualHeight',$this.system,'resolutionWidth'])
//assigning visibleInView to (false)
			$this._removeUpdater('visibleInView'); $this.visibleInView = (false);

			$this.completed()
}


//=====[component core.RAIIEventEmitter]=====================

	var RAIIEventEmitterBaseComponent = $core.EventEmitter
	var RAIIEventEmitterBasePrototype = RAIIEventEmitterBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.EventEmitter}
 */
	var RAIIEventEmitterComponent = $core.RAIIEventEmitter = function(parent, row) {
		RAIIEventEmitterBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this._onListener = {}
	}

	}
	var RAIIEventEmitterPrototype = RAIIEventEmitterComponent.prototype = Object.create(RAIIEventEmitterBasePrototype)

	RAIIEventEmitterPrototype.constructor = RAIIEventEmitterComponent

	RAIIEventEmitterPrototype.componentName = 'core.RAIIEventEmitter'
	RAIIEventEmitterPrototype.removeAllListeners = function(name) {
		$core.EventEmitter.prototype.removeAllListeners.call(this, name)
		if (name in this._onListener)
			this._onListener[name][1](name)
		else if ('' in this._onListener) {
			//log('first listener to', name)
			this._onListener[''][1](name)
		}
	}
	RAIIEventEmitterPrototype.on = function(name,callback) {
		if (!(name in this._eventHandlers)) {
			if (name in this._onListener) {
				//log('first listener to', name)
				this._onListener[name][0](name)
			} else if ('' in this._onListener) {
				//log('first listener to', name)
				this._onListener[''][0](name)
			}
			if (this._eventHandlers[name])
				throw new Error('listener callback added event handler')
		}
		$core.EventEmitter.prototype.on.call(this, name, callback)
	}
	RAIIEventEmitterPrototype.onListener = function(name,first,last) {
		this._onListener[name] = [first, last]
	}

	RAIIEventEmitterPrototype.$c = function($c) {
		var $this = this;
		RAIIEventEmitterBasePrototype.$c.call(this, $c.$b = { })

	}
	RAIIEventEmitterPrototype.$s = function($c) {
		var $this = this;
	RAIIEventEmitterBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component controls.core.BaseActivity]=====================

	var BaseActivityBaseComponent = $core.Item
	var BaseActivityBasePrototype = BaseActivityBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Item}
 */
	var BaseActivityComponent = $controls$core.BaseActivity = function(parent, row) {
		BaseActivityBaseComponent.apply(this, arguments)

	}
	var BaseActivityPrototype = BaseActivityComponent.prototype = Object.create(BaseActivityBasePrototype)

	BaseActivityPrototype.constructor = BaseActivityComponent

	BaseActivityPrototype.componentName = 'controls.core.BaseActivity'
	BaseActivityPrototype.stopped = $core.createSignal('stopped')
	BaseActivityPrototype.started = $core.createSignal('started')
	core.addProperty(BaseActivityPrototype, 'bool', 'active')
	core.addProperty(BaseActivityPrototype, 'string', 'name')
	core.addProperty(BaseActivityPrototype, 'Item', 'manager')
	BaseActivityPrototype.clear = function() { this.manager.clear() }
	BaseActivityPrototype.pop = function(count) { this.manager.pop(count) }
	BaseActivityPrototype.init = function(intent,state) { }
	BaseActivityPrototype.closeAllExcept = function(name) { this.manager.closeAllExcept(name) }
	BaseActivityPrototype.removeActivity = function(name) { this.manager.removeActivity(name) }
	BaseActivityPrototype.push = function(name,intent,state) { this.manager.push(name, intent, state) }
	BaseActivityPrototype.replaceTopActivity = function(name,intent,state) { this.manager.replaceTopActivity(name, intent, state) }
	BaseActivityPrototype.popWithState = function(state) { this.manager.popWithState(state) }
	BaseActivityPrototype.setIntent = function(state,name) { this.manager.setIntent(state, name) }
	BaseActivityPrototype.setState = function(state,name) { this.manager.setState(state, name) }
	$core._protoOnKey(BaseActivityPrototype, 'Back', function(key,event) { this.manager.pop(); return true })

	BaseActivityPrototype.$c = function($c) {
		var $this = this;
		BaseActivityBasePrototype.$c.call(this, $c.$b = { })

	}
	BaseActivityPrototype.$s = function($c) {
		var $this = this;
	BaseActivityBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning manager to (${parent})
			$this._removeUpdater('manager'); $this.manager = ($this.parent);
//assigning visible to (${active})
			$this._replaceUpdater('visible', function() { $this.visible = ($this.active) }, [$this,'active'])

			$this.completed()
}


//=====[component controls.core.Activity]=====================

	var ActivityBaseComponent = $controls$core.BaseActivity
	var ActivityBasePrototype = ActivityBaseComponent.prototype

/**
 * @constructor
 * @extends {$controls$core.BaseActivity}
 */
	var ActivityComponent = $controls$core.Activity = function(parent, row) {
		ActivityBaseComponent.apply(this, arguments)

	}
	var ActivityPrototype = ActivityComponent.prototype = Object.create(ActivityBasePrototype)

	ActivityPrototype.constructor = ActivityComponent

	ActivityPrototype.componentName = 'controls.core.Activity'
	ActivityPrototype.getActivity = function() {
		return this
	}
	ActivityPrototype.stop = function() {
		this.active = false
		this.stopped()
	}
	ActivityPrototype.start = function() {
		this.active = true
		this.started()
	}

	ActivityPrototype.$c = function($c) {
		var $this = this;
		ActivityBasePrototype.$c.call(this, $c.$b = { })

	}
	ActivityPrototype.$s = function($c) {
		var $this = this;
	ActivityBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component controls.core.LazyActivity]=====================

	var LazyActivityBaseComponent = $controls$core.BaseActivity
	var LazyActivityBasePrototype = LazyActivityBaseComponent.prototype

/**
 * @constructor
 * @extends {$controls$core.BaseActivity}
 */
	var LazyActivityComponent = $controls$core.LazyActivity = function(parent, row) {
		LazyActivityBaseComponent.apply(this, arguments)

	}
	var LazyActivityPrototype = LazyActivityComponent.prototype = Object.create(LazyActivityBasePrototype)

	LazyActivityPrototype.constructor = LazyActivityComponent

	LazyActivityPrototype.componentName = 'controls.core.LazyActivity'
	core.addProperty(LazyActivityPrototype, 'string', 'component')
	LazyActivityPrototype.init = function() {
		_globals.controls.core.BaseActivity.prototype.init.apply(this, arguments)
		var activity = this.createActivity()
		if (activity)
			activity.init.apply(activity, arguments)
	}
	LazyActivityPrototype.start = function() {
		this.createActivity().start()
		this.visible = true
	}
	LazyActivityPrototype.stop = function() {
		this.visible = false
		var item = this.getActivity()
		if (item)
			item.stop()
	}
	LazyActivityPrototype.getActivity = function() {
	var loader = this._get('loader', true)

		return loader.item
	}
	LazyActivityPrototype.createActivity = function() {
	var loader = this._get('loader', true)

		var item = loader.item
		if (!item) {
			loader.source = this.component
			item = loader.item
			item.anchors.fill = this
			this._context._processActions() //we have to process all actions before starting setting up items
			item.manager = this.manager
			if (!item)
				throw new Error("can't create component " + this.component)

			var activity = this
			item.on('started', function() { activity.started() })
			item.on('stopped', function() { activity.stopped() })
		}
		return loader.item
	}

	LazyActivityPrototype.$c = function($c) {
		var $this = this;
		LazyActivityBasePrototype.$c.call(this, $c.$b = { })
var _this$child0 = new $core.Loader($this)
		$c._this$child0 = _this$child0

//creating component Loader
		_this$child0.$c($c.$c$_this$child0 = { })
		_this$child0._setId('loader')
		$this.addChild(_this$child0)
	}
	LazyActivityPrototype.$s = function($c) {
		var $this = this;
	LazyActivityBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning anchors.fill to (${manager})
			$this.anchors._replaceUpdater('fill', function() { $this.anchors.fill = ($this.manager) }, [$this,'manager'])

//setting up component Loader
			var _this$child0 = $c._this$child0
			_this$child0.$s($c.$c$_this$child0)
			delete $c.$c$_this$child0

//assigning anchors.fill to (${parent.manager})
			_this$child0.anchors._replaceUpdater('fill', function() { _this$child0.anchors.fill = (_this$child0.parent.manager) }, [_this$child0.parent,'manager'])

			_this$child0.completed()

			$this.completed()
}


//=====[component src.UiApp]=====================

	var UiAppBaseComponent = $core.Item
	var UiAppBasePrototype = UiAppBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Item}
 */
	var UiAppComponent = $src.UiApp = function(parent, row) {
		UiAppBaseComponent.apply(this, arguments)

	}
	var UiAppPrototype = UiAppComponent.prototype = Object.create(UiAppBasePrototype)

	UiAppPrototype.constructor = UiAppComponent

	UiAppPrototype.componentName = 'src.UiApp'
	core.addProperty(UiAppPrototype, 'int', 'currentIndex')
	core.addProperty(UiAppPrototype, 'int', 'count')
	UiAppPrototype.processData = function() {
	var playlistInput = this._get('playlistInput', true), checkTimer = this._get('checkTimer', true)

		var lines = playlistInput.text.split('\n');
		this._data = []
		for (var i = 0; i < lines.length - 1; ++i) {
			var line = lines[i]
			var nextLine = lines[i + 1]
			if (line.indexOf('#EXTINF') == 0 && nextLine.indexOf('http') == 0) {
				var comaPos = line.indexOf(',')
				if (comaPos < 0)
					continue
				var title = line.substring(comaPos + 1, line.length)
				if (title.indexOf('==') < 0)
					this._data.push({'title': title, 'playlist': nextLine})
			} else if (line.indexOf('#EXTINF') == 0 && (i < lines.length - 2 && lines[i + 2].indexOf('http') == 0)) {
				var comaPos = line.indexOf(',')
				if (comaPos < 0)
					continue
				var title = line.substring(comaPos + 1, line.length)
				if (title.indexOf('==') < 0)
					this._data.push({'title': title, 'playlist': lines[i + 2]})
			}
		}
		this._workingPlaylists = []
		this.currentIndex = 0
		this.count = this._data.length
		checkTimer.restart()
	}

	UiAppPrototype.$c = function($c) {
		var $this = this;
		UiAppBasePrototype.$c.call(this, $c.$b = { })
var _this$child0 = new $controls$input.TextAreaInput($this)
		$c._this$child0 = _this$child0

//creating component TextAreaInput
		_this$child0.$c($c.$c$_this$child0 = { })
		_this$child0._setId('playlistInput')
		$this.addChild(_this$child0)
		var _this$child1 = new $controls$input.TextAreaInput($this)
		$c._this$child1 = _this$child1

//creating component TextAreaInput
		_this$child1.$c($c.$c$_this$child1 = { })
		_this$child1._setId('playlistResult')
		$this.addChild(_this$child1)
		var _this$child2 = new $controls$web.WebItem($this)
		$c._this$child2 = _this$child2

//creating component WebItem
		_this$child2.$c($c.$c$_this$child2 = { })
		var _this_child2$child0 = new $core.Rectangle(_this$child2)
		$c._this_child2$child0 = _this_child2$child0

//creating component Rectangle
		_this_child2$child0.$c($c.$c$_this_child2$child0 = { })

		_this$child2.addChild(_this_child2$child0)
		var _this_child2$child1 = new $core.Text(_this$child2)
		$c._this_child2$child1 = _this_child2$child1

//creating component Text
		_this_child2$child1.$c($c.$c$_this_child2$child1 = { })

		_this$child2.addChild(_this_child2$child1)
		$this.addChild(_this$child2)
		var _this$child3 = new $controls$web.WebItem($this)
		$c._this$child3 = _this$child3

//creating component WebItem
		_this$child3.$c($c.$c$_this$child3 = { })
		var _this_child3$child0 = new $core.Text(_this$child3)
		$c._this_child3$child0 = _this_child3$child0

//creating component Text
		_this_child3$child0.$c($c.$c$_this_child3$child0 = { })

		_this$child3.addChild(_this_child3$child0)
		$this.addChild(_this$child3)
		var _this$child4 = new $core.VideoPlayer($this)
		$c._this$child4 = _this$child4

//creating component VideoPlayer
		_this$child4.$c($c.$c$_this$child4 = { })
		_this$child4._setId('player')
		$this.addChild(_this$child4)
		var _this$child5 = new $core.Timer($this)
		$c._this$child5 = _this$child5

//creating component Timer
		_this$child5.$c($c.$c$_this$child5 = { })
		_this$child5._setId('checkTimer')
		$this.addChild(_this$child5)
		$this._setId('main')
	}
	UiAppPrototype.$s = function($c) {
		var $this = this;
	UiAppBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning anchors.fill to (${context})
			$this.anchors._replaceUpdater('fill', function() { $this.anchors.fill = ($this._context) }, [$this,'context'])

//setting up component TextAreaInput
			var _this$child0 = $c._this$child0
			_this$child0.$s($c.$c$_this$child0)
			delete $c.$c$_this$child0

//assigning x to (230)
			_this$child0._removeUpdater('x'); _this$child0.x = (230);
//assigning width to (300)
			_this$child0._removeUpdater('width'); _this$child0.width = (300);
//assigning height to (600)
			_this$child0._removeUpdater('height'); _this$child0.height = (600);
//assigning border.width to (1)
			_this$child0.border._removeUpdater('width'); _this$child0.border.width = (1);
//assigning border.color to ("#000")
			_this$child0.border._removeUpdater('color'); _this$child0.border.color = ("#000");

			_this$child0.completed()

//setting up component TextAreaInput
			var _this$child1 = $c._this$child1
			_this$child1.$s($c.$c$_this$child1)
			delete $c.$c$_this$child1

//assigning width to (300)
			_this$child1._removeUpdater('width'); _this$child1.width = (300);
//assigning height to (600)
			_this$child1._removeUpdater('height'); _this$child1.height = (600);
//assigning anchors.left to (${playlistInput.right})
			_this$child1.anchors._replaceUpdater('left', function() { _this$child1.anchors.left = (_this$child1._get('playlistInput').right) }, [_this$child1._get('playlistInput'),'right'])
//assigning anchors.leftMargin to (((20) * ${context.virtualScale}))
			_this$child1.anchors._replaceUpdater('leftMargin', function() { _this$child1.anchors.leftMargin = (((20) * _this$child1._context.virtualScale)) }, [_this$child1._context,'virtualScale'])
//assigning border.width to (1)
			_this$child1.border._removeUpdater('width'); _this$child1.border.width = (1);
//assigning border.color to ("#000")
			_this$child1.border._removeUpdater('color'); _this$child1.border.color = ("#000");

			_this$child1.completed()

//setting up component WebItem
			var _this$child2 = $c._this$child2
			_this$child2.$s($c.$c$_this$child2)
			delete $c.$c$_this$child2

//assigning y to (160)
			_this$child2._removeUpdater('y'); _this$child2.y = (160);
//assigning width to (200)
			_this$child2._removeUpdater('width'); _this$child2.width = (200);
//assigning height to (50)
			_this$child2._removeUpdater('height'); _this$child2.height = (50);
//assigning color to ("#ccc")
			_this$child2._removeUpdater('color'); _this$child2.color = ("#ccc");
			_this$child2.on('clicked', function() {
			this.parent.processData()
		}.bind(_this$child2))

//setting up component Rectangle
			var _this_child2$child0 = $c._this_child2$child0
			_this_child2$child0.$s($c.$c$_this_child2$child0)
			delete $c.$c$_this_child2$child0

//assigning width to (${main.count} ? Math.round((${main.currentIndex} * 1.0 / ${main.count} * ${parent.width})) : 0)
			_this_child2$child0._replaceUpdater('width', function() { _this_child2$child0.width = (_this_child2$child0._get('main').count ? Math.round((_this_child2$child0._get('main').currentIndex * 1.0 / _this_child2$child0._get('main').count * _this_child2$child0.parent.width)) : 0) }, [_this_child2$child0.parent,'width',_this_child2$child0._get('main'),'count',_this_child2$child0._get('main'),'currentIndex'])
//assigning height to ((${parent.height}))
			_this_child2$child0._replaceUpdater('height', function() { _this_child2$child0.height = ((_this_child2$child0.parent.height)) }, [_this_child2$child0.parent,'height'])
//assigning color to ("#999")
			_this_child2$child0._removeUpdater('color'); _this_child2$child0.color = ("#999");

			_this_child2$child0.completed()

//setting up component Text
			var _this_child2$child1 = $c._this_child2$child1
			_this_child2$child1.$s($c.$c$_this_child2$child1)
			delete $c.$c$_this_child2$child1

//assigning y to (5)
			_this_child2$child1._removeUpdater('y'); _this_child2$child1.y = (5);
//assigning width to ((${parent.width}))
			_this_child2$child1._replaceUpdater('width', function() { _this_child2$child1.width = ((_this_child2$child1.parent.width)) }, [_this_child2$child1.parent,'width'])
//assigning text to (${main.count} ? Math.round((${main.currentIndex} * 1.0 / ${main.count} * 100)) : "Check")
			_this_child2$child1._replaceUpdater('text', function() { _this_child2$child1.text = (_this_child2$child1._get('main').count ? Math.round((_this_child2$child1._get('main').currentIndex * 1.0 / _this_child2$child1._get('main').count * 100)) : "Check") }, [_this_child2$child1._get('main'),'currentIndex',_this_child2$child1._get('main'),'count'])
//assigning horizontalAlignment to (_globals.core.Text.prototype.AlignHCenter)
			_this_child2$child1._removeUpdater('horizontalAlignment'); _this_child2$child1.horizontalAlignment = (_globals.core.Text.prototype.AlignHCenter);
//assigning font.pixelSize to (24)
			_this_child2$child1.font._removeUpdater('pixelSize'); _this_child2$child1.font.pixelSize = (24);
//assigning color to ("#000")
			_this_child2$child1._removeUpdater('color'); _this_child2$child1.color = ("#000");

			_this_child2$child1.completed()

			_this$child2.completed()

//setting up component WebItem
			var _this$child3 = $c._this$child3
			_this$child3.$s($c.$c$_this$child3)
			delete $c.$c$_this$child3

//assigning y to (220)
			_this$child3._removeUpdater('y'); _this$child3.y = (220);
//assigning width to (200)
			_this$child3._removeUpdater('width'); _this$child3.width = (200);
//assigning height to (50)
			_this$child3._removeUpdater('height'); _this$child3.height = (50);
//assigning color to ("#ccc")
			_this$child3._removeUpdater('color'); _this$child3.color = ("#ccc");
			_this$child3.on('clicked', function() {
	var main = this._get('main', true), checkTimer = this._get('checkTimer', true)

			main.count = 0
			checkTimer.stop()
		}.bind(_this$child3))

//setting up component Text
			var _this_child3$child0 = $c._this_child3$child0
			_this_child3$child0.$s($c.$c$_this_child3$child0)
			delete $c.$c$_this_child3$child0

//assigning y to (5)
			_this_child3$child0._removeUpdater('y'); _this_child3$child0.y = (5);
//assigning width to ((${parent.width}))
			_this_child3$child0._replaceUpdater('width', function() { _this_child3$child0.width = ((_this_child3$child0.parent.width)) }, [_this_child3$child0.parent,'width'])
//assigning text to ("Stop")
			_this_child3$child0._removeUpdater('text'); _this_child3$child0.text = ("Stop");
//assigning horizontalAlignment to (_globals.core.Text.prototype.AlignHCenter)
			_this_child3$child0._removeUpdater('horizontalAlignment'); _this_child3$child0.horizontalAlignment = (_globals.core.Text.prototype.AlignHCenter);
//assigning font.pixelSize to (24)
			_this_child3$child0.font._removeUpdater('pixelSize'); _this_child3$child0.font.pixelSize = (24);
//assigning color to ("#000")
			_this_child3$child0._removeUpdater('color'); _this_child3$child0.color = ("#000");

			_this_child3$child0.completed()

			_this$child3.completed()

//setting up component VideoPlayer
			var _this$child4 = $c._this$child4
			_this$child4.$s($c.$c$_this$child4)
			delete $c.$c$_this$child4

//assigning width to (200)
			_this$child4._removeUpdater('width'); _this$child4.width = (200);
//assigning height to (150)
			_this$child4._removeUpdater('height'); _this$child4.height = (150);
//assigning autoPlay to (true)
			_this$child4._removeUpdater('autoPlay'); _this$child4.autoPlay = (true);
//assigning volume to (0)
			_this$child4._removeUpdater('volume'); _this$child4.volume = (0);
			_this$child4.on('error', function() {
	var checkTimer = this._get('checkTimer', true)
 checkTimer.processNext() }.bind(_this$child4))
			_this$child4.onChanged('ready', function(value) {
	var playlistResult = this._get('playlistResult', true)

			if (value) {
				var parent = this.parent
				var row = parent._data[parent.currentIndex - 1]
				parent._workingPlaylists.push(row)

				playlistResult.text += "#EXTINF:-1," + row.title + "\n"
				playlistResult.text += row.playlist + "\n"
			}
		}.bind(_this$child4))

			_this$child4.completed()

//setting up component Timer
			var _this$child5 = $c._this$child5
			_this$child5.$s($c.$c$_this$child5)
			delete $c.$c$_this$child5

//assigning interval to (5000)
			_this$child5._removeUpdater('interval'); _this$child5.interval = (5000);
			_this$child5.processNext = function() {
	var player = this._get('player', true)

			var parent = this.parent
			if (parent._data && parent.currentIndex < parent._data.length) {
				log("Check link", parent._data[parent.currentIndex])
				player.ready = false
				player.source = parent._data[parent.currentIndex].playlist
				++parent.currentIndex
			}
			this.restart()
		}.bind(_this$child5)
			_this$child5.on('triggered', function() { this.processNext() }.bind(_this$child5))

			_this$child5.completed()

			$this.completed()
}


//=====[component core.System]=====================

	var SystemBaseComponent = $core.Object
	var SystemBasePrototype = SystemBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Object}
 */
	var SystemComponent = $core.System = function(parent, row) {
		SystemBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this.vendor = $core.vendor
		this.device = $core.device
		this.os = $core.os

		this.browser = $core.browser
		this.userAgent = $core.userAgent
		this.language = $core.language

		var ctx = this._context
		ctx.language = this.language.replace('-', '_')
		this.webkit = this.userAgent.toLowerCase().indexOf('webkit') >= 0

		this.support3dTransforms = ctx.backend.capabilities.csstransforms3d || false
		this.supportTransforms = ctx.backend.capabilities.csstransforms || false
		this.supportTransitions = ctx.backend.capabilities.csstransitions || false

		this.resolutionWidth = $manifest$resolutionWidth
		this.resolutionHeight = $manifest$resolutionHeight
	}

	}
	var SystemPrototype = SystemComponent.prototype = Object.create(SystemBasePrototype)

	SystemPrototype.constructor = SystemComponent

	SystemPrototype.componentName = 'core.System'
	core.addProperty(SystemPrototype, 'string', 'userAgent')
	core.addProperty(SystemPrototype, 'string', 'language')
	core.addProperty(SystemPrototype, 'string', 'browser')
	core.addProperty(SystemPrototype, 'string', 'vendor')
	core.addProperty(SystemPrototype, 'string', 'os')
	core.addProperty(SystemPrototype, 'bool', 'webkit')
	core.addProperty(SystemPrototype, 'bool', 'support3dTransforms')
	core.addProperty(SystemPrototype, 'bool', 'supportTransforms')
	core.addProperty(SystemPrototype, 'bool', 'supportTransitions')
	core.addProperty(SystemPrototype, 'bool', 'portrait')
	core.addProperty(SystemPrototype, 'bool', 'landscape')
	core.addProperty(SystemPrototype, 'bool', 'pageActive', (true))
	core.addProperty(SystemPrototype, 'int', 'screenWidth')
	core.addProperty(SystemPrototype, 'int', 'screenHeight')
	core.addProperty(SystemPrototype, 'int', 'contextWidth')
	core.addProperty(SystemPrototype, 'int', 'contextHeight')
	core.addProperty(SystemPrototype, 'int', 'resolutionWidth')
	core.addProperty(SystemPrototype, 'int', 'resolutionHeight')
	core.addProperty(SystemPrototype, 'bool', 'virtualKeyboard')
/** @const @type {number} */
	SystemPrototype.Desktop = 0
/** @const @type {number} */
	SystemComponent.Desktop = 0
/** @const @type {number} */
	SystemPrototype.Tv = 1
/** @const @type {number} */
	SystemComponent.Tv = 1
/** @const @type {number} */
	SystemPrototype.Mobile = 2
/** @const @type {number} */
	SystemComponent.Mobile = 2
	core.addProperty(SystemPrototype, 'enum', 'device')
/** @const @type {number} */
	SystemPrototype.MobileS = 0
/** @const @type {number} */
	SystemComponent.MobileS = 0
/** @const @type {number} */
	SystemPrototype.MobileM = 1
/** @const @type {number} */
	SystemComponent.MobileM = 1
/** @const @type {number} */
	SystemPrototype.MobileL = 2
/** @const @type {number} */
	SystemComponent.MobileL = 2
/** @const @type {number} */
	SystemPrototype.Tablet = 3
/** @const @type {number} */
	SystemComponent.Tablet = 3
/** @const @type {number} */
	SystemPrototype.Laptop = 4
/** @const @type {number} */
	SystemComponent.Laptop = 4
/** @const @type {number} */
	SystemPrototype.LaptopL = 5
/** @const @type {number} */
	SystemComponent.LaptopL = 5
/** @const @type {number} */
	SystemPrototype.Laptop4K = 6
/** @const @type {number} */
	SystemComponent.Laptop4K = 6
	core.addProperty(SystemPrototype, 'enum', 'layoutType')
	SystemPrototype._updateLayoutType = function() {
		if (!this.contextWidth || !this.contextHeight)
			return
		var min = this.contextWidth;// < this.contextHeight ? this.contextWidth : this.contextHeight

		if (min <= 320)
			this.layoutType = this.MobileS
		else if (min <= 375)
			this.layoutType = this.MobileM
		else if (min <= 425)
			this.layoutType = this.MobileL
		else if (min <= 768)
			this.layoutType = this.Tablet
		else if (this.contextWidth <= 1024)
			this.layoutType = this.Laptop
		else if (this.contextWidth <= 1440)
			this.layoutType = this.LaptopL
		else
			this.layoutType = this.Laptop4K
	}
	var $code$0 = function(value) { this._updateLayoutType() }
	$core._protoOnChanged(SystemPrototype, 'contextWidth', $code$0)
	$core._protoOnChanged(SystemPrototype, 'contextHeight', $code$0)

	SystemPrototype.$c = function($c) {
		var $this = this;
		SystemBasePrototype.$c.call(this, $c.$b = { })

	}
	SystemPrototype.$s = function($c) {
		var $this = this;
	SystemBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning portrait to (${parent.width} < ${parent.height})
			$this._replaceUpdater('portrait', function() { $this.portrait = ($this.parent.width < $this.parent.height) }, [$this.parent,'height',$this.parent,'width'])
//assigning landscape to (! ${portrait})
			$this._replaceUpdater('landscape', function() { $this.landscape = (! $this.portrait) }, [$this,'portrait'])
//assigning contextWidth to (${context.width})
			$this._replaceUpdater('contextWidth', function() { $this.contextWidth = ($this._context.width) }, [$this._context,'width'])
//assigning contextHeight to (${context.height})
			$this._replaceUpdater('contextHeight', function() { $this.contextHeight = ($this._context.height) }, [$this._context,'height'])
//assigning virtualKeyboard to (${device} === _globals.core.System.prototype.Tv || ${device} === _globals.core.System.prototype.Mobile)
			$this._replaceUpdater('virtualKeyboard', function() { $this.virtualKeyboard = ($this.device === _globals.core.System.prototype.Tv || $this.device === _globals.core.System.prototype.Mobile) }, [$this,'device'])

			$this.completed()
}


//=====[component html5.Stylesheet]=====================

	var StylesheetBaseComponent = $core.Object
	var StylesheetBasePrototype = StylesheetBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Object}
 */
	var StylesheetComponent = $html5.Stylesheet = function(parent, row) {
		StylesheetBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		var context = this._context
		var options = context.options

		var style = this.style = context.createElement('style')
		style.dom.type = 'text/css'

		this.prefix = options.prefix
		var divId = options.id

		var div = document.getElementById(context, divId)
		var topLevel = div === null

		var userSelect = window.Modernizr.prefixedCSS('user-select') + ": none; "
		var os = _globals.core.os
		var tapHighlightedPlatform = (os === "android" || os === "androidttk" || os === "hisense")

		//var textAdjust = window.Modernizr.prefixedCSS('text-size-adjust') + ": 100%; "
		style.setHtml(
			//"html { " + textAdjust + " }" +
			"div#" + divId + " { position: absolute; visibility: hidden; left: 0px; top: 0px; }" +
			(os === "webOS" || tapHighlightedPlatform ? this.mangleRule('div', "{ " + userSelect + " }") : "") +
			(tapHighlightedPlatform ? this.mangleRule('div', "{ -webkit-tap-highlight-color: rgba(255, 255, 255, 0); -webkit-focus-ring-color: rgba(255, 255, 255, 0); outline: none; }") : "") +
			(topLevel? "body { padding: 0; margin: 0; border: 0px; overflow: hidden; }": "") + //fixme: do we need style here in non-top-level mode?
			this.mangleRule('video', "{ position: absolute; }") + //fixme: do we need position rule if it's item?
			this.mangleRule('img', "{ position: absolute; -webkit-touch-callout: none; " + userSelect + " }")
		)
		var head = _globals.html5.html.getElement(context, 'head')
		head.append(style)
		head.updateStyle()

		this._addRule = _globals.html5.html.createAddRule(style.dom).bind(this)
		this._lastId = 0
	}

	}
	var StylesheetPrototype = StylesheetComponent.prototype = Object.create(StylesheetBasePrototype)

	StylesheetPrototype.constructor = StylesheetComponent

	StylesheetPrototype.componentName = 'html5.Stylesheet'
	StylesheetPrototype.allocateClass = function(prefix) {
		var globalPrefix = this.prefix
		return (globalPrefix? globalPrefix: '') + prefix + '-' + this._lastId++
	}
	StylesheetPrototype.mangleSelector = function(selector) {
		var prefix = this.prefix
		if (prefix)
			return selector + '.' + prefix + 'core-item'
		else
			return selector
	}
	StylesheetPrototype.mangleRule = function(selector,rule) {
		return this.mangleSelector(selector) + ' ' + rule + ' '
	}
	StylesheetPrototype.addRule = function(selector,rule) {
		this._addRule(selector, rule)
	}

	StylesheetPrototype.$c = function($c) {
		var $this = this;
		StylesheetBasePrototype.$c.call(this, $c.$b = { })

	}
	StylesheetPrototype.$s = function($c) {
		var $this = this;
	StylesheetBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component core.Location]=====================

	var LocationBaseComponent = $core.Object
	var LocationBasePrototype = LocationBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Object}
 */
	var LocationComponent = $core.Location = function(parent, row) {
		LocationBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		var backend = $core.__locationBackend
		if (!backend)
			throw new Error('no backend found')
		this.impl = backend().createLocation(this)
	}

	}
	var LocationPrototype = LocationComponent.prototype = Object.create(LocationBasePrototype)

	LocationPrototype.constructor = LocationComponent

	LocationPrototype.componentName = 'core.Location'
	core.addProperty(LocationPrototype, 'string', 'hash')
	core.addProperty(LocationPrototype, 'string', 'host')
	core.addProperty(LocationPrototype, 'string', 'href')
	core.addProperty(LocationPrototype, 'string', 'port')
	core.addProperty(LocationPrototype, 'string', 'origin')
	core.addProperty(LocationPrototype, 'string', 'hostname')
	core.addProperty(LocationPrototype, 'string', 'pathname')
	core.addProperty(LocationPrototype, 'string', 'protocol')
	core.addProperty(LocationPrototype, 'string', 'search')
	core.addProperty(LocationPrototype, 'Object', 'state')
	LocationPrototype.changeHref = function(href) {
		this.impl.changeHref(href)
	}
	LocationPrototype.pushState = function(state,title,url) {
		this.impl.pushState(state, title, url)
	}

	LocationPrototype.$c = function($c) {
		var $this = this;
		LocationBasePrototype.$c.call(this, $c.$b = { })

	}
	LocationPrototype.$s = function($c) {
		var $this = this;
	LocationBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component core.Loader]=====================

	var LoaderBaseComponent = $core.Item
	var LoaderBasePrototype = LoaderBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Item}
 */
	var LoaderComponent = $core.Loader = function(parent, row) {
		LoaderBaseComponent.apply(this, arguments)

	}
	var LoaderPrototype = LoaderComponent.prototype = Object.create(LoaderBasePrototype)

	LoaderPrototype.constructor = LoaderComponent

	LoaderPrototype.componentName = 'core.Loader'
	LoaderPrototype.loaded = $core.createSignal('loaded')
	core.addProperty(LoaderPrototype, 'string', 'source')
	core.addProperty(LoaderPrototype, 'Object', 'item')
	LoaderPrototype.discard = function() {
		this.discardItem()
		$core.Item.prototype.discard.call(this)
	}
	LoaderPrototype.discardItem = function() {
		var item = this.item
		if (item) {
			item.discard()
			item = null
		}
	}
	LoaderPrototype._load = function() {
		var source = this.source
		if (!source)
			return

		log('loading ' + source + '…')
		var path = source.split('.')
		var ctor = _globals
		while(path.length) {
			var ns = path.shift()
			ctor = ctor[ns]
			if (ctor === undefined)
				throw new Error('unknown component used: ' + source)
		}

		this.item = new ctor(this)
		$core.core.createObject(this.item)
		this.loaded()
	}
	LoaderPrototype.__complete = function() { LoaderBasePrototype.__complete.call(this)
if (!this.item && this.source)
			this._load()
}
	$core._protoOnChanged(LoaderPrototype, 'recursiveVisible', function(value) {
		if (this.item)
			this._updateVisibilityForChild(this.item, value)
	})
	$core._protoOnChanged(LoaderPrototype, 'source', function(value) {
		this.discardItem()
		this._load()
	})

	LoaderPrototype.$c = function($c) {
		var $this = this;
		LoaderBasePrototype.$c.call(this, $c.$b = { })

	}
	LoaderPrototype.$s = function($c) {
		var $this = this;
	LoaderBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component core.Rectangle]=====================

	var RectangleBaseComponent = $core.Item
	var RectangleBasePrototype = RectangleBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Item}
 */
	var RectangleComponent = $core.Rectangle = function(parent, row) {
		RectangleBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this._context.backend.initRectangle(this)
	}

	}
	var RectanglePrototype = RectangleComponent.prototype = Object.create(RectangleBasePrototype)

	{
		var styleMap = RectanglePrototype._propertyToStyle = Object.create(RectangleBasePrototype._propertyToStyle)
		styleMap['color'] = 'background-color'
	}

	RectanglePrototype.constructor = RectangleComponent

	RectanglePrototype.componentName = 'core.Rectangle'
	core.addProperty(RectanglePrototype, 'color', 'color', ("#0000"))
	core.addLazyProperty(RectanglePrototype, 'border', (function(__parent, __row) {
		var lazy$border = new $core.Border(__parent, __row)
		var $c = { lazy$border : lazy$border }

//creating component Border
			lazy$border.$c($c.$c$lazy$border = { })


//setting up component Border
			var lazy$border = $c.lazy$border
			lazy$border.$s($c.$c$lazy$border)
			delete $c.$c$lazy$border


			lazy$border.completed()

		return lazy$border
}))
	core.addProperty(RectanglePrototype, 'Gradient', 'gradient')
	$core._protoOnChanged(RectanglePrototype, 'color', function(value) {
		this.style('background-color', $core.Color.normalize(value))
	})

	RectanglePrototype.$c = function($c) {
		var $this = this;
		RectangleBasePrototype.$c.call(this, $c.$b = { })

	}
	RectanglePrototype.$s = function($c) {
		var $this = this;
	RectangleBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component controls.web.WebItem]=====================

	var WebItemBaseComponent = $core.Rectangle
	var WebItemBasePrototype = WebItemBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Rectangle}
 */
	var WebItemComponent = $controls$web.WebItem = function(parent, row) {
		WebItemBaseComponent.apply(this, arguments)

	}
	var WebItemPrototype = WebItemComponent.prototype = Object.create(WebItemBasePrototype)

	WebItemPrototype.constructor = WebItemComponent

	WebItemPrototype.componentName = 'controls.web.WebItem'
	core.addProperty(WebItemPrototype, 'Mixin', 'hoverMixin')
	core.addProperty(WebItemPrototype, 'string', 'position')
	$core._protoOnChanged(WebItemPrototype, 'position', function(value) { this.style('position', value); })

	WebItemPrototype.$c = function($c) {
		var $this = this;
		WebItemBasePrototype.$c.call(this, $c.$b = { })
//creating component controls.web.<anonymous>
		var _this$hoverMixin = new $controls$web.HoverClickMixin($this)
		$c._this$hoverMixin = _this$hoverMixin

//creating component HoverClickMixin
		_this$hoverMixin.$c($c.$c$_this$hoverMixin = { })

		$this.hoverMixin = _this$hoverMixin
		core.addAliasProperty($this, 'hover', function() { return $this.hoverMixin }, 'value')
		core.addAliasProperty($this, 'clickable', function() { return $this.hoverMixin }, 'clickable')
		core.addAliasProperty($this, 'hoverable', function() { return $this.hoverMixin }, 'enabled')
		core.addAliasProperty($this, 'cursor', function() { return $this.hoverMixin }, 'cursor')
		core.addAliasProperty($this, 'activeHover', function() { return $this.hoverMixin }, 'activeHover')
		core.addAliasProperty($this, 'activeHoverEnabled', function() { return $this.hoverMixin }, 'activeHoverEnabled')
	}
	WebItemPrototype.$s = function($c) {
		var $this = this;
	WebItemBasePrototype.$s.call(this, $c.$b); delete $c.$b
//setting up component HoverClickMixin
			var _this$hoverMixin = $c._this$hoverMixin
			_this$hoverMixin.$s($c.$c$_this$hoverMixin)
			delete $c.$c$_this$hoverMixin


			_this$hoverMixin.completed()
//assigning color to ("transparent")
			$this._removeUpdater('color'); $this.color = ("transparent");
//assigning hoverMixin.cursor to ("pointer")
			$this.hoverMixin._removeUpdater('cursor'); $this.hoverMixin.cursor = ("pointer");

			$this.completed()
}


//=====[component controls.input.BaseInput]=====================

	var BaseInputBaseComponent = $core.Item
	var BaseInputBasePrototype = BaseInputBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Item}
 */
	var BaseInputComponent = $controls$input.BaseInput = function(parent, row) {
		BaseInputBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this._placeholderClass = ''
		this.element.on("focus", function() { this.forceActiveFocus(); }.bind(this))
		this.element.on("blur", function() { /* fixme: remove focus from current input */ }.bind(this))
		this.element.on("change", function() { this.change() }.bind(this))
	}

	}
	var BaseInputPrototype = BaseInputComponent.prototype = Object.create(BaseInputBasePrototype)

	BaseInputPrototype.constructor = BaseInputComponent

	BaseInputPrototype.componentName = 'controls.input.BaseInput'
	BaseInputPrototype.change = $core.createSignal('change')
	core.addLazyProperty(BaseInputPrototype, 'paddings', (function(__parent, __row) {
		var lazy$paddings = new $controls$core.Paddings(__parent, __row)
		var $c = { lazy$paddings : lazy$paddings }

//creating component Paddings
			lazy$paddings.$c($c.$c$lazy$paddings = { })


//setting up component Paddings
			var lazy$paddings = $c.lazy$paddings
			lazy$paddings.$s($c.$c$lazy$paddings)
			delete $c.$c$lazy$paddings


			lazy$paddings.completed()

		return lazy$paddings
}))
	core.addProperty(BaseInputPrototype, 'Color', 'color', ("#000"))
	core.addProperty(BaseInputPrototype, 'Color', 'backgroundColor', ("#fff"))
	core.addProperty(BaseInputPrototype, 'Font', 'font')
	core.addProperty(BaseInputPrototype, 'Border', 'border')
	core.addProperty(BaseInputPrototype, 'string', 'type', ("text"))
	core.addProperty(BaseInputPrototype, 'PlaceHolder', 'placeholder')
	core.addProperty(BaseInputPrototype, 'bool', 'enabled', (true))
	core.addProperty(BaseInputPrototype, 'bool', 'nativeFocus', ($manifest$useNativeFocusForInput))
	core.addProperty(BaseInputPrototype, 'string', 'inputMode')
	core.addProperty(BaseInputPrototype, 'string', 'autocomplete')
/** @const @type {number} */
	BaseInputPrototype.AlignLeft = 0
/** @const @type {number} */
	BaseInputComponent.AlignLeft = 0
/** @const @type {number} */
	BaseInputPrototype.AlignRight = 1
/** @const @type {number} */
	BaseInputComponent.AlignRight = 1
/** @const @type {number} */
	BaseInputPrototype.AlignHCenter = 2
/** @const @type {number} */
	BaseInputComponent.AlignHCenter = 2
/** @const @type {number} */
	BaseInputPrototype.Justify = 3
/** @const @type {number} */
	BaseInputComponent.Justify = 3
	core.addProperty(BaseInputPrototype, 'enum', 'horizontalAlignment')
	BaseInputPrototype._getValue = function() {
		return this.element.getProperty('value')
	}
	BaseInputPrototype._updateSize = function() {
		var style = { width: this.width, height: this.height }
		this.style(style)
	}
	BaseInputPrototype.focusBrowser = function() {
	var focusTimer = this._get('focusTimer', true)

		if (!this.nativeFocus)
			return

		focusTimer.restart()
	}
	BaseInputPrototype.blurBrowser = function() {
	var focusTimer = this._get('focusTimer', true)

		if (!this.nativeFocus)
			return

		focusTimer.stop()
		this.element.blur()
	}
	BaseInputPrototype.getTag = function() { return 'input' }
	BaseInputPrototype.registerStyle = function(style) {
		style.addRule('input', "position: absolute; visibility: inherit; border-style: solid; border-width: 0px; box-sizing: border-box;")
		style.addRule('input:focus', "outline: none;")
	}
	BaseInputPrototype._updateValue = function(value) {
		if (value !== this._getValue())
			this._setValue(value)
	}
	BaseInputPrototype._setValue = function(value) {
		this.element.setProperty('value', value)
	}
	$core._protoOnChanged(BaseInputPrototype, 'recursiveVisible', function(value) {
		if (!value)
			this.blurBrowser()
	})
	$core._protoOnChanged(BaseInputPrototype, 'activeFocus', function(value) {
		if (value)
			this.focusBrowser()
		else
			this.blurBrowser()
	})
	$core._protoOnChanged(BaseInputPrototype, 'horizontalAlignment', function(value) {
		switch(value) {
		case this.AlignLeft:	this.style('text-align', 'left'); break
		case this.AlignRight:	this.style('text-align', 'right'); break
		case this.AlignHCenter:	this.style('text-align', 'center'); break
		case this.AlignJustify:	this.style('text-align', 'justify'); break
		}
	})
	$core._protoOnChanged(BaseInputPrototype, 'autocomplete', function(value) {
		this.element.setAttribute('autocomplete', value)
	})
	$core._protoOnChanged(BaseInputPrototype, 'enabled', function(value) {
		this.element.setAttribute('disabled', !value)
	})
	$core._protoOnChanged(BaseInputPrototype, 'inputMode', function(value) {
		this.element.setAttribute('inputmode', value)
	})
	var $code$0 = function(value) { this._updateSize() }
	$core._protoOnChanged(BaseInputPrototype, 'width', $code$0)
	$core._protoOnChanged(BaseInputPrototype, 'height', $code$0)
	$core._protoOnChanged(BaseInputPrototype, 'type', function(value) { this.element.setAttribute('type', value) })
	$core._protoOnChanged(BaseInputPrototype, 'backgroundColor', function(value) { this.style('background', value) })
	$core._protoOnChanged(BaseInputPrototype, 'color', function(value) { this.style('color', value) })

	BaseInputPrototype.$c = function($c) {
		var $this = this;
		BaseInputBasePrototype.$c.call(this, $c.$b = { })
var _this$child0 = new $core.Timer($this)
		$c._this$child0 = _this$child0

//creating component Timer
		_this$child0.$c($c.$c$_this$child0 = { })
		_this$child0._setId('focusTimer')
		$this.addChild(_this$child0)
//creating component controls.input.<anonymous>
		var _this$font = new $core.Font($this)
		$c._this$font = _this$font

//creating component Font
		_this$font.$c($c.$c$_this$font = { })

		$this.font = _this$font
//creating component controls.input.<anonymous>
		var _this$border = new $core.Border($this)
		$c._this$border = _this$border

//creating component Border
		_this$border.$c($c.$c$_this$border = { })

		$this.border = _this$border
//creating component controls.input.<anonymous>
		var _this$placeholder = new $controls$core.PlaceHolder($this)
		$c._this$placeholder = _this$placeholder

//creating component PlaceHolder
		_this$placeholder.$c($c.$c$_this$placeholder = { })

		$this.placeholder = _this$placeholder
	}
	BaseInputPrototype.$s = function($c) {
		var $this = this;
	BaseInputBasePrototype.$s.call(this, $c.$b); delete $c.$b
//setting up component Font
			var _this$font = $c._this$font
			_this$font.$s($c.$c$_this$font)
			delete $c.$c$_this$font


			_this$font.completed()

//setting up component Border
			var _this$border = $c._this$border
			_this$border.$s($c.$c$_this$border)
			delete $c.$c$_this$border


			_this$border.completed()

//setting up component PlaceHolder
			var _this$placeholder = $c._this$placeholder
			_this$placeholder.$s($c.$c$_this$placeholder)
			delete $c.$c$_this$placeholder


			_this$placeholder.completed()
//assigning cssPointerTouchEvents to (true)
			$this._removeUpdater('cssPointerTouchEvents'); $this.cssPointerTouchEvents = (true);

//setting up component Timer
			var _this$child0 = $c._this$child0
			_this$child0.$s($c.$c$_this$child0)
			delete $c.$c$_this$child0

//assigning interval to (100)
			_this$child0._removeUpdater('interval'); _this$child0.interval = (100);
			_this$child0.on('triggered', function() {
			this.parent.element.focus()
		}.bind(_this$child0))

			_this$child0.completed()

			$this.completed()
}


//=====[component core.Text]=====================

	var TextBaseComponent = $core.Item
	var TextBasePrototype = TextBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Item}
 */
	var TextComponent = $core.Text = function(parent, row) {
		TextBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this._context.backend.initText(this)
		if (this.text.length > 0)
			this._setText(this.text)
	}

	}
	var TextPrototype = TextComponent.prototype = Object.create(TextBasePrototype)

	TextPrototype.constructor = TextComponent

	TextPrototype.componentName = 'core.Text'
	core.addProperty(TextPrototype, 'string', 'text')
	core.addProperty(TextPrototype, 'color', 'color')
	core.addLazyProperty(TextPrototype, 'shadow', (function(__parent, __row) {
		var lazy$shadow = new $core.Shadow(__parent, __row)
		var $c = { lazy$shadow : lazy$shadow }

//creating component Shadow
			lazy$shadow.$c($c.$c$lazy$shadow = { })


//setting up component Shadow
			var lazy$shadow = $c.lazy$shadow
			lazy$shadow.$s($c.$c$lazy$shadow)
			delete $c.$c$lazy$shadow


			lazy$shadow.completed()

		return lazy$shadow
}))
	core.addLazyProperty(TextPrototype, 'font', (function(__parent, __row) {
		var lazy$font = new $core.Font(__parent, __row)
		var $c = { lazy$font : lazy$font }

//creating component Font
			lazy$font.$c($c.$c$lazy$font = { })


//setting up component Font
			var lazy$font = $c.lazy$font
			lazy$font.$s($c.$c$lazy$font)
			delete $c.$c$lazy$font


			lazy$font.completed()

		return lazy$font
}))
	core.addProperty(TextPrototype, 'int', 'paintedWidth')
	core.addProperty(TextPrototype, 'int', 'paintedHeight')
/** @const @type {number} */
	TextPrototype.AlignLeft = 0
/** @const @type {number} */
	TextComponent.AlignLeft = 0
/** @const @type {number} */
	TextPrototype.AlignRight = 1
/** @const @type {number} */
	TextComponent.AlignRight = 1
/** @const @type {number} */
	TextPrototype.AlignHCenter = 2
/** @const @type {number} */
	TextComponent.AlignHCenter = 2
/** @const @type {number} */
	TextPrototype.AlignJustify = 3
/** @const @type {number} */
	TextComponent.AlignJustify = 3
	core.addProperty(TextPrototype, 'enum', 'horizontalAlignment')
/** @const @type {number} */
	TextPrototype.AlignTop = 0
/** @const @type {number} */
	TextComponent.AlignTop = 0
/** @const @type {number} */
	TextPrototype.AlignBottom = 1
/** @const @type {number} */
	TextComponent.AlignBottom = 1
/** @const @type {number} */
	TextPrototype.AlignVCenter = 2
/** @const @type {number} */
	TextComponent.AlignVCenter = 2
	core.addProperty(TextPrototype, 'enum', 'verticalAlignment')
/** @const @type {number} */
	TextPrototype.NoWrap = 0
/** @const @type {number} */
	TextComponent.NoWrap = 0
/** @const @type {number} */
	TextPrototype.WordWrap = 1
/** @const @type {number} */
	TextComponent.WordWrap = 1
/** @const @type {number} */
	TextPrototype.WrapAnywhere = 2
/** @const @type {number} */
	TextComponent.WrapAnywhere = 2
/** @const @type {number} */
	TextPrototype.Wrap = 3
/** @const @type {number} */
	TextComponent.Wrap = 3
	core.addProperty(TextPrototype, 'enum', 'wrapMode')
/** @const @type {number} */
	TextPrototype.Html = 0
/** @const @type {number} */
	TextComponent.Html = 0
/** @const @type {number} */
	TextPrototype.Text = 1
/** @const @type {number} */
	TextComponent.Text = 1
	core.addProperty(TextPrototype, 'enum', 'textFormat')
	TextPrototype._updateSize = function() {
		if (this.recursiveVisible && (this._updateSizeNeeded || this.clip))
			this._scheduleUpdateSize()
	}
	TextPrototype._updateStyle = function() {
		if (this.shadow && !this.shadow._empty())
			this.style('text-shadow', this.shadow._getFilterStyle())
		else
			this.style('text-shadow', '')
		$core.Item.prototype._updateStyle.apply(this, arguments)
	}
	TextPrototype._updateSizeImpl = function() {
		if (this.text.length === 0) {
			this.paintedWidth = 0
			this.paintedHeight = 0
			return
		}

		this._context.backend.layoutText(this)
	}
	TextPrototype._scheduleUpdateSize = function() {
		this._context.delayedAction('text:update-size', this, this._updateSizeImpl)
	}
	TextPrototype._enableSizeUpdate = function() {
		this._updateSizeNeeded = true
		this._updateSize()
	}
	TextPrototype._updateWSHandling = function() {
		var text = this.textFormat === this.Text
		switch(this.wrapMode) {
		case this.NoWrap:
			this.style({'white-space': text? 'pre': 'nowrap', 'word-break': '' })
			break
		case this.Wrap:
		case this.WordWrap:
			this.style({'white-space': text? 'pre-wrap': 'normal', 'word-break': '' })
			break
		case this.WrapAnywhere:
			this.style({ 'white-space': text? 'pre-wrap': 'normal', 'word-break': 'break-all' })
			break
		}
		this._updateSize();
	}
	TextPrototype.getClass = function() { return 'core-text' }
	TextPrototype._setText = function(html) {
		this._context.backend.setText(this, html)
	}
	TextPrototype.on = function(name,callback) {
		if (!this._updateSizeNeeded) {
			if (name === 'newBoundingBox')
				this._enableSizeUpdate()
		}
		$core.Item.prototype.on.apply(this, arguments)
	}
	TextPrototype.onChanged = function(name,callback) {
		if (!this._updateSizeNeeded) {
			switch(name) {
				case "right":
				case "width":
				case "bottom":
				case "height":
				case "verticalCenter":
				case "horizontalCenter":
					this._enableSizeUpdate()
			}
		}
		$core.Item.prototype.onChanged.apply(this, arguments);
	}
	TextPrototype.registerStyle = function(style,tag) {
		style.addRule(tag, 'width: auto; height: auto;')
	}
	$core._protoOnChanged(TextPrototype, 'recursiveVisible', function(value) {
		if (value)
			this._updateSize()
	})
	$core._protoOnChanged(TextPrototype, 'horizontalAlignment', function(value) {
		switch(value) {
		case this.AlignLeft:	this.style('text-align', 'left'); break
		case this.AlignRight:	this.style('text-align', 'right'); break
		case this.AlignHCenter:	this.style('text-align', 'center'); break
		case this.AlignJustify:	this.style('text-align', 'justify'); break
		}
	})
	$core._protoOnChanged(TextPrototype, 'verticalAlignment', function(value) {
		this._enableSizeUpdate()
		if ($manifest$requireVerticalTextAlignmentStyle) {
			switch(value) {
				case this.AlignTop:		this.style('-pure-text-vertical-align', 'top'); break
				case this.AlignVCenter:	this.style('-pure-text-vertical-align', 'middle'); break
				case this.AlignBottom:	this.style('-pure-text-vertical-align', 'bottom'); break
			}
		}
	})
	var $code$0 = function(value) {
		this._updateWSHandling()
	}
	$core._protoOnChanged(TextPrototype, 'textFormat', $code$0)
	$core._protoOnChanged(TextPrototype, 'wrapMode', $code$0)
	$core._protoOnChanged(TextPrototype, 'text', function(value) { this._setText(value); this._updateSize() })
	var $code$1 = function(value) { this._updateSize() }
	$core._protoOnChanged(TextPrototype, 'width', $code$1)
	$core._protoOnChanged(TextPrototype, 'height', $code$1)
	$core._protoOnChanged(TextPrototype, 'color', function(value) { this.style('color', $core.Color.normalize(value)) })

	TextPrototype.$c = function($c) {
		var $this = this;
		TextBasePrototype.$c.call(this, $c.$b = { })

	}
	TextPrototype.$s = function($c) {
		var $this = this;
	TextBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning width to (${paintedWidth})
			$this._replaceUpdater('width', function() { $this.width = ($this.paintedWidth) }, [$this,'paintedWidth'])
//assigning height to (${paintedHeight})
			$this._replaceUpdater('height', function() { $this.height = ($this.paintedHeight) }, [$this,'paintedHeight'])

			$this.completed()
}


//=====[component controls.input.TextAreaInput]=====================

	var TextAreaInputBaseComponent = $controls$input.BaseInput
	var TextAreaInputBasePrototype = TextAreaInputBaseComponent.prototype

/**
 * @constructor
 * @extends {$controls$input.BaseInput}
 */
	var TextAreaInputComponent = $controls$input.TextAreaInput = function(parent, row) {
		TextAreaInputBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this.element.on("input", function() {
			this.text = this._getValue()
		}.bind(this))
	}

	}
	var TextAreaInputPrototype = TextAreaInputComponent.prototype = Object.create(TextAreaInputBasePrototype)

	TextAreaInputPrototype.constructor = TextAreaInputComponent

	TextAreaInputPrototype.componentName = 'controls.input.TextAreaInput'
	core.addProperty(TextAreaInputPrototype, 'string', 'text')
	TextAreaInputPrototype.getTag = function() { return 'textarea' }
	TextAreaInputPrototype.registerStyle = function(style,tag) {
		style.addRule('textarea', "position: absolute; visibility: inherit; border-style: solid; border-width: 0px; box-sizing: border-box; resize: none;")
		style.addRule('textarea:focus', "outline: none;")
	}
	$core._protoOnChanged(TextAreaInputPrototype, 'text', function(value) {
		this._updateValue(value)
	})

	TextAreaInputPrototype.$c = function($c) {
		var $this = this;
		TextAreaInputBasePrototype.$c.call(this, $c.$b = { })

	}
	TextAreaInputPrototype.$s = function($c) {
		var $this = this;
	TextAreaInputBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning width to (150)
			$this._removeUpdater('width'); $this.width = (150);
//assigning height to (100)
			$this._removeUpdater('height'); $this.height = (100);

			$this.completed()
}


//=====[component core.VideoPlayer]=====================

	var VideoPlayerBaseComponent = $core.Item
	var VideoPlayerBasePrototype = VideoPlayerBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Item}
 */
	var VideoPlayerComponent = $core.VideoPlayer = function(parent, row) {
		VideoPlayerBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this.impl = null
		this._createPlayer()

		//see explanations in BaseView.onHighlightChanged:
		var p = parent
		var handler = this._scheduleLayout.bind(this)
		while(p) {
			this.connectOn(p, 'scrollEvent', handler)
			p = p.parent
		}
	}

	}
	var VideoPlayerPrototype = VideoPlayerComponent.prototype = Object.create(VideoPlayerBasePrototype)

	VideoPlayerPrototype.constructor = VideoPlayerComponent

	VideoPlayerPrototype.componentName = 'core.VideoPlayer'
	VideoPlayerPrototype.error = $core.createSignal('error')
	VideoPlayerPrototype.text = $core.createSignal('text')
	VideoPlayerPrototype.finished = $core.createSignal('finished')
	core.addProperty(VideoPlayerPrototype, 'string', 'backend')
	core.addProperty(VideoPlayerPrototype, 'string', 'source')
	core.addProperty(VideoPlayerPrototype, 'string', 'backgroundImage')
	core.addProperty(VideoPlayerPrototype, 'color', 'backgroundColor', ("#000"))
	core.addProperty(VideoPlayerPrototype, 'float', 'volume', (1.0))
	core.addProperty(VideoPlayerPrototype, 'bool', 'loop')
	core.addProperty(VideoPlayerPrototype, 'bool', 'ready')
	core.addProperty(VideoPlayerPrototype, 'bool', 'muted')
	core.addProperty(VideoPlayerPrototype, 'bool', 'paused')
	core.addProperty(VideoPlayerPrototype, 'bool', 'waiting')
	core.addProperty(VideoPlayerPrototype, 'bool', 'seeking')
	core.addProperty(VideoPlayerPrototype, 'bool', 'stalled')
	core.addProperty(VideoPlayerPrototype, 'bool', 'autoPlay')
	core.addProperty(VideoPlayerPrototype, 'real', 'duration')
	core.addProperty(VideoPlayerPrototype, 'real', 'progress')
	core.addProperty(VideoPlayerPrototype, 'real', 'buffered')
	core.addProperty(VideoPlayerPrototype, 'real', 'startPosition')
	VideoPlayerPrototype._getPlayer = function() {
		if (this.impl === null)
			this._createPlayer()
		return this.impl
	}
	VideoPlayerPrototype._createPlayer = function() {
		if (this.impl)
			return this.impl

		var source = this.source
		var preferred = this.backend
		log('preferred backend: ' + preferred)
		var backends = $core.__videoBackends
		var results = []
		if (preferred && backends[preferred]) {
			var backend = backends[preferred]()
			return this.impl = backend.createPlayer(this)
		} else {
			for (var i in backends) {
				var backend = backends[i]()
				var score = backend.probeUrl(source)
				if (score > 0)
					results.push({ backend: backend, score: score })
			}
			results.sort(function(a, b) { return b.score - a.score })
			if (results.length === 0)
				throw new Error('no backends for source ' + source)
			return this.impl = results[0].backend.createPlayer(this)
		}
	}
	VideoPlayerPrototype._scheduleLayout = function() {
		this._context.delayedAction('layout', this, this._doLayout)
	}
	VideoPlayerPrototype.play = function() {
	var player = this._get('player', true)

		if (!this.source)
			return

		log("play", this.source)
		var player = this._getPlayer()
		if (player) {
			this._scheduleLayout()
			player.play()
		}
		this.applyVolume();
	}
	VideoPlayerPrototype.applyVolume = function() {
	var player = this._get('player', true)

		if (this.volume > 1.0)
			this.volume = 1.0;
		else if (this.volume < 0.0)
			this.volume = 0.0;

		var player = this._getPlayer()
		if (player)
			player.setVolume(this.volume)
	}
	VideoPlayerPrototype.pause = function() {
	var player = this._get('player', true)

		var player = this._getPlayer()
		if (player)
			player.pause()
	}
	VideoPlayerPrototype._doLayout = function() {
	var player = this._get('player', true)

		var player = this._getPlayer()
		if (player)
			player.setRect.apply(player, this.toScreen().slice(0, 4))
	}
	VideoPlayerPrototype.stop = function() {
	var player = this._get('player', true)

		var player = this._getPlayer()
		if (player)
			player.stop()
	}
	VideoPlayerPrototype.getAudioTracks = function() {
	var player = this._get('player', true)

		var player = this._getPlayer()
		if (player)
			return player.getAudioTracks()
		else
			return []
	}
	VideoPlayerPrototype.getSubtitles = function() {
	var player = this._get('player', true)

		var player = this._getPlayer()
		if (player)
			return player.getSubtitles()
		else
			return []
	}
	VideoPlayerPrototype.getVideoTracks = function() {
	var player = this._get('player', true)

		var player = this._getPlayer()
		if (player)
			return player.getVideoTracks()
		else
			return []
	}
	VideoPlayerPrototype.__complete = function() {
	var player = this._get('player', true)
 VideoPlayerBasePrototype.__complete.call(this)
this._scheduleLayout()
		var player = this._getPlayer()
		if (player)
			player.setBackgroundColor(this.backgroundColor)

		if (this.autoPlay && this.source)
			this.play()
}
	VideoPlayerPrototype.toggleMute = function() {
	var player = this._get('player', true)
 var player = this._getPlayer(); if (player) player.setMute(!this.muted) }
	VideoPlayerPrototype.volumeUp = function() { this.volume += 0.1 }
	VideoPlayerPrototype.volumeDown = function() { this.volume -= 0.1 }
	VideoPlayerPrototype.setOption = function(name,value) {
	var player = this._get('player', true)

		var player = this._getPlayer()
		if (player)
			player.setOption(name, value)
	}
	VideoPlayerPrototype.setAudioTrack = function(trackId) {
	var player = this._get('player', true)

		var player = this._getPlayer()
		if (player)
			player.setAudioTrack(trackId)
	}
	VideoPlayerPrototype.setSubtitles = function(trackId) {
	var player = this._get('player', true)

		var player = this._getPlayer()
		if (player)
			player.setSubtitles(trackId)
	}
	VideoPlayerPrototype.setVideoTrack = function(trackId) {
	var player = this._get('player', true)

		var player = this._getPlayer()
		if (player)
			player.setVideoTrack(trackId)
	}
	VideoPlayerPrototype.setupDrm = function(type,options,callback,error) {
	var player = this._get('player', true)

		var player = this._getPlayer()
		if (player)
			player.setupDrm(type, options, callback, error)
	}
	VideoPlayerPrototype.seek = function(value) {
	var player = this._get('player', true)

		var player = this._getPlayer()
		if (player)
			player.seek(value)
	}
	VideoPlayerPrototype.seekTo = function(value) {
	var player = this._get('player', true)

		var player = this._getPlayer()
		if (player)
			player.seekTo(value)
	}
	$core._protoOnChanged(VideoPlayerPrototype, 'backend', function(value) {
		this.impl = null
		this._createPlayer()
	})
	$core._protoOnChanged(VideoPlayerPrototype, 'backgroundColor', function(value) {
	var player = this._get('player', true)

		var player = this._getPlayer()
		if (player)
			player.setBackgroundColor(value)
	})
	$core._protoOnChanged(VideoPlayerPrototype, 'loop', function(value) {
	var player = this._get('player', true)

		var player = this._getPlayer()
		if (player)
			player.setLoop(value)
	})
	$core._protoOnChanged(VideoPlayerPrototype, 'source', function(value) {
	var player = this._get('player', true)

		var player = this._getPlayer()
		if (player) {
			log('setting source to', value)
			player.setSource(value)
		} else
			log('WARNING: skipping VideoPlayer.setSource')
	})
	$core._protoOnChanged(VideoPlayerPrototype, 'recursiveVisible', function(value) {
	var player = this._get('player', true)

		var player = this._getPlayer()
		if (value)
			this._scheduleLayout()
		if (player)
			player.setVisibility(value)
	})
	$core._protoOnChanged(VideoPlayerPrototype, 'ready', function(value) { log("ReadyState: " + this.ready) })
	$core._protoOnChanged(VideoPlayerPrototype, 'volume', function(value) { this.applyVolume() })
	$core._protoOnChanged(VideoPlayerPrototype, 'autoPlay', function(value) { this.setOption('autoplay', value) })
	$core._protoOnChanged(VideoPlayerPrototype, 'backgroundImage', function(value) { this.setOption('poster', value) })
	$core._protoOn(VideoPlayerPrototype, 'newBoundingBox', function() {
		this._scheduleLayout()
	})
	$core._protoOn(VideoPlayerPrototype, 'error', function(error) {
		this.paused = false
		this.waiting = false
	})

	VideoPlayerPrototype.$c = function($c) {
		var $this = this;
		VideoPlayerBasePrototype.$c.call(this, $c.$b = { })

	}
	VideoPlayerPrototype.$s = function($c) {
		var $this = this;
	VideoPlayerBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component core.Timer]=====================

	var TimerBaseComponent = $core.Object
	var TimerBasePrototype = TimerBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Object}
 */
	var TimerComponent = $core.Timer = function(parent, row) {
		TimerBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this._trigger = this._context.wrapNativeCallback(this.triggered.bind(this))
	}

	}
	var TimerPrototype = TimerComponent.prototype = Object.create(TimerBasePrototype)

	TimerPrototype.constructor = TimerComponent

	TimerPrototype.componentName = 'core.Timer'
	TimerPrototype.triggered = $core.createSignal('triggered')
	core.addProperty(TimerPrototype, 'int', 'interval', (1000))
	core.addProperty(TimerPrototype, 'bool', 'repeat')
	core.addProperty(TimerPrototype, 'bool', 'running')
	core.addProperty(TimerPrototype, 'bool', 'triggeredOnStart')
	TimerPrototype._restart = function() {
		if (this._timeout) {
			clearTimeout(this._timeout);
			this._timeout = undefined;
		}
		if (this._interval) {
			clearTimeout(this._interval);
			this._interval = undefined;
		}

		if (!this.running)
			return;

		//log("starting timer", this.interval, this.repeat);
		var self = this
		var context = self._context
		if (this.repeat)
			this._interval = setInterval(this._trigger, this.interval);
		else
			this._timeout = setTimeout(this._trigger, this.interval);
	}
	TimerPrototype.__complete = function() { TimerBasePrototype.__complete.call(this)
if (this.running && this.triggeredOnStart)
			this.triggered()
}
	TimerPrototype.stop = function() { this.running = false }
	TimerPrototype.start = function() { this.running = true }
	TimerPrototype.restart = function() { this.stop(); this.start(); }
	$core._protoOnChanged(TimerPrototype, 'running', function(value) {
		this._restart()
		if (value && this.triggeredOnStart) {
			this._triggered = false
			this.triggered()
		}
	})
	var $code$0 = function(value) { this._restart() }
	$core._protoOnChanged(TimerPrototype, 'interval', $code$0)
	$core._protoOnChanged(TimerPrototype, 'repeat', $code$0)
	$core._protoOn(TimerPrototype, 'triggered', function() {
		if (!this.repeat && (!this.triggeredOnStart || this._triggered))
			this.running = false
		this._triggered = true
	})

	TimerPrototype.$c = function($c) {
		var $this = this;
		TimerBasePrototype.$c.call(this, $c.$b = { })

	}
	TimerPrototype.$s = function($c) {
		var $this = this;
	TimerBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component core.Anchors]=====================

	var AnchorsBaseComponent = $core.Object
	var AnchorsBasePrototype = AnchorsBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Object}
 */
	var AnchorsComponent = $core.Anchors = function(parent, row) {
		AnchorsBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this._items = []
		this._grabX = false
		this._grabY = false
	}

	}
	var AnchorsPrototype = AnchorsComponent.prototype = Object.create(AnchorsBasePrototype)

	AnchorsPrototype.constructor = AnchorsComponent

	AnchorsPrototype.componentName = 'core.Anchors'
	core.addProperty(AnchorsPrototype, 'AnchorLine', 'bottom')
	core.addProperty(AnchorsPrototype, 'AnchorLine', 'verticalCenter')
	core.addProperty(AnchorsPrototype, 'AnchorLine', 'top')
	core.addProperty(AnchorsPrototype, 'AnchorLine', 'left')
	core.addProperty(AnchorsPrototype, 'AnchorLine', 'horizontalCenter')
	core.addProperty(AnchorsPrototype, 'AnchorLine', 'right')
	core.addProperty(AnchorsPrototype, 'Item', 'fill')
	core.addProperty(AnchorsPrototype, 'Item', 'centerIn')
	core.addProperty(AnchorsPrototype, 'int', 'margins')
	core.addProperty(AnchorsPrototype, 'int', 'bottomMargin')
	core.addProperty(AnchorsPrototype, 'int', 'topMargin')
	core.addProperty(AnchorsPrototype, 'int', 'leftMargin')
	core.addProperty(AnchorsPrototype, 'int', 'rightMargin')
	AnchorsPrototype._scheduleUpdate = function() {
		this._context.delayedAction('update-anchors', this, this._updateAll)
	}
	AnchorsPrototype._updateAll = function() {
		var anchors = this
		var item = anchors.parent
		if (item === null) //disposed
			return
		var parent = item.parent

		var parent_box = parent.toScreen()
		var parentX = parent_box[0], parentY = parent_box[1]

		var fill = anchors.fill
		var leftAnchor = anchors._getAnchor('left') || (fill? fill.left: null)
		var rightAnchor = anchors._getAnchor('right') || (fill? fill.right: null)
		var topAnchor = anchors._getAnchor('top') || (fill? fill.top: null)
		var bottomAnchor = anchors._getAnchor('bottom') || (fill? fill.bottom: null)

		var centerIn = anchors.centerIn
		var hcenterAnchor = anchors._getAnchor('horizontalCenter') || (centerIn? centerIn.horizontalCenter: null)
		var vcenterAnchor = anchors._getAnchor('verticalCenter') || (centerIn? centerIn.verticalCenter: null)

		var lm = anchors.leftMargin || anchors.margins
		var rm = anchors.rightMargin || anchors.margins
		var tm = anchors.topMargin || anchors.margins
		var bm = anchors.bottomMargin || anchors.margins

		var cacheObjects = []
		var cachePositions = []

		var toScreen = function(line) {
			var object = line[0], index = line[1]
			var objectIdx = cacheObjects.indexOf(object)
			var screenPos
			if (objectIdx < 0) {
				screenPos = object.toScreen()
				cacheObjects.push(object)
				cachePositions.push(screenPos)
			}
			else
				screenPos = cachePositions[objectIdx]
			return screenPos[index]
		}

		var left, top, right, bottom, hcenter, vcenter
		if (leftAnchor && rightAnchor) {
			left = toScreen(leftAnchor)
			right = toScreen(rightAnchor)
			item.x = left + lm - parentX - item.viewX
			item.width = right - left - rm - lm
		} else if (leftAnchor && hcenterAnchor) {
			left = toScreen(leftAnchor)
			hcenter = toScreen(hcenterAnchor);
			item.x = left + lm - parentX - item.viewX
			item.width = (hcenter - left) * 2 - rm - lm
		} else if (hcenterAnchor && rightAnchor) {
			hcenter = toScreen(hcenterAnchor);
			right = toScreen(rightAnchor)
			item.width = (right - hcenter) * 2 - rm - lm
			item.x = hcenter - (item.width + lm - rm) / 2 - parentX - item.viewX
		} else if (leftAnchor) {
			left = toScreen(leftAnchor)
			item.x = left + lm - parentX - item.viewX
		} else if (rightAnchor) {
			right = toScreen(rightAnchor)
			item.x = right - parentX - rm - item.width - item.viewX
		} else if (hcenterAnchor) {
			hcenter = toScreen(hcenterAnchor)
			item.x = hcenter - (item.width + lm - rm) / 2 - parentX - item.viewX
		} else if (this._grabX)
			item.x = lm

		if (topAnchor && bottomAnchor) {
			top = toScreen(topAnchor)
			bottom = toScreen(bottomAnchor)
			item.y = top + tm - parentY - item.viewY
			item.height = bottom - top - bm - tm
		} else if (topAnchor && vcenterAnchor) {
			top = toScreen(topAnchor)
			vcenter = toScreen(vcenterAnchor)
			item.y = top + tm - parentY - item.viewY
			item.height = (vcenter - top) * 2 - bm - tm
		} else if (vcenterAnchor && bottomAnchor) {
			vcenter = toScreen(vcenterAnchor)
			bottom = toScreen(bottomAnchor)
			item.height = (bottom - vcenter) * 2 - bm - tm
			item.y = vcenter - (item.height + tm - bm) / 2 - parentY - item.viewY
		} else if (topAnchor) {
			top = toScreen(topAnchor)
			item.y = top + tm - parentY - item.viewY
		} else if (bottomAnchor) {
			bottom = toScreen(bottomAnchor)
			item.y = bottom - parentY - bm - item.height - item.viewY
		} else if (vcenterAnchor) {
			vcenter = toScreen(vcenterAnchor)
			item.y = vcenter - (item.height + tm - bm) / 2 - parentY - item.viewY
		} else if (this._grabY)
			item.y = tm
	}
	AnchorsPrototype._grab = function(item,prop) {
		if (prop === 'x')
			this._grabX = true
		if (prop === 'y')
			this._grabY = true
		item._removeUpdater(prop)
	}
	AnchorsPrototype._getAnchor = function(name) {
		var value = this[name]
		return value? Array.isArray(value)? value: value[name]: null
	}
	AnchorsPrototype._subscribe = function(src) {
		var items = this._items
		//connect only once per item
		if (items.indexOf(src) < 0) {
			items.push(src)
			this.connectOn(src, 'newBoundingBox', this._scheduleUpdate.bind(this))
		}
	}
	$core._protoOnChanged(AnchorsPrototype, 'fill', function(value) {
		this._scheduleUpdate()
		if (value === null)
			return

		var item = this.parent
		var anchors = this
		this._grab(item, 'x')
		this._grab(item, 'width')
		this._grab(item, 'y')
		this._grab(item, 'height')
		this._subscribe(value)
	})
	$core._protoOnChanged(AnchorsPrototype, 'centerIn', function(value) {
		this._scheduleUpdate()
		if (value === null)
			return

		var item = this.parent
		var anchors = this
		this._grab(item, 'x')
		this._grab(item, 'y')
		this._subscribe(value)
		this._subscribe(item)
	})
	$core._protoOnChanged(AnchorsPrototype, 'bottom', function(value) {
		this._scheduleUpdate()
		var bottom = this._getAnchor('bottom')
		if (bottom === null)
			return

		var item = this.parent
		var anchors = this
		this._grab(item, 'y')
		if (anchors.top || anchors.verticalCenter) {
			this._grab(item, 'height')
		}
		this._subscribe(item)
		this._subscribe(bottom[0])
	})
	$core._protoOnChanged(AnchorsPrototype, 'horizontalCenter', function(value) {
		this._scheduleUpdate()
		var hc = this._getAnchor('horizontalCenter')
		if (hc === null)
			return

		var item = this.parent
		var anchors = this
		this._grab(item, 'x')
		if (anchors.left || anchors.right) {
			this._grab(item, 'width')
		}
		this._subscribe(item)
		this._subscribe(hc[0])
	})
	$core._protoOnChanged(AnchorsPrototype, 'left', function(value) {
		this._scheduleUpdate()
		var left = this._getAnchor('left')
		if (left === null)
			return

		var item = this.parent
		var anchors = this
		this._grab(item, 'x')
		if (anchors.right || anchors.horizontalCenter) {
			this._grab(item, 'width')
			this._subscribe(item)
		}
		this._subscribe(left[0])
	})
	$core._protoOnChanged(AnchorsPrototype, 'right', function(value) {
		this._scheduleUpdate()
		var right = this._getAnchor('right')
		if (right === null)
			return

		var item = this.parent
		var anchors = this
		this._grab(item, 'x')
		if (anchors.left || anchors.horizontalCenter) {
			this._grab(item, 'width')
		}
		this._subscribe(item)
		this._subscribe(right[0])
	})
	$core._protoOnChanged(AnchorsPrototype, 'top', function(value) {
		this._scheduleUpdate()
		var top = this._getAnchor('top')
		if (top === null)
			return

		var item = this.parent
		var anchors = this
		this._grab(item, 'y')
		if (anchors.bottom || anchors.verticalCenter) {
			this._grab(item, 'height')
			this._subscribe(item)
		}
		this._subscribe(top[0])
	})
	$core._protoOnChanged(AnchorsPrototype, 'verticalCenter', function(value) {
		this._scheduleUpdate()
		var vc = this._getAnchor('verticalCenter')
		if (vc === null)
			return

		var item = this.parent
		var anchors = this
		this._grab(item, 'y')
		if (anchors.top || anchors.bottom) {
			this._grab(item, 'height')
		}
		this._subscribe(item)
		this._subscribe(vc[0])
	})
	var $code$0 = function(value) { this.parent.anchorsMarginsUpdated(); this._scheduleUpdate(); }
	$core._protoOnChanged(AnchorsPrototype, 'leftMargin', $code$0)
	$core._protoOnChanged(AnchorsPrototype, 'rightMargin', $code$0)
	$core._protoOnChanged(AnchorsPrototype, 'topMargin', $code$0)
	$core._protoOnChanged(AnchorsPrototype, 'bottomMargin', $code$0)
	$core._protoOnChanged(AnchorsPrototype, 'margin', $code$0)

	AnchorsPrototype.$c = function($c) {
		var $this = this;
		AnchorsBasePrototype.$c.call(this, $c.$b = { })

	}
	AnchorsPrototype.$s = function($c) {
		var $this = this;
	AnchorsBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component core.Transform]=====================

	var TransformBaseComponent = $core.Object
	var TransformBasePrototype = TransformBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Object}
 */
	var TransformComponent = $core.Transform = function(parent, row) {
		TransformBaseComponent.apply(this, arguments)
	//custom constructor:
	{ this._transforms = new $core.transform.Transform() }

	}
	var TransformPrototype = TransformComponent.prototype = Object.create(TransformBasePrototype)

	TransformPrototype.constructor = TransformComponent

	TransformPrototype.componentName = 'core.Transform'
	core.addProperty(TransformPrototype, 'int', 'perspective')
	core.addProperty(TransformPrototype, 'int', 'translateX')
	core.addProperty(TransformPrototype, 'int', 'translateY')
	core.addProperty(TransformPrototype, 'int', 'translateZ')
	core.addProperty(TransformPrototype, 'real', 'rotateX')
	core.addProperty(TransformPrototype, 'real', 'rotateY')
	core.addProperty(TransformPrototype, 'real', 'rotateZ')
	core.addProperty(TransformPrototype, 'real', 'rotate')
	core.addProperty(TransformPrototype, 'real', 'scaleX')
	core.addProperty(TransformPrototype, 'real', 'scaleY')
	core.addProperty(TransformPrototype, 'real', 'skewX')
	core.addProperty(TransformPrototype, 'real', 'skewY')
	TransformPrototype._updateTransform = function() {
		this.parent.style('transform', this._transforms)
	}
	TransformPrototype._animateAll = function(animation) {
		var transform = this
		var transform_properties = [
			'perspective',
			'translateX', 'translateY', 'translateZ',
			'rotateX', 'rotateY', 'rotateZ', 'rotate',
			'scaleX', 'scaleY',
			'skewX', 'skewY'
		]
		transform_properties.forEach(function(transform_property) {
			var property_animation = new $core.Animation(transform)
			$core.core.createObject(property_animation)
			property_animation.delay = animation.delay
			property_animation.duration = animation.duration
			property_animation.cssTransition = false
			property_animation.easing = animation.easing

			transform.setAnimation(transform_property, property_animation)
		})
		this._context._processActions()
	}
	$core._protoOnChanged(TransformPrototype, 'perspective', function(value) { this._transforms.add('perspective', value, 'px'); this._updateTransform() })
	$core._protoOnChanged(TransformPrototype, 'rotate', function(value) { this._transforms.add('rotate', value, 'deg'); this._updateTransform() })
	$core._protoOnChanged(TransformPrototype, 'rotateX', function(value) { this._transforms.add('rotateX', value, 'deg'); this._updateTransform() })
	$core._protoOnChanged(TransformPrototype, 'rotateY', function(value) { this._transforms.add('rotateY', value, 'deg'); this._updateTransform() })
	$core._protoOnChanged(TransformPrototype, 'rotateZ', function(value) { this._transforms.add('rotateZ', value, 'deg'); this._updateTransform() })
	$core._protoOnChanged(TransformPrototype, 'scaleX', function(value) { this._transforms.add('scaleX', value); this._updateTransform() })
	$core._protoOnChanged(TransformPrototype, 'scaleY', function(value) { this._transforms.add('scaleY', value); this._updateTransform() })
	$core._protoOnChanged(TransformPrototype, 'skewX', function(value) { this._transforms.add('skewX', value, 'deg'); this._updateTransform() })
	$core._protoOnChanged(TransformPrototype, 'skewY', function(value) { this._transforms.add('skewY', value, 'deg'); this._updateTransform() })
	$core._protoOnChanged(TransformPrototype, 'translateX', function(value) { this._transforms.add('translateX', value, 'px'); this._updateTransform() })
	$core._protoOnChanged(TransformPrototype, 'translateY', function(value) { this._transforms.add('translateY', value, 'px'); this._updateTransform() })
	$core._protoOnChanged(TransformPrototype, 'translateZ', function(value) { this._transforms.add('translateZ', value, 'px'); this._updateTransform() })

	TransformPrototype.$c = function($c) {
		var $this = this;
		TransformBasePrototype.$c.call(this, $c.$b = { })

	}
	TransformPrototype.$s = function($c) {
		var $this = this;
	TransformBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component core.Effects]=====================

	var EffectsBaseComponent = $core.Object
	var EffectsBasePrototype = EffectsBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Object}
 */
	var EffectsComponent = $core.Effects = function(parent, row) {
		EffectsBaseComponent.apply(this, arguments)

	}
	var EffectsPrototype = EffectsComponent.prototype = Object.create(EffectsBasePrototype)

	EffectsPrototype.constructor = EffectsComponent

	EffectsPrototype.componentName = 'core.Effects'
	core.addProperty(EffectsPrototype, 'real', 'blur')
	core.addProperty(EffectsPrototype, 'real', 'grayscale')
	core.addProperty(EffectsPrototype, 'real', 'sepia')
	core.addProperty(EffectsPrototype, 'real', 'brightness')
	core.addProperty(EffectsPrototype, 'real', 'contrast')
	core.addProperty(EffectsPrototype, 'real', 'hueRotate')
	core.addProperty(EffectsPrototype, 'real', 'invert')
	core.addProperty(EffectsPrototype, 'real', 'saturate')
	core.addLazyProperty(EffectsPrototype, 'shadow', (function(__parent, __row) {
		var lazy$shadow = new $core.Shadow(__parent, __row)
		var $c = { lazy$shadow : lazy$shadow }

//creating component Shadow
			lazy$shadow.$c($c.$c$lazy$shadow = { })


//setting up component Shadow
			var lazy$shadow = $c.lazy$shadow
			lazy$shadow.$s($c.$c$lazy$shadow)
			delete $c.$c$lazy$shadow


			lazy$shadow.completed()

		return lazy$shadow
}))
	EffectsPrototype._getFilterStyle = function() {
		var style = []
		this._addStyle(style, 'blur', 'blur', 'px')
		this._addStyle(style, 'grayscale')
		this._addStyle(style, 'sepia')
		this._addStyle(style, 'brightness')
		this._addStyle(style, 'contrast')
		this._addStyle(style, 'hueRotate', 'hue-rotate', 'deg')
		this._addStyle(style, 'invert')
		this._addStyle(style, 'saturate')
		return style
	}
	EffectsPrototype._addStyle = function(array,property,style,units) {
		var value = this[property]
		if (value)
			array.push((style || property) + '(' + value + (units || '') + ') ')
	}
	EffectsPrototype._updateStyle = function(updateShadow) {
		var filterStyle = this._getFilterStyle().join('')
		var parent = this.parent
		var style = {}

		//chromium bug
		//https://github.com/Modernizr/Modernizr/issues/981
		style['-webkit-filter'] = filterStyle
		style['filter'] = filterStyle

		if (this.shadow && (!this.shadow._empty() || updateShadow))
			style['box-shadow'] = this.shadow._getFilterStyle()

		parent.style(style)
	}
	var $code$0 = function(value) { this._updateStyle() }
	$core._protoOnChanged(EffectsPrototype, 'blur', $code$0)
	$core._protoOnChanged(EffectsPrototype, 'grayscale', $code$0)
	$core._protoOnChanged(EffectsPrototype, 'sepia', $code$0)
	$core._protoOnChanged(EffectsPrototype, 'brightness', $code$0)
	$core._protoOnChanged(EffectsPrototype, 'contrast', $code$0)
	$core._protoOnChanged(EffectsPrototype, 'hueRotate', $code$0)
	$core._protoOnChanged(EffectsPrototype, 'invert', $code$0)
	$core._protoOnChanged(EffectsPrototype, 'saturate', $code$0)

	EffectsPrototype.$c = function($c) {
		var $this = this;
		EffectsBasePrototype.$c.call(this, $c.$b = { })

	}
	EffectsPrototype.$s = function($c) {
		var $this = this;
	EffectsBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component core.Radius]=====================

	var RadiusBaseComponent = $core.Object
	var RadiusBasePrototype = RadiusBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Object}
 */
	var RadiusComponent = $core.Radius = function(parent, row) {
		RadiusBaseComponent.apply(this, arguments)

	}
	var RadiusPrototype = RadiusComponent.prototype = Object.create(RadiusBasePrototype)

	{
		RadiusPrototype.defaultProperty = 'radius';
	}

	RadiusPrototype.constructor = RadiusComponent

	RadiusPrototype.componentName = 'core.Radius'
	core.addProperty(RadiusPrototype, 'real', 'radius')
	core.addProperty(RadiusPrototype, 'real', 'topLeft')
	core.addProperty(RadiusPrototype, 'real', 'topRight')
	core.addProperty(RadiusPrototype, 'real', 'bottomLeft')
	core.addProperty(RadiusPrototype, 'real', 'bottomRight')
	RadiusPrototype.__complete = function() { RadiusBasePrototype.__complete.call(this)
var radius = this.radius
		var tl = this.topLeft || radius
		var tr = this.topRight || radius
		var bl = this.bottomLeft || radius
		var br = this.bottomRight || radius
		if (tl == tr && bl == br && tl == bl)
			this.parent.style('border-radius', tl)
		else
			this.parent.style('border-radius', tl + 'px ' + tr + 'px ' + br + 'px ' + bl + 'px')
}
	var $code$0 = function() {
		log('updating border')
	}
	$core._protoOn(RadiusPrototype, 'radiusUpdate', $code$0)
	$core._protoOn(RadiusPrototype, 'topLeftUpdate', $code$0)
	$core._protoOn(RadiusPrototype, 'topRightUpdate', $code$0)
	$core._protoOn(RadiusPrototype, 'bottomLeftUpdate', $code$0)
	$core._protoOn(RadiusPrototype, 'bottomRightUpdate', $code$0)

	RadiusPrototype.$c = function($c) {
		var $this = this;
		RadiusBasePrototype.$c.call(this, $c.$b = { })

	}
	RadiusPrototype.$s = function($c) {
		var $this = this;
	RadiusBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component controls.web.HoverClickMixin]=====================

	var HoverClickMixinBaseComponent = $core.Object
	var HoverClickMixinBasePrototype = HoverClickMixinBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Object}
 */
	var HoverClickMixinComponent = $controls$web.HoverClickMixin = function(parent, row) {
		HoverClickMixinBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this.element = this.parent.element;
		this.parent.style('cursor', this.cursor)
		this._bindClick(this.clickable)
		this._bindHover(this.enabled)
		this._bindActiveHover(this.activeHoverEnabled)
	}

	}
	var HoverClickMixinPrototype = HoverClickMixinComponent.prototype = Object.create(HoverClickMixinBasePrototype)

	HoverClickMixinPrototype.constructor = HoverClickMixinComponent

	HoverClickMixinPrototype.componentName = 'controls.web.HoverClickMixin'
	core.addProperty(HoverClickMixinPrototype, 'bool', 'enabled', (true))
	core.addProperty(HoverClickMixinPrototype, 'bool', 'clickable', (true))
	core.addProperty(HoverClickMixinPrototype, 'bool', 'activeHoverEnabled', (false))
	core.addProperty(HoverClickMixinPrototype, 'bool', 'value')
	core.addProperty(HoverClickMixinPrototype, 'bool', 'activeHover', (false))
	core.addProperty(HoverClickMixinPrototype, 'string', 'cursor')
	HoverClickMixinPrototype._bindActiveHover = function(value) {
		if (value && !this._hmActiveHoverBinder) {
			this._hmActiveHoverBinder = new _globals.core.EventBinder(this.parent.element)
			this._hmActiveHoverBinder.on('mouseover', function() { this.activeHover = true }.bind(this))
			this._hmActiveHoverBinder.on('mouseout', function() { this.activeHover = false }.bind(this))
		}
		if (this._hmActiveHoverBinder)
		{
			this._hmActiveHoverBinder.enable(value)
		}
	}
	HoverClickMixinPrototype._bindClick = function(value) {
		if (value && !this._hmClickBinder) {
			this._hmClickBinder = new _globals.core.EventBinder(this.element)
			this._hmClickBinder.on('click', _globals.core.createSignalForwarder(this.parent, 'clicked').bind(this))
		}
		if (this._hmClickBinder)
			this._hmClickBinder.enable(value)
	}
	HoverClickMixinPrototype._bindHover = function(value) {
		if (value && !this._hmHoverBinder) {
			this._hmHoverBinder = new _globals.core.EventBinder(this.parent.element)
			if (this._context.backend.capabilities.mouseEnterLeaveSupported) {
				this._hmHoverBinder.on('mouseenter', function() { this.value = true }.bind(this))
				this._hmHoverBinder.on('mouseleave', function() { this.value = false }.bind(this))
			} else {
				this._hmHoverBinder.on('mouseover', function() { this.value = true }.bind(this))
				this._hmHoverBinder.on('mouseout', function() { this.value = false }.bind(this))
			}
		}
		if (this._hmHoverBinder)
			this._hmHoverBinder.enable(value)
	}
	$core._protoOnChanged(HoverClickMixinPrototype, 'cursor', function(value) {
	var cursor = this._get('cursor', true)

		this.parent.style('cursor', value)
	})
	$core._protoOnChanged(HoverClickMixinPrototype, 'activeHoverEnabled', function(value) { this._bindActiveHover(value) })
	$core._protoOnChanged(HoverClickMixinPrototype, 'clickable', function(value) { this._bindClick(value) })
	$core._protoOnChanged(HoverClickMixinPrototype, 'enabled', function(value) { this._bindHover(value) })

	HoverClickMixinPrototype.$c = function($c) {
		var $this = this;
		HoverClickMixinBasePrototype.$c.call(this, $c.$b = { })

	}
	HoverClickMixinPrototype.$s = function($c) {
		var $this = this;
	HoverClickMixinBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component core.Border]=====================

	var BorderBaseComponent = $core.Object
	var BorderBasePrototype = BorderBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Object}
 */
	var BorderComponent = $core.Border = function(parent, row) {
		BorderBaseComponent.apply(this, arguments)

	}
	var BorderPrototype = BorderComponent.prototype = Object.create(BorderBasePrototype)

	BorderPrototype.constructor = BorderComponent

	BorderPrototype.componentName = 'core.Border'
	core.addProperty(BorderPrototype, 'int', 'width')
	core.addProperty(BorderPrototype, 'color', 'color', ("black"))
	core.addLazyProperty(BorderPrototype, 'left', (function(__parent, __row) {
		var lazy$left = new $core.BorderSide(__parent, __row)
		var $c = { lazy$left : lazy$left }

//creating component BorderSide
			lazy$left.$c($c.$c$lazy$left = { })


//setting up component BorderSide
			var lazy$left = $c.lazy$left
			lazy$left.$s($c.$c$lazy$left)
			delete $c.$c$lazy$left

//assigning name to ("left")
			lazy$left._removeUpdater('name'); lazy$left.name = ("left");

			lazy$left.completed()

		return lazy$left
}))
	core.addLazyProperty(BorderPrototype, 'right', (function(__parent, __row) {
		var lazy$right = new $core.BorderSide(__parent, __row)
		var $c = { lazy$right : lazy$right }

//creating component BorderSide
			lazy$right.$c($c.$c$lazy$right = { })


//setting up component BorderSide
			var lazy$right = $c.lazy$right
			lazy$right.$s($c.$c$lazy$right)
			delete $c.$c$lazy$right

//assigning name to ("right")
			lazy$right._removeUpdater('name'); lazy$right.name = ("right");

			lazy$right.completed()

		return lazy$right
}))
	core.addLazyProperty(BorderPrototype, 'top', (function(__parent, __row) {
		var lazy$top = new $core.BorderSide(__parent, __row)
		var $c = { lazy$top : lazy$top }

//creating component BorderSide
			lazy$top.$c($c.$c$lazy$top = { })


//setting up component BorderSide
			var lazy$top = $c.lazy$top
			lazy$top.$s($c.$c$lazy$top)
			delete $c.$c$lazy$top

//assigning name to ("top")
			lazy$top._removeUpdater('name'); lazy$top.name = ("top");

			lazy$top.completed()

		return lazy$top
}))
	core.addLazyProperty(BorderPrototype, 'bottom', (function(__parent, __row) {
		var lazy$bottom = new $core.BorderSide(__parent, __row)
		var $c = { lazy$bottom : lazy$bottom }

//creating component BorderSide
			lazy$bottom.$c($c.$c$lazy$bottom = { })


//setting up component BorderSide
			var lazy$bottom = $c.lazy$bottom
			lazy$bottom.$s($c.$c$lazy$bottom)
			delete $c.$c$lazy$bottom

//assigning name to ("bottom")
			lazy$bottom._removeUpdater('name'); lazy$bottom.name = ("bottom");

			lazy$bottom.completed()

		return lazy$bottom
}))
/** @const @type {number} */
	BorderPrototype.None = 0
/** @const @type {number} */
	BorderComponent.None = 0
/** @const @type {number} */
	BorderPrototype.Hidden = 1
/** @const @type {number} */
	BorderComponent.Hidden = 1
/** @const @type {number} */
	BorderPrototype.Dotted = 2
/** @const @type {number} */
	BorderComponent.Dotted = 2
/** @const @type {number} */
	BorderPrototype.Dashed = 3
/** @const @type {number} */
	BorderComponent.Dashed = 3
/** @const @type {number} */
	BorderPrototype.Solid = 4
/** @const @type {number} */
	BorderComponent.Solid = 4
/** @const @type {number} */
	BorderPrototype.Double = 5
/** @const @type {number} */
	BorderComponent.Double = 5
/** @const @type {number} */
	BorderPrototype.Groove = 6
/** @const @type {number} */
	BorderComponent.Groove = 6
/** @const @type {number} */
	BorderPrototype.Ridge = 7
/** @const @type {number} */
	BorderComponent.Ridge = 7
/** @const @type {number} */
	BorderPrototype.Inset = 8
/** @const @type {number} */
	BorderComponent.Inset = 8
/** @const @type {number} */
	BorderPrototype.Outset = 9
/** @const @type {number} */
	BorderComponent.Outset = 9
	core.addProperty(BorderPrototype, 'enum', 'style', BorderComponent.Solid)
/** @const @type {number} */
	BorderPrototype.Inner = 0
/** @const @type {number} */
	BorderComponent.Inner = 0
/** @const @type {number} */
	BorderPrototype.Outer = 1
/** @const @type {number} */
	BorderComponent.Outer = 1
/** @const @type {number} */
	BorderPrototype.Center = 2
/** @const @type {number} */
	BorderComponent.Center = 2
	core.addProperty(BorderPrototype, 'enum', 'type')
	$core._protoOnChanged(BorderPrototype, 'color', function(value) {
		var newColor = $core.Color.normalize(this.color)
		this.parent.style('border-color', newColor)
	})
	$core._protoOnChanged(BorderPrototype, 'width', function(value) {
		var parent = this.parent
		parent.style('border-width', value)
		switch(this.type) {
		case this.Inner:
			parent._borderXAdjust = 0
			parent._borderYAdjust = 0
			parent._borderInnerWidthAdjust = -2 * value
			parent._borderInnerHeightAdjust = -2 * value
			parent._setSizeAdjust()
			break
		case this.Outer:
			parent._borderXAdjust = -value
			parent._borderYAdjust = -value
			parent._borderWidthAdjust = 0
			parent._borderHeightAdjust = 0
			parent._setSizeAdjust()
			break
		case this.Center:
			parent._borderXAdjust = -value / 2
			parent._borderYAdjust = -value / 2
			parent._borderWidthAdjust = -value
			parent._borderHeightAdjust = -value
			parent._setSizeAdjust()
			break
		}
	})
	$core._protoOnChanged(BorderPrototype, 'type', function(value) {
		var style
		switch(value) {
			case this.Inner:
				style = 'border-box'; break;
			case this.Outer:
			case this.Center:
				style = 'content-box'; break;
		}
		this.parent.style('box-sizing', style)
	})
	$core._protoOnChanged(BorderPrototype, 'style', function(value) {
		var styleName
		switch(value) {
			case this.None: styleName = 'none'; break
			case this.Hidden: styleName = 'hidden'; break
			case this.Dotted: styleName = 'dotted'; break
			case this.Dashed: styleName = 'dashed'; break
			case this.Solid: styleName = 'solid'; break
			case this.Double: styleName = 'double'; break
			case this.Groove: styleName = 'groove'; break
			case this.Ridge: styleName = 'ridge'; break
			case this.Inset: styleName = 'inset'; break
			case this.Outset: styleName = 'outset'; break
		}

		this.parent.style('border-style', styleName)
	})

	BorderPrototype.$c = function($c) {
		var $this = this;
		BorderBasePrototype.$c.call(this, $c.$b = { })

	}
	BorderPrototype.$s = function($c) {
		var $this = this;
	BorderBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component core.Font]=====================

	var FontBaseComponent = $core.Object
	var FontBasePrototype = FontBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Object}
 */
	var FontComponent = $core.Font = function(parent, row) {
		FontBaseComponent.apply(this, arguments)

	}
	var FontPrototype = FontComponent.prototype = Object.create(FontBasePrototype)

	FontPrototype.constructor = FontComponent

	FontPrototype.componentName = 'core.Font'
	core.addProperty(FontPrototype, 'string', 'family', ($manifest$style$font$family))
	core.addProperty(FontPrototype, 'bool', 'italic')
	core.addProperty(FontPrototype, 'bool', 'bold')
	core.addProperty(FontPrototype, 'bool', 'underline')
	core.addProperty(FontPrototype, 'bool', 'overline')
	core.addProperty(FontPrototype, 'bool', 'strike')
	core.addProperty(FontPrototype, 'bool', 'strikeout')
	core.addProperty(FontPrototype, 'real', 'letterSpacing')
	core.addProperty(FontPrototype, 'real', 'wordSpacing')
	core.addProperty(FontPrototype, 'int', 'pixelSize', ($manifest$style$font$pixelSize))
	core.addProperty(FontPrototype, 'int', 'pointSize')
	core.addProperty(FontPrototype, 'real', 'lineHeight', ($manifest$style$font$lineHeight))
	core.addProperty(FontPrototype, 'int', 'weight')
/** @const @type {number} */
	FontPrototype.MixedCase = 0
/** @const @type {number} */
	FontComponent.MixedCase = 0
/** @const @type {number} */
	FontPrototype.AllUppercase = 1
/** @const @type {number} */
	FontComponent.AllUppercase = 1
/** @const @type {number} */
	FontPrototype.AllLowercase = 2
/** @const @type {number} */
	FontComponent.AllLowercase = 2
/** @const @type {number} */
	FontPrototype.SmallCaps = 3
/** @const @type {number} */
	FontComponent.SmallCaps = 3
/** @const @type {number} */
	FontPrototype.Capitalize = 4
/** @const @type {number} */
	FontComponent.Capitalize = 4
	core.addProperty(FontPrototype, 'enum', 'capitalization')
	FontPrototype._updateTextDecoration = function() {
		var decoration = (this.underline ? ' underline' : '')
			+ (this.overline ? ' overline' : '')
			+ (this.strike || this.strikeout ? ' line-through' : '')
		this.parent.style('text-decoration', decoration)
		this.parent._updateSize()
	}
	$core._protoOnChanged(FontPrototype, 'capitalization', function(value) {
		this.parent.style('text-transform', 'none');
		this.parent.style('font-variant', 'normal');
		switch(value) {
 		case this.AllUppercase: this.parent.style('text-transform', 'uppercase'); break
 		case this.AllLowercase: this.parent.style('text-transform', 'lowercase'); break
 		case this.SmallCaps: this.parent.style('font-variant', 'small-caps'); break
 		case this.Capitalize: this.parent.style('text-transform', 'capitalize'); break
 		}
	})
	$core._protoOnChanged(FontPrototype, 'pointSize', function(value) { if (value > 0) this.pixelSize = 0; this.parent.style('font-size', value > 0? value + 'pt': ''); this.parent._updateSize() })
	$core._protoOnChanged(FontPrototype, 'pixelSize', function(value) { if (value > 0) this.pointSize = 0; this.parent.style('font-size', value > 0? value + 'px': ''); this.parent._updateSize() })
	var $code$0 = function(value) { this._updateTextDecoration() }
	$core._protoOnChanged(FontPrototype, 'underline', $code$0)
	$core._protoOnChanged(FontPrototype, 'overline', $code$0)
	$core._protoOnChanged(FontPrototype, 'strike', $code$0)
	$core._protoOnChanged(FontPrototype, 'strikeout', $code$0)
	$core._protoOnChanged(FontPrototype, 'family', function(value) { this.parent.style('font-family', value); this.parent._updateSize() })
	$core._protoOnChanged(FontPrototype, 'italic', function(value) { this.parent.style('font-style', value? 'italic': 'normal'); this.parent._updateSize() })
	$core._protoOnChanged(FontPrototype, 'weight', function(value) { this.parent.style('font-weight', value); this.parent._updateSize() })
	$core._protoOnChanged(FontPrototype, 'bold', function(value) { this.parent.style('font-weight', value? 'bold': 'normal'); this.parent._updateSize() })
	$core._protoOnChanged(FontPrototype, 'letterSpacing', function(value) { this.parent.style('letter-spacing', value + "px"); this.parent._updateSize() })
	$core._protoOnChanged(FontPrototype, 'lineHeight', function(value) { this.parent.style('line-height', value); this.parent._updateSize() })
	$core._protoOnChanged(FontPrototype, 'wordSpacing', function(value) { this.parent.style('word-spacing', value + "px"); this.parent._updateSize() })

	FontPrototype.$c = function($c) {
		var $this = this;
		FontBasePrototype.$c.call(this, $c.$b = { })

	}
	FontPrototype.$s = function($c) {
		var $this = this;
	FontBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component controls.core.PlaceHolder]=====================

	var PlaceHolderBaseComponent = $core.Object
	var PlaceHolderBasePrototype = PlaceHolderBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Object}
 */
	var PlaceHolderComponent = $controls$core.PlaceHolder = function(parent, row) {
		PlaceHolderBaseComponent.apply(this, arguments)
	//custom constructor:
	{ this._placeholderClass = '' }

	}
	var PlaceHolderPrototype = PlaceHolderComponent.prototype = Object.create(PlaceHolderBasePrototype)

	PlaceHolderPrototype.constructor = PlaceHolderComponent

	PlaceHolderPrototype.componentName = 'controls.core.PlaceHolder'
	core.addProperty(PlaceHolderPrototype, 'string', 'text')
	core.addProperty(PlaceHolderPrototype, 'Color', 'color')
	core.addProperty(PlaceHolderPrototype, 'Font', 'font')
	PlaceHolderPrototype.getClass = function() {
		var cls
		if (!this._placeholderClass) {
			cls = this._placeholderClass = this._context.stylesheet.allocateClass('input')
			this.parent.element.addClass(cls)
		}
		else
			cls = this._placeholderClass
		return cls
	}
	PlaceHolderPrototype.setPlaceholderColor = function(color) {
		var cls = this.getClass()

		var rgba = $core.Color.normalize(color)
		this.parent.element.style('-pure-placeholder-color', rgba)

		//fixme: port to modernizr
		var selectors = ['::-webkit-input-placeholder', '::-moz-placeholder', ':-moz-placeholder', ':-ms-input-placeholder']
		selectors.forEach(function(selector) {
			this._context.stylesheet.addRule('.' + cls + selector, 'color: ' + rgba)
		}.bind(this))
	}
	$core._protoOnChanged(PlaceHolderPrototype, 'text', function(value) { this.parent.element.setAttribute('placeholder', value) })
	$core._protoOnChanged(PlaceHolderPrototype, 'color', function(value) { this.setPlaceholderColor(value) })

	PlaceHolderPrototype.$c = function($c) {
		var $this = this;
		PlaceHolderBasePrototype.$c.call(this, $c.$b = { })
//creating component controls.core.<anonymous>
		var _this$font = new $controls$core.PlaceholderFont($this)
		$c._this$font = _this$font

//creating component PlaceholderFont
		_this$font.$c($c.$c$_this$font = { })

		$this.font = _this$font
	}
	PlaceHolderPrototype.$s = function($c) {
		var $this = this;
	PlaceHolderBasePrototype.$s.call(this, $c.$b); delete $c.$b
//setting up component PlaceholderFont
			var _this$font = $c._this$font
			_this$font.$s($c.$c$_this$font)
			delete $c.$c$_this$font


			_this$font.completed()

			$this.completed()
}


//=====[component controls.core.Paddings]=====================

	var PaddingsBaseComponent = $core.Object
	var PaddingsBasePrototype = PaddingsBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Object}
 */
	var PaddingsComponent = $controls$core.Paddings = function(parent, row) {
		PaddingsBaseComponent.apply(this, arguments)

	}
	var PaddingsPrototype = PaddingsComponent.prototype = Object.create(PaddingsBasePrototype)

	PaddingsPrototype.constructor = PaddingsComponent

	PaddingsPrototype.componentName = 'controls.core.Paddings'
	core.addProperty(PaddingsPrototype, 'int', 'top')
	core.addProperty(PaddingsPrototype, 'int', 'left')
	core.addProperty(PaddingsPrototype, 'int', 'right')
	core.addProperty(PaddingsPrototype, 'int', 'bottom')
	core.addProperty(PaddingsPrototype, 'int', 'all')
	$core._protoOnChanged(PaddingsPrototype, 'bottom', function(value) { this.parent.style('padding-bottom', value); })
	$core._protoOnChanged(PaddingsPrototype, 'left', function(value) { this.parent.style('padding-left', value); })
	$core._protoOnChanged(PaddingsPrototype, 'right', function(value) { this.parent.style('padding-right', value); })
	$core._protoOnChanged(PaddingsPrototype, 'top', function(value) { this.parent.style('padding-top', value); })

	PaddingsPrototype.$c = function($c) {
		var $this = this;
		PaddingsBasePrototype.$c.call(this, $c.$b = { })

	}
	PaddingsPrototype.$s = function($c) {
		var $this = this;
	PaddingsBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning top to (${all})
			$this._replaceUpdater('top', function() { $this.top = ($this.all) }, [$this,'all'])
//assigning left to (${all})
			$this._replaceUpdater('left', function() { $this.left = ($this.all) }, [$this,'all'])
//assigning right to (${all})
			$this._replaceUpdater('right', function() { $this.right = ($this.all) }, [$this,'all'])
//assigning bottom to (${all})
			$this._replaceUpdater('bottom', function() { $this.bottom = ($this.all) }, [$this,'all'])

			$this.completed()
}


//=====[component core.Shadow]=====================

	var ShadowBaseComponent = $core.Object
	var ShadowBasePrototype = ShadowBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Object}
 */
	var ShadowComponent = $core.Shadow = function(parent, row) {
		ShadowBaseComponent.apply(this, arguments)

	}
	var ShadowPrototype = ShadowComponent.prototype = Object.create(ShadowBasePrototype)

	ShadowPrototype.constructor = ShadowComponent

	ShadowPrototype.componentName = 'core.Shadow'
	core.addProperty(ShadowPrototype, 'real', 'x')
	core.addProperty(ShadowPrototype, 'real', 'y')
	core.addProperty(ShadowPrototype, 'color', 'color', ("black"))
	core.addProperty(ShadowPrototype, 'real', 'blur')
	core.addProperty(ShadowPrototype, 'real', 'spread')
	ShadowPrototype._empty = function() {
		return !this.x && !this.y && !this.blur && !this.spread;
	}
	ShadowPrototype._getFilterStyle = function() {
		var style = this.x + "px " + this.y + "px " + this.blur + "px "
		if (this.spread > 0)
			style += this.spread + "px "
		style += $core.Color.normalize(this.color)
		return style
	}
	var $code$0 = function(value) {
		this.parent._updateStyle(true)
	}
	$core._protoOnChanged(ShadowPrototype, 'x', $code$0)
	$core._protoOnChanged(ShadowPrototype, 'y', $code$0)
	$core._protoOnChanged(ShadowPrototype, 'color', $code$0)
	$core._protoOnChanged(ShadowPrototype, 'blur', $code$0)
	$core._protoOnChanged(ShadowPrototype, 'spread', $code$0)

	ShadowPrototype.$c = function($c) {
		var $this = this;
		ShadowBasePrototype.$c.call(this, $c.$b = { })

	}
	ShadowPrototype.$s = function($c) {
		var $this = this;
	ShadowBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component core.BorderSide]=====================

	var BorderSideBaseComponent = $core.Object
	var BorderSideBasePrototype = BorderSideBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Object}
 */
	var BorderSideComponent = $core.BorderSide = function(parent, row) {
		BorderSideBaseComponent.apply(this, arguments)

	}
	var BorderSidePrototype = BorderSideComponent.prototype = Object.create(BorderSideBasePrototype)

	BorderSidePrototype.constructor = BorderSideComponent

	BorderSidePrototype.componentName = 'core.BorderSide'
	core.addProperty(BorderSidePrototype, 'string', 'name')
	core.addProperty(BorderSidePrototype, 'int', 'width')
	core.addProperty(BorderSidePrototype, 'color', 'color')
	core.addProperty(BorderSidePrototype, 'int', 'style')
	BorderSidePrototype._updateStyle = function() {
		if (!this.parent || !this.parent.parent || !this.name)
			return

		var Border = $core.Border
		var styleName
		switch(this.style) {
		case _globals.core.Border.prototype.None: styleName = 'none'; break
		case _globals.core.Border.prototype.Hidden: styleName = 'hidden'; break
		case _globals.core.Border.prototype.Dotted: styleName = 'dotted'; break
		case _globals.core.Border.prototype.Dashed: styleName = 'dashed'; break
		case _globals.core.Border.prototype.Solid: styleName = 'solid'; break
		case _globals.core.Border.prototype.Double: styleName = 'double'; break
		case _globals.core.Border.prototype.Groove: styleName = 'groove'; break
		case _globals.core.Border.prototype.Ridge: styleName = 'ridge'; break
		case _globals.core.Border.prototype.Inset: styleName = 'inset'; break
		case _globals.core.Border.prototype.Outset: styleName = 'outset'; break
		}

		var borderCss = this.width + "px " + styleName + " " + $core.Color.normalize(this.color)
		this.parent.parent.style('border-' + this.name, borderCss)
	}
	var $code$0 = function(value) { this._updateStyle() }
	$core._protoOnChanged(BorderSidePrototype, 'width', $code$0)
	$core._protoOnChanged(BorderSidePrototype, 'color', $code$0)
	$core._protoOnChanged(BorderSidePrototype, 'style', $code$0)

	BorderSidePrototype.$c = function($c) {
		var $this = this;
		BorderSideBasePrototype.$c.call(this, $c.$b = { })

	}
	BorderSidePrototype.$s = function($c) {
		var $this = this;
	BorderSideBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning width to (${parent.width})
			$this._replaceUpdater('width', function() { $this.width = ($this.parent.width) }, [$this.parent,'width'])
//assigning color to (${parent.color})
			$this._replaceUpdater('color', function() { $this.color = ($this.parent.color) }, [$this.parent,'color'])
//assigning style to (${parent.style})
			$this._replaceUpdater('style', function() { $this.style = ($this.parent.style) }, [$this.parent,'style'])

			$this.completed()
}


//=====[component controls.core.PlaceholderFont]=====================

	var PlaceholderFontBaseComponent = $core.Object
	var PlaceholderFontBasePrototype = PlaceholderFontBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Object}
 */
	var PlaceholderFontComponent = $controls$core.PlaceholderFont = function(parent, row) {
		PlaceholderFontBaseComponent.apply(this, arguments)

	}
	var PlaceholderFontPrototype = PlaceholderFontComponent.prototype = Object.create(PlaceholderFontBasePrototype)

	PlaceholderFontPrototype.constructor = PlaceholderFontComponent

	PlaceholderFontPrototype.componentName = 'controls.core.PlaceholderFont'
	core.addProperty(PlaceholderFontPrototype, 'string', 'family')
	core.addProperty(PlaceholderFontPrototype, 'bool', 'italic')
	core.addProperty(PlaceholderFontPrototype, 'bool', 'bold')
	core.addProperty(PlaceholderFontPrototype, 'bool', 'underline')
	core.addProperty(PlaceholderFontPrototype, 'bool', 'strike')
	core.addProperty(PlaceholderFontPrototype, 'int', 'pixelSize')
	core.addProperty(PlaceholderFontPrototype, 'int', 'pointSize')
	core.addProperty(PlaceholderFontPrototype, 'int', 'lineHeight')
	core.addProperty(PlaceholderFontPrototype, 'int', 'weight')
	PlaceholderFontPrototype.getClass = function() {
		var cls
		if (!this._placeholderClass) {
			cls = this._placeholderClass = this._context.stylesheet.allocateClass('placeholderFont')
			this.parent.parent.element.addClass(cls)
		}
		else
			cls = this._placeholderClass
		return cls
	}
	PlaceholderFontPrototype.updateProperty = function(name,value) {
		var cls = this.getClass()

		//fixme: port to modernizr
		var selectors = ['::-webkit-input-placeholder', '::-moz-placeholder', ':-moz-placeholder', ':-ms-input-placeholder']
		selectors.forEach(function(selector) {
			try {
				this._context.stylesheet.addRule('.' + cls + selector, name + ':' + value)
				log('added rule for .' + cls + selector)
			} catch(ex) {
				//log(ex)
			}
		}.bind(this))
	}
	$core._protoOnChanged(PlaceholderFontPrototype, 'family', function(value) { this.updateProperty('font-family', value); this.parent.parent._updateSize(); })
	$core._protoOnChanged(PlaceholderFontPrototype, 'pointSize', function(value) { this.updateProperty('font-size', value + "pt"); this.parent.parent._updateSize(); })
	$core._protoOnChanged(PlaceholderFontPrototype, 'pixelSize', function(value) { this.updateProperty('font-size', value + "px"); this.parent.parent._updateSize(); })
	$core._protoOnChanged(PlaceholderFontPrototype, 'italic', function(value) { this.updateProperty('font-style', value? 'italic': 'normal'); this.parent.parent._updateSize(); })
	$core._protoOnChanged(PlaceholderFontPrototype, 'weight', function(value) { this.updateProperty('font-weight', value); this.parent.parent._updateSize(); })
	$core._protoOnChanged(PlaceholderFontPrototype, 'bold', function(value) { this.updateProperty('font-weight', value? 'bold': 'normal'); this.parent.parent._updateSize(); })
	$core._protoOnChanged(PlaceholderFontPrototype, 'lineHeight', function(value) { this.updateProperty('line-height', value + "px"); this.parent.parent._updateSize(); })
	$core._protoOnChanged(PlaceholderFontPrototype, 'strike', function(value) { this.updateProperty('text-decoration', value? 'line-through': ''); this.parent._updateSize(); })
	$core._protoOnChanged(PlaceholderFontPrototype, 'underline', function(value) { this.updateProperty('text-decoration', value? 'underline': ''); this.parent.parent._updateSize(); })

	PlaceholderFontPrototype.$c = function($c) {
		var $this = this;
		PlaceholderFontBasePrototype.$c.call(this, $c.$b = { })

	}
	PlaceholderFontPrototype.$s = function($c) {
		var $this = this;
	PlaceholderFontBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}

_globals.core.model = (function() {/** @const */
var exports = {};
//=====[import core.model]=====================

var ModelUpdateNothing = 0
var ModelUpdateInsert = 1
var ModelUpdateUpdate = 2

var ModelUpdateRange = function(type, length) {
	this.type = type
	this.length = length
}

exports.ModelUpdate = function() {
	this.count = 0
	this._reset()
}
exports.ModelUpdate.prototype.constructor = exports.ModelUpdate

exports.ModelUpdate.prototype._reset = function() {
	this._ranges = [new ModelUpdateRange(ModelUpdateNothing, this.count)]
	this._updateIndex = this.count
}

exports.ModelUpdate.prototype._setUpdateIndex = function(begin) {
	if (begin < this._updateIndex)
		this._updateIndex = begin
}

exports.ModelUpdate.prototype._find = function(index) {
	var ranges = this._ranges
	var i
	for(i = 0; i < ranges.length; ++i) {
		var range = ranges[i]
		if (index < range.length)
			return { index: i, offset: index }
		if (range.length > 0)
			index -= range.length
	}
	if (index != 0)
		throw new Error('invalid index ' + index)

	return { index: i - 1, offset: range.length }
}

exports.ModelUpdate.prototype.reset = function(model) {
	this.update(model, 0, Math.min(model.count, this.count))
	if (this.count < model.count) {
		this.insert(model, this.count, model.count)
	} else {
		this.remove(model, model.count, this.count)
	}
}

exports.ModelUpdate.prototype._merge = function() {
	var ranges = this._ranges
	for(var index = 1; index < ranges.length; ) {
		var range = ranges[index - 1]
		var nextRange = ranges[index]
		if (range.type === nextRange.type) {
			if (range.type === ModelUpdateInsert && range.length < 0 && nextRange.length > 0) {
				//removed + inserted rows reappears as updated
				var updated = Math.min(-range.length, nextRange.length)
				range.type = ModelUpdateUpdate
				nextRange.length += range.length
				range.length = updated
				if (index > 1)
					--index
			} else {
				range.length += nextRange.length
				ranges.splice(index, 1)
			}
		} else if (range.type === ModelUpdateInsert && range.length === 0) {
			ranges.splice(index, 1)
		} else
			++index
	}
}

exports.ModelUpdate.prototype._split = function(index, offset, type, length) {
	var ranges = this._ranges
	if (offset === 0) {
		ranges.splice(index, 0, new ModelUpdateRange(type, length))
		return index + 1
	} else {
		var range = ranges[index]
		var right = range.length - offset
		range.length = offset
		if (right != 0) {
			ranges.splice(index + 1, 0,
				new ModelUpdateRange(type, length),
				new ModelUpdateRange(range.type, right))
			return index + 2
		} else {
			ranges.splice(index + 1, 0,
				new ModelUpdateRange(type, length))
			return index + 2
		}
	}
}

exports.ModelUpdate.prototype.insert = function(model, begin, end) {
	if (begin >= end)
		return

	this._setUpdateIndex(begin)
	var ranges = this._ranges
	var d = end - begin
	this.count += d
	if (this.count != model.count)
		throw new Error('unbalanced insert ' + this.count + ' + [' + begin + '-' + end + '], model reported ' + model.count)

	var res = this._find(begin)
	var range = ranges[res.index]
	if (range.length === 0) { //first insert
		range.type = ModelUpdateInsert
		range.length += d
	} else {
		if (res.offset >= 0)
			this._split(res.index, res.offset, ModelUpdateInsert, d)
		else
			this._split(res.index + 1, 0, ModelUpdateInsert, d)
	}
	this._merge()
}

exports.ModelUpdate.prototype.remove = function(model, begin, end) {
	if (begin >= end)
		return

	this._setUpdateIndex(begin)
	var ranges = this._ranges
	var d = end - begin
	this.count -= d
	if (this.count != model.count)
		throw new Error('unbalanced remove ' + this.count + ' + [' + begin + '-' + end + '], model reported ' + model.count)

	var res = this._find(begin)
	var range = ranges[res.index]

	if (range.type === ModelUpdateInsert) {
		range.length -= d
	} else {
		var index = this._split(res.index, res.offset, ModelUpdateInsert, -d)
		while(d > 0) {
			var range = ranges[index]
			if (range.length <= d) {
				ranges.splice(index, 1)
				d -= range.length
			} else {
				range.length -= d
				d = 0
			}
		}
	}
	this._merge()
}

exports.ModelUpdate.prototype.update = function(model, begin, end) {
	if (begin >= end)
		return

	var ranges = this._ranges
	var n = end - begin
	var res = this._find(begin)
	var index = res.index

	var range = ranges[index]
	if (res.offset > 0) {
		ranges.splice(index + 1, 0, new ModelUpdateRange(range.type, range.length - res.offset))
		range.length = res.offset
		++index
		if (range.length === 0)
			throw new Error('invalid offset')
	}

	while(n > 0) {
		var range = ranges[index]
		var length = range.length
		switch(range.type) {
			case ModelUpdateNothing:
				if (length > n) {
					//range larger than needed
					range.length -= n
					ranges.splice(index, 0, new ModelUpdateRange(ModelUpdateUpdate, n))
					n -= length
				} else { //length <= n
					range.type = ModelUpdateUpdate
					n -= length
				}
				break
			case ModelUpdateInsert:
				if (length > 0)
					n -= length
				++index
				break
			case ModelUpdateUpdate:
				n -= length
				++index
				break
		}
	}
	this._merge()
}

exports.ModelUpdate.prototype.clear = function() {
	this.count = 0
	this._reset()
}

exports.ModelUpdate.prototype.apply = function(view, skipCheck) {
	var index = 0
	this._ranges.forEach(
		function(range) {
			var n = range.length
			switch(range.type) {
				case ModelUpdateInsert:
					if (n > 0) {
						view._insertItems(index, index + n)
						index += n
					} else if (n < 0) {
						view._removeItems(index, index - n)
					}
					break
				case ModelUpdateUpdate:
					view._updateItems(index, index + n)
					index += n
					break
				default:
					index += range.length
			}
		}
	)
	if (!skipCheck && view._items.length != this.count)
		throw new Error('unbalanced items update, view: ' + view._items.length + ', update:' + this.count)

	for(var i = this._updateIndex; i < this.count; ++i)
		view._updateDelegateIndex(i)
	this._reset()
}

var ArrayModelWrapper = exports.ArrayModelWrapper = function (data) { this.data = data; this.count = data.length }
ArrayModelWrapper.prototype.get = function(idx)  { return { value: this.data[idx] } }
ArrayModelWrapper.prototype.on = function() { }
ArrayModelWrapper.prototype.removeListener = function() { }

return exports;
} )()
_globals.core.gradient = (function() {/** @const */
var exports = {};
//=====[import core.gradient]=====================

var GradientStop = function(color, position) {
	this.color = $core.Color.normalize(color)
	this.position = position
}

var GradientStopPrototype = GradientStop.prototype
GradientStopPrototype.constructor = GradientStop

GradientStopPrototype.toString = function() {
	return this.color + " " + Math.floor(100 * this.position) + "%"
}

var Gradient = function(orientation) {
	this.orientation = orientation
	this.stops = []
}

var GradientPrototype = Gradient.prototype
GradientPrototype.constructor = Gradient

GradientPrototype.add = function(stop) {
	this.stops.push(stop)
}

GradientPrototype.toString = function() {
	return 'linear-gradient(' + this.orientation + ',' + this.stops.join() + ')'
}

exports.GradientStop = GradientStop
exports.Gradient = Gradient

return exports;
} )()
_globals.core.transform = (function() {/** @const */
var exports = {};
//=====[import core.transform]=====================

var Value = function(value, unit) {
	this.value = value
	this.unit = unit
}

var ValuePrototype = Value.prototype
ValuePrototype.constructor = Value

ValuePrototype.toString = function() {
	var unit = this.unit
	return unit != undefined? this.value + unit: this.value
}

var Transform = function() {
	this.transforms = {}
}

var TransformPrototype = Transform.prototype
TransformPrototype.constructor = Transform

TransformPrototype.add = function(name, value, unit) {
	this.transforms[name] = new Value(value, unit)
}

TransformPrototype.toString = function() {
	var transforms = this.transforms
	var str = ''
	for(var name in transforms) {
		var value = transforms[name]
		str += name + '(' + value + ') '
	}
	return str
}

exports.Transform = Transform


return exports;
} )()
_globals.html5.html = (function() {/** @const */
var exports = {};
//=====[import html5.html]=====================

/*** @using { core.RAIIEventEmitter } **/

var Modernizr = window.Modernizr

exports.capabilities = {
	csstransforms3d: Modernizr.csstransforms3d,
	csstransforms: Modernizr.csstransforms,
	csstransitions: Modernizr.csstransitions,
	mouseEnterLeaveSupported: _globals.core.os != "netcast"
}

var imageCache = null

exports.createAddRule = function(style) {
	if(! (style.sheet || {}).insertRule) {
		var sheet = (style.styleSheet || style.sheet)
		return function(name, rules) {
			try {
				sheet.addRule(name, rules)
			} catch(e) {
				//log("AddRule failed:", e, ", sheet:", sheet, ", name:", name, ", rules:", rules) //trace?
				log("addRule failed on rule " + name)
			}
		}
	}
	else {
		var sheet = style.sheet
		return function(name, rules) {
			try {
				sheet.insertRule(name + '{' + rules + '}', sheet.cssRules.length)
			} catch(e) {
				//log("InsertRule failed:", e, ", sheet:", sheet, ", name:", name, ", rules:", rules) //trace?
				log("insertRule failed on rule " + name)
			}
		}
	}
}

var StyleCache = function() {
	this._cache = {}
}

var StyleCachePrototype = StyleCache.prototype
StyleCachePrototype.constructor = StyleCache

StyleCachePrototype.update = function(element, name, value) {
	//log('update', element._uniqueId, name, value)
	var cache = this._cache
	var id = element._uniqueId
	var entry = cache[id]
	if (entry !== undefined) {
		entry.data[name] = value
		++entry.size
	} else {
		var data = {}
		data[name] = value
		cache[id] = {data: data, element: element, size: 1}
	}
}

StyleCachePrototype.pop = function(element) {
	var id = element._uniqueId
	var data = this._cache[id]
	if (data === undefined)
		return

	delete this._cache[id]
	return data
}

StyleCachePrototype.apply = function() {
	var cache = this._cache
	this._cache = {}

	for(var id in cache) {
		var entry = cache[id]
		entry.element.updateStyle(entry)
	}
}

var StyleClassifier = function (prefix) {
	var style = document.createElement('style')
	style.type = 'text/css'
	document.head.appendChild(style)

	this.prefix = prefix + 'C-'
	this.style = style
	this.total = 0
	this.stats = {}
	this.classes = {}
	this.classes_total = 0
	this._addRule = exports.createAddRule(style)
}

var StyleClassifierPrototype = StyleClassifier.prototype
StyleClassifierPrototype.constructor = StyleClassifier

StyleClassifierPrototype.add = function(rule) {
	this.stats[rule] = (this.stats[rule] || 0) + 1
	++this.total
}

StyleClassifierPrototype.register = function(rules) {
	var rule = rules.join(';')
	var classes = this.classes
	var cls = classes[rule]
	if (cls !== undefined)
		return cls

	cls = classes[rule] = this.prefix + this.classes_total++
	this._addRule('.' + cls, rule)
	return cls
}

StyleClassifierPrototype.classify = function(rules) {
	var total = this.total
	if (total < 10) //fixme: initial population threshold
		return ''

	rules.sort() //mind vendor prefixes!
	var classified = []
	var hot = []
	var stats = this.stats
	rules.forEach(function(rule, idx) {
		var hits = stats[rule]
		var usage = hits / total
		if (usage > 0.05) { //fixme: usage threshold
			classified.push(rule)
			hot.push(idx)
		}
	})
	if (hot.length < 2)
		return ''
	hot.forEach(function(offset, idx) {
		rules.splice(offset - idx, 1)
	})
	return this.register(classified)
}

var _modernizrCache = {}
if (_globals.core.userAgent.toLowerCase().indexOf('webkit') >= 0)
	_modernizrCache['appearance'] = '-webkit-appearance'

var getPrefixedName = function(name) {
	var prefixedName = _modernizrCache[name]
	if (prefixedName === undefined)
		_modernizrCache[name] = prefixedName = window.Modernizr.prefixedCSS(name)
	return prefixedName
}

exports.getPrefixedName = getPrefixedName

var passiveListeners = ['touchstart', 'touchmove', 'touchend', 'wheel', 'mousewheel', 'scroll']
var passiveArg = Modernizr.passiveeventlisteners ? {passive: true} : false
var mouseEvents = ['mousedown', 'mouseup', 'click', 'dblclick', 'mousemove',
	'mouseover', 'mousewheel', 'mouseout', 'contextmenu', 'mouseenter', 'mouseleave']
var touchEvents = ['touchstart', 'touchmove', 'touchend', 'touchcancel']

var registerGenericListener = function(target) {
	var storage = target.__domEventListeners
	if (storage === undefined)
		storage = target.__domEventListeners = {}

	target.onListener('',
		function(name) {
			//log('registering generic event', name)
			var callback = storage[name] = target._context.wrapNativeCallback(function() {
				target.emitWithArgs(name, arguments)
			})

			var args = [name, callback]
			if (passiveListeners.indexOf(name) >= 0)
				args.push(passiveArg)

			if (mouseEvents.indexOf(name) >= 0) {
				var n = target.__mouseHandlerCount = ~~target.__mouseHandlerCount + 1
				if (n === 1)
					target.style('pointer-events', 'auto')
			}
			if (touchEvents.indexOf(name) >= 0) {
				var n = target.__touchHandlerCount = ~~target.__touchHandlerCount + 1
				if (n === 1)
					target.style('touch-action', 'auto')
			}

			target.dom.addEventListener.apply(target.dom, args)
		},
		function(name) {
			//log('removing generic event', name)
			if (mouseEvents.indexOf(name) >= 0) {
				var n = target.__mouseHandlerCount = ~~target.__mouseHandlerCount - 1
				if (n <= 0)
					target.style('pointer-events', 'none')
			}
			if (touchEvents.indexOf(name) >= 0) {
				var n = target.__touchHandlerCount = ~~target.__touchHandlerCount - 1
				if (n <= 0)
					target.style('touch-action', 'none')
			}
			target.dom.removeEventListener(name, storage[name])
		}
	)
}

var _loadedStylesheets = {}

exports.loadExternalStylesheet = function(url) {
	if (!_loadedStylesheets[url]) {
		var link = document.createElement('link')
		link.setAttribute('rel', "stylesheet")
		link.setAttribute('href', url)
		document.head.appendChild(link)
		_loadedStylesheets[url] = true
	}
}

var lastId = 0

var nodesCache = {};

/**
 * @constructor
 */

function mangleClass(name) {
	return $manifest$html5$prefix + name
}

exports.Element = function(context, tag, cls) {
	if (typeof tag === 'string') {
		if (cls === undefined)
			cls = ''

		var key = tag + '.' + cls
		if (!nodesCache[key]) {
			var el = document.createElement(tag)
			if ($manifest$html5$prefix || cls)
				el.classList.add(mangleClass(cls))
			if ($manifest$html5$prefix && cls)
				el.classList.add(mangleClass('')) //base item style, fixme: pass array here?
			nodesCache[key] = el
		}
		this.dom = nodesCache[key].cloneNode(false);
	}
	else
		this.dom = tag

	_globals.core.RAIIEventEmitter.apply(this)
	this._context = context
	this._transitions = {}
	this._class = ''
	this._uniqueId = (++lastId).toString(36)
	this._firstChildIndex = 0

	registerGenericListener(this)
}

var ElementPrototype = exports.Element.prototype = Object.create(_globals.core.RAIIEventEmitter.prototype)
ElementPrototype.constructor = exports.Element

ElementPrototype.addClass = function(cls) {
	this.dom.classList.add(cls)
}

ElementPrototype.appendChildren = function(children) {
	if (children.length > 0) {
		var fragment = document.createDocumentFragment()
		children.forEach(function(child) {
			fragment.appendChild(child)
		})
		this.dom.appendChild(fragment)
	}
}

ElementPrototype.removeChildren = function(ui) {
	var removedChildren = []

	var dom = this.dom
	ui.children.forEach(function(child) {
		var element = child.element
		if (element !== undefined) {
			var childNode = element.dom
			if (childNode.parentNode === dom) {
				dom.removeChild(childNode)
				removedChildren.push(childNode)
			}
		}
	})
	return removedChildren
}


ElementPrototype.setHtml = function(html, component) {
	var dom = this.dom
	var children
	if (component !== undefined)
		children = this.removeChildren(component)
	else
		children = []
	dom.innerHTML = html
	this.appendChildren(children)
}

ElementPrototype.width = function() {
	this.updateStyle()
	return this.dom.clientWidth
}

ElementPrototype.height = function() {
	this.updateStyle()
	return this.dom.clientHeight
}

ElementPrototype.fullWidth = function() {
	this.updateStyle()
	return this.dom.scrollWidth
}

ElementPrototype.fullHeight = function() {
	this.updateStyle()
	return this.dom.scrollHeight
}

var overflowStyles = ['overflow', 'overflow-x', 'overflow-y']

ElementPrototype.style = function(name, style) {
	var cache = this._context._styleCache
	if (style !== undefined) {
		cache.update(this, name, style)
		if (overflowStyles.indexOf(name) >= 0) {
			cache.update(this, 'pointer-events', 'auto')
			cache.update(this, 'touch-action', 'auto')
		}
	} else if (typeof name === 'object') { //style({ }) assignment
		for(var k in name) {
			if (overflowStyles.indexOf(name) >= 0) {
				cache.update(this, 'pointer-events', 'auto')
				cache.update(this, 'touch-action', 'auto')
			}
			cache.update(this, k, name[k])
		}
	}
	else
		throw new Error('cache is write-only')
}

ElementPrototype.setAttribute = function(name, value) {
	return this.dom.setAttribute(name, value)
}

ElementPrototype.getAttribute = function(name) {
	return this.dom.getAttribute(name)
}

ElementPrototype.setProperty = function(name, value) {
	return this.dom[name] = value
}

ElementPrototype.getProperty = function(name) {
	return this.dom[name]
}

/** @const */
var cssUnits = {
	'left': 'px',
	'top': 'px',
	'width': 'px',
	'height': 'px',

	'border-radius': 'px',
	'border-width': 'px',

	'margin-left': 'px',
	'margin-top': 'px',
	'margin-right': 'px',
	'margin-bottom': 'px',

	'padding-left': 'px',
	'padding-top': 'px',
	'padding-right': 'px',
	'padding-bottom': 'px',
	'padding': 'px'
}

ElementPrototype.forceLayout = function() {
	this.updateStyle()
	return this.dom.offsetWidth | this.dom.offsetHeight
}

ElementPrototype.updateStyle = function(updated) {
	var element = this.dom
	if (!element)
		return

	if (updated === undefined) {
		updated = this._context._styleCache.pop(this)
		if (updated === undefined) //no update at all
			return
	}

	var styles = updated.data
	var elementStyle = element.style

	//fixme: classifier is currently broken, restore rules processor
	//var rules = []
	for(var name in styles) {
		var value = styles[name]
		//log('updateStyle', this._uniqueId, name, value)

		var prefixedName = getPrefixedName(name)
		var ruleName = prefixedName !== false? prefixedName: name
		if (value instanceof _globals.core.Color)
			value = value.rgba()
		else if (Array.isArray(value))
			value = value.join(',')

		if (typeof value === 'number') {
			var unit = cssUnits[name]
			if (unit !== undefined) {
				value += unit
			}
		}

		elementStyle[ruleName] = value
	}
/*
	var cache = this._context._styleClassifier
	var cls = cache? cache.classify(rules): ''
	if (cls !== this._class) {
		var classList = element.classList
		if (this._class !== '')
			classList.remove(this._class)
		this._class = cls
		if (cls !== '')
			classList.add(cls)
	}
*/
}

ElementPrototype.append = function(el) {
	this.dom.appendChild((el instanceof exports.Element)? el.dom: el)
}

ElementPrototype.prepend = function(el) {
	this.dom.insertBefore((el instanceof exports.Element)? el.dom: el, this.dom.childNodes[0])
}

ElementPrototype.discard = function() {
	_globals.core.RAIIEventEmitter.prototype.discard.apply(this)
	this.remove()
}

ElementPrototype.remove = function() {
	var dom = this.dom
	if (dom.parentNode)
		dom.parentNode.removeChild(dom)
}

ElementPrototype.focus = function() {
	var dom = this.dom
	dom.focus()
	dom.select()
}

ElementPrototype.blur = function() {
	this.dom.blur()
}

ElementPrototype.getScrollX = function() {
	return this.dom.scrollLeft
}

ElementPrototype.getScrollY = function() {
	return this.dom.scrollTop
}

exports.Document = function(context, dom) {
	_globals.core.RAIIEventEmitter.apply(this)
	this._context = context
	this.dom = dom

	registerGenericListener(this)
}

var DocumentPrototype = exports.Document.prototype = Object.create(_globals.core.RAIIEventEmitter.prototype)
DocumentPrototype.constructor = exports.Document

exports.Window = function(context, dom) {
	_globals.core.RAIIEventEmitter.apply(this)
	this._context = context
	this.dom = dom

	registerGenericListener(this)
}

var WindowPrototype = exports.Window.prototype = Object.create(_globals.core.RAIIEventEmitter.prototype)
WindowPrototype.constructor = exports.Window

WindowPrototype.width = function() {
	return this.dom.innerWidth
}

WindowPrototype.height = function() {
	return this.dom.innerHeight
}

WindowPrototype.scrollY = function() {
	return this.dom.scrollY
}

WindowPrototype.style = function() { /* ignoring style on window */ }

exports.getElement = function(ctx, tag) {
	var tags = document.getElementsByTagName(tag)
	if (tags.length != 1)
		throw new Error('no tag ' + tag + '/multiple tags')
	return new exports.Element(ctx, tags[0])
}

exports.init = function(ctx) {
	imageCache = new _globals.html5.cache.Cache(loadImage)

	ctx._styleCache = new StyleCache()
	var options = ctx.options
	var prefix = ctx._prefix
	var divId = options.id
	var tag = options.tag || 'div'

	if (prefix) {
		prefix += '-'
		log('Context: using prefix', prefix)
	}

	var doc = new _globals.html5.html.Document(ctx, document)
	ctx.document = doc

	var win = new _globals.html5.html.Window(ctx, window)
	ctx.window = win
	var w, h

	var html = exports
	var div = document.getElementById(divId)
	var topLevel = div === null
	if (!topLevel) {
		div = new html.Element(ctx, div)
		w = div.width()
		h = div.height()
		log('Context: found element by id, size: ' + w + 'x' + h)
		win.on('resize', function() { ctx.width = div.width(); ctx.height = div.height(); });
	} else {
		w = win.width();
		h = win.height();
		log("Context: window size: " + w + "x" + h);
		div = html.createElement(ctx, tag)
		div.dom.id = divId
		win.on('resize', function() { ctx.width = win.width(); ctx.height = win.height(); });
		var body = html.getElement(ctx, 'body')
		body.append(div);
	}

	if (Modernizr.canvastext) {
		ctx._textCanvas = html.createElement(ctx, 'canvas')
		ctx._textCanvas.style('width', 0)
		ctx._textCanvas.style('height', 0)
		div.append(ctx._textCanvas)
		ctx._textCanvasContext = ('getContext' in ctx._textCanvas.dom)? ctx._textCanvas.dom.getContext('2d'): null
	} else {
		ctx._textCanvasContext = null
	}

	ctx.element = div
	ctx.width = w
	ctx.height = h

	win.on('scroll', function(event) { ctx.scrollY = win.scrollY(); });

	var onFullscreenChanged = function(e) {
		var state = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
		log('fullscreen change event:', state)
		ctx.fullscreen = state
	}

	new Array('webkitfullscreenchange', 'mozfullscreenchange', 'fullscreenchange', 'MSFullscreenChange').forEach(function(name) {
		div.on(name, onFullscreenChanged, true)
	})

	win.on('keydown', ctx.wrapNativeCallback(function(event) {
		var keyCode = event.which || event.keyCode
		var key = $core.keyCodes[keyCode]

		if (key !== undefined) {
			if (ctx.processKey(key, event))
				event.preventDefault()
		} else {
			log("unhandled keycode " + keyCode + ": [" + event.charCode + " " + event.keyCode + " " + event.which + " " + event.key + " " + event.code + " " + event.location + "]")
		}

	})) //fixme: add html.Document instead
	win.on('orientationchange', function(event) {
		log('orientation changed event')
		ctx.system.screenWidth = window.screen.width
		ctx.system.screenHeight = window.screen.height
	})

	ctx._styleClassifier = $manifest$cssAutoClassificator? new StyleClassifier(ctx._prefix): null; //broken beyond repair
}


//fixme: this is sorta hack, generalize that across other backends
exports.initSystem = function(system) {
	var win = system._context.window

	win.on('focus', function() { system.pageActive = true })
	win.on('blur', function() { system.pageActive = false })

	system.screenWidth = window.screen.width
	system.screenHeight = window.screen.height
}

exports.createElement = function(ctx, tag, cls) {
	return new exports.Element(ctx, tag, cls)
}

exports.initRectangle = function(rect) {
}

var failImage = function(image) {
	image._onError()
	image._context._processActions()
}

var loadImage = function(url, callback) {
	var tmp = new Image()

	tmp.onerror = function() {
		tmp.onload = null
		tmp.onerror = null
		callback(null)
	}

	tmp.onload = function() {
		tmp.onload = null
		tmp.onerror = null
		callback({ width: tmp.naturalWidth, height: tmp.naturalHeight })
	}
	tmp.src = url
}

exports.initImage = function(image) {
}

exports.loadImage = function(image, callback) {
	if (image.source.indexOf('?') < 0) {
		imageCache.get(image.source, callback)
	} else {
		loadImage(image.source, callback)
	}
}

exports.initText = function(text) {
}

var layoutTextSetStyle = function(text, style) {
	switch(text.verticalAlignment) {
		case text.AlignTop:		text._topPadding = 0; break
		case text.AlignBottom:	text._topPadding = text.height - text.paintedHeight; break
		case text.AlignVCenter:	text._topPadding = (text.height - text.paintedHeight) / 2; break
	}
	style['padding-top'] = text._topPadding
	style['height'] = text.height - text._topPadding
	text.style(style)
}

exports.setText = function(text, html) {
	text.element.setHtml(html, text)
}

exports.layoutText = function(text) {
	var ctx = text._context
	var textCanvasContext = ctx._textCanvasContext
	var wrap = text.wrapMode !== _globals.core.Text.NoWrap
	var element = text.element

	var dom = element.dom

	var isHtml = text.textFormat === text.Html || text.text.search(/[\<\&]/) >= 0 //dubious check

	if (!wrap && textCanvasContext !== null && !isHtml) {
		var font = text.font
		var fontSize
		if (font.pointSize)
			fontSize = Math.round(font.pointSize * 96 / 72)
		else
			fontSize = font.pixelSize
		//log('fontSize = ', fontSize)

		textCanvasContext.font = fontSize + 'px ' + font.family

		//log('font from canvas:', textCanvasContext.font, font.family, font.pixelSize, font.pointSize, fontSize)
		var metrics = textCanvasContext.measureText(text.text)
		text.paintedWidth = metrics.width
		text.paintedHeight = fontSize * font.lineHeight
		//log('layoutText', text.text, text.paintedWidth, text.paintedHeight)
		layoutTextSetStyle(text, {})
		return
	}
	var removedChildren = element.removeChildren(text)

	if (!wrap)
		text.style({ width: 'auto', height: 'auto', 'padding-top': 0 }) //no need to reset it to width, it's already there
	else
		text.style({ 'height': 'auto', 'padding-top': 0})

	//this is the source of rounding error. For instance you have 186.3px wide text, this sets width to 186px and causes wrapping
	/*
		https://github.com/pureqml/qmlcore/issues/176

		A few consequent text layouts may result in different results,
		probably as a result of some randomisation and/or rounding errors.
		This ends with +1 -1 +1 -1 infinite loop of updates.

		Ignore all updates which subtract 1 from paintedWidth/Height
	*/
	var w = element.fullWidth() + 1, h = element.fullHeight() + 1
	if (w + 1 !== text.paintedWidth)
		text.paintedWidth = w
	if (h + 1 !== text.paintedHeight)
		text.paintedHeight = h

	var style
	if (!wrap)
		//restore original width value (see 'if' above), we're not passing 'height' as it's explicitly set by layoutTextSetStyles
		style = { 'width': text.width }
	else
		style = { }

	layoutTextSetStyle(text, style)
	element.appendChildren(removedChildren)
}

exports.run = function(ctx, onloadCallback) {
	ctx.window.on('message', function(event) {
		log('Context: received message from ' + event.origin, event)
		ctx.message(event)
	})
	ctx.window.on($manifest$expectRunContextEvent ? 'runContext' : 'load', function() {
		onloadCallback()
	})
}

exports.tick = function(ctx) {
	//log('tick')
	ctx._styleCache.apply()
}

///@private
var setTransition = function(component, name, animation) {
	var html5 = exports
	var transition = {
		property: html5.getPrefixedName('transition-property'),
		delay: html5.getPrefixedName('transition-delay'),
		duration: html5.getPrefixedName('transition-duration'),
		timing: html5.getPrefixedName('transition-timing-function')
	}
	var element = component.element
	element.forceLayout() //flush styles before setting transition

	name = html5.getPrefixedName(name) || name //replace transform: <prefix>rotate hack

	var transitions = element._transitions
	var property	= transitions[transition.property] || []
	var duration	= transitions[transition.duration] || []
	var timing		= transitions[transition.timing] || []
	var delay		= transitions[transition.delay] || []

	var idx = property.indexOf(name)
	if (idx === -1) { //if property not set
		if (animation) {
			property.push(name)
			duration.push(animation.duration + 'ms')
			timing.push(animation.easing)
			delay.push(animation.delay + 'ms')
		}
	} else { //property already set, adjust the params
		if (animation && animation.active()) {
			duration[idx] = animation.duration + 'ms'
			timing[idx] = animation.easing
			delay[idx] = animation.delay + 'ms'
		} else {
			property.splice(idx, 1)
			duration.splice(idx, 1)
			timing.splice(idx, 1)
			delay.splice(idx, 1)
		}
	}

	transitions[transition.property] = property
	transitions[transition.duration] = duration
	transitions[transition.timing] = timing
	transitions[transition.delay] = delay

	//FIXME: orsay animation is not working without this shit =(
	if (component._context.system.os === 'orsay' || component._context.system.os === 'netcast') {
		transitions["transition-property"] = property
		transitions["transition-duration"] = duration
		transitions["transition-delay"] = delay
		transitions["transition-timing-function"] = timing
	}
	component.style(transitions)
	return true
}

var cssMappings = {
	width: 'width', height: 'height',
	x: 'left', y: 'top', viewX: 'left', viewY: 'top',
	opacity: 'opacity',
	border: 'border',
	radius: 'border-radius',
	rotate: 'transform',
	boxshadow: 'box-shadow',
	transform: 'transform',
	visible: 'visibility', visibleInView: 'visibility',
	background: 'background',
	color: 'color',
	backgroundImage: 'background-image',
	font: 'font'
}

///@private tries to set animation on name using css transitions, returns true on success
exports.setAnimation = function (component, name, animation) {
	if (!exports.capabilities.csstransitions || $manifest$cssDisableTransitions || (animation && !animation.cssTransition))
		return false

	var css = cssMappings[name]
	return css !== undefined? setTransition(component, css, animation): false
}

exports.requestAnimationFrame = Modernizr.prefixed('requestAnimationFrame', window)	|| function(callback) { return setTimeout(callback, 0) }
exports.cancelAnimationFrame = Modernizr.prefixed('cancelAnimationFrame', window)	|| function(id) { return clearTimeout(id) }

exports.enterFullscreenMode = function(el) {
	try {
		return Modernizr.prefixed('requestFullscreen', el.dom)()
	} catch(ex) {
		log('enterFullscreenMode failed', ex)
	}
}
exports.exitFullscreenMode = function() {
	try {
		return window.Modernizr.prefixed('exitFullscreen', document)()
	} catch(ex) {
		log('exitFullscreenMode failed', ex)
	}
}
exports.inFullscreenMode = function () { return !!window.Modernizr.prefixed('fullscreenElement', document) }

exports.ajax = function(ui, request) {
	var url = request.url
	var error = request.error,
		headers = request.headers,
		done = request.done,
		settings = request.settings

	var xhr = new XMLHttpRequest()

	if (error)
		xhr.addEventListener('error', error)

	if (done)
		xhr.addEventListener('load', done)

	xhr.open(request.method || 'GET', url);

	for (var i in settings)
		xhr[i] = settings[i]

	for (var i in headers)
		xhr.setRequestHeader(i, headers[i])

	if (request.data)
		xhr.send(request.data)
	else
		xhr.send()
}

exports.fingerprint = function(ctx, fingerprint) {
	var html = exports
	try {
		var fcanvas = html.createElement(ctx, 'canvas')
		var w = 2000, h = 32
		fcanvas.dom.width = w
		fcanvas.dom.height = h
		var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ /0123456789 abcdefghijklmnopqrstuvwxyz £©µÀÆÖÞßéöÿ –—‘“”„†•…‰™œŠŸž€ ΑΒΓΔΩαβγδω АБВГДабвгд ∀∂∈ℝ∧∪≡∞ ↑↗↨↻⇣ ┐┼╔╘░►☺♀ ﬁ�⑀₂ἠḂӥẄɐː⍎אԱა"
		var fctx = fcanvas.dom.getContext('2d')
		fctx.textBaseline = "top";
		fctx.font = "20px 'Arial'";
		fctx.textBaseline = "alphabetic";
		fctx.fillStyle = "#fedcba";
		fctx.fillRect(0, 0, w, h);
		fctx.fillStyle = "#12345678";
		fctx.fillText(txt, 1.5, 23.5, w);
		fctx.font = "19.5px 'Arial'";
		fctx.fillStyle = "#789abcde";
		fctx.fillText(txt, 1, 22, w);
		fingerprint.update(fcanvas.dom.toDataURL())
	} catch(ex) {
		log('canvas test failed: ' + ex)
	}
	try { fingerprint.update(window.navigator.userAgent) } catch (ex) { log(ex) }
	try { fingerprint.update(window.navigator.plugins) } catch (ex) { log(ex) }
	try { fingerprint.update(window.navigator.mimeTypes) } catch (ex) { log(ex) }
	try { fingerprint.update(window.navigator.language) } catch (ex) { log(ex) }
	try { fingerprint.update(window.navigator.platform) } catch (ex) { log(ex) }
	try { fingerprint.update(window.navigator.product) } catch (ex) { log(ex) }
	try { fingerprint.update(window.navigator.productSub) } catch (ex) { log(ex) }
	try { fingerprint.update(window.navigator.vendorSub) } catch (ex) { log(ex) }
	try { fingerprint.update(window.navigator.hardwareConcurrency) } catch (ex) { log(ex) }

	try { fingerprint.update(window.screen.availWidth) } catch (ex) { log(ex) }
	try { fingerprint.update(window.screen.availHeight) } catch (ex) { log(ex) }
	try { fingerprint.update(window.screen.colorDepth) } catch (ex) { log(ex) }
}

return exports;
} )()
_globals.html5.location = (function() {/** @const */
var exports = {};
//=====[import html5.location]=====================

var Location = function(ui) {
	this._ui = ui
	var location = window.location
	this.updateActualValues()
	var self = this
	var context = ui._context
	context.window.on("hashchange", function() { self._ui.hash = location.hash }.bind(this))
	context.window.on("popstate", function() { self.updateActualValues() }.bind(this))
}

Location.prototype.updateActualValues = function() {
	var ui = this._ui
	var windowContext = ui._context.window.dom
	ui.hash = windowContext.location.hash
	ui.href = windowContext.location.href
	ui.port = windowContext.location.port
	ui.host = windowContext.location.host
	ui.origin = windowContext.location.origin
	ui.hostname = windowContext.location.hostname
	ui.pathname = windowContext.location.pathname
	ui.protocol = windowContext.location.protocol
	ui.search = windowContext.location.search
	ui.state = windowContext.history.state
}

Location.prototype.changeHref = function(href) {
	this._ui._context.window.dom.location.href = href
	this.updateActualValues()
}

Location.prototype.pushState = function(state, title, url) {
	var ui = this._ui
	var windowContext = ui._context.window.dom
	if (windowContext.location.hostname) {
		windowContext.history.pushState(state, title, url)
		this.updateActualValues()
	} else {
		ui._context.document.title = title
		this._ui.state = state
	}
}

exports.createLocation = function(ui) {
	return new Location(ui)
}

exports.Location = Location

return exports;
} )()
_globals.html5.cache = (function() {/** @const */
var exports = {};
//=====[import html5.cache]=====================

var getTime = function() { return Math.floor(new Date().getTime() / 1000) }

var Entry = function() {
	this.created = getTime()
	this.waiters = []
	this.invoker = null
}

Entry.prototype.expired = function(ttl) {
	return getTime() - this.created >= ttl
}

Entry.prototype.set = function(result) {
	this.created = getTime()
	var invoker = this.invoker = _globals.core.safeCall(null, [result], function(ex) { log("cache entry callback failed: ", ex, ex.stack) })
	while(this.waiters.length) {
		var waiters = this.waiters
		this.waiters = []
		waiters.forEach(invoker)
	}
	this.waiters = null
}

Entry.prototype.wait = function(callback) {
	if (this.invoker !== null)
		this.invoker(callback)
	else
		this.waiters.push(callback)
}

var Cache = function(create, ttl) {
	if (!create)
		throw new Error("create callback is required")
	this._create = create
	this._ttl = ttl || 3600
	this._cache = {}
	setInterval(this.cleanup.bind(this), this._ttl / 2 * 1000)
}

Cache.prototype.get = function(key, callback) {
	var entry = this._cache[key]
	if (entry === undefined || entry.expired(this._ttl)) {
		this._cache[key] = entry = new Entry()
		this._create(key, function(result) {
			entry.set(result)
		})
	}
	entry.wait(callback)
}

Cache.prototype.cleanup = function() {
	for(var k in this._cache) {
		var entry = this._cache[k]
		if (entry.expired(this._ttl)) {
			delete this._cache[k]
		}
	}
}

exports.Cache = Cache

return exports;
} )()
_globals.html5.localstorage = (function() {/** @const */
var exports = {};
//=====[import html5.localstorage]=====================

var LocalStorage = function(parent) {
	if (parent && parent.name !== undefined) {
		// TODO: implement properties sunchronization using parent._setProperty() and parent.ready()
	}
	this._storage = window.localStorage;
	if (!this._storage)
		throw new Error("no local storage support")
}

LocalStorage.prototype.get = function(name, callback, error) {
	var value = this._storage.getItem(name)
	if (value !== null)
		callback(value)
	else
		error(new Error('no item with name ' + name))
}

LocalStorage.prototype.set = function(name, value) {
	this._storage.setItem(name, value)
}

LocalStorage.prototype.erase = function(name, error) {
	this._storage.removeItem(name)
}

exports.createLocalStorage = function(parent) {
	return new LocalStorage(parent)
}

exports.LocalStorage = LocalStorage

return exports;
} )()
_globals.video.html5.backend = (function() {/** @const */
var exports = {};
//=====[import video.html5.backend]=====================

var Player = function(ui) {
	var player = ui._context.createElement('video')
	player.dom.preload = "metadata"

	this.element = player
	this.ui = ui
	this.setEventListeners()

	ui.element.remove()
	ui.element = player
	ui.parent.element.append(ui.element)

	this._xhr = new XMLHttpRequest()
	this._xhr.addEventListener('load', this.parseManifest.bind(this))
}

Player.prototype.setEventListeners = function() {
	var player = this.element
	var dom = player.dom
	var ui = this.ui
	player.on('play', function() { ui.waiting = false; ui.paused = dom.paused }.bind(ui))
	player.on('pause', function() { ui.paused = dom.paused }.bind(ui))
	player.on('ended', function() { ui.finished() }.bind(ui))
	player.on('seeked', function() { log("seeked"); ui.seeking = false; ui.waiting = false }.bind(ui))
	player.on('canplay', function() { log("canplay", dom.readyState); ui.ready = dom.readyState }.bind(ui))
	player.on('seeking', function() { log("seeking"); ui.seeking = true; ui.waiting = true }.bind(ui))
	player.on('waiting', function() { log("waiting"); ui.waiting = true }.bind(ui))
	player.on('stalled', function() { log("Was stalled", dom.networkState); ui.stalled = true }.bind(ui))
	player.on('emptied', function() { log("Was emptied", dom.networkState); }.bind(ui))
	player.on('volumechange', function() { ui.muted = dom.muted }.bind(ui))
	player.on('canplaythrough', function() { log("ready to play"); ui.paused = dom.paused }.bind(ui))
	player.on('suspend', function() { log('suspended'); ui.paused = true })

	player.on('error', function() {
		log("Player error occurred", dom.error, "src", ui.source)

		if (!dom.error || !ui.source)
			return

		ui.error(dom.error)

		log("player.error", dom.error)
		switch (dom.error.code) {
		case 1:
			log("MEDIA_ERR_ABORTED error occurred")
			break;
		case 2:
			log("MEDIA_ERR_NETWORK error occurred")
			break;
		case 3:
			log("MEDIA_ERR_DECODE error occurred")
			break;
		case 4:
			log("MEDIA_ERR_SRC_NOT_SUPPORTED error occurred")
			break;
		default:
			log("UNDEFINED error occurred")
			break;
		}
	}.bind(ui))

	player.on('timeupdate', function() {
		ui.waiting = false
		ui.stalled = false
		if (!ui.seeking)
			ui.progress = dom.currentTime
	}.bind(ui))

	player.on('durationchange', function() {
		var d = dom.duration
		log("Duration", d)
		ui.duration = isFinite(d) ? d : 0
	}.bind(ui))

	player.on('progress', function() {
		var last = dom.buffered.length - 1
		ui.waiting = false
		if (last >= 0)
			ui.buffered = dom.buffered.end(last) - dom.buffered.start(last)
	}.bind(ui))

	this.setOption("autoplay", ui.autoPlay)
}

Player.prototype.parseManifest = function(data) {
	var lines = data.target.responseText.split('\n');
	var url = this.ui.source
	var path = url.substring(0, url.lastIndexOf('/') + 1)
	var idx = 0
	this._videoTracks = [ { "name": "auto", "url": this.ui.source, "id": idx } ]
	this._totalTracks = {}
	this._audioTracksInfo = []
	for (var i = 0; i < lines.length - 1; ++i) {
		var line = lines[i]
		var nextLine = lines[i + 1]
		if (line.indexOf('#EXT-X-STREAM-INF') == 0) {
			var attributes = line.split(',');
			var track = {
				url: nextLine.indexOf("http") === 0 ? nextLine : (path + nextLine)
			}
			for (var j = 0; j < attributes.length; ++j) {
				var param = attributes[j].split('=');
				if (param.length > 1) {
					switch (param[0].trim().toLowerCase()) {
						case "bandwidth":
							track.bandwidth = param[1].trim()
							break
						case "audio":
							track.audio = param[1].trim().replace(/"/g, "")
							break
						case "resolution":
							var size = param[1].split("x")
							track.width = size[0]
							track.height = size[1]
							break
					}
				}
			}
			var key = track.width + "x" + track.height
			if (!this._totalTracks[key]) {
				this._totalTracks[key] = []
			}
			this._totalTracks[key].push(track)
		} else if (line.indexOf('#EXT-X-MEDIA:TYPE=AUDIO') == 0) {
			var attributes = line.split(',');
			var audioTrack = {}
			for (var j = 0; j < attributes.length; ++j) {
				var param = attributes[j].split('=');
				if (param.length > 1) {
					switch (param[0].trim().toLowerCase()) {
						case "group-id":
							audioTrack.id = param[1].trim().replace(/"/g, "")
							break
						case "name":
							audioTrack.label = param[1].trim().replace(/"/g, "")
							break
						case "language":
							audioTrack.language = param[1].trim().replace(/"/g, "")
							break
						case "uri":
							audioTrack.url = param[1].trim()
							break
					}
				}
			}
			this._audioTracksInfo.push(audioTrack)
		}
	}

	for (var i in this._totalTracks) {
		var tmpTrack = this._totalTracks[i][0]
		tmpTrack.id = ++idx
		this._videoTracks.push(tmpTrack)
	}
}

Player.prototype.getFileExtension = function(filePath) {
	if (!filePath)
		return ""
	var urlLower = filePath.toLowerCase()
	var querryIndex = filePath.indexOf("?")
	if (querryIndex >= 0)
		urlLower = urlLower.substring(0, querryIndex)
	var extIndex = urlLower.lastIndexOf(".")
	return urlLower.substring(extIndex, urlLower.length)
}

Player.prototype.setSource = function(url) {
	this.ui.ready = false
	this._extension = this.getFileExtension(url)
	if (url && this._xhr && (this._extension === ".m3u8" || this._extension === ".m3u")) {
		this._xhr.open('GET', url);
		this._xhr.send()
	}

	var source = url
	if (this.ui.startPosition)
		source += "#t=" + this.ui.startPosition
	this.element.dom.src = source
}

Player.prototype.play = function() {
	this.element.dom.play()
}

Player.prototype.pause = function() {
	this.element.dom.pause()
}

Player.prototype.stop = function() {
	//where is no 'stop' method in html5 video player just pause instead
	this.pause()
}

Player.prototype.seek = function(delta) {
	this.element.dom.currentTime += delta
}

Player.prototype.seekTo = function(tp) {
	this.element.dom.currentTime = tp
}

Player.prototype.setVolume = function(volume) {
	this.element.dom.volume = volume
}

Player.prototype.setMute = function(muted) {
	this.element.dom.muted = muted
}

Player.prototype.setLoop = function(loop) {
	this.element.dom.loop = loop
}

Player.prototype.setOption = function(name, value) {
	if (name === "autoplay") {
		if (value)
			this.element.dom.setAttribute("autoplay", "")
		else
			this.element.dom.removeAttribute("autoplay");
	} else {
		this.element.dom.setAttribute(name, value)
	}
}

Player.prototype.setRect = function(l, t, r, b) {
	//not needed in this port
}

Player.prototype.setVisibility = function(visible) {
	log('VISIBILITY LOGIC MISSING HERE, visible:', visible)
}

Player.prototype.setupDrm = function(type, options, callback, error) {
	log('Not implemented')
}

Player.prototype.getAudioTracks = function() {
	log('Not implemented')
	return []
}

Player.prototype.getVideoTracks = function() {
	return this._videoTracks || []
}

Player.prototype.getAudioTracks = function() {
	var audioTracks = this.element.dom.audioTracks
	var result = []
	for (var i = 0; i < audioTracks.length; ++i) {
		var track = audioTracks[i]
		var info = this._audioTracksInfo[i]
		result.push({
			"id": i,
			"name": track.label ? track.label : info.name,
			"language": track.language ? track.language : info.language
		})
	}
	log("getAudioTracks", result)
	return result
}

Player.prototype.setAudioTrack = function(trackId) {
	var audioTracks = this.element.dom.audioTracks
	if (trackId < 0 || trackId >= audioTracks.length) {
		log("Where is no track", trackId)
		return
	}
	log("Set audio track", audioTracks[trackId])

	var result = []
	for (var i = 0; i < audioTracks.length; ++i)
		audioTracks[i].enabled = i === trackId
}

Player.prototype.setVideoTrack = function(trackId) {
	if (!this._videoTracks || this._videoTracks.length <= 0) {
		log("There is no available video track", this._videoTracks)
		return
	}
	if (trackId < 0 || trackId >= this._videoTracks.length) {
		log("Track with id", trackId, "not found")
		return
	}
	this.ui.waiting = true
	var progress = this.ui.progress
	log("Set video", this._videoTracks[trackId])
	this.element.dom.src = this._videoTracks[trackId].url
	this.seekTo(progress)
}

Player.prototype.setVideoTrack = function(trackId) {
	if (!this._videoTracks || this._videoTracks.length <= 0) {
		log("There is no available video track", this._videoTracks)
		return
	}
	if (trackId < 0 || trackId >= this._videoTracks.length) {
		log("Track with id", trackId, "not found")
		return
	}
	this.ui.waiting = true
	var progress = this.ui.progress
	log("Set video", this._videoTracks[trackId])
	this.element.dom.src = this._videoTracks[trackId].url
	this.seekTo(progress)
}

Player.prototype.setBackgroundColor = function(color) {
	var Color = _globals.core.Color
	this.element.dom.style.backgroundColor = new Color(color).rgba()
}


exports.createPlayer = function(ui) {
	return new Player(ui)
}

exports.probeUrl = function(url) {
	return 50
}

exports.Player = Player

return exports;
} )()
_globals.web.device = (function() {/** @const */
var exports = {};
//=====[import web.device]=====================

var Device = function(ui) {
	var context = ui._context
	if ($manifest$system$fingerprint) {
		var fingerprint = new $html5.fingerprint.fingerprint.Fingerprint()
		context.backend.fingerprint(context, fingerprint)
		ui.deviceId = fingerprint.finalize()
		log("deviceId", ui.deviceId)
	} else {
		var deviceString = context.system.os + "_" + context.system.browser
		deviceString = deviceString.replace(/\s/g, '')
		ui.deviceId = deviceString + "_" + Math.random().toString(36).substr(2, 9)
	}
}

exports.createDevice = function(ui) {
	return new Device(ui)
}

exports.Device = Device

return exports;
} )()
_globals.video.videojs.backend = (function() {/** @const */
var exports = {};
//=====[import video.videojs.backend]=====================

var Player = function(ui) {
	var player = ui._context.createElement('video')
	player.dom.preload = "metadata"

	player.setAttribute('preload', 'auto')
	player.setAttribute('data-setup', '{}')
	player.setAttribute('class', 'video-js')

	this.element = player
	this.ui = ui
	this.setEventListeners()

	var uniqueId = 'videojs' + this.element._uniqueId
	player.setAttribute('id', uniqueId)

	ui.element.remove()
	ui.element = player
	ui.parent.element.append(ui.element)

	this.videojs = window.videojs(uniqueId)
	this.videojs.width = 'auto'
	this.videojs.height = 'auto'

	var errorDisplay = document.getElementsByClassName("vjs-error-display")
	if (errorDisplay && errorDisplay.length) {
		for (var index = 0; index < errorDisplay.length; ++index) {
			errorDisplay[index].style.display = 'none'
		}
	}

	var videojsSpinner = document.getElementsByClassName("vjs-loading-spinner")
	if (videojsSpinner && videojsSpinner.length) {
		for (var index = 0; index < videojsSpinner.length; ++index) {
			videojsSpinner[index].style.display = 'none'
		}
	}

	var videojsControllButton = document.getElementsByClassName("vjs-control-bar")
	if (videojsControllButton && videojsControllButton.length) {
		for (var index = 0; index < videojsControllButton.length; ++index) {
			videojsControllButton[index].style.display = 'none'
		}
	}

	var videojsBigPlayButton = document.getElementsByClassName("vjs-big-play-button")
	if (videojsBigPlayButton && videojsBigPlayButton.length) {
		for (var index = 0; index < videojsBigPlayButton.length; ++index) {
			videojsBigPlayButton[index].style.display = 'none'
		}
	}

	this.videojsContaner = document.getElementById(uniqueId)
	this.videojsContaner.style.zindex = -1
}

Player.prototype = Object.create(_globals.video.html5.backend.Player.prototype)

Player.prototype.setSource = function(url) {
	var media = { 'src': url }
	log("SetSource", url)
	if (url) {
		var urlLower = url.toLowerCase()
		var querryIndex = url.indexOf("?")
		if (querryIndex >= 0)
			urlLower = urlLower.substring(0, querryIndex)
		var extIndex = urlLower.lastIndexOf(".")
		var extension = urlLower.substring(extIndex, urlLower.length)
		if (extension === ".m3u8" || extension === ".m3u")
			media.type = 'application/x-mpegURL'
		else if (extension === ".mpd")
			media.type = 'application/dash+xml'
	}
	this.videojs.src(media, { html5: { hls: { withCredentials: true } }, fluid: true, preload: 'none', techOrder: ["html5"] })
	if (this.ui.autoPlay)
		this.play()
}

Player.prototype.play = function() {
	var playPromise = this.element.dom.play()
	if (playPromise !== undefined) {
		playPromise.catch(function(e) {
			log('play error:', e)
			if (this.ui.autoPlay && e.code === DOMException.ABORT_ERR)
				this.element.dom.play()
		}.bind(this))
	}
}

Player.prototype.setRect = function(l, t, r, b) {
	this.videojsContaner.style.width = (r - l) + "px"
	this.videojsContaner.style.height = (b - t) + "px"
}

exports.createPlayer = function(ui) {
	return new Player(ui)
}

exports.probeUrl = function(url) {
	return window.videojs ? 60 : 0
}

return exports;
} )()
_globals.controls.pure.format = (function() {/** @const */
var exports = {};
//=====[import controls.pure.format]=====================

exports.currency = function(v, n, x) {
	var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
	return v.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
}

exports.format = function() {
	var args = [].slice.call(arguments);
	var initial = args.shift();

	function replacer (text, replacement) {
		return text.replace('%s', replacement);
	}
	return args.reduce(replacer, initial);
}
return exports;
} )()


return exports;
} )();
	var l10n = {}

	var context = qml._context = new qml.core.Context(null, false, {id: 'qml-context-app', l10n: l10n, nativeContext: null})
	context.init()
	context.start(new qml.src.UiApp(context))
	context.run()
