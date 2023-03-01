const form = document.forms[0];
const messages = document.getElementById('messages');

const login = (event) => {
    event.preventDefault();
    let payload = {
        username: event.target.username.value,
        pwd: event.target.pwd.value
    }
    fetch('http://localhost:3000/login', {
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

form.addEventListener('submit', login);

