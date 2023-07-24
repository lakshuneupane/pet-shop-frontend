import React, {useState} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';

import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

import './navbar.css'




const Menu = () => {
  
  return  (
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

const Navbar = () => {

  const [toggleMenu, setToggleMenu]= useState(false);

  return (
    <div className='navbar'>
        <div className='second-navbar'>
          <div className='logo'>Pet<span>Shop</span></div>
          <div className='links'>
            <Menu />
          </div>
          <div className='search-bar'>
            <input
              type='text'
              placeholder='Search...'
            />
            <div  className="search-icon" >
              <FontAwesomeIcon icon={faSearch} className='icon'/>
            </div>
          </div>
            <FontAwesomeIcon icon={faHeart} className='heart-icon'/>
          <div className='cart'>
            <FontAwesomeIcon icon={faCartShopping} className='shoopingcart' />
          </div>
        </div>
        <div className='navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#007FFF' size={27} onClick={ () => setToggleMenu(false)} />
          : <RiMenu3Line color='#007FFF' size={27} onClick={ () => setToggleMenu(true)} />
        }
        {toggleMenu &&(
          <div className='navbar__menu'>
            <div className='navbar-menu_container-links'>
              <Menu toggle = {toggleMenu}/>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar