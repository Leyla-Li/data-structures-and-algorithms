'use strict';

let arr1 = [];
let word = '';

function getWords (str){
  const length = str.length;

  for(let i = 0; i <= length; i++){
    if(str[i] !== ' ' && i !== length){
      word += str[i];
    }else{
      arr1.push(word);
      word = '';
    }
  }
  return firstRepeated(arr1);
}

function firstRepeated (arr1){
  const length = arr1.length;
  for(let i = 0; i <= length; i++){
    for(let j = i + 1; j < length; j++){
      if(arr1[j] === arr1[i]){
        return arr1[j];
      }
    }
  }
  return '';
}

module.exports = {getWords: getWords, firstRepeated:firstRepeated};
