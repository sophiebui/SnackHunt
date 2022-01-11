import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import * as sessionActions from '../../store/session';

function AboutLink() {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  // const logout = (e) => {
  //   e.preventDefault();
  //   dispatch(sessionActions.logout());
  // };

  return (
    <>
      <button className='about-button' onClick={openMenu}>About</button>
      {showMenu && (
        <ul className='about-dropdown'>
          <li>
          <a href='https://github.com/sophiebui/SnackHunt' target='_blank' className='navbar-links'>GitHub</a>
          </li>
          <li>
          <a href='https://github.com/sophiebui/SnackHunt/wiki' target='_blank' className='navbar-links'>GitHub Wiki</a>
          </li>
        </ul>
      )}
    </>
  );
}

export default AboutLink;
