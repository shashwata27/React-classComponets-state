import React from "react";

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = { num: 0 };
    this.con = 0;
  }

  clickFunc = () => {
    this.setState({ num: (this.state.num += 1) });
    this.con += 1;
    console.log(this.con);
  };

  render() {
    return (
      <button onClick={this.clickFunc}>Pressed {this.state.num} times</button>
    );
  }
}
