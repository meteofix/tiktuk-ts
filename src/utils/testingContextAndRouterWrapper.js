import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MediaContext } from '../store/contexts/MediaContext';

const TestingContextAndRouterWrapper = ({ isDesktopOrTablet = false, isMobile = false, children }) => {
  return (
    <MediaContext.Provider value={{ isDesktopOrTablet, isMobile }}>
      <BrowserRouter>{children}</BrowserRouter>
    </MediaContext.Provider>
  );
};

export default TestingContextAndRouterWrapper;
