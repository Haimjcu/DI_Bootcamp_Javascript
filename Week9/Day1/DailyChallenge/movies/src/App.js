import React from 'react';
import './App.css';
import MovieList from './components/MovieList';
import SelectedMovie from './components/SelectedMovie';

class App extends React.Component {

  render(){
    return (
      <div className="container">
        <MovieList />
        <SelectedMovie />
      </div>

    );
  }

}

export default App;
