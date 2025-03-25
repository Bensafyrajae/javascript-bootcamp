
function hotelCost() {
    let nights;
    while (true) {
        nights = parseInt(prompt("Combien de nuits souhaitez-vous passer à l'hôtel ?"));
        if (!isNaN(nights) && nights > 0) {
            break;
        }
        alert("Veuillez entrer un nombre valide pour les nuits.");
    }
    return nights * 140;
}

function planeRideCost() {
    let destination;
    while (true) {
        destination = prompt("Quelle est votre destination (Londres, Paris ou autre) ?").toLowerCase();
        if (destination === "londres") {
            return 183;
        } else if (destination === "paris") {
            return 220;
        } else if (destination !== "") {
            return 300;
        }
        alert("Veuillez entrer une destination valide.");
    }
}

function rentalCarCost() {
    let days;
    while (true) {
        days = parseInt(prompt("Combien de jours souhaitez-vous louer la voiture ?"));
        if (!isNaN(days) && days > 0) {
            break;
        }
        alert("Veuillez entrer un nombre valide pour les jours.");
    }
    let cost = days * 40;
    if (days > 10) {
        cost *= 0.95;  
    }
    return cost;
}

function totalVacationCost() {
    const hotel = hotelCost();
    const plane = planeRideCost();
    const car = rentalCarCost();
    const total = hotel + plane + car;

    console.log(`Coût de l'hôtel : ${hotel}$`);
    console.log(`Coût des billets d'avion : ${plane}$`);
    console.log(`Coût de la location de voiture : ${car}$`);
    console.log(`Coût total des vacances : ${total}$`);
}

totalVacationCost();
