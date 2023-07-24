import React from "react";

function AddUser(props) {
  const addUserHandler = (event) => {
    //set defalut value
    event.preventDefault();
  };

  return (
    <form onSubmit={addUserHandler}>
      {/* what is the htmeFor? */}
      <label htmlFor="username">UserName:</label>
      <input id="username" type="text"></input>
      <label htmlFor="age">Age (Years)</label>
      <input id="age" type="number"></input>
      <button type="submit">Add User</button>
    </form>
  );
}

export default AddUser;
