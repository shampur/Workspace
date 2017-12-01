
let printAllBraces = (n) => {
    let allBraceArray = [];
    let print = (leftRemain, rightRemain, str) => {
        if (rightRemain === 0) {
            allBraceArray.push(str);
            return;
        }
        if (leftRemain > 0) {
            print(leftRemain - 1, rightRemain, str+'(');
            if (leftRemain < rightRemain) {
                print(leftRemain, rightRemain - 1, str+')');
            }
        } else {
            print(leftRemain, rightRemain - 1, str+')');
        }
    };
    print(n, n, '');
    return allBraceArray.join(', ');
};


console.log('Print all valid combination of braces' + printAllBraces(3));