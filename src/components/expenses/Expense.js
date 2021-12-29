import React, { useState } from "react";
import ExpensesFilter from "./expenseFilter";
import ExpenseList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import "./Expense.css";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");
  const onFilterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log();
  };
  const filterdExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={onFilterChangeHandler}
        />
        <ExpensesChart expenses={filterdExpenses}></ExpensesChart>
        <ExpenseList filterdExpenses={filterdExpenses}></ExpenseList>
      </Card>
    </div>
  );
};
export default Expenses;
