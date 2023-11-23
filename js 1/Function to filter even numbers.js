function filterEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
}


const numbersArray = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterEvenNumbers(numbersArray);
console.log("Even numbers:", evenNumbers);