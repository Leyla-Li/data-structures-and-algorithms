# String
The String global object is a constructor for strings or a sequence of characters.

## Challenge
This is a challenge to write a function that takes in a lengthy string and find out the first word repeated within the string.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
I used nested for loops. The O of space is n, and O of time is square of n. 


## API
<!-- Description of each method publicly available to your PseudoQueue -->
I first seperate words within the string and push each of the word into an array.
Then I loop through the array twice to see if the word within the array is repeated later on.

##White Boarding Solution
![repeated-word]("./assests/repeated-word-challenge.jpg")