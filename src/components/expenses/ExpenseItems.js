import "./ExpenseItems.css";
import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItems = (props) => {
  const [title, setTitle] = useState(props.title);
  const buttonClickHandler = () => {
    setTitle("Updated!!");
    console.log("Clicked!!!");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description ">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={buttonClickHandler}>Click me!</button>
    </Card>
  );
};

export default ExpenseItems;
