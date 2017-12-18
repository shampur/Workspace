let minCoinRequired = (a, v, coinObj) => {
    if (v==0) {
        return 0;
    } else {
        let res = Number.MAX_VALUE;
        for (let i=0 ; i<a.length; i++) {
            if (a[i] <= v) {
                let subres = (coinObj[v-a[i]] !== undefined)? coinObj[v-a[i]] : minCoinRequired(a, v-a[i], coinObj);
                if ((subres !== Number.MAX_VALUE) && (subres + 1 < res)) {
                    res = subres + 1;
                }
            }
        }
        coinObj[v] = res;
        return res;
    }
};

let x = [1, 3, 6, 8];
let v = 18;
let minCoin = minCoinRequired(x, v, {});
console.log('Minimum number of coins required to make a sum of 18 with [1, 3, 6, 8] = ' + minCoin);