import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

function Expenses(props) {
  const [enteredYear, setEnteredYear] = useState("2020");
  const pickedYearDataHandler = (year) => {
    console.log("Expenses.js "+ year);
    setEnteredYear(year);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter enteredYear={enteredYear} onYearPicked={pickedYearDataHandler} />
        {props.items.map(item => (
        <ExpenseItem 
        title={item.title} 
        amount={item.amount} 
        date={item.date} />
        ))}
      </Card>
    </div>
  )
}

export default Expenses;
