import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const AddExpenseForm = () => {
  const { state, dispatch } = useContext(AppContext);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = { name, amount: parseInt(amount) };
    dispatch({ type: 'ADD_EXPENSE', payload: expense });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Amount</label>
        <span>{state.currency}</span>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default AddExpenseForm;
