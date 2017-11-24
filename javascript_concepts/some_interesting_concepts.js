/*
Prints numbers from 1 to 10 after 3 seconds;
 */

let display = () => {
    for(let i = 0; i < 10; i++) {
        ((counter) => {
            setTimeout(() => {
                console.log(counter);
            }, 3000);
        })(i)
    }
};

display();

/*  Use of arguments keyword in javascript to access all the
    arguments that are passed to the function.
 */

function add() {
    console.log('arguments length = ' + arguments.length);
    let sum = 0;
    console.log('1st argument = '+ arguments[0]);
    for (let item of arguments){
        sum += item;
    }
    return sum;
}

let sum  = add(1,2,3);
console.log('The sum of arguments = ' + sum);


/*
    The best way in javascript to identify the type of an object is not by using the
    typeOf operator instead by using the Object.prototype.toString() method.
 */

let getType = (obj) => {
    let typeClass = Object.prototype.toString.call(obj).slice(8, -1);
    return typeClass;
};

console.log('"abc" = ' + getType('abc'));
console.log('{name: "john"} = ' + getType({name: 'john'}));
console.log('() => {} = ' + getType(() => {}));
console.log('true = ' + getType(true));
console.log('[1,2,3] = ' + getType([1, 2, 3]));
