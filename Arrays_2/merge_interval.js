let mergeInterval = (intrArr) => {
    let sortedInt = sortIntervals(intrArr);
    let n = sortedInt.length;
    let curr = 0;
    let intervalCount = 1;
    for (let i=1; i<n; i++) {
        let next = i;
        if (sortedInt[curr][1]>=sortedInt[next][0]) {
            if (sortedInt[curr][1] < sortedInt[next][1]) {
                sortedInt[curr][1] = sortedInt[next][1];
            }
        } else {
            curr++;
            sortedInt[curr] = sortedInt[next];
            intervalCount++;
        }
    }
    return JSON.stringify(sortedInt.slice(0, intervalCount));
};

let sortIntervals = (intArr) => {
    let sortArr = intArr.slice();
    let n = sortArr.length;
    for(let i=0; i<n-1; i++) {
        for(let j=i+1; j<n; j++) {
            if (sortArr[i][0]>sortArr[j][0]){
                let temp = sortArr[i];
                sortArr[i] = sortArr[j];
                sortArr[j] = temp;
            }
        }
    }
    return sortArr;
};

let x = [[1,3], [8,16], [4,6], [3,6], [11, 14]];
let z = mergeInterval(x);
console.log('Intervals after merging = ' + z);