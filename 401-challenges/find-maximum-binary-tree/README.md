# Binary Tree
Trees: Unlike Arrays, Linked Lists, Stack and queues, which are linear data structures, trees are hierarchical data structures.
Tree Vocabulary: The topmost node is called root of the tree. The elements that are directly under an element are called its children. The element directly above something is called its parent. For example, ‘a’ is a child of ‘f’, and ‘f’ is the parent of ‘a’. Finally, elements with no children are called leaves.

a binary tree is a tree data structure in which each node has at most two children, which are referred to as the left child and the right child.

## Challenge
Write a function to go throuh the binary tree and find out the maximum value of the tree.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
I used stack to go through the binary tree with depth first method so the time is O(n) and I only created a variable to store the biggest value, space would be O(1).
This cost time: O(n) and space: O(1)

##White Boarding Solution
![find-maximum-binary-tree-challenge-whiteboard]("./assests/binary-tree-maximum-challenge.jpg")