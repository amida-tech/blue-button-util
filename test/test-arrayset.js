"use strict";

var bbu = require('../index');

var arrayset = bbu.arrayset;

describe('arrayset.append', function () {
  var append = arrayset.append;

  it('[] <- ["a", "b"]', function () {
    var r = [];
    append(r, ["a", "b"]);
    expect(r).toEqual(["a", "b"]);
  });

  it('["a", "b"] <- ["c", "d"]', function () {
    var r = ["a", "b"];
    append(r, ["c", "d"]);
    expect(r).toEqual(["a", "b", "c", "d"]);
  });

  it('["a", "b"] <- []', function () {
    var r = ["a", "b"];
    append(r, []);
    expect(r).toEqual(["a", "b"]);
  });
});
