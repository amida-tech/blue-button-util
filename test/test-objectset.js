"use strict";

var bbu = require('../index');

var objectset = bbu.objectset;

describe('objectset.compact', function () {
  var compact = objectset.compact;

  it('basic', function () {
    var r = {
      a: 'a',
      b: {
        b0: 'b0',
        b1: 'b1',
        b2: null
      },
      c: undefined
    };

    compact(r);
    expect(r).toEqual({
      a: 'a',
      b: {
        b0: 'b0',
        b1: 'b1'
      }
    });
    expect(r).not.toHaveProperty('c');
    expect(r.b).not.toHaveProperty('b2');
  });

  it('inherited not impacted', function () {
    var b = {
      inh: null
    };

    var r = Object.create(b);
    r.a = 'a';
    r.b = undefined;

    compact(r);
    expect(r).toHaveProperty('a');
    expect(r).not.toHaveProperty('b');
    expect(r).toHaveProperty('inh');
    expect(r.inh).toBeFalsy();
  });
});
