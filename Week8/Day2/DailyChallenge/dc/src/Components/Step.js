import React from "react";

class Step extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            languages : [
                {name: "Php", votes: 0},
                {name: "Python", votes: 0},
                {name: "JavaSript", votes: 0},
                {name: "Java", votes: 0}
            ]
        }
    }

    phpp = () => {
        const lang = this.state.languages;
        let vote = parseInt(lang[0].votes);
        vote++;
        lang[0] = {name: "Php", votes: vote};
        this.setState({languages: lang})
    }

    pyth = () => {
        const lang = this.state.languages;
        let vote = parseInt(lang[1].votes);
        vote++;
        lang[1] = {name: "Python", votes: vote};
        this.setState({languages: lang})
    }

    jsc = () => {
        const lang = this.state.languages;
        let vote = parseInt(lang[2].votes);
        vote++;
        lang[2] = {name: "JavaSript", votes: vote};
        this.setState({languages: lang})
    }

    jva = () => {
        const lang = this.state.languages;
        let vote = parseInt(lang[3].votes);
        vote++;
        lang[3] = {name: "Java", votes: vote};
        this.setState({languages: lang})
    }


    render() {
        return (
            <>
            <button onClick={this.phpp}>PHP  votes: {this.state.languages[0].votes}</button>
            <button onClick={this.pyth}>Python  votes: {this.state.languages[1].votes}</button>
            <button onClick={this.jsc}>Javascript  votes: {this.state.languages[2].votes}</button>
            <button onClick={this.jva}>Java  votes: {this.state.languages[3].votes}</button>
            </>

        )
    }

}

export default Step;