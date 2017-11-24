let merge = (a, l, r, mid) => {
    let i = l, m = mid, j = mid + 1, n = r;
    let temp = [];
    for (let p = l ; p <= r ; p++) {
        temp[p] = a[p];
    }
    let k = l;
    while((i <= m) && (j <= n)) {
        (temp[i] < temp[j])? a[k++] = temp[i++] : a[k++] = temp[j++];
    }
    while (i<=m) {
        a[k++] = temp[i++];
    }
    while (j<=n) {
        a[k++] = temp[j++];
    }
};

let merge_sort = (a, l, r) => {
    if (l < r) {
        let mid = Math.floor((l + r) / 2);
        merge_sort(a, l, mid);
        merge_sort(a, mid + 1, r);
        merge(a, l, r, mid);
    }
    return a;
};

let sort_array = (a) => {
    let b = merge_sort(a.slice(), 0, a.length - 1);
    return b;
};

a = [8,3,5,6,4];
merge_sort(a, 0, a.length - 1);
console.log('The sorted array = ' + a.toString());

module.exports = sort_array;