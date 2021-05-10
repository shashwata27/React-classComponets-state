import React from "react";
import ReactDOM from "react-dom";
import Location from "./Location";

class App extends React.Component {
  render() {
    return <Location />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
