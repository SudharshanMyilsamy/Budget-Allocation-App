import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
  const { state, dispatch } = useContext(AppContext);

  const handleCurrencyChange = (e) => {
    dispatch({ type: 'CHANGE_CURRENCY', payload: e.target.value });
  };

  return (
    <div>
      <label>Currency</label>
      <select value={state.currency} onChange={handleCurrencyChange}>
        <option value="$">$ Dollar</option>
        <option value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Rupee</option>
      </select>
    </div>
  );
};

export default CurrencyDropdown;
