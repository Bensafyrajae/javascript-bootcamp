const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let secretName = "";
for (let i = 0; i < names.length; i++) {
    secretName += names[i][0]; 
}

secretName = secretName.split("").sort().join(""); 

console.log(secretName);
