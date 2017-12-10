/*
    variable no of arguments in functions
 */

function print(firstname: string, ...restOfName: Array<string>): void {
    console.log('name = ' + firstname + ' ' + restOfName.join(' '));
}

print('charan', 'shampur', 'mukesh');


/*
    difference between using arrow function and regular function
 */

let myObj = {
    name: 'srinidhi',
    /*
    getPrintFunction: function() {
        return function() { // This throws a compi;e time error stating that this cannot be used here
            console.log('name = ' + this.name);
        }
    }
    */
    getPrintFunction: function () {
        return () => {
            console.log('name = ' + this.name);
        }
    }

};

(myObj.getPrintFunction())();

/*
    Generic functions
 */

function add<T>(a: T, b: T){
    if (typeof a === "number" && typeof b === "number") {
        let x: number;
        x = a + b;
        return x;
    } else {
        if (typeof a === 'string' && typeof b === 'string') {
            let x: string;
            x = a.concat(b);
            return x;
        } else {
            return null;
        }
    }
}


let sum = add<Number>(5,5);
let concatenatedString = add<String>('hello',' hi');

console.log('addition of two numbers = ' + sum);
console.log('addition of two strings = ' + concatenatedString);

