/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let numStr = str.trim();
    let signedNum = undefined;
    if (numStr[0] === '-') {
        signedNum = '-';
        numStr = numStr.substr(1);
    } else {
        if (numStr[0] === '+') {
            signedNum = '+';
            numStr = numStr.substr(1);
        }
    }
    let multFactor = 1;
    let sum = 0;
    var re = /[0-9]/;
    var re2 = /[a-zA-Z+-]/g;
    if (re2.test(numStr)) {
        numStr = numStr.substr(0,re2.lastIndex - 1);
    }
    for(var i=numStr.length - 1; i>=0; i--) {
        if (!(re.test(numStr[i]))) {
            return 0;
        }
        sum = sum + (numStr[i] * multFactor);
        multFactor *= 10;
    }
    if (signedNum === undefined) {
        return sum;
    } else if (signedNum === '+') {
        return +sum;
    } else {
        return -sum;
    }
};

let x = myAtoi('123');
console.log('My atoi 123 =' + x);