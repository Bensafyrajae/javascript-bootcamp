let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
};

let name = prompt("Entrez votre nom :").toLowerCase(); 

if (name in guestList) {
    console.log(`Hi! I'm ${name}, and I'm from ${guestList[name]}.`);
} else {
    console.log("Hi! I'm a guest.");
}
