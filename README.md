blue-button-util
================

Common utility methods for Amida-Tech repositories

[![NPM](https://nodei.co/npm/blue-button-util.png)](https://nodei.co/npm/blue-button-util/)

[![Build Status](https://travis-ci.org/amida-tech/blue-button-util.svg)](https://travis-ci.org/amida-tech/blue-button-util)
[![Coverage Status](https://coveralls.io/repos/amida-tech/blue-button-util/badge.png)](https://coveralls.io/r/amida-tech/blue-button-util)

This library provides common Javascript utilities that are used in other Amida-Tech libraries.

##Utilities

You can install using [npm](https://www.npmjs.com) and  `require` to use in [node.js](https://nodejs.org/)
```js
var bbu = require('blue-button-util');

var ob = bbu.object;         // object library
var obs = bbu.object;        // objectset library
var arrs = bbu.arrayset;     // arrayset library
var dtt = bbu.datetime;      // datetime library
```

The following methods are provided
- [`object.exists`](#object.exists)
- [`object.deepValue`](#object.deepValue)
- [`objectset.compact`](#objectset.compact)
- [`objectset.deepValue`](#objectset.deepValue)
- [`arrayset.append`](#arrayset.append)
- [`datetime.dateToModel`](#datetime.dateToModel)
- [`datetime.dateTimeToModel`](#datetime.dateTimeToModel)
- [`datetime.modelToDate`](#datetime.modelToDate)
- [`datetime.modelToDateTime`](#datetime.modelToDateTime)

### `object` Library

Provides utility methods for objects.

<a name="object.exists" />
####exists(obj)

Checks if `obj` is not `undefined` or `null`
```js
var r0 = ob.exists(null);
var r1 = ob.exists(undefined);
var r2 = ob.exists('anything else');

console.log(r0); // false
console.log(r1); // false
console.log(r2); // true
```

<a name="object.deepValue" />
####deepValue(obj, deepProperty)

Returns `obj` deep values where `deepProperty` can be '.' delimited keys
```js
var input = {
    a: {
        b: {
            c: 1
        },
        d: 2
    },
    e: 3
};

var r0 = ob.deepValue(null, 'any');
var r1 = ob.deepValue(input, 'a.b');
var r2 = ob.deepValue(input, 'a.b.c');
var r3 = ob.deepValue(input, 'a.e.f');
var r4 = ob.deepValue(input, 'a.f');
var r5 = ob.deepValue('primary data types', 'any');

console.log(r0); // null
console.log(r1); // {c: 1}
console.log(r2); // 1
console.log(r3); // null
console.log(r4); // null
console.log(r5); // null
```

Nothing special is done for arrays so you can specify indices in `deepProperty`
```js
var input = [{
    a: 1
}, {
    b: ['value']
}];

var r0 = ob.deepValue(input, '0.a');
var r1 = ob.deepValue(input, '1.b');
var r2 = ob.deepValue(input, '1.b.0');

console.log(r0); // 1
console.log(r1); // ['value']
console.log(r2); // 'value'
```

### `objectset` Library

Provides utility methods that modify an object.

<a name="objectset.compact" />
####objectset.compact(obj)

Recursively removes all `null` and `undefined` values from `obj`.  No special handling is done for resulting empty objects or arrays
```js
var obj = {
    a: 1,
    b: null,
    c: {
        d: undefined,
        e: 4
    },
    f: {
        g: null
    }
};

obs.compact(obj);
console.log(obj); // {a: 1, c:{e:4}, f:{}}
```

<a name="objectset.deepValue" />
####objectset.deepValue(obj, deepProperty, value)

Assigns `value` to `deepProperty` of `obj` possibly creating multiple objects
```js
var obj = {};

obs.deepValue(obj, 'a.b', 'value');
console.log(obj); // {a: {b: 'value'}}
```

Existing keys are kept for destination `obj` but their values might ve overridden
```js
var obj = {
    a: 1,
    b: {
        c: 2,
        d: 3
    }
};

obs.deepValue(obj, 'b.c', {
    e: 4
});
console.log(obj); // {a: 1, b: {c: {e: 4}, d: 3}}

```

### `arrayset` Library

Provides utility methods that modify an array.

<a name="arrayset.append" />
#### append(arr, arrToAppend)

Appends `arrToAppend` elements to `arr`
```js
var arr = ['a', 'b'];

arrs.append(arr, ['c', 'd']);
console.log(arr); // ['a', 'b', 'c', 'd'];
```

### `datetime` Library

Provides conversion methods to/from [blue-button-model](https://github.com/amida-tech/blue-button-model) datetimes from/to ISO datetimes.

<a name="datetime.dateToModel" />
#### datetime.dateToModel(d)

Converts ISO date `d` to [blue-button-model](https://github.com/amida-tech/blue-button-model) datetime
```js
var r0 = dtt.dateToModel('2014');
var r1 = dtt.dateToModel('2014-02');
var r2 = dtt.dateToModel('2014-02-07');
var r3 = dtt.dateToModel('2014-02-07T12:45:04.000Z');

console.log(r0); // {date: '2014-01-01T00:00:00.000Z', precision: 'year'}
console.log(r1); // {date: '2014-02-01T00:00:00.000Z', precision: 'month'}
console.log(r2); // {date: '2014-02-07T00:00:00.000Z', precision: 'day'}
console.log(r3); // {date: '2014-02-07T00:00:00.000Z', precision: 'day'}
```

<a name="datetime.dateTimeToModel" />
#### datetime.dateTimeToModel(dt)

Converts ISO datetime `d` to [blue-button-model](https://github.com/amida-tech/blue-button-model) datetime
```js
var r0 = dtt.dateTimeToModel('2014');
var r1 = dtt.dateTimeToModel('2014-02');
var r2 = dtt.dateTimeToModel('2014-02-07');
var r3 = dtt.dateTimeToModel('2014-02-07T12:45:04.000Z');

console.log(r0); // {date: '2014-01-01T00:00:00.000Z', precision: 'year'}
console.log(r1); // {date: '2014-02-01T00:00:00.000Z', precision: 'month'}
console.log(r2); // {date: '2014-02-07T00:00:00.000Z', precision: 'day'}
console.log(r3); // {date: '2014-02-07T12:45:04.000Z', precision: 'second'}
```
Millisecond piece is ignored even when it is not zero.

<a name="datetime.modelToDate" />
#### datetime.modelToDate(dt)

Converts [blue-button-model](https://github.com/amida-tech/blue-button-model) datetime `dt` to ISO date
```js
var r0 = dtt.modelToDate({
    date: '2014-01-01T00:00:00.000Z',
    precision: 'year'
});
var r1 = dtt.modelToDate({
    date: '2014-02-01T00:00:00.000Z',
    precision: 'month'
});
var r2 = dtt.modelToDate({
    date: '2014-02-07T00:00:00.000Z',
    precision: 'day'
});
var r3 = dtt.modelToDate({
    date: '2014-02-07T12:45:04.000Z',
    precision: 'second'
});

console.log(r0); // '2014'
console.log(r1); // '2014-02'
console.log(r2); // '2014-02-07'
console.log(r3); // '2014-02-07'
```

<a name="datetime.modelToDateTime" />
#### datetime.modelToDateTime(dt)

Converts [blue-button-model](https://github.com/amida-tech/blue-button-model) datetime `dt` to ISO datetime
```js
var r0 = dtt.modelToDateTime({
    date: '2014-01-01T00:00:00.000Z',
    precision: 'year'
});
var r1 = dtt.modelToDateTime({
    date: '2014-02-01T00:00:00.000Z',
    precision: 'month'
});
var r2 = dtt.modelToDateTime({
    date: '2014-02-07T00:00:00.000Z',
    precision: 'day'
});
var r3 = dtt.modelToDateTime({
    date: '2014-02-07T12:45:04.000Z',
    precision: 'second'
});
var r4 = dtt.modelToDateTime({
    date: '2014-02-07T12:45:04.010Z',
    precision: 'second'
});


console.log(r0); // '2014'
console.log(r1); // '2014-02'
console.log(r2); // '2014-02-07'
console.log(r3); // '2014-02-07T12:45:04.000Z'
console.log(r4); // '2014-02-07T12:45:04.010Z'
```

## License

Licensed under [Apache 2.0](./LICENSE).
