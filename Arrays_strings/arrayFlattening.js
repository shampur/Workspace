let flatten = (arr) => {
    let finalArray = [];

    let reduce = (a) => {
        for(let item of a){
            if (item.constructor === Array) {
                reduce(item);
            } else {
                finalArray.push(item);
            }
        }
    };
    reduce(arr);
    return finalArray;
};

let a = [[1,2,[3,4]],5,6];
let b = flatten(a);

console.log('The array [[1,2,[3,4]],5,6] after flattening = ' + JSON.stringify(b));