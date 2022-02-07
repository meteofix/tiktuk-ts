import React, { useContext } from 'react';
import { ThemeContext } from '../store/contexts/ThemeContext';
import { Input, Slider, SwitcherContainer } from './Switcher.styled';

const Switcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const switchTheme = () => {
    // eslint-disable-next-line no-unused-expressions
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  return (
    <SwitcherContainer>
      <Input type="checkbox" checked={theme === 'dark'} onChange={() => switchTheme()} />
      <Slider />
    </SwitcherContainer>
  );
};

export default Switcher;
