import React from "react";

class Color extends React.Component {
    constructor(props) {
        super(props);
        this.state ={favoriteColor: "red"}
    }

    shouldComponentUpdate() {
        return true;
    }

    componentDidMount() {
      setTimeout(() => {
            this.setState({favoriteColor: "yellow"})},
            3000
          );
    }

    componentDidUpdate() {
        document.getElementById('hid').innerHTML =
          'My fav is: ' + this.state.favoriteColor;
      }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById('h2id').innerHTML =
        `Before the update, the favorite was: ${prevState.favoriteColor}
        The updated favorite is: ${this.state.favoriteColor}`
      }

    changeColor = () => {
        this.setState({favoriteColor: "blue"})
    }

    render() {
        return (
            <>
            <h1 id="hid">My favorite color is: {this.state.favoriteColor}</h1>
            <h2 id="h2id">My favorite color is: {this.state.favoriteColor}</h2>
            <button onClick={this.changeColor}>Change color</button>
            </>

        )
    }

}

export default Color