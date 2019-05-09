/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. global - this without an object or function to refer to, instead refers to the window/console/the entire javascript language
* 2. implicit binding - this applies to any function or object in which it is contained.  If this is nested, it refers to the top-level object or function in which it is nested
* 3. New binding - when used in a constructor function, this refers to the function.  When a new class or object is created, because this is in the class contructor, it applies to each class as its called
* 4. explicit binding - this can be overridden with call, apply, and bind, and the properties of one constructed class can be forced onto another class
*
* write out a code example of each explanation above
*/


"use strict"

// Principle 1

// code example for Window Binding
console.log(this)

// Principle 2

// code example for Implicit Binding
const myObj = {
    add: function () {
        console.log(this)
    }
}

// Principle 3

// code example for New Binding
function sayName (attr){
    this.name = attr.name;
    this.age = attr.age;
    this.school = attr.school;
}

    const Gregzz = new sayName({name: "Greg", age: 10, school: "Lambda"});
    console.log(Gregzz)

// Principle 4

// code example for Explicit Binding
function Person (attr){
    this.name = attr.name;
    this.age = attr.age;
}

Person.prototype.speak = function (){
    return (`Hi ${this.name} is ${this.age}`)
    }
    

let greg = new Person({name: "Greg", age: 10});
let ryan = new Person({name: "Ryan", age: 50});

speak.call(ryan)







