
import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalState"
<<<<<<< HEAD
import { expenseOptions } from "./AddTransaction";

export function Balance() {
    const { transactions } = useContext(GlobalContext);

        const income = transactions.filter(transaction => !expenseOptions.includes(transaction.category)).map(transaction => transaction.amount);
        const expenses = transactions.filter(transaction => expenseOptions.includes(transaction.category)).map(transaction => transaction.amount);

        const balance = (income.reduce((acc, item) => (acc += item), 0) - expenses.reduce((acc, item) => (acc += item), 0)).toFixed(2);
=======

export function Balance() {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
>>>>>>> 6c7894ef7d0009db901780c5d81984c5fd14ab71

    return (
        <>
        <h4>Your Balance</h4>
<<<<<<< HEAD
        <h1 id="balance">${balance}</h1>
=======
        <h1 id="balance">${total}</h1>
>>>>>>> 6c7894ef7d0009db901780c5d81984c5fd14ab71
        </>
    )
}