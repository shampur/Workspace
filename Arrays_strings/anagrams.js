//Function to determine whether two strings are anagrams

var anagram = (a, b) => {
    if (typeof a !== 'string' || typeof b !== 'string') {
        return false;
    }
    if (a.length !== b.length) {
        return false;
    } else {
        aMap = {};
        for (ch of a) {
            if (aMap[ch] !== undefined) {
                aMap[ch] = aMap[ch] + 1;
            } else {
                aMap[ch] = 1;
            }
        }

        for(ch of b) {
            if (aMap[ch] === undefined){
                return false;
            } else {
                aMap[ch] = aMap[ch] - 1;
                if (aMap[ch] === 0) {
                    delete aMap[ch];
                }
            }
        }

        if (Object.keys(aMap).length > 0) {
            return false;
        }
        return true;
    }
};

console.log("Are these strings anagrams 'hello' 'oehll' = " + anagram('hello', 'oehll'));
console.log("Are these strings anagrams 'hello' 'oehlll' = " + anagram('hello', 'oehlll'));