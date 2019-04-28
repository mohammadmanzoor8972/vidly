import React, { Component } from 'react';
import Movies from './components/movies';
import  {Route, Switch} from 'react-router-dom'
import NavBar from './components/navbar';
import Home from './components/home';
import Dashboard from './components/dashboard';
import MovieDetails from './components/movieDetail';
import LoginForm from './components/loginForm';

class App extends Component {

  bootstrap
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
            exact
            path='/'
            render={() => <h3>Please select a topic.</h3>}
            />
        </Switch>
        </div>
      </main>
    );
  }
}

export default App;