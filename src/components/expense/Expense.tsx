import { useRef, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
<<<<<<< HEAD
import { expenseOptions } from "../dashboardPage/AddTransaction";
=======
>>>>>>> 6c7894ef7d0009db901780c5d81984c5fd14ab71
import '../../App.css';
import { NavLink } from "react-router";


export function Expense() {
        const { transactions } = useContext(GlobalContext);

      const dashboardRef = useRef<HTMLDivElement>(null);
    
      function displayDashboard(){
        const dashboardElement = dashboardRef.current;
        dashboardElement!.classList.toggle('dashboard');
      }

<<<<<<< HEAD
          const expenses = transactions.filter(transaction => expenseOptions.includes(transaction.category)).map(transaction => transaction.amount);
          const totalExpense = expenses.reduce((acc, item) => (acc += item), 0).toFixed(2)
=======
          const amounts = transactions.map(transaction => transaction.amount);
              const expenses = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);
>>>>>>> 6c7894ef7d0009db901780c5d81984c5fd14ab71
    return (
              <>
            <div ref={dashboardRef} className="fixed left-0 top-0 h-screen w-3xs bg-gray-800 hidden lg:block">
      <div className="flex gap-x-2 items-center justify-center mt-7">
        <span className="text-2xl text-white font-semibold">MyExpense Tracker</span>
      </div>
      <div className="mt-10 space-y-4">
        <NavLink
          to="/"
          className="flex items-center text-gray-100 font-medium gap-x-3 py-2 px-6 w-full bg-gray-700/25"
          >
          <span>Dashboard</span></NavLink>
        <NavLink
          to="/expenses"
          className="flex items-center text-gray-500 font-medium gap-x-3 py-2 px-6 w-full hover:text-gray-100 hover:bg-gray-700/25"
          >
          <span>Expenses</span></NavLink>
        <NavLink
          to="/income"
          className="flex items-center text-gray-500 font-medium gap-x-3 py-2 px-6 w-full hover:text-gray-100 hover:bg-gray-700/25"
          >
          <span>Income</span></NavLink>
        <NavLink
          to="/support"
          className="flex items-center text-gray-500 font-medium gap-x-3 py-2 px-6 w-full hover:text-gray-100 hover:bg-gray-700/25"
          >
          <span>Support</span></NavLink>
      </div>
    </div>
    <button onClick={displayDashboard} className="absolute right-4 top-4 text-gray-500 focus:outline-none lg:hidden cursor-pointer"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6H20M4 12H20M4 18H11"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
          <h2 className="header">Expense Tracker</h2>
                  <div className="bg-white p-5 shadow-sm shadow-neutral-700 flex justify-center my-5 mx-0 w-sm lg:w-md">
            <div>
                <h4>Total Expense</h4>
<<<<<<< HEAD
                <p id="money-minus" className="money minus">-${totalExpense}</p>
=======
                <p id="money-minus" className="money minus">-${expenses}</p>
>>>>>>> 6c7894ef7d0009db901780c5d81984c5fd14ab71
            </div>
        </div>
                <h3>Expenses</h3>
                <ul className="list">
<<<<<<< HEAD
                    {transactions.filter(transaction => expenseOptions.includes(transaction.category)).map(transaction => (<li className='minus'>
=======
                    {transactions.filter(transaction => transaction.amount < 0).map(transaction => (<li className='minus'>
>>>>>>> 6c7894ef7d0009db901780c5d81984c5fd14ab71
            <h2>{transaction.category}</h2><span className="list-details">
                 {transaction.text} <span>-${Math.abs(transaction.amount)}</span>
                 </span>
        </li>))}
                
                </ul>
      </>
    )
<<<<<<< HEAD
}
=======
}
>>>>>>> 6c7894ef7d0009db901780c5d81984c5fd14ab71
