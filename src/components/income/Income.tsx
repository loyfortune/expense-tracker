import { useRef, useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { expenseOptions } from "../expense/Expense";
import { NavLink } from "react-router";
import '../dashboardPage/Dashboard.css'
import '../../App.css';
import arrowImage from '../../assets/arrow.png';

const incomeOptions = ['💰Wages/Salary', '🤝Business Income',
                 '💵Tips', 'Other',
                 ];

export function Income() {
  const [category, setCategory] = useState('');
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const selectTextRef = useRef<HTMLParagraphElement>(null);
  const arrowImgRef = useRef<HTMLImageElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);

  const { addTransaction, deleteTransaction } = useContext(GlobalContext);
  const  { transactions } = useContext(GlobalContext);
    
  function displayDashboard(){
    const dashboardElement = dashboardRef.current;
    dashboardElement!.classList.toggle('dashboard');
  }

  const income = transactions.filter(transaction => !expenseOptions.includes(transaction.category)).map(transaction => transaction.amount);
  const totalIncome = income.reduce((acc, item) => (acc += item), 0).toFixed(2)

  function toggleSelectField(){
    const arrowImgElement = arrowImgRef.current;
    const listElement = listRef.current;

    listElement!.classList.toggle('hide');
    arrowImgElement!.classList.toggle('rotate');
  };

  const handleOptionClick = (text: string) => {
    const selectTextElement = selectTextRef.current;
    const listElement = listRef.current;
    const arrowImgElement = arrowImgRef.current;

    selectTextElement!.innerHTML = text;
    listElement!.classList.add('hide');
    arrowImgElement!.classList.toggle('rotate');
    setCategory(text);
  };

  const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      category,
      text,
      amount
    }

    addTransaction(newTransaction);
  }

    return(
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
          <div className='my-7.5 mx-auto w-75 sm:w-100 md:w-112.5'>
        <h2 className="header">Expense Tracker</h2>
        <div className="bg-white p-4 rounded-sm shadow-sm shadow-neutral-400 flex items-center justify-center my-5 mx-0 w-full">
            <div>
                <h4>Total Income</h4>
                <p id="money-plus" className="money plus">+${totalIncome}</p>
            </div>
        </div>
                <h3>Income</h3>
                <ul className="list">
                    {transactions.filter(transaction => !expenseOptions.includes(transaction.category)).map(transaction => (<li className='plus'>
                      <h2>{transaction.category}</h2><span className="list-details">
                 {transaction.text} <span>+${Math.abs(transaction.amount)}</span>
                 <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
                 </span>
           </li> ))}
                </ul>
                <h3>Add new transaction</h3>
              <form id="form" onSubmit={onSubmit}> 
                <div className="form-control">
                    <div className="selector">
                 <label htmlFor="selectField">Category</label>
                        <div id="selectField" onClick={toggleSelectField}> 
          <p ref={selectTextRef}>Select Category</p>
          <img ref={arrowImgRef} src={arrowImage} id="arrowIcon" />
        </div>
        <ul id='list' ref={listRef} className="hide">
            {incomeOptions.map((option, index) => (
              <li key={index} className="options" value={category} onClick={() => handleOptionClick(option)}><p>{option}</p></li>
            ))}
            </ul>
      </div>
                  <label htmlFor="text">Description</label>
                  <input type="text" id="text" value={text} onChange={(e) => {setText(e.target.value);}} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                  <label htmlFor="amount"
                    >Amount</label>
                  <input type="number" id="amount" value={amount} onChange={(e) => {setAmount(e.target.valueAsNumber);}} placeholder="Enter amount..." />
                  </div>
                <button className="btn">Add transaction</button>
              </form>
              </div>
      </>
    )
}
