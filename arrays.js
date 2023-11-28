//Array allows you to keep things or the items in an organized format.
//Index represents the value location of the item.

const fruits = ["banans", "oranges", "Pear", "watermelon", "apple", "pawpaw"];

console.log(fruits[3]);

//.push adds elements to the end of the array

fruits.push("kiwi", "strawberry", "tomatoes");
console.log(fruits);

//.slice() returns the portion of the array in a new array.

// console.log(fruits.splice(2, 4));
// console.log(fruits.splice(0, 5));

//.indexOf()
console.log(fruits.indexOf("pawpaw"));

//.length
console.log(fruits.length);

//Objects: are a type of variable, quite similar to aarays but they have something called key-value pairs

const person = {
  name: "Lenardo",
  shirt: "white",
};

console.log(person.name);
console.log(person["shirt"]);

person.phone = "1 - 222 - 333 - 6678";
console.log(person.phone);
console.log(person);

const introducer = (name, shirt, color) => {
  const person = {
    name: name,
    shirt: shirt,
    color: color,
    assets: 100000,
    liabilities: 50000,
    networth: function () {
      return this.assets - this.liabilities;
    },
  };
  const intro = `Hi!, My name is ${person.name} and the color of my shirt is ${
    person.color
  }, the brand of shirt is ${
    person.shirt
  } and my networth is $${person.networth()} USD`;

  return intro;
};

console.log(introducer("Oluwaseun", "Valentino", "Red"));
