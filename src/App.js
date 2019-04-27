import React, { Component } from 'react';
import Movies from './components/movies';
import  {Route, Switch} from 'react-router-dom'
import NavBar from './components/navbar';
import Home from './components/home';
import Dashboard from './components/dashboard';

class App extends Component {

  bootstrap
  render() {
    return (
      
      <main className="container">
      <NavBar/>
        <div className="contents">
        <Switch>
            <Route path='/movies' component={Movies} />
            <Route path='/home'  component={Home} />
            <Route path='/dashboard' component={Dashboard} />
            <Route
            exact
            path='/no-page'
            render={() => <h3>Please select a topic.</h3>}
            />
        </Switch>
        </div>
      </main>
    );
  }
}

export default App;