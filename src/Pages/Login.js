//React
import React from 'react';
//scss
import '../scss/login.scss';
//Image
import logoImg from '../assets/Logo.jpg'

function Login() {
  return (
    <div className="parent">
      <div className="mainContainer">
        <img src={logoImg} alt="" className="logoImg" />
        <div className="formDiv">
          <form>
          <h1>Log In</h1>
          <label>Email address</label><br />
          <input className="loginInput"></input><br />
          <label>Password</label><br />
          <input className="loginInput"></input><br />
          <button type="submit" className="loginBtn">LOG IN</button><br />
          </form>
        </div>
      </div>
      <div className="sideContainer">
      </div>
    </div>
  )
}

export default Login;