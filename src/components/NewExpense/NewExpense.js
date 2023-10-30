import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = function (props) {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowForm(false);
  };

  const showFormHandler = () => {
    setShowForm(true);
  };

  const hideFormHandler = () => {
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {/* The two statements below are shorthand if statements (if the first condition is true, the code to the right of the and operator will execute) */}
      {!showForm && (
        <button className="btn" onClick={showFormHandler}>
          Add New Expense
        </button>
      )}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={hideFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
