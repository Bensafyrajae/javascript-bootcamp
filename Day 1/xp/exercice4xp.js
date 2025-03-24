const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
};

console.log("Nombre d'étages :", building.numberOfFloors);

console.log("Nombre d'appartements au 1er étage :", building.numberOfAptByFloor.firstFloor);
console.log("Nombre d'appartements au 3ème étage :", building.numberOfAptByFloor.thirdFloor);

const secondTenant = building.nameOfTenants[1];
const secondTenantRooms = building.numberOfRoomsAndRent.dan[0];

console.log(`Le deuxième locataire est ${secondTenant}, il possède ${secondTenantRooms} pièces.`);

const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];

if (sarahRent + davidRent > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
    console.log("Le loyer de Dan a été augmenté à 1200 £.");
}

console.log("Loyers après vérification :", building.numberOfRoomsAndRent);
