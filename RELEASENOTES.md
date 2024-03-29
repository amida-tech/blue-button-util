# blue-button-util Release Notes

## 1.6.2 - May 31, 2022

- Patch update: GHSA-rm36-94g8-835r - Race Condition in Grunt

## 1.6.0 - TBD

- jsonpath library is moved to new package jsonave.
- predicate library is retired.  Use combination of lodash methods negate, 
  partialRight and has.
- objectset.merge, objectset.deepValue, object.deepValue, object.isObject,
  arrayset.remove, methods are retired.  Each has lodash equivalent.

## 1.5.0 - June 12, 2015

- jsonpath `wrap` options functionality is modified.  See README.
- jsonpath `emptyValue` option is added.
- jsonpath functions can be specified during evaluation call
- predicate.not is added.

## v1.4.2 - March 29, 2015

- jsonpath library is added

## v1.4.1 - March 8, 2015

- object.deepValue(obj, deepProperty);
- objectset.deepValue(obj, deepProperty, value)
- predicate.hasProperty
- predicate.hasNoProperty
- predicate.inValueSet
- predicate.hasNoProperties
- predicate.propertyValue
- predicate.falsyPropertyValue
- predicate.or
- predicate.and
- examples are added to documentation

## v1.4.0 - February 27, 2015

This is the initial release of blue-button-util.js library.  It includes javascript utility methods.

- object.exists()
- datetime.dateToModel(dt)
- datetime.modelToDate(dt)
- datetime.modelToDateTime(dt)
- arrayset.append(arr, arrToAppend)
- objectset.compact(obj)
- objectset.merge(obj, src)
