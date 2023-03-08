import React from 'react';
import './App.css';

class App extends React.Component {

    componentDidMount() {
    fetch('http://localhost:3001/api/hello')
    .then(res => res.json())
    .then(data=> {
      document.getElementsByClassName('App')[0].innerHTML=data;
    })
    .catch(err => {
      console.log(err);
    })

    }

    register = (e) => {
    e.preventDefault();
    const firstname = e.target.firstname.value;
    const lastname = e.target.lastname.value;
    let payload = {
        firstname: firstname,
        lastname: lastname
    }
    fetch('http://localhost:3001/api/world', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'     
        },
        body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(data=> {
      document.getElementsByClassName('thepost')[0].innerHTML=data;
    })
    .catch(err => {
      console.log(err);
    })

}


  render() {
    return (
    <>
      <div className="App">
        hello
      </div>
      <form id="registerform" onSubmit={this.register}>
        <input type="text" name="firstname" id="firstname" placeholder="First Name"></input>
        <input type="text" name="lastname" id="lastname" placeholder="Last Name"></input>
        <button type="submit">Submit</button>
      </form>
        <div className="thepost">
      </div>
    </>
    );
  }

}

export default App;
