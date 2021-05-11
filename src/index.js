import React from "react";
import ReactDOM from "react-dom";
import Location from "./Location";

class App extends React.Component {
  render() {
    return (
      <div>
        <Location />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
