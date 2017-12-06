function subStringsLessKDist(inputString, num)
{
    // WRITE YOUR CODE HERE
    var n = inputString.length;
    if (n === 0) {
        return [];
    }
    if (num > 26 || num < 0) {
        return [];
    }
    var list = [];
    for(var i=0; i<n-num; i++) {
        var chCountArry = 0;
        var pos = -1;
        var singleCharFound = false;
        var seenString = '';
        for(var j=i; j<num+i+1; j++) {
            var ch = inputString[j];
            seenString += ch;
            var charPos = ch.charCodeAt(0) - 'a'.charCodeAt(0);
            var z = 1 << charPos;
            if (z & chCountArry > 0) {
                if (pos === -1) {
                    pos = charPos;
                } else {
                    break;
                }
            } else {
                chCountArry = chCountArry | z;
            }
        }
        if ((j==num+i) && (pos!==-1)) {
            list.push(seenString) ;
        }
    }
    return list;
}

let m = subStringsLessKDist('democracy', 5);
console.log(JSON.stringify(m));