// Exercise 1
//1
let theDiv=document.getElementById("container");
console.log(theDiv);
//2
let theLists=document.getElementsByClassName("list");
let theLi=theLists[0].getElementsByTagName("li");
theLi[1].textContent="Richard";
//3
for (let elem of theLists) {
    elem.firstElementChild.textContent="Haim";
}
//4
let allLi=document.getElementsByTagName("li");
for (let elem of allLi) {
    if (elem.textContent == "Sarah") {
        elem.remove();
    };
}

//bonus
//1
for (let elem of theLists) {
    elem.classList.add("student_list");
}
//2
theLists[0].classList.add("university","attendance")

