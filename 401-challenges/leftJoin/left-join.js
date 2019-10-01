'use strict';

function leftJoin (map1, map2) {
  if(!map1){
    return null;
  }else if(!map2){
    for(var [key,value] of map1){
      map1.set(key, [value, null]);
    }
  }else{
    for(var [key1,value1] of map1){
      if(map2.has(key1)){
        map1.set(key1, [value1, map2.get(key1)]);
      }else{
        map1.set(key1, [value1, null]);
      }
      return map1;
    }
  }
}

module.exports = leftJoin;
