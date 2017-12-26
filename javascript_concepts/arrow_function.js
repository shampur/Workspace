var myObj = {
    name: 'srinidhi',

    getPrintFunction1: function() {
        return function() {
            console.log('name = ' + this.name); // This would be undefined since it would be called within the context of the parent function during execution
        }
    },

    getPrintFunction2: function () {
        return () => {
            return () => {
                console.log('name = ' + this.name); // This would print the name because the context(this) is implicitly passed and evaluated when using arrow functions
            }
        }
    }

};

(myObj.getPrintFunction1())();
((myObj.getPrintFunction2())())();

var myOtherObj = {
    name: 'charan',

    printName1: () => {
            console.log('name = ' + this.name);
    },
    printName2: function() {
        console.log('name = ' + this.name);
    }
}

myOtherObj.printName1();
myOtherObj.printName2();

let myNewObjPrint = myOtherObj.printName1;
myNewObjPrint();