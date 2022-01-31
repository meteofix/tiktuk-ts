import { render, screen } from '@testing-library/react';
import TestingContextAndRouterWrapper from '../../../utils/testingContextAndRouterWrapper';
import VideoMusic from '../../Post/Video/VideoMusic';
import React from 'react';
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
        <TestingContextAndRouterWrapper isMobile={true}>
          <Avatar nickname={nickname} avatar={avatar} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByAltText(/khabane lame tiktuk/i)).toBeInTheDocument();
    });
  });

  describe('expect classNames', () => {
    it('elements should have mobile className when isMobile is true', () => {
      render(
        <TestingContextAndRouterWrapper isMobile={true}>
          <Avatar nickname={nickname} avatar={avatar} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByTestId('tiktokAvatar')).toHaveClass('tiktokAvatarMobile');
    });

    it('elements should not have mobile className when isMobile is false', () => {
      render(
        <TestingContextAndRouterWrapper>
          <Avatar nickname={nickname} avatar={avatar} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByTestId('tiktokAvatar')).not.toHaveClass('tiktokAvatarMobile');
    });
  });
});
