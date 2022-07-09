import * as React from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuthContext } from "../../contexts/auth"
import "./LoginForm.css"

export default function LoginForm() {
  const navigate = useNavigate()
  const [errors, setErrors] = React.useState({})
  const [form, setForm] = React.useState( { email:"", password:"" } )

  const {user, error, setError, loginUser, isAuthed, setIsAuthed} = useAuthContext()

  React.useEffect(() => {
    if (user?.email) {
      navigate("/")
    }
  }, [user, navigate])

  const handleOnInputChange = (evt) => {
    // check if email is valid
    setError(null)
    if (evt.target.name === "email") {
      if (evt.target.value.indexOf("@") === -1) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email" }))
      } else {
        setErrors((e) => ({ ...e, email: null }))
      }
    }
    setForm((f) => ({ ...f, [evt.target.name]: evt.target.value }))
  }

  const handleOnFormSubmit = async (event) => {
    event.preventDefault();
    setErrors((e) => ({ ...e, form: null }))

    await loginUser(form)
    if (user?.email) navigate("/activity")
    }

  return (
    <div className="login-form">

      <div className="login-card">
        <h2>Login</h2>

        {/* {error && <span className="error main-error">{error}</span>} */}

        <form className="form">
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              className="form-input"
              name="email"
              type="email"
              value={form.email}
              onChange={handleOnInputChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              className="form-input"
              name="password"
              type="password"
              value={form.password}
              onChange={handleOnInputChange}
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <button className="submit-login main-button" onClick={handleOnFormSubmit}>Login</button>
        </form>

        <div className="footer">
          <p>Don't have an account? Sign up <Link to="/register" className="inline-link">here</Link></p>
        </div>

      </div>
    </div>
  )
}
