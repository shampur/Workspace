var lengthOfLongestSubstring = function(s) {
    var length = 0;
    var longest = 0;
    var lookup = new Map();
    var start = 0;
    for (var j=0; j<s.length; j++){
        if (lookup.has(s[j]) && lookup.get(s[j]) >= start) {
            start = lookup.get(s[j]) + 1;
        }
        lookup.set(s[j], j);
        longest = Math.max(longest, j-start+1);
    }
    return longest;
};

console.log(lengthOfLongestSubstring('geeksforgeeks'));