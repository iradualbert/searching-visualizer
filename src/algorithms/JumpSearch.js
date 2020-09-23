import linearSearch from "./linearSearch";
import { calculatePosition, sleep } from "./utils"
const delay = 1000


const jumpSearch = async (arr, target, setPointers) => {
    const size = arr.length;
    let step = Math.floor(Math.sqrt(size));
    let start = 0;
    let end = step;
    if (size === 0) {
        document.getElementById(0).style.backgroundColor = "green";
        return -1
    }
    while (arr[end] < target) {
        setPointers({
            left: calculatePosition(start, size),
            right: calculatePosition(end, size)
        })
        await sleep(delay)
        if (arr[start] > target) {
            return -1
        }
        start = end;
        end += step;
        setPointers({
            left: calculatePosition(start, size),
            right: calculatePosition(Math.min(end, size - 1), size)
        });
        for(let i=0; i < start; i++){
            setTimeout(() => {
                document.getElementById(i).classList.add("searched")
            }, 1000);
        }
    }
    await sleep(delay);
    for(let i= end +1; i < size; i++){
        document.getElementById(i).classList.add("searched")
    }
    await sleep(100);
    return linearSearch(arr, target, setPointers, start)

}

export default jumpSearch;

