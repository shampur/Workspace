let nums = '121'

function countDecodng(nums, n) {
    if (n==0 || n==1) {
        return 1;
    } else {
        let count = 0;
        if (nums[n-1] > '0') {
            count = countDecodng(nums, n-1);
        }
        if (nums[n-2] === '1' || (nums[n-2]=== '2' && nums[n-1] < '7')) {
            count += countDecodng(nums, n-2);
        }
        return count;
    }
}

let c = countDecodng(nums, nums.length);

console.log('The number of possible encodings = ' + c);