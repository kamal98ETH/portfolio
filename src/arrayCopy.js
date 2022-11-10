//just for tests

function arrayCopy(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i])
    }
    return newArray;
}

export default arrayCopy;