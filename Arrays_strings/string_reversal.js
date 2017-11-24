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

console.log('reverse of a string abcd = ' + strrev('abcd'));
console.log('reverse of a string abcd = ' + strrev('abcde'));