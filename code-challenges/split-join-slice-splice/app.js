'use strict';

const extractVowels = (str) => {
    let arr = [];
    let vows = [];
      if(str.match(/a/i)){
        arr = str.split('a');
        str = arr.join('');
        vows.push('a');
      }
      if(str.match(/e/i)){
          arr = str.split('e');
          str = arr.join('');
          vows.push('e');
      }
      if(str.match(/i/i)){
          arr = str.split('i');
          str = arr.join('');
          vows.push('i');
      }
      if(str.match(/o/i)){
          arr = str.split('o');
          str = arr.join('');
          vows.push('o');
      }
      if(str.match(/u/i)){
          arr = str.split('u');
          str = arr.join('');
          vows.push('u');
      }
      let vowStr = vows.join('');
      console.log(str,vowStr);
      let result = [];
      result.push(str);
      result.push(vowStr);
      console.log(result);
      return result;
      
  };

  extractVowels('The quick brown fox');