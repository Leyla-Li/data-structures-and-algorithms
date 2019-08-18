'use strict';

const Node = require('./node');

class LinkedList {
  constructor(){
    this.head = null;
  }

//Leyla - this insert method will insert a new node with the argument value to the linked list Head
  insert(value){
    const newHead = new Node(value);

    if (this.head === null) {
      this.head = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    console.log(this);
    return this;
  }

//Leyla -this is a method to find out if value is in any nodes in the linked list
  includes(value){
    let current = this.head;

    while(current !== null){
        if(current.value === value){
            return true;
        }else{
            current = current.next;
        }
        return false;
    }
  }

//Leyla -this method will print out a value representing all the value within the linked list
  toString(){
    let values = '';
    let current = this.head;
    while(current !== null){
        values += this.value;
        current = current.next;
    }
    console.log(values);
    return values;
  }

//   traverse() {
//    let current = this.head;
//    while(current !== null) {
//      console.log(current.value);
//      // SOMETHING ELSE n_n
//      current = current.next;
//    }
//   }
}

module.exports = LinkedList;