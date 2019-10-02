# Blog Notes: Insertion Sort
Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. However, insertion sort provides several advantages:

* Simple implementation
* Efficient for (quite) small data sets, much like other quadratic sorting algorithms
More efficient in practice than most other simple quadratic (i.e., O(n2)) algorithms such as selection sort or bubble sort
* Adaptive, i.e., efficient for data sets that are already substantially sorted: the time complexity is O(kn) when each element in the input is no more than k places away from its sorted position
* Stable; i.e., does not change the relative order of elements with equal keys
* In-place; i.e., only requires a constant amount O(1) of additional memory space
Online; i.e., can sort a list as it receives it

## Learning Objectives
We will learn about how to write a function for insertion sort, which takes in an unordered array and then sort it in place and return an ordered array (from low to high).

## Diagram
![insertion-sort-challenge-whiteboard]("./assests/insetion-sort-challenge.jpg")

## Algorithm
The function first run a for loop to go through every element in the array and then for each element, it runs a while loop to make sure that before this element, all the numbers are sorted and then go on to the next element in the array until all the numbers are sorted.

## Pseudocode

## Readings and References
### Watch

* [Video](https://youtu.be/OGzPmgsI-pQ)
### Read

* [What is Insertion Sort](https://en.wikipedia.org/wiki/Insertion_sort)
