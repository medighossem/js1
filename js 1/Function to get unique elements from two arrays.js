function uniqueElements(array1, array2) {
    const uniqueArray = [...new Set([...array1, ...array2])];
    return uniqueArray;
}

// Example usage:
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
const uniqueElementsArray = uniqueElements(array1, array2);
console.log("Unique elements:", uniqueElementsArray);
