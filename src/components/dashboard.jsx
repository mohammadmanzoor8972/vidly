import React from "react";
import {Switch, Route, Link} from 'react-router-dom';
import NavBar from './navbar';
import Home from './home';
const Dashboard = ({match}) => {
  return (
    
    <div>
    <h1>Dashboard Nested</h1>
    <Link class="nav-link" to='/admin/home'>Home</Link>
    <div>
    <Route path="/admin/home" render={()=><h1>Hello World</h1>} />
      </div></div>
    );
};

export default Dashboard;