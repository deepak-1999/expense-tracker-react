import React, {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";

const initalState = {
 transactions: [
  { id: 1, text: 'Flower', amount: 20, tag: 'expense' },
    { id: 2, text: 'Salary', amount: 300, tag: 'income' },
    { id: 3, text: 'Book', amount: 10, tag: 'expense' },
    { id: 4, text: 'Camera', amount: 150, tag: 'income' },
    { id: 5, text: 'Mutual Fund', amount: 150, tag: 'savings' }
],
}
export const GlobalContext = createContext(initalState);

export const GlobalProvider = ({children}) => {
 const [state, dispatch] = useReducer(AppReducer, initalState);

 function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
 }

 function addTransaction(transaction) {
   dispatch({
     type: 'ADD_TRANSACTION',
     payload: transaction
   });
 }

 
 return (<GlobalContext.Provider value={{
  transactions: state.transactions,
  deleteTransaction,
  addTransaction
 }}>
  {children}
 </GlobalContext.Provider>)
}