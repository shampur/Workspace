/*
    Experimenting with different string functions
 */

let a = 'samsung';
let b = 'motorola';
let c = 'nokia';
let x;

/*
concat() - This is same as doing a + b + c
 */

function displayAll() {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log('c = ' + c);
}

x = a.concat(b,c);
console.log('x = ' + x);
displayAll();

/*
charCodeAt() - This returns the unicode of a character at the given index
 */
console.log('*************************');
console.log('charCodeAt()');
x = a.charCodeAt(0);
console.log('x = ' + x);

/*
indexOf() - returns the index of the character in the string
 */

console.log('*************************');
console.log('charCodeAt()');
x = a.indexOf('m');
console.log('x = ' + x);

/*

 */
