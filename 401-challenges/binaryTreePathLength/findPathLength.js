'use strict';

class Tree {
    constructor(root){
        this.root = root;
        this.left = null;
        this.right = null;
    }
}

function findPathLength (root, parent, child, isParent=false, count = 0){
    if(!root){
        return null;
    }else{
        if(root.value === parent){
            isParent = true;
        }
        if(isParent){
            if(root.left){
              findPathLength(root.left, parent, child, count+1);
            }
            if(root.right){
              findPathLength(root.right, parent, child, count+1);
            }
        }
        if(root.value === child){
            return count;
        }
        findPathLength(root.left, parent, child, count);
        findPathLength(root.right, parent, child, count);
    }
}

module.exports = {Tree: Tree, findPathLength: findPathLength};
