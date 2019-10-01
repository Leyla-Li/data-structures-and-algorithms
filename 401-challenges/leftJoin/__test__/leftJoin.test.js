'use strict';

const leftJoin = require('../left-join');

describe('test for leftJoin function', ()=>{
  const map1 = new Map();
  map1.set('a',1);
  map1.set('b',2);

  const map2 = new Map();
  map2.set('a',3);

  it('can left join 2 maps', ()=>{
    const result = leftJoin(map1, map2);
    expect(result.get('a')).toEqual([1,3]);
  });

});
