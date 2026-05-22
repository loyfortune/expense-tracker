import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { expenseOptions } from "../expense/Expense";


type TransactionPropType = {id: number, category: string, text: string, amount: number};

export const Transaction  = ({transaction}: {transaction: TransactionPropType}) => {
    const { deleteTransaction } = useContext(GlobalContext);

const sign = expenseOptions.includes(transaction.category) ? '-' : '+';

    return(
        <li className={expenseOptions.includes(transaction.category) ? 'minus' : 'plus'}>
            <h2>{transaction.category}</h2><span className="list-details">
                 {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
                 <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
                 </span>
        </li>
    );
}