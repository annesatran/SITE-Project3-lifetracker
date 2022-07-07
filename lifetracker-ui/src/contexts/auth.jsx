import * as React from "react"
import ApiClient from "../services/apiClient"

const AuthContext = React.createContext()

export function AuthContextProvider( {children} ) {
    const [user, setUser] = React.useState({})
    const [initialized, setInitialized] = React.useState(false)
    const [isProcessing, setIsProcessing] = React.useState(false)
    const [error, setError] = React.useState(null)

    const [isAuthed, setIsAuthed] = React.useState(false)

    React.useEffect(() => {
        const fetchUser = async () => {
          const { data, error } = await ApiClient.fetchUserFromToken()
          if (data) {
            setUser(data.user)
            setError(null)
          }
          if (error) setError(error)
        }

        const token = localStorage.getItem("lifetracker_token")
        if (token) {
            ApiClient.setToken(token)
            setIsProcessing(true)
            setError(null)
            fetchUser()
        }
        setIsProcessing(false)
        setInitialized(true)
        }, [isAuthed])

    const loginUser = async (credentials) => {
        const { data, error } = await ApiClient.login(credentials)
        console.log(data, error)
        if (error) setError(error)
        if (data?.user) {
            ApiClient.setToken(data.token)
            setIsAuthed(true)
        }
    }

    const signupUser = async (credentials) => {
        const { data, error } = await ApiClient.signup(credentials)
        if (error) setError(error)
        if (data?.user) {
            ApiClient.setToken(data.token)
            setIsAuthed(true)
        }
    }
    const fetchUserFromToken = async () => {
        const { data, error } = await ApiClient.fetchUserFromToken()
        if (error) setError(error)
        if (data?.user) {
            ApiClient.setToken(data.token)
            setIsAuthed(true)
        }
    }

    const logoutUser = async () => {
        setIsAuthed(false)
        setUser({})
        setError(null)
        await ApiClient.logout()
    }

    return (
    <AuthContext.Provider value={ { user, setUser,
                                    initialized, setInitialized,
                                    isProcessing, setIsProcessing,
                                    error, setError,
                                    loginUser,
                                    signupUser,
                                    logoutUser,
                                    isAuthed, setIsAuthed
                                   } } >
        {children}
    </AuthContext.Provider>
    )
}

// create an export a useAuthContext hook that calls the React.useContext hook with the newly created
//    AuthContext and returns it
export const useAuthContext = () => {
    return React.useContext(AuthContext)
}

// module.exports = {
//     AuthContextProvider,
//     useAuthContext
// }
