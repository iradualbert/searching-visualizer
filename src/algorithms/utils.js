const sleep = async ( ms ) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const calculatePosition = (index, n) => {
    const barWidth = Math.floor(1000 / n)
    return ((barWidth + 1)  * index) + barWidth / 2
    
}

const colors = {
    midColor : "red",
    edgeColor : "turquoise"
}

export {
    sleep,
    calculatePosition,
    colors
}