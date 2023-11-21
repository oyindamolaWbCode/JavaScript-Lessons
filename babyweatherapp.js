//Conditionals
//Conditionals are used to comapre variables values and/or data types. They always return true or false
//Conditional operators
// ==. ===, <, <=, >=, !=, !==

let Weather = "rainy";

if (Weather == "rainy") {
  console.log("Grab your Umbrella ☔");
} else {
  console.log("Wear your sunglasses 😎");
}

//Functions
//Function is a block of code designed to perform a particular task and is executed when something calls it.

const sayMyName = () => {
  console.log("Maria Oyindamola");
};

sayMyName();

//Function Arguement are the values received by the function when itis called, they behave as a variables, however they only live within the fuction and cannot be accessed outside.

const sayMyNameAgain = (name) => {
  console.log(name);
};

sayMyNameAgain("Oluwapelumi");

const greeting = (name) => {
  console.log(`Hi ${name}, Nice to meet you.`);
};

greeting("Oluwasemilore");

const sum = (a, b) => {
  return a + b;
};

console.log(sum(10, 15));
