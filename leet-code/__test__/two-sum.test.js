
'use strict';
const twoSum = require('../two-sum');

//testing
describe('test for two sum function', ()=>{

  it('can return the indexes of the 2 numbers that add up to a specific value', ()=>{
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0,1]);
  });

});