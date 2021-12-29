import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  //---------------------------------------------------------------------------------------------//
  //-----------------------------------Individual State For Each feild---------------------------//
  //---------------------------------------------------------------------------------------------//
  //useStates hooks for title
  const [enteredTitle, setEnteredTitle] = useState("");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  //useStates hooks for amount
  const [enteredAmount, setEnteredAmount] = useState("");
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  //useStates hooks for amount
  const [enteredDate, setEnteredDate] = useState("");
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  //---------------------------------------------------------------------------------------------//
  //-----------------------------------Single State For Each feild-------------------------------//
  //---------------------------------------------------------------------------------------------//

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: " ",
  //   enteredAmount: " ",
  //   enteredDate: " ",
  // });
  // const titleChangeHandler = (event) => {
  //   setUserInput({
  //     ...userInput,
  //     enteredTitle: event.target.value,
  //   });
  // };
  // const amountChangeHandler = (event) => {
  //   console.log(event);
  //   setUserInput({
  //     ...userInput,
  //     enteredAmount: event.target.value,
  //   });
  // };
  // const dateChangeHandler = (event) => {
  //   setUserInput({
  //     ...userInput,
  //     enteredDate: event.target.value,
  //   });
  // };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    const data = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(data);
    props.onSaveExpenseData(data);

    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle(" ");
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2022-12-12"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.cancleButton}>Cancle</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
