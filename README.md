util-is
-------
Additional Type Check functions for Util.

The node.js util module provides `isArray`, `isDate`, `isRegExp` and `isError`, but forgets about some of the other types in JS.  This is inconsistent and thus poor design.  The `util-is` module serves to bridge that oversight and correct this design flaw by providing `isString`, `isFunction`, `isNumber`, and `isBoolean`.  Additionally it provides some extended behavior such as `isDefined`, `isUndefined`, `isEmpty`, `isObject` and `isPureObject`.

Installation
------------
Install the module via npm and then require it once at the top of your project.  `util-is` modifies the util package such that all copies of util once installed (so long as the installer doesn't do anything tricky like removing util from the modules cache) will be modified with the added functions.

```
  npm install util-is
```

```
  require("util-is");
  var util = require("util");

  util.isString("asdf"); // true
  util.isPureObject("asdfasd"); // false
  util.isPureObject({
    one: 1, 
    two: 2
  }); // true
```

Methods
-------

### util.isString(o)
Given some value `o` return true if that value is a string.

### util.isFunction(o)
Given some value `o` return true if that value is a function.

### util.isNumber(o)
Given some value `o` return true if that value is a number.

### util.isBoolean(o)
Given some value `o` return true if that value is a boolean.

### util.isDefined(o)
Given some value `o` return true if that value is not undefined.  Technically, null is not undefined therefore, `util.isUndefined(null)` will return true.

### util.isUndefined(o)
Given some value `o` return true if that value is undefined.

### util.isEmpty(o)
Given some value `o` return true if that value undefined, null, an empty string, an empty array, or an empty object.  It has always annoyed me that JavaScript truthiness did not recognize [] as false and {} as false.  `util.isEmpty(o)` rectifies that.

### util.isPureObject(o)
Given some value `o` return true if the given value is not undefined, not null, not an array, not a string, not a number, not a boolean, not a function, not a RegExp, not an Error, and note a Date.  Basically, if the given object does not inherit from one of the core types, this return true.

