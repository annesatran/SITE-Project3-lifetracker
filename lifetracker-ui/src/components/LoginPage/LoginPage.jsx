import * as React from "react"
import { useNavigate } from "react-router-dom"
import LoginForm from "../LoginForm/LoginForm"
import "./LoginPage.css"

export default function LoginPage() {
  
  // edit this once tokens are figured out
  const isLoggedIn = false
  const navigate = useNavigate();

  return (
    <div className="login-page">
      {isLoggedIn
      ? React.useEffect(() => {
          navigate("/activity"), []
        })
      : <LoginForm />
      }
    </div>
  )
}
