var l;
let lcs = (a, b) => {
    let m = a.length;
    let n = b.length;
    l = TwoDimArray(m + 1, n + 1);
    for (let i=0; i<=m; i++) {
        for(let j=0; j<=n; j++) {
            if (i==0 || j==0) {
                l[i][j] = 0;
            } else if (a[i-1] === b[j-1]) {
                l[i][j] = 1 + l[i-1][j-1];
            } else {
                l[i][j] = Math.max(l[i-1][j], l[i][j-1]);
            }
        }
    }
    return l[m][n];
};

let TwoDimArray = (m,n) => {
    let arr = new Array(m);
    for(let i=0; i<m; i++) {
        arr[i] = new Array(n);
    }
    return arr;
}

let printLcs = (a, b) => {
    var lcsString = '';
    let i = a.length;
    let j = b.length;
    while(i >= 0 && j >= 0) {
        if(a[i-1] === b[j-1]) {
            lcsString += a[i-1];
            i--;j--;
        } else if (l[i-1][j] > l[i][j-1]) {
            i--;
        } else {
            j--;
        }
    }
    return lcsString.split('').reverse().join('');
}

console.log('length of longest common sub sequence = ' + lcs('AGGTAB', 'GXTXAYB'));
console.log('longest common sub sequence = ' + printLcs('AGGTAB', 'GXTXAYB'));