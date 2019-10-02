# Insertion Sort
Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. However, insertion sort provides several advantages:

* Simple implementation
* Efficient for (quite) small data sets, much like other quadratic sorting algorithms
More efficient in practice than most other simple quadratic (i.e., O(n2)) algorithms such as selection sort or bubble sort
* Adaptive, i.e., efficient for data sets that are already substantially sorted: the time complexity is O(kn) when each element in the input is no more than k places away from its sorted position
* Stable; i.e., does not change the relative order of elements with equal keys
* In-place; i.e., only requires a constant amount O(1) of additional memory space
Online; i.e., can sort a list as it receives it

## Challenge
Explain a the insertion sort function

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
The provided code use a for loop and a while loop, so the time will be O(n2), and because everything is happening in place so the space will be O(1)
This cost time: O(n2) and space: O(n)

## White Boarding Solution
![insertion-sort-challenge-whiteboard]("./assests/insetion-sort-challenge.jpg")