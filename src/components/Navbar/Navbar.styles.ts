import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  background-color: transparent;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;


export const Brand = styled.h1`
  color: #e50914;
  margin: 0;
`;

export const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

export const NavItem = styled.li`
  margin-left: 15px;
  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 0.8rem;
    &:hover {
      color: lightgray;
    }
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  &:hover {
    color: lightgray;
  }
`;
