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
