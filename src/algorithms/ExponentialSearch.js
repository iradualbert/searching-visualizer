import binarySearch from "./binarySearch";
import  { sleep, calculatePosition} from "./utils";

const delay = 1000


const exponentialSearch  = async (arr, target, setPointers) => {
    const size = arr.length
    if(arr[0] === target){
        document.getElementById(0).style.backgroundColor = "green"
        return 0
    }
    let i = 1;    
    while (i < size && arr[i] <= target){
        setPointers({left: calculatePosition(i, size)})
        i = i * 2
        await sleep(delay)
    }
    await sleep(delay)
    binarySearch(arr, target, i/2, Math.min(i, size-1), setPointers)
}

export default exponentialSearch;