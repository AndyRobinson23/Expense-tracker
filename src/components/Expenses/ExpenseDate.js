import './ExpenseDate.css';

const ExpenseDate = function (props) {
  const month = props.date.toLocaleString('en-us', { month: 'long' });
  const day = props.date.toLocaleString('en-us', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <p className="expense-date">
      {day} {month} {year}
    </p>
  );
};

export default ExpenseDate;
