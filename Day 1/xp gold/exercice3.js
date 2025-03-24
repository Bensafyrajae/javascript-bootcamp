let age = [20, 5, 12, 43, 98, 55];

let sum = 0;
for (let i = 0; i < age.length; i++) {
    sum += age[i]; 
}
console.log("Somme des âges :", sum);

let maxAge = age[0]; 
for (let i = 1; i < age.length; i++) {
    if (age[i] > maxAge) {
        maxAge = age[i];
    }
}
console.log("L'âge le plus élevé est :", maxAge);
