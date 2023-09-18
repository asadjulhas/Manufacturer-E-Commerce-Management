import React from 'react';
import './Header.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebaseinit';
import { signOut } from 'firebase/auth';

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const logOut = () => {
    signOut(auth);
    localStorage.removeItem('accessToken')
  }
  return (
    <Navbar className='menu_area' expand="lg">
  <Container>
    <Link to='/' className='navbar-brand'>Borak</Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto">
       <Link className='nav-link' to='/'>Home</Link>
        <Link className='nav-link' to='/my-portfolio'>My Portfolio</Link>
        {/* <Link className='nav-link' to='/blog'>Blog</Link> */}
        { user?.uid ? '' : <Link className='nav-link' to='/login'>Login</Link>}
        { user?.uid ? '' : <Link className='nav-link' to='/register'>Register</Link>}
        { user?.uid ? <Link className='nav-link' to='/dashboard'>Dashboard</Link> : ''}


        { user?.uid ? <NavDropdown title={user?.displayName || user?.email} id="basic-nav-dropdown">
         {user?.photoURL ? <img className='user_avatar' src={user?.photoURL} title={user?.displayName} alt={user?.displayName} /> : ''}
          <span> {user?.email} </span>
          <NavDropdown.Divider />
          <Link className='nav-link dp_menu' onClick={logOut}  to=''>Logout</Link>
        </NavDropdown> : '' }
       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
};

export default Header;