import React, { Component } from 'react';
import Movies from './components/movies';
import  {Route, Switch} from 'react-router-dom'
import NavBar from './components/navbar';
import Home from './components/home';
import Dashboard from './components/dashboard';
import MovieDetails from './components/movieDetail';
import LoginForm from './components/loginForm';
import Register from './components/register';
import MovieForm from './components/movieForm';
import HttpDemo from './components/httpDemo';
import Button, { DataLoader } from './components/hooks';
import Todo from './components/todo';

class App extends Component {

  
  render() {
    return (
      
      <main className="container">
      <NavBar/>
        <div className="contents">
        <Switch>
            <Route path='/movies/' component={Movies} />
            <Route path='/customer'  render={()=><h1>Custome Page</h1>} />
            <Route path='/rental' render={()=><h1>Renatal Page</h1>} />
            <Route path="/moviesdet/:movieId" component={MovieDetails}/>
            <Route path="/login" component={LoginForm}/>
            <Route path="/register" component={Register}/>
            <Route path="/movieForm" component={MovieForm}/>
            <Route path="/apicall" component={HttpDemo}/>
            <Route path="/hooks" component={DataLoader}/>
            <Route path="/todos" component={Todo}/>

        </Switch>
        </div>
      </main>
    );
  }
}

export default App;