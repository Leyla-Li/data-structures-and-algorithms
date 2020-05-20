'use strict';

//Given an array of integers, return indices of the two numbers such that they add up to a specific target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  if(nums.length < 2){
      return [];
  }else{
      if(nums.length === 2){
          if(nums[0] + nums[1] === target){
              return [0,1];
          }
          return [];
      }
      for(let i = 0; i < nums.length; i++){
          for(let j = i+1; j<nums.length; j++){
              if(nums[i] + nums[j] ===  target){
                  return [i,j];
              }
          }
      }
  }
};