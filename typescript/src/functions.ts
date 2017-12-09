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