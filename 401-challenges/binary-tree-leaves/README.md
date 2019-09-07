# Binary Tree
Trees: Unlike Arrays, Linked Lists, Stack and queues, which are linear data structures, trees are hierarchical data structures.
Tree Vocabulary: The topmost node is called root of the tree. The elements that are directly under an element are called its children. The element directly above something is called its parent. For example, ‘a’ is a child of ‘f’, and ‘f’ is the parent of ‘a’. Finally, elements with no children are called leaves.

a binary tree is a tree data structure in which each node has at most two children, which are referred to as the left child and the right child.

## Challenge
Write a function to write all the leaves in a binary tree

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
I used while loop to traverse through the tree with Depth First method. Then while popping the top of the stack off, I also check if it has any children. If not, I push it to the array of leaves.
This cost time: O(n) and space: O(w+h)

##White Boarding Solution
![binary-tree-leaves-challenge-whiteboard]("./assests/binary-tree-leaves-challenge.jpg")