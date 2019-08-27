# Singly Linked List
A stack is a type of data structure that is linear where order is conserved. For many people, stack is known to have a LIFO (Last In First Out) mechanism. 
Similar to a stack, queue is a linear data structure where it obeys the FIFO (First In First Out) mechanism.

## Challenge
This is a challenge to use two stacks with push/pop/peek methods in the class called pseudoQueue, and create two methods called enqueue and dequeue that follow FIFO mechanism.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
I used push and pop methods from the stack. the O of space is 1, and O of time is n for dequeue. For enqueue both O are 1.


## API
<!-- Description of each method publicly available to your PseudoQueue -->
I used the push methods from the stack class since for enqueue and push they both add the new value to the head of the LinkedList.
For dequeue, I push all the nodes in stackA to stackB and then pop the top node fron stackB.

##White Boarding Solution
![queue-with-stack-challenge-whiteboard]("./assests/queue-with-stack-challenge.jpg")