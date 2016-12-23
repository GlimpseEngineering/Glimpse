import React, {Component} from "react";
import ReactDOM from "react-dom";
import routes from './routes.js';
require('./assets/stylesheets/base.scss');
import { Router, Route, IndexRedirect, hashHistory, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers/index';

//create store
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);

ReactDOM.render(
  <Provider store = {store}>
    <Router history={hashHistory}>
      {routes}
    </Router>
  </Provider>
  , document.querySelector("#container")
);
