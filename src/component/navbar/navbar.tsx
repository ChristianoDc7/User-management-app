import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Navbar, Row  } from 'react-materialize'
import './navbar.css'

export default function Navs() {
 
  return (
    <div>
      <Row className=''>
          <Navbar className="navbar-container grey darken-2 align-center" alignLinks={'right'} menuIcon={undefined} >  
              <NavLink to="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></NavLink>
              <NavLink to="/"><i className="material-icons-round tiny" >home</i>Home</NavLink>
              <NavLink to="count"><i className='material-icons-outlined tiny'>add_circle</i>Count</NavLink>
              <NavLink to="ogt"><i className="material-icons-outlined tiny" >assessment</i>OGT</NavLink>
              <NavLink to="users"><i className="material-icons-outlined tiny" >account_circle</i>Users</NavLink>
              <NavLink to="about"><i className="material-icons-outlined tiny" >info</i>About</NavLink>
          </Navbar> 
      </Row>
            <ul className="sidenav darken-2" id="mobile-demo">
                <li><Link to="/"><i className="material-icons-round tiny" >home</i>Home</Link></li>
                <li><Link to="count"><i className='material-icons-outlined tiny'>add_circle</i>Count</Link></li>
                <li><Link to="ogt"><i className="material-icons-outlined tiny" >assessment</i>OGT</Link></li>
                <li><Link to="users"><i className="material-icons-outlined tiny" >account_circle</i>Users</Link></li>
                <li><Link to="about"><i className="material-icons-outlined tiny" >info</i>About</Link></li>
            </ul>
    </div>
  )
}
