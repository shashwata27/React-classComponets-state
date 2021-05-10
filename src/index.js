import React from "react";
import ReactDOM from "react-dom";
import Faker from "faker";

class App extends React.Component {
  constructor(props) {
    super(props);
    // super() reference to parents constructor fucntion
    // called with props attribute

    // creating state is the only time we directly asign state
    // for reseting we always use setState()
    this.state = { lat: null, errMessg: "" };

    window.navigator.geolocation.getCurrentPosition(
      // sucess callback
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      //   failure callback
      (eror) => {
        this.setState({ errMessg: eror.message });
      }
    );
  }
  render() {
    return (
      <div>
        <img src={Faker.image.avatar()} alt="Avatar" />

        <div>
          Latitude: {this.state.lat}
          <br />
          Error: {this.state.errMessg}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
