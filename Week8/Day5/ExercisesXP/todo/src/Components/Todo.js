import React from 'react';
require ('./todo.css');

// console.log(quotes[0].quote);
class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          tasks : ['hello world']
        };
      }
    

      handleChange = (e) => {
            if(e.key === "Enter") {
                let hasTasks = this.state.tasks;
                hasTasks.push(e.target.value);
                this.setState({tasks: hasTasks});
                e.target.value="";
            }
        }

    removeTask = (tas) => {
        return () => {
            let hasTasks = this.state.tasks.filter(arr => arr !== tas);
            this.setState({tasks: hasTasks});
        }
    }
    
    render() {
        return (
        <>

            <div style={{backgroundColor: "grey", padding: "100px"}}>
                <h1 style={{color: "blue"}}>Todo's</h1>
                <div style={{backgroundColor: "white", padding: "10px"}}>
                    {this.state.tasks.map(item =>
                        <p key={item} className='listItem' onClick={this.removeTask(item)}>{item}</p>
                        )}
                </div>
                <p>Add a new todo:</p>
                <input type='text' name='newTodo' onKeyDown={this.handleChange}></input>
            </div>
        </>
        )
    }

}

export default Todo;