/*
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
 */

function createBase(num) {
    return function(x) {
        return num + x;
    }
}

var addSix = createBase(6);
console.log('addSix(10) = ' + addSix(10));



/*
Instead of using typeof use Object.prototyope.tosting.call(n).slice(8, -1);
 */
let n = 20;
let x = null;
console.log('The type of object = ' + Object.prototype.toString.call(x).slice(8, -1));
console.log('The type of object = ' + Object.prototype.toString.call(n).slice(8, -1));


/*
output of the code below =
 */

(function(){
    var a = b = 3;
    /*
    This is a shorthand for b=3; var a=b; so b gets the global scope, while a is defined using var and gets a local
    scope.
     */
})();

console.log("a defined? " + (typeof a !== 'undefined')); // false
console.log("b defined? " + (typeof b !== 'undefined')); // true

/*
Scope change inside an embeded function
 */

var myObject = {
    foo: 'hello',
    func: function() {
        var self = this;
        console.log('this.foo = ' + this.foo); //hello
        console.log('self.foo = ' + self.foo); //hello
        (function(){
            console.log('this.foo = ' + this.foo); //undefined
            console.log('self.foo = ' + self.foo); //hello
        })();
    }
};

myObject.func();

/*
    What is the use of using use-strict ?
    Enforces strict parsing and error handling on your javascript code

    a) Prevents accidental globals.
    b) Makes Debugging easier.
    c) Eliminates coercion of this.
 */

/*
NaN is a result of an operation like 'abc' / 4
NaN type is Number, you can check if variable is NaN using the built in isNan() function.
 */

/*
Implement isInteger function
 */

let isInteger = (inp) => {
    if (typeof inp !== 'number') {
        return false;
    }
    let rem = inp % 1;
    if (rem!==0) {
        return false;
    }
    return true;
    /*
        you can also compare the Math.ceil or Math.floor of a number to itself and return the status.
     */
};

console.log('Is 5 an integer? = ' + isInteger(5));
console.log('Is 5.1 an integer? = ' + isInteger(5.1));


/*
String is palindrome or not
 */

let isPalindromeWithoutBuiltIn = (str) => {
    let n = str.length;
    for(let i=0; i<n/2; i++) {
        if(str[i] !== str[n-1-i]){
            return false;
        }
    }
    return true;
};

let isPalindromeWithBuiltin = (str) => {
    return !(str.split('').reverse().filter((item, index) => {return item!==str[index];}).length);
};


console.log('Is ababa a palindrome = ' + isPalindromeWithoutBuiltIn('ababa'));
console.log('Is ababa a palindrome = ' + isPalindromeWithBuiltin('abadba'));

/*

Write a function which works for both calls
console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5
 */

let sum = (a, b) => {
  let f = function (b) {
      return a + b;
  };
  if(b) {
      return f(b);
  } else {
      return f;
  }
};

console.log(sum(2,3));
console.log(sum(2)(3));

/*
Example for a closure :
A closure is an inner function which has access to variables in the outer function scope chain
 */

(function closure(a) {
    var x = 10;
    (function innerFunc(b) {
        ((c) => {
           console.log('a + b + x + c = '+ (a + x + b + c));
        })(30);
    })(20)
})(5);

/*
When assigning object as a key in javascript the key will be stringified.
 */

var a = {};
var b = {key: b};
var c = {key: c};
a[b]=123;
a[c]=456;
console.log('a[b] = ' + a[b]);


/*
Different context taken on by the this keyword
 */

length = 5;
function fn() {
    console.log('length = ' + this.length);
}

var myOb = {
    length: 10,
    func: function(fn) {
        fn();
        arguments[0]();
    }
};

myOb.func(fn);


/*
Variables declared using var are hoisted to function scope even if they are declared inside try catch block
 */


(function fn2() {
    try{
        throw new Error('Custom error');
    } catch(p) {
        var p=1,q=2; // using var would avoid variable hoisting.
        console.log('x = ' + p);
    }
    console.log('x = ' + p);
    console.log('y = ' + q);
})();

/*
In Es6 you can use the sperad operator to add element to the beginning of the array and to the end
 */

(() => {
    let x = [1, 2, 3, 4];
    let y = [0,...x,5];
    console.log(' y = '+ y);
})();