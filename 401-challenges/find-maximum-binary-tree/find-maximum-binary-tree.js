'use strict';

class Tree {
  constructor(root){
    this.root = root;
    this.left = null;
    this.right = null;
  }

  findMaximumValue(root){
    if(root === null){
      return null;
    }else{
      let stack = [];
      let biggest = root.root;
      stack.push(root);
      while( stack.length > 0 ){
        let currentNode = stack.pop();
        if(currentNode.root >= biggest){
          biggest = currentNode.root;
        }
        if(currentNode.left !== null){
          stack.push(currentNode.left);
        }
        if(currentNode.right !== null){
          stack.push(currentNode.right);
        }
      }
      return biggest;
    }
  }
}

module.exports = Tree;
