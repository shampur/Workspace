/*  Program to find the a pair of elements one from each array such that
    the Absolute difference between the two is min
*/

let findMinDiff = (a, b) => {
    let i=0, j=0;
    let m=a.length, n=b.length;
    let minDiff = Number.MAX_VALUE;
    let minPair1 = '', minPair2 = '';
    while(i<m && j<n) {
        let diff = Math.abs(a[i] - b[j]);
        if (diff < minDiff) {
            minDiff = diff;
            minPair1 = a[i];
            minPair2 = b[j];
        }
        if (a[i] <= b[j]) {
            i++;
        } else {
            j++;
        }
    }
    return [minPair1, minPair2];
};

let a = [-5, -2, 5, 30];
let b = [-1, 0, 10, 15, 20];

console.log('Minimum absolute difference between two sorted arrays = ' + findMinDiff(a, b).join(', '));