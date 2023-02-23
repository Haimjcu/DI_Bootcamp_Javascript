body = document.getElementsByTagName("body")[0];
button = document.getElementById("submit");

let counter=0;
let newText="";

button.addEventListener("click", (event) => {
    counter++;
    counter%3===0 ? newText="Hello" : newText="New Paragraph";
    const newPara = document.createElement("p");
    newPara.addEventListener("mouseover", changeToRed)
    const tPara = document.createTextNode(newText);
    newPara.appendChild(tPara);
    body.append(newPara)
});

changeToRed = (event) => {
    event.target.style.color="red";
};