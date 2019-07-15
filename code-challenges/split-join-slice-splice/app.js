'use strict';

const extractVowels = (str) => {
    let arr = str.split('');
    let vow = [];
    let newStr = '';
    arr.forEach((item)=>{
        if(item === 'a' || item === 'e' || item === 'i' || item === 'o' ||item === 'u'){
            vow.push(item);
        }else{
            newStr += item;
        }
    });
    let result =[];
    let newVow = vow.sort();
    console.log(newVow);
    newVow = newVow.join('');
    console.log('this is sorted',newVow);
    result.push(newStr);
    result.push(newVow);
    console.log(result);
    return result;
  };

  extractVowels('The quick brown fox');