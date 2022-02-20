//React
import React from 'react'
//scss
import '../scss/header.scss';
//Pictures
import logo from '../assets/logo2.jpg'
import account from '../assets/accLogo.jpg'
//import hamburger from '../assets/hamburger.png'

export default function header() {
  return (
    <div className="mainDiv">
      <div>
        <img className="logo" src={logo} alt="" />
      </div>
      <div className='accountDiv'>
        <img className="account" src={account} alt="" />
        <h2 className='accountName'>Name</h2>
      </div>
    </div>
  )
}

