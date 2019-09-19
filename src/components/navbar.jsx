
import React from "react";
import { NavLink, Link } from "react-router-dom";


const NavBar = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Vidly Shop</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/movies">Movies</Link>
      </li>
      <li className="nav-item">
       <Link className="nav-link" to="/customer">Customer</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/rental">Rental</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/apicall">APICall</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/register">Register</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/hooks">Hooks</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/todos">Todos</Link>
      </li>
    </ul>
  </div>
</nav>

   
  );
};

export default NavBar;