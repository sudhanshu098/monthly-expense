import "./NewExpense.css";
import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [isAddExpense, setIsAddExpense] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    console.log(enteredExpenseData);
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.expenseHandler(expenseData);
    setIsAddExpense(false);
  };
  const isAddExpenseHandler = () => {
    setIsAddExpense(true);
  };
  const cancleButtonHandler = () => {
    setIsAddExpense(false);
  };
  return (
    <div className="new-expense">
      {!isAddExpense && (
        <button onClick={isAddExpenseHandler}>Add New Expense</button>
      )}

      {isAddExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          cancleButton={cancleButtonHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
