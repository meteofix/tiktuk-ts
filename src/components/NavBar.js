import React from 'react';
import { NavBarContainer, NavLeft, NavRight } from './NavBar.styled';

const NavBar = ({ children, left = '', right = '' }) => {
  return (
    <NavBarContainer>
      <NavLeft>{left}</NavLeft>
      {children}
      <NavRight>{right}</NavRight>
    </NavBarContainer>
  );
};

export default NavBar;
