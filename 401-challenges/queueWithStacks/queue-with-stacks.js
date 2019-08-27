'use strit';

const Test = require('./stacks-and-queues');
const Stack = Test.Stack;

class pseudoQueue{
    constructor(){
        this.stackA = new Stack();
        this.stackB = new Stack();
    }

    enqueue(value){
        this.stackA.push(value);
    }

    dequeue(){
        if(!this.stackB){
            let current = this.stackA.head;
            while(current){
                let nodeToPop = this.stackA.pop;
                this.stackB.push(nodeToPop.value);
            }
        }
        return this.stackB.pop();
    }
}

module.exports = pseudoQueue;