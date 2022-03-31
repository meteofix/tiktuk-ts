import React, {ChangeEventHandler, useContext} from 'react';
import { ThemeContext } from '../store/contexts/ThemeContext';
import { Input, Slider, SwitcherContainer } from './Switcher.styled';

const Switcher:React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleSwitchTheme:ChangeEventHandler<HTMLInputElement> = ():void => {
    // eslint-disable-next-line no-unused-expressions
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <SwitcherContainer>
      <Input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={handleSwitchTheme}
      />
      <Slider />
    </SwitcherContainer>
  );
};

export default Switcher;
