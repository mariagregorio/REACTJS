import React from 'react'

const ChartBar = ({ month, amount, percent }) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  return (
    <div className='month'>
      {percent !== 0 && <div>{percent.toFixed(2)} %</div>}
      {amount !== 0 && <div>$ {amount}</div>}
      <div className='month-name'>{months[month]}</div>
      <div className='bar'>
        <div className='bar__fill' style={{height: percent + 'px'}}></div>
      </div>
    </div>
  )
}

export default ChartBar