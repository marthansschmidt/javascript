// console.log("start");

// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(square);
// numbers.forEach(display);

// function double(element, index, array){
//     array[index] = element * 2;
// }

// function triple(element, index, array){
//     array[index] = element * 3;
// }

// function square(element, index, array){
//     array[index] = element * element;
// }

// function display(element){
//     console.log(element);
// }

// let fruits = ["apple", "orange", "banana", "coconut"];

// fruits.forEach(capitalize);
// fruits.forEach(display);

// function capitalize(element, index, array){
//   array[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
// }

// function display(element){
//   console.log(element);
// }

// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(square);
// const cubes = numbers.map(cube);

// console.log(numbers);

// function square(element){
//     return Math.pow(element, 2)
// }

// const students = ["Spongebob", "Patric", "Squidward", "Sandy"];
// const studentsUpper = students.map(upperCase);

// console.log(studentsUpper);

// function upperCase(element) {
//   return element.toUpperCase();
// }
// const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
// const formattedDates = dates.map(formatDates);

// console.log(formattedDates);

// function formatDates(element){
//     const parts = element.split("-");
//     return `${parts[2]}.${parts[1]}.${parts[0]}`;
// }
// let numbers = [1, 2, 3, 4, 5, 6, 7];
// let evenNums = numbers.filter(isEven);

// console.log(evenNums);

// function isEven(element){
//     return element % 2 === 0;
// }

// function isOdd(element){
//     return element % 2 !==0;
// }
// const ages = [16, 17, 18, 18, 20, 60];
// const adults = ages.filter(isAdults)

// function isAdult(element) {
//   return element >= 18;
// }

// const only18 = ages.filter(isAdult);
// console.log(only18);

// const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];

// function getShortWords(element) {
//   return element.length <= 6;
// }

// function getShortWords(element) {
//   return element.length > 6;
// }

// const sixLetterWords = words.filter(getShortWords);
// console.log(sixLetterWords);

// const prices = [5, 30, 10, 25, 15, 20];

// const total = prices.reduce();

// console.log(`$${total.toFixed(2)}`);

// function sum(accumulator, element){
//     return accumulator + element;
// }

// const grades = [75, 50, 90, 80, 65, 95];

// const maximum = grades.reduce(getMax);
// const minimum = grades.reduce(getMin);

// console.log(maximum);
// console.log(minimum);

// function getMax(accumulator, element) {
//   return Math.max(accumulator, element);
// }

// function getMin(accumulator, element) {
//   return Math.min(accumulator, element);
// }

// function hello(){
//     console.log("Hello");
// }

// const hello = function(){
//     console.log("Hello");
// }

// hello();

// setTimeout(function,(){
//     console.log("Hello");
// }, 3000); 

// const numbers = [1, 2, 3, 4, 5, 6];
// const squares = numbers.map(function square (element){
//     return Math.pow(element, 2);
// });

// const squares = numbers.map(function square (element){
//     return Math.pow(element, 3);   
// });

// function square (element){
//     return Math.pow(element, 2);
// }

// function hello(){
//     console.log("Hello");
// }

// const hello = (name) => {console.log(`Hello ${name}`)
//                          console.log(`Ỳou are ${age} years old`)};

// hello("Bro", 25);

// setTimeout( () => console.log("Hello"), 3000);

// const numbers = [1, 2, 3, 4, 5, 6];

// const squares = numbers.map((element) => Math.pow(element, 2));

// console.log(cubes)

// const person1 = {
//   firstName: "Spongebob",
//   lastName: "Squarepants",
//   age: 30,
//   isEmployed: true,
//   facFood: "hamburgers";
//   sayHello: function(){console.log(`Hi! I am ${this.facFood}`},
//     console.log("Hi! I'm Spongebob!");
//   },
//   eat: function() {
//     console.log("I am eating a Krabby Patty");
//   }

// const person2 = {
//   firstName: "Patrick",
//   lastName: "Star",
//   age: 42,
//   isEmployed: false,
//   sayHello: function() {
//     console.log("Hey, I'm Patrick...");
//   },
//   eat: () => {
//     console.log("I am eating a Krabby Patty");
//   }
// };


// // console.log(person1.firstName);
// // console.log(person1.lastName);
// // console.log(person1.age);
// // console.log(person1.isEmployed);

// // console.log(person2.firstName);
// // console.log(person2.lastName);
// // console.log(person2.age);
// // console.log(person2.isEmployed);

// person1.sayHello();
// person2.sayHello();

let shoppingCart = [
  { name: "õun", quantity: 4 },
  { name: "banaan", quantity: 2 },
  { name: "apelsin", quantity: 5 },
  { name: "piim", quantity: 1 },
  { name: "leib", quantity: 2 }
];

const totalQuantity = shoppingCart.reduce((sum, item) => sum + item.quantity, 0);
console.log("Koguarv:", totalQuantity);

shoppingCart.push({ name: "yogurt", quantity: 3 });
console.log("Pärast lisamist:", shoppingCart);

const apple = shoppingCart.find(item => item.name === "õun");
if (apple) {
  apple.quantity += 3;
} else {
  shoppingCart.push({ name: "õun", quantity: 3 });
}
console.log("Pärast õun uuendamist:", shoppingCart);

shoppingCart = shoppingCart.filter(item => item.name !== "banaan");
console.log("Pärast banaan eemaldamist:", shoppingCart);

const itemNames = shoppingCart.map(item => item.name);
console.log("Toodete nimed:", itemNames);

const hasMilk = shoppingCart.some(item => item.name === "piim");
console.log("Kas milk on olemas?", hasMilk);

shoppingCart.sort((a, b) => b.quantity - a.quantity);
console.log("Sorteeritud:", shoppingCart);

shoppingCart.sort((a, b) => b.quantity - a.quantity); 
console.log("Lõplik ostukorv:", shoppingCart);
