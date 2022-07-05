import * as React from "react"
import "./NutritionCard.css"

export default function NutritionCard( {nutrition={}} ) {
  // nutritionitem = {
  //   imageUrl:"",
  //   name:"required",
  //   calories:1,
  //   category:"required",
  //   createdAt:"required"
  // }
  return (
    <div className="nutrition-card">

      <h1>{nutrition.name}</h1>
      {nutrition.imageUrl && <img src={nutrition.imageUrl} alt={nutrition.name} className="nutritionImage"/>}
      <p className="nutrition-calories">{nutrition.calories} calories</p>
      <p className="nutrition-category">{nutrition.category}</p>
      <p className="nutrition-date">{nutrition.createdAt}</p>

    </div>
  )
}