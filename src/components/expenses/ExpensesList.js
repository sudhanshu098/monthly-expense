import React from "react";
import ExpenseItems from "./ExpenseItems";
import "./ExpensesList.css";
const ExpenseList = (props) => {
  if (props.filterdExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.filterdExpenses.map((expense) => (
        <ExpenseItems
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
};
export default ExpenseList;
