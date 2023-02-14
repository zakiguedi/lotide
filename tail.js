const assertEqual = require('./assertEqual');
const tail = function (array) {
  let result = [];
  let tail = array.slice(1);
  result = tail;
  return tail;
};

console.log(tail([1, 2, 3, 4, 5]));

module.exports = tail;