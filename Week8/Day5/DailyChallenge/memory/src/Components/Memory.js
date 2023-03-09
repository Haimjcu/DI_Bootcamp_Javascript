import React from 'react';
import Header from './Header';
import Jumbotron from './Jumbotron';
import Card from './Card';
import superheros from './superheros'
require ('./memory.css');

// console.log(quotes[0].quote);
class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          score: 0,
          topScore: 0,
          heros : []
        };
      }
    

      handleClick = (id) => {
        console.log('haim' + id);
        return () => {
            if (this.state.heros.indexOf(id) === -1)  {
                    let hasHeros = this.state.heros;
                    hasHeros.push(id);
                    let newScore = this.state.score + 1;
                    this.setState({score: newScore , heros: hasHeros});
                }
                else {
                    let newTopScore = this.state.score > this.state.topScore ? this.state.score : this.state.topScore;
                    this.setState({score: 0, topScore: newTopScore, heros : []});
                }
        }
        }

    removeTask = (tas) => {
        return () => {
            let hasTasks = this.state.tasks.filter(arr => arr !== tas);
            this.setState({tasks: hasTasks});
        }
    }

   shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array;
      }
    
    render() {
        return (
        <>
        <div className="wrapper">
            <Header score={this.state.score} topScore={this.state.topScore}/>
            <Jumbotron />
            {
            this.shuffleArray(superheros).map(item => (
                <Card id={item.id} imageSrc={item.image} name={item.name} occupation={item.occupation} handleClick={this.handleClick} />
            ))
            }
           



        </div>
        </>
        )
    }

}

export default Todo;