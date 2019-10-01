'use strict';

function leftJoin (map1, map2) {
  if(!map1){
    return null;
  }else if(!map2){
    for(var [key,value] of map1){
      map1.set(key, [value, null]);
    }
  }else{
    for(var [key,value] of map1){
      if(map2.has(key)){
        map1.set(key, [value, map2.get(key)]);
      }else{
        map1.set(key, [value, null]);
      }
    return map1;
    }
  }
}

module.exports = leftJoin;
