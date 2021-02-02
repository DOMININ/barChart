import React from 'react'

import './BarChart.css'

const findMaxNumberInObj = (data) => {
  return Math.max(...data.map((obj) => obj.qty), 0)
}

const findPercent = (number, maxNumber) => {
  return (100 * number) / maxNumber
}

const BarChart = ({ data }) => {
  const maxObjNumber = findMaxNumberInObj(data)

  return (
    <div className="barchart">
      <ul className="barchart-list">
        {data.map((el, id) => (
          <li className="barchart-item" key={el.qty + id}>
            <div className="bar" style={{ height: `${findPercent(el.qty, maxObjNumber)}%` }}></div>
            <span>{el.qty}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BarChart
