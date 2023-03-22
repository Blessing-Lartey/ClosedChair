import React from 'react'
import "../mycss.css"

function Navbar() {
  return (
    <div className=' p-5 flow-root'>
      <div className='closedchair font-bold float-left text-black'>ClosedChair</div>
      <div className='space-x-16 float-right text-white pr-40 mr-10'>
        <span>Home</span>
        <span>Reservations</span>
        <span>Add Your Restaurant</span>
        <span>Sign Up</span>
        <span>Sign In</span>

      </div>
    </div>
  )
}

export default Navbar
