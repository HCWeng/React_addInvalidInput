import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

function UsersList(props) {
  return (
    // props.user 利用map()處理array資料
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          // 把資料放進li tag的方法，成為動態資料
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UsersList;
