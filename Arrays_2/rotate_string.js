let rotateClockwise = (str, rot) => {
    let totStr = str + str;
    let n = str.length;
    let startIndex = n-rot;
    str = '';
    for (let i=startIndex; i<(startIndex + n); i++) {
        str = str + totStr.charAt(i);
    }
    return str;
};


console.log('Rotating the string "hello" clockwise by 3 = ' + rotateClockwise('hello', 3));