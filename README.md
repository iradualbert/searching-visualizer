# Searching Algorithms Visualizer

  *This project was built using [React.js](https://reactjs.org/) along with [Bootstrap](https://getbootstrap.com/).* 

   You can play around with it. [https://iradualbert.github.io/searching-visualizer/](https://iradualbert.github.io/searching-visualizer/)


This project showcases how searching an element in a sorted array works  using  4 different searching algorithms. 
`Linear search algorithm` is the simplest searching algorithm. In this type, we go through the entire array until we find the element we are looking  for.   The array doesn't have to be sorted, but for now, we'll be using  sorted arrays since other algorithms only work with sorted arrays. Apart from linear search which is a sequential algorithm, all algorithms use divide and conquer techniques to search for the value.
In this  project, arrays are randomly generated and naively sorted behind the scene. You can re-generate a random array by simply clicking on Generate sorted array button.
By default,  A sorted array and target value are randomly generated but they can be changed as long as  none of the algorithm is running. Additionally,  the size of the array is initially set to 50. You can generate target value to be searched. You can also change the size of the array within range of 10-200.  You can run one algorithm at a time, and when the algorithm is running; all user actions are disabled. 

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