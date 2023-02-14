const tail = require('../tail');
const assertEqual = require('../assertEqual');

const randomArray = ["hello", "Lighthouse", "Labs"];
assertEqual(randomArray.length, 3);
assertEqual(tail(randomArray).length, 2);