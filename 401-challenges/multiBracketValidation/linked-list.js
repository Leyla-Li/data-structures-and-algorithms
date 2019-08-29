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
      }
      return false;
  }

//Leyla -this method will print out a value representing all the value within the linked list
  toString(){
    let values = '';
    let current = this.head;
    while(current !== null){
        values += current.value;
        current = current.next;
    }
    return values;
  }

  traverse() {
   let current = this.head;
   while(current !== null) {
     console.log(current.value);
     // SOMETHING ELSE n_n
     current = current.next;
   }
  }

  //Leyla -this method will add a new node to the end of the list recursively
  append(value){
    if(this.head === null){
      this.head = new Node(value);
    }else{
      this.appendHelper(value,this.head);
    }
  }

  appendHelper(value,current){
    //base
    if(current.next === null){
      current.next = new Node(value);
      return;
    }else{
      //recursive
      this.appendHelper(value, current.next);

    }
  }

  insertBefore(value, newVal){
    if(this.head === null){
      return;
    }else if(this.head.next === null){
      const newNode = new Node(newVal);
      newNode.next = this.head;
      return;
    }else{
      let current = this.head;
      // console.log(current.next.value);
      while(current.next !== null){
        if(this.head.value === value){
          let previousHead = this.head;
          const newNode = new Node(newVal);
          this.head = newNode;
          newNode.next = previousHead;
          return;
        }else if(current.next.value === value){
          const newNode = new Node(newVal);
          const originalNext = current.next;
          current.next = newNode;
          newNode.next = originalNext;
          return;
        }else{
          current = current.next;
        }
      }
    }
  }

  insertAfter(value, newVal){
    if(this.head === null){
      return;
    }else if(this.head.next === null){
      const newNode = new Node(newVal);
      this.head.next = newNode;
      return;
    }else{
      let current = this.head;
      while(current.next !== null){
        if(current.value === value){
          const newNode = new Node(newVal);
          const originalNext = current.next;
          current.next = newNode;
          newNode.next = originalNext;
          return;
        }else{
          current = current.next;
        }
      }
    }
  }

  valueAtK(k){
    let current = this.head;
    let arrOfValues = [];
    let idx = 0;
    let length = 0;
    let result = null;
    if(k < 0){
      console.log('k is not a valid number');
      return;
    }else{
      if(this.head === null){
        console.log('linked list is empty');
        return;
      }else{
        while(current !== null){
          let thisNode = {};
          thisNode.value = current.value;
          thisNode.index = idx;
          idx++;
          length++;
          current = current.next;
          arrOfValues.push(thisNode);
        }
        if(k >= length){
          console.log('k is bigger than or equal to the length of the linked list');
        }else{
          let idxFound = length - 1 - k;
          arrOfValues.forEach(node=>{
            if(node.index === idxFound){
              console.log('got in value at k and value is ',node.value);
              result = node.value;
            }
          }); 
        }
      }
    }
    return result;
  }

}

module.exports = LinkedList;
