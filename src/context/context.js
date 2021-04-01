import React from "react";
import { useReducer, createContext } from "react";

import contextReducer from "./contextReducer";

const transactionsUrl = "http://localhost:3001/transactions";

// GET Fetch??
const initialState = JSON.parse(localStorage.getItem("transactions")) || [];

// fetch("", {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//     "Authorization": "Bearer (token)"
//   },
//   body: JSON.stringify(),
// })
// .then(res => res.json())
// .then(res => {
//   if(res.errors){
//     this.setState({alerts: res.errors})
//   }
// })

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  // Action Creators & Fetch w/ Options
  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
    fetch(transactionsUrl + `/${id}`, { method: "DELETE" });
  };

  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };

  const balance = transactions.reduce((acc, currVal) => {
    return currVal.type === "Expense"
      ? acc - currVal.amount
      : acc + currVal.amount;
  }, 0);

  return (
    <ExpenseTrackerContext.Provider
      value={{ deleteTransaction, addTransaction, transactions, balance }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
