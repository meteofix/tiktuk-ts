import React from 'react';
import { render, screen } from '@testing-library/react';
import TestingContextAndRouterWrapper from '../../../utils/testingContextAndRouterWrapper';
import VideoContainer from './VideoContainer';

jest.mock(
  '../../../services/VideoPlayer',
  () =>
    ({ url }) =>
      url
);
jest.mock('../../../services/windowFocusHandler', () => () => 'renders windowFocusHandler');
jest.mock('../../../UI/buttons/PlayPauseButton', () => () => 'renders PlayPauseButton');
jest.mock('../../../UI/buttons/VolumeButton', () => () => 'renders VolumeButton');
jest.mock('../Author/AuthorAvatar', () => () => 'renders AuthorAvatar');
jest.mock('../../../hooks/useVisibility', () => () => '');
jest.mock('../../../services/Loader/Loader', () => () => 'renders Loader');
jest.mock(
  '../../../services/CounterBar/CounterItem',
  () =>
    ({ count, type }) =>
      `${type} ${count}`
);

describe('VideoContainer', () => {
  let post;
  let id;
  const handlePlayPause = jest.fn();
  beforeEach(() => {
    post = {
      authorMeta: {
        name: 'kikakiim',
        avatar: 'https://url-for-avatar.com',
      },
      covers: {
        default: 'https://url-for-default-cover.com',
        dynamic: 'https://url-for-dynamic-cover.com',
      },
      videoUrl: 'https://url-for-video.com',
      diggCount: 1_200_000,
      shareCount: 6543,
      commentCount: 8064,
    };
    id = 1;
  });

  describe('expect render', () => {
    /** disabled because the app uses mocked data instead of api */
    // it('should VideoPlayer calls with "url" prop', () => {
    //   render(
    //     <TestingContextAndRouterWrapper>
    //       <VideoContainer post={post} id={id} />
    //     </TestingContextAndRouterWrapper>
    //   );
    //
    //   expect(screen.getByText(/url-for-video/i));
    // });

    it('should CounterItem renders', () => {
      render(
        <TestingContextAndRouterWrapper>
          <VideoContainer post={post} id={id} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByText(/like 120{5}/i)).toBeInTheDocument();
      expect(screen.getByText(/comment 8064/i)).toBeInTheDocument();
      expect(screen.getByText(/share 6543/i)).toBeInTheDocument();
    });

    it('should render components', () => {
      render(
        <TestingContextAndRouterWrapper>
          <VideoContainer post={post} id={id} />
        </TestingContextAndRouterWrapper>
      );
      expect(screen.getByText(/downloading/i)).toBeInTheDocument();
      expect(screen.getByText(/renders playpausebutton/i)).toBeInTheDocument();
      expect(screen.getByText(/renders volumebutton/i)).toBeInTheDocument();
      expect(screen.getByText(/renders windowfocushandler/i)).toBeInTheDocument();
    });

    it('should render AuthorAvatar when isMobile is true', () => {
      render(
        <TestingContextAndRouterWrapper isMobile>
          <VideoContainer post={post} id={id} />
        </TestingContextAndRouterWrapper>
      );
      expect(screen.getByText(/renders authoravatar/i)).toBeInTheDocument();
    });

    it('should not render AuthorAvatar when isMobile is false', () => {
      render(
        <TestingContextAndRouterWrapper>
          <VideoContainer post={post} id={id} />
        </TestingContextAndRouterWrapper>
      );
      expect(screen.queryByText(/renders authoravatar/i)).not.toBeInTheDocument();
    });
  });

  describe('expect classNames', () => {
    it('elements should have mobile className when isMobile is true', () => {
      render(
        <TestingContextAndRouterWrapper isMobile>
          <VideoContainer post={post} id={id} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByTestId('videoWrapper')).toHaveClass('videoWrapperMobile');
      expect(screen.getByTestId('playBar')).toHaveClass('playBarMobile');
      expect(screen.getByTestId('counterBar')).toHaveClass('counterBarMobile');
    });

    it('elements should not have mobile className when isMobile is false', () => {
      render(
        <TestingContextAndRouterWrapper>
          <VideoContainer post={post} id={id} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.queryByTestId('videoWrapper')).not.toHaveClass('videoWrapperMobile');
      expect(screen.queryByTestId('playBar')).not.toHaveClass('playBarMobile');
      expect(screen.queryByTestId('counterBar')).not.toHaveClass('counterBarMobile');
    });
  });
});
