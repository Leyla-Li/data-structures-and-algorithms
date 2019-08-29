# Singly Linked List
A linked list is a data structure that stores multiple values in a linear fashion. Each value in a linked list is contained in its own node, an object that contains the data along with a link to the next node in the list. The link is a reference to another node object or null if there is no next node. If each node has just one reference to another node (most frequently called next) then the list is considered a singly linked list (or just linked list) whereas if each node has two links (usually previous and next) then it is considered a doubly linked list. 

## Challenge
Create a function that takes a string as its only argument, and should return a boolean representing whether or not the brackets in the string are balanced. There are 3 types of brackets:

Round Brackets : ()
Square Brackets : []
Curly Brackets : {}

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
I loop through the string, then if the element in the string is one of the open brackets, then I push it to a stack. Then if it is not a open brackst, I pop the top of the stack and compare that to the element.

This cost time: O(n) and space: O(1)

##White Boarding Solution
![linkedlist-merge-challenge-whiteboard]("./assests/multi-bracket-challenge.jpg")