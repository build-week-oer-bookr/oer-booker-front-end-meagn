import React, { Component, Fragment } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Signin from './components/Signin';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/login' component={Signin} />
      </div>
    );
  }
}

export default App;
