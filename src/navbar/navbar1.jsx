import React from 'react'
import logo from '../assets/PNG/sounga_tech.png'
import { Link } from 'react-router-dom'

export default function Navbar1() {
  return (
        <div className="menu1" >
            <div className="logox">
              <a href={logo}><img src={logo} alt=""  className="logo1"/></a>
            </div>
            <nav>
                    <Link to="/" className="btnx ">Accueil</Link>
                    <Link to="/apropos" className="btnx a">A propos</Link>
                    <Link to="/portfolio" className="btnx ">Portfolio</Link>
                    <Link to="/contact" className="btnx ">Contact</Link>
            </nav>
        </div>
  )
}
