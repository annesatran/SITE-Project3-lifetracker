import * as React from "react"
import { useNavigate } from "react-router-dom"
import HeroIllustration from "/src/assets/hero-illus.svg"
import "./Landing.css"

export default function Landing() {
  const navigate = useNavigate()
  return (
    <div className="landing-page">
      <div className="hero">
        <img className="hero-img" src={HeroIllustration} alt="Flat design image of person riding a bike" />
        <div className="left-col">
          <h1 id="landing-message">Helping you<br></br> take back control <br></br> of your world</h1>
          <h2 id="cta">Detailed record-keeping and analytics to help you keep your life on-track.</h2>
          <button className="signup-button" onClick={()=>{navigate("/register")}}>Get Started</button>
        </div>
      </div>
    </div>
  )
}
