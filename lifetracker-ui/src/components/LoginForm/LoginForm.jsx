import e from "cors"
import * as React from "react"
import { Link, useNavigate } from "react-router-dom"
import apiClient from "../../services/apiClient"
import "./LoginForm.css"

export default function LoginForm() {
  const navigate = useNavigate()
  const [errors, setErrors] = React.useState({})
  const [form, setForm] = React.useState( { email:"", password:"" } )

  const handleOnInputChange = (evt) => {
    // check if email is valid
    if (evt.target.name === "email") {
      if (evt.target.value.indexOf("@") === -1) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email" }))
      } else {
        setErrors((e) => ({ ...e, email: null }))
      }
    }
    setForm((f) => ({ ...f, [evt.target.name]: evt.target.value }))
  }

  const loginUser = async () => {
    setErrors((e) => ({ ...e, form: null }))

    const { data, error } = await apiClient.login( {email: form.email, password: form.password} )
    if (error) {
      setErrors((e) => ({...e, form: error }))
    }
    if (data?.user) {
      apiClient.setToken(data.token)
    }
  }



  return (
    <div className="login-form">

      <div className="login-card">
        <h2>Login</h2>

        {Boolean(errors.form) && <span className="error">{errors.form}</span>}

        <form className="form">
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="user@gmail.com"
              value={form.email}
              onChange={handleOnInputChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              className="form-input"
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleOnInputChange}
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <button className="submit-login" onClick={loginUser}>Login</button>
        </form>

        <div className="footer">
          <p>
            Don't have an account? Sign up <Link to="/register">here</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
