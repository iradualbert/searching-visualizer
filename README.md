This project is built using React.js along with Bootstrap. 

This project showcases how searching an element in a sorted array works  using  4 different searching algorithms.  Linear search algorithm is the simplest searching algorithm. In this type, we go through the entire array until we find the element we are looking  for.   The array doesn't have to be sorted, but for now, we'll be using  sorted arrays since other algorithms only work with sorted arrays. Apart from linear search which is a sequential algorithm, all algorithms use divide and conquer techniques to search for the value.
In this  project, arrays are randomly generated and naively sorted behind the scene. You can re-generate a random array by simply clicking on Generate sorted array button.
By default,  A sorted array and target value are randomly generated but they can be changed as long as  none of the algorithm is running. Additionally,  the size of the array is initially set to 50. You can generate target value to be searched. You can also change the size of the array within range of 10-200.  You can run one algorithm at a time, and when the algorithm is running; all user actions are disabled. 

Covered Algorithms and Their Time Complexity

Linear Search  - O(n): 
- Linear traverse the array until the target value is found.
-  Every item in the array is searched and if a  match is found, its index is returned, otherwise -1 is returned.  
Binary Search - O(n log(n)):  A divide-and-conquer algorithm.
- Compare x with the middle element.
- If x matches with middle element, we return the mid index.
- If x is greater than the mid element, then do a Binary Search for right half.
- If x is left is lower, then do a Binary Search for left half.
Jump Search  - √(n):
- Loop, jump and add the step to i
- linearly traverse the array till the array element is less the required element 
- and the previous element index is less than 
Exponential Search - O(log(n)): 
- Find the range where element is present
- Do Binary Search in above found range.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
