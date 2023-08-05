import "./navbar.css"

import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBed } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (

    <nav className="navbar">
          <div className="container flex_space">
          <li className="Logo">
                <Link to='/'>
                <FontAwesomeIcon icon={faBed} />
                  Hôtel<span>Xpress</span>
                </Link>
            </li>
            <div className="menu_icon" onClick={handleClick}>
              <i className= {click? "fas fa-times":"fas fa-bars"}></i>
              <i class="fa-solid fa-bars"></i>
            </div>
          <ul id="nav-menu" className={click? "nav-menu active" : "nav-menu"}>
            <li><Link to="/" onClick={closeMobileMenu}>Reception</Link></li>
            <li ><Link to="/reservation">Reservations</Link></li>
            <li><Link to="/chambre" onClick={closeMobileMenu}>Rooms</Link></li>
            <li id="List"><Link to="/hotels" onClick={closeMobileMenu}>Hotels
            <ul className="sousList">
              <li><Link to="/promotions" onClick={closeMobileMenu}>Promotions</Link></li>
              <li><Link to="/commentaires" onClick={closeMobileMenu}>Commentaires</Link></li>
              <li><Link to="/partenariats" onClick={closeMobileMenu}>Partenariats</Link></li>
              <li><Link to="/signets" onClick={closeMobileMenu}>Signets</Link></li>
              <li><Link to="/medias" onClick={closeMobileMenu}>Médias</Link></li>
              </ul>
             </Link></li>
          </ul>
          <div className="login-area flex">
              <li>
                  <Link to='/signin'>
                  <button className="primary-btn ">Login</button>
                </Link>
              </li>
            </div>
      </div>
    </nav>
  )
}

export default Navbar