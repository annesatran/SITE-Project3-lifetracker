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
    <Link className="logo-link" to="/">
      lifetracker
      {/* <img src="https://codepath-lifetracker.surge.sh/static/media/codepath.70a9a31f.svg" alt="CodePath Logo" /> */}
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
      <p>{user?.email ? user.email : null}</p>
      <Link to="/activity" className="nav-link">Activity</Link>
      <Link to="/nutrition" className="nav-link">Nutrition</Link>
      <span className="nav-link">Sleep</span>
      <span className="nav-link">Exercise</span>
      {user?.email
        ? <span className="logout-button nav-link" onClick={handleLogout}>Logout</span>
        :  <Link to="/login" className="nav-link">Login</Link>}
      {user?.email
        ? null
        : <Link to="/register" className="signup-button">Sign Up</Link>}
    </div>
  )
}