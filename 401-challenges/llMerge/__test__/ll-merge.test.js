'use strict';

const LinkedList = require('../linked-list');
const mergeLists = require('../ll-merge');
const linkedList1 = new LinkedList();
const linkedList2 = new LinkedList();


describe('test for merging 2 linkLists', ()=>{
  it('can merge 2 linked list together into the first linked list and return the first one',()=>{
    linkedList1.insert(1);
    linkedList1.insert(2);
    linkedList1.insert(3);
    linkedList2.insert(4);
    linkedList2.insert(5);

    mergeLists(linkedList1,linkedList2);
    expect(linkedList1.head.next.value).toEqual(5);
  });


});
