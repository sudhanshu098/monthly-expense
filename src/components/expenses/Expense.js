import ExpenseItems from "./ExpenseItems";
import Card from "../UI/Card";
import "./Expense.css";
const Expenses = (props) => {
  const expenses = props.data;

  return (
    <Card className="expenses">
      <ExpenseItems
        title={expenses[0].title}
        date={expenses[0].date}
        amount={expenses[0].amount}
      />
      <ExpenseItems
        title={expenses[1].title}
        date={expenses[1].date}
        amount={expenses[1].amount}
      />
      <ExpenseItems
        title={expenses[2].title}
        date={expenses[2].date}
        amount={expenses[2].amount}
      />
      <ExpenseItems
        title={expenses[3].title}
        date={expenses[3].date}
        amount={expenses[3].amount}
      />
    </Card>
  );
};
export default Expenses;
