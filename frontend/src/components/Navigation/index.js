import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <ul className='navbar'>
      <li>
          <NavLink exact to="/"><img src='logo/SH-Logo-1.png' alt='SnackHunt Logo' className='logo'/></NavLink>
      </li>
      <li className='navbar-links'>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
