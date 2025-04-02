// Exercise 1 :

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

for (let i = 0; i < colors.length; i++) {
    console.log(`${i + 1}# choice is ${colors[i]}.`);
}

if (colors.includes("Violet")) {
    console.log("Yeah");
} else {
    console.log("No...");
}

// Exercise 2 : 

const ordinal = ["th", "st", "nd", "rd"];
colors.forEach((color, index) => {
    const suffix = (index + 1 < 4) ? ordinal[index + 1] : ordinal[0];
    console.log(`Le ${index + 1}${suffix} choix est ${color}.`);
});






// Exercise 4 :

const users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];
const stude = users.map(user => `Hello ${user.firstName}`);
console.log(stude);
const fullStackRes = users.filter(user => user.role === 'Full Stack Resident');
console.log(fullStackRes);
const lastNamesFullStack = fullStackRes.map(user => user.lastName);
console.log(lastNamesFullStack);

// Exercise 5 : 
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
const sentence = epic.reduce((acc, word) => acc + ' ' + word);
console.log(sentence);


// Exercise 6 : 
const students = [
    {name: "Ray", course: "Computer Science", isPassed: true}, 
    {name: "Liam", course: "Computer Science", isPassed: false}, 
    {name: "Jenner", course: "Information Technology", isPassed: true}, 
    {name: "Marco", course: "Robotics", isPassed: true}, 
    {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
    {name: "Jamie", course: "Big Data", isPassed: false}
];
const passedStudents = students.filter(student => student.isPassed);
console.log(passedStudents);
passedStudents.forEach(student => console.log(`Bon travail ${student.name}, tu as réussi le cours en ${student.course} !`));
