'use strict';
//❗✅ constructor functions
//They are not futures of JS it is a pattern that has been developed by others developers
//We can use constructor function to build an object using a function.
// A constructor function its a completely normal function
// The difference between the normal function and constructor is: That we call a constructor function with the new operator
// In OOP it's the convetion that the function strats with capital letter

// const Person = function (firstName, birthYear) {
//   // instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   //never create a method inside , bad performance
//   // this.calcAge = function () {
//   //   console.log(2023 - this.birthYear);
//   // };
// };

// const ionut = new Person('Ionut', 1981); //  ionut is an instance of Person

// // when we acces the new operator in the back its happening:
// // 1. A New {} is created (empty object is created)
// // 2. function is called and  this = {} (in this function called the this keyword will be set to this newly created object)
// // 3.  {} = linked to a prototype (this newly created object it's linked to a prototype)
// // 4. function automatically return {} the empty object from the beginning at this point object no longer needs to be empty, This is the trick of making the constructor function work
// // whatever we add to the obj will then be returned from the function
// // The constructor function has a prototype property which is an object{} and inside of the object we defien the calcAge() method
// const vladut = new Person('Vlad', 1996); //Vlad is a instance of Person
// console.log(vladut, ionut);
// console.log(ionut instanceof Person); // return true or false

// //❗Prototypes
// //Each and every function in JS automatically has a property called prototype and that includes constructor functions
// // every Obj {} that's created by a constructor function will get access (inherit) to all methods and properties that we define on the constructor prototype property.
// // {} has acces to methods and properties from it's prototype
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2023 - this.birthYear);
// };
// ionut.calcAge(); // the prototype of ionut is Person.prototype
// vladut.calcAge();
// console.log(ionut.__proto__); // we can checkthe prototype
// console.log(ionut.__proto__ === Person.prototype); // the object ionut it's the prototype of the person
// // the prototype it will be use as the prototype of all the objects that are created with the constructor function
// console.log(Person.prototype.isPrototypeOf(ionut)); // return true
// // prototypeOfLinkedObjects
// //The __proto__ property its created in the moment  when the {} it's linked to constructor. and it's sets its value to the prototype property of the function that is being called.
// // it's sets the __proto__ property on the object to the prototype property of the constructor function

// //❗We can set properties on the prototype
// Person.prototype.species = 'Homo Sapiens';
// console.log(ionut.firstName, ionut.species); // we get acces to the property in all the objects

// //We can check the own propertys of the object
// console.log(ionut.hasOwnProperty('firstName')); // log true
// console.log(ionut.hasOwnProperty('species')); // log false
// // they have acces to the property set on the constructor because of the prototype,

// //❗Prototypal Inheritance On Built in Objects such Arrays
// //Object.prototype (top of prototype chain)
// console.log(ionut.__proto__.__proto__); // looking up on the chain prototype Object.prototype
// console.log(ionut.__proto__.__proto__.__proto__); // object.prototype its usually the top of the scop chain

// console.log(Person.prototype.constructor); // point back to the constructor Person itself
// console.dir(Person.prototype.constructor); //we use dir if we want to inspect that  // we see that constructor property points back at person.

// const arr = [1, 2, 2, 'string', 5, 7];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);
// // Any array inherits all the methods from its prototype
// // We can extend the functionality of the arrays
// // we can add any new method to the prototype of the constructor and all the arrays will inherith this method

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// }; // we create a method which returns all the unique elements of an array
// console.log(arr.unique());
// //This is bad ideea for development in practice

// const h1 = document.querySelector('h1');
// console.log(h1);

// We pack the functionality and data into objects
//coding Challenge #1

// const Car = function (type, speed) {
//   this.type = type;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 25;
//   console.log(`${this.type} running with ${this.speed}km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 10;
//   console.log(`${this.type} running with ${this.speed}km/h`);
// };

// const bmw = new Car('Bmw', 120);
// const mercedes = new Car('Mercedes', 90);

// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();

// mercedes.brake();
// mercedes.brake();

// console.log(typeof mercedes);
// console.log(typeof Car);

// //
// //❗✅ ES6 CLASSES
// //=Classes are special type of functions

// //❗Classes expression
// // Attention
// // 1. Classes are not hoisted
// // 2. Classes are first-class citizenes (we can pass them into functions and also return them from functions)
// // 3. Classes are executed in strict mode
// const PersonClass = class {};

// //❗✅Class declaration
// //inside we add a constructor method of the class (wich works in a pretty similar way as a constructor function but this one is a method of this class)
// // in constructor we pass in the arguments for the properties we want the object to have
// // in creating a new object works the same using the new operator
// // Whenever we create a new object (a new instances). The this constructor will automatically be called
// class PersonClss {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName; // setting the properties
//     this.birthYear = birthYear;
//   }

//   // ❗Insstance Methods
//   //Methods we write them inside of class and  outside of the constructor
//   //Methods will be added to .prototype property
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }

//   /// ❗Static Methods
//   static hey() {
//     console.log('Hey There 🤗');
//   }
// }
// PersonClss.hey();
// // The this keyword inside of the constructor will be set to the newly created object
// // When we create new this constructor is gonna be called and that will return a new object and that it will be stored in robert
// //The methods that we write in the class  outside of the constructor, will be on the prototype of the objects not on the objects themselves
// // Methods will be added to the prototype property of the class, which is gona be the prototype of the objects created by that class
// // We dont write the commas , between the methods
// const robert = new PersonClss('Robert', 1986);
// console.log(robert);
// robert.calcAge();
// console.log(robert.__proto__ === PersonClss.prototype);
// robert.greet();

// ///❗Setters and Getters
// // 1. getters and setters are function that get and set a value but on the outside look like regular properties
// // 2. Every Object in JS can have getter and setter properties.
// // 3. We call these special properties assesor properties while the normal properties are called data properties.
// // 4. To retrieve data from a getter or setter we use it like property . We dont call the method
// // 5. Any setter method needs to have exactly one parameter.
// // 6.  set and get Can be very useful for Data validation
// // 7. Its not mandatory to specify a setter when we have a getter for the same property

// // ❗We take a look at a simple obj literal:
// const account = {
//   owner: 'Ionut',
//   movements: [100, 300, 500],

//   get latest() {
//     return this.movements.slice(-1).pop(); // slice returns a shalow copy of an array with the last position// and pop return the last element of that shallow array
//   },

//   set latest(mov) {
//     this.movements.push(mov); // we add a new movement to the array
//   },
// };
// console.log(account.latest); ///for get // we simply retrive it (use it) like a property. we dont call the method
// // can be very useful when we want to read something as a property but still need to do some calculations before.
// account.latest = 50; // for set// Because it's like a property we set it like any other property.
// console.log(account.movements);

// //❗ get and set in classes work in the exact same way like in simple obj

// class PersonCls {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName; // setting the properties
//     this.birthYear = birthYear;
//   }

//   // Instance Methods
//   //Methods we write them inside of class and  outside of the constructor
//   //Methods will be added to .prototype property
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }
// }

// // The this keyword inside of the constructor will be set to the newly created object
// // When we create new this constructor is gonna be called and that will return a new object and that it will be stored in robert
// //The methods that we write in the class  outside of the constructor, will be on the prototype of the objects not on the objects themselves
// // Methods will be added to the prototype property of the class, which is gona be the prototype of the objects created by that class
// // We dont write the commas , between the methods
// const roberta = new PersonCls('Robert', 1986);
// console.log(roberta);
// roberta.calcAge();
// console.log(roberta.__proto__ === PersonCls.prototype);
// roberta.greet();

// // ❗Setter and getters in Class
// class Army {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2023 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hello ${this.firstName}`);
//   }

//   get age() {
//     return 2023 - this.birthYear;
//   } // we add a getter for the age property.
//   // we can read the age of any object using a property
//   // getter is like any regular method that we set on prototype

//   //⁉️❗Set a property that already exist
//   // Validation by the time we are creating a new obj
//   //We create a setter for fullName property which check if this is actually a full name
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   } // we created a setter for a property that does already exist fullName is already a property that we are trying to set here
//   //but then also we have the setter, and each time the top code is executed,so wheneever we set the fullName on the this. keyword the method setter is gonna be executed
//   // the name that we pass in as a parameter fullName in the constructor will then become the parameter name in the setter
//   //it will be a conflict and an error message ❗:Uncaught RangeError: Maximum call stack size exceeded
//   // both the constructor and the setter are trying to set the exact same property name
//   // We need to create a new property name and the ✍️convention for doing that we add an underscore _ . But we create a new variable
//   // but the property that exist is _fullName because we created a new variable
//   //✍️To fix this we need to create also a getter for fullName property and that will return the underscore _fullName

//   get fullName() {
//     return this._fullName;
//   }
// }

// const vlad = new Army('Vlad Hryschenko', 1996);
// console.log(vlad.age);
// console.log(vlad);

// /// ❗Static Methods

// //Are Available just on the constructor
// // Are not available on the instances
// // Static Methods are methods attached to the constructor not to the prototype property of the constructor
// //  Array.from(document.querySelectorAll(h1)) //its working just on array constructor
// // [1,,2,3].from() its not working
// //Number.parseFloat(12) its static on numbers constructor //Not available on numbers

// //Whatever object is calling the method will be the this keyword inside of that function

// ///❗Object.Create
// // Object.create creates a new object and the prototype of that object will be the object that we pass in
// // They are still the idea of prototypal inheritance However , there are no prtotype properties involved
// // And also no constructor functions and no new operator.
// // We can use Object.create to manually set the prototype of an object to any other object that we want

// //Creating an object to be the prototype off all the objects:

// const PersonProto = {
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto); // we pass in the object that we want to be the prototype of the new object.
// // this will return a brand new object that is linked to the prototype that we passed in here
// console.log(steven);
// //building property on the object Manually
// steven.name = 'Steven';
// steven.birthYear = 1989;
// steven.calcAge();
// // we can set the prototype of objects manually to any object that we want.
// // We manually set the prototype of the Steven object to the personProto object
// // Now the 2 objects are effectively linked through the proto property
// // Now looking at properties or methods in a prototype chain works just like it worked in function constructors or classes.
// // The difference is we dont need the constructor function and also no prototype at all

// /// ❗To set property on this object programmatically
// // We should implement  a function which does this work for us
// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1998);
// sarah.calcAge();
// // the this keyword points to sarah because we explicitly called init on Sarah

// //Chalenge

// class CarUs {
//   constructor(type, speed) {
//     this.type = type;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.type} running with ${this.speed} km/h`);
//   }

//   break() {
//     this.speed -= 5;
//     console.log(`${this.type} running with ${this.speed} km/h`);
//   }

//   get speedUs() {
//     //return this.speed / 1.6;
//     console.log(` ${this.type} running with ${this.speed / 1.6} mi/h`);
//   }

//   set speedUs(speed) {
//     this.speed = speed * 1.6;
//     console.log(`${this.type} running with ${this.speed} km/h`);
//   }
// }

// const ford = new CarUs('Ford', 120);
// ford.speedUs;
// ford.accelerate();
// ford.break();
// ford.speedUs = 50;
// console.log(ford);

// ////✅❗ Imheritance Between "Classes":

// //❗/ 1. Constructor Functions

// const Persons = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Persons.prototype.calcAge = function () {
//   console.log(2023 - this.birthYear);
// };

// //Building a constructor Function for the Student:
// // 1. We want usualy the child class to have the same functionality as the  Parent class but with some additional fuctionality.
// // Ussualy we pass in the same arguments but also some additional ones

// const Student = function (firstName, birthYear, course) {
//   // It's never a good ideea to have duplicate code
//   // if the implementation of person change in the future the change it will not be reflected in the student
//   // this.firstName = firstName;
//   // this.birthYear = birthYear;
//   //✅ To pass the properties of the person:
//   // We call Persons with call() method: We want the this keyword inside of Persons function to be the this keyword inside of Student  function
//   // In the begining the this keyword gone be the empty obj that is being created by the new operator and its on that obj where we want to set the firstName and birthYear property
//   Persons.call(this, firstName, birthYear);
//   this.course = course;
// };

// //✅❗ LINKING PROTOTYPES:
// //❗ To have access to the methods of parent (Persons) we have to link the Persons.prototype with Student.Prototype . We have to create manualy with Object.create()
// //❗To link these two prototype objects we are gone use Object.create() . Because defining prototypes manually is exactly what Object.create() does
// //❗We have to create this connection here before we add any more methods to the prototype object of student. Because Object.create() will return an empty object

// Student.prototype = Object.create(Persons.prototype); //Now the Student.prototype it's now an object that inherits from Person.prototype

// // ❗We create a method called introduce on student prototype
// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 1986, 'Computer Science');
// mike.introduce();
// mike.calcAge();
// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Student); // print true
// console.log(mike instanceof Persons); // print true when we linked and false when we don't linked

// //❗To fix the prototype:
// Student.prototype.constructor = Student;

// console.dir(Student.prototype.constructor); // to check constructor properties
// console.log(mike.__proto__);

// //❗Chalenge
// const Car = function (type, speed) {
//   this.type = type;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 25;
//   console.log(`${this.type} running with ${this.speed}km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 10;
//   console.log(`${this.type} running with ${this.speed}km/h`);
// };

// //Creating the child
// const Ev = function (type, speed, charge) {
//   Car.call(this, type, speed);
//   this.charge = charge;
// };

// // we link the prototype
// Ev.prototype = Object.create(Car.prototype);

// Ev.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// Ev.prototype.accelerate = function () {
//   if ((this.speed += 20)) {
//     this.charge--;
//   }

//   console.log(
//     `${this.type} going at ${this.speed} with a charge of ${this.charge}%`
//   );
// };

// const tesla = new Ev('Tesla', 120, 22);
// console.log(tesla);

// tesla.accelerate();
// tesla.brake();
// tesla.chargeBattery(90);
// tesla.accelerate();
// tesla.accelerate();

// //❗✅ Inheritance ES6 Classes

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   //Instance Methods
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2023 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static Method
//   static hey() {
//     console.log('HEY There 🤗');
//   }
// }

// //❗ To Implement Inheritance between ES6 Classes we neeed 2 Ingredients:
// // 1. Extends keywords
// // 2. Super Function

// // To make the student class inherit from the person class we need extends
// // The extends keyword will link the prototypes behind the scenes
// // Then we need the constructor wich will recive the same arguments like parent class with some addtitional ones if we need
// // In the constructor we need to call the super() which is the constructor function of the parent class, and we pass in the arguments for the constructor of the parent class because that are the parameters specified in the parent constructor
// // The call to the super function is responsible for creating the this keyword in this subclass
// // If we dont need any new properties we don't need the constructor and the super in the child class
// //❗This mechanism of inheritance can be very problematic in real world When we are designing software
// class Student extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     //Always needs to happen first
//     super(fullName, birthYear);
//     this.course = course;
//   }
//   introduce() {
//     console.log(
//       ` My name is ${this.fullName} I am ${this.age} and I study ${this.course}`
//     );
//   }
//   // Overwritting the method in the parent class
//   //This method it's shadowing the one from the parent class
//   calcAge() {
//     console.log(
//       ` Hey I'm ${this.fullName} and I'm ${
//         2023 - this.birthYear
//       } years old , but as a student i feel like ${2023 - this.birthYear - 20}`
//     );
//   }
// }

// const marhta = new Student('Marta Smart', 1981, 'Computer Science');
// marhta.introduce();
// marhta.calcAge();

// ///❗Inheritance Between Classes Object.create()

// const PersonProto = {
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// //❗ Linking obj prototype , child StudentProto with parent PersonProto
// const StudentProto = Object.create(PersonProto);

// //Creating Methods on the StudentProto prototype
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear); // we want to set the this keyword on the init method
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(
//     `Hey, My Name is ${this.firstName} I'm ${
//       2023 - this.birthYear
//     } years old and I'm study ${this.course}`
//   );
// };
// const jay = Object.create(StudentProto);
// jay.init('Jay', 1981, 'Computer Science');
// jay.introduce('Jay', 1981, 'Computer Science');

// ❗ES6 Classes
// In Bankist App
//We can create more properties on any instance and properties that are not based on any inputs.
// We can execute any code in the constructor that we want
// The methods are the interface to our objects. They are the API
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected property
    this._pin = pin;
    this._movements = [];
    this.locale = navigator.language;
    console.log(`Thanks for openig an account ${owner}`);
  }
  // ❗Public Interface API
  getMovements() {
    // If we wanted to give access to the movements array from outside we would have to implement a public method for that
    return this._movements;
  }
  deposit(val) {
    this._movements.push(val);
  }
  withdraw(val) {
    //Calling other methods inside of other method
    this.deposit(-val);
  }
  _aproveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this._aproveLoan(val)) {
      // if true
      this.deposit(val); // calling the deposit() method inside of another method
      console.log(' Loan Aproved');
    }
  }
}

const acc1 = new Account('Ionut', 'EUR', 1111);
//❗ Not a good ideea
//Instead to interact with properties like this it's a lot better to create methods that interact with these properties// Very true for important properties such as movements// To avoid bugs in the future as application grows
//
// acc1.movements.push(300);
// acc1.movements.push(-200);
console.log(acc1);

//After creating the methods

acc1.deposit(500);
acc1.withdraw(150);
acc1.requestLoan(1000);
//acc1.aproveLoan(1000); // in the real world we should not be able to acces this method
//❗ We need data encapsulation and data privacy❗

console.log(acc1);
// The withdraw() method abstract the fact it is a negative movement

//❗ Offcourse we can interact with the movements array directly and pottentialy making mistakes
// Same can go for the Pin from outside of the account
//It should not be accesible outside of the class
// This Is a very BIG Concern
// The same Goes for Methods
console.log(acc1.pin);

//❗✅ Encapsulation: Protected Properties and Methods

// ❗Encapsulation: To keep some properties and methods private inside the class
//❗ They are not accessible from outside of the class.
// ❗This is essential to do

//🖍️❗  The rest of the methods are bassically exposed as a public interface , which we can call also API

//❗❗Reasons:
//❗❗There are 2 reasons for what we need the data privacy and encapsulation:
// 1. To prevent code from outside of a class to accidentally manipulate our data inside the class
// 2. When we expose only a small interface (a small API) consisting only of a few public methods , then we can change all the other internal methods with more confidence. Because we can be sure that external code does not rely on these private methods.
// And our code will not break when we do internal changes

//❗❗ JS Classes do not yet support real data privacy and encapsulation

/////////
//❗❗ Fake Encapsulation by using a convention::
// 1. We want to protect the movements array :  Critical data
// We add an underscore in front of the _movements // We have to change it everywhere
// This change does not make the property truly private because this is just a convention (what developers agree to use)
// But since it's not truly private we call this protected

//Now if we want to get the movements outside we can still do this
// But everyone it will know this is not supposed to be touched outside of the class (Wrong)
acc1._movements.push(300);
acc1._movements.push(-200);

// If we wanted to give access to the movements array from outside we would have to implement a public method for that
// Everyone now can acces the movements but they can't overwrite them
console.log(acc1.getMovements());

// We can protect the pin
// We can protect the approveLoan. This method should not be part of public  API  but all others should be
//This is how we protect fields from unwanted Access

///❗✅ Encapsulation: Private Class Fields And Methods
//Are part of a bigger propossal for improving and changing Js Classes which is called Class Fields
// It is part of 2023 ECMAScript

// 1. Public Fields
// 2. Private Fields
// 3. Public Methods
// 4. Private Methods
// 5. There is also the static version for all 4 . Usually we use this for helper functions. Because this static methods will not be available on all the instances but only on the class itself

// 1.❗ Public Fildes
// We can think of a field as a property that will be on all instances. We can call it public instance field

// In our example the 2 fields can be the movements and the locale. Because these are the properties that are gonna be on all the objects that we create with this class.
// Because we do not pass any of the values here into the constructor
// the array and the language it will be set on all the instances
// We adddem in the public fields outside of the constructor
// we need to add a semicolon after
// The public Fields are gonna be present on all the instances that we are creating trough the class. They are not on the prototype
// All the methods that we add they will always be added to the prototype. The fields are on the instances
// The Public Fields they are also refereceable via the this keyword

// 2. ❗Private Fields
// Properties are really truly not accessible from the outside.
// We make  the _movements array private with the # symbol ( # it's the syntax that makes the field private in this new class proposal)
//  We can not define a field in the constructor//
// The fields has to be outside of any method
// We create the field for  private #pin out and we don't set it to anything// In the beggining it will be set to undefined and in the constructor we redifine that value
// In the constructor we set the #privatePin to the this keyword and set it to the value that we received.

class Accounts {
  // 1. Public Fields (they will be on instances)
  locale = navigator.language;
  //_movements = [];// convention

  // 2. Private Fields (they will be available on instances not on prototype)
  #privateMovements = [];
  #privatePin; // these class fields are like any other property

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected property
    this.#privatePin = pin;
    // this._movements = [];
    //this.locale = navigator.language;
    console.log(`Thanks for openig an account ${owner}`);
  }

  // 3. Public Methods
  // ❗Public Interface API

  getMovements() {
    // If we wanted to give access to the movements array from outside we would have to implement a public method for that
    return this.#privateMovements;
  }

  deposit(val) {
    this.#privateMovements.push(val);
  }

  withdraw(val) {
    //Calling other methods inside of other method
    this.deposit(-val);
  }

  requestLoan(val) {
    if (this.#privateAproveLoan(val)) {
      // if true
      this.deposit(val); // calling the deposit() method inside of another method
      console.log(' Loan Aproved');
    }
  }

  static helper() {
    console.log('Helper');
  }
  // 4. Private Methods
  #privateAproveLoan(val) {
    return true;
  }
}

const acc2 = new Accounts('Vlad', 'EUR', 2222);
acc2.deposit(700);
console.log(acc2);
// console.log(acc2.#privateMovements); // We cannot access the variable outside now
//console.log(acc2.#privatePin);
acc2.locale = navigator.languages;
console.log(acc2);
console.log(acc2.getMovements());
///❗4. Private Methods
// are very useful to hide the implementation details from the oustide
acc2.requestLoan(1000);
console.log(acc2.getMovements());
//console.log(acc2.#privateAproveLoan(10)); // not accesible
console.log(acc2);

// The static works just
Accounts.helper();
