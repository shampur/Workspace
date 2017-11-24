let powerset = (a) => {
    let powerset = [[]];
    let n = a.length;
    let setSize = Math.pow(2, n);
    for (let i = 1; i < setSize; i++) {
        let simpleSet = [];
        for (let j=0; j < n ; j ++) {
            if ((i & 1<<j) > 0) {
                simpleSet.push(a[j]);
            }
        }
        powerset.push(simpleSet);
    }
    return powerset;
};

a = [1,2,3,4];
let x = powerset(a);
console.log ('Powerset of ' + a.toString() + ' = ' + JSON.stringify(x));

