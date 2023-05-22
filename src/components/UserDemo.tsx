import React from "react";

type userProps = {
  users: {
    id: number;
    name: string;
    age: number;
  }[];
};

const UserDemo = ({ users }: userProps) => {
  return (
    <div>
      <h1>UserDemo</h1>
      {users.map((user) => {
        const { id, name, age } = user;
        return (
          <div key={id}>
            <h2>{id}</h2>
            <h3>{name}</h3>
            <p>{age}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UserDemo;
