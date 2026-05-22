import { Header } from "./Header";
import { Balance } from "./Balance";
import { IncomeExpenses } from "./IncomeExpenses";
import { TransactionList } from "./TransactionList";
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
        </div>
    </>
    )
}
