let d=document.getElementsByTagName('div')[0];
d.addEventListener("mouseover", mouseover);
d.addEventListener("mouseout", mouseout);
d.addEventListener("click", clicked);
d.addEventListener("dblclick", dblclicked);

function mouseover() {
    d.style.backgroundColor="green";
}

function mouseout() {
    d.style.backgroundColor="blueviolet";
}

function clicked() {
    d.style.fontSize="1.5rem";
}

function dblclicked() {
    d.style.fontSize="2.5rem";
}