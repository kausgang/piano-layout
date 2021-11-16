import React from "react";
import Octave from "./Octave";

const Piano = (props) => {
  return (
    <div className="piano">
      <Octave />
      <Octave />
      <Octave />
      {/* middle c octave */}
      <Octave MiddleC="true" />
      <Octave />
      <Octave />
      <Octave />
    </div>
  );
};

export default Piano;
