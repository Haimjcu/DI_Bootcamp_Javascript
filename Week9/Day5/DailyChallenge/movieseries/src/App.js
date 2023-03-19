import React from 'react';
import './App.css';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from './containers/Navbar';
import Home from './containers/Home';
import Movie from './containers/Movie';

class App extends React.Component  {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/movie/:movie_id" element={<Movie />} />
          </Routes>   
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
