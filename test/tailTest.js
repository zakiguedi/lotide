/*const tail = require('../tail');
const assertEqual = require('../assertEqual');
const randomArray = ["hello", "Lighthouse", "Labs"];
assertEqual(randomArray.length, 3);
assertEqual(tail(randomArray).length, 2);*/

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {

  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns '5' for ['5']", () => {
    assert.deepEqual(tail([2, 5]), [5]); 
  });

});