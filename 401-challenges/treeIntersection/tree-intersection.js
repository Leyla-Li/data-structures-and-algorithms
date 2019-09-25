'use strict';

class Tree {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }

  getVal(root, values){
    values.add(root.value);
    if(root.left){
      values.add(root.left.value);
      this.getVal(root.left, values);
    }
    if(root.right){
      values.add(root.right.value);
      this.getVal(root.right, values);
    }
    return values;
  }

  validation (root, values, intersection) {
    if(values.has(root.value)){
      intersection.add(root.value);
    }else{
      values.add(root.value);
    }

    if(root.left){
      if(values.has(root.left.value)){
        this.validation (root.left, values, intersection.add(root.left.value));
      }else{
        this.validation (root.left, values.add(root.left.value), intersection);
      }
      
    }

    if(root.right){
      if(values.has(root.right.value)){
        this.validation (root.right, values, intersection.add(root.right.value));
      }else{
        this.validation (root.right, values.add(root.right.value), intersection);
      }
    }
    console.log('this is the all the values and inter', values, intersection);
    return {'values': values, 'intersection': intersection};
  }

  tree_intersection (root1, root2) {
    let values = new Set();
    let intersection = new Set();
    let valOfTree;
    if(!root1 && !root2){
      return {'intersection: ': null, 'union: ': null};
    }else if(root1 && !root2){
      return {'intersection: ': null, 'union: ': this.getVal(root1, values)};
    }else if(!root1 && root2){
      return {'intersection: ': null, 'union: ': this.getVal(root2, values)};
    }else if(root1 && root2) {
      valOfTree = this.getVal(root1, values);
    //   console.log(valOfTree);
    //   console.log(this.validation(root2,valOfTree, intersection));
      this.validation(root2, valOfTree, intersection);
    }
    console.log(valOfTree, intersection);
    return {valOfTree, intersection};
  }
}

module.exports = Tree;
