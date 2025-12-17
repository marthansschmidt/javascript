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

// const fruits = [
//     { name: "Apple", color: "Red", calories: 95},
//     { name: "Orange", color: "Orange", calories: 62},
//     { name: "Banana", color: "Yellow", calories: 105},
//     { name: "Grapes", color: "Purple", calories: 62},
//     { name: "Strawberry", color: "Red", calories: 4}
// ];

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

// const maxFruit = fruits.reduce((max, fruit) => (fruit.calories > max.calories ? fruit : max), fruits[0]);

// const minFruit = fruits.reduce((min, fruit) => (fruit.calories < min.calories ? fruit : min), fruits[0]);

// console.log(minFruit);

// console.log(maxFruit);

// function calculate() {
//   let x = prompt("x:");
//   let y = prompt("y:");

//   if (isNaN(x) || isNaN(y) || x === "" || y === "") {
//     alert("The input is not correct. Please enter two numbers.");
//     calculate();
//     return;
//   }

//   x = Number(x);
//   y = Number(y);

//   let operation = prompt("Operation (a=add, s=subtract, m=multiply, d=divide, e=exponent, r=mod):");

//   let symbol;
//   let result;

//   switch (operation) {
//     case "a":
//       symbol = "+";
//       result = x + y;
//       break;
//     case "s":
//       symbol = "-";
//       result = x - y;
//       break;
//     case "m":
//       symbol = "*";
//       result = x * y;
//       break;
//     case "d":
//       symbol = "/";
//       result = x / y;
//       break;
//     case "e":
//       symbol = "**";
//       result = x ** y;
//       break;
//     case "r":
//       symbol = "%";
//       result = x % y;
//       break;
//     default:
//       alert("Unknown operation");
//       return;
//   }

//   alert(`${x} ${symbol} ${y} = ${result}`);
// }

// calculate();

// var a = 10;
// var b = 20;

// [a, b] = [b, a];

// console.log("a =", a);
// console.log("b =", b);

// function rollDice() {
//   const numOfDiceInput = document.getElementById("numDice");
//   const resultDice = document.getElementById("resultDice");
//   const diceSumEl = document.getElementById("diceResult");
//   const diceImage = document.getElementById("diceImage");

//   let numOfDice = Number(numOfDiceInput.value);


//   if (!numOfDice || numOfDice < 1) {
//     alert("Palun sisesta täringute arv alates 1-st.");
//     return;
//   }

//   const values = [];
//   const images = [];
//   let sum = 0;

//   const minNum = 1;
//   const maxNum = 6;

//   for (let i = 0; i < numOfDice; i++) {
//     const value = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
//     values.push(value);
//     sum += value;
//     images.push(`<img src="./taringud/taring${value}.png" alt="dice ${value}">`);
//   }

 
//   resultDice.textContent = `dice: ${values.join(", ")}`;


//   diceSumEl.textContent = `sum: ${sum}`;

  
//   diceImage.innerHTML = images.join("");
// }

// function resetDice() {
//   document.getElementById("numDice").value = 1;
//   document.getElementById("resultDice").textContent = "";
//   document.getElementById("diceResult").textContent = "";
//   document.getElementById("diceImage").innerHTML = "";
// }

// function kontrolliVanust() {
//   let vanus = prompt("Sisesta oma vanus:");

//   if (vanus === "" || isNaN(vanus)) {
//     alert("Sisend pole korrektne. Palun sisesta arv.");
//     kontrolliVanust();
//     return;
//   }

//   vanus = Number(vanus);

//   if (vanus >= 7 && vanus <= 16) {
//     alert("Sa oled põhikooli õpilane ja sööd kell 10.");
//   } else if (vanus >= 17 && vanus <= 20) {
//     alert("Sa oled gümnaasiumi õpilane ja sööd kell 11.");
//   } else if (vanus > 20) {
//     alert("Sa oled täiskasvanu ja sööd kell 12.");
//   } else {
//     alert("Vanus on väiksem kui 7 — sellele tingimusele pole söögiinfot.");
//   }
// }

// kontrolliVanust();

// function getWords(str) {
//   if (!str) return [];

//   return str.match(/([A-Z]+(?![a-z])|[A-Z]?[a-z]+)/g) || [];
// }

// function camelToTitleCase(str) {
//   const words = getWords(str);

//   if (words.length === 0) {
//     return "";
//   }

//   words[0] = words[0][0].toUpperCase() + words[0].slice(1);

//   return words.join(" ");
// }

// console.log(camelToTitleCase("Soe sai"));          
// console.log(camelToTitleCase("MagusPAGARIKODA"));  
// console.log(camelToTitleCase("SEE ylesanne RUULIB"));    
// console.log(camelToTitleCase("SiitSeeAlgab"));         
// console.log(camelToTitleCase("")); 

// function numberGuessingGame() {
//   const min = 1;
//   const max = 100;

//   const secret = Math.floor(Math.random() * (max - min + 1)) + min;

//   let attempts = 10; 

//   alert("I am thinking of a number between 1 and 100.\nYou have 10 attempts!");

//   while (attempts > 0) {
//     const guess = prompt(`Enter your guess (${attempts} attempts left):`);

//     if (guess === "" || isNaN(guess)) {
//       alert("Invalid input. Please enter a number.");
//       continue;
//     }

//     const num = Number(guess);

//     if (num === secret) {
//       alert(`Correct! The number was ${secret}.`);
//       return; 
//     } else if (num > secret) {
//       alert("Too high!");
//     } else if (num < secret) {
//       alert("Too low!");
//     }

//     attempts--;
//   }

//   alert(`Out of attempts! The number was ${secret}.`);
// }

// numberGuessingGame();

// function celsiusToFahrenheit(c) {
//   return (c * 9 / 5) + 32;
// }

// function fahrenheitToCelsius(f) {
//   return (f - 32) * 5 / 9;
// }

// function celsiusToKelvin(c) {
//   return c + 273.15;
// }

// function kelvinToCelsius(k) {
//   return k - 273.15;
// }

// function temperatureConverter() {
//   let value = prompt("Enter temperature value:");
//   let scale = prompt("Enter scale (C, F, or K):").toUpperCase();

//   if (value === "" || isNaN(value)) {
//     alert("Invalid temperature input.");
//     return;
//   }

//   value = Number(value);

//   switch (scale) {
//     case "C":
//       alert(
//         `Celsius: ${value}\n` +
//         `Fahrenheit: ${celsiusToFahrenheit(value).toFixed(2)}\n` +
//         `Kelvin: ${celsiusToKelvin(value).toFixed(2)}`
//       );
//       break;

//     case "F":
//       const cFromF = fahrenheitToCelsius(value);
//       alert(
//         `Fahrenheit: ${value}\n` +
//         `Celsius: ${cFromF.toFixed(2)}\n` +
//         `Kelvin: ${celsiusToKelvin(cFromF).toFixed(2)}`
//       );
//       break;

//     case "K":
//       const cFromK = kelvinToCelsius(value);
//       alert(
//         `Kelvin: ${value}\n` +
//         `Celsius: ${cFromK.toFixed(2)}\n` +
//         `Fahrenheit: ${celsiusToFahrenheit(cFromK).toFixed(2)}`
//       );
//       break;

//     default:
//       alert("Unknown scale. Use C, F, or K.");
//   }
// }

// temperatureConverter();

// let shoppingCart = [
//   { name: "õun", quantity: 4 },
//   { name: "banaan", quantity: 2 },
//   { name: "apelsin", quantity: 5 },
//   { name: "piim", quantity: 1 },
//   { name: "sai", quantity: 2 }
// ];

// const totalQuantity = shoppingCart.reduce((Sum, item) => Sum + item.quantity, 0);
// console.log("kogus", totalQuantity);

// shoppingCart.push({ name: "jogurt", quantity: 3});
// console.log("lisatud jogurt", shoppingCart);

// const õunItem = shoppingCart.find(item => item.name === "õun");
// if (õunItem){
//   õunItem.quantity += 3;
//   }
//   else{
//     shoppingCart.push({name: "õun", quantity: 3});
//   }
// console.log("uuendatud õuna kogus:", shoppingCart);

// const hasÕun = shoppingCart.some(item => item.name === "õun");
// console.log("kas õun on olemas", hasÕun);

// shoppingCart = shoppingCart.filter(item => item.name !== "banaan");
// console.log("eemaldatud banaan", shoppingCart);

// const itemNames = shoppingCart.map(item => item.name);
// console.log("tootenimed", itemNames);

// const hasPiim = shoppingCart.some(item => item.name === "piim");
// console.log("kas piim on olemas", hasPiim);

// shoppingCart.sort((a,b) => b.quantity- a.quantity);
// console.log("tooted kahanevas järjekorras", shoppingCart);


// const scores = [45, 88, 32, 99, 74, 50, 61, 92, 39];
// let currentScores = [...scores]; 

// const scoreList = document.getElementById("scoreList");z
// const result = document.getElementById("result");

// const kpiCount = document.getElementById("kpi-count");
// const kpiAvg = document.getElementById("kpi-avg");

// const countInput = document.getElementById("count");

// function renderScores() {
//   scoreList.innerHTML = "";
//   currentScores.forEach((score) => {
//     const item = document.createElement("p");
//     item.textContent = score;
//     scoreList.appendChild(item);
//   });

//   kpiCount.textContent = currentScores.length;
// }

// function addBonus() {
//   currentScores = currentScores.map((score) => score + 5);
//   renderScores();
// }

// function filterByThreshold() {
//   currentScores = currentScores.filter((score) => score >= 60);
//   renderScores();
// }

// function showAverage() {
//   if (currentScores.length === 0) {
//     kpiAvg.textContent = "–";
//     return;
//   }

//   const sum = currentScores.reduce((acc, s) => acc + s, 0);
//   const avg = (sum / currentScores.length).toFixed(1);

//   kpiAvg.textContent = avg;
// }

// function resetAll() {
//   currentScores = [...scores];
//   kpiAvg.textContent = "–";
//   renderScores();
// }

// function makeRandom() {
//   const count = Number(countInput.value);

//   currentScores = Array.from({ length: count }, () =>
//     Math.floor(Math.random() * 101)
//   );

//   kpiAvg.textContent = "–";
//   renderScores();
// }

// function chainAverage() {
//   const count = Number(countInput.value);

//   currentScores = Array.from({ length: count }, () =>
//     Math.floor(Math.random() * 101)
//   )
//     .map((n) => n + 5);

//   renderScores();
//   showAverage();
// }

// renderScores();

// document.title = "JavaScript Classes and Objects";

// console.log(document);

// const username = "Marthan";
// const welcomeMSG = document.getElementById("welcomeMSG");
// welcomeMSG.textContent +=  username === "" ? `Guest` : username;

// const myHeading = document.getElementById("WELCOMMEN");
// myHeading.style.backgroundColor = "#ffcc00";

// const fruits = document.getElementsByClassName("fruits");

// fruits[0].style.color = "red";

// const h4Elements = document.getElementsByTagName("h4");
// const liElements = document.getElementsByTagName("li");

// for(let h4Element of h4Elements){
//     h4Element.style.background = "yellow";
// }

// for(let liElement of liElements){
//     liElement.style.backgroundColor = "lightgreen";
// } 

// h4Elements[0].style.backgroundColor = "lightblue";

// Array.from(h4Elements).forEach((h4Element) => {
//     h4Element.style.backgroundColor = "lightgreen";
// });

// const element = document.querySelector(".fruits");

// element.style.backgroundColor = "lightcoral";

// const foods = document.querySelectorAll("li");

// foods[2].style.backgroundColor = "yellow";

// foods.forEach((food) => {
//   food.style.backgroundColor = "yellow";
// });

// const element = document.getElementById("magustoidud");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";

// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach((ulElement) => {
//   const firstChild = ulElement.firstElementChild;
//   firstChild.style.backgroundColor = "yellow";
// });

// const element = document.getElementById("magustoidud");
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = "yellow";

// const element = document.getElementById("juurviljad");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "yellow";

// const element = document.getElementById("magustoidud");
// const children = element.children;

// Array.from(children).forEach((child) => {
//   child.style.backgroundColor = "yellow";
// });

// const newH1 = document.createElement("h1");
// newH1.textContent = "mulle meeldib pitsa!";
// newH1.id = "myH1";
// newH1.style.color = "tomato";
// newH1.style.textAlign = "center";

// document.body.appendChild(newH1);

// document.getElementById("box1").appendChild(newH1);
// ocument.getElementById("box1").prepend(newH1);

// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box3);

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[2]);

// document.getElementById("box1").removeChild(newH1);

// const myBox = document.getElementById("myBox");
// const myButton = document.getElementById("myButton");

// function changeColor(event) {
//   event.currentTarget.style.backgroundColor = "lightblue";
//   event.currentTarget.textContent = "Värv muudetud!";
// }

// myButton.addEventListener("mouseover", event => {
//   changeColor(event);
// });

// myButton.addEventListener("mouseout", event => {
//   event.currentTarget.style.backgroundColor = "lightgray";
//   event.currentTarget.textContent = "Liigu hiirega siia!";
// });

// const box = document.getElementById("myBox");

// document.addEventListener("keydown", function (event) {
//   box.style.backgroundColor = "lightblue";
//   box.textContent = "Vajutatud klahv: " + event.key;
// });

// const myBox = document.getElementById("myBox");
// const moveAmount = 10;

// document.addEventListener("keydown", function (event) {
//   const boxRect = myBox.getBoundingClientRect();

//   switch (event.key) {
//     case "ArrowUp":
//       myBox.style.top = Math.max(0, boxRect.top - moveAmount) + "px";
//       break;
//     case "ArrowDown":
//       myBox.style.top = Math.min(window.innerHeight - boxRect.height, boxRect.top + moveAmount) + "px";
//       break;
//     case "ArrowLeft":
//       myBox.style.left = Math.max(0, boxRect.left - moveAmount) + "px";
//       break;
//     case "ArrowRight":
//       myBox.style.left = Math.min(window.innerWidth - boxRect.width, boxRect.left + moveAmount) + "px";
//       break;
//   }
// });

// let buttons = document.querySelectorAll(".myButton");

// buttons.forEach((button) => {
//     button.style.backgroundColor = "lightgray";
//     button.textContent = "😂";

// });

// buttons.forEach((button) => {
//     button.addEventListener("click", event => {
//         event.target.style.backgroundColor = "yellow";
//         event.target.textContent = "😎";
//     });
// });

// buttons.forEach((button) => {
//     button.addEventListener("mouseover", event => {
//         event.target.style.backgroundColor = "lightgray";
//         event.target.textContent = "😂";
//     });

//     buttons.forEach((button) => {
//     button.addEventListener("mouseover", event => {
//         event.target.style.backgroundColor = "lightgray";
//         event.target.textContent = "😂";
//     });
// });
// });

// const newButton = document.createElement("button");
// newButton.textContent = "Button 5";
// newButton.classList = "myButton";
// document.body.appendChild(newButton);
