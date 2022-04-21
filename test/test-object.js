"use strict";

var bbu = require('../index');

var object = bbu.object;

describe('object.exists', function () {
  var exists = object.exists;

  it('null', function () {
    var r = null;
    expect(exists(null)).toBe(false);
  });

  it('undefined', function () {
    var r;
    expect(exists(null)).toBe(false);
  });

  it('"a"', function () {
    var r = "a";
    expect(exists(r)).toBe(true);
  });

  it('""', function () {
    var r = "";
    expect(exists(r)).toBe(true);
  });

  it('{}', function () {
    var r = {};
    expect(exists(r)).toBe(true);
  });
});
