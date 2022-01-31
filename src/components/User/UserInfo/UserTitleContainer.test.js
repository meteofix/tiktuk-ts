import { render, screen } from '@testing-library/react';
import TestingContextAndRouterWrapper from '../../../utils/testingContextAndRouterWrapper';
import VideoMusic from '../../Post/Video/VideoMusic';
import React from 'react';
import UserTitleContainer from './UserTitleContainer';

jest.mock('../../../UI/icons/UserVerifiedIcon', () => () => 'renders UserVerifiedIcon');
jest.mock('../../../UI/buttons/FollowButton', () => () => 'renders FollowButton');

describe('UserTitleContainer', () => {
  let uniqueId, verified, nickname;

  beforeEach(() => {
    nickname = 'Khabane lame';
    uniqueId = 'khaby.lame';
    verified = false;
  });

  describe('expect renders', () => {
    it('should render uniqueId', () => {
      render(
        <TestingContextAndRouterWrapper>
          <UserTitleContainer uniqueId={uniqueId} nickname={nickname} verified={verified} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByText(/khaby.lame/i)).toBeInTheDocument();
    });

    it('should render uniqueId with "@" when isMobile is true', () => {
      render(
        <TestingContextAndRouterWrapper isMobile={true}>
          <UserTitleContainer uniqueId={uniqueId} nickname={nickname} verified={verified} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByText(/@khaby.lame/i)).toBeInTheDocument();
    });

    it('should not render uniqueId with "@" when isMobile is false', () => {
      render(
        <TestingContextAndRouterWrapper>
          <UserTitleContainer uniqueId={uniqueId} nickname={nickname} verified={verified} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.queryByText(/@khaby.lame/i)).not.toBeInTheDocument();
    });

    it('should render UserVerifiedIcon when verified is true', () => {
      verified = true;
      render(
        <TestingContextAndRouterWrapper>
          <UserTitleContainer uniqueId={uniqueId} nickname={nickname} verified={verified} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByText(/renders userverifiedicon/i)).toBeInTheDocument();
    });

    it('should render UserVerifiedIcon when verified is false', () => {
      render(
        <TestingContextAndRouterWrapper>
          <UserTitleContainer uniqueId={uniqueId} nickname={nickname} verified={verified} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.queryByText(/renders userverifiedicon/i)).not.toBeInTheDocument();
    });

    it('should render nickname when isDesktopOrTablet is true', () => {
      render(
        <TestingContextAndRouterWrapper isDesktopOrTablet={true}>
          <UserTitleContainer uniqueId={uniqueId} nickname={nickname} verified={verified} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByText(/khabane lame/i)).toBeInTheDocument();
    });

    it('should not render nickname when isDesktopOrTablet is false', () => {
      render(
        <TestingContextAndRouterWrapper>
          <UserTitleContainer uniqueId={uniqueId} nickname={nickname} verified={verified} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.queryByText(/khabane lame/i)).not.toBeInTheDocument();
    });

    it('should render FollowButton when isDesktopOrTablet is true', () => {
      render(
        <TestingContextAndRouterWrapper isDesktopOrTablet={true}>
          <UserTitleContainer uniqueId={uniqueId} nickname={nickname} verified={verified} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByText(/renders followbutton/i)).toBeInTheDocument();
    });

    it('should not render FollowButton when isDesktopOrTablet is false', () => {
      render(
        <TestingContextAndRouterWrapper>
          <UserTitleContainer uniqueId={uniqueId} nickname={nickname} verified={verified} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.queryByText(/renders followbutton/i)).not.toBeInTheDocument();
    });
  });

  describe('expect classNames', () => {
    it('elements should have mobile className when isMobile is true', () => {
      render(
        <TestingContextAndRouterWrapper isMobile={true}>
          <UserTitleContainer uniqueId={uniqueId} nickname={nickname} verified={verified} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByTestId('userTitleContainer')).toHaveClass('userTitleContainerMobile');
      expect(screen.getByTestId('userTitle')).toHaveClass('userTitleMobile');
    });

    it('elements should not have mobile className when isMobile is false', () => {
      render(
        <TestingContextAndRouterWrapper>
          <UserTitleContainer uniqueId={uniqueId} nickname={nickname} verified={verified} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByTestId('userTitleContainer')).not.toHaveClass('userTitleContainerMobile');
      expect(screen.getByTestId('userTitle')).not.toHaveClass('userTitleMobile');
    });
  });
});
