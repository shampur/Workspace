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
replace() - this function uses a regular expression to replace strings
$1, $2...$n is used to access the regex capturing classes.
 */

let re  = /(\w+)\s(\w+)/g;
let str = 'john connor, sarah connor';
let newStr = str.replace(re, `$2 $1`);
console.log('New string = ' + newStr);
console.log('Old string = ' + str);


/*
includes() - this functions checks whether the specified string is present within the main string
 */

console.log('sun is present in samsung = ' + a.includes('sun'));

/*
repeat() - returns specified copies of the current string.
slice() - same as array.slice()
trim() - removes leading and trailing spaces.
substr() - substring of the main string.
split() - returns an array by splitting the current string based on a separator, regular expression.
 */