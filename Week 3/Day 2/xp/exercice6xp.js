const navDiv = document.getElementById("navBar");
navDiv.setAttribute("id", "socialNetworkNavigation");

const newLi = document.createElement("li");
newLi.textContent = "Logout";
document.querySelector("#socialNetworkNavigation ul").appendChild(newLi);

const ul = document.querySelector("#socialNetworkNavigation ul");
console.log(ul.firstElementChild.textContent, ul.lastElementChild.textContent);