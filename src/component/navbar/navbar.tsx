import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <div>
         <nav>
            <div className="nav-wrapper blue lighten-2">
              <a href="#" className="brand-logo">Management-App</a>
              <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              <ul className="right hide-on-med-and-down">
                <li><Link to="/">Home</Link></li>
                <li><Link to="count">count</Link></li>
                <li><Link to="about">About</Link></li>
              </ul>
            </div>
          </nav>

          <ul className="sidenav blue lighten-2" id="mobile-demo">
                <li><Link to="/">Home</Link></li>
                <li><Link to="count">count</Link></li>
                <li><Link to="about">About</Link></li>
          </ul>
    </div>
  )
}
