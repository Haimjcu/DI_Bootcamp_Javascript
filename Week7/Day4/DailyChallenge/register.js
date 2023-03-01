const form = document.forms[0];
const messages = document.getElementById('messages');

const register = (event) => {
    event.preventDefault();
    let payload = {
        fname: event.target.fname.value,
        lname: event.target.lname.value,
        email: event.target.email.value,
        username: event.target.username.value,
        pwd: event.target.pwd.value
    }
    fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'     
        },
        body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(data => {
      messages.innerHTML=data;
    })
    .catch(err => {
      console.log(err);
    })
  
}

form.addEventListener('submit', register);

