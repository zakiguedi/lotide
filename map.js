const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅  Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑  Assertion failed: ${array1} !== ${array2}`);
  }
};
function eqArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}
const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);

const results2 = map(words, word => word + ' ' + 'test')
assertArraysEqual(results2, ["ground test", "control test", "to test", "major test", "tom test"]);

const results3 = map(words, word => word.length)
assertArraysEqual(results3, [6, 7, 2, 5, 3]);

const results4 = map(words, word => word[4])
assertArraysEqual(results4, ['n','r', undefined, 'r', undefined]);