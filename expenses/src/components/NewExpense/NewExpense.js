import React, { useState } from 'react'
import './NewExpense.css'
import Card from '../UI/Card'
import ExpensesForm from './ExpensesForm'

const NewExpense = ({ addExpenseToList }) => {
  const [formVisible, setFormVisible] = useState(false)

  const showForm = (value) => {
    setFormVisible(value)
  }

  return (
    <Card className='new-expense'>
      {!formVisible ? 
      <div className='center'>
        <div className='btn add-expense-btn' onClick={() => showForm(true)}>Add new expense</div>
      </div> :
      <div>
        <h2>Add new expense</h2>
        <ExpensesForm addExpenseToList={addExpenseToList} showForm={showForm} />
      </div>}
    </Card>
  )
}

export default NewExpense