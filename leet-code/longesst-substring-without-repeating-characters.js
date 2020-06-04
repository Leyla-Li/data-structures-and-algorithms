//Given a string, find the length of the longest substring without repeating characters.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let biggestSoFar = 0;
  let biggest = 0;
  let idx = 0;
  let c = 0;
  let set = new Set();
  if(s.length < 2){
      return s.length;
  }
  while(c<s.length){
    if(set.has(s.charAt(c))){
        set = new Set();
        idx+=1;
        c = idx;
        // set.add(s.charAt(i));
        biggestSoFar = 0;
    }else{
        set.add(s.charAt(c));
        biggestSoFar++;
        c++;  
    }    
    biggest = Math.max(biggestSoFar, biggest); 
  }
  return biggest;
};