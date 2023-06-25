import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import "./SignUp.css"
export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  function handleClick(){
    navigate("/SignUp")
  }

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      console.log("login")
      navigate("/Search")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }
  return (
    <div className="signupFrm">
    <div className="wrapper">
        {error && <h2>{error}</h2>}
    <form action="" className="form" onSubmit={handleSubmit} >
      <h1 className="title">Sign in</h1>

      <div className="inputContainer">
        <input type="text" className="input" ref={emailRef} placeholder="a"/>
        <label htmlFor="" className="label">Email</label>
      </div>

      {/* <div className="inputContainer">
        <input type="text" className="input" placeholder="a"/>
        <label htmlFor="" className="label">Username</label>
      </div> */}

      <div className="inputContainer">
        <input type="text" className="input" ref={passwordRef}placeholder="a"/>
        <label htmlFor="" className="label">Password</label>
      </div>

      {/* <div className="inputContainer">
        <input type="text" className="input" ref={passwordConfirmRef} placeholder="a"/>
        <label htmlFor="" className="label">Confirm Password</label>
      </div> */}

      <input type="submit" className="submitBtn" value="Sign in"/>
      <div className="checking"  >
        Sign up for <b onClick={handleClick}>Recruitement Solution </b>
      </div>
    </form>

    </div>
  </div>
);
}