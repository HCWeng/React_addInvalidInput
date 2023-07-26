import React from "react";
import classes from "./Card.module.css";

function Card(props) {
  // css put in the div
  return (
    // ${classes.card} 預設的css style, ${props.className} 從parent pass過來的CSS style 兩個合併
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
}

export default Card;
