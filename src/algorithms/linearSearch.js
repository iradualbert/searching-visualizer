import { sleep, calculatePosition } from "./utils"
const delay = 200

async function linearSearch(
    arr,
    target,
    setPointers,
    startIndex = 0
) { 
   
    const size = arr.length;
    let currentDiv = null;
    for (let i = startIndex; i < size; i++) {
        currentDiv = document.getElementById(i);
        setPointers({ left: calculatePosition(i, size) })
        await sleep(delay * 2)
        currentDiv.classList.add("mid-violet");
        await sleep(delay);
        currentDiv.classList.remove("mid-violet")
         if (arr[i] < target){
            currentDiv.classList.add("mid-red");
            await sleep(delay);
            currentDiv.classList.remove("mid-red");
            currentDiv.classList.add("searched");
        }
        else if (arr[i] === target) {
            currentDiv.classList.add("mid-green")
             for (let k = i + 1; k < size; k++) {
                 document.getElementById(k).classList.add("searched")
             };
            return i
        }
        else if(arr[i] > target ){
            await sleep(delay)
            for(let k=i; k <size; k++){
                document.getElementById(k).classList.add("searched")
            }
            return -1
        } ;
        await sleep(delay)
    };
    return -1
}


export default linearSearch;