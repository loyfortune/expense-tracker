import { Routes, Route } from "react-router";
import { DashboardPage } from "./components/dashboardPage/DashboardPage";
import { Expense } from "./components/expense/Expense";
import {Income} from "./components/income/Income";
import { GlobalProvider } from "./context/GlobalState";
import './App.css'


function App() {

  return (
    <GlobalProvider>
      <Routes>
        <Route index element={<DashboardPage />} />
        <Route path='expenses' element={<Expense />} />
        <Route path='income' element={<Income />} />
      </Routes>
    </GlobalProvider>
  )
}

export default App
