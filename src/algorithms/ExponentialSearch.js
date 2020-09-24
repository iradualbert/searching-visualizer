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
    let currentDiv = undefined;
    while (i < size && arr[i] <= target){
        currentDiv = document.getElementById(i)
        setPointers({left: calculatePosition(i, size)});
        await sleep(500)
        currentDiv.classList.add("interval")
        await sleep(delay)
        for(let k=0; k < i; k++){
            document.getElementById(k).classList.add("searched");
        };
        i = i * 2;
        await sleep(delay)
    }
    await sleep(delay)
    return binarySearch(arr, target, i/2, Math.min(i, size-1), setPointers)
}

export default exponentialSearch;