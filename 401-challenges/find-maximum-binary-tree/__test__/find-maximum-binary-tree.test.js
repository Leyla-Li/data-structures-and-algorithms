'use strict';

const Tree = require('../find-maximum-binary-tree.js');
const tree = new Tree();

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


//testing
describe('test for getting the biggest value of a binary tree', ()=>{

  it('can get the biggest value of the binary tree', ()=>{
    expect(tree.findMaximumValue(root)).toEqual(20);

  });

});
