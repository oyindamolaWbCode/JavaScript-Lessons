console.log("oyindamola");

// Variable is a placeholder to store infomation and data in your app

name = "Oyindamola Kushimo";
console.log(name);

//Maths Operators

// const NumberOne = Number(prompt("Give a number greater than 5"));

// const Discount = 0.4;

// const SumNumber = `${NumberOne + Discount}`;

// const ProductNumber = `${NumberOne * Discount}`;
// console.log(SumNumber);
// alert(
//   `The sum of food : ${NumberOne} and discount: ${Discount} is ${SumNumber}`
// );

// console.log(ProductNumber);

//Maths Methods
/*
Math.floor() methods rounds a number down to the nearest integer, and returns the result.

Math.ceil() methods rounds the number up to the nearest integer and returns the value

Math.random() returns a random number between 09(inclusive ) and 1(exclusive)
*/

const figuredecimal = 500.2;
const figureTwo = 30;

const FigureTotalSum = Math.ceil(figuredecimal + figureTwo);
console.log(FigureTotalSum);

const FigureTotalProduct = Math.floor(figuredecimal * figureTwo);
console.log(FigureTotalProduct);

//Todos

//Function add

const addNumber = (a, b) => {
  return a + b;
};

addNumber(10, 20);
console.log(addNumber(10, 20));

//Function Sub

const subNumber = (x, y) => {
  return x - y;
};

console.log(subNumber(55, 500));

const divNumber = (m, n) => {
  return m / n;
};
console.log(divNumber(88, 4));

const mulNumber = (q, g, m) => {
  return q * g * m;
};

console.log(mulNumber(10, 33, 2));
