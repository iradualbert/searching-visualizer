import { sleep, calculatePosition } from "./utils"
const delay = 1000

async function linearSearch(
    arr,
    target,
    setPointers,
    startIndex = 0
) {
    for (let i = startIndex; i < arr.length; i++) {
        setPointers({ left: calculatePosition(i) })
        if (arr[i] === target) {
            await sleep(delay)
            document.getElementById(i).style.backgroundColor = "green"
            return i
        }
        await sleep(delay)
    };
    return -1
}


export default linearSearch;