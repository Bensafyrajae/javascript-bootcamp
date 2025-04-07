// Exercise 1: Promise.all()
console.log("Exercise 1: Promise.all() with three promises");

const promise1 = Promise.resolve(3);
const promise2 = 42; 
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});


Promise.all([promise1, promise2, promise3])
  .then(values => {
    console.log(values);
  })
  .catch(error => {
    console.error("Error in Promise.all():", error);
  });

// Exercise 2:
console.log("\nExercise 2: Analyse Promise.all() with mapped promises");

function timesTwoAsync(x) {
  return new Promise(resolve => resolve(x * 2));
}

const arr = [1, 2, 3];
const promiseArr = arr.map(timesTwoAsync);


Promise.all(promiseArr)
  .then(result => {
    console.log(result);
  });

