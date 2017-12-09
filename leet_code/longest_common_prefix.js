var longestCommonPrefix = function(strs) {
    let m = strs.length;
    let n = Number.MAX_SAFE_INTEGER;
    let j = 0;
    let longestCommonPrefix = '';
    if ((strs !== undefined) && (strs !== null) && (strs.length === 0)) {
        return longestCommonPrefix;
    }
    if (strs[0].length === 0) {
        return longestCommonPrefix;
    }
    while (j < n) {
        let currChar = strs[0][j]
        if (currChar === undefined) {
            return longestCommonPrefix;
        }

        let i = 1;
        while (i < m) {
            if (strs[i][j] !== currChar){
                return longestCommonPrefix;
            }
            i++;
        }
        longestCommonPrefix += strs[0][j];
        j++;
    }
};

let x = longestCommonPrefix(['abcd', 'aba', 'abd']);
console.log('Longest common prefix = ' + x);