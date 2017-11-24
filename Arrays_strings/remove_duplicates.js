let remove_duplicates = (str) => {
    map = {};
    strWithoutDuplicates = [];
    for (ch of str) {
        if (map[ch] !== undefined) {
            continue;
        } else {
            map[ch] = 1;
            strWithoutDuplicates.push(ch);
        }
    }
    return strWithoutDuplicates.join('');
};

console.log("string abcdea after removing duplicates = " + remove_duplicates('abcabda'));