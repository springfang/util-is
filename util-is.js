var Util = require("util");

var toString = Object.prototype.toString;

/*
	isString(s) Returns true if the passed in object (o) is a String.
*/
Util.isString = function(s) {
	if (s===undefined || s===null) return false;
	return s.constructor===String;
};

/*
	isFunction(s) Returns true if the passed in object (o) is a Function.
*/
Util.isFunction = function(f) {
	if (f===undefined || f===null) return false;
	return f.constructor===Function;
};

/*
	isNumber(s) Returns true if the passed in object (o) is a Number, Infinity,
	or NaN.  Any Number type, integer, float, etc, will return true;
*/
Util.isNumber = function(n) {
	if (n===undefined || n===null) return false;
	return n.constructor===Number;
};

/*
	isBoolean(s) Returns true if the passed in object (o) is a Boolean,
	true, or false.
*/
Util.isBoolean = function(b) {
	if (b===undefined || b===null) return false;
	return b.constructor===Boolean;
};

/*
	isDefined(s) Returns true if the passed in object (o) is not undefined.
*/
Util.isDefined = function(o) {
	return o!==undefined;
};

/*
	isEmpty(s) Returns true if the passed in object (o) is a undefined,
	null, an empty array, or an empty string.  0 and false are not technically
	empty, so those values return true;
*/
Util.isEmpty = function(o) {
	if (o===undefined || o===null) return true;
	if (Util.isArray(o) && o.length===0) return true;
	if (Util.isString(o) && o.length===0) return true;
	if (Util.isPureObject(o) && Object.keys(o).length===0) return true;
	return false;
};

/*
	isUndefined(s) Returns true if the passed in object (o) is not undefined.
*/
Util.isUndefined = function(o) {
	return o===undefined;
};

/*
	isObject(s) Returns true if the passed in object (o) is a Object, which
	is everything that is not undefined.
*/
Util.isObject = function(o) {
	return o!==undefined;
};

/*
	isPureObject(o) Returns true if the passed in object (o) is defined 
	and not a function, string, number, boolean, array, date, RegExp, or Error.
*/
Util.isPureObject = function(o) {
	return o!==undefined && 
		   o!==null &&
		   !Util.isFunction(o) && 
		   !Util.isString(o) && 
		   !Util.isNumber(o) && 
		   !Util.isBoolean(o) && 
		   !Util.isArray(o)  && 
		   !Util.isDate(o) && 
		   !Util.isRegExp(o) && 
		   !Util.isError(o);
};
