import React from 'react'
import {Link} from "react-router-dom"

const SignUp = () => {
    return (
    <div className="container">
      <div className="left">
      </div>
      <div className="right">
          <h2>
            Sign Up
          </h2> 
          <input type="text" className="field" placeholder="First name"></input>
          <input type="text" className="field" placeholder="Last name"></input>
          <input type="text" className="field" placeholder="Email"></input>
          <input type="password" className="field" placeholder="Password"></input>
          <button type="submit" className="field submit-button">Sign Up</button>
          <p>Already have an account? <Link to="/login" className="sign-in">Sign in</Link></p>
      </div>
    </div>
    )
}

export default SignUp
