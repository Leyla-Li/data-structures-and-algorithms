# Hashmap
Map is a collection of elements where each element is stored as a Key, value pair. Map object can hold both objects and primitive values as either key or value. When we iterate over the map object it returns the key,value pair in the same order as inserted.

# Left Join
The SQL LEFT JOIN returns all rows from the left table, even if there are no matches in the right table. This means that if the ON clause matches 0 (zero) records in the right table; the join will still return a row in the result, but with NULL in each column from the right table.

This means that a left join returns all the values from the left table, plus matched values from the right table or NULL in case of no matching join predicate.

## Challenge
This challenge is to write a function that LEFT JOINs two hashmaps into a single data structure.
The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.
LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row. If no values exist in the right hashmap, then some flavor of NULL should be appended to the result row.


## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
I loop through the linked list so the time is O(n) and then I also create a hashmap for checking the duplicated values, and the worst cases would be there is no duplicate, then the space would be O(n) too.
This cost time: O(n) and space: O(n)

## API
<!-- Description of each method publicly available to your Linked List -->

##White Boarding Solution
![remove-duplicate-challenge-whiteboard]("./assests/linkedlist-challenge-whiteboard.jpg")