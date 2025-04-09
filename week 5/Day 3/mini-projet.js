document.addEventListener('DOMContentLoaded', function () {
    const fetchBtn = document.getElementById('fetchBtn');
    const loadingElement = document.getElementById('loading');
    const errorElement = document.getElementById('error');
    const characterInfoElement = document.getElementById('characterInfo');

    const characterNameElement = document.getElementById('characterName');
    const characterHeightElement = document.getElementById('characterHeight');
    const characterGenderElement = document.getElementById('characterGender');
    const characterBirthYearElement = document.getElementById('characterBirthYear');
    const characterHomeworldElement = document.getElementById('characterHomeworld');

    fetchBtn.addEventListener('click', fetchRandomCharacter);

    async function fetchRandomCharacter() {
        loadingElement.classList.remove('hidden');
        errorElement.classList.add('hidden');
        characterInfoElement.classList.add('hidden');

        try {
            const randomId = Math.floor(Math.random() * 83) + 1;

            const characterResponse = await fetch(`https://www.swapi.tech/api/people/${randomId}`);

            if (!characterResponse.ok) {
                throw new Error('Character not found');
            }

            const characterData = await characterResponse.json();
            const character = characterData.result.properties;

            const homeworldResponse = await fetch(character.homeworld);
            if (!homeworldResponse.ok) {
                throw new Error('Homeworld not found');
            }

            const homeworldData = await homeworldResponse.json();
            const homeworld = homeworldData.result.properties.name;

            characterNameElement.textContent = character.name;
            characterHeightElement.textContent = `${character.height} cm`;
            characterGenderElement.textContent = character.gender;
            characterBirthYearElement.textContent = character.birth_year;
            characterHomeworldElement.textContent = homeworld;

            loadingElement.classList.add('hidden');
            characterInfoElement.classList.remove('hidden');

        } catch (error) {
            console.error('Error fetching data:', error);
            loadingElement.classList.add('hidden');
            errorElement.classList.remove('hidden');
        }
    }

    fetchRandomCharacter();
});
