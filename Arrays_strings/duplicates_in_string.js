const fact = require('../factorial_of_a_number');

const getDuplicates1 = (arr) => {
    let map = 0;
    for (let item of arr) {
        if ((map & (1 << item)) > 0) {
            console.log(item);
        } else {
            map = map | (1 << item);
        }
    }
    return
}

console.log('The duplicates in an array [1,6,5,3,8,1,6] are ');
getDuplicates1([1,6,5,3,8,1,6]);

/*
Todo: if the numbers within the array fall in the range 1 to n and there are two numbers that are repeating themselves
Todo: we can find those numbers using the Sum of N numbers and product of N numbers formulae.
 */

const getDuplicates2 = (arr) => {
    let n = arr.length - 2;
    /* find the sum and product of all the numbers in the array */
    let sum = 0, prod = 1;
    for (let item of arr) {
        sum = sum + item;
        prod = prod * item;
    }

    let xplusy = sum - ((n * (n + 1)) / 2);
    let xprody = prod / fact(n);

    let xminusy = Math.sqrt((xplusy * xplusy) - (4 * xprody));
    let x = (xplusy + xminusy) / 2; 
    let y = xplusy - x;
    console.log('The duplicate numbers are = ' + x + ' and ' + y);
};


console.log('The repeating numbers in [1,4,2,3,1,2] = ');
getDuplicates2([1,4,2,3,1,2]);