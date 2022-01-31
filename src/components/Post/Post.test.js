import React from 'react';
import { render, screen } from '@testing-library/react';
import TestingContextAndRouterWrapper from '../../utils/testingContextAndRouterWrapper';
import Post from './Post';

jest.mock('./Author/AuthorAvatar', () => () => 'renders AuthorAvatar');
jest.mock('./Author/AuthorInfo', () => () => 'renders AuthorInfo');
jest.mock('./Video/VideoMeta', () => () => 'renders VideoMeta');
jest.mock('./Video/VideoMusic', () => () => 'renders VideoMusic');
jest.mock('./Video/VideoContainer', () => () => 'renders VideoContainer');
jest.mock('../../UI/buttons/FollowButton', () => () => 'renders FollowButton');

describe('Post', () => {
  let post;
  let id;

  beforeEach(() => {
    post = {
      authorMeta: {
        name: 'kikakiim',
      },
    };
    id = 1;
  });

  describe('expect renders', () => {
    it('should render components', () => {
      render(
        <TestingContextAndRouterWrapper>
          <Post post={post} id={id} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByText(/renders authorinfo/i)).toBeInTheDocument();
      expect(screen.getByText(/renders videometa/i)).toBeInTheDocument();
      expect(screen.getByText(/renders videomusic/i)).toBeInTheDocument();
      expect(screen.getByText(/renders videocontainer/i)).toBeInTheDocument();
    });

    it('should render components if isDesktopOrTablet is true', () => {
      render(
        <TestingContextAndRouterWrapper isDesktopOrTablet={true}>
          <Post post={post} id={id} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByText(/renders authoravatar/i)).toBeInTheDocument();
      expect(screen.getByText(/renders followbutton/i)).toBeInTheDocument();
    });
    it('should not render components if isDesktopOrTablet is false', () => {
      render(
        <TestingContextAndRouterWrapper>
          <Post post={post} id={id} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.queryByText(/renders authoravatar/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/renders followbutton/i)).not.toBeInTheDocument();
    });
  });

  describe('expect classNames', () => {
    it('elements should have mobile className when isMobile is true', () => {
      render(
        <TestingContextAndRouterWrapper isMobile={true}>
          <Post post={post} id={id} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByTestId('postWrapper')).toHaveClass('postWrapperMobile');
      expect(screen.getByTestId('postContent')).toHaveClass('postContentMobile');
      expect(screen.getByTestId('mobile')).toHaveClass('mobile');
    });

    it('elements should not have mobile className when isMobile is false', () => {
      render(
        <TestingContextAndRouterWrapper>
          <Post post={post} id={id} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByTestId('postWrapper')).not.toHaveClass('postWrapperMobile');
      expect(screen.getByTestId('postContent')).not.toHaveClass('postContentMobile');
      expect(screen.getByTestId('mobile')).not.toHaveClass('mobile');
    });
  });
});
