import * as React from "react"
import { useActivityContext } from "../../contexts/activity"
import Loading from "components/Loading/Loading"
import ActivityFeed from "components/ActivityFeed/ActivityFeed"
import "./ActivityPage.css"

export default function ActivityPage() {

  const { activity, isProcessing } = useActivityContext()

  return (
    <div className="activity-page">
      {isProcessing
      ? <Loading /> 
      : <ActivityFeed 
          totalCaloriesPerDay={activity?.nutrition?.calories?.perDay}
          avgCaloriesPerCategory={activity?.nutrition?.calories?.perCategory} />
      }
    </div>
  )
}
