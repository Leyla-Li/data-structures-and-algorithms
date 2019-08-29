'use strict';

const PseudoQueue = require('../queue-with-stacks');
const pseudoQueue = new PseudoQueue();

describe('test for linkLists methods', ()=>{

    it('can add a node at rear of the queue', ()=>{
        let value = 10;
        pseudoQueue.enqueue(value);
        expect(pseudoQueue.stackA.top.value).toEqual(10);
    });

    it('can remove a node at front of the queue', ()=>{
        pseudoQueue.enqueue(15);
        pseudoQueue.dequeue();
        expect(pseudoQueue.stackB.top.value).toBe(15);
    });

});
