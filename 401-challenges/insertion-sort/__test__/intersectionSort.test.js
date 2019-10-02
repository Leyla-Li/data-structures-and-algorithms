'use strict';
const insertionSort = require('../insertionSort');

//testing
describe('test for sorting an array', ()=>{

  it('can sort an unordered array from low to high', ()=>{
    expect(insertionSort([2,4,3,1])).toEqual([1,2,3,4]);
  });

});
