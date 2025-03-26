
let h1 = document.querySelector("article h1");
console.log(h1);

let article = document.querySelector("article");
let lastParagraph = article.lastElementChild;
article.removeChild(lastParagraph);

let h2 = document.querySelector("article h2");
h2.addEventListener("click", () => {
    h2.style.backgroundColor = "red";
});

let h3 = document.querySelector("article h3");
h3.addEventListener("click", () => {
    h3.style.display = "none";
});

let button = document.createElement("button");
button.textContent = "Mettre en gras";
document.body.appendChild(button);

button.addEventListener("click", () => {
    document.querySelectorAll("article p").forEach(p => {
        p.style.fontWeight = "bold";
    });
});

h1.addEventListener("mouseover", () => {
    h1.style.fontSize = `${Math.floor(Math.random() * 101)}px`;
});

let secondParagraph = article.querySelectorAll("p")[1];
secondParagraph.style.transition = "opacity 0.5s";
secondParagraph.addEventListener("mouseover", () => {
    secondParagraph.style.opacity = "0";
});
secondParagraph.addEventListener("mouseout", () => {
    secondParagraph.style.opacity = "1";
});
