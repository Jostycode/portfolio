import React from 'react'
import logo from '../assets/PNG/sounga_tech.png'
import Page2 from '../pages/page2'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
        <div className="menu" >
            <div className="logo">
              <a href={logo}><img src={logo} alt=""  className="logo1"/></a>
            </div>
            <nav>
                    <Link to="/" className="btn a">Accueil</Link>
                    <Link to="/apropos" className="btn ">A propos</Link>
                    <Link to="/portfolio" className="btn ">Portfolio</Link>
                    <Link to="/contact" className="btn ">Contact</Link>
            </nav>
        </div>
  )
}
