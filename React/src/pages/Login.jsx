import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <body>
      <div className="containerr">
      <div className="login">
        <div className="log">
          <form action="">
            <div className="lo">
              Login
            </div>
            <div className="email">
            <label htmlFor="Email">Email:</label>
            <div className="ent">
            <input type="text" placeholder='Enter email' className='entt' />
            </div>
            <div className="pass">
              <label htmlFor="Password">Password:</label>
            </div>
            <div className="pas">
              <input type="password" placeholder='Enter password' className='pa'/>
            </div>
            <div className="check">
              <input type="checkbox" /> 
              <div className="show">
                Show Password
              </div>
            </div>
            <div className="signin">
              <input type="submit" value={"SIGN IN"} className='signi' />
            </div>
            <div className="forgot">
              Forgot <a href="">Username / Password</a>?
            </div>
            <div className="acc">
              Don't have an account? <a href="">Sign up</a>
            </div>
            </div>
          </form>
        </div>
      </div>
      </div>
    </body>
  )
}

export default Login