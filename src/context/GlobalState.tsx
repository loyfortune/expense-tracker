import React, { createContext, useEffect, useReducer } from 'react';
import AppReducer  from './AppReducer'

//initial State
export type GlobalContextType = {
 transactions: {id: number, category: string, text: string, amount: number}[]
 deleteTransaction: (id: number) => void;
 addTransaction: (transaction:TransactionType) => void;
};

export type TransactionType = {id: number, category: string, text: string, amount: number};

const savedTransactions = localStorage.getItem('transactions');
const initialState = {
    transactions: savedTransactions ? JSON.parse(savedTransactions) : [],
    deleteTransaction: () => {},
    addTransaction: () => {}
};

// Create context
export const GlobalContext = createContext<GlobalContextType>(initialState);

// Provider component
export const GlobalProvider = ({ children }:{children: React.ReactNode}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(state.transactions));
    }, [state.transactions]);

    // Actions
    function deleteTransaction(id:number) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction: TransactionType) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return(<GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction, addTransaction}}>
        {children}
    </GlobalContext.Provider>);
}