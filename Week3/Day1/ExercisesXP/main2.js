document.getElementsByTagName("div")[0].style.backgroundColor = "lightblue";

for (let elem of document.getElementsByTagName("li")) {
    if (elem.textContent=="John") {
        elem.style.display="none";
    } 
    if (elem.textContent=="Pete") {
        elem.style.border="1px solid";
    } 
}
document.body.style.fontSize="44px";

if (document.getElementsByTagName("div")[0].style.backgroundColor == "lightblue") {
    let x=document.getElementsByTagName("li")[0].textContent;
    let y=document.getElementsByTagName("li")[1].textContent;
    alert(`Hello ${x} and ${y}`)
}