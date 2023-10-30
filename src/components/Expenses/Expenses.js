import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from '../UI/ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = function (props) {
  const [year, setYear] = useState('All');
  const [type, setType] = useState('All');

  const filterYearHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filterTypeHandler = (selectedType) => {
    setType(selectedType);
  };

  let filteredExpenses;

  if (year === 'All' && type === 'All') {
    filteredExpenses = props.expenseData;
  } else if (year === 'All' && type !== 'All') {
    filteredExpenses = props.expenseData.filter(
      (expense) => expense.type === type
    );
  } else if (type === 'All' && year !== 'All') {
    filteredExpenses = props.expenseData.filter(
      (expense) => expense.date.getFullYear() === +year
    );
  } else {
    filteredExpenses = props.expenseData.filter(
      (expense) => expense.date.getFullYear() === +year && expense.type === type
    );
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onYearChange={filterYearHandler}
          startingYear={year}
          onTypeChange={filterTypeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
