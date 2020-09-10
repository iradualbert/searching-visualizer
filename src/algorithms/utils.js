const sleep = async ( ms ) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const colors = {
    midColor : "red",
    edgeColor : "turquoise"
}

export {
    sleep,
    colors
}