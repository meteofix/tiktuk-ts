import { render, screen } from '@testing-library/react';
import TestingContextAndRouterWrapper from '../../utils/testingContextAndRouterWrapper';
import VideoContainer from '../Post/Video/VideoContainer';
import UserMain from './UserMain';
import React from 'react';

jest.mock('../../json/user-feed.json', () => ({ itemList: 'itemList' }));
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
        <TestingContextAndRouterWrapper isMobile={true}>
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
        <TestingContextAndRouterWrapper isDesktopOrTablet={true}>
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

  /** disabled after switching from css modules to styled components */
  // describe('expect classNames', () => {
  //   it('elements should have mobile className when isMobile is true', () => {
  //     render(
  //       <TestingContextAndRouterWrapper isMobile>
  //         <UserMain user={user} />
  //       </TestingContextAndRouterWrapper>
  //     );
  //
  //     expect(screen.getByTestId('userMain')).toHaveClass('userMainMobile');
  //     expect(screen.getByTestId('videoFeedTab')).toHaveClass('videoFeedTabMobile');
  //   });
  //
  //   it('elements should not have mobile className when isMobile is false', () => {
  //     render(
  //       <TestingContextAndRouterWrapper>
  //         <UserMain user={user} />
  //       </TestingContextAndRouterWrapper>
  //     );
  //
  //     expect(screen.queryByTestId('userMain')).not.toHaveClass('userMainMobile');
  //     expect(screen.queryByTestId('videoFeedTab')).not.toHaveClass('videoFeedTabMobile');
  //   });
  //
  //   it('elements should have mobile className when isMobile is true and isDesktopOrTablet is true', () => {
  //     render(
  //       <TestingContextAndRouterWrapper isMobile isDesktopOrTablet={true}>
  //         <UserMain user={user} />
  //       </TestingContextAndRouterWrapper>
  //     );
  //
  //     expect(screen.getByTestId('bottomLine')).toHaveClass('bottomLineMobile');
  //   });
  //
  //   it('elements should not have mobile className when isMobile is false and isDesktopOrTablet is true', () => {
  //     render(
  //       <TestingContextAndRouterWrapper isDesktopOrTablet={true}>
  //         <UserMain user={user} />
  //       </TestingContextAndRouterWrapper>
  //     );
  //
  //     expect(screen.queryByText('bottomLine')).not.toBeInTheDocument();
  //   });
  // });
});
