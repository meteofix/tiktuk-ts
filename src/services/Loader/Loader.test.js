import { render, screen } from '@testing-library/react';
import React from 'react';
import TestingContextAndRouterWrapper from '../../utils/testingContextAndRouterWrapper';
import Loader from './Loader';

describe('Loader', () => {
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
});
