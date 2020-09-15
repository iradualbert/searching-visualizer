import { sleep, calculatePosition} from "./utils"
const delay = 1000


async function binarySearch(
    arr,
    target,
    leftPointer,
    rightPointer,
    setPointers
) {
    const size = arr.length
    let left = 0;
    let right = arr.length - 1
    if (leftPointer && rightPointer) {
        left = leftPointer;
        right = rightPointer
    }

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        const midDiv = document.getElementById(mid)
        setPointers({
            left: calculatePosition(left, size),
            right: calculatePosition(right, size),
        })
        await sleep(delay)
        setPointers({ mid: calculatePosition(mid, size)})
        await sleep(1000)
        midDiv.style.backgroundColor = "violet"
        await sleep(500)
        midDiv.style.backgroundColor = arr[mid] === target ? "green" : "red"
        if (arr[mid] === target) {
            return mid
        } 
        else if (arr[mid] > target) {
            right = mid - 1
        } 
        else {
            left = mid + 1;

        };
        await sleep(delay)
        midDiv.style.backgroundColor = ""

    }

    return -1

};
export default binarySearch;