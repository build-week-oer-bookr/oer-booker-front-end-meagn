import React, { Component } from 'react';
import { NavLink, Route, withRouter } from 'react-router-dom';
import SignIn from './components/Signin';
import Register from './components/Register';
import Header from './components/Header';
import BooksView from './views/BooksView';
import BookView from './views/BookView';
import navImg  from './open-book.png'
import './App.css';
import styled from 'styled-components';

const Nav = styled.div`
  background-color: gray;
  padding: 2%;
  font-size: 1.5rem;
  display: flex;
    justify-content: space-around;
    align-content: space-around;
`;

class App extends Component {
  render() {
    return (
      <>
        <Nav>
          <NavLink to='/books'>
            <i class="fas fa-book" style={{ textDecoration: 'none', color: 'white' }}> Home</i>
          </NavLink>
          <img src={navImg} alt='open-book' />
          <NavLink to='/login'>
            <i class="fas fa-sign-in-alt" style={{ textDecoration: 'none', color: 'white' }}> SignIn</i>
          </NavLink>
        </Nav>
        <div className='app-container'>
          <Route exact path='/login' component={SignIn} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/books' component={Header} />
          <Route exact path='/books' component={BooksView} />
          <Route path='/books/:id' component={BookView} />
        </div>
      </>
    );
  }
}


export default withRouter(App);
