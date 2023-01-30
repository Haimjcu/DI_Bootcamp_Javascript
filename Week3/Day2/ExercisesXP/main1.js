console.log(document.getElementsByTagName('h1')[0]);

const paras=document.getElementsByTagName('p');
paras[paras.length-1].remove();

const h2=document.getElementsByTagName('h2')[0];
h2.addEventListener("click",h2Clicked);

function h2Clicked () {
    h2.style.backgroundColor="red";
}

const h3=document.getElementsByTagName('h3')[0];
h3.addEventListener("click",h3Clicked);

function h3Clicked () {
    h3.style.display="none";
}

function boldit () {
    for (i=0; i<paras.length; i++) {
        paras[i].style.fontWeight="bold";
    }

}

const h1=document.getElementsByTagName('h1')[0];
h1.addEventListener("mouseover",h1Hover);

function h1Hover () {
    someNum=Math.floor(Math.random() * 101)+ "px";
    h1.style.fontSize=someNum;
}


paras[1].addEventListener("mouseover",paraHover);

function paraHover () {
    paras[1].classList.add("hidden");
}