# Searching Algorithms Visualizer

  *This project was built using [React.js](https://reactjs.org/) along with [Bootstrap](https://getbootstrap.com/).* 

   If you want to see these algorithms in action, head over to [https://iradualbert.github.io/searching-visualizer/](https://iradualbert.github.io/searching-visualizer/)


This project showcases how searching a value in an array works. It covers 4 most popular searching algorithms namely `Linear Search`, `Jump Search`, `Binary Search` and `Exponential Search`. 
`Linear search algorithm`, being the simplest algorithm, goes through the entire array until it finds the target value.  For this type, the array doesn't have to be sorted, but for this project, all arrays are naively sorted under the hood since other 3 algorithms only work with sorted arrays. Apart from linear search which is a sequential algorithm, all other algorithms use `divide-and-conquer` technique to search for the value.
You can re-generate a random array by simply clicking on `Generate Sorted Array` button.
By default,  a sorted array and a target value are randomly generated. The size of the array is initially set to 50. You can resize the length of the array within the range of 10 - 200. You can search for a value in the array using one algorithm at time. When any algorithm is running, all user actions are disabled. 

## Covered Algorithms and Their Time Complexity

### Linear Search  - O(n): 
- Linear traverse the array until the target value is found.
-  Every item in the array is searched and if a  match is found, its index is returned, otherwise -1 is returned.  
### Binary Search - O(n log(n)):
- Compare x with the middle element.
- If x matches with middle element, we return the mid index.
- If x is greater than the mid element, then do a Binary Search for right half.
- If x is left is lower, then do a Binary Search for left half.
### Jump Search  - √(n):
- Loop, jump by fixed steps till the range of the target value may be present.
- Perform linear search for the range
### Exponential Search - O(log(n)): 
- Find the range where the target value may be present.
- Do Binary Search in above found range.


This project showcases how searching a value in an array works. It covers 4 most popular searching algorihtms namely Linear Search, Jump Search, Binary Search and Exponential Search. 
Linear search algorithm, being the simplest algorithm, goes through the entire array until it finds the target value.  For this type, the array doesn't have to be sorted, but for this project, all arrays are naively sorted under the hood since other 3 algorithms only work with sorted arrays. Apart from linear search which is a sequential algorithm, all other algorithms use divide-and-conquer technique to search for the value.

You can re-generate a random array by simply clicking on Generate Sorted Array button.
By default,  a sorted array and a target value are randomly generated. The size of the array is initially set to 50. You can resize the length of the array within the range of 10 - 200. You can search for a value in the array using one algorithm at time. Wen any algorithm is running, all user actions are disabled. 