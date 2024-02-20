import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='Navigation'>
      <ul className='customUl'>
        <li>
          <Link to="/" >Accueil</Link>
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
