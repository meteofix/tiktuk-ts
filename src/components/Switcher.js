import React, { useContext } from 'react';
import { ThemeContext } from '../store/contexts/ThemeContext';
import { Input, Slider, SwitcherContainer } from './Switcher.styled';

const Switcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const switchTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  return (
    <SwitcherContainer>
      <Input type="checkbox" checked={theme === 'dark'} onClick={() => switchTheme()} />
      <Slider />
    </SwitcherContainer>
  );
};

export default Switcher;
