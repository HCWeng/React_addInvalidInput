import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

function AddUser(props) {
  //useState collect the user input data, default is null
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredUserage, setEnteredUserage] = useState("");

  //Handlers
  const addUserHandler = (event) => {
    //set defalut value
    event.preventDefault();
    //check value
    if (
      enteredUsername.trim().length === 0 ||
      enteredUserage.trim().length === 0
    ) {
      return;
    }
    //+ sing is trun the string to the numbers
    if (+enteredUserage < 1) {
      return;
    }

    //console.log(enteredUsername, enteredUserage);
    // pass the data from the App.js
    // excation AddUser.js addUserHandler function
    props.onAddUser(enteredUsername, enteredUserage);
    setEnteredUsername("");
    setEnteredUserage("");
  };
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const userageChangeHandler = (event) => {
    setEnteredUserage(event.target.value);
  };

  return (
    <div>
      //set the ErrorModel
      <ErrorModal
        title="An error occored!"
        message="Something went wrong!"
      ></ErrorModal>
      // need a components for user information
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          {/* what is the htmeFor? label htmlFor is focusinput's ID,there are same*/}
          <label htmlFor="username">UserName:</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredUserage}
            onChange={userageChangeHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
