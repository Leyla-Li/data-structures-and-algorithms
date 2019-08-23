## Challenge
To write a function called whoWon, and given a board that is an array including 3 sub-arrays in it. Each sub-array gets 3 element that could be 'x','o',''. only if it gets 3 of the same 'x' or 'o' in a row, it can return true, or it returns false.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
I first built a helper function to check only 3 of the elements to see if they are the same value.
Then I created groups to test them by using helper function. 
I created the groups according to the abilities of winning.
time: O(n) space O(1)

##White Boarding Solution
![tick-tac-toe-challenge-whiteboard]("./assests/tik-tac-toe-whiteboard.jpg")
