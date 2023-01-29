let divID=document.getElementById("navBar");
divID.setAttribute("id","socialNetworkNavigation");

const newLi = document.createElement("li");
const newText=document.createTextNode("Logout");
newLi.appendChild(newText);
const ull=document.getElementsByTagName("ul")[0];
ull.appendChild(newLi);

console.log(ull.firstElementChild.textContent);
console.log(ull.lastElementChild.textContent);

