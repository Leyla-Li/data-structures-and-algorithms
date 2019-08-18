'use strict';

const LinkedList = require('../linked-list');
const linkedList = new LinkedList();

describe('test for linkLists methods', ()=>{

    it('can insert() a node at head', ()=>{
        let value = 10;
        return linkedList.insert(value)
        // return linkedList
        
          .then(newLinkedList=>{
            expect(newLinkedList.head).toEqual('10');
        });
    });

    it('can use includes() to see if the value in a linked list', ()=>{
        let value = 10;
        linkedList.insert(value);
        return linkedList
        
          .then(newLinkedList=>{
              expect(newLinkedList.includes('10')).toEqual(true);
          });
    });

    it('can use toString() to print out all the values', ()=>{
        let value = 10;
        return linkedList.insert(value)
          .then(newLinkedList=>{
              expect(newLinkedList.toString()).toEqual(value);
          })
    });




});