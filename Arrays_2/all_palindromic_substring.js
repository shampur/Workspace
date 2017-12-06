/*
    Algorithm to find all palindromic substrings using Dynamic programming
*/

let allPalindrome = (str) => {
    let n = str.length;
    let allPlaindromes = {};
    let palinMatrix = [];
    for (let i = 0; i < n; i++) {
        palinMatrix.push((new Array(n)).fill(false));
    }

    // all substring palindromes of length 1;
    for (let ch in str) {
        palinMatrix[ch][ch] = true;
        allPlaindromes[str[ch]] = 1;
    }

    // all substring palindromes of length 2;
    for (let i=0; i<n; i++) {
        if (str[i] === str[i+1]) {
            palinMatrix[i][i+1] = true;
            allPlaindromes[str[i] + str[i+1]] = 1;
        }
    }

    // all palindromes of length greater that 2;
    for( let i=3; i<=n; i++) {
        for(let j=0;j<n-i+1; j++) {
            if (str[j]===str[j+i-1] && palinMatrix[j+1][j+i-2]) {
                palinMatrix[j][j+i-1] = true;
                allPlaindromes[str.substr(j,i)] = 1;
            }
        }
    }

    return Object.keys(allPlaindromes);

};

let palinStr = 'bbaabb';

console.log('All palindromes in a string banana using dynamic programming are = ' + JSON.stringify(allPalindrome(palinStr)));


/*
Algorithm to find all plaindromes of a string using iteration
 */

let allPalindromesIter = (str) => {
    let n = str.length;
    let allPalindromes = {};
    for (let i=0; i<n; i++) {
        // all odd length palindromes centered at i
        allPalindromes[str[i]] = 1;
        for (let j=1; (i-j >= 0) && (i+j < n); j++) {
            if (str[i-j] === str[i+j]) {
                allPalindromes[str.substr(i-j, ((2 * j) + 1))] = 1;
            } else {
                break;
            }
        }

        // all even length palindromes centered at i
        for(let j=1; (i-j+1 >= 0) && (i+j < n); j++) {
            if(str[i-j+1] === str[i+j]) {
                allPalindromes[str.substr(i-j+1, 2*j)] = 1;
            } else {
                break;
            }
        }
    }

    return Object.keys(allPalindromes);
};

console.log('All palindromes in a string banana using  are = ' + JSON.stringify(allPalindromesIter(palinStr)));