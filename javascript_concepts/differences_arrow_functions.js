/*
    Difference between arrow function and regular function in javascript.

    a) In a function expression The value of this is dynamically assigned to the function depending on how they are called.
        whereas the arrow functions have a lexical this where the value is determined by the surrounding scope.
    b) Variables declared in a scope are accessible in all scopes nested inside it unless that variable is shadowed.
    c) Arrow functions provide a static context whereas function expressions provide a dynamic context.
 */

(() => {
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
})();

(function() {
    var myobj = {
        name: 'bharath',
        printNameAfterExpr() {
            setTimeout(function() {
                console.log('Name = ' + this.name); // Since timeout function runs asynchronously the value of this when
                                                    // the function is called would be window
            }, 1000)
        },
        printNameAfterArrow() {
            setTimeout(() => {
                console.log('Name = ' + this.name); // The value of this is statically assigned by the arrow function depending
                                                    // upon the surrounding scope of the function which in this case happens
                                                    // to be myobj;
            }, 1000)
        }
    };
    myobj.printNameAfterExpr();
    myobj.printNameAfterArrow();
})();


/*
    More examples of usage of arrow functions. It replaces the use of assigning that = this
 */
(() => {
   var obj = {
       name: 'bharath',
       printName() {
           return this.async(() => {
               console.log('This name = ' + this.name);
           })
       },
       async(f){
           f();
           f.call(obj);
       }
   }
   obj.printName();
})();