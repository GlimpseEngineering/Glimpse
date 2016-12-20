import React, {Component} from "react";
import ReactDOM from "react-dom";
import routes from './routes.js'

// class App extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       songs: [],
//       selectedSong: null
//     };
//   }
//
//   render() {
//     return (
//       <div>Back to Reality</div>
//     );
//   }
// };

ReactDOM.render(
  routes, document.querySelector("#container")
);
