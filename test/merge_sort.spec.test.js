let expect = require('chai').expect;
let mergeSort = require('../sorting/merge_sort');

describe('Merge_sort', () => {
   it('should sort the array [5,4,3,2]', () => {
       let a = [5, 4, 3, 2];
       let sorted_array = mergeSort(a);
       expect(mergeSort).to.be.a('Function');
       expect(a.sort()).to.deep.equal(sorted_array);
   });
});
