'use strict';

const LinkedList = require('../linked-list');
const linkedList = new LinkedList();

describe('test for linkLists methods', ()=>{

    it('can insert() a node at head', ()=>{
        let value = 10;
        linkedList.insert(value);
        expect(linkedList.head.value).toEqual(10);
   
    });

});