const delay = 1000
const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function binarySearch(
    arr,
    target,
    leftPointer,
    rightPointer,
    setPointers
) {

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
            left: (25 + (50 * left)),
            right: (25 + (50 * right)),
        })
        await sleep(delay)
        setPointers({ mid: (25 + (50 * mid)) })
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