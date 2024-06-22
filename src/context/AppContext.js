import React, { createContext, useReducer } from 'react';

const AppContext = createContext();

const initialState = {
  budget: 2000,
  expenses: [],
  currency: '$'
};

const appReducer = (state, action) => {
  switch (action.type) {
    case 'SET_BUDGET':
      return {
        ...state,
        budget: action.payload
      };
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload]
      };
    case 'CHANGE_CURRENCY':
      return {
        ...state,
        currency: action.payload
      };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
