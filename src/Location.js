import React from "react";

export default class extends React.Component {
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
    if (this.state.errMessg && !this.state.lat) {
      return <div>Error: {this.state.errMessg}</div>;
    } else if (!this.state.errMessg && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    } else {
      return <div>Loading !</div>;
    }
  }
}
