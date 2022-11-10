function arrayPop(array) {
    let newArry = [];
    for (let i = 0; i < array.length - 1; i++) {
        newArry.push(array[i])
    }
    return newArry
}

export default arrayPop;