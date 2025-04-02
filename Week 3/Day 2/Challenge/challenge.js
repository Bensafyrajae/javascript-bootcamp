const solarSystem = [
    { name: 'Mercure', color: 'gray', moons: [] },
    { name: 'Vénus', color: 'yellow', moons: [] },
    { name: 'Terre', color: 'blue', moons: ['Lune'] },
    { name: 'Mars', color: 'red', moons: ['Phobos', 'Deimos'] },
    { name: 'Jupiter', color: 'orange', moons: ['Io', 'Europe', 'Ganymède', 'Callisto'] },
    { name: 'Saturne', color: 'gold', moons: ['Titan', 'Rhea', 'Encelade'] },
    { name: 'Uranus', color: 'lightblue', moons: ['Miranda', 'Ariel', 'Umbriel'] },
    { name: 'Neptune', color: 'blue', moons: ['Triton'] }
];

const section = document.querySelector('.listPlanets');

solarSystem.forEach(planet => {
    const planetDiv = document.createElement('div');
    planetDiv.classList.add('planet');
    planetDiv.style.backgroundColor = planet.color;
    planetDiv.textContent = planet.name;

    planet.moons.forEach(moon => {
        const moonDiv = document.createElement('div');
        moonDiv.classList.add('moon');
        moonDiv.textContent = moon; 
        planetDiv.appendChild(moonDiv); 
    });

    section.appendChild(planetDiv);
});
