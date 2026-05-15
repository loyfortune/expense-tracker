import type { TransactionType } from "./GlobalState";

type StateType = {transactions: TransactionType[]};
type ActionType = {type: 'DELETE_TRANSACTION', payload: number} | {type: 'ADD_TRANSACTION', payload: TransactionType};

function AppReducer(state: StateType, action: ActionType): StateType{
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return {
               ...state,
               transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            } ;
            case 'ADD_TRANSACTION':
                return{
                    ...state,
                    transactions: [action.payload, ...state.transactions]
                }
        default:
            return state;
    }
}

export default AppReducer