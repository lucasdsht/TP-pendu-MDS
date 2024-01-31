import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  return (
    <nav className='Navigation'>
      <ul className='customUl'>
        <li>
          <Link to="/home" >Accueil</Link>
        </li>
        <li>
          <Link to="/play">Jouer</Link>
        </li>
        <li>
          <Link to="/stats">Stats</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;