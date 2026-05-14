import { Header } from "./Header";
import { Balance } from "./Balance";
import { IncomeExpenses } from "./IncomeExpenses";
import { TransactionList } from "./TransactionList";
import { AddTransaction } from "./AddTransaction";
import { Dashboard } from "./Dashboard";

export function DashboardPage() {
    return (
    <>
        <Dashboard/>
        <div className="container">
        <Header/>
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
        </div>
    </>
    )
}
