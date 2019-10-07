'use strict';

class Tree {
  constructor(root){
    this.root = root;
    this.left = null;
    this.right = null;
  }
}

function findPathLength (root, parent, child, isParent, count){
  console.log('count', count);
  if(!root){
    return null;
  }else{
    if(root.root === parent){
      isParent = true;
    }
    if(isParent){
      if(root.left){
        // console.log('this got in parent, going left, left value and count', root.left.root, count);
        const leftPath = findPathLength(root.left, parent, child, isParent, count+1);
        if(leftPath){
          return leftPath;
        }
      }
      if(root.right){
        // console.log('this got in parent, going right, right value and count', root.right.root, count);

        const rightPath =  findPathLength(root.right, parent, child, isParent, count + 1);
        console.log(rightPath);
        if(rightPath){
          return rightPath;
        }
      }
    }
    // console.log(root.root);
    // console.log('this is the root value', root.root);
    if(root.root === child){
      console.log('this got in child, going right, right value and count', root.root, count);
      return count;
    }

    if(!root.left || !root.right){
      return null;
    }

    findPathLength(root.left, parent, child, count)
        || findPathLength(root.right, parent, child, count);


  }
}


// const pathLength = (root, parent,child) => {
//   if(root === null) {
//     return null;
//   }
//   if(root.value === parent) {
//     return countPathLength(root, child, 0);
//   } else {
//     return pathLength(root.left, parent, child)
//       || pathLength(root.right, parent, child);
//   }
// };


// const countPathLength = (root, child, lengthSoFar) => {
//   if(root === null) {
//     return null;
//   }

//   if(root.value === child) {
//     return lengthSoFar;
//     // Vinicio - return a truthy value AND stop the recursion
//   } else {
//     console.log('---------------------------');
//     return countPathLength(root.left, child, lengthSoFar +1)
//       || countPathLength(root.right,child, lengthSoFar + 1 );
//   }
// };


//createing nodes for the tree
// const ten = new Tree(10);
// const seven = new Tree(7);
// const five = new Tree(5);
// const one = new Tree(1);
// const two = new Tree(2);
//
// const eleven = new Tree(11);
// const twelve = new Tree(12);
//
// const twenty = new Tree(20);


// Creating the structure of the tree
// five.left = one;
// five.right = two;
//
// ten.left = seven;
// ten.right = five;
//
// seven.left = eleven;
// seven.right = twelve;
//
// one.right = twenty;
//
// let root = ten;

module.exports = {Tree: Tree, findPathLength: findPathLength};
