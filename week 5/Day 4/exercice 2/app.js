const {people} = require('./data') ;

function calculateAverageAge(persons) {
  const totalAge = persons.reduce((sum, person) => sum + person.age, 0);
  const averageAge = totalAge / persons.length;
  return averageAge;
}

const averageAge = calculateAverageAge(people);
console.log(`The average age of all persons is: ${averageAge.toFixed(2)} years`);

console.log("\nPeople in the dataset:");
people.forEach(person => {
  console.log(`${person.name}, ${person.age} years old, from ${person.location}`);
});