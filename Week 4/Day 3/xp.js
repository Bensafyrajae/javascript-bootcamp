// Exercice 1:
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);// I am John Doe from Vancouver, Canada. Latitude (49.2827), Longitude (-123.1207)

//Exercice 2:
function displayStudentInfo({ first, last }) {
    return `Your full name is ${first} ${last}`;
}

displayStudentInfo({ first: 'Elie', last: 'Schoppik' });

//Exercice 3:
const users = { user1: 18273, user2: 92833, user3: 90315 };


const usersArray = Object.entries(users);
console.log(usersArray); 

const modifiedUsersArray = usersArray.map(([user, id]) => [user, id * 2]);
console.log(modifiedUsersArray); 

//Exercice 4:
class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  const member = new Person('John');
  console.log(typeof member); //object

//Exercice 5:
//  constructor will successfully extend the Dog class
class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  }
  