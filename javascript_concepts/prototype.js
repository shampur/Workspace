/*
Every javascirpt function has a prototype property on which we assign
properties and methods whem we want to implement inheritance.

The prototype property of an object which is created either using the object literal or
using the Object.create function or using the new keyword is not enumerable, meaning it is not
accesible in the objects for in loop. But its available in __proto__ psuedo property that most
browsers expose.

And Object.prototype is the prototype attribute of all objects that are created using object literal
or using the Object.create().

if the object is created using the new attribute then the objects prototype attribute is assigned
to the constructor function of the Object. that var x = new Fruit here x gets its prototype from
Fruit.prototype.
 */

let Person = function (first, last) {
    this.firstname = first;
    this.lastname = last;
};

Person.prototype.getName = function () {
    return this.firstname + ' ' + this.lastname;
};


Teacher.prototype = new Person();
Teacher.prototype.constructor = Teacher;

Teacher.prototype.getSubject = function() {
    return this.subject;
};

function Teacher (first, last, subject) {
    Person.call(this, first, last);
    this.subject = subject;
};


// Teacher.prototype = Object.create(Person.prototype);

let x = new Teacher('charan', 'shampur', 'Maths');

console.log('Name = ' + x.getName() + ' teaches = ' + x.getSubject());

console.log('Teacher.prototype.constructor = ' + Teacher.prototype.constructor);

let Principal = function (first, last, subject, school) {
    Teacher.call(this, first, last, subject);
    this.school = school;
};

Principal.prototype = Object.create(Teacher.prototype);
Principal.prototype.constructor = Principal;

Principal.prototype.getSchool = function () {
    return this.school;
};

let princi = new Principal('Ashwnin', 'Mahendra', 'Accounts', 'Kumarans');
console.log('Name = ' + princi.getName() + ' teaches = ' + princi.getSubject() + ' and is prinicipal of = ' + princi.getSchool());
console.log('Principal constructor = '+  Principal.prototype.constructor);