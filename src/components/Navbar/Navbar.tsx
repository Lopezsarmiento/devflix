import React from 'react';
import { Brand, Nav, NavItem, NavList, NavLink } from './Navbar.styles';

const Navbar: React.FC = () => {
  return (
    <Nav>
      <Brand>
        DevFlix
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