import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LeftNav from '../UI/icons/leftNav';
import { NavBarContainer, NavLeft, NavRight } from './NavBar.styled';
import Switcher from './Switcher';

const NavBar = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <NavBarContainer>
      <NavLeft onClick={() => navigate(-1)}>{location.pathname.slice(1) && <LeftNav />}</NavLeft>
      {children}
      <NavRight>
        <Switcher />
      </NavRight>
    </NavBarContainer>
  );
};

export default NavBar;
