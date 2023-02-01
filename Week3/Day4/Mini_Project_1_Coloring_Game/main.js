let color='';
let mousePos=false;

let clearButton=document.getElementsByTagName("button")[0];
let colorSelects=document.querySelectorAll(".leftside > div");
let boxSelects=document.querySelectorAll(".palette > div");
let body=document.getElementsByTagName("body")[0];

clearButton.addEventListener("click", clearColor);

function clearColor() {
    color='';
    for (boxSelect of boxSelects) {
        boxSelect.style.backgroundColor="white";
    }
}

for (colorSelect of colorSelects) {
    colorSelect.addEventListener("click", (event) => {
        color=event.target.style.backgroundColor;
    });
}

for (boxSelect of boxSelects) {
    boxSelect.addEventListener("click",(event) => {
        event.target.style.backgroundColor=color;
    });
    boxSelect.addEventListener("mouseover",(event) => {
        if(mousePos) {event.target.style.backgroundColor=color;}
    });
}


body.addEventListener("mousedown", mouseDown);
function mouseDown() {
    mousePos=true;
    console.log(`mousedown: ${mousePos}`);
}

body.addEventListener("mouseup", mouseUp);
function mouseUp() {
    mousePos=false;
    console.log(`mouseup: ${mousePos}`);
}