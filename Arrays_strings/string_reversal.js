let strrev = (str) => {
    let n = str.length;
    strarr = str.split('');
    for (let i=0 ; i < n / 2; i ++) {
        let temp = strarr[i];
        strarr[i] = strarr[n-1-i];
        strarr[n-1-i] = temp;
    }
    return strarr.toString();
};

let reverse = (str) => {
    let n = str.length;
    let reversedStr = '';
    for (let i = n-1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
};

console.log('reversed string using simplest algorithm = ' + reverse('abcde'));

console.log('reverse of a string abcd = ' + strrev('abcd'));
console.log('reverse of a string abcde = ' + strrev('abcde'));