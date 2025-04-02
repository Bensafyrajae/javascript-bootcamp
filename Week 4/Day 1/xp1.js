// Exercice 1 : 

// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`); //  3 ( a est modifiée dans le bloc if)
}
funcOne();
// Si a était déclaré avec const, une erreur se produirait car on ne peut pas réassigner une constante.


// #2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

funcThree(); //  0 (a est 0 )
funcTwo();
funcThree(); //  5 (a a été modifié par funcTwo)
// Si a était une constante, une erreur se produirait car on ne peut pas modifier une constante.


// #3
function funcFour() {
    window.a = "hello";
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

funcFour();
funcFive(); //  "hello" 


// #4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}
funcSix(); //  "test" (a déclaré dans la fonction masque le a global)


// #5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`); //  5
}
alert(`outside of the if block ${a}`); //  2 (le a à l'intérieur du bloc if est local)


// Exercice 2 : 
const winBattle = () => true;
const experiencePoints = winBattle() ? 10 : 1;
console.log(experiencePoints);


// Exercice 3 : 
const isString = (value) => typeof value === 'string';
console.log(isString('hello')); // true
console.log(isString([1, 2, 4, 0])); // false


// Exercice 4 : 
const sum = (a, b) => a + b;
console.log(sum(5, 10)); // 15


// Exercice 5 : 

function kgToGrams1(kg) {
    return kg * 1000;
}
console.log(kgToGrams1(2));


const kgToGrams2 = function(kg) {
    return kg * 1000;
};
console.log(kgToGrams2(2));

// Différence : la déclaration de fonction est hoistée, l'expression de fonction ne l'est pas.


const kgToGrams3 = kg => kg * 1000;
console.log(kgToGrams3(2));


// Exercice 6 : 
(function (children, partner, location, job) {
    document.body.innerHTML += `<p>You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.</p>`;
})(3, "Alice", "Paris", "Developer");


// Exercice 7 : 
(function (username) {
    const navbar = document.querySelector(".navbar");
    const userDiv = document.createElement("div");
    userDiv.innerHTML = `<p>Bienvenue, ${username}!</p><img src="profile.jpg" alt="Profile">`;
    navbar.appendChild(userDiv);
})("John");


// Exercice 8 : 
function makeJuice(size) {
    let ingredients = [];

    function addIngredients(ing1, ing2, ing3) {
        ingredients.push(ing1, ing2, ing3);
    }

    function displayJuice() {
        document.body.innerHTML += `<p>The client wants a ${size} juice, containing ${ingredients.join(", ")}</p>`;
    }

    addIngredients("Apple", "Banana", "Orange");
    addIngredients("Strawberry", "Pineapple", "Mango");
    displayJuice();
}

makeJuice("large");
