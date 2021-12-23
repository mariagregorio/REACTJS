import React from 'react'
import './ExpensesFilter.css'
import FilteredYear from './FilteredYear'

const ExpensesFilter = ({ expenses, filterExpenses, selectedYear, setSelectedYear, filteredExpenses }) => {

  const years = expenses.reduce((previous, current) => {
    const year = current.date.getFullYear()
    return previous.findIndex(item => item === year) === -1 ? previous.concat(year) : previous
  }, []).sort()

  const yearSelectHandler = (e) => {
    let filterValue = e.target.value
    if (e.target.value === 'all') {
      filterValue = ''
    }
    setSelectedYear(filterValue)
    filterExpenses(filterValue)
  }

  return (
    <div>
      <div className='year-select'>
        <h3>Filter</h3>
        <div>
          <select defaultValue="all" onChange={yearSelectHandler}>
            {years.map(year => <option key={year} value={year}>{year}</option>)}
            <option value="all">All</option>
          </select>
        </div>
      </div>
      <div className='year-content'>
        { selectedYear !== '' && <FilteredYear filteredExpenses={filteredExpenses} year={selectedYear} /> }
      </div>
    </div>
  )
}

export default ExpensesFilter