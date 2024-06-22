import React from 'react';

const ExpenseItem = ({ expense }) => {
  return (
    <li>
      {expense.name}: {expense.amount}
    </li>
  );
};

export default ExpenseItem;
