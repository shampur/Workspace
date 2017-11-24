let uniqueString = (str) => {
    let strHash = {};
    for (ch of str) {
        if (strHash[ch] !== undefined) {
            return false;
        } else {
            strHash[ch] = 1;
        }
    }
    return true;
};

console.log("unique string abcd = " + uniqueString('abcd'));
console.log("unique string abcdb = " + uniqueString('abcdb'));

/* Todo : In the above implementation using an object to maintain the hash is an expensive approach
* We can implement this using a integer checker since an integer is 32 bits long and there are only 26 characters in
* english language, we can use the bits of the integer to track the characters that are encountered while reading the string*/


let uniqueOptimized = (str) => {
    let checker = 0;
    for(let ch of str) {
        let val = ch.charCodeAt(0) - 'a'.charCodeAt(0);
        if ((checker & (1 << val)) > 0) {
            return false
        }
        checker = checker | (1 << val);
    }
    return true;
};

console.log("unique string with optimized solution abcd = " + uniqueOptimized('abcd'));
console.log("unique string with optimized solution abcdb = " + uniqueOptimized('abcdc'));