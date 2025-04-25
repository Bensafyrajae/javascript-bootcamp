// Exercise 1
function printFullName({ first, last }) {
    return `Your full name is ${first} ${last}`;
  }
  

  console.log(printFullName({ first: 'Elie', last: 'Schoppik' }));

//   Exercise2
function keysAndValues(obj) {
    const keys = Object.keys(obj).sort();
    const values = keys.map(key => obj[key]); 
    return [keys, values];
  }
  
  // Exemples :
  console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
  // ➞ [["a", "b", "c"], [1, 2, 3]]
  
  console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
  // ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
  
  console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));
  // ➞ [["key1", "key2", "key3"], [true, false, undefined]]
//   Exercise3
class Counter {
    constructor() {
      this.count = 0;
    }
  
    increment() {
      this.count++;
    }
  }
  
  const counterOne = new Counter();
  counterOne.increment(); // count = 1
  counterOne.increment(); // count = 2
  
  const counterTwo = counterOne;
  counterTwo.increment(); // count = 3 (sur le même objet !)
  
  console.log(counterOne.count); // ➞ 3
  