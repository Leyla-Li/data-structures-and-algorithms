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
        return this.stackA;
    }

    dequeue(){
        console.log('got in dequeue', this.stackB, this.stackA);
        if(!this.stackB.top){
            console.log('got in checking B is empty, head of A',this.stackA.top);
            let current = this.stackA.top;
            while(current){
                let nodeToPop = this.stackA.pop();
                this.stackB.push(nodeToPop);
                current = current.next;
            }
        }
        console.log('this is stackB afterall',this.stackB);
        return this.stackB.pop();
    }
}

module.exports = pseudoQueue;