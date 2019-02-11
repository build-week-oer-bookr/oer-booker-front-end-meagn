import React, { Component, Fragment } from 'react';
import { NavLink, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import Register from './components/Register';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <nav>
          <NavLink to='/'>Home</NavLink>
        </nav>
        <div className='app-container'>
          <Route path='/login' component={SignIn} />
          <Route path='/register' component={Register} />
        </div>
      </>
    );
  }
}

export default App;
