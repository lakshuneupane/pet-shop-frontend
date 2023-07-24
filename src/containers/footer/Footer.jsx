import React from 'react'

import { gallery1, gallery2, gallery3, gallery4 } from './import'


import './footer.css'

const Menu = () =>{
  return (
    <>
      <p><a href='#home'>Home</a></p>
      <p><a href='#about'>About</a></p>
      <p><a href='#services'>Services</a></p>
      <p><a href='#collection'>Breeds</a></p>
      <p><a href='/Shop'>Shop</a></p>
      <p><a href='/Gallery'>Gallery</a></p>
    </>
  )
}

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-content'>
        <div className='footer-logo'>
          <h1>Pet<span>Shop</span></h1>
          <p>Phone Number:<br />+977-9861859764</p>
          <p>Location: <br />Tahachal-Kathmandu</p>
        </div>
        <div className='text'>
          <p>"City Pet House & Animal Clinic: Quality and affordable <br /> animal care at your doorstep. Comprehensive, professional, <br /> and compassionate veterinary services by our dedicated <br />and experienced team."</p>
        </div>
        <div className='menu'>
          <Menu/>
        </div>
        <div className='gallery'>
          <h1>Gallery</h1>
          <div className='gallery-photos'>
              <img src={gallery1}alt="" />
              <img src={gallery2}alt="" />
              <img src={gallery3}alt="" />
              <img src={gallery4}alt="" />
          </div>
        </div>
      </div>
      <div className='line'></div>
      <div className='copyright'>
        <div className='copyright-text'>
          <p>Copyright © 2023 City Pet House & Animal Clinic | All Rights Reserved</p>
        </div>
        <div className='socialmedia-logo'>
        </div>
      </div>
    </div>
  )
}

export default Footer