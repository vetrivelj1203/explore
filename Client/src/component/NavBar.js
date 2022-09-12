import React from 'react'
import "./css/NavBar.css"
import Logo from "../Images/Explore.jpg"
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='NavBarConatiner'>
        <img  className='Logo' src={Logo}/>
        <Link to="/login" ><button className='Btn-signin'>SIGN IN</button></Link>
        
    </div>
  )
}

export default NavBar