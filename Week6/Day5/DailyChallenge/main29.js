const form=document.forms[0];
const formtitle=document.getElementById("title");
const formdesc=document.getElementById("desc");


form.addEventListener("submit", (event) => {
event.preventDefault;
aFetch(formtitle.value,formdesc.value);
} )


const aFetch = async (title, body) => {
    console.log(`title: ${title} body: ${body}`);
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: title,
    body: body,
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(`hello: ${json}`))
  .catch((error) => console.log(`error: ${error}`));
}
