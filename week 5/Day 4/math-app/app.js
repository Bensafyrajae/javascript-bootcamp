
const _ = require('lodash');
const math = require('./math');

const sum = math.add(5, 3);
const product = math.multiply(5, 3);

console.log(`Addition: 5 + 3 = ${sum}`);
console.log(`Multiplication: 5 * 3 = ${product}`);

const numbers = [1, 2, 3, 4, 5];
const sumWithLodash = _.sum(numbers);
const averageWithLodash = _.mean(numbers);

console.log(`\nUsing lodash:`);
console.log(`Sum of ${numbers} = ${sumWithLodash}`);
console.log(`Average of ${numbers} = ${averageWithLodash}`);

const randomNum1 = _.random(1, 10);
const randomNum2 = _.random(1, 10);
const randomSum = math.add(randomNum1, randomNum2);
const randomProduct = math.multiply(randomNum1, randomNum2);

console.log(`\nRandom calculations:`);
console.log(`Random numbers: ${randomNum1} and ${randomNum2}`);
console.log(`Their sum: ${randomSum}`);
console.log(`Their product: ${randomProduct}`);