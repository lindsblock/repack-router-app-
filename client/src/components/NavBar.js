import React from 'react';
import { NavLink } from 'react-router-dom';
import { isAuthenticated, logout } from '../fakeAuth';

const styles = {
  active: {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: 'black',
  }
}

const NavBar = () => (
  <nav>
    <NavLink
      exact
      activeStyle={styles.active}
      to="/"
    >
      Home
    </NavLink>
    {' '}
    <NavLink
      to="/about"
      activeStyle={styles.active}
    >
      About
    </NavLink>
    { isAuthenticated() ?
        <NavLink
          activeStyle={styles.active}
          to="/dashboard"
        >
          Dashboard
        </NavLink>
        :
        <NavLink
          activeStyle={styles.active}
          to="/login"
        >
          Login
        </NavLink>
    }

  </nav>
)

export default NavBar;
