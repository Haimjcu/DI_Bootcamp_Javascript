import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from './Components/ErrorBoundary';
import PostList from './Components/PostList';
import Example1 from './Components/Example1';
import Example2 from './Components/Example2';
import Example3 from './Components/Example3';

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);

const Profile = () => (
  <div>
    <h1>Profile Screen</h1>
  </div>
);

const Shop = () => (
  <div>
  <h1>An error has occured.</h1>
  </div>
);

const App = () => (
  <ErrorBoundary>
  <BrowserRouter>

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
    </nav>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/shop" element={<Shop />} />

    </Routes>
  </BrowserRouter>
  <PostList />
  <Example1 />
  <Example2 />
  <Example3 />
  </ErrorBoundary>

);

export default App;