const vitamins = [
  "banans",
  "oranges",
  "Pear",
  "watermelon",
  "apple",
  "pawpaw",
  "banans",
  "oranges",
  "Pear",
  "watermelon",
  "apple",
  "pawpaw",
  "banans",
  "oranges",
  "Pear",
  "watermelon",
  "apple",
  "pawpaw",
  "banans",
  "oranges",
  "Pear",
  "watermelon",
  "apple",
  "pawpaw",
];

for (let i = 0; i < vitamins.length; i++) {
  console.log(i, vitamins[i]);
}

console.log("===================================");

// for (const bfruit of fruits) {
//   console.log(bfruit);
// }

console.log("===================================");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

console.log("===================================");

const double = (numbers) => {
  let result = [];
  for (const number of numbers) {
    result.push(number * 2);
  }
  return result;
};
console.log(double([1, 2, 3, 4, 5, 6, 6, 7, 8, 9]));

console.log("===================================");

const squared = (numbers) => {
  let result = [];
  for (const number of numbers) {
    result.push(number ** 2);
  }
  return result;
};
console.log(
  squared([
    1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 4, 5, 6, 6, 7, 26, 4, 5, 6, 6, 7, 1, 2, 3, 4,
    5, 6, 6, 7, 8, 9, 4, 5, 6, 6, 7, 17, 4, 5, 6, 6, 7, 1, 2, 3, 4, 5, 6, 6, 6,
    7, 8, 9, 4, 5, 6, 6, 7, 11, 4, 5, 6, 6, 7, 1, 2, 3, 4, 5,
  ])
);
