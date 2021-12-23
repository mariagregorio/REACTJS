import React from 'react'
import './FilteredYear.css'
import Chart from '../Chart/Chart'

const FilteredYear = ({ filteredExpenses, year }) => {
  return (
    <div className='filtered-year'>
      <Chart filteredExpenses={filteredExpenses} year={year} />
    </div>
  )
}

export default FilteredYear