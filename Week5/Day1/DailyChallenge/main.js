const theForm=document.forms[0];
const body=document.getElementsByTagName('body')[0];

addEventListener('submit', (event) => {
    event.preventDefault();
 obj={
    "first" : event.target.first.value,
    "last" : event.target.last.value
 };
    const p = document.createElement('p');
    p.textContent=JSON.stringify(obj);
    body.appendChild(p);
})





