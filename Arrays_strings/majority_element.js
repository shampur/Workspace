/*
Todo : Defining a private method in javascript is not supported as of ECMASCRIPT6
Todo : So as a workaround we can wrap the priavte method inside an object and use the call method inside the class.
 */

const candidateElement = {
    findCandidateElement() {
        let maj_index = 0, count = 1;
        for (let i = 1 ; i < this.numberArray.length ; i++) {
            if (this.numberArray[i] === this.numberArray[maj_index]) {
                count++;
            } else {
                count--;
            }
            if (count === 0) {
                maj_index = i;
                count = 1;
            }
        }
        return this.numberArray[maj_index];
    }
};

class MajorityFinder {
    constructor(numberArray) {
        this.numberArray = numberArray;
    }

    findMajorityElement() {
        let cand = candidateElement.findCandidateElement.call(this);
        let count = 0;
        for (let item of this.numberArray) {
            if (item === cand) {
                count ++;
            }
        }
        if (count > (this.numberArray.length / 2)) {
            return cand;
        } else {
            console.log("No Majority element found");
            return null;
        }
    }
}

const majorityElement = new MajorityFinder([2,5,1,5,5,5]);
console.log("The majority element in the array = " + majorityElement.findMajorityElement());
