import * as React from "react"
import { Link } from "react-router-dom"
import "./NutritionCard.css"

export default function NutritionCard(  {nutritionId, imageUrl="", name, calories, quantity, category, createdAt } ) {
  // nutrition is an object has the properties
    // calories, category, created_at, id, image_url, name, quantity, user_id
  const isImage = imageUrl.trim() !== ""
  return (
    <div className="nutrition-card">
      {isImage && <img src={imageUrl} alt={name} className="nutritionImage"/>}
      <Link to={"/nutrition/id/" + nutritionId}>
        <h1>{name}</h1>
      </Link>
      <p className="nutrition-calories">{calories} calories</p>
      <p className="nutrition-quantity">Quantity: {quantity}</p>
      <p className="nutrition-category">{category}</p>
      <p className="nutrition-date">{createdAt}</p>

    </div>
  )
}