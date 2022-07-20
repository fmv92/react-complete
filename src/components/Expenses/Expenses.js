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

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === enteredYear;});


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter enteredYear={enteredYear} onYearPicked={pickedYearDataHandler} />
        {filteredExpenses.map(item => (
        <ExpenseItem
        key={item.id} 
        title={item.title} 
        amount={item.amount} 
        date={item.date} />
        ))}
      </Card>
    </div>
  )
}

export default Expenses;
