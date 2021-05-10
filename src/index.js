import React from "react";
import ReactDOM from "react-dom";
import Location from "./Location";
import Button from "./Buttons";

class App extends React.Component {
  render() {
    return (
      <div>
        <Location />
        <Button />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
