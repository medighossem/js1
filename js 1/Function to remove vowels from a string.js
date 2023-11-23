function removeVowels(inputString) {
    return inputString.replace(/[aeiouAEIOU]/g, "");
}

// Example usage:
const stringWithVowels = "Hello, World!";
const stringWithoutVowels = removeVowels(stringWithVowels);
console.log("String without vowels:", stringWithoutVowels);