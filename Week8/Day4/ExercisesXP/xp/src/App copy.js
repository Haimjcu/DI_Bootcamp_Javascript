import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import ErrorBoundary from './Components/ErrorBoundary';

const Home = () => (
  <div>
    <h1>HomePage</h1>
    <img
      src="https://cdn.pixabay.com/photo/2018/05/18/15/30/webdesign-3411373_1280.jpg"
      alt="Homepage"
      width="40%" />
  </div>
);

const Profile = () => (
  <div>
    <h1>About me : My Hobbies</h1>
    <img
      src="https://cdn.pixabay.com/photo/2017/06/16/18/03/classical-2409809_1280.png"
      alt="About"
      width="40%" />
    <p>I love playing the guitar!</p>
  </div>
);

const Shop = () => (
  <div>
    <h1>Here is a list of projects</h1>
    <img
      src=" https://cdn.pixabay.com/photo/2017/06/10/07/18/list-2389219_1280.png"
      alt="About"
      width="30%" />
  </div>
);

const App = () => (

<ErrorBoundary>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <NavLink to="/">Home</NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/profile">Profile</NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/shop">Shop</NavLink>
        </li>
      </ul>
    </div>
  </div>
  <BrowserRouter>
  <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  </BrowserRouter>

</nav>
</ErrorBoundary>
  );

export default App;
