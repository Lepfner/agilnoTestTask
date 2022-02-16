import React from 'react';
import '../scss/login.scss';
import logoImg from '../assets/Logo.jpg'

function Login() {
  return (
    <div className="parent">
        <div className="mainContainer">
            <img src={logoImg} alt="" className="logoImg"/>
            <div className="formDiv">
                <h1>Log In</h1>
                <label>Email address</label><br/>
                <input className="loginInput"></input><br/>
                <label>Password</label><br/>
                <input className="loginInput"></input><br/>
                <button className="loginBtn">LOG IN</button><br/>
            </div>
        </div>
        <div className="sideContainer">

        </div>
    </div>
  )
}

export default Login;