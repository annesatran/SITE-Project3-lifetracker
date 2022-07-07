import * as React from "react"
import NutritionCard from "../NutritionCard/NutritionCard"
import "./NutritionFeed.css"

export default function NutritionFeed( {nutritions=[]} ) {
  // console.log("in NutritionFeed:", nutritions)
  // return (
  //   <div className="nutrition-feed">
  //     {nutritions.length == 0
  //     ? <p className="empty-message">Nothing here yet</p>
  //     : nutritions.map(nutritionItem => {
  //         return <NutritionCard
  //                   nutrition={nutritionItem}
  //                 /> }
  //         )
  //     }
  //   </div>
  // )
  return (
    <div className="nutrition-feed">
      {nutritions?.nutritions?.length === 0 ? <p className="empty-message">Nothing here yet</p> : <p>Retrieved nutritions</p> }
    </div>
  )
}