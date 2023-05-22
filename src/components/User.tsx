import React from "react";

type userProps = {
  user: {
    name: string;
    age: number;
    isRegistered: boolean;
    lang: string[];
  };
};

const User = ({ user }: userProps) => {
  return (
    <div style={{ border: "1px solid", margin: "1em" }}>
      <h2>Name: {user.name}</h2>
      <h4>{user.age} years old</h4>
      {user.isRegistered ? (
        <h5>User is Registered</h5>
      ) : (
        <h5>User is not Registered</h5>
      )}

      <p>
        {" "}
        Languages:{" "}
        {user.lang.map((languages, index) => {
          return <span key={index}>{languages} </span>;
        })}
      </p>
    </div>
  );
};

export default User;
