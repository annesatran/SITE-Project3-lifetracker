import * as React from "react"
import "./SummaryStat.css"

export default function SummaryStat( {stat, label, substat} ) {


  return (
    <div className="summary-stat">
      <div className="primary">
        <span className="primary-statistic">{stat}</span>
        <span className="stat-label"> {label}</span>
      </div>
      <span className="secondary-statistic">{substat}</span>
    </div>
  )
}
