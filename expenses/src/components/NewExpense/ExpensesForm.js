import React, { useState } from 'react'

const ExpensesForm = ({ addExpenseToList, showForm }) => {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')

  const titleChangeHandler = (e) => {
    setTitle(e.target.value)
  }

  const amountChangeHandler = (e) => {
    setAmount(Number(e.target.value))
  }

  const dateChangeHandler = (e) => {
    setDate(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if (title === '' || amount === '' || date === '') {
      alert('Please set all the fields to add a new expense')
      return
    }
    const expenseData = { title, amount, date: new Date(date.split('-')) }
    addExpenseToList(expenseData)
    setTitle('')
    setAmount('')
    setDate('')
    showForm(false)
  }

  const resetHandler = () => {
    setTitle('')
    setAmount('')
    setDate('')
    showForm(false)
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__control'>
        <label htmlFor="titleInput">Title</label>
        <input id="titleInput" type="text" onChange={titleChangeHandler} value={title} />
      </div>
      <div className='new-expense__control'>
        <label htmlFor="amountInput">Amount</label>
        <input id="amountInput" type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={amount} />
      </div>
      <div className='new-expense__control'>
        <label htmlFor="dateInput">Date</label>
        <input id="dateInput" type="date" onChange={dateChangeHandler} value={date} />
      </div>
      <div className='new-expense__actions'>
        <button className='cancel' type="reset" onClick={resetHandler}>Cancel</button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  )
}

export default ExpensesForm