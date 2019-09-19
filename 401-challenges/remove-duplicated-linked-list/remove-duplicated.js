'use strict';

function removeDuplicate(node){
  if(node === null || node.next === null){
    return node;
  }
  let m = new Map();
  let keyNum = 0;
  let previous = null;
  let current = node;

  while(current.next !== null){
    if(m.has(current.value)){
      previous.next = current.next;
      current = current.next;
    }else{
      previous = current;
      keyNum += 1;
      m.set(current.value,keyNum);
      current = current.next;
    }
  }
}

module.exports = removeDuplicate;
