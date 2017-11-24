firstname = 'Ashwin';
lastname = 'Mahendra';

let employee = {
    firstname: 'Bharath',
    lastname: 'Reddy',
    getFullName(arg1, arg2) {
        console.log('Passed arguments = ' + arg1 + ' and ' + arg2);
        return 'Full name = ' + this.firstname + ' ' + this.lastname;
    }
};

let fullName = employee.getFullName;
console.log(fullName()); // This would print Ashwin Mahendra
console.log(employee.getFullName()); //This would print Bharath Reddy

/*
In the above example when the fullName function executes the this reference inside the function would refer to the
global firstname and lastname, so the function would return Ashwin Mahendra.
 */

/*
Use Call and apply to bind the function to an object reference.
Both Call and apply does the same thing, except differ in the way arguments are passed to the called function.
 */
let args = ['hello', 'world'];
console.log(fullName.call(employee, args[0], args[1])); // This would print Bharath Reddy.
console.log(fullName.apply(employee, args)); //This would also print Bharath Reddy, but arguments are passed as an array.