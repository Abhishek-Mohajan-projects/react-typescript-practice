import React from "react";

type postProps = {
  children: React.ReactNode;
};

const Card = (props: postProps) => {
  return <div>{props.children}</div>;
};

export default Card;
