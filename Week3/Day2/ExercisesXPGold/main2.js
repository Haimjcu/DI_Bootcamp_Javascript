
let form = document.forms[0];
let z=document.getElementsByTagName('input')[0];
z.addEventListener("click",removecolor);

function removecolor(e) {
    let x=document.getElementById('colorSelect');
    x.remove(x.selectedIndex);
    e.stopPropagation();
}