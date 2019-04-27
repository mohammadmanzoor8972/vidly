
import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Vidly Shop</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home</Link>
      </li>
      <li class="nav-item">
       <Link class="nav-link" to="/movies">Movies</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/dashboard">Dashboard</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/no-page">Default</Link>
      </li>
    </ul>
  </div>
</nav>

   
  );
};

export default NavBar;