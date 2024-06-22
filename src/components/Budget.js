import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { state, dispatch } = useContext(AppContext);

  const handleIncrease = () => {
    if (state.budget + 10 <= 20000) {
      dispatch({ type: 'SET_BUDGET', payload: state.budget + 10 });
    }
  };

  const handleDecrease = () => {
    const totalExpenses = state.expenses.reduce((total, item) => total + item.amount, 0);
    if (state.budget - 10 >= totalExpenses) {
      dispatch({ type: 'SET_BUDGET', payload: state.budget - 10 });
    }
  };

  return (
    <div>
      <span>{state.currency}</span>
      <input type="number" value={state.budget} readOnly />
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
    </div>
  );
};

export default Budget;
