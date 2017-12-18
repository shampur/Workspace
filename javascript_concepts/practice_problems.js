var x = 1;

if (function y() {}) {
    x += ' ' + typeof y;
}

console.log(x);
/*
    The output would be 1undefined. The if condition statement evaluates using eval, so eval(function f(){}) returns
    function f(){} (which is true). Therefore, inside the if statement, executing typeof f returns undefined because
    the if statement code executes at run time, and the statement inside the if condition is evaluated during run time.
 */

/*
    Example of closure
 */

var add = (function() {
    var counter = 0;
    return function() {
        return counter += 1;
    }
})();

console.log('Adding using closure = ' + add());
console.log('Adding using closure = ' + add());
console.log('Adding using closure = ' + add());

/*
    A closure is a function defined inside another function and has access to variables and functions that are declared
    in the parent scope.
 */


function mul(a) {
    return function(b) {
        return function(c) {
            return a * b * c;
        }
    }
}

console.log('Mul function using closures = ' + mul(2)(3)(4));



/*
    Methods to empty an array :
    1) arr = []; //This does not update the referenced array
    2) arr.length = 0 // This ensures that all references are initialized.
 */
function refArray(arr) {
    arr.push(6);
    console.log('List = ' + JSON.stringify(arr));
    arr = [];
    console.log('List = ' + JSON.stringify(arr));
}

arr = [1, 2, 3, 4, 5];

refArray(arr);

console.log('original array = ' + JSON.stringify(arr));

/*
    Type checking for array
    1) using Array.isArray();
    2) Array.prototype.toString.call(obj)
 */

var ar = [1, 2, 3];
console.log('Type checking for array = ' + Object.prototype.toString.call(ar));

if (Object.prototype.toString.call(ar) === '[object Array]') {
    console.log('[1, 2, 3] is an array');
}

/*
    Delete operators do not affect local variables.
    Delete operators do not affect prototype variables
 */

var emp = {
    name: 'charan'
};

var emp2 =  Object.create(emp);

delete emp2.name;

console.log('emp info = ' + JSON.stringify(emp2));

/*

 */

