import React from 'react';
import { Brand, Nav, NavItem, NavList, NavLink } from './Navbar.styles';

const Navbar = () => {
  return (
    <Nav>
      <Brand>
        DEVFLIX
      </Brand>
      <NavList>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/movies">Movies</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/series">Series</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
}

export default Navbar;