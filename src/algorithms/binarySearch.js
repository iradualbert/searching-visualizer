const midColor = "red";
const edgeColor = "turquoise"
const delay = 1000
const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const binarySearch = async (
    arr, 
    target, 
    leftPointer,  
    rightPointer, 
    setLeftPointer
    ) => {  
    
    let left = 0;
    let right = arr.length - 1
    if(leftPointer  && rightPointer){
        left = leftPointer;
        right = rightPointer
    }

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        const midDiv = document.getElementById(mid)
        const leftDiv = document.getElementById(left)
        setLeftPointer(20 + (50 * left))
        const rightDiv = document.getElementById(right)
        leftDiv.style.backgroundColor = edgeColor;
        rightDiv.style.backgroundColor = edgeColor;
        await sleep(delay)
        midDiv.style.backgroundColor = "green"
        if(arr[mid] === target ){
            return mid
        } else if ( arr[mid] > target){
            right = mid - 1
        } else {
            left = mid + 1;
            // leftPointer.style.left = `${(37 + (50 * left))}px`
        };
        await sleep(delay)
        leftDiv.style.backgroundColor = "";
        rightDiv.style.backgroundColor = "";
        midDiv.style.backgroundColor = ""
        
    }

    return null

}
export default binarySearch;