import React from "react";
import WhiteKey from "./WhiteKey";
import BlackKey from "./BlackKey";
import WhiteKeyMiddleC from "./WhiteKeyMiddleC";

const Octave = (props) => {
  if (props.MiddleC) {
    return (
      <div className="octave">
        <WhiteKeyMiddleC />
        <BlackKey />
        <WhiteKey />
        <BlackKey />
        <WhiteKey />
        <WhiteKey />
        <BlackKey />
        <WhiteKey />
        <BlackKey />
        <WhiteKey />
        <BlackKey />
        <WhiteKey />
      </div>
    );
  } else {
    return (
      <div className="octave">
        <WhiteKey />
        <BlackKey />
        <WhiteKey />
        <BlackKey />
        <WhiteKey />
        <WhiteKey />
        <BlackKey />
        <WhiteKey />
        <BlackKey />
        <WhiteKey />
        <BlackKey />
        <WhiteKey />
      </div>
    );
  }
};

export default Octave;
