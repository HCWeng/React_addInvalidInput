import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  // usersList still a empty array, but we can change it by useState
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    //use setUsersList to update the user data
    //setUsersList 裡面放一個function
    setUsersList((prevUsersList) => {
      // 複製加上先前的prevUsersList
      //create new JS objects and add to the usersList array
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
