import * as React from "react"
import { useNavigate } from "react-router-dom"
import RegistrationForm from "../RegistrationForm/RegistrationForm"
import "./RegistrationPage.css"

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
      : <RegistrationForm />
      }
    </div>
  )
}