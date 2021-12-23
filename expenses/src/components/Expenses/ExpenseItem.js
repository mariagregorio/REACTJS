import React from 'react'
import './ExpenseItem.css'
import Card from '../UI/Card'

const ExpenseItem = ({ expense }) => {
  const date = `${expense.date.toLocaleString('en-US', { month: 'short' })} 
    ${expense.date.toLocaleString('es-AR', { day: '2-digit' })}, 
    ${expense.date.getFullYear()}`

  const amount = expense.amount.toFixed(2)

  return (
    <Card className='expense-item'>
      <div className='expense-item__date'>{date}</div>
      <div className='expense-item__title'><h2>{expense.title}</h2></div>
      <div className='expense-item__amount'>$ {amount}</div>
    </Card>
  )
}

export default ExpenseItem