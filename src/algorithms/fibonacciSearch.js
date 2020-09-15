const cached = {}

const fibonacciGenerator = (n) => {
    if(cached[n]){
        return cached[n]
    }
    if(n === 0) return 0;
    else if(n===1) return 1;
    else{
        const value =  fibonacciGenerator(n - 1) + fibonacciGenerator(n - 2)
        cached[n] = value
        return value
    }
}

for(let i=0; i < 100; i++){
    console.log(fibonacciGenerator(i))
}

async function fibonacciSearch(
    arr,
    target,
    setPointers
) {
    
}
export default fibonacciSearch