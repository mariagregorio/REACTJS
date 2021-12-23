import React from 'react'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
import './ExpensesList.css'

const ExpensesList = ({ expenses, filteredExpenses, filterExpenses, selectedYear, setSelectedYear }) => {
  
  return (
    <Card className='expenses-list'>
      <h2>Expenses</h2>
      <ExpensesFilter 
        expenses={expenses} 
        filterExpenses={filterExpenses} 
        setSelectedYear={setSelectedYear} 
        selectedYear={selectedYear} 
        filteredExpenses={filteredExpenses} />
      {filteredExpenses.map(expense => <ExpenseItem key={expense.id} expense={expense} />)}
    </Card>
  )
}

export default ExpensesList