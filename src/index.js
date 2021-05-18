import React from "react";
import ReactDOM from "react-dom";
import Buttons from "./Buttons";
import Location from "./Location";

class App extends React.Component {
  render() {
    return (
      <div>
        <Location />
        <Buttons />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
