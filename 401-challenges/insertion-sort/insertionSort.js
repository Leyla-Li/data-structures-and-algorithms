'use strict';

function insertionSort(arr){
  for(let i=0; i < arr.length; i++){
    j = i - 1;
    temp = arr[i];

    while(j>=0 && temp < arr[j]){
      arr[j+1] = arr[j];
      j = j-1;
    }
    arr[j+1] = temp;
  }
}

module.exports = insertionSort;