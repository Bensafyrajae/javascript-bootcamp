function changeEnough(itemPrice, amountOfChange) {
    const values = [0.25, 0.10, 0.05, 0.01];
    let totalChange = 0;

    for (let i = 0; i < values.length; i++) {
        totalChange += amountOfChange[i] * values[i];
    }

    return totalChange >= itemPrice;
}


console.log(changeEnough(4.25, [25, 20, 5, 0])); 
console.log(changeEnough(14.11, [2, 100, 0, 0])); 
console.log(changeEnough(0.75, [0, 0, 20, 5])); 
