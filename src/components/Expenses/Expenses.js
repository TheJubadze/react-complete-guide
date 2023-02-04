import "./Expenses.css";
import ExpenceItem from "./ExpenseItem";
import Card from "../UI/Card";

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((e) => (
        <ExpenceItem title={e.title} amount={e.amount} date={e.date} />
      ))}
    </Card>
  );
}

export default Expenses;
