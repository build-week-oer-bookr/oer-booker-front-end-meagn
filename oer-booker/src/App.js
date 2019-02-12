import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import Register from './components/Register';
import BooksView from './views/BooksView'
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <nav>
          <NavLink to='/books'>Home</NavLink>
        </nav>
        <div className='app-container'>
          <Route path='/login' component={SignIn} />
          <Route path='/register' component={Register} />
          <Route path='/books' component={BooksView} />
        </div>
      </>
    );
  }
}


export default App;
