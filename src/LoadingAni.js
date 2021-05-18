import React from "react";

const LoadingAni = (props) => {
  return (
    <div className="ui active inverted dimmer">
      <div className="ui text loader">{props.message}</div>
    </div>
  );
};

// if we want some default properties in a component
// when we don't pass in the message we use this
LoadingAni.defaultProps = {
  message: "Loading.",
};

export default LoadingAni;
