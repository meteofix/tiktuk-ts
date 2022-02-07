import React, { useMemo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MediaContext } from '../store/contexts/MediaContext';

const TestingContextAndRouterWrapper = ({ isDesktopOrTablet = false, isMobile = false, children }) => {
  const MediaContextValue = useMemo(() => ({ isDesktopOrTablet, isMobile }), [isDesktopOrTablet, isMobile]);

  return (
    <MediaContext.Provider value={MediaContextValue}>
      <BrowserRouter>{children}</BrowserRouter>
    </MediaContext.Provider>
  );
};

export default TestingContextAndRouterWrapper;
