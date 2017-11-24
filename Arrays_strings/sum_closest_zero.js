let mergeSort = require('./merge_sort');
let sum_closest_zero = (arr) => {
    let a = mergeSort(arr);
    let l = 0, r = a.length - 1;
    let lowestSum = Number.MAX_VALUE;
    let first = l, second = r;
    while (l < r) {
        let sum = a[l] + a[r];
        if (Math.abs(sum) < lowestSum) {
            lowestSum = Math.abs(sum);
            first = a[l];
            second = a[r];
        }
        if (sum < 0) {
            l++;
        } else {
            r--;
        }
    }
    return [first, second];
};

let closest = sum_closest_zero([1, 60, -10, 70, -80, 85]);
console.log('The sum closest to zero in the array [1, 60, -10, 70, -80, 85] is given by numbers = ' + closest[0] + ' and ' + closest[1]);