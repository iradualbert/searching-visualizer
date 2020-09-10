const linearSearch = (arr, n, animations) => {
    let found = false;
    let index = null;
    
    for(let i =0; i < arr.length; i++){
        animations.push(i)
        if( arr[i] === n){
            found = true;
            index = i
            break;
        }
    };
    return [found, index]
}


export default linearSearch;