import React, { CSSProperties } from "react";

type buttonProps = {
  btnStyle: CSSProperties;
};

const ButtonStyle = (props: buttonProps) => {
  return (
    <div>
      <h1>ButtonStyle</h1>

      <button style={props.btnStyle}>Button Style</button>
    </div>
  );
};

export default ButtonStyle;
