#Binary Search
Alright, lets say your doing a search for the number 8 in this array [1, 2, 3, 4, 5, 6, 7, __8__, 9, 10 , 11, 12, 13,
14, 15, 16, 17, 18, 19, 20]. The array is cut in half, and the middle index 10 is greater than 8. Now, all numbers greater than 10 are
now excluded out of the search, and the new range 1-10 is formed. The new range will be cut in half again comparing 5 to 8. 8 is 
greater than 5 so now all numers less than 5 are excluded and the new reange 5-10 is formed. These steps are repeteaded over and
over until the number 8 is found, or until there are no more numbers to form a range.

##Performance
    Average: O(log n);
    Worst: O(log n);
    Best: O(1);
