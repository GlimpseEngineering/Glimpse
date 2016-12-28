import React from 'react';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
//provider makes store available to all container(super) components in app without passing it explicitly
import App from './App';
import World from './components/scene/World';
import Profile from './components/dashboard/Profile';
import Auth from './components/Auth';

const routes = (
    <Route path="/" component={App} >
      <IndexRedirect to="/profile" />
      <Route path="profile" component={Profile} />
      {/*<Route path="post" component={Post} /> */}
      <Route path="world" component={World} />
      <Route path="auth" component={Auth} /> 
    </Route>

)
export default routes;