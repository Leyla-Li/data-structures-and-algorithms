'use strict';

class Tree {
  constructor(root){
    this.root = root;
    this.left = null;
    this.right = null;
  }
}

function getLeaves(root){
  if(root === null){
    return [];
  }else{
    let stack = [];
    let leaves = [];
    stack.push(root);
    while( stack.length > 0 ){
      let currentNode = stack.pop();
      if(currentNode.left === null && currentNode.right === null){
        leaves.push(currentNode.root);
      }else if(currentNode.left === null){
        stack.push(currentNode.right);
      }else if(currentNode.right === null){
        stack.push(currentNode.left);
      }else{
        stack.push(currentNode.right);
        stack.push(currentNode.left);
      }
    }
    return leaves;
  }

}
module.exports = {Tree: Tree, getLeaves: getLeaves};
