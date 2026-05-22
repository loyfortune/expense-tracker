
import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalState"
import { expenseOptions } from "../expense/Expense";

export function Balance() {
    const { transactions } = useContext(GlobalContext);

        const income = transactions.filter(transaction => !expenseOptions.includes(transaction.category)).map(transaction => transaction.amount);
        const expenses = transactions.filter(transaction => expenseOptions.includes(transaction.category)).map(transaction => transaction.amount);

        const balance = Math.abs(income.reduce((acc, item) => (acc += item), 0) - expenses.reduce((acc, item) => (acc += item), 0)).toFixed(2);

        const sign = income.reduce((acc, item) => (acc += item), 0) - expenses.reduce((acc, item) => (acc += item), 0) < 0 ? '-' : '';
    return (
        <>
        <h4>Your Balance</h4>
        <h1 id="balance">{sign}${balance}</h1>
        </>
    )
}