let is_rotated = (str1, str2) => {
    let temp = str1 + str1;
    if (temp.indexOf(str2) >= 0) {
        return true
    } else {
        return false;
    }
};

console.log('Are the strings abcd and dabc rotated = '+ is_rotated('abcd', 'dabc'));
console.log('Are the strings abcd and dacb rotated = '+ is_rotated('abcd', 'dacb'));
