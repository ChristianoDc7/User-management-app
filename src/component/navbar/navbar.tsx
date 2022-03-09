import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <div>
         <nav>
            <div className="nav-wrapper blue lighten-2">
              <Link to="/" className="brand-logo">App</Link>
              <Link to="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
              <ul className="right hide-on-med-and-down">
                <li><Link to="/"><i className="material-icons-round tiny" >home</i>Home</Link></li>
                <li><Link to="count"><i className='material-icons-outlined tiny'>add_circle</i>Count</Link></li>
                <li><Link to="about"><i className="material-icons-outlined tiny" >info</i>About</Link></li>
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
