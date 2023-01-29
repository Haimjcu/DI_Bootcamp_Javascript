const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter","Saturn"];

let listPlanets=document.getElementsByClassName("listPlanets")[0];
let newDiv = document.createElement("div");

for (i=0; i < planets.length; i++) {
    newDiv = document.createElement("div");
    newDiv.appendChild(document.createTextNode(planets[i]));
    newDiv.className="planet";
    switch (planets[i]) {
        case "Mercury": newDiv.style.backgroundColor="beige";
            break;
        case "Venus": newDiv.style.backgroundColor="green";
        break;
        case "Earth": newDiv.style.backgroundColor="blue";
        break;
        case "Mars": newDiv.style.backgroundColor="red";
        break;
        case "Jupiter": newDiv.style.backgroundColor="violet";
        break;
        case "Saturn": newDiv.style.backgroundColor="orange";
        break;
        default: newDiv.style.backgroundColor="white";
    }
    listPlanets.appendChild(newDiv)
}