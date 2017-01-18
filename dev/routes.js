import React from 'react';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import { getOneUser  } from './actions/usersActionCreators';
import App from './App';
import World from './components/scene/World';
import Profile from './components/dashboard/Profile';
import Auth from './components/Auth';
import Splash from './components/Splash';
import Post from './components/PostGenerator';
import Search from './components/search/SearchBar';

const routes = (
    <Route path="/" component={App} >
      <IndexRedirect to="/splash" />
      <Route path="splash" component={Splash} />
      <Route path="/profile" component={Profile}>
        <Route path="/profile/:id" component={Profile} />
      </Route>
      <Route path="post" component={Post} />
      <Route path="world" component={World} />
      <Route path="auth" component={Auth} />
      <Route path="search" component={Search} /> 
      <Route path="*" component={Splash} />
    </Route>
)
export default routes;