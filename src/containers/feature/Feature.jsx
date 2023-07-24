import React from 'react'

import feature from '../../assets/feature.png'

import './feature.css'

const Feature = () => {
  return (
    <div className='feature'>
      <div className='feature-content'>
        <p>One More Friend Thousands More Fun!</p>
        <h1>"Find your furry soulmate at Our Pet Shop."</h1>
        <button>Get Now</button>
      </div>
      <div className='feature-image'>
        <img src={feature} alt="feature" />
      </div>

    </div>
  )
}

export default Feature