import React from "react";

type buttonProps = {
  children: React.ReactNode;
};

const Button = (props: buttonProps) => {
  return <button>{props.children}</button>;
};

export default Button;
