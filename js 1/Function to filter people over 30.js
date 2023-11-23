function filterPeopleOver30(people) {
    return people.filter(person => person.age > 30);
}

// Example usage:
const peopleArray = [
    { name: 'John', age: 25, email: 'john@example.com' },
    { name: 'Alice', age: 35, email: 'alice@example.com' },
    { name: 'Bob', age: 28, email: 'bob@example.com' }
];
const peopleOver30 = filterPeopleOver30(peopleArray);
console.log("People over 30:", peopleOver30);