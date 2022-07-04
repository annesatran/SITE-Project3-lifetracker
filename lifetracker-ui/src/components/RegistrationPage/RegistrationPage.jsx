import * as React from "react"
import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../../contexts/auth"
import RegistrationForm from "../RegistrationForm/RegistrationForm"
import "./RegistrationPage.css"

export default function LoginPage() {
  
  const {user} = useAuthContext()
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user?.email) navigate("/activity")
    , []})

  return (
    <RegistrationForm />
  )
}