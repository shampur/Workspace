var phone = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
};

let printAllPhone = (num) => {
    if (num === undefined || num === null || num.length === 0) {
        return [];
    } else {
        if (num.length === 1){
            return [phone[num]];
        } else {
            let combinations = getCombination(phone[num[0]], phone[num[1]]);
            for (let i=2; i<num.length; i++) {
                combinations = getCombination(combinations, phone[num[i]]);
            }
            return combinations;
        }
    }
};

let getCombination = (a, b) => {
    let allCombo = [];
    for(let i=0; i<a.length; i++) {
        for(let j=0; j<b.length; j++) {
            let combinedString = a[i] + b[j];
            allCombo.push(combinedString);
        }
    }
    return allCombo;
};

let comb = printAllPhone('234');
console.log('The combination of numbers = ' + JSON.stringify(comb));













/*
    Print all combination method 2
*/

var phnum = '234';

function get_all_combo(numstr) {
    var allCombo = [];
    //var revnums = numstr.slice(0).split('').reverse().join('');
    function combi(str, nums) {
        if (numstr.length === str.length && nums.length === 0) {
            allCombo.push(str);
            return;
        }

        var numtoprocess = nums[0];
        var remainingnum = nums.slice(1);
        var strtoprocess = phone[numtoprocess];
        for(var i=0; i<strtoprocess.length; i++) {
            combi(str + strtoprocess[i], remainingnum)
        }
    }
    combi('', numstr);
    return allCombo;
}

let allComb = get_all_combo(phnum);
console.log('All combination of phone new method = ' + allComb);















