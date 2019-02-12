import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import {BrowserRouter as Router, withRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


const store = createStore( rootReducer, applyMiddleware(logger, thunk ));

const AppWithRouter = withRouter(App);


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <AppWithRouter />
        </Router>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();