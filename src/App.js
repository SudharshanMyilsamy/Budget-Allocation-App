import React from 'react';
import './App.css';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Budget from './components/Budget';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import CurrencyDropdown from './components/CurrencyDropdown';
import './App.css';

const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <Header />
        <CurrencyDropdown />
        <Budget />
        <ExpenseList />
        <AddExpenseForm />
      </div>
    </AppProvider>
  );
};

export default App;
