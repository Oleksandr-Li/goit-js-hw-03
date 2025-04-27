function makeArray(firstArray, secondArray, maxLength) {
    const newArray = firstArray.concat(secondArray).slice(0, maxLength);
    return newArray;
}