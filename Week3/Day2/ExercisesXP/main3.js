let allBoldItems=[];

function getBold_items() {
    allBoldItems=document.getElementsByTagName('strong');
}

function highlight() {
    for (let item=0; item<allBoldItems.length; item++) {
        allBoldItems[item].style.color="blue";
    }
}

function return_normal() {
    for (let item=0; item<allBoldItems.length; item++) {
        allBoldItems[item].style.color="black";
    }
}

getBold_items();

let p=document.getElementsByTagName('p')[0];
p.addEventListener("mouseover", highlight);
p.addEventListener("mouseout", return_normal);