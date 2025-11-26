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


class Person {

    constructor(firstName, lastName, age) {
        this.firstName = firstName; 
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName) {
        if (typeof newFirstName === "string" && newFirstName.trim().length > 0) {
            this._firstName = newFirstName;
        } else {
            console.error("firstName must be a non-empty string");
        }
    }

    set lastName(newLastName) {
        if (typeof newLastName === "string" && newLastName.trim().length > 0) {
            this._lastName = newLastName;
        } else {
            console.error("lastName must be a non-empty string");
        }
    }

    set age(newAge) {
        if (typeof newAge === "number" && newAge > 0) {
            this._age = newAge;
        } else {
            console.error("age must be a positive number");
        }
    }


    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get age() {
        return this._age;
    }
}

const person = new Person("Spongebob", "Squarepants", 69);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
