import React from "react";

class BuggyCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }

    handleClick = (e) => {
        const newCounter = this.state.counter + 1;
        this.setState({counter: newCounter})
    }

    render(){
        if (this.state.counter>=5) {
            throw new Error('I crashed!');
        }
        return (
            <button onClick={this.handleClick}>{this.state.counter}</button>
        )

    }
}

export default BuggyCounter