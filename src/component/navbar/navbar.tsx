import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button, Navbar, Row  } from 'react-materialize'
import './navbar.css'
import { AuthContext } from '../../services/Auth/Auth-Provider'

export default function Navs() {
  const {isAuthenticated ,setIsAuthenticated} = useContext(AuthContext)
 
  return (
      <Row className=''>
          <Navbar className="navbar-container grey darken-2 align-center" alignLinks={'right'} brand={<Link to="dashboard" className='brand-logo'><span className='material-icons resize'>badge</span></Link>} menuIcon={undefined} >  
              <NavLink to="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></NavLink>
              <NavLink to="/"><i className="material-icons-round tiny" >home</i>Home</NavLink>
              <NavLink to="count"><i className='material-icons-outlined tiny'>add_circle</i>Count</NavLink>
              <NavLink to="ogt"><i className="material-icons-outlined tiny" >assessment</i>OGT</NavLink>
              <NavLink to="users"><i className="material-icons-outlined tiny" >account_circle</i>Users</NavLink>
              <NavLink to="about"><i className="material-icons-outlined tiny" >info</i>About</NavLink>
              <Link to="login">{ !isAuthenticated ? (<Button className="btn-floating waves-effect green" small waves='light' tooltip='Login'><i className="material-icons">people</i></Button>) 
                    : (<Button className="btn-floating waves-effect red" small waves='light' onClick={()=>setIsAuthenticated(false)}  tooltip='Logout'><i className="material-icons">logout</i></Button>)}</Link>
          </Navbar>
      </Row>
  )
}
