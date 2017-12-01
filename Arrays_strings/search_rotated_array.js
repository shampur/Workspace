let searchRotated = (arr, k) => {
    let l = 0;
    let n = arr.length;
    let h = n-1;

    while(l <= h) {
        let mid = Math.floor((l + h)/2);
        if (arr[mid] === k) {
            return mid;
        }
        if (arr[mid] < arr[h]) {
            /* This implies the pivot is on the left part of the array and the right part is sorted */
            if ((k > arr[mid]) && k <= arr[h]) {
                l = mid + 1;
            } else {
                h = mid - 1;
            }
        } else {
            /* This implies the pivot is on the right part if the array and the left part is sorted */
            if (k < arr[mid] && k >= arr[l]){
                h = mid - 1;
            } else {
                l = mid + 1;
            }
        }
    }

    return -1;
};


let a = [4, 5, 6, 1, 2, 3];

console.log('Element 2 is found in position = ' + searchRotated(a, 2));
console.log('Element 10 is found in position = ' + searchRotated(a, 10));
