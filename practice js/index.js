// let x = "5";
// let y = 10;
// let result = x + y;
// console.log(result);

// function exampleScope() {
//     if (true) {
//         var a = 5;
//     }
//     console.log(a);
// }
// exampleScope();


// console.log(x);
// var x = 5;

// function first() {
//     second();
//     console.log("First");
// }

// function second() {
//     console.log("Second");
// }

// first();
//
//class MyClass { constructor() { this.myProp = 42; } }

//const myObj = new MyClass(); console.log(myObj.hasOwnProperty('myProp'));



// class Person { constructor(name) { this.name = name; } }

// class Student extends Person { constructor(name, grade) { super(name); this.grade = grade; } }

// const details = new Student('Yash', 10); console.log(details.name, details.grade);


// let parentObj = { 
//     prop1: "value1" 
//     };
    
//     let childObj = Object.create(parentObj);
//     console.log(childObj.prop1);






// var x = 'John';
// var y = new String('John');
// console.log(x.__proto__.__proto__.__proto__);


// let parentObj = 
// { 
// prop1: "value1" 
// };

// let childObj = 
// { 
// prop2: "value2" 
// };

// Object.setPrototypeOf(childObj, parentObj);
// console.log(childObj.prop1);



// function Animal(noOfLegs, vegetarian) {

//     this.noOfLegs = noOfLegs;
//     this.vegetarian = vegetarian;
  
//   }
//   Animal.prototype.eat = function() {
//     console.log(`eating...`)
//   }
  
//   function Cat(noOfLegs, vegetarian, color) {
  
//     Animal.call(this, noOfLegs, vegetarian)
//     this.color = color;
  
//   }
  
//   let c1 = new Cat(4, false, 'Brown');
//   //console.log(c1);
//   c1.eat();
  
// function outer() {
//   let x = 10;
//   function inner() {
//       let y = 5
//   console.log(x +y);
//   }
//   return inner;
//   }
//   let closure = outer();
//   closure();


function outer() {
  let x = 10;
  return function inner() {
  console.log(x);
  };
  }
  let closure1 = outer();
  closure1()
  







