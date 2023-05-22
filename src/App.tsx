import React from "react";
import "./App.css";
import Button from "./components/Button";
import Post from "./components/Post";
import ButtonStyle from "./components/typingStyle/ButtonStyle";

// import DataFetch from "./components/DataFetch";
//import User from "./components/User";
// import UserDemo from "./components/UserDemo";

/*const user1 = {
  name: "Alex",
  age: 21,
  isRegistered: true,
  lang: ["Bangla", "English"],
};

const user2 = {
  name: "Peter",
  age: 22,
  isRegistered: false,
  lang: ["Bangla", "Hindi"],
};*/

/* const users = [
  { id: 1, name: "Alex", age: 21 },
  { id: 1, name: "Peter", age: 22 },
];
 */

const btnStyle = {
  color: "white",
  backgroundColor: "purple",
  padding: "1rem",
  borderRadius: ".5rem",
  cursor: "pointer",
};

function App() {
  return (
    <div className="App">
      <h1>React Typescript</h1>
      <h1>User Management</h1>
      {/* <User user={user1} />
      <User user={user2} /> */}
      {/* <UserDemo users={users} > */}
      {/* <DataFetch status="success" /> */}
      <Button>Click Me</Button>
      <Post />
      <ButtonStyle btnStyle={btnStyle} />
    </div>
  );
}

export default App;
