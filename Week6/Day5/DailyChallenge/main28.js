body = document.getElementsByTagName("body")[0];
button = document.getElementById("submit");

let counter=0;
let newText="";

const getCat = async () => {
   try {
    let data = fetch(`https://catfact.ninja/fact`)
     .then((response) => response.json())
     .then((response) => displayCat(response))
     .catch((reject) => console.log("error"));
 }
 catch (err) {
    console.log("error");
 } 
}

const displayCat = (fact) => {
    const newPara = document.createElement("p");
    const tPara = document.createTextNode(fact.fact);
    newPara.appendChild(tPara);
    body.append(newPara)
}

button.addEventListener("click", getCat);

