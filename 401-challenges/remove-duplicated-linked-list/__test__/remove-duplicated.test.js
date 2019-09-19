'use strict';

const removeDuplicate = require('../remove-duplicated');
const LinkedList = require('../linked-list');;
const linkedList = new LinkedList();

describe('test for removing duplicate in a singly linked list', ()=>{

  it('can remove a duplicate in the linked list', ()=>{
    linkedList.insert(10);
    linkedList.insert(4);
    linkedList.insert(13);
    linkedList.insert(14);
    linkedList.insert(13);
    linkedList.insert(10);
    console.log('this is the linkedlist head next', linkedList.head.next);
    removeDuplicate(linkedList.head);
    expect(linkedList.valueAtK(3)).toEqual(13);
  });

});
