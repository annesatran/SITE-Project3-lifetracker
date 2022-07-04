import * as React from "react"
import { useAuthContext } from "../../contexts/auth"
// import LoginPage from "../LoginPage/LoginPage"
import AccessForbidden from "../AccessForbidden/AccessForbidden"
import "./ProtectedRoute.css"

export default function ProtectedRoute( {element} ) {
  const { initialized, user } = useAuthContext()

  // if no user and application is not currently loading
  if (initialized && user?.email) {
  return (
    element
  )} else {
    return (
      <AccessForbidden />
        // <LoginPage message = {"Login to access this page first!"}/>
    )
  }
}