import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
export const Navbar = () => {


  return (

    <header>
      <div className="logo-wrapper">
          <h1>
            <img className="logo" src={logo} alt="logo" />
          </h1>
      </div>
      <nav>          
        <div className="nav-link">
            <Link to={'/'}>All movies</Link>
        </div>
      </nav>
    </header>
    
  )
}
