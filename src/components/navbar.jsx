
import React from "react";
import { NavLink } from "react-router-dom";


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
        <NavLink class="nav-link" to="/movies">Movies</NavLink>
      </li>
      <li class="nav-item">
       <NavLink class="nav-link" to="/customer">Customer</NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link" to="/rental">Rental</NavLink>
      </li>
    </ul>
  </div>
</nav>

   
  );
};

export default NavBar;