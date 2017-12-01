let mergeSort = require('../sorting/merge_sort');

let tripletsEqualToSum = (arr, sum) => {
    let a = mergeSort(arr);
    let tripSum = 0;
    let allMatchingSum = [];
    for (let i = 0; i < a.length; i ++) {
        tripSum  = a[i];
        let l = 0;
        let r = a.length - 1;
        let totSum = 0;
        while(l <= r) {
            if ((l!==i) && (r!==i)) {
                totSum = tripSum + a[l] + a[r];
                if (totSum === sum) {
                    allMatchingSum.push([a[l], a[r], a[i]]);
                    l++;
                    r--;
                } else {
                    if (totSum < sum) {
                        l++;
                    } else {
                        r--;
                    }
                }
            } else {
                (l===i)?l++:r--;
            }
        }
    }
    return JSON.stringify(allMatchingSum);
};

let a = [1,2,3,4,5,-3,-4,-5,6,10];
console.log('triplets where sum equal to 5 in [1,2,3,4,5,-3,-4,-5,6,10] =' + tripletsEqualToSum(a, 5));