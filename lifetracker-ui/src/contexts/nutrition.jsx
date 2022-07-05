import * as React from "react"
import ApiClient from "../services/apiClient"
import { useAuthContext } from "./auth"

const NutritionContext = React.createContext()

export function NutritionContextProvider( {children} ) {

    // what data type should nutritions be!!
    const [nutritions, setNutritions] = React.useState([])
    const [initialized, setInitialized] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    const { user } = useAuthContext()

    React.useEffect(() => {
        const fetchNutrition = async () => {
            const { data, error } = await ApiClient.fetchNutritionForUser()
            console.log("nutritions data in nutrition context:", data)
            if (data) {
              setNutritions(data)
              setError(null)
            }
            if (error) setError(error)
        }

        // if there is a user logged in
        if (user?.email) {
            fetchNutrition()
        }
        setIsLoading(false)
        setInitialized(true)
        }, [user, error])

    // nutritionForm will include name, calories, imageUrl, category, quantity
    const addNutrition = async (nutritionForm) => {
        const { data, error } = await ApiClient.createNutrition({...nutritionForm, user_id: user?.id || null })
        if (error) setError(error)
    }
    
    return (
    <NutritionContext.Provider value={ {
                                    nutritions, setNutritions,
                                    initialized, setInitialized,
                                    isLoading, setIsLoading,
                                    error, setError,
                                    addNutrition
                                   } } >
        {children}
    </NutritionContext.Provider>
    )
}

export const useNutritionContext = () => {
    return React.useContext(NutritionContext)
}
