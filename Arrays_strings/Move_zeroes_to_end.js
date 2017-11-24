let moveZeroes = (a) => {
    if (a !== undefined && a !== null && a.length > 0) {
        let arr = a.slice();
        let count = 0;
        for (let i = 0; i < arr.length; i ++) {
            if(arr[i] !== 0) {
                arr[count++] = arr[i];
            }
        }
        while(count < arr.length) {
            arr[count++] = 0;
        }
        return arr;
    } else {
        return a;
    }
};

let a = [4,0,4,2,4,0,4,0];
console.log("Pushing zereos from the array [4,0,4,2,4,0,4,0] to the end = " + moveZeroes(a).toString());
module.exports = moveZeroes;