import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import LoadingAni from "./LoadingAni";

export default class extends React.Component {
  constructor(props) {
    super(props);
    // super() reference to parents constructor fucntion
    // called with props attribute

    // creating state is the only time we directly asign state
    // for reseting we always use setState()
    this.state = { lat: null, errMessg: "" };
  }

  // can define state like this also
  // state = { lat: null, errMessg: "" };

  // runs after the render method, only 1st time when component is created
  componentDidMount() {
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

  // setState> render()> componentDidUpdate()
  componentDidUpdate() {
    console.log("My component just updated !");
  }
  render() {
    if (this.state.errMessg && !this.state.lat) {
      return <div>Error: {this.state.errMessg}</div>;
    } else if (!this.state.errMessg && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    } else {
      return <LoadingAni message="Give location acess." />;
    }
  }
}
