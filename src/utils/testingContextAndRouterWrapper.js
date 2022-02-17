import React, { useMemo } from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { MediaContext } from '../store/contexts/MediaContext';

const TestingContextAndRouterWrapper = ({ isDesktopOrTablet = false, isMobile = false, children }) => {
  const MediaContextValue = useMemo(() => ({ isDesktopOrTablet, isMobile }), [isDesktopOrTablet, isMobile]);
  const history = createMemoryHistory();

  return (
    <MediaContext.Provider value={MediaContextValue}>
      <Router location={history.location} navigator={history}>
        {children}
      </Router>
    </MediaContext.Provider>
  );
};

export default TestingContextAndRouterWrapper;
