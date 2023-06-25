import React from 'react'
import "./Home.css"
import spo from './spo.png'

const Home = () => {
  return (
    <body>
    <div className="container">
      <div className="navi">
        <div className="spotify">
          <img src={spo} width={120} height={35} alt="" />
        </div>
        <div className="premium">
          Premium
        </div>
        <div className="help">
          Help
        </div>
        <div className="download">
          Download
        </div>
        <div className="slash">
          |
        </div>
        <div className="loginn">
          Log in
        </div>
        <div className="signupp">
          Sign up
        </div>
      </div>
      <div className="text">
          <div className="music">
            Music for everyone.
          </div>
          <div className="million">
            Millions of songs. No credit card needed.
          </div>
          <div className="get">
            <input type={"submit"} value={"GET SPOTIFY FREE"} className='inp' />
          </div>
        </div>
    </div>
  </body>
  )
}

export default Home