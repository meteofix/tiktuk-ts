import { render, screen } from '@testing-library/react';
import TestingContextAndRouterWrapper from '../../../utils/testingContextAndRouterWrapper';
import React from 'react';
import Counter from './Counter';

jest.mock('../../../utils/countRound', () => (count) => count);

describe('Counter', () => {
  let title, count;
  beforeEach(() => {
    title = 'Following';
    count = 63;
  });

  describe('expect renders', () => {
    it('should render title', () => {
      render(
        <TestingContextAndRouterWrapper>
          <Counter title={title} count={count} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByText(/following/i)).toBeInTheDocument();
    });
    it('should render data from mocked countRound, called with "count" prop ', () => {
      render(
        <TestingContextAndRouterWrapper>
          <Counter title={title} count={count} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByText('63')).toBeInTheDocument();
    });
  });
});
