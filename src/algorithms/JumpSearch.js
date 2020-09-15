import linearSearch from "./linearSearch";
import { calculatePosition, sleep } from "./utils"
const delay = 1000


const jumpSearch = async (arr, target, setPointers) =>{
    const size = arr.length;
    let step =  Math.floor(Math.sqrt(size));
    let start = 0;
    let end = step;
    if( size === 0){
        document.getElementById(0).style.backgroundColor = "green";
        return -1
    }
    while( arr[end] < target) {
        setPointers({
            left: calculatePosition(start, size),
            right: calculatePosition(end, size)
        })
        await sleep(delay)
        if(arr[start] > target){
            return -1
        }
        start = end;
        end += step;
        setPointers({
            left: calculatePosition(start, size),
            right: calculatePosition(Math.min(end, size - 1), size)
        })
    }
    // call linear search
    return linearSearch(arr, target, setPointers, start)

}

export default jumpSearch;

