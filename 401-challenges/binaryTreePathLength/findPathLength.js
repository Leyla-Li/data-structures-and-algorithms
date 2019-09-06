'use strict';

class Tree {
    constructor(root){
        this.root = root;
        this.left = null;
        this.right = null;
    }
}

function findPathLength (root, parent, child, count){
    if(!root){
        return null;
    }else{
        // console.log('this is the root value', root.root);
        if(root.root === parent){
            if(root.left){
                // console.log('this got in parent, going left, left value and count', root.left.root, count);
              return findPathLength(root.left, parent, child, count+1);
            }
            if(root.right){
                // console.log('this got in parent, going right, right value and count', root.right.root, count);

              return findPathLength(root.right, parent, child, count+1);
            }
        }
        if(root.root === child){
            // console.log('this got in child, going right, right value and count', root.root, count);
            return count + 1;
        }
        findPathLength(root.left, parent, child, count)
        || findPathLength(root.right, parent, child, count);
    }
    console.log('this is the count in the end',count);
}

//createing nodes for the tree
const ten = new Tree(10);
const seven = new Tree(7);
const five = new Tree(5);
const one = new Tree(1);
const two = new Tree(2);

const eleven = new Tree(11);
const twelve = new Tree(12);

const twenty = new Tree(20);


// Creating the structure of the tree
five.left = one;
five.right = two;

ten.left = seven;
ten.right = five;

seven.left = eleven;
seven.right = twelve;

one.right = twenty;

let root = ten;

console.log(findPathlength(root, 7, 12, 0))

module.exports = {Tree: Tree, findPathLength: findPathLength};
