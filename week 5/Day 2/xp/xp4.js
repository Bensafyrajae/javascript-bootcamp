// Exercise 4: 

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();
console.log('This will be logged before the Promise resolves');

/*
Analysis of the code:

1. The function resolveAfter2Seconds() returns a Promise that resolves with the string 'resolved' after a 2-second delay.

2. The asyncCall() function is an async function that:
   - First logs 'calling'
   - Then awaits the Promise from resolveAfter2Seconds()
   - After the Promise resolves (2 seconds later), it logs the result ('resolved')

3. The execution sequence will be:
   a. asyncCall() is called
   b. 'calling' is logged
   c. The code waits at the await statement for resolveAfter2Seconds() to resolve
   d. While waiting, execution continues outside the function
   e. 'This will be logged before the Promise resolves' is logged
   f. After 2 seconds, the Promise resolves with 'resolved'
   g. The await expression completes and assigns 'resolved' to result
   h. 'resolved' is logged

Expected output:
calling
This will be logged before the Promise resolves
(2 seconds later)
resolved
*/