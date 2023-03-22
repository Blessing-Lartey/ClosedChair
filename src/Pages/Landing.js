import React from 'react';
import Navbar from '../Components/Navbar';
import ladyeating from '../images/ladyeating.jpg'
import blackbg from '../images/blackbg.jpg'

function Landing() {
  return (
    <div className=''>
      <div className='static'>
        
        <div>
          <img className='blackbg' src={blackbg} alt="Blackbg" />
          <img className='ladyeating border-r-4 border-b-4' src={ladyeating} alt="LadyEating" />
        </div>
        <div className='fixed left-0 right-0'>
          <Navbar />
        </div>
      </div>
      <div className='bg-black'>
      <h1>hello</h1>
      </div>
    </div>
  )
}

export default Landing
