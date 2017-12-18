/*
    Sort array of colors in one pass.
 */
let arr = [1,1,2,0,1,2,1,0,0,2,0,0];

let sortInOnePass = (arr) => {
    let n = arr.length;
    let l = 0, mid = 0, h = n-1;

    while(mid < h) {
        switch (arr[mid]) {
            case 0: swap(arr, l, mid);
                    mid++;
                    l++;
                    break;
            case 1: mid++;
                    break;
            case 2: swap(arr, mid, h);
                    h--;
                    break;
        }
    }

    return arr;

    function swap(a, i, j) {
        let temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }
};

let x = sortInOnePass(arr);
console.log('Array after sorting colors = ' + JSON.stringify(x));
