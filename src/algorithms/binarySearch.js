import { sleep, calculatePosition } from "./utils"
const delay = 500

async function binarySearch(
    arr,
    target,
    leftPointer,
    rightPointer,
    setPointers
) {
    const size = arr.length
    let left = 0;
    let right = arr.length - 1;
    if (leftPointer && rightPointer) {
        left = leftPointer;
        right = rightPointer;
        for (let k = right + 1; k < size; k++) {
            document.getElementById(k).classList.add("searched")
        }
    }

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        const midDiv = document.getElementById(mid);
        const leftDiv = document.getElementById(left);
        const rightDiv = document.getElementById(right)
        setPointers({
            left: calculatePosition(left, size),
            right: calculatePosition(right, size),
        })
        await sleep(delay)
        leftDiv.classList.add("edge");
        rightDiv.classList.add("edge");
        await sleep(delay)
        setPointers({ mid: calculatePosition(mid, size) })
        await sleep(delay)
        midDiv.classList.add("mid-violet");
        await sleep(delay)
        midDiv.classList.remove("mid-violet");
        midDiv.classList.add(arr[mid] === target ? "mid-green" : "mid-red");
        if (arr[mid] === target) {
            // give other bars a light color
            for(let k=left; k <right +1; k++){
                if( arr[k] !== target){
                    document.getElementById(k).className = "box box-value searched";
                }
            }
            return mid
        }
        else if (arr[mid] > target) {
            right = mid - 1;
            for (let i = right; i < size; i++) {
                setTimeout(() => {
                    document.getElementById(i).classList.add("searched");
                }, delay * 2);
            };
        }
        else {
            left = mid + 1;
            for (let i = 0; i < left; i++) {
                setTimeout(() => {
                    document.getElementById(i).classList.add("searched");
                }, delay * 2);
            }

        };
        await sleep(delay)
        setTimeout(() => {
            midDiv.classList.remove("mid-red");
            leftDiv.classList.remove("edge");
            rightDiv.classList.remove("edge");
        }, delay);
    };
    // give all bars a light color
    for (let k = left; k < right + 1; k++) {
        document.getElementById(k).className = "box box-value searched";
    }
    return -1
};
export default binarySearch;