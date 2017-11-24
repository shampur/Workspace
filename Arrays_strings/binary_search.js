/*
Todo: Binary search using recursion
 */

let binary_search = (arr, l, r, x) => {
    if (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (arr[mid] === x) {
            return mid;
        } else {
            if (x < arr[mid]) {
                return binary_search(arr, l, mid-1, x);
            } else {
                return binary_search(arr, mid + 1, r, x);
            }
        }
    }
    return -1;
};

arr = [1,2,3,7,8,9];
console.log('element 3 is found in array [1,2,3,7,8,9] = at position = ' + binary_search(arr, 0, arr.length - 1, 3));

