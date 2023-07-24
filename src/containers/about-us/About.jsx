import React from 'react'

import image from '../../assets/Group 1000001845.png'
import checkbox from '../../assets/Vector.png'


import './about.css'

const About = () => {
  return (
    <div className='about-us' id='about'>
      <div className='image'>
        <img src={image} alt='image'/>
      </div>
      <div className='content'>
        <h1>About Us</h1>
        <p>Pet House & Animal clinic was established with moto to provide qualitative and affordable animal healthcare service to your doorstep.</p>
        <p> <img src={checkbox}/>Comprehensive</p>
        <p> <img src={checkbox}/>Professional</p>
        <p> <img src={checkbox}/>Compassionate veterinary service.</p>
        <button>Contact</button>
      </div>
    </div>
  )
}

export default About