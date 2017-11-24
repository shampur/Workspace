function findNumber(arr, k) {
    var n = arr[0];
    var k = arr[(arr.length - 1)];
    var a = arr.slice(1,n + 1).sort();
    console.log(a.toString());
    var l = 0, r = n-1;
    while(l <= r){
        let mid = Math.floor((l + r) / 2);
        if (a[mid] === k){
            return 'YES';
            break;
        } else {
            if (k < a[mid]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
    }
    return 'NO';
}

let a = [5,1,2,3,4,5,1];
x = findNumber(a, k);