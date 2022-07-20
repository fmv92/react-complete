import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditable, setEditable] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  const startEditingHandler = () => {
    setEditable(true);
  };

  const stopEditingHandler = () => {
    setEditable(false);
  };
  return (
    <div className="new-expense">
      {!isEditable && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditable && <ExpenseForm onCancelForm={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  );
}

export default NewExpense;
