import * as React from "react"
import SummaryStat from "../SummaryStat/SummaryStat"
import "./ActivityFeed.css"

export default function ActivityFeed( {totalCaloriesPerDay=[], avgCaloriesPerCategory=[]} ) {

  console.log(11, avgCaloriesPerCategory)
  console.log(22, totalCaloriesPerDay)
  return (
    <div className="activity-feed">

      <div className="per-category">
        <h4>Average Calories Per Category</h4>
        {avgCaloriesPerCategory.map((categoryStat, index) => {
          return <SummaryStat 
                    key={index}
                    stat={categoryStat.avgCaloriesPerCategory}
                    label={categoryStat.avgCaloriesPerCategory != 1 ? "calories" : "calorie"}
                    substat={categoryStat.category}
                    />
        })}
      </div>

      <div className="per-day">
        <h4>Total Calories Per Day</h4>
        {totalCaloriesPerDay.map((dayStat, index) => {
          return <SummaryStat 
                    key={index}
                    stat={dayStat.totalCaloriesPerDay}
                    label={dayStat.totalCaloriesPerDay != 1 ? "calories" : "calorie"}
                    substat={dayStat.date}
                    />
        })}
      </div>

    </div>
  )
}
