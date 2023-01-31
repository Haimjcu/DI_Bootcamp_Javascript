let pos=0;
function myMove() {
    const timer = setInterval(moveBox,1);
}

function moveBox() {
    let elem = document.getElementById("animate");
    if(pos==350) {
        clearInterval(timer);
        pos=0;
    }
    else {
        pos++
        elem.style.left=pos+'px';
    }

}