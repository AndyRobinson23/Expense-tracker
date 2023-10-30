import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const yearSelectChangeHandler = (e) => {
    const selectedYear = e.target.value;
    props.onYearChange(selectedYear);
  };

  const typeSelectChangeHandler = (e) => {
    const selectedType = e.target.value;
    props.onTypeChange(selectedType);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year:</label>
        <select onChange={yearSelectChangeHandler} value={props.startingYear}>
          <option value="All">All</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
      <div className="expenses-filter__control">
        <label>Filter by expense:</label>
        <select onChange={typeSelectChangeHandler}>
          <option>All</option>
          <option>Food & Drink</option>
          <option>Toiletries</option>
          <option>Car</option>
          <option>Office</option>
          <option>House</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
