import React, {Component} from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: [],
      selectedSong: null
    };
  }

  render() {
    return (
      <div>Back to Reality</div>
    );
  }
};
 
ReactDOM.render(
  <App />, document.querySelector("#container")
); 