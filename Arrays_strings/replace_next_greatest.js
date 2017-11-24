let replace_next_greatest = (arr) => {
    let n = arr.length;
    let next_greatest = arr[n-1];
    arr[n-1] = -1;
    for (let i = n-2; i >= 0; i--) {
        let curr = arr[i];
        arr[i] = next_greatest;
        if (curr > next_greatest) {
            next_greatest = curr;
        }
    }
    return arr;

};

console.log('Replace each element of the array [16, 17, 4, 3, 5, 2] ' +
    'with next greatest element from the right = ' + replace_next_greatest([16, 17, 4, 3, 5, 2]).toString());