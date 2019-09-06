# Binary Tree
Trees: Unlike Arrays, Linked Lists, Stack and queues, which are linear data structures, trees are hierarchical data structures.
Tree Vocabulary: The topmost node is called root of the tree. The elements that are directly under an element are called its children. The element directly above something is called its parent. For example, ‘a’ is a child of ‘f’, and ‘f’ is the parent of ‘a’. Finally, elements with no children are called leaves.

a binary tree is a tree data structure in which each node has at most two children, which are referred to as the left child and the right child.

## Challenge
Write a function takes in the root of a binary tree, a parent node, a child node, isParent (boolean), and a coudnt (number), then return the path length between parent and the child nodes.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
I use depth first recursion to go through the Tree, then to check if the current is parent, if it is, set isParent from false to true, and start the counter.
Count until it reaches the child node and stop the process, reutrn the count -1.
This cost time: O(n) and space: O(1)

##White Boarding Solution
![binary-tree-leaves-challenge-whiteboard]("./assests/binary-tree-leaves-challenge.jpg")