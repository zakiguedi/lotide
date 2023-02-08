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

function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
}

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅  Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑  Assertion failed: ${array1} !== ${array2}`);
  }
};

const middle = function(arr) {
  const tooShortForMiddle = arr.length <= 2;
  const evenArray = arr.length % 2 === 0;
  if (tooShortForMiddle) {
    return [];
  } else if (evenArray) {
    const firstMiddleIndex = (arr.length / 2) - 1;
    const secondMiddleIndex = (arr.length / 2);
    return [arr[firstMiddleIndex], arr[secondMiddleIndex]];
  } else {
    const singleMiddleIndex = (Math.floor(arr.length / 2));
    return [arr[singleMiddleIndex]];
  }
};

module.exports = middle;