'use strit';

class Node{
    constructor(value){
        this.head = value;
        this.next = null;
    }
}

class Stack{
    top = new Node();

    //push a node to the top of the stack
    push(value){
        // let newNode = new Node(value);
        if(!top.head){
            top.head = newNode;
        }else{
            let current = top.head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode;
        }
        return newNode.value;
    }

    //pop a node from the top of the stack
    pop(){
        if(!top.head){
            return null;
        }else if(!top.head.next){
            let tail = top.head;
            top.head = null;
            return tail;
        }else{
            let current = top.head;
            while(current.next.next){
                tail = current.next.next;
                current = current.next;
            }
            current.next = null;
            return tail.value;
        }
    }

    //return the top value of the stack
    peek(){
        if(top.head === null){
            console.log('This Linked list\'s head is empty');
            return null;
        }
        else{
            return top.head.value;
        }
    }
};

class Queue{
    front = new Node();

    //add the given value to the end of the queue with O(1)
    enqueue(value){
        let newNode = new Node(value);
        if(!top.head){
            top.head = newNode;
        }else{
            let current = top.head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode;
        }
        return newNode.value;
    }

    //removes the node from the front of the queue and returns the node's value
    dequeue(){
        if(!top.head){
            console.log('this is an empty queue');
            return null;
        }else if(!top.head.next){
            let deleted = top.head;
            top.head = null;
            return deleted;
        }else{
            let previousHead = top.head;
            top.head = top.head.next;
            return previousHead.value;
        }
    }

    //find the front of the queue and return its value
    peek(){
        if(!top.head){
            console.log('this is an empty queue');
            return null;
        }else{
            return top.head.value;
        }
    }    

};

module.exports = {
    Stack: Stack,
    Queue: Queue
};



