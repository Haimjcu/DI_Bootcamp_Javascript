(function login(name) {
    let container=document.getElementsByClassName("container-fluid")[0];
    let div=document.createElement("div");
    let p=document.createElement("p");
    p.setAttribute("id","username");
    let img=document.createElement("img");
    img.setAttribute("src","nanach.jpg");
    p.innerHTML=name;
    div.appendChild(p);
    div.appendChild(img);
    container.appendChild(div);
})("User")