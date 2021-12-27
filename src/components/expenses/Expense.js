import React, { useState } from "react";
import ExpenseItems from "./ExpenseItems";
import ExpensesFilter from "./expenseFilter";
import Card from "../UI/Card";
import "./Expense.css";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");
  const onFilterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log();
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={onFilterChangeHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItems
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))}
      </Card>
    </div>
  );
};
export default Expenses;
