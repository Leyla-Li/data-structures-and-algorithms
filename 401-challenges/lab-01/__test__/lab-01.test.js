'use strict';


const Test = require('../lab-01');

let arr1 = [1,2,3,4];
let arr2 = [1,2,3,4,5];
let arr3 = [];
let arr4 = [0];

const test = new Test();

describe('test if the function to see if it reverses arrays properly',()=>{
  it('length of even number',()=>{
    expect(test.reverseArr(arr1)).toEqual([4,3,2,1]);
  });

  it('length of odd number',()=>{
    expect(test.reverseArr(arr2)).toEqual([5,4,3,2,1]);
  });

  it('length of 0 number',()=>{
    expect(test.reverseArr(arr3)).toEqual([]);
  });

  it('length of one number',()=>{
    expect(test.reverseArr(arr4)).toEqual([0]);
  });
});
