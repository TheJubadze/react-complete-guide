import "./Expenses.css";
import ExpenceItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <div className="expenses">
      {props.expenses.map((e) => (
        <ExpenceItem title={e.title} amount={e.amount} date={e.date} />
      ))}
    </div>
  );
}

export default Expenses;
