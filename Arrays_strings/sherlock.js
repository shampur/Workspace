function isValid(s) {
    // Complete this function

    if ((typeof s !== 'string') || (s.length === 0)) {
        return 'NO';
    } else {
        let trackObj = {};
        for (let ch in s) {
            if (trackObj[s[ch]] === undefined) {
                trackObj[s[ch]] = 1;
            } else {
                trackObj[s[ch]] += 1;
            }
        }

        let smallest = Number.MAX_VALUE;
        let smallestChar = '';
        for(let charKey in trackObj) {
            if (trackObj[charKey] < smallest){
                smallest = trackObj[charKey];
                smallestChar = charKey;
            }
        }

        let other = 0;
        if(smallest===1) {
            for(let charKey in trackObj) {
                if (trackObj[charKey] !== smallest){
                    if (other > 0){
                        if (other !== trackObj[charKey]) {
                            return 'NO'
                        }
                    } else {
                        other = trackObj[charKey];
                    }
                } else {
                    if (charKey !== smallestChar) {
                        return 'NO'
                    }
                }
            }
            return 'YES';
        } else {
            let totDiff = 0;
            for(let charKey in trackObj) {
                if(trackObj[charKey] !== smallest) {
                    totDiff += (trackObj[charKey] - smallest);
                    if (totDiff > 1) {
                        return 'NO';
                    }
                }
            }
            return 'YES';
        }
    }
}

let str = 'tfgyrknpgngtqgjccbyctwdcymwrcjtpoaflkeoxfxijxkngpjoofggsozftkpgxakptmzjxugavazwllxdtrjrrbjmrqwfxaby';
let a = str.split('').sort().join('');

console.log("Sherlock_valid = " + isValid(str));