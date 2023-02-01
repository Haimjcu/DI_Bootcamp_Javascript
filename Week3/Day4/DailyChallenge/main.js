const tasks = [];
const theList=document.getElementsByClassName("thelist")[0];
const listTasks=document.getElementsByClassName("listTasks")[0];
const clearbtn=document.getElementById("clearbtn");

let form=document.forms[0];
form.addEventListener("submit", addTask);
clearbtn.addEventListener("click", (event) => {
    tasks.length=0;
    listTasks.style.display="none";
    theList.innerHTML="";
})

function addTask(event) {
    event.preventDefault();
    if(event.target.task.value!='') {
        let taskValue=event.target.task.value;
        tasks.push(taskValue);
        let newDiv=document.createElement("div");
        let divContent=`<i class="fa-sharp fa-solid fa-xmark"></i>
        <input type="checkbox" name="${taskValue}" id="${taskValue}"><span>${taskValue}</span>`;
        newDiv.innerHTML+=divContent;
        theList.appendChild(newDiv);
        listTasks.style.display="block";
        event.target.task.value='';
    }
}