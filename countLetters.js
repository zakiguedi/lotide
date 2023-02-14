const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅Assertion Passed: [actual] === [expected]");
  } else {
    console.log("❌❌❌Assertion Failed: [actual] !== [expected]");
  }
};
  const countLetters = function (str) {
    const result = {};
    const newString = str.split(" ").join("");
    for (const letter of newString) {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
    return result;
  };