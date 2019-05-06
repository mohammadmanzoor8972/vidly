
import React from "react";
import { NavLink, Link } from "react-router-dom";


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
        <Link class="nav-link" to="/movies">Movies</Link>
      </li>
      <li class="nav-item">
       <Link class="nav-link" to="/customer">Customer</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/rental">Rental</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/login">Login</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/register">Register</Link>
      </li>
    </ul>
  </div>
</nav>

   
  );
};

export default NavBar;