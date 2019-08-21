# Singly Linked List
A linked list is a data structure that stores multiple values in a linear fashion. Each value in a linked list is contained in its own node, an object that contains the data along with a link to the next node in the list. The link is a reference to another node object or null if there is no next node. If each node has just one reference to another node (most frequently called next) then the list is considered a singly linked list (or just linked list) whereas if each node has two links (usually previous and next) then it is considered a doubly linked list. 

## Challenge
This challenge is for building a linked list and creating Insert(), Includes(), toString() methods to it.
Second challenge is for adding methods: append(), insertBefore(), insertAfter()
Third challenge is to adding methods to the class. The method should accept a number k as argument and then return the value of the node at the position that is k from the end of the linked list.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
I use recuresive function for the .append(), which is not that effecient.
For others, I used while statement to go through the linked list to add new nodes.
For the third challenge, I first go through the linked list to get the index for each of the node and also count how many nodes are there in the linked list. Then I store the index and the value of each node into a object and push the object into an array.
This cost time: O(n) and space: O(n)

## API
<!-- Description of each method publicly available to your Linked List -->

##White Boarding Solution
![linkedlist-challenge-whiteboard]("./assests/linkedlist-challenge-whiteboard.jpg")
![linkedlist-challenge-whiteboard]("./assests/kth-from-end-whiteboard.jpg")