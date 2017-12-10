/*
    Experimenting with different array functions
 */

let a = [10, 20, 30, 40, 50];
let b = [1, 2, 3, 4, 5];
let c = [6, 7, 8, 9, 10];
let x;
let displayOriginalArrays = () => {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log('c = ' + c);
}
/*
Concat() - Joins two or more arrays
 */

console.log('*********************************************')
console.log('concat()');
x = a.concat(b);
console.log('concatenating a and b = ' + x);
console.log('concatenating a, b and c = ' + a.concat(b, c));
displayOriginalArrays();

/*
copyWithin() - This method copies elements within the array to and from specified position
Note : This changes and returns the same array on which the function is called
 */

console.log('*********************************************')
console.log('copyWithin()');
x = a.copyWithin(3, 1, 3);
console.log('copying elements within a  =' + x);
displayOriginalArrays();
a = [10, 20, 30, 40, 50]

/*
every() - This method executes a function to validate a condition for every elements in the array;
 */

console.log('*********************************************')
console.log('every()');
x = [];
let testPass = a.every((item) => {
   return item <= 30;
});
console.log('Does all the elements in the array satisfy the condition? = ' + testPass);


/*
fill() - fills every element in the array with a static value, useful during initialization;
 */

/*
filter() - returns a new array after filtering the elements using a condition
 */

console.log('*********************************************')
console.log('filter()');
x = []
x = a.filter((item) => {
   return item <= 30;
});
console.log('Original array a =' + a);
console.log('Filtered items x =' + x);

/*
find() - return the value of the first element in the array that satisfy a condition.
 */

console.log('*********************************************')
console.log('find()');
x = a.find((item) => {
    return item > 20;
})
console.log('Item in an array whos value is greater than 20 = ' + x);

/*
findIndex() - Does exactly the same thing as find() except it returns the index of the element instead of its value
 */

/*
forEAch() - Executes a function for each element of the array.
 */

/*
indexOf() - Returns the index of first occurrence of the element in the array.
 */

console.log('*********************************************')
console.log('indexOf()');
x = a.indexOf(30);
console.log('Index of 30 = ' + x);

/*
isArray() - Checks whether the object is an array
 */

/*
join() - joins the elements of the array into a string. by inserting the argument in between the elements.
 */

/*
lastIndexOf() - Similar to index of but returns the index of the last occurrence of the element.
 */

/*
map() - maps each value of the array to a particular value returned by a function;
 */

console.log('*********************************************')
console.log('map()');
x = a.map((itm) => {
    return itm * itm;
});
console.log('Elements of an item after squaring them = '+ x);
displayOriginalArrays();

/*
reduce() - reduces each element in the array to a single value
 */

console.log('*********************************************')
console.log('reduce()');
x = a.reduce((total, itm, index) => {
    if (index === 0) {
        return itm;
    } else {
        return total + itm;
    }
});
console.log('Sum of all the elements of the array = ' + x);


/*
Groupon problem using built in array functions
 */

console.log('*********************************************')
var max = 3;
x = new Array(12).fill(0).map((rowItem, rowIndex) => {
   let y = new Array(12).fill(0).map((colItem, colIndex) => {
       let itm =  (rowIndex + 1) * (colIndex + 1);
       let formattedItem = new Array((max - itm.toString().length) + 1).fill(' ');
       formattedItem.push(itm);
       return formattedItem.join('').toString();
   });
   console.log(y.join(''));
   return y;
});

displayOriginalArrays();

/*
reverse() - Reverses the elements of the original array and returns that array.
 */

/*
shift()  - This operation is same as as the dequeue operation of the queue
 */

console.log('*********************************************')
console.log('shift()');
x = a.shift();
console.log('element getting removed = ' + x);
displayOriginalArrays();

/*
unshift() - Opposite of push, inserts element to the beginning of the array
 */

console.log('*********************************************')
console.log('unshift()');
a.unshift(10);
displayOriginalArrays();

/*
splice() - to remove and insert elements in an array
This is a very powerful method can do both removing items and inserting items both at the same time.
 */

console.log('*********************************************')
console.log('splice()');
x = a.splice(2,1);
console.log( 'spliced element = ' + x);
displayOriginalArrays();
a.splice(2,0,[100,200]);
displayOriginalArrays();

/*
Small function to loop till 100 and print fizz for multiples of 3, buzz for multiples of 5 and fizzbuzz for multiples
of 3 and 5
 */

let fizzbuzz = (n) => {
    let arr = new Array(n).fill(' ').map((itm, index) => {
        let num = index + 1;
        if ((num % 3 === 0) && (num % 5 === 0)) {
            return 'fizzbuzz';
        } else {
            if (num % 3 === 0) {
                return ' fizz';
            } else if (num % 5 === 0) {
                return ' buzz';
            } else {
                return ' 0';
            }
        }
    });

    console.log(arr.join(', '));
}

fizzbuzz(100);