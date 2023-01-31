function sayHello(param) {
    alert(param);
}

// Part 1 setTimeout(sayHello,2000,"Hello World");

function addParagraph(param) {
    let p=document.createElement('p');
    let newP=document.createTextNode(param);
    p.appendChild(newP);
    document.getElementById('container').appendChild(p);
}

// Part 2 setTimeout(addParagraph,2000,"Hello World");

let intervalCount=0;
function addPara() {
    let p=document.createElement('p');
    let newP=document.createTextNode("Hello Worlds");
    p.appendChild(newP);
    document.getElementById('container').appendChild(p);
    intervalCount++;
    if(intervalCount==5) {clearInt()};
}
let timer = setInterval(addPara, 2000);

const clickButton=document.getElementById('clear');
clickButton.addEventListener("click",clearInt);

function clearInt() {
    clearInterval(timer);
}