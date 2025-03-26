// 🌟 Exercice 1 : Minuteur

// Partie I

setTimeout(() => {
    const test = ()=>{
        alert(' Bonjour tout le monde ');
    }
    test();
}, 2000);

// Part II

const parentDiv = document.getElementById('container')
setTimeout(() => {
    
const newPara = document.createElement('p')
 
newPara.innerHTML = 'Hello World'
parentDiv.appendChild(newPara);
    
}, 2000);

// Part III 

let paragraphCount = 0;
const intervalId = setInterval(() => {
    const container = document.getElementById('container');
    const newParagraph = document.createElement('p');
    newParagraph.textContent = "Hello World";
    container.appendChild(newParagraph);
    paragraphCount++;

    if (paragraphCount >= 5) {
        clearInterval(intervalId);
    }
}, 2000);

document.getElementById('clear').addEventListener('click', () => {
    clearInterval(intervalId);
});
