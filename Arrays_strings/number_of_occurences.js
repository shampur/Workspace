let first = (arr, x) => {
    let l = 0, h = arr.length - 1;
    let index = 0;
    while (l <= h) {
        let mid = Math.floor((l + h) / 2);
        if (x === arr[mid] && ((mid===0) || x > a[mid - 1])) {
            index = mid;
            break;
        }
        if (x > arr[mid]) {
            l = mid + 1;
        } else {
            h = mid - 1;
        }
    }
    return index;
};

let last = (arr, x) => {
    let l = 0, h = arr.length - 1;
    let index = 0;
    while (l <= h) {
        let mid = Math.floor((l + h) / 2);
        if (x === arr[mid] && ((mid===arr.length - 1) || x < a[mid + 1])) {
            index = mid;
            break;
        }
        if (x < arr[mid]) {
            h = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return index;
};

a = [3,4,4,5,6,7,7,7,8,9];
i = first(a, 7);
j = last(a, 7);
console.log('Number of occurences of 7 in [3,4,4,5,6,7,7,7,8,9] = ' + (j-i+1));