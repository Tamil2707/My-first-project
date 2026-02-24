import React from 'react'
import { useLocation } from 'react-router-dom'

function Dashboard({}) {

    const location=useLocation()
    const user=location.state

  return (
    <div className='D-box'>
      <div className='container D-container'>
            <i class="fa-solid fa-user"></i> 
        <div className='D-profile'>
            <i class="fa-solid fa-user"></i> 

            <p>I'm {user}</p> 
        </div>
      </div>
    </div>
  )
}

export default Dashboard
