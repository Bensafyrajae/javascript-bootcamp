const people = ["Greg", "Mary", "Devon", "James"];


people.shift();
console.log(people); 

people[people.indexOf("James")] = "Jason";
console.log(people);

people.push("Rajae");
console.log(people);

let pos = people.indexOf("Mary");
console.log(pos);

let copy = people.slice(1, -1);
console.log(copy); 

let Foo = people.indexOf("Foo");
console.log(Foo); 

let last = people[people.length - 1];
console.log(last); 

// Partie 2
for (let i of people) {
    console.log(i);
}


for (let i of people) {
    console.log(i);
    if (i === "Devon") {
        break;
    }
}