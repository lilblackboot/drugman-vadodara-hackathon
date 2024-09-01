import React from 'react'
import './nav.css'



const Nav = () => {
  console.log("nav")
  return (
    <div>
      <nav>
        <div className='logo'><span className='drug'>Drug</span>Man<span></span></div>
        <div className='middle'>
          <li>Orders</li>
          <li>Inventory</li>
          <li>Analytics</li>
        </div>
       <div className='last'> 
        <button className='button'>logout</button>
      </div>
      </nav>
    </div>
  )
}

export default Nav