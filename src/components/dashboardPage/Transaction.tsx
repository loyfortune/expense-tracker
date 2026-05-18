import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
<<<<<<< HEAD
import { expenseOptions } from "./AddTransaction";
=======
>>>>>>> 6c7894ef7d0009db901780c5d81984c5fd14ab71


type TransactionPropType = {id: number, category: string, text: string, amount: number};

export const Transaction  = ({transaction}: {transaction: TransactionPropType}) => {
    const { deleteTransaction } = useContext(GlobalContext);

<<<<<<< HEAD
const sign = expenseOptions.includes(transaction.category) ? '-' : '+';

    return(
        <li className={expenseOptions.includes(transaction.category) ? 'minus' : 'plus'}>
=======
const sign = transaction.amount < 0 ? '-' : '+';

    return(
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
>>>>>>> 6c7894ef7d0009db901780c5d81984c5fd14ab71
            <h2>{transaction.category}</h2><span className="list-details">
                 {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
                 <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
                 </span>
        </li>
    );
}