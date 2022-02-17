import React, { useMemo, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import styled, { ThemeProvider } from 'styled-components';
import AppRouter from './services/AppRouter';
import { MediaContext } from './store/contexts/MediaContext';
import { darkTheme, GlobalStyles, lightTheme } from './UI/theme';
import { ThemeContext } from './store/contexts/ThemeContext';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  const isDesktopOrTablet = useMediaQuery({ minWidth: 769 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [theme, setTheme] = useState('light');
  const MediaContextValue = useMemo(() => ({ isDesktopOrTablet, isMobile }), [isDesktopOrTablet, isMobile]);
  const ThemeContextValue = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <ThemeContext.Provider value={ThemeContextValue}>
        <MediaContext.Provider value={MediaContextValue}>
          <BrowserRouter>
            <GlobalStyles />
            <AppContainer>
              <AppRouter />
            </AppContainer>
          </BrowserRouter>
        </MediaContext.Provider>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default App;
