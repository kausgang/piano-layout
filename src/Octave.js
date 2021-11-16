import React from "react";
import WhiteKey from "./WhiteKey";
import BlackKey from "./BlackKey";
import FirstWhiteKey from "./FirstWhiteKey";
// import WhiteWhiteKey from "./WhiteWhiteKey";

const Octave = () => {
  return (
    <div className="octave">
      <FirstWhiteKey />
      <BlackKey />
      <WhiteKey />
      <BlackKey />
      <FirstWhiteKey />

      <FirstWhiteKey />
      <BlackKey />
      <WhiteKey />
      <BlackKey />
      <WhiteKey />
      <BlackKey />
      <WhiteKey />
    </div>
  );
};

export default Octave;
