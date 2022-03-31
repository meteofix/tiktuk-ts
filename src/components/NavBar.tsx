import React, {ReactNode} from 'react';
import { NavBarContainer, NavLeft, NavRight } from './NavBar.styled';

type NavBarProp = {
    children?: ReactNode,
    left?: ReactNode,
    right?: ReactNode
}

const NavBar = ({ children = '', left = '', right = '' }: NavBarProp) => (
    <NavBarContainer>
      <NavLeft>{left}</NavLeft>
      {children}
      <NavRight>{right}</NavRight>
    </NavBarContainer>
  );

export default NavBar;
