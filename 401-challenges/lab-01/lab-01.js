'use strict';

//reverse an array

class Test{
  reverseArr(arr){
    if(arr === [] || typeof(arr) !== 'object'){
      return arr;
    }else if(arr.length % 2 === 0){
      for(let i = 1; i <= arr.length/2; i++){
        let currentNum = arr[i-1];
        arr[i-1] = arr[arr.length-i];
        arr[arr.length-i] = currentNum;
      }
    }else{
      for(let x = 1; x <= (arr.length-1)/2; x++){
        let currentNum = arr[x-1];
        arr[x-1] = arr[arr.length-x];
        arr[arr.length-x] = currentNum;
      }
    }
    console.log(arr);
    return arr;
  }
}

module.exports = Test;
