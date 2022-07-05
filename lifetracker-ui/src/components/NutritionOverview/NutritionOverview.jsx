import * as React from "react"
import { Link } from "react-router-dom"
import { useNutritionContext } from "../../contexts/nutrition"
import Loading from "../Loading/Loading"
import NutritionFeed from "../NutritionFeed/NutritionFeed"
import NutritionNew from "../NutritionNew/NutritionNew"
import "./NutritionOverview.css"

export default function NutritionOverview() {

  const { error, setError, isLoading, nutritions } = useNutritionContext()

  return (
    <div className="nutrition-overview">
      <Link to="/nutrition/create" element={<NutritionNew />} >
        Record Nutrition</Link>
      {error && <div className="error">{error}</div>}
      {isLoading
      ? <Loading />
      : <NutritionFeed nutritions={nutritions} />
      }
    </div>
  )
}