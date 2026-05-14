import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";


type TransactionPropType = {id: number, category: string, text: string, amount: number};

export const Transaction  = ({transaction}: {transaction: TransactionPropType}) => {
    const { deleteTransaction } = useContext(GlobalContext);

const sign = transaction.amount < 0 ? '-' : '+';

    return(
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            <h2>{transaction.category}</h2><span className="list-details">
                 {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
                 <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
                 </span>
        </li>
    );
}