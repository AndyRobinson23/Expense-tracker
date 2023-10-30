import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import ExpenseIcon from './ExpenseIcon';

const ExpenseItem = function (props) {
  return (
    <li>
      <Card className="expense-item">
        <div className="expense-item__description">
          <div className="expense-item__icon">
            <ExpenseIcon type={props.type} />
          </div>
          <div className="expense-item__info">
            <h2>{props.title}</h2>
            <ExpenseDate date={props.date} />
          </div>
        </div>
        <div className="expense-item__price">£{props.amount}</div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
