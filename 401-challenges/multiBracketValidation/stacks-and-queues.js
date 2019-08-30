'use strit';

const LinkedList = require('./linked-list');

class Stack{
  constructor(){
    this.storage = new LinkedList();
    this.top = this.storage.head;
  }

  //push a node to the top of the stack
  push(value){
    // if(!top.head){
    //     top.head = newNode;
    // }else{
    //     let current = top.head;
    //     while(current.next){
    //         current = current.next;
    //     }
    //     current.next = newNode;
    // }
    // return newNode.value;
    this.storage.insert(value);
    this.top = this.storage.head;
  }

  //pop a node from the top of the stack
  pop(){
    this.top = this.storage.head;
    // console.log('in the pop method, top and storage',this.top,this.storage);
    if(!this.top){
      return null;
    }else{
      let deleted = this.top;
      this.top = this.top.next;
      // console.log('got in else in pop, deleted and new top', deleted, this.top);
      return deleted.value;
    }
  }

  //return the top value of the stack
  peek(){
    if(this.top === null){
      // console.log('This Linked list\'s head is empty');
      return null;
    }
    else{
      return this.top.value;
    }
  }
}

class Queue{
  constructor(){
    this.storage = new LinkedList();
    this.rear = this.storage.head;
    this.front = null;
  }
  //add the given value to the end of the queue with O(1)
  enqueue(value){
    this.storage.insert(value);
  }

  //removes the node from the front of the queue and returns the node's value
  dequeue(){
    this.rear = this.storage.head;
    if(!this.rear){
      console.log('this is an empty queue');
      return null;
    }else if(!this.rear.next){
      let deleted = this.rear;
      this.rear = null;
      return deleted.value;
    }else if(!this.rear.next.next){
      let deleted = this.rear.next;
      return deleted.value;
    }else{
      let current = this.rear;
      while(current.next.next){
        current = current.next;
      }
      let deleted = current.next.value;
      current.next = null;
      return deleted;
    }
  }

  //find the front of the queue and return its value
  peekQ(){
    this.rear = this.storage.head;
    if(!this.rear){
      console.log('this is an empty queue');
      return null;
    }else{
      let current = this.rear;
      while(current.next){
        current = current.next;
      }
      return current.value;
    }
  }

}

module.exports = {
  Stack: Stack,
  Queue: Queue,
};



