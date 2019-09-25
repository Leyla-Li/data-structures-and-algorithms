# Binary Tree
Trees: Unlike Arrays, Linked Lists, Stack and queues, which are linear data structures, trees are hierarchical data structures.
Tree Vocabulary: The topmost node is called root of the tree. The elements that are directly under an element are called its children. The element directly above something is called its parent. For example, ‘a’ is a child of ‘f’, and ‘f’ is the parent of ‘a’. Finally, elements with no children are called leaves.

a binary tree is a tree data structure in which each node has at most two children, which are referred to as the left child and the right child.

## Challenge
Write a function called tree_intersection that takes two binary tree parameters.
Without utilizing any of the built-in library methods available to your language, return a set of values found in both trees.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
I used recusion to go through the binary tree with depth first method so the time is O(n) and also because of callstack, the space will be O(n) too. I also created a set to store all the values of the first binary tree, and another one to store the intersection values, so space in the end will be O(n).
This cost time: O(n) and space: O(n)

##White Boarding Solution
![tree-intersection-challenge-whiteboard]("./assests/tree-intersection-challenge.jpg")