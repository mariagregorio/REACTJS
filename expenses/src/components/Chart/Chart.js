import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar'

const Chart = ({ filteredExpenses, year }) => {
  const monthsDetail = []
  for (let i = 0; i < 12; i++) {
    monthsDetail.push({month: i, amount: 0, percent: 0})
  }

  const total = filteredExpenses.reduce((previous, current) => {
    return previous + current.amount
  }, 0)
  const totalPerMonth = filteredExpenses.reduce((previous, current) => {
    const index = previous.findIndex(item => item.month === current.date.getMonth())
    if (index !== -1) {
      previous[index].amount += current.amount
      previous[index].percent = previous[index].amount * 100 / total
      return previous
    } else {
      return previous.concat({month: current.date.getMonth(), amount: current.amount, percent: current.amount * 100 / total})
    }
  }, monthsDetail)

  return (
    <div>
      <h4>{year} - total: $ {total}</h4>
      <div className='months-list'>
        {totalPerMonth.map(item => { 
          return <ChartBar 
            key={item.month} 
            month={item.month} 
            amount={item.amount} 
            percent={item.percent} />
          })}
      </div>
    </div>
  )
}

export default Chart