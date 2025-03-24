let number = parseInt(prompt("Entrez un nombre :"), 10);


while (isNaN(number) || number < 10) {
    number = parseInt(prompt("Veuillez entrer un nombre supérieur ou égal à 10 :"), 10);
}

console.log("Merci ! Vous avez entré :", number);
