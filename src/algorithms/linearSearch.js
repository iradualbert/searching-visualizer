import { sleep, calculatePosition } from "./utils"
const delay = 1000

async function linearSearch(
    arr,
    target,
    setPointers,
    startIndex = 0
) {
    const size = arr.length
    for (let i = startIndex; i < size; i++) {
        setPointers({ left: calculatePosition(i, size) })
        if (arr[i] === target) {
            await sleep(delay)
            document.getElementById(i).style.backgroundColor = "green";
            return i
        }
        else if(arr[i] > target ){
            await sleep(delay)
            return -1
        } else {
            setTimeout(() => {
                document.getElementById(i).classList.add("searched")
            }, 1000);
        }
        await sleep(delay)
    };
    return -1
}


export default linearSearch;