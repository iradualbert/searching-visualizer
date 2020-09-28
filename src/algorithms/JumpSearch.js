import linearSearch from "./linearSearch";
import { calculatePosition, sleep } from "./utils"
const delay = 500;

async function jumpSearch(
    arr,
    target,
    setPointers
) {
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
        await sleep(delay / 2)
        if (arr[start] > target) {
            return -1
        };
        start = end;
        end = Math.min(end + step, size - 1);
        setPointers({
            left: calculatePosition(start, size),
            right: calculatePosition(end, size)
        });
        // wait for pointers to move
        await sleep(500);
        document.getElementById(start).classList.add("interval");
        document.getElementById(end).classList.add("interval");
        for (let i = 0; i < start; i++) {
            setTimeout(() => {
                document.getElementById(i).classList.add("searched")
            }, 100);
        }
        // check if the end of the array has been reached
        if (arr[end] < target && end === size - 1) {
            for (let i = start; i < end; i++) {
                setTimeout(() => {
                    document.getElementById(i).classList.add("searched")
                }, delay / 2);
            }
            return -1
        };
        // wait 
        await sleep(delay / 4)
    }
    await sleep(delay);
    for (let i = end + 1; i < size; i++) {
        document.getElementById(i).classList.add("searched")
    }
    await sleep(100);
    return linearSearch(arr, target, setPointers, start)

}

export default jumpSearch;

