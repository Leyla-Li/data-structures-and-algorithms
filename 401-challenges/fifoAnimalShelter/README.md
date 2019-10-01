# Queues
A queue is a simple data structure that allows elements to be inserted from one end, called the rear (also called tail), and deleted from the other end, called the front (also called head).

This behavior is called FIFO (First in First Out).

## Challenge
Create a class called AnimalShelter which holds only dogs and cats. The shelter operates using a first-in, first-out approach.

Implement the following methods:
enqueue(animal): adds animal to the shelter. animal can be either a dog or a cat object.
dequeue(pref): returns either a dog or a cat. If pref is not "dog" or "cat" then return null.

## Approach & Efficiency
I used the built in Queue and its enqueue and dequeue methods for the Animal

## API
<!-- Description of each method publicly available to your Stack and Queue-->

###Node
-

###Stack
-push: push a value to the top of the stack
-pop: remove a value off the top of the stack
-peek: have a look at the top of the value of the stack

###Queue
-push: push a value to the end of the queue
-pop: remove a value off the front of the queue
-peek: have a look at the front of the value of the stack