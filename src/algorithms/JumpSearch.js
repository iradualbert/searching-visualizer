const midColor = "red";
const edgeColor = "turquoise"
const delay = 100
const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const jumpSearch = async (arr, target) =>{
    const size = arr.length;
    let step =  Math.floor(Math.sqrt(size));
    let start = 0;
    let end = step;
    if( size === 0){
        return -1
    }
    let startDiv = document.getElementById(start);
    let endDiv = document.getElementById(end);
    while( arr[end] < target) {
        startDiv.style.backgroundColor = midColor;
        endDiv.style.backgroundColor = midColor;
        await sleep(delay)
        if(arr[start] > target){
            return -1
        }
        start = end;
        end += step;
        startDiv = document.getElementById(start);
        endDiv = document.getElementById(Math.min(end, size - 1));
        startDiv.style.backgroundColor = midColor;
        endDiv.style.backgroundColor = midColor;
        
    }

    for (let i=start; i <= end && i < size; i++){
        await sleep(delay)
        const currentDiv = document.getElementById(i)
        currentDiv.style.backgroundColor ="yellow"
        if(arr[i] === target){
            await sleep(delay)
            currentDiv.style.backgroundColor = "Green"
            return i
        } else if ( arr[i]  > target ){
            return -1
        }
    }
    return -1

}

export default jumpSearch;

