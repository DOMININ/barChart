import React from 'react'

import './BarChart.css'

const findPercent = (number, maxNumber) => {
  return (100 * number) / maxNumber
}

const BarChart = ({ numbers }) => {
  const maxNumber = Math.max(...numbers, 0)

  return (
    <div className="barchart">
      <ul className="barchart-list">
        {numbers.map((number, id) => (
          <li className="barchart-item" key={id}>
            <div className="bar" style={{ height: `${findPercent(number, maxNumber)}%` }}></div>
            <span>{number}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BarChart
