let pattern =
    [
        ['I', 'B', 'C', 'A', 'L', 'K', 'A'],
        ['D', 'R', 'F', 'C', 'A', 'E', 'A'],
        ['G', 'H', 'O', 'E', 'L', 'A', 'D']
    ]

let printZigZag = (pattern, n) => {
    let j = 0;
    let i = 0;
    let patStr = [];
    let directionDown = true;
    while (j < n) {
        patStr.push(pattern[i][j]);
        if (i + 1 === pattern.length) {
            directionDown = false;
        }

        if (i - 1 === -1) {
            directionDown  = true;
        }


        if (directionDown) {
            i++;
        } else {
            i--;
        }
        j++;
    }

    return patStr;
};

let patternString = printZigZag(pattern, 7);
console.log('The zig zag pattern = ' + JSON.stringify(patternString));

