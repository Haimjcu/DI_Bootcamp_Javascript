import React from "react";

class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state ={isToggleOn: true}
    }

    clickMe = () => {
        alert('I was clicked');
    }

    handleKeyPress = (e) => {
        if(e.key === "Enter") {alert(`the Enter key was pressed, your input is: ${e.target.value}`);};
    }

    toggle = () => {
        alert(`${this.state.isToggleOn}`)
        this.state.isToggleOn ? this.setState({isToggleOn: false}) : this.setState({isToggleOn: true});
    }

    render() {
        return (
            <>
                <button onClick={this.clickMe}>Click Me</button>
                <input onKeyDown={this.handleKeyPress} name="someText" placeholder="Press the ENTER key!"></input>
                <button onClick={this.toggle}>Toggle</button>
            </>

        )
    }

}

export default Events;