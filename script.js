// constructor

// function Car(make, model, year, color){
//     this.make = make,
//     this.model = model,
//     this.year = year,
//     this.color = color
//     this.drive = function(){console.log(`You drive the ${this.model}`)}
//     }

// const car1 = new Car("Ford", "Mustang", 2024, "red")
// const car2 = new Car("Chevrolet", "Camaro", 2025, "blue")
// const car3 = new Car("Dodge", "Charger", 2026, "silver")

// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.color);

// console.log(car2.make);
// console.log(car2.model);
// console.log(car2.year);
// console.log(car2.color);

// console.log(car3.make);
// console.log(car3.model);
// console.log(car3.year);
// console.log(car3.color);

// class

// function Product(name, price) {
//     this.name = name;
//     this.price = price;

//     this.displayProduct = function () {
//         console.log(`Product: ${this.name}`);
//         console.log(`Price: ${this.price.toFixed(2)}`);
//     };

//     this.calculateTotal = function (salesTax) {
//         return this.price + (this.price * salesTax);
//     };
// }

// const salesTax = 0.05;

// const product1 = new Product("Shirt", 19.99);
// const product2 = new Product("Pants", 59.99);
// const product3 = new Product("Underwear", 99.99);

// product3.displayProduct();

// const total = product3.calculateTotal(salesTax);
// console.log(`Total Price (with tax): $${total.toFixed(2)}`);


// static

// class MathUtil{
//     static PI = 3.14159;

//     static getDiameter(radius){
//         return radius * 2;
//     }
//         static getCircumference(radius){
//         return 2 * this.PI * radius;
//     }
//     static getArea(radius){
//         return this.PI * radius * radius;
//     }
// }


// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getCircumference(10));
// console.log(MathUtil.getArea(10));

// class User{
//     static userCount = 0;

//     constructor(){
//         this.username = username;
//         User.userCount++;
//     }

//     static getUserCount(){
//         conbsole.log(`there are ${User.userCount} users online`);
//     }

//     sayHello(){
//         console.log(`Hello, my username is ${this.username}`);
//     }
// }
// const user1 = new User("Spongebob");
// const user2 = new User("Patric");
// const user3 = new User("Sandy");

// user1.sayHello();
// user2.sayHello();
// user3.sayHello();

// inheritance

// class Animal{
//     alive = true;

//     eat(){
//         console.log(`This ${this.name} is eating`);
//     }
//     sleep(){
//         console.log(`This ${this.name} is sleeping`);
//     }
// }
// class Rabbit extends Animal{
//     name = "rabbit";

//     run(){
//         console.lof(`This ${this.name} is running`);
//     }
// }
// class Fish extends Animal{
//     name = "fish";

//     swim(){
//         console.lof(`This ${this.name} is swimming`);
//     }
// }
// class Hawk extends Animal{
//     name = "hawk";

//     fly(){
//         console.lof(`This ${this.name} is flying`);
//     }
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();

// rabbit.alive = true;

// console.log(rabbit.alive);
// rabbit.eat();
// rabbit.sleep();
// rabbit.run();

// super

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     makeSound() {
//         console.log(`${this.name} makes a sound.`);
//     }
// }

// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name); // kutsub Animal constructori
//         this.breed = breed;
//     }

//     makeSound() {
//         super.makeSound(); // kutsub Animal.makeSound()
//         console.log(`${this.name} barks.`);
//     }
// }

// const dog = new Dog("Rex", "German Shepherd");
// dog.makeSound();

// getter

// setter

// class Rectangle {

//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     set width(newWidth) {
//         if (typeof newWidth === "number" && newWidth > 0) {
//             this._width = newWidth;
//         } else {
//             console.error("Width must be a positive number");
//         }
//     }

//     set height(newHeight) {
//         if (typeof newHeight === "number" && newHeight > 0) {
//             this._height = newHeight;
//         } else {
//             console.error("Height must be a positive number");
//         }
//     }

//     get width() {
//         return this._width;
//     }

//     get height() {
//         return this._height;
//     }
// }

// const rectangle = new Rectangle(10000000, "pizza");

// console.log(rectangle.width);
// console.log(rectangle.height);


// class Person {

//     constructor(firstName, lastName, age) {
//         this.firstName = firstName; 
//         this.lastName = lastName;
//         this.age = age;
//     }

//     set firstName(newFirstName) {
//         if (typeof newFirstName === "string" && newFirstName.trim().length > 0) {
//             this._firstName = newFirstName;
//         } else {
//             console.error("firstName must be a non-empty string");
//         }
//     }

//     set lastName(newLastName) {
//         if (typeof newLastName === "string" && newLastName.trim().length > 0) {
//             this._lastName = newLastName;
//         } else {
//             console.error("lastName must be a non-empty string");
//         }
//     }

//     set age(newAge) {
//         if (typeof newAge === "number" && newAge > 0) {
//             this._age = newAge;
//         } else {
//             console.error("age must be a positive number");
//         }
//     }


//     get firstName() {
//         return this._firstName;
//     }

//     get lastName() {
//         return this._lastName;
//     }

//     get age() {
//         return this._age;
//     }
// }

// const person = new Person("Spongebob", "Squarepants", 69);

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);

// destructoring

// let a = 1
// let b = 2

// [a, b] = [b, a];

// console.log(a);
// console.log(b);

// const colors = ["red", "green", "blue", "black", "white"];

// [colors[0], colors[4]] = [colors[4], colors[0]];

// console.log(colors);

//  const colors = ["red", "green", "blue", "black", "white"];

//  const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

//  console.log(firstColor);
//  console.log(secondColor);
//  console.log(thirdColor);
//  console.log(extraColors);


//  const person1 = {
//     firstName: "Spongebob",
//     lastName: "Squarepants",
//     age: 69,
//     job: "fry cook"
//  }
//  const person2 = {
//     firstName: "Patrick",
//     lastName: "Star ",
//     age: 34,

//  }
//    const {firstName, lastName, age, job} = person2;

//    console.log(firstName);
//    console.log(lastName);
//    console.log(age);

// function displayPerson({firstName, lastName, age, job="unemployed"}){
//     console.log(`First Name: ${firstName}`);
//     console.log(`Last Name: ${lastName}`);
//     console.log(`Age: ${age}`);
//     console.log(`Job: ${job}`);
//    }

//    displayPerson(person1);
//    displayPerson(person2);
   
// nested objects

// const person = {
//     fullName: "Spongebob",
//     age: 30,
//     isStudent: true,
//     hobbies: ["cooking", "joking", "karate"],
//     address: {
//         street: "123 Ocean Ave",
//         city: "Bikini Bottom",
//         country: "Int. Water"
//     }
// }

// // console.log(person.fullName);
// // console.log(person.age);
// // console.log(person.isStudent);
// // console.log(person.hobbies[2]);
// // console.log(person.address.street);

// for(const property in person. address){
//     console.log(person.address[property]);
// }

// class Address{
//     constructor(street, city, country){
//         this.street = street;
//         this.city = city;
//         this.country = country;
//     }
// }

// class Person{
//     constructor(name, age, ...address){
//         this.name = name;
//         this.age = age;
//         this.address = new Address(...address);
//     }
// }

// const person1 = new Person("Spongebob", 30, "123 Ocean Ave", "Bikini Bottom", "Int. Water");

// const person2 = new Person("Patrick", 34, "456 Rock St", "Bikini Bottom", "Int. Water");

// const person3 = new Person("Sandy", 28, "789 Tree Dome", "Bikini Bottom", "Int. Water");

// console.log(person1.address);

const fruits = [
    { name: "Apple", color: "Red", calories: 95},
    { name: "Orange", color: "Orange", calories: 62},
    { name: "Banana", color: "Yellow", calories: 105},
    { name: "Grapes", color: "Purple", calories: 62},
    { name: "Strawberry", color: "Red", calories: 4}
];

// console.log(fruits[2].calories);

// fruits.push({name: "Blueberry", color: "Blue", calories: 85});

// const fruitNames = fruits.map(fruit => fruit.name);
// const fruitColors = fruits.map(fruit => fruit.color);
// const fruitCalories = fruits.map(fruit => fruit.calories);

// console.log(fruitNames);
// console.log(fruitColors);
// console.log(fruitCalories);

// const yellowFruits = fruits.filter(fruit => fruit.color === "Yellow");

// const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

// const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

// console.log(highCalFruits);

// console.log(lowCalFruits);

// console.log(yellowFruits);

const maxFruit = fruits.reduce((max, fruit) => (fruit.calories > max.calories ? fruit : max), fruits[0]);

const minFruit = fruits.reduce((min, fruit) => (fruit.calories < min.calories ? fruit : min), fruits[0]);

console.log(minFruit);

console.log(maxFruit);