let permute = (str) => {
    if (str.length < 2){
        return str;
    }

    const permutation = [];

    for (let i = 0; i < str.length; i++) {
        const ch = str[i];
        if (str.indexOf(ch) !== i) {
            continue;
        }

        remainingString = str.slice(0, i) + str.slice(i + 1, str.length);
        for (let permStr of permute(remainingString)) {
            permutation.push(ch + permStr);
        }
    }

    return permutation;
};

console.log("permutation of the string abcd = " + permute("abcd"));

/* Todo permute with global array : Better time complexity than above implementation*/

let permute_global_arr = (arr) => {
    result = [];

    const permuteArr = (remaining, m = []) => {
        if (remaining.length === 0){
            result.push(m);
        } else {
            for (let i = 0; i < remaining.length; i++) {
                let curr = remaining.slice();
                let next = curr.splice(i, 1);
                permuteArr(curr.slice(), m.concat(next));
            }
        }
    };
    permuteArr(arr);
    return result;
};
let res = permute_global_arr('abcd'.split(''));
console.log("optimized permutation of the string abcd = " + JSON.stringify(res));