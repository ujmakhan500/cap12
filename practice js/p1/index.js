// Animal.prototype.printType = function(){
//     console.log(this.type);
// }

// function Animal(type ,legs){
//     this.type = type;
//     this.legs = legs;

// }
// let a1 = new Animal("domestic" ,4);
// console.log(a1);

// Object.setPrototypeOf(Bird.prototype , Animal.prototype);


// Bird.prototype.printLegs = function(){
//     console.log(this.legs);
// }

// function Bird(type ,legs ,canfly){
//     Animal.call(this ,type ,legs);

//     this.canfly = canfly;

// }


//class




// class Animal{
//     constructor(type ,legs){

//         this.type = type;
//         this.legs = legs;
//     }

//     printType(){
//         console.log(this.type);
//     }
// }
// let a1 = new Animal("wild" ,4, true);
// console.log(a1);


// class Bird extends Animal{
//     constructor(type ,legs, canFly){
//         super(type ,legs);
//         this.canFly = canFly;

//     }

//     printLegs(){
//         console.log(this.legs)
//     }

// }

// let b1 = new Bird("domestic", 2, false);
// console.log(b1);



// static



 class Animal{
     constructor(type ,legs){

         this.type = type;
         this.legs = legs;
     }

     printType(){
         console.log(this.type);
     }

     static PrintHi(){
        console.log("Hi!!")
     }
 }
 let a1 = new Animal("wild" ,4, true);
 console.log(a1);
Animal.PrintHi();
















