import React from 'react'
import '../scss/header.scss';
import logo from '../assets/logo2.jpg'
import account from '../assets/accLogo.jpg'

export default function header() {
  return (
    <div className="mainDiv">
        <div>    
            <img className="logo" src={logo} alt=""/>
        </div>
        <div className='accountDiv'>
            <img className="account" src={account} alt=""/>
            <h2 className='accountName'>Name</h2>
        </div>
    </div>
  )
}

