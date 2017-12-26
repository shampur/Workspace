/*
    Difference between arrow function and regular function in javascript.

    a) In a function expression The value of this is dynamically assigned to the function depending on how they are called.
        whereas the arrow functions have a lexical this where the value is determined by the surrounding scope.
    b) Variables declared in a scope are accessible in all scopes nested inside it unless that variable is shadowed.
    c) Arrow functions provide a static context whereas function expressions provide a dynamic context.
 */

var name = 'Ashwin';
var myObj = {
    name: 'bharath',
    printNameExpr: function () {
        console.log('Name = ' + this.name);
        /*
        return function() { // Here this gets its value dynamically based on the caller.
            console.log('Name = ' + this.name);
        }
        */
        return () => {
            console.log('Name = ' + this.name); // Here this gets its value from the surrounding scope which is the same
                                                // scope as that of the printNameExpr function.
        }
    },
    printNameArrow: () => {
        console.log('Name = ' + this.name); // this gets its value from the surrounding scope window object.
    }
};

myObj.printNameExpr()();
myObj.printNameArrow();