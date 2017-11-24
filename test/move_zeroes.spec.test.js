var expect = require('chai').expect;
var moveZeroes = require('../Arrays_strings/Move_zeroes_to_end');

describe('Move zeroes test', () => {
    it('should return the same array if all the zeroes are already at the end', () => {
        let a = [5,4,5,0,0,0];
        let b = moveZeroes(a);
        expect(a).to.deep.equal(b);
    });

    it('should return undefined if an undefined input is passed', () => {
        let a = undefined;
        let b = moveZeroes(a);
        expect(a).to.equal(b);
    });

    it('should push all the zeroes to the end if they are distributed within the array', () => {
        let a = [4, 0, 3, 0, 0, 0, 4, 0, 8, 0];
        let b = moveZeroes(a);
        expect(b).to.deep.equal([4,3,4,8,0,0,0,0,0,0]);
    });
});