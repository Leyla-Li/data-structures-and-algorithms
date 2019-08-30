'use strict';


const Test = require('../stacks-and-queues');

const testStack = new Test.Stack();
const testQueue = new Test.Queue();

describe('test if the methods of the 2 classes work well',()=>{

  it('push a node to the top of the stack', ()=>{
    testStack.push(10);
    expect(testStack.peek()).toEqual(10);

  });

  it('pop a node from the top of the stack',()=>{
    testStack.push(20);
    testStack.pop();
    expect(testStack.peek()).toEqual(10);
  });
  it('peek at the top node of the stack',()=>{
    testStack.push(30);
    expect(testStack.peek()).toEqual(30);
  });

  it('enqueue node to the back of the queue',()=>{
    testQueue.enqueue(15);
    expect(testQueue.peekQ()).toEqual(15);

  });
  it('dequeue node to the front of the queue',()=>{
    testQueue.enqueue(25);
    testQueue.dequeue();
    expect(testQueue.peekQ()).toEqual(15);
  });
  it('peek at the front node of the queue',()=>{
    expect(testQueue.peekQ()).toEqual(15);
  });
});
