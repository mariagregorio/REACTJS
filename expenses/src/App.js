import React, { useState } from 'react'
import './App.css'
import ExpensesList from './components/Expenses/ExpensesList'
import NewExpense from './components/NewExpense/NewExpense'

function App() {
  const initialExpenses = [
    { id: 1, title: 'Car insurance', amount: 294.5, date: new Date(2021, 11, 1) },
    { id: 2, title: 'Toilet paper', amount: 3.99, date: new Date(2020, 1, 11) },
    { id: 3, title: 'Dog food', amount: 15, date: new Date(2021, 2, 17) },
  ]

  const [expenses, setExpenses] = useState(initialExpenses.sort((a, b) => b.date - a.date))
  const [filteredExpenses, setFilteredExpenses] = useState(initialExpenses)
  const [selectedYear, setSelectedYear] = useState('')

  const filterExpenses = (year, updatedExpenses = expenses) => {
    if (year === '') {
      setFilteredExpenses(updatedExpenses)
      return
    }
    setFilteredExpenses(updatedExpenses.filter(item => item.date.getFullYear() === Number(year)).sort((a, b) => b.date - a.date))
  }

  const addExpenseToList = (expenseData) => {
    const newExpense = {...expenseData, id: expenses.length + 1}
    const updatedExpenses = expenses.concat(newExpense).sort((a, b) => b.date - a.date)
    setExpenses(updatedExpenses)
    filterExpenses(selectedYear, updatedExpenses)
  }

  return (
    <div>
      <NewExpense addExpenseToList={addExpenseToList} />
      <ExpensesList 
        expenses={expenses} 
        filteredExpenses={filteredExpenses} 
        filterExpenses={filterExpenses} 
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear} />
    </div>
  );
}

export default App;
