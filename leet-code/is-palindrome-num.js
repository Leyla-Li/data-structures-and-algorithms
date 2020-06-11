/**
 * check if a given integer is palindrome
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(x === 0){
      return true;
  }
  if(x < 0 || x % 10 === 0){
      return false;
  }
  
  let temp = x;
  let rem = 0;
  let final = 0;
  
  while(x > 0){
      rem = x % 10;
      x = Math.floor(x/10);
      final = final * 10 + rem;
  }
  
  if(temp === final){
      return true;
  }
  return false;
};