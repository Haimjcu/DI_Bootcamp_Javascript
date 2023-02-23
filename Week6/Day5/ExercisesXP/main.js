const container = document.getElementsByClassName("container")[0];

(() => {
    //retrieve everything from loal storage
    const allTasks = JSON.parse(localStorage.getItem('tasks'));

    allTasks.forEach(({name, description, startdate, enddate, done}) => {
        let daysLeft = getNumberOfDays(startdate, enddate);
        const div = document.createElement("div");
        const pname = document.createElement("p");
        const pdesc = document.createElement("p");
        const pstart = document.createElement("p");
        const pdays = document.createElement("p");
        div.classList.add("task");
        pdesc.classList.add("description");
        pname.addEventListener("click", (event) =>{
            let pDiv= event.target.parentElement;
            document.pDiv.children[1].style.display="block"
        })


        const tname = document.createTextNode(name);
        const tdesc = document.createTextNode(description);
        const tstart = document.createTextNode(startdate);
        const tdays = document.createTextNode(`Days left: ${daysLeft}`);

        pname.appendChild(tname);
        pdesc.appendChild(tdesc);
        pstart.appendChild(tstart);
        pdays.appendChild(tdays);

        div.append(pname, pdesc, pstart,pdays);
        container.appendChild(div);
    })
})()

function getNumberOfDays(start, end) {
    const date1 = new Date(start);
    const date2 = new Date(end);
    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;
    // Calculating the time difference between two dates
    const diffInTime = date2.getTime() - date1.getTime();
    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);
    return diffInDays;
}
