const sleep = async ( ms ) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const calculatePosition = (index) => {
    return (25 + (50 * index))
}
// const testAlgorithm = async (algorithmToBeTested) => {
//     for (let i = 0; i < 20; i++) {
//         const target = generateRandomNumber()
//         const arr = generateRandomArray();
//         const javascriptResult = arr.indexOf(target)
//         const algoResult = await algorithmToBeTested(arr, target)
//         if (javascriptResult !== algoResult) {
//             console.log("bitch, your algorithm sucks")
//         }
//         console.log(javascriptResult === algoResult)
//     }
// }

const colors = {
    midColor : "red",
    edgeColor : "turquoise"
}

export {
    sleep,
    calculatePosition,
    colors
}