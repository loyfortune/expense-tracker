import { useRef } from 'react';
import './Dashboard.css';
import { NavLink } from 'react-router';

export function Dashboard() {
  const dashboardRef = useRef<HTMLDivElement>(null);

  function toggleDashboardDisplay(){
    const dashboardElement = dashboardRef.current;
    dashboardElement!.classList.toggle('dashboard');
  }

    function displayDashboard(){
    const dashboardElement = dashboardRef.current;
    dashboardElement!.classList.add('dashboard');
  }

    return(
      <>
            <div ref={dashboardRef} className="fixed left-0 top-0 h-screen w-50 sm:w-2xs bg-gray-800 hidden lg:block">
      <div className="flex gap-x-2 items-center justify-center mt-7">
        <span className="text-lg sm:text-2xl text-white font-semibold">MyExpense Tracker</span>
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
    <button onClick={toggleDashboardDisplay} className="absolute right-4 top-4 text-gray-500 focus:outline-none lg:hidden cursor-pointer"
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
                  <div className="add-btn" onClick={displayDashboard}>
        <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" className='bg-indigo-100 rounded-full'>
	    <path d="M0 0h24v24H0z" fill="none" />
	    <path fill="currentColor" fill-rule="evenodd" d="M2 11.999c0-5.523 4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10s-10-4.477-10-10M12 8a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2H9a1 1 0 1 1 0-2h2V9a1 1 0 0 1 1-1" clip-rule="evenodd" />
        </svg>
        </div>
      </>
    );
}