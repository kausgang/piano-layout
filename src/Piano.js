import React from "react";
import Octave from "./Octave";

const Piano = (props) => {
  return (
    <div className="piano">
      <Octave octave="1" />
      <Octave octave="2" />
      <Octave octave="3" />
      <Octave MiddleC="true" octave="4" />
      <Octave octave="5" />
      <Octave octave="6" />
      <Octave octave="7" />
    </div>
  );
};

export default Piano;
