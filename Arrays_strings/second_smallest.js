let second_smallest = (arr) => {
    let smallest = Number.MAX_VALUE, secondSmallest = Number.MAX_VALUE;
    for (let item of arr) {
        if (item < smallest) {
            secondSmallest = smallest;
            smallest = item;
        } else {
            if (item < secondSmallest) {
                secondSmallest = item;
            }
        }
    }

    return secondSmallest;
};

console.log('The second smallest element in the array [6, 5, 2, 9, 4, 7] = ' + second_smallest([6, 5, 2, 9, 4, 7]));