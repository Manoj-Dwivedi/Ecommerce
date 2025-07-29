import React from 'react'
import '../CSS/loginsignup.css'

function LoginSignup() {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h2>Sign Up</h2>
        <div className='loginsignup-fields'>
          <input type="text" placeholder='Your Name'/>
          <input type="email" name="" id=""  placeholder='Email Address'/>
          <input type="password" name="" id="" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsinup-login">
          Allready have an account ? <span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing , i agree to the terms of use & privacy policy.</p>
        </div>

      </div>
    </div>
  )
}

export default LoginSignup