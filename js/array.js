const cars = ["haha", "hehe", "huhu"];

// cars.push("motor");

// console.log(cars);
// console.log(cars[0]);
// console.log(cars[cars.length - 1]);

// cars.splice(1, 1);
// console.log(cars);

// if (cars.includes("motor")) {
//   console.log(`cars has motor`);
// }

// console.log("hello lord");

let text = "";

cars.forEach(myFunction);

function myFunction(value, index, array) {
  text += value;
}

// console.log(text);

const number1 = [1, 23, 4, 5, 56, 67];
const number2 = number1.map(mapping);

function mapping(value, index, array) {
  return value * 4;
}

// console.log(number2);

const ages = [10, 23, 53, 123, 54, 43];

const filterAge = ages.filter(checkingTheAge);

function checkingTheAge(value, index, array) {
  return value > 18;
}

// console.log(filterAge);

const num = [2, 3, 52, 4, 32, 32];
let sum = num.reduce(sumFunction);

function sumFunction(total, value, index, array) {
  return (total += value);
}

// console.log(sum);
