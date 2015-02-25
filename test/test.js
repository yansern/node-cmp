"use strict";

var
assert = require("assert"),
cmp = require("../lib/cmp");

describe("cmp", function() {
  describe("cmp", function() {
    it("should handle booleans", function() {
      assert.equal(0, cmp.cmp(true, true));
      assert.equal(-1, cmp.cmp(false, true));
      assert.equal(1, cmp.cmp(true, false));
      assert.equal(0, cmp.cmp(false, false));
    });

    it("should handle integers", function() {
      assert.equal(0, cmp.cmp(4, 4));
      assert.equal(0, cmp.cmp(-4, -4));
      assert.equal(0, cmp.cmp(0, 0));
      assert.equal(-1, cmp.cmp(2, 3));
      assert.equal(1, cmp.cmp(3, 2));
    });

    it("should handle doubles", function() {
      assert.equal(0, cmp.cmp(4.0, 4.0));
      assert.equal(0, cmp.cmp(-4.0, -4.0));
      assert.equal(0, cmp.cmp(0.0, 0.0));
      assert.equal(-1, cmp.cmp(2.9, 3.0));
      assert.equal(1, cmp.cmp(3.0, 2.9));
    });

    it("should handle strings", function() {
      assert.equal(0, cmp.cmp("abc", "abc"));
      assert.equal(0, cmp.cmp("", ""));
      assert.equal(-1, cmp.cmp("ant", "bat"));
      assert.equal(1, cmp.cmp("bat", "ant"));
    });

    it("should handle arrays", function() {
      assert.equal(0, cmp.cmp([], []));
      assert.equal(0, cmp.cmp([1, 2, 3], [1, 2, 3]));
      assert.equal(-1, cmp.cmp([1, 2, 3], [4, 5, 6]));
      assert.equal(1, cmp.cmp([4, 5, 6], [1, 2, 3]));
      assert.equal(-1, cmp.cmp([1, 2, 3], [1, 2, 3, 4]));
      assert.equal(1, cmp.cmp([1, 2, 3, 4], [1, 2, 3]));
    });
  });

  describe("eq", function() {
    it("should handle booleans", function() {
      assert.equal(true, cmp.eq(true, true));
      assert.equal(false, cmp.eq(false, true));
      assert.equal(false, cmp.eq(true, false));
      assert.equal(true, cmp.eq(false, false));
    });

    it("should handle integers", function() {
      assert.equal(true, cmp.eq(4, 4));
      assert.equal(true, cmp.eq(-4, -4));
      assert.equal(true, cmp.eq(0, 0));
      assert.equal(false, cmp.eq(2, 3));
      assert.equal(false, cmp.eq(3, 2));
    });

    it("should handle doubles", function() {
      assert.equal(true, cmp.eq(4.0, 4.0));
      assert.equal(true, cmp.eq(-4.0, -4.0));
      assert.equal(true, cmp.eq(0.0, 0.0));
      assert.equal(false, cmp.eq(2.9, 3.0));
      assert.equal(false, cmp.eq(3.0, 2.9));
    });

    it("should handle strings", function() {
      assert.equal(true, cmp.eq("abc", "abc"));
      assert.equal(true, cmp.eq("", ""));
      assert.equal(false, cmp.eq("ant", "bat"));
      assert.equal(false, cmp.eq("bat", "ant"));
    });

    it("should handle arrays", function() {
      assert.equal(true, cmp.eq([], []));
      assert.equal(true, cmp.eq([1, 2, 3], [1, 2, 3]));
      assert.equal(false, cmp.eq([1, 2, 3], [4, 5, 6]));
      assert.equal(false, cmp.eq([4, 5, 6], [1, 2, 3]));
      assert.equal(false, cmp.eq([1, 2, 3], [1, 2, 3, 4]));
      assert.equal(false, cmp.eq([1, 2, 3, 4], [1, 2, 3]));
    });
  });
});
