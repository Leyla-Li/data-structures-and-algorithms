'use strict';

const LinkedList = require('../linked-list');
const linkedList = new LinkedList();

describe('test for linkLists methods', ()=>{

    it('can insert() a node at head', ()=>{
        let value = 10;
        let newLinkedList =  linkedList.insert(value)
        return newLinkedList
        
          .then(newLinkedList=>{
            expect(linkedList.head).toEqual('10');
        });
    });

    it('can use includes() to see if the value in a linked list', ()=>{
        let value = 10;
        let newLinkList = linkedList.insert(value);
        return newLinkedList
        
          .then(newLinkedList=>{
              expect(linkedList.includes('10')).toEqual(true);
          });
    });

    it('can use toString() to print out all the values', ()=>{
        let value = 10;
        let newLinkList =  linkedList.insert(value)
        return newLinkList

          .then(newLinkedList=>{
              expect(linkedList.toString()).toEqual(value);
          })
    });

    it('can use append(value) to add new node with value to the end of the list',()=>{
        let value = 62;
        let newLinkList = linkedList.append(value);
        return newLinkList

          .then(newLinkList=>{
              expect(linkedList.includes(62)).toEqual(true);
          })
    });

    it('can use insertBefore(value, newVal) to add a new node with the value of newVal before the node with the value of value', ()=>{
        let value = 10;
        let newVal = 55;
        let newLinkList = linkedList.insertBefore(value, newVal);
        return newLinkList

          .then(newLinkList=>{
              expect(linkedList.includes(55)).toEqual(true);
          })
    });

    it('can use insertAfter(value, newVal) to add a new node with the value of newVal after the node with the value of value', ()=>{
        let value = 10;
        let newVal = 12;
        let newLinkList = linkedList.insertAfter(value, newVal);
        return newLinkList

          .then(newLinkList=>{
              expect(linkedList.includes(12)).toEqual(true);
          })
    });




});