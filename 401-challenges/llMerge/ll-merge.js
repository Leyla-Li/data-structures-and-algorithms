'use strict';

const mergeLists= (LL1, LL2) => {
  if(!LL1 && !LL2){
    return null;
  }else if(!LL1){
    return LL2;
  }else if(!LL2){
    return LL1;
  }else{
    let c1 = LL1.head;
    let c2 = LL2.head;
    while(c1.next && c2.next){
      let originalNext1 = c1.next;
      let originalNext2 = c2.next;
      c1.next = c2;
      c2.next = originalNext1;
      c1 = originalNext1;
      c2 = originalNext2;
    }
    if(c1.next){
      return c1;
    }
    if(c2.next){
      c1.next = c2;
      return c1;
    }
  }
};

module.exports = mergeLists;
