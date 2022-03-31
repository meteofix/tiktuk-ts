import { render, screen } from '@testing-library/react';
import React from 'react';
import TestingContextAndRouterWrapper from '../../utils/testingContextAndRouterWrapper';
import UserHeader from './UserHeader';

jest.mock('../../utils/removeProtocolPrefixFromUrl', () => (link) => link);
jest.mock('./UserInfo/Avatar', () => () => 'renders Avatar');
jest.mock('./UserInfo/UserTitle', () => () => 'renders UserTitle');
jest.mock(
  './UserInfo/Counter',
  () =>
    ({ title }) =>
      `renders Counter with title ${title}`
);
jest.mock('../../UI/buttons/FollowButton', () => () => 'renders FollowButton');

describe('UserHeader', () => {
  let userInfo;

  beforeEach(() => {
    userInfo = {
      user: {
        uniqueId: 'khaby.lame',
        nickname: 'Khabane lame',
        bioLink: {
          link: 'https://khabyshop.com',
        },
        avatarMedium: 'https://link-to-avatar.com',
        verified: false,
        signature:
          'Se vuoi ridere sei nel posto giusto😎 \nIf u wanna laugh u r in the right place😎',
      },
      stats: {
        followerCount: 120_400_000,
        followingCount: 63,
        heartCount: 1_900_000_000,
      },
    };
  });

  describe('expect renders', () => {
    /** need move to navbar? tests */
    // it('should render nickname and uniqueId when isMobile is true', () => {
    //   render(
    //     <TestingContextAndRouterWrapper isMobile>
    //       <UserHeader userInfo={userInfo} />
    //     </TestingContextAndRouterWrapper>
    //   );
    //   expect(screen.getByText(/khabane lame | khaby.lame /i)).toBeInTheDocument();
    // });
    //
    // it('should not render nickname and uniqueId when isMobile is false', () => {
    //   render(
    //     <TestingContextAndRouterWrapper>
    //       <UserHeader userInfo={userInfo} />
    //     </TestingContextAndRouterWrapper>
    //   );
    //   expect(screen.queryByText(/khabane lame | khaby.lame /i)).not.toBeInTheDocument();
    // });

    it('should render components ', () => {
      render(
        <TestingContextAndRouterWrapper>
          <UserHeader userInfo={userInfo} />
        </TestingContextAndRouterWrapper>
      );
      expect(screen.getByText(/renders avatar/i)).toBeInTheDocument();
      expect(screen.getByText(/renders usertitle/i)).toBeInTheDocument();
      expect(screen.getByText(/renders counter with title following/i)).toBeInTheDocument();
      expect(screen.getByText(/renders counter with title followers/i)).toBeInTheDocument();
      expect(screen.getByText(/renders counter with title likes/i)).toBeInTheDocument();
    });

    it('should render FollowButton when isMobile is true ', () => {
      render(
        <TestingContextAndRouterWrapper isMobile={true}>
          <UserHeader userInfo={userInfo} />
        </TestingContextAndRouterWrapper>
      );
      expect(screen.getByText(/renders followbutton/i)).toBeInTheDocument();
    });

    it('should not render FollowButton when isMobile is false ', () => {
      render(
        <TestingContextAndRouterWrapper>
          <UserHeader userInfo={userInfo} />
        </TestingContextAndRouterWrapper>
      );
      expect(screen.queryByText(/renders followbutton/i)).not.toBeInTheDocument();
    });

    it('should render user description', () => {
      render(
        <TestingContextAndRouterWrapper>
          <UserHeader userInfo={userInfo} />
        </TestingContextAndRouterWrapper>
      );
      expect(screen.getByText(/se vuoi ridere/i)).toBeInTheDocument();
    });

    it('should render removeProtocolPrefixFromUrl with "link" prop', () => {
      render(
        <TestingContextAndRouterWrapper>
          <UserHeader userInfo={userInfo} />
        </TestingContextAndRouterWrapper>
      );
      expect(screen.getByText(/khabyshop.com/i)).toBeInTheDocument();
    });
  });
});
