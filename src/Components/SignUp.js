import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from 'react-toastify';
import "./SignUp.css"
export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()


  function handleClick(){
    navigate('/Login')
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      toast('🦄 Account Created', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
       console.log("Sign up")

    } catch {
      setError("Failed to create an account")
      console.log(error)
    }

    setLoading(false)
  }
    return (
        <>
        <ToastContainer/>
        <div className="signupFrm">
        <div className="wrapper">
        {error && <h2>{error}</h2>}
        <form action="" className="form" onSubmit={handleSubmit} >
          <h1 className="title">Sign up</h1>
    
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
    
          <div className="inputContainer">
            <input type="text" className="input" ref={passwordConfirmRef} placeholder="a"/>
            <label htmlFor="" className="label">Confirm Password</label>
          </div>
    
          <input type="submit" className="submitBtn" value="Sign up"/>
          <br/>
          <div className="checking" >
        Already have an account?  <b onClick={handleClick}>Sign in</b>
      </div>
        </form>
        
        </div>
      
      </div>
      </>
    );
}