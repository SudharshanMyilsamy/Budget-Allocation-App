import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
  const { state } = useContext(AppContext);

  return (
    <ul>
      {state.expenses.map((expense, index) => (
        <ExpenseItem key={index} expense={expense} />
      ))}
    </ul>
  );
};

export default ExpenseList;
