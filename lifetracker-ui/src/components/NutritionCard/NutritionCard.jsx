import * as React from "react"
import "./NutritionCard.css"

export default function NutritionCard( {nutrition={}} ) {
  // nutrition is an object has the properties
    // calories, category, created_at, id, image_url, name, quantity, user_id
  const isImage = nutrition.image_url.trim() !== ""
  return (
    <div className="nutrition-card">
      {isImage && <img src={nutrition.image_url} alt={nutrition.name} className="nutritionImage"/>}
      <h1>{nutrition.name}</h1>
      <p className="nutrition-calories">{nutrition.calories} calories</p>
      <p className="nutrition-quantity">Quantity: {nutrition.quantity}</p>
      <p className="nutrition-category">{nutrition.category}</p>
      <p className="nutrition-date">{nutrition.created_at}</p>

    </div>
  )
}