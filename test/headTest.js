/*const head = require('../head');
const assertEqual = require('../assertEqual');
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "labs");*/

const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.deepEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.deepEqual(head(['5']), '5'); 
  });
});