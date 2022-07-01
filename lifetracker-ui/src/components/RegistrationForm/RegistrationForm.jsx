import e from "cors"
import * as React from "react"
import { useNavigate, Link } from "react-router-dom"
import apiClient from "../../services/apiClient"
import "./RegistrationForm.css"

export default function RegistrationForm() {
  
  const navigate = useNavigate()
  const [errors, setErrors] = React.useState([])
  const [form, setForm] = React.useState({
    email: "",
    username: "",
    firstName: "",
    lastName: "",
    password: "",
    passwordConfirm: ""
  })

  const handleOnInputChange = (event) => {
    if (event.target.name === "password") {
      if (form.passwordConfirm && form.passwordConfirm !== event.target.value) {
        setErrors((e) => ({ ...e, passwordConfirm: "Passwords don't match" }))
      } else {
        setErrors((e) => ({ ...e, passwordConfirm: null }))
      }
    }
    if (event.target.name === "passwordConfirm") {
      if (form.password && form.password !== event.target.value) {
        setErrors((e) => ({ ...e, passwordConfirm: "Passwords don't match" }))
      } else {
        setErrors((e) => ({ ...e, passwordConfirm: null }))
      }
    }
    if (event.target.name === "email") {
      if (event.target.value.indexOf("@") === -1) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
      } else {
        setErrors((e) => ({ ...e, email: null }))
      }
    }

    setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
  }

  const signupUser = async () => {
    evt.preventDefault()
    setErrors((e) => ({ ...e, form: null }))

    if (form.password !== form.passwordConfirm) {
      setErrors((e) => ({ ...e, passwordConfirm: "Passwords don't match" }))
    } else {
      setErrors((e) => ({ ...e, passwordConfirm: null }))
    }

    const { data, error } = await apiClient.signup( {email: form.email,
                                                     username: form.username,
                                                     firstName: form.firstName,
                                                     lastName: form.lastName,
                                                     password: form.password,
                                                    })
    if (error) {
      setErrors((e) => ({...e, form: error }))
    }
    if (data?.user) {
      apiClient.setToken(data.token)
    }
  }
  
  return (
    <div className="registration-form">
      <div className="registration-card">
        <h2>Register</h2>
        
        {Boolean(errors.form) && <span className="error">{errors.form}</span>}
        
        <form className="form">

          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              className = "form-input"
              name = "email"
              type = "email"
              value = {form.email}
              onChange = {handleOnInputChange}
              placeholder = "Enter a valid email"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="input-field">
            <label htmlFor="username">Username</label>
            <input
              className = "form-input"
              name = "username"
              type = "text"
              value = {form.username}
              onChange = {handleOnInputChange}
              placeholder = "Your username"
            />
            {errors.username && <span className="error">{errors.usernamel}</span>}
          </div>

          <div className="input-field">
            <input
              className = "form-input"
              name = "firstName"
              type = "text"
              value = {form.firstName}
              onChange = {handleOnInputChange}
              placeholder = "First Name"
            />
            {errors.firstName && <span className="error">{errors.firstName}</span>}
          </div>

          <div className="input-field">
            <input
              className = "form-input"
              name = "lastName"
              type = "text"
              value = {form.lastName}
              onChange = {handleOnInputChange}
              placeholder = "Last Name"
            />
            {errors.lastName && <span className="error">{errors.lastName}</span>}
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              className = "form-input"
              name = "password"
              type = "password"
              value = {form.password}
              onChange = {handleOnInputChange}
              placeholder = "Enter a secure password"
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <div className="input-field">
            <label htmlFor="passwordConfirm">Confirm Password</label>
            <input
              className = "form-input"
              name = "passwordConfirm"
              type = "password"
              value = {form.passwordConfirm}
              onChange = {handleOnInputChange}
              placeholder = "Confirm your password"
            />
            {errors.passwordConfirm && <span className="error">{errors.passwordConfirm}</span>}
          </div>

        </form>

        <button className="submit-registration" onClick={signupUser}>Create Account</button>
        <div className="footer">
          <p>Don't have an account? Sign up <Link to="/register">here</Link></p>
        </div>
      </div>
    </div>
  )
}
