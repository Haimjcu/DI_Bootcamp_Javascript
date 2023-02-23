const form = document.forms[0];
const submit = document.getElementById("submit");
const namee = document.getElementById("namee");
const desc = document.getElementById("desc");
const startdate = document.getElementById("startdate");
const enddate = document.getElementById("enddate");

submit.addEventListener("click", addTask);

function addTask (event) {
    event.preventDefault;
    const tasks = JSON.parse(localStorage.getItem("tasks")) || []; 
    const task = {
        name: namee.value,
        description: desc.value,
        startdate: startdate.value,
        enddate: enddate.value,
        done: false
    }
    tasks.push(task) //array of objects
    localStorage.setItem('tasks', JSON.stringify(tasks));
    window.location.assign("index.html");
}