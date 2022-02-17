import React, {ReactNode, useMemo} from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import {IMediaContext, MediaContext} from '../store/contexts/MediaContext';

type TestingContextAndRouterWrapperProps = {
    isDesktopOrTablet?: boolean,
    isMobile?: boolean,
    children: ReactNode
}

const TestingContextAndRouterWrapper = ({ isDesktopOrTablet = false, isMobile = false, children }: TestingContextAndRouterWrapperProps) => {
  const MediaContextValue:IMediaContext = useMemo(() => ({ isDesktopOrTablet, isMobile }), [isDesktopOrTablet, isMobile]);
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
