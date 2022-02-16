import React from 'react'
import '../scss/header.scss';
import logo from '../assets/logo2.jpg'

export default function header() {
  return (
    <div className="mainDiv">
        <div>    
            <img class="logo" src={logo} alt=""/>
        </div>
        <div>
            <h2>Name</h2>
        </div>
    </div>
  )
}

