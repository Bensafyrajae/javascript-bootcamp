const famille = {
    père: "Jean",
    mère: "Marie",
    fils: "Lucas",
    fille: "Emma"
};


console.log("Clés de l'objet famille :");
for (let key in famille) {
    console.log(key);
}

console.log("Valeurs de l'objet famille :");
for (let key in famille) {
    console.log(famille[key]);
}
