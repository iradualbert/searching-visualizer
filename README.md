# Searching Algorithms Visualizer

  *This project was built using [React.js](https://reactjs.org/) along with [Bootstrap](https://getbootstrap.com/).* 

   If you want to see the algorithms in action, head over to [https://iradualbert.github.io/searching-visualizer/](https://iradualbert.github.io/searching-visualizer/)


This project showcases how searching an element in a sorted array works  using  4 different searching algorithms. 
`Linear search algorithm`, being the simplest algorithm, goes through the entire array until it finds the target value.  For this type, the array doesn't have to be sorted, but in this project, all generated arrays are naively sorted under the hood since other algorithms only work with sorted arrays. Apart from linear search which is a sequential algorithm, all other algorithms use `divide-and-conquer` techniques to search for the value.
You can re-generate a random array by simply clicking on `Generate sorted array` button.
By default,  a sorted array and a target value are randomly generated. Additionally,  the size of the array is initially set to 50. You can resize the length of the array with the range of 10 - 200. You can search for a value in the array using one algorithm at time. when any algorithm is running, all user actions are disabled. 

## Covered Algorithms and Their Time Complexity

### Linear Search  - O(n): 
- Linear traverse the array until the target value is found.
-  Every item in the array is searched and if a  match is found, its index is returned, otherwise -1 is returned.  
### Binary Search - O(n log(n)):  A divide-and-conquer algorithm.
- Compare x with the middle element.
- If x matches with middle element, we return the mid index.
- If x is greater than the mid element, then do a Binary Search for right half.
- If x is left is lower, then do a Binary Search for left half.
### Jump Search  - √(n):
- Loop, jump and add the step to i
- linearly traverse the array till the array element is less the required element 
- and the previous element index is less than 
### Exponential Search - O(log(n)): 
- Find the range where element is present
- Do Binary Search in above found range.