import React from 'react';
import './App.css';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Post from './components/Post';



class App extends React.Component  {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/:post_id" element={<Post />} />
          </Routes>
        </div>
      </BrowserRouter>

    );
  }

}

export default App;
