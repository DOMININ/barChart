import React from 'react'

import './BarChart.css'

const findMax = (data) => {
  let maxNumber = 0

  data.forEach((el) => {
    if (el.qty > maxNumber) {
      maxNumber = el.qty
    }
  })

  return maxNumber
}

const findPercent = (number, maxNumber) => {
  const coef = maxNumber / number
  const percent = (100 / coef).toFixed(0)

  return percent
}

const BarChart = ({ data }) => {
  const maxNumber = findMax(data)

  return (
    <div className="barchart">
      <ul className="barchart-list">
        {data.map((el, id) => (
          <li className="barchart-item" key={el.qty + id}>
            <div className="bar" style={{ height: `${findPercent(el.qty, maxNumber)}%` }}></div>
            <span>{el.qty}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BarChart
