import React from 'react'
import './nav.css'



const Nav = () => {
  console.log("nav")
  return (
    <div>
      <div className='main'>
      <nav>
        <div className='logo'><span className='drug'>Drug</span>Man<span></span></div>
        <div className='middle'>
          <li>Home</li>
          <li>Contact us</li>
          <li>About us</li>
        </div>
       <div className='last'> 
        <button className='button'>logout</button>
      </div>
      </nav>
      </div>
    </div>
  )
}

export default Nav