import * as React from "react"
import { Link } from "react-router-dom"
import AccessForbiddenLandingIllustration from "/src/assets/access-forbidden-landing.svg"
import "./AccessForbidden.css"

export default function AccessForbidden() {
  return (
    <div className="access-forbidden">
      <img className="af-image" src={AccessForbiddenLandingIllustration} alt="" />
      <h1>Access Forbidden</h1>
      <p className="access-forbidden-message">
        It doesn't have to be that way, though! <br></br>
        <Link to="/register" className="inline-link">Create an account</Link> or <Link to="/login" className="inline-link">log in</Link> to access this feature and get started.
      </p>
    </div>
  )
}