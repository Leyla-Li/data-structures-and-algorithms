'use strict';

const LinkedList = require('../linked-list');
const linkedList = new LinkedList();

describe('test for linkLists methods', ()=>{

    it('can insert() a node at head', ()=>{
        let value = 10;
        linkedList.insert(value);
        expect(linkedList.head.value).toEqual(10);
   
    });

    it('can use includes() to see if the value in a linked list', ()=>{
        let value = 10;
        expect(linkedList.includes(value)).toEqual(true);
    });

    it('can use toString() to print out all the values', ()=>{
        let value = 10;
        linkedList.insert(value)
        expect(linkedList.toString()).toEqual(`10${value}`);
    });

    it('can use append(value) to add new node with value to the end of the list',()=>{
        let value = 62;
        linkedList.append(value);
        console.log(linkedList.toString());
        expect(linkedList.includes(value)).toEqual(true);
    });

    it('can use insertBefore(value, newVal) to add a new node with the value of newVal before the node with the value of value', ()=>{
        let value = 10;
        let newVal = 55;
        linkedList.insertBefore(value, newVal);
        expect(linkedList.includes(55)).toEqual(true);
    });

    it('can use insertAfter(value, newVal) to add a new node with the value of newVal after the node with the value of value', ()=>{
        let value = 10;
        let newVal = 12;
        linkedList.insertAfter(value, newVal);
        console.log(linkedList);

        expect(linkedList.includes(12)).toEqual(true);
    });

    it('can use valueAtK() to check the value of the node at position that is k from the tail node of the linked list', ()=>{
        // console.log(linkedList);
        expect(linkedList.valueAtK(0)).toEqual(62);
    });



});