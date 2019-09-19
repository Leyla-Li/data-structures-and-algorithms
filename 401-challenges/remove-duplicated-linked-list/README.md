# Singly Linked List
A linked list is a data structure that stores multiple values in a linear fashion. Each value in a linked list is contained in its own node, an object that contains the data along with a link to the next node in the list. The link is a reference to another node object or null if there is no next node. If each node has just one reference to another node (most frequently called next) then the list is considered a singly linked list (or just linked list) whereas if each node has two links (usually previous and next) then it is considered a doubly linked list. 

## Challenge
This challenge is to write a function to remove any duplicated values in a singly linked list.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
I loop through the linked list so the time is O(n) and then I also create a hashmap for checking the duplicated values, and the worst cases would be there is no duplicate, then the space would be O(n) too.
This cost time: O(n) and space: O(n)

## API
<!-- Description of each method publicly available to your Linked List -->

##White Boarding Solution
![remove-duplicate-challenge-whiteboard]("./assests/linkedlist-challenge-whiteboard.jpg")