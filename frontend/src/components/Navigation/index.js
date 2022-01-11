import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';

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
        <SignupFormModal />
      </>
    );
  }

  return (
    <ul className='navbar'>
      <li>
          <NavLink exact to="/"><img src='logo/SH-Logo-1.png' alt='SnackHunt Logo' className='logo'/></NavLink>
      </li>
      <div className='navbar-links'>
      <li>
          <NavLink to="/new" className='navbar-links'>Add a Snack</NavLink>
      </li>
      <li>
        <NavLink to="/" className='navbar-links'>Explore</NavLink>
      </li>
      </div>
      <li className='navbar-links'>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
