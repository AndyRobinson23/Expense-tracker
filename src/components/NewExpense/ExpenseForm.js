import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = function (props) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [enteredType, setEnteredType] = useState('Food & Drink');

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const typeChangeHandler = (e) => {
    setEnteredType(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
      type: enteredType,
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    setEnteredType('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Type</label>
          <select
            className="new-expense__select"
            onChange={typeChangeHandler}
            value={enteredType}
          >
            <option>Food & Drink</option>
            <option>Toiletries</option>
            <option>Car</option>
            <option>Office</option>
            <option>House</option>
          </select>
        </div>
      </div>
      <div className="new-expense__actions">
        <button className="btn" type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className="btn" type="submit">
          Add Expense
        </button>
      </div>
    </form>
  );
};
export default ExpenseForm;
