import React from 'react';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
//provider makes store available to all container(super) components in app without passing it explicitly
// import { Provider } from 'react-redux';
import App from './components/dashboard/App';
import Sphere from './components/Sphere';
import Login from './components/Login';
//temporary
// import { createStore } from 'redux';

const routes = (
  // <Provider store = {store}>

    <Router history={ hashHistory }>
      <Route path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/sphere" component={Sphere} />
    </Router>

  // </Provider>
)
export default routes;