'use strict';

// OOP(Object Oriented Programming)
// Classes and Instance (Traditional OOP)
// Class => Ini dapat kita anggap sebagai Blueprint, Yang kemudian dapat digunakan untuk membuat object baru berdasarkan aturan yang dijelaskan di class dan class bukanlah object.
// Instance => Object nyata yang bisa digunakan dalam kode kita, yang dibuat dari sebuah class.

/* 
The 4 Fundamental OOP Priciples
1. Abstraction => pada dasarnya berarti mengabaikan atau menyembunyikan detail yang tidak penting.
2. Encapsulation => pada dasarnya berarti merahasiakan beberapa properti dan metode di dalam kelas sehingga tidak dapat diakses dari luar kelas.
3. Inheritance => pada dasarnya membuat semua properti & methode dari class tertentu tersedia untuk child class, yand tentu saja kemudian membentuk hierarki antara kedua class tersebut. dan tujuan adalah untuk menggunakan kembali logika yang umum untuk kedua class.
4. Polymorphism => pada dasarnya berarti bahwa child class dapat menimpa method yang diwarisi dari parent class.
*/

// OOP in Javascript: Prototypes
/* Dalam javascript kita memiliki sesuatu yang disebut prototype dan semua object pada JS ditautkan ke 
object prototype tertentu. jadi bisa kita katakan bahwa setiap object memiliki prototype. Object prototype 
berisi metode dan properti bahwa semua object yang terkait dgn prototype itu dapat mengakses dan 
menggunakan, dan prilaku ini disebut prototype inheritance.
*/

// 3 ways of implementing prototypal inheritance in javascript: Constructor functions, ES6 classes, Object.create()

// Constructor functions and the new operator
// Arrow function tidak bisa untuk constructor functions karena tidak memiliki this

// const Person = function (firstName, birthYear) {
//   // instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never do this cuz ini akan membuat salinan dan bad performance
//   // Better menggunakan prototype inheritance
//   this.calcAge = function () {
//       console.log(2037 - this.birthYear);
//   }
// };

// const handika = new Person('Handika', 2004);
// console.log(handika);
// console.log(handika instanceof Person); // true

// // // Static Methods
// Person.hey = function () {
//   console.log('Hey there 👋');
//   console.log(this);
// };
// Person.hey();
// handika.hey(); // error

// BTS new keyword
// 1. New empty {} created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

/*
Di JavaScript, kata kunci new digunakan bersamaan dengan fungsi konstruktor untuk membuat instance baru 
dari sebuah objek. Ketika Anda menggunakan new sebelum memanggil sebuah fungsi, itu menunjukkan kepada 
JavaScript bahwa Anda ingin membuat sebuah objek baru yang dibuat berdasarkan fungsi tersebut.

Di sini, Person adalah sebuah fungsi konstruktor yang akan membuat objek dengan properti firtsName dan 
birthYear saat dipanggil dengan new. new menginstruksikan JavaScript untuk membuat sebuah objek baru dan 
menghubungkannya dengan fungsi konstruktor yang diberikan, sehingga setiap kali Anda memanggil new Person
(...), Anda membuat objek baru dengan properti yang sesuai.
*/

// Prototypes
/*
Setiap function dlm Javascript secara otomatis memiliki properti yg disebut prototype.
*/
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// handika.calcAge();

// console.log(handika.__proto__);
// console.log(handika.__proto__ === Person.prototype); // true

// console.log(Person.prototype.isPrototypeOf(handika)); // true
// console.log(Person.prototype.isPrototypeOf(Person)); // false

// // set property
// // property ini tidak berada di object yang dibuat melainkan didalam prototype tetapi object tersebut dapat mengakses property tersebut.
// Person.prototype.species = 'Homo Sapiens';
// console.log(handika.species);
// console.log(handika.hasOwnProperty('firstName')); // true
// console.log(handika.hasOwnProperty('species')); // false

// console.log(handika.__proto__);
// // Object.prototype (top of prototype chain)
// console.log(handika.__proto__.__proto__);
// console.log(handika.__proto__.__proto__.__proto__); // null

// console.dir(Person.prototype.constructor); // return diri sendiri

// const arr = [3, 6, 5, 6, 4, 9, 9, 4]; // new Array = []
// console.log(arr.__proto__);
// console.log(arr.__proto__ == Array.prototype); // true

// // Object.prototype (top of prototype chain)
// console.log(arr.__proto__.__proto__);

// // menambah method array pada object prototype
// // tetapi jangan dibiasakan melakukan ini
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`"${this.make}" going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`"${this.make}" going at ${this.speed} km/h`);
// };

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// bmw.accelerate();
// bmw.brake();
// mercedes.accelerate();
// mercedes.brake();

//// ES6 Classes => ini hanyalah syntatic sugar untuk constructor functions
// class expression
// const PersonCl = class{}

// class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Instance Methods
//   // ini akan menjadi bagian prototype object bukan dalam object itu sendiri
//   calcAge() {
//     console.log(2024 - this.birthYear);
//   }

//   get age() {
//     return 2024 - this.birthYear;
//   }

//   // Set property yang sudah ada.
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullname = name;
//     else alert(`${name} is not full name!`);
//   }

//   get fullName() {
//     return this._fullname;
//   }

//   // Static Methods
//   static hey() {
//     console.log("Hey there 👋");
//     console.log(this);
//   }
// }

// const ridho = new PersonCl('Ridho Syam', 1999);
// console.log(ridho);
// ridho.calcAge();
// console.log(ridho.age);
// console.log(ridho.__proto__ === PersonCl.prototype);

// PersonCl.hey();

// perlu diingat
// 1. Classes aer not Hoisted
// 2. classes are first class citizen(function)
// 3. Classes are executed in strict mode even we not active strict mode

/* 
Setters & Getters => pada dasarnya adalah fungsi mendapatkan dan menetapkan nilai seperti namanya,
tetapi diluarnya masih terlihat seperti properti biasa.
*/

// const account = {
//   owner: 'Handika',
//   movements: [26, 99, 75, 78],

//   get latest() {
//     return this.movements.at(-1);
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// // get
// console.log(account.latest);

// // set
// account.latest = 23;
// console.log(account.movements);

// // object.create()

// const PersonProto = {
//   /* perlu di ingat fungsi ini tidak ada hubungannya dgn fungsi konstraktor yg kita lihat sebelumnya.
//    ini hanyalah cara manual untuk menginisialisasi object. dan nama fungsi ini bisa apa saja tidak hanya init.*/
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },

//   calcAge() {
//     console.log(2024 - this.birthYear);
//   }
// }

// const steven = Object.create(PersonProto);
// steven.init("Steven", 2004);
// steven.calcAge();

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  acceleration() {
    this.speed += 10;
    console.log(`"${this.make}" going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`"${this.make}" going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl("Ford", 120);
console.log(ford.speedUS);
ford.acceleration()
ford.acceleration()
ford.brake()
ford.speedUS = 50;
console.log(ford);