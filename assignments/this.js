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

//1

//2




//3

}

//4




// Principle 1

// code example for Window Binding
console.log(this)

// Principle 2

// code example for Implicit Binding
myObj = {
    function add(){
        console.log(this)
    }
}

// Principle 3

// code example for New Binding
function sayName (name, age, school){
    this.name = name;
    this.age = age;
    this.school = school;

// Principle 4

// code example for Explicit Binding
function sayName (name, age){
    this.name = name;
    this.age = age;
    this.speak (){
    console.log("Hi", this.name " is " this.age)
    }
}
let Greg = new sayName(Greg, 20)
let Ryan = new sayName(Ryan, 50)

Greg.speak