let form = document.forms[0];
console.log(form);

let fname = form.elements.fname;
let lname = form.elements.lname;

console.log(fname);
console.log(lname);

form.addEventListener("submit", formSubmit);

function formSubmit(e) {
    let usersAnswer=document.getElementsByClassName("usersAnswer")[0];
    if(fname.value!='' && lname.value!='') {
        let newLi=document.createElement("li");
        let fnameValue=document.createTextNode(fname.value);
        newLi.appendChild(fnameValue);
        usersAnswer.appendChild(newLi);
        newLi=document.createElement("li");
        let lnameValue=document.createTextNode(lname.value);
        newLi.appendChild(lnameValue);
        usersAnswer.appendChild(newLi);
    }
    e.preventDefault();
}
