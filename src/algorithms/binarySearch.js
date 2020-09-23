import { sleep, calculatePosition, colors } from "./utils"
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
    let right = arr.length - 1;
    if (leftPointer && rightPointer) {
        left = leftPointer;
        right = rightPointer
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
        await sleep(1000)
        leftDiv.classList.add("edge");
        rightDiv.classList.add("edge");
        await sleep(delay)
        setPointers({ mid: calculatePosition(mid, size) })
        await sleep(1000)
        midDiv.classList.add("mid-violet");
        await sleep(500)
        midDiv.classList.remove("mid-violet");
        midDiv.classList.add(arr[mid] === target ? "mid-green" : "mid-red")
        if (arr[mid] === target) {
            return mid
        }
        else if (arr[mid] > target) {
            right = mid - 1
            
            for (let i = right; i < size; i++) {
                setTimeout(() => {
                    document.getElementById(i).classList.add("searched");
                }, 2000);
                
            }
        }
        else {
            left = mid + 1;
            for (let i = 0; i < left; i++) {
                setTimeout(() => {
                    document.getElementById(i).classList.add("searched");
                }, 2000);
            }

        };
        await sleep(delay)
        setTimeout(() => {
            midDiv.classList.remove("mid-red");
            leftDiv.classList.remove("edge");
            rightDiv.classList.remove("edge");
        }, 1000);
            
      


    }

    return -1

};
export default binarySearch;