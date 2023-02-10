const assertEqual = function(actual, expected) {
  if (actual === expected) {
  console.log(✅✅✅ Assertion Passed: ${actual} === ${expected});
  } else {
  console.log(🛑🛑🛑 Assertion Failed: ${actual} !== ${expected});
  }
  };
  const findKeyByValue = function(obj, val) {
    let objKeys = Object.keys(obj);
    let index = 0;
    for (let element in obj) {
      if (obj[element] === val) {
        return objKeys[index];
      }
      index++;
    }
  }
  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
  console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));
