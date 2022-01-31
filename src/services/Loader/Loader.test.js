import { render, screen } from '@testing-library/react';
import TestingContextAndRouterWrapper from '../../utils/testingContextAndRouterWrapper';
import VideoCompact from '../../components/User/UserFeed/VideoCompact';
import React from 'react';
import Loader from './Loader';

describe('Loader', () => {
  let small;

  beforeEach(() => {
    small = true;
  });
  describe('expect renders', () => {
    it('should renders loader', () => {
      render(
        <TestingContextAndRouterWrapper isMobile>
          <Loader />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByTestId('loader')).toBeInTheDocument();
    });
  });

  describe('expect classNames', () => {
    it('element loaderWrapper should have mobile className when isMobile is true', () => {
      render(
        <TestingContextAndRouterWrapper isMobile>
          <Loader />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByTestId('loaderWrapper')).toHaveClass('loaderWrapperMobile');
    });

    it('element loaderWrapper should not not have mobile className when isMobile is false', () => {
      render(
        <TestingContextAndRouterWrapper isMobile={false}>
          <Loader />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.queryByTestId('loaderWrapper')).not.toHaveClass('loaderWrapperMobile');
    });

    it('element loader should have "small" className when small is true', () => {
      render(
        <TestingContextAndRouterWrapper isMobile>
          <Loader small={small} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByTestId('loader')).toHaveClass('loaderSmall');
    });

    it('element loaderWrapper should not not have mobile className when isMobile is false', () => {
      render(
        <TestingContextAndRouterWrapper isMobile={false}>
          <Loader />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.queryByTestId('loader')).not.toHaveClass('loaderSmall');
    });
  });
});
