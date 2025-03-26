
const form = document.querySelector("form");
console.log(form);

const name = document.getElementById("fname");
const lastname = document.getElementById("lname");
console.log(name, lastname);

console.log(document.getElementsByName("firstname")[0], document.getElementsByName("lastname")[0]);

form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const firstName = name.value.trim();
    const lastName = lastname.value.trim();

    if (firstName === "" || lastName === "") {
        alert("Veuillez remplir tous les champs !");
        return;
    }

    const userAnswersList = document.querySelector(".usersAnswer");
    userAnswersList.innerHTML = `<li>${firstName}</li><li>${lastName}</li>`;
});
