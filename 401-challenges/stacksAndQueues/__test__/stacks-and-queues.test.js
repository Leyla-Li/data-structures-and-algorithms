'use strict';


const Test = require('../stacks-and-queues');

const testQueue = new Test.Queue();
// const queue = new LinkedList();

describe('test if the methods of the 2 classes work well',()=>{
    it('push a node to the top of the stack', ()=>{
        const testStack = new Test.Stack();
        let value = 10;
        testStack.push(value);
        expect(testStack.head.value).toEqual(10);

    });
});
