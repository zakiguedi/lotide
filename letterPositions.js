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
const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅  Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑  Assertion failed: ${array1} !== ${array2}`);
  }
};

const letterPosition = function (sentence) {
  const countNum = {};
  for (i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (countNum[letter]) {
      countNum[letter].push(i);
    } else {
      countNum[letter] = [i];
    }
  }

  console.log(countNum);
  return countNum;
};

// TEST CODE
assertArraysEqual(letterPosition("hello").e, [1]);