let elemBox=document.querySelector("#box");
let elemTarget=document.querySelector("#target");

elemBox.setAttribute('draggable','true');
elemBox.setAttribute('ondragstart','dragStart(event)');
elemTarget.setAttribute('ondrop','dragDrop(event)');
elemTarget.setAttribute('ondragover','allowDrop(event)');


function dragStart(event) {
    console.log("target:",  event.target)
console.log("id: ",  event.target.id )
event.dataTransfer.setData("text",event.target.id);
}


function dragDrop(event) {
    event.preventDefault();
    console.log('target');
    let data = event.dataTransfer.getData("text");
    let box = document.getElementById(data);
    event.target.appendChild(box);
}

function allowDrop(event) {
    event.preventDefault();
}