
import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalState"
<<<<<<< HEAD
import { expenseOptions } from "./AddTransaction";
=======
>>>>>>> 6c7894ef7d0009db901780c5d81984c5fd14ab71

export function IncomeExpenses() {
    const { transactions } = useContext(GlobalContext);

<<<<<<< HEAD
    const income = transactions.filter(transaction => !expenseOptions.includes(transaction.category)).map(transaction => transaction.amount);
    const expenses = transactions.filter(transaction => expenseOptions.includes(transaction.category)).map(transaction => transaction.amount);

    const totalIncome = income.reduce((acc, item) => (acc += item), 0).toFixed(2)
    const totalExpense = expenses.reduce((acc, item) => (acc += item), 0).toFixed(2)
=======
    const amounts = transactions.map(transaction => transaction.amount);
    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expenses = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

>>>>>>> 6c7894ef7d0009db901780c5d81984c5fd14ab71
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
<<<<<<< HEAD
                <p id="money-plus" className="money plus">+${totalIncome}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id="money-minus" className="money minus">-${totalExpense}</p>
=======
                <p id="money-plus" className="money plus">+${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id="money-minus" className="money minus">-${expenses}</p>
>>>>>>> 6c7894ef7d0009db901780c5d81984c5fd14ab71
            </div>
        </div>
    )
}