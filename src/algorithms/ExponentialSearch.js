import binarySearch from "./binarySearch";
import  { sleep, colors } from "./utils";

const exponentialSearch  = async (arr, target) => {
    const size = arr.length
    if(arr[0] === target){
        document.getElementById(0).style.backgroundColor = "green"
        return 0
    }
    let i = 1;
    let currentDiv = document.getElementById(i)
    
    while (i < size && arr[i] <= target){
        currentDiv.style.backgroundColor = colors.midColor
        i = i * 2
        await sleep(100)
        currentDiv = document.getElementById(i)
    }
    await sleep(1000)
    binarySearch(arr, target, i/2, Math.min(i, size-1))
}

export default exponentialSearch;