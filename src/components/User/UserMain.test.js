import { render, screen } from '@testing-library/react';
import TestingContextAndRouterWrapper from '../../utils/testingContextAndRouterWrapper';
import UserMain from './UserMain';
import React from 'react';

jest.mock('../../json/userFeed.json', () => ({ itemList: 'itemList' }));
jest.mock('../../UI/icons/VideosIcon', () => () => 'renders VideosIcon');
jest.mock('../../UI/icons/LikedIcon', () => () => 'renders LikedIcon');
jest.mock('../../UI/icons/LockedIcon', () => () => 'renders LockedIcon');
jest.mock('./UserFeed/LikesLockedPage', () => () => 'renders LikesLockedPage');
jest.mock(
  '../../services/UserFeedPostsMapper',
  () =>
    ({ posts }) =>
      `renders ${posts}`
);

describe('UserMain', () => {
  let user, userFeed;

  beforeEach(() => {
    user = 'user';
    userFeed = { itemList: 'itemList' };
  });

  describe('expect render', () => {
    it('should render components when isMobile is true', () => {
      render(
        <TestingContextAndRouterWrapper isMobile>
          <UserMain user={user} userFeed={userFeed} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByText(/renders videosicon/i)).toBeInTheDocument();
      expect(screen.getByText(/renders likedicon/i)).toBeInTheDocument();
    });

    it('should not render components when isMobile is false', () => {
      render(
        <TestingContextAndRouterWrapper>
          <UserMain user={user} userFeed={userFeed} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.queryByText(/renders videosicon/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/renders likedicon/i)).not.toBeInTheDocument();
    });

    it('should render when isDesktopOrTablet is true', () => {
      render(
        <TestingContextAndRouterWrapper isDesktopOrTablet>
          <UserMain user={user} userFeed={userFeed} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByText(/videos/i)).toBeInTheDocument();
      expect(screen.getByText(/liked/i)).toBeInTheDocument();
      expect(screen.getByText(/renders lockedicon/i)).toBeInTheDocument();
      expect(screen.getByTestId('bottomLine')).toBeInTheDocument();
    });

    it('should not render when isDesktopOrTablet is false', () => {
      render(
        <TestingContextAndRouterWrapper>
          <UserMain user={user} userFeed={userFeed} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.queryByText(/videos/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/liked/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/renders lockedicon/i)).not.toBeInTheDocument();
      expect(screen.queryByText('bottomLine')).not.toBeInTheDocument();
    });

    it('should render UserFeedPostsMapper', () => {
      render(
        <TestingContextAndRouterWrapper>
          <UserMain user={user} userFeed={userFeed} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByText(/itemlist/i)).toBeInTheDocument();
    });
  });
});
