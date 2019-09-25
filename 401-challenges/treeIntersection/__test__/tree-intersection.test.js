'use strict';

const Tree = require('../tree-intersection.js');
const tree = new Tree();

//createing nodes for the tree 1
const ten1 = new Tree(10);
const seven1 = new Tree(7);
const five1 = new Tree(5);
const one1 = new Tree(1);
const two1 = new Tree(2);

const eleven1 = new Tree(11);
const twelve1 = new Tree(12);

const twenty1 = new Tree(20);


// Creating the structure of the tree 1
five1.left = one1;
five1.right = two1;

ten1.left = seven1;
ten1.right = five1;

seven1.left = eleven1;
seven1.right = twelve1;

one1.right = twenty1;

const root1 = ten1;

//10 7 5 1 2 11 12 20
//2 1 12

//createing nodes for the tree 2
const fifteen2 = new Tree(15);
const eight2 = new Tree(8);
const two2 = new Tree(2);
const zero2 = new Tree(0);
const one2 = new Tree(1);

const twelve2 = new Tree(12);
const fourteen2 = new Tree(14);

const twentyOne2 = new Tree(21);


// Creating the structure of the tree 2
two2.left = zero2;
two2.right = one2;

fifteen2.left = eight2;
fifteen2.right = two2;

eight2.left = twelve2;
eight2.right = fourteen2;

zero2.right = twentyOne2;

const root2 = fifteen2;


//testing
describe('test for returning intersection and union sets of two binary trees', ()=>{

  it('can get intersection and union of two binary tree', ()=>{
    expect(tree.tree_intersection (root1, root2).intersection.has(2)).toEqual(true);
  });

});
