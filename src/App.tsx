import React, { useMemo, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { ThemeProvider } from 'styled-components';
import AppRouter from './services/AppRouter';
import { IMediaContext, MediaContext } from './store/contexts/MediaContext';
import { darkTheme, GlobalStyles, lightTheme } from './UI/theme';
import { IThemeContext, ThemeContext } from './store/contexts/ThemeContext';
import { AppContainer } from './App.styled';

const App = () => {
  const isDesktopOrTablet = useMediaQuery({ minWidth: 769 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [theme, setTheme] = useState('light');
  const MediaContextValue: IMediaContext = useMemo(
    () => ({ isDesktopOrTablet, isMobile }),
    [isDesktopOrTablet, isMobile]
  );
  const ThemeContextValue: IThemeContext = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
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
