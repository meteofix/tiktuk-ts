import { render, screen } from '@testing-library/react';
import React from 'react';
import TestingContextAndRouterWrapper from '../../../utils/testingContextAndRouterWrapper';
import LikesLockedPage from './LikesLockedPage';

// jest.spyOn(React, 'useState').mockImplementationOnce(() => realUseState('stub data'));

describe('LikesLockedPage', () => {
  let user;

  beforeEach(() => {
    user = 'khaby.lame';
  });

  describe('expect renders', () => {
    it('should render lockIcon ', () => {
      render(
        <TestingContextAndRouterWrapper>
          <LikesLockedPage user={user} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByAltText('lockIcon')).toBeInTheDocument();
    });

    it('should render text with "user" ', () => {
      render(
        <TestingContextAndRouterWrapper>
          <LikesLockedPage user={user} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByText(/videos are private/i)).toBeInTheDocument();
      expect(screen.getByText(/liked by khaby.lame/i)).toBeInTheDocument();
    });
  });
});
