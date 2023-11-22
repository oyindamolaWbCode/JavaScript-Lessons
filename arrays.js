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
