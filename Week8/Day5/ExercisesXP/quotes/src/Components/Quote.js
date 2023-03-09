import React from 'react';
import quotes from './quotes'

// console.log(quotes[0].quote);
class Quote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          random: 1,
          background: "blue",
          header: "red",
          button: "orange",
          used : [1]
        };
      }
    
    getRandomNumber = () => {
        let i=0;
        while (i < 5) {
            var random = Math.floor(Math.random() * quotes.length);
            if (this.state.used.indexOf(random) === -1) {break;}    
          }
          return random
    }

    newQuote = () => {

        const randomNum = this.getRandomNumber();
        let hasUsed = this.state.used;
        hasUsed.push(randomNum);
        this.setState({random : randomNum,
        background: '#' + Math.floor(Math.random() * 16777215).toString(16),
        header: '#' + Math.floor(Math.random() * 16777215).toString(16),
        button: '#' + Math.floor(Math.random() * 16777215).toString(16),
        used: hasUsed});
     }

    render() {
        return (
            <div style={{backgroundColor: this.state.background, padding: "100px"}}>
                <div style={{backgroundColor: "white", padding: "20px"}}>
                    <h1 style={{color: this.state.header}}>{quotes[this.state.random].quote}</h1>
                    <p>{quotes[this.state.random].author}</p>
                    <button onClick ={this.newQuote} style={{backgroundColor: this.state.button}}>New Quote</button>
                </div>
            </div>
        )
    }

}

export default Quote