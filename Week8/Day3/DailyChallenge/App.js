import React from 'react';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state ={fname: "ff" , lname: "", age: "", gender:""}
  }

  handleChange = (e) => {
    const value = e.target.type ="checkbox" ? e.target.checked : e.target.value
    this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = event => {
      event.preventDefault();
      let inputs = event.target.getElementsByTagName('input')
      for (const item of inputs) {
        console.log(item.value)
      }
    }

  render() {
    return (
      <>
            <form onSubmit={this.handleSubmit}>
      <label htmlFor="fname">First Name</label>
      <input
          id="fname"
          name="fname"
          type="text"
          onChange={this.handleChange}
      />
      <label htmlFor="lname">Last Name</label>
      <input
          id="lname"
          name="lname"
          type="text"
          onChange={this.handleChange}
      />
      <label htmlFor="age">Age</label>
      <input
          id="age"
          name="age"
          type="number"
          onChange={this.handleChange}
      />
      <label><input  type="radio" name="gender" value="male" onChange={this.handleChange} />Male</label>
      <label><input  type="radio" name="gender" value="female" onChange={this.handleChange}/>Female</label>

      <button type="submit">Submit</button>
  </form>

  <h1>Entered Information</h1>
  <p>Your name: {this.state.fname} {this.state.lname}</p>
  <p>Your age: {this.state.age}</p>
  <p>Your gender: {this.state.gender}</p>
      </>


  );

  }

}

export default App;
