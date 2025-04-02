let colors = ["Bleu", "Rouge", "Vert", "Jaune", "Noir"];
for (let i = 0; i < colors.length; i++) {
    console.log(`Mon choix n°${i + 1} est ${colors[i]}`);
}
const suffixes = ["premier", "deuxième", "troisième", "quatrième", "cinquième"];

for (let i = 0; i < colors.length; i++) {
    console.log(`Mon ${suffixes[i]} choix est ${colors[i]}`);
}