import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toiletries',
    amount: 9.37,
    date: new Date(2020, 7, 14),
    type: 'Toiletries',
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12),
    type: 'House',
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
    type: 'Car',
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
    type: 'Office',
  },
  {
    id: 'e5',
    title: 'Meal out',
    amount: 65,
    date: new Date(2022, 4, 20),
    type: 'Food & Drink',
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };
  console.log(expenses);

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenseData={expenses} />
    </div>
  );
};

export default App;
