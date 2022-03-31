import { render, screen } from '@testing-library/react';
import React from 'react';
import TestingContextAndRouterWrapper from '../../../utils/testingContextAndRouterWrapper';
import Avatar from './Avatar';

describe('Avatar', () => {
  let nickname, avatar;
  beforeEach(() => {
    nickname = 'Khabane lame';
    avatar = 'https://link-to-avatar.com';
  });
  describe('expect renders', () => {
    it('should render image with "nickname" in alt', () => {
      render(
        <TestingContextAndRouterWrapper isMobile>
          <Avatar nickname={nickname} avatar={avatar} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByAltText(/khabane lame tiktuk/i)).toBeInTheDocument();
    });
  });
});
