import React, { Component } from 'react';
import { NavLink, Route, withRouter } from 'react-router-dom';
import SignIn from './components/SignIn';
import Register from './components/Register';
import BooksView from './views/BooksView';
import BookView from './views/BookView';
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
          <Route exact path='/books' component={BooksView} />
          <Route path='/books/:id' component={BookView} />
        </div>
      </>
    );
  }
}


export default withRouter(App);
