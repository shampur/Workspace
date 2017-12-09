"use strict";

// Use of classes in Javascript;
class Employee {
    constructor(firstname, lastname, age, salary) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.salary = salary;
    }

    printCompleteName() {
        console.log("Complete name = " + this.firstname + ' ' + this.lastname );
    }
}

var emp1 = new Employee('Bharath', 'Reddy', 30, 30000);

emp1.printCompleteName();

//Inheritance in javascript

class Manager extends Employee {
    constructor(firtname, lastname, age, salary, project) {
        super(firtname, lastname, age, salary);
        this.project = project;
    }

    printNameAndProject() {
        super.printCompleteName();
        console.log("Project = " + this.project);
    }
}

var manager1 = new Manager('darshan', 'nayak', 30, 50000, 'CTS');
manager1.printNameAndProject();

Employee.prototype.concatenateAgeAndSalary = function () {
    Employee.prototype.concatenatedValue = this.salary + this.age;
};

// Example to illustrate prototypical inheritance.
// Functions, Data properties declared on the prototype of an object are accessible on all child objects that refer to the same prototype.
emp1.concatenateAgeAndSalary();
console.log("Concatenated salary and age = " + manager1.concatenatedValue);

var foo = function () {
    this.text = 'hello foo';
    console.log("text =" + this.text);
};

/*
foo.prototype is an object which looks something like this
foo.prototype =  {
                    constructor: function() {
                        this.text = 'hello foo';
                        console.log("text =" + this.text);
                    }
                 }
 */

console.log(foo.prototype);
console.log(foo.prototype.constructor);
foo.prototype.constructor();
console.log("A class in javascript is just a = " + typeof Employee);

/* In javascript when u call a function with a new keyword it does the following
    a) Create an object.
    b) Set the object prototype reference.
    c) return the newly created object.
 */



/* Below are some of the features of ECMASCRIPT 6 */

// String interpolation
let x=10;
console.log(`This is string interpolation ${x}`);

// Array destructuring
let [a,b] = [10, 20];
console.log(`a = ${a} and b = ${b}`);

//getters and setter functions, this is an important paradigm.
let university = {
    name: '',
    location: '',
    get fullDetails() {
        return this.name + ', ' + this.location;
    },
    set fullDetails(name) {
        console.log("executing setter");
        this.name = name;
        this.location = 'Los Angeles';
    }
};

university.fullDetails = 'University of southern california';
console.log('university full details = ' + university.fullDetails);

//Proxies
/*

 */
var handler = {
    get: (target, name) => {
        if (name in target) {
            return target[name];
        } else {
            return 'Error!!!!! property not found';
        }
    }
};


var p = new Proxy({}, handler);
p.a = 100;
console.log('p.a = ' + p.a + ' p.b = ' + p.b);

/*
    In javascript only variable declarations are hoisted and not variable assignment.
    And function declarations overrided variable declarations when hoisted
 */

var l = 10;
console.log('l = ' + l + ' m = ' + m);
var m = 20;



/*
Closure example, closures in javascript provide a way to emulate private methods of other oop languages.
In the below function salary and incr are private to the Student function.
 */
function Student(name, age) {
    let salary = 1000;
    let incr = (x) => {
        salary += x;
    };
    this.name = name;
    this.age = age;
    this.raise = () => {
        if (this.age > 20) {
            incr(1000);
        } else {
            console.log('Property age is either unset or less than 20');
        }
    };
    this.getSalary = () => {
        return salary;
    }
};

let stud2 = new Student('Valli', 30);
stud2.raise();
console.log('student details = \nName : ' + stud2.name + '\n Age : ' + stud2.age + '\n Salary : ' + stud2.getSalary());

/*
Call vs Apply vs Bind
Call and apply are almost identical except differ in the way argumants are passed to the method.
Apply passes arguments  as an array, whereas in call u need to pass them seperately.
 */

let obj1 = {name: 'john', age: 30};
let obj2 = {name: 'Arnold', age: 50};
function printName() {
    console.log('Name = ' + this.name);
}
printName.call(obj1);
let s = printName.bind(obj2);
s();