document.getElementById("MyForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const radius = parseFloat(document.getElementById("radius").value);
    if (isNaN(radius) || radius <= 0) {
        alert("Veuillez entrer un rayon valide !");
        return;
    }

    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    document.getElementById("volume").value = volume.toFixed(2);
});
