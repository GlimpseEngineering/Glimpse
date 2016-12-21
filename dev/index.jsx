import React, {Component} from "react";
import ReactDOM from "react-dom";
import routes from './routes.js';
require('./assets/stylesheets/base.scss');

ReactDOM.render(
  routes, document.querySelector("#container")
);
