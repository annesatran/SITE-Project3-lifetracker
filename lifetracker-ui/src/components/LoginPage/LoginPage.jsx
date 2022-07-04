import * as React from "react"
import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../../contexts/auth"
import LoginForm from "../LoginForm/LoginForm"
import "./LoginPage.css"

export default function LoginPage( {message=""} ) {

  const [redirect, setRedirect] = React.useState(false)

  const navigate = useNavigate();
  const {user} = useAuthContext()

  React.useEffect(() => {
    if (user?.email) navigate("/activity")
    , []})

  return (
    <LoginForm />
  )
}
