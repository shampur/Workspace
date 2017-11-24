let expect = require('chai').expect;
let heapSort = require('../sorting/heap_sort');

describe('Heap sort', () => {
   it('Should return undefined if an undefined input is passed', () =>{
        let a = undefined;
        let b = heapSort(a);
        expect(b).to.equal(a);
   });

   it('Should sort the array in ascending order', () => {
        let a = [5, 20, 8, 4, 30, 1];
        let b = heapSort(a);
        expect(b).to.deep.equal([1, 4, 5, 8, 20, 30]);
   });
});