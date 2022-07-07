import * as React from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuthContext } from "../../contexts/auth"
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <NavLinks />
    </nav>
  )
}

export function Logo() {
  return (
    <div className="logo">
    <Link to="/">
      <img src="https://codepath-lifetracker.surge.sh/static/media/codepath.70a9a31f.svg" alt="CodePath Logo" />
    </Link>
  </div>
  )
}

export function NavLinks() {
  const { user, isAuthed, logoutUser } = useAuthContext()
  const navigate = useNavigate()

  const handleLogout = () => {
    logoutUser()
    navigate("/")
  } 

  return (
    <div className="nav-links">
      <p>{user?.email ? user.email : "noone logged in"}</p>
      <Link to="/activity">Activity</Link>
      <Link to="/nutrition">Nutrition</Link>
      <span>Sleep</span>
      <span>Exercise</span>
      {user?.email
        ? <span className="logout-button" onClick={handleLogout}>Logout</span>
        :  <Link to="/login">Login</Link>}
      {user?.email
        ? null
        : <Link to="/register">Sign Up</Link>}
    </div>
  )
}