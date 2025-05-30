// Exercise 1: 
function isBlank(str) {
    return str.trim() === "";
}
console.log(isBlank(''));
console.log(isBlank('abc'));

// Exercise 2: 
function abbrevName(name) {
    let parts = name.split(" ");
    return parts.length > 1 ? `${parts[0]} ${parts[1][0]}.` : name;
}
console.log(abbrevName("Robin Singh"));

// Exercise 3: 
function swapCase(str) {
    return str.split('').map(char => 
        char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    ).join('');
}
console.log(swapCase("The Quick Brown Fox"));

// Exercise 4: 
function isOmnipresent(arr, val) {
    return arr.every(subArray => subArray.includes(val));
}
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1));
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6));

// Exercise 5: 
let table = document.querySelector("table");
for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[i].classList.add("red");
}