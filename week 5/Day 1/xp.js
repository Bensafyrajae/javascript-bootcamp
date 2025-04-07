// Exercise 1:
function compareToTen(num) {
    return new Promise((resolve, reject) => {
      if (num <= 10) {
        resolve(`${num} is less than or equal to 10`);
      } else {
        reject(`${num} is greater than 10`);
      }
    });
  }
  
  
  console.log("Exercise 1: compareToTen");
 
  compareToTen(15)
    .then(result => console.log(result))
    .catch(error => console.log(error));
  
 
  compareToTen(8)
    .then(result => console.log(result))
    .catch(error => console.log(error));
  
  // Exercise 2: 
  function resolveAfter4Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("success");
      }, 4000);
    });
  }
  

  console.log("\nExercise 2: Promise resolving after 4 seconds");
  console.log("Waiting for 4 seconds...");
  resolveAfter4Seconds().then(result => {
    console.log(result); 
  });
  
  // Exercise 3:
  console.log("\nExercise 3: Promise.resolve() and Promise.reject()");
 
  const resolvedPromise = Promise.resolve(3);
  resolvedPromise.then(value => {
    console.log(`Promise resolved with value: ${value}`);
  });
  
 
  const rejectedPromise = Promise.reject("Boo!");
  rejectedPromise.catch(error => {
    console.log(`Promise rejected with error: ${error}`);
  });