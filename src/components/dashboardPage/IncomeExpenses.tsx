
import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalState"
import { expenseOptions } from "./AddTransaction";

export function IncomeExpenses() {
    const { transactions } = useContext(GlobalContext);

    const income = transactions.filter(transaction => !expenseOptions.includes(transaction.category)).map(transaction => transaction.amount);
    const expenses = transactions.filter(transaction => expenseOptions.includes(transaction.category)).map(transaction => transaction.amount);

    const totalIncome = income.reduce((acc, item) => (acc += item), 0).toFixed(2)
    const totalExpense = expenses.reduce((acc, item) => (acc += item), 0).toFixed(2)
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p id="money-plus" className="money plus">+${totalIncome}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id="money-minus" className="money minus">-${totalExpense}</p>
            </div>
        </div>
    )
}