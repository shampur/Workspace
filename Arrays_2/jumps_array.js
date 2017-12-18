var canJump = function(nums) {
    var l = 0;
    var n = nums.length - 1;
    var lookup = [];
    var success = undefined;
    function findJump(nums, l) {
        if (success) {
            return true;
        }
        if(l===n) {
            success = true;
            return true;
        } else if (l < n) {
            var jumpLength = nums[l];
            if (lookup[l] !== undefined) {
                return lookup[l];
            }
            for (var i = l+1; (i <= (jumpLength + l)) && (i <= n); i++) {
                let x = findJump(nums, i);
                if (x) {
                    lookup[l] = true;
                    return true;
                }
            }
            lookup[l] = false;
            return false;
        } else {
            return false;
        }
    }

    var jumpPossible = findJump(nums, l);
    return jumpPossible;
};

let x = [3, 2, 1, 0, 4];
let jumpYes = canJump(x);
console.log('Is the jump possible ? = ' + jumpYes);